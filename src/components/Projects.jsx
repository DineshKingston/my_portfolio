import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowArrow(scrollLeft + clientWidth < scrollWidth - 20);
    }
  };

  useEffect(() => {
    // Reset scroll when filter changes
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }

    // 1. General scroll reveal logic
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          if (window.innerWidth >= 768 || !e.target.classList.contains('project-card-wrapper')) {
            e.target.style.opacity = 1;
            e.target.style.transform = 'scale(1)';
          }
        }
      }),
      { threshold: 0.1 }
    );

    // 2. Mobile popout carousel logic
    const popoutObserver = new IntersectionObserver(
      (entries) => {
        if (window.innerWidth >= 768) return; // Only apply on mobile
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('mobile-active-card');
            e.target.classList.remove('mobile-inactive-card');
          } else {
            e.target.classList.add('mobile-inactive-card');
            e.target.classList.remove('mobile-active-card');
          }
        });
      },
      { 
        root: scrollRef.current,
        threshold: 0.55 // When a card is >55% visible within the scroll container, it's the center one
      }
    );

    const timer = setTimeout(() => {
      // Observe reveal
      sectionRef.current?.querySelectorAll('.reveal, .reveal-scale').forEach(el => observer.observe(el));
      
      // Observe mobile popout
      if (window.innerWidth < 768 && scrollRef.current) {
        scrollRef.current.querySelectorAll('.project-card-wrapper').forEach(el => {
          popoutObserver.observe(el);
          // Initial state before intersection fires
          el.classList.add('mobile-inactive-card'); 
        });
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      popoutObserver.disconnect();
    };
  }, [filter]);

  return (
    <section id="projects" ref={sectionRef} className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">

        {/* Heading */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">Projects</div>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A collection of projects showcasing AI, full-stack, and IoT development
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal filter-tabs-container">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-tab snap-start flex-shrink-0 ${filter === cat ? 'active' : ''}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Container with Swipe Indicator */}
        <div className="relative w-full">
          {/* Mobile Right Arrow Indicator */}
          {showArrow && (
            <div className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 z-20 md:hidden w-9 h-9 shadow-lg border border-slate-200 bg-white/95 backdrop-blur rounded-full flex items-center justify-center text-blue-600 pointer-events-none transition-opacity duration-300">
              <ArrowRight size={18} className="animate-swipe" />
            </div>
          )}

          {/* Project cards grid */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className={`projects-grid hide-scrollbar snap-x px-6 -mx-6 md:px-0 md:mx-0 py-4 ${filtered.length === 1 ? 'justify-center' : ''}`}
          >
            {filtered.map((project, i) => (
              <div
                key={`${project.id}-${filter}`}
                className="reveal-scale project-card-wrapper snap-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="reveal flex flex-col items-center mt-20 pb-12">
          <p className="text-slate-500 mb-6 text-sm font-semibold tracking-widest uppercase relative before:absolute before:w-12 before:h-[2px] before:bg-blue-200 before:-left-16 before:top-1/2 after:absolute after:w-12 after:h-[2px] after:bg-blue-200 after:-right-16 after:top-1/2">
            Curious to see more?
          </p>
          <a
            href="https://github.com/DineshKingston"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-slate-900 border-[3px] border-white shadow-[0_0_0_2px_theme(colors.slate.200)] hover:shadow-[0_0_0_2px_theme(colors.blue.500),0_15px_30px_-5px_theme(colors.blue.500/30)] hover:-translate-y-1.5 overflow-hidden transition-all duration-500 ease-out"
          >
            {/* Sliding highlight */}
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 delay-100" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span className="relative z-10 text-white font-bold text-base tracking-wide group-hover:text-white">Explore All on GitHub</span>
            
            {/* Pulsing rings */}
            <div className="absolute -inset-2 rounded-full border border-blue-600/0 group-hover:border-blue-600/50 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '2s' }} />
          </a>
        </div>
      </div>

      <style>{`
        .filter-tabs-container {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          overflow-x: auto;
          flex-wrap: nowrap;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          padding-bottom: 0.5rem;
        }
        .filter-tabs-container::-webkit-scrollbar {
          display: none;
        }
        .projects-grid {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 1.5rem;
          padding-bottom: 2rem;
          -webkit-overflow-scrolling: touch;
        }
        .projects-grid::-webkit-scrollbar {
          display: none;
        }
        @keyframes swipe {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-swipe {
          animation: swipe 1.5s ease-in-out infinite;
        }
        .project-card-wrapper {
          width: 72vw;
          min-width: 290px;
          max-width: 360px;
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease, filter 0.4s ease;
        }
        
        @media (max-width: 767px) {
          .mobile-active-card {
            transform: scale(1) translateY(0) !important;
            opacity: 1 !important;
            filter: blur(0) !important;
          }
          .mobile-inactive-card {
            transform: scale(0.85) translateY(10px) !important;
            opacity: 0.4 !important;
            filter: blur(1.5px) !important;
          }
        }

        @media (min-width: 640px) {
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr) !important;
            overflow-x: visible;
            padding-bottom: 0;
          }
          .project-card-wrapper {
            width: auto;
            max-width: none;
          }
          .filter-tabs-container {
            justify-content: center;
            flex-wrap: wrap;
            overflow-x: visible;
          }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
