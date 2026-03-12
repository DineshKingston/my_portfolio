import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, Instagram, ArrowRight, Download } from 'lucide-react';

const TECH_BADGES = [
  { name: 'React', icon: '⚛️', color: 'rgba(6, 182, 212, 0.5)', delay: '0s', pos: { top: '25%', left: '1vw' } },
  { name: 'Spring Boot', icon: '🍃', color: 'rgba(34, 197, 94, 0.5)', delay: '0.2s', pos: { top: '25%', right: '1vw' } },
  { name: 'Python', icon: '🐍', color: 'rgba(234, 179, 8, 0.5)', delay: '0.4s', pos: { top: '50%', left: '0.5vw' } },
  { name: 'Docker', icon: '🐳', color: 'rgba(37, 99, 235, 0.5)', delay: '0.6s', pos: { top: '50%', right: '0.5vw' } },
  { name: 'AWS', icon: '☁️', delay: '0.8s', pos: { top: '75%', right: '1vw' } },
  { name: 'MongoDB', icon: '🍃', delay: '1s', pos: { top: '75%', left: '1vw' } },
];

const Hero = () => {
  const { personal, social } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personal.roles[roleIndex] || "";
    const typingSpeed = isDeleting ? 40 : 80; // Speed up slightly for snappier feel

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000); // Wait longer at the end of a line
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personal.roles.length);
      } else {
        setDisplayText(currentRole.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, personal.roles]);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden"
    >
      
      {/* Decorative Background Badges (Desktop) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        {TECH_BADGES.map((badge, idx) => (
          <div
            key={idx}
            className="hero-tech-badge absolute animate-float glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 border-white/5 shadow-2xl scale-90 xxl:scale-100"
            style={{ 
              ...badge.pos, 
              animationDelay: badge.delay,
              background: 'rgba(15, 23, 42, 0.3)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <span className="text-lg">{badge.icon}</span>
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">{badge.name}</span>
          </div>
        ))}
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          
          {/* Left Content */}
          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Availability Badge — Fixed double dot */}
            <div className="reveal mb-8 inline-flex">
              <div className="availability-badge">
                {personal.availability}
              </div>
            </div>

            {/* Name & Greeting */}
            <div className="reveal mb-6">
              <h2 className="text-xs sm:text-sm font-mono font-bold text-cyan-400 tracking-[0.25em] uppercase flex items-center gap-4">
                <span className="w-8 h-[1px] bg-cyan-400/20 hidden sm:block"></span>
                Hi, I'm <span className="shimmer-text text-white">Dinesh</span>
              </h2>
            </div>

            {/* Typewriter Header — reduced sizes */}
            <div className="reveal w-full">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1] min-h-[0.9em] flex flex-wrap items-center justify-center lg:justify-start gap-x-4">
                 <span className="text-slate-700 font-light">&gt;</span>
                 <span className="relative">
                   {displayText}
                   <span className="cursor-blink text-cyan-400 border-l-4 border-cyan-400 ml-1 h-[0.85em] inline-block align-middle"></span>
                 </span>
              </h1>
            </div>

            <p className="reveal text-slate-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
              {personal.bio}
            </p>

            {/* CTAs */}
            <div className="reveal flex flex-col sm:flex-row items-center gap-5 mb-12">
              <Link to="/projects" className="btn-primary group !px-8">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="/DineshKingston-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary !px-8">
                <Download size={20} />
                Resume
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="reveal flex items-center gap-4">
              <div className="flex items-center gap-3 p-2 rounded-full bg-slate-900/60 border border-white/5 backdrop-blur-sm shadow-xl">
                {[
                  { icon: Linkedin, href: social.linkedin, color: 'text-[#0ea5e9]' },
                  { icon: Github, href: social.github, color: 'text-white' },
                  { icon: Mail, href: social.email, color: 'text-[#00d4ff]' },
                  { icon: Instagram, href: social.instagram, color: 'text-[#ec4899]' },
                ].map(({ icon: Icon, href, color }, idx) => (
                  <a 
                    key={idx} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`social-btn group w-11 h-11 ${color}`}
                  >
                    <Icon size={20} className="group-hover:scale-120 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Profile Image (Large Desktop) */}
          <div className="reveal-right hidden lg:flex justify-end relative pr-4">
            <div className="relative group">
              {/* Outer Glows */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              
              {/* Background Frame */}
              <div className="absolute -top-6 -right-6 w-3/4 h-3/4 border-r-2 border-t-2 border-cyan-400/20 rounded-tr-[3rem] -z-1" />
              <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 border-l-2 border-b-2 border-purple-500/20 rounded-bl-[3rem] -z-1" />

              {/* Image Container */}
              <div className="relative w-[320px] h-[440px] xl:w-[380px] xl:h-[500px] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-cyan-400/30 group-hover:translate-y-[-8px]">
                <img 
                  src="/dinesh-photo.jpg" 
                  alt="Dinesh Kingston S" 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.01] group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Dinesh";
                  }}
                />

                {/* Glassy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Profile Badge Overlay */}
              <div className="absolute -bottom-4 -left-8 glass-card py-3 px-6 rounded-2xl border-white/10 shadow-huge animate-float">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-100 tracking-wider">AVAILABLE FOR PROJECTS</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent relative">
           <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
