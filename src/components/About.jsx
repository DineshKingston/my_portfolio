import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Code2, Server, Cpu } from 'lucide-react';

const About = () => {
  const { personal } = portfolioData;
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="section-container">
        {/* Heading */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">About Me</div>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Passionate developer building solutions with modern technologies
          </p>
        </div>

        {/* Layout: Info left, Image right */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center mb-16 about-grid">

          {/* Left — content */}
          <div className="reveal-left space-y-6">
            <div className="flex flex-col gap-5 relative group">
              {/* Connecting glowing line */}
              <div className="absolute left-[20px] sm:left-[24px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-600/80 via-violet-500/40 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)] z-0" />
              
              {/* Overview / Bio block */}
              <div className="relative pl-[54px] sm:pl-[64px] z-10 transition-transform duration-300 hover:translate-x-1">
                {/* Node */}
                <div className="absolute left-[14px] sm:left-[18px] top-5 w-[14px] h-[14px] rounded-full bg-white border-[3px] border-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <div className="glass-card p-5 border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-lg">
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[0.95rem] sm:text-base">
                    {personal.bio}
                  </p>
                </div>
              </div>

              {/* Stack block */}
              <div className="relative pl-[54px] sm:pl-[64px] z-10 transition-transform duration-300 hover:translate-x-1">
                {/* Node */}
                <div className="absolute left-[14px] sm:left-[18px] top-5 w-[14px] h-[14px] rounded-full bg-white border-[3px] border-violet-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                <div className="glass-card p-5 border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-lg flex gap-4 items-start">
                  <Code2 size={24} className="text-violet-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[0.95rem] sm:text-base">
                    I specialize in building modern web applications using <span className="text-slate-900 font-medium">React, Spring Boot, and FastAPI</span>. My passion lies in crafting efficient, scalable backend systems while delivering intuitive frontend experiences.
                  </p>
                </div>
              </div>

              {/* IoT / AI block */}
              <div className="relative pl-[54px] sm:pl-[64px] z-10 transition-transform duration-300 hover:translate-x-1">
                {/* Node */}
                <div className="absolute left-[14px] sm:left-[18px] top-5 w-[14px] h-[14px] rounded-full bg-white border-[3px] border-violet-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                <div className="glass-card p-5 border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-lg flex gap-4 items-start">
                  <Cpu size={24} className="text-violet-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[0.95rem] sm:text-base">
                    From AI-powered document agents to real-time IoT systems with Raspberry Pi — I enjoy working across the full stack and exploring new frontiers in technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 pl-[54px] sm:pl-[64px]">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-semibold shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <MapPin size={16} />
                {personal.location}
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="reveal-right flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative w-72 h-85 rounded-[2rem] overflow-hidden border-2 border-slate-200 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                <img
                  src="/dinesh-photo.jpg"
                  alt="Dinesh Kingston S"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Dinesh";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {personal.stats.map(({ label, value }) => (
            <div key={label} className="stat-card p-5 border-slate-200">
              <div style={{ fontSize: '1.8rem', fontWeight: 800 }} className="gradient-text-crown font-mono mb-1">
                {value}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="reveal mt-12 bg-slate-50 border-slate-200 p-8 rounded-3xl border border-slate-200">
          <h3 className="text-slate-900 font-bold mb-6 text-xl">Interests & Focus Areas</h3>
          <div className="flex flex-wrap gap-3">
            {personal.interests.map((interest) => (
              <span
                key={interest}
                className="px-5 py-2 rounded-full border border-blue-500/20 bg-blue-600/5 text-blue-600 text-sm font-medium hover:bg-blue-600/10 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid { display: grid !important; grid-template-columns: 1.3fr 0.7fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
