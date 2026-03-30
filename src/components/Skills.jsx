import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Server, Database, Cloud, Terminal, Wrench, Sparkles, ArrowRight } from 'lucide-react';

const Skills = () => {
  const { skills } = portfolioData;
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  // Handle intersection animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.reveal-card');
    elements?.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  // Handle scroll to hide arrow when reaching the end on mobile
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Hide arrow when within 20px of the end
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    }
  };

  const SkillPill = ({ name }) => (
    <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-slate-50 border border-slate-200 rounded-full hover:bg-violet-50 hover:border-violet-200 hover:shadow-sm transition-all duration-300 cursor-default flex items-center justify-center text-slate-700 hover:text-violet-700 font-medium text-[13px] sm:text-sm">
      {name}
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden min-h-[85vh] flex flex-col justify-center">
      
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-blue-50/70 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-violet-50/70 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container relative z-10 w-full overflow-visible">
        
        {/* Header */}
        <div className="reveal-card opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-10 md:mb-16 hidden md:block">
          <div className="section-badge px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-100 font-semibold text-[13px] uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Core Competencies
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Technical Expertise</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base lg:text-lg px-4 hidden sm:block">
            A comprehensive overview of my technical stack, neatly organized.
          </p>
        </div>

        {/* Mobile Header Variant to save space and center perfectly */}
        <div className="reveal-card opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-8 md:hidden">
          <div className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-2">
            <Sparkles size={12} />
            Skills
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Expertise</h2>
        </div>

        {/* Swipe Viewer Container */}
        <div className="relative w-full pb-4">
          {/* Mobile Right Arrow Indicator */}
          {showArrow && (
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 md:hidden w-9 h-9 shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-slate-100 bg-white/95 backdrop-blur rounded-full flex items-center justify-center text-indigo-500 pointer-events-none transition-opacity duration-300">
              <ArrowRight size={18} className="animate-swipe" />
            </div>
          )}

          {/* Scrolling Grid */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 pb-2 md:pb-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory show-scroll-on-hover px-6 md:px-0 -mx-6 md:mx-0 md:items-start"
          >
            
            {/* Frontend */}
            <div className="flex-shrink-0 w-[72vw] sm:w-[320px] md:w-auto h-[360px] md:h-auto snap-center reveal-card opacity-0 translate-y-8 transition-all duration-1000 delay-100 bg-white border border-slate-200 rounded-[2rem] p-6 lg:p-7 shadow-lg shadow-slate-200/50 md:shadow-sm md:hover:shadow-xl relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/80 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100/80 transition-colors duration-700" />
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5 md:mb-6 relative z-10">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 shadow-sm inline-flex items-center justify-center w-max">
                  <Code2 size={24} />
                </div>
                <h3 className="text-[22px] md:text-xl font-bold text-slate-900 tracking-tight leading-tight">Frontend <span className="block md:inline">Development</span></h3>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {skills.frontend.map((skill) => (
                  <SkillPill key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="flex-shrink-0 w-[72vw] sm:w-[320px] md:w-auto h-[360px] md:h-auto snap-center reveal-card opacity-0 translate-y-8 transition-all duration-1000 delay-200 bg-white border border-slate-200 rounded-[2rem] p-6 lg:p-7 shadow-lg shadow-slate-200/50 md:shadow-sm md:hover:shadow-xl relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50/80 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-100/80 transition-colors duration-700" />
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5 md:mb-6 relative z-10">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-100 shadow-sm inline-flex items-center justify-center w-max">
                  <Server size={24} />
                </div>
                <h3 className="text-[22px] md:text-xl font-bold text-slate-900 tracking-tight leading-tight">Backend <span className="block md:inline">Development</span></h3>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {skills.backend.map((skill) => (
                  <SkillPill key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="flex-shrink-0 w-[72vw] sm:w-[320px] md:w-auto h-[360px] md:h-auto snap-center reveal-card opacity-0 translate-y-8 transition-all duration-1000 delay-300 bg-white border border-slate-200 rounded-[2rem] p-6 lg:p-7 shadow-lg shadow-slate-200/50 md:shadow-sm md:hover:shadow-xl relative overflow-hidden group flex flex-col">
               <div className="absolute top-0 right-0 w-48 h-48 bg-amber-50/80 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-100/80 transition-colors duration-700" />
               <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5 md:mb-6 relative z-10">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl border border-amber-100 shadow-sm inline-flex items-center justify-center w-max">
                  <Cloud size={24} />
                </div>
                <h3 className="text-[22px] md:text-xl font-bold text-slate-900 tracking-tight leading-tight">Cloud & <span className="block md:inline">DevOps</span></h3>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {skills.cloudDevops.map((skill) => (
                  <SkillPill key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="flex-shrink-0 w-[72vw] sm:w-[320px] md:w-auto h-[360px] md:h-auto snap-center reveal-card opacity-0 translate-y-8 transition-all duration-1000 delay-400 bg-white border border-slate-200 rounded-[2rem] p-6 lg:p-7 shadow-lg shadow-slate-200/50 md:shadow-sm md:hover:shadow-xl relative overflow-hidden group flex flex-col">
               <div className="absolute top-0 right-0 w-48 h-48 bg-pink-50/80 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-100/80 transition-colors duration-700" />
               <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5 md:mb-6 relative z-10">
                <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl border border-pink-100 shadow-sm inline-flex items-center justify-center w-max">
                  <Database size={24} />
                </div>
                <h3 className="text-[22px] md:text-xl font-bold text-slate-900 tracking-tight leading-tight">Data <span className="block md:inline">Systems</span></h3>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {skills.database.map((skill) => (
                  <SkillPill key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>

            {/* Languages & Tools */}
            <div className="flex-shrink-0 w-[72vw] sm:w-[320px] md:w-auto min-h-[360px] md:min-h-0 snap-center reveal-card opacity-0 translate-y-8 transition-all duration-1000 delay-500 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 lg:p-7 shadow-lg shadow-slate-200/50 md:shadow-sm md:hover:shadow-xl relative overflow-hidden group flex flex-col lg:col-span-2 xl:col-span-1">
               <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-100/80 pointer-events-none" />
               <div className="mb-5 md:mb-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-indigo-100/60 text-indigo-700 rounded-xl shadow-sm border border-indigo-100 inline-flex">
                    <Terminal size={18} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(lang => (
                    <span key={lang} className="text-[13px] font-semibold text-slate-700 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">{lang}</span>
                  ))}
                </div>
               </div>
               
               <div className="pt-5 border-t border-slate-200 relative z-10 mt-auto md:mt-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-fuchsia-100/60 text-fuchsia-700 rounded-xl shadow-sm border border-fuchsia-100 inline-flex">
                    <Wrench size={18} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight">Dev Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(tool => (
                    <span key={tool} className="text-[13px] font-semibold text-slate-700 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm hover:bg-fuchsia-50 hover:text-fuchsia-700 transition-colors whitespace-nowrap">{tool}</span>
                  ))}
                </div>
               </div>
            </div>

          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes swipe {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-swipe {
          animation: swipe 1.5s ease-in-out infinite;
        }
        .show-scroll-on-hover::-webkit-scrollbar {
          height: 0px; 
          background: transparent;
        }
        @media (max-width: 768px) {
          .show-scroll-on-hover {
            scroll-padding-left: 24px;
            scroll-padding-right: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
