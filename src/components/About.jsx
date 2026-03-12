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
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center mb-16 about-grid">

          {/* Left — content */}
          <div className="reveal-left space-y-6">
            <div className="glass-card p-8 border-white/5 bg-slate-900/40 relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl" />
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
                {personal.bio}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
                I specialize in building modern web applications using React, Spring Boot, and FastAPI. My passion lies in crafting efficient, scalable backend systems while delivering intuitive frontend experiences.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                From AI-powered document agents to real-time IoT systems with Raspberry Pi — I enjoy working across the full stack and exploring new frontiers in technology.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <MapPin size={20} className="text-cyan-400" />
                {personal.location}
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="reveal-right flex justify-center">
             <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative w-72 h-85 rounded-[2rem] overflow-hidden border-2 border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
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
            <div key={label} className="stat-card p-5 border-white/5">
              <div style={{ fontSize: '1.8rem', fontWeight: 800 }} className="gradient-text-cyan font-mono mb-1">
                {value}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="reveal mt-12 bg-slate-900/50 p-8 rounded-3xl border border-white/5">
          <h3 className="text-white font-bold mb-6 text-xl">Interests & Focus Areas</h3>
          <div className="flex flex-wrap gap-3">
            {personal.interests.map((interest) => (
              <span
                key={interest}
                className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-sm font-medium hover:bg-cyan-500/10 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1.3fr 0.7fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
