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
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden"
    >

      {/* Decorative Background Badges (Desktop) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        {TECH_BADGES.map((badge, idx) => (
          <div
            key={idx}
            className="hero-tech-badge absolute animate-float glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 border-slate-200 shadow-2xl scale-90 xxl:scale-100"
            style={{
              ...badge.pos,
              animationDelay: badge.delay,
              background: 'rgba(15, 23, 42, 0.3)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <span className="text-lg">{badge.icon}</span>
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold text-slate-500 tracking-wider uppercase">{badge.name}</span>
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

            {/* Mobile/Tablet Profile Image */}
            <div className="reveal lg:hidden mb-8 relative group mx-auto w-36 h-40 sm:w-44 sm:h-48">
              <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-[2rem] scale-110 -z-10 transition-transform duration-500 group-hover:scale-125" />
              <div className="relative w-full h-full rounded-[2rem] bg-transparent overflow-hidden shadow-2xl z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <img
                  src="/dinesh-photo.jpg"
                  alt="Dinesh Kingston S"
                  className="w-full h-full object-cover grayscale-[15%] bg-transparent"
                  onError={(e) => {
                    e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Dinesh";
                  }}
                />
              </div>
            </div>

            {/* Name & Greeting */}
            <div className="reveal mb-6">
              <h2 className="text-xs sm:text-sm font-mono font-bold text-blue-600 tracking-[0.25em] uppercase flex items-center gap-4">
                <span className="w-8 h-[1px] bg-blue-600/20 hidden sm:block"></span>
                Hi, I'm <span className="shimmer-text text-slate-900">Dinesh</span>
              </h2>
            </div>

            {/* Typewriter Header — reduced sizes */}
            <div className="reveal w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1] min-h-[0.9em] flex flex-wrap items-center justify-center lg:justify-start gap-x-3 sm:gap-x-4">
                <span className="text-slate-700 font-light">&gt;</span>
                <span className="relative">
                  {displayText}
                  <span className="cursor-blink text-blue-600 border-l-[3px] sm:border-l-4 border-blue-500 ml-1 h-[0.85em] inline-block align-middle"></span>
                </span>
              </h1>
            </div>

            {/* Sleek Bio Callout */}
            <div className="reveal relative mb-10 w-full max-w-xl group">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-600 to-blue-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
              <div className="pl-6 py-3 bg-gradient-to-r from-blue-600/5 to-transparent rounded-r-xl border border-slate-200 border-l-0 transition-colors duration-500 group-hover:bg-blue-600/10">
                <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                  {personal.bio}
                </p>
              </div>
            </div>

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
              <div className="flex items-center gap-3 p-2 rounded-full bg-slate-50 border border-slate-200 backdrop-blur-sm shadow-xl">
                {[
                  { icon: Linkedin, href: social.linkedin, color: 'text-[#2563EB]' },
                  { icon: Github, href: social.github, color: 'text-slate-900' },
                  { icon: Mail, href: social.email, color: 'text-[#3B82F6]' },
                  { icon: Instagram, href: social.instagram, color: 'text-[#7C3AED]' },
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
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/10 via-violet-500/10 to-violet-600/10 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Background Frame */}
              <div className="absolute -top-6 -right-6 w-3/4 h-3/4 border-r-2 border-t-2 border-blue-500/20 rounded-tr-[3rem] -z-1" />
              <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 border-l-2 border-b-2 border-violet-500/20 rounded-bl-[3rem] -z-1" />

              {/* Image Container */}
              <div className="relative w-[260px] h-[360px] xl:w-[300px] xl:h-[400px] rounded-[2.5rem] overflow-hidden bg-transparent shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:translate-y-[-8px]">
                <img
                  src="/dinesh-photo.jpg"
                  alt="Dinesh Kingston S"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.01] group-hover:scale-110 bg-transparent"
                  onError={(e) => {
                    e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Dinesh";
                  }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-blue-600 via-cyan-400/50 to-transparent relative">
          <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-blue-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
