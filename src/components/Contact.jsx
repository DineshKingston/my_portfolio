import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, Instagram, MapPin, Send } from 'lucide-react';

const SOCIAL_CARDS = [
  {
    key: 'github',
    label: 'GitHub',
    username: 'DineshKingston',
    icon: Github,
    color: '#0F172A',
    bg: 'rgba(15,23,42,0.05)',
    border: 'rgba(15,23,42,0.1)',
    hoverBg: 'rgba(15,23,42,0.09)',
    hoverBorder: 'rgba(15,23,42,0.2)',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    username: 'dinesh-kingston-s',
    icon: Linkedin,
    color: '#2563EB',
    bg: 'rgba(14,165,233,0.06)',
    border: 'rgba(14,165,233,0.15)',
    hoverBg: 'rgba(14,165,233,0.12)',
    hoverBorder: 'rgba(14,165,233,0.35)',
  },
  {
    key: 'email',
    label: 'Email',
    username: 'dineshkingston94@gmail.com',
    icon: Mail,
    color: '#3B82F6',
    bg: 'rgba(0,212,255,0.05)',
    border: 'rgba(0,212,255,0.15)',
    hoverBg: 'rgba(0,212,255,0.1)',
    hoverBorder: 'rgba(0,212,255,0.3)',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    username: '_b_lank_heart_dinesh_21',
    icon: Instagram,
    color: '#7C3AED',
    bg: 'rgba(236,72,153,0.05)',
    border: 'rgba(236,72,153,0.15)',
    hoverBg: 'rgba(236,72,153,0.1)',
    hoverBorder: 'rgba(236,72,153,0.3)',
  },
];

const Contact = () => {
  const { personal, social } = portfolioData;
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">

        {/* Heading */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">Contact</div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open to opportunities, collaborations, and interesting projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-[900px] mx-auto contact-grid">

          {/* Left — social cards */}
          <div className="reveal-left flex flex-col gap-3.5">
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
              Find Me On
            </h3>

            {SOCIAL_CARDS.map(({ key, label, username, icon: Icon, color, bg, border, hoverBg, hoverBorder }) => {
              const href = social[key] || '#';
              return (
                <a
                  key={key}
                  href={href}
                  target={key === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-4 rounded-[var(--radius-md)] no-underline transition-all duration-300 cursor-pointer text-inherit group"
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = hoverBg;
                    e.currentTarget.style.borderColor = hoverBorder;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = bg;
                    e.currentTarget.style.borderColor = border;
                  }}
                >
                  <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ background: `${color}15` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[0.9rem] text-[var(--text-primary)] mb-0.5">
                      {label}
                    </div>
                    <div className="text-[0.78rem] text-[var(--text-muted)] truncate whitespace-nowrap">
                      {username}
                    </div>
                  </div>
                  <Send size={14} className="text-[var(--text-muted)] flex-shrink-0 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}
          </div>

          {/* Right — info card */}
          <div className="reveal-right">
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-xl)] p-6 sm:p-8 relative overflow-hidden group">
              {/* Glow blob */}
              <div style={{
                position: 'absolute',
                top: -40,
                right: -40,
                width: 150,
                height: 150,
                background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />

              <div className="availability-badge mb-6">
                {personal.availability}
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mb-3">
                Ready to <span className="gradient-text-crown">collaborate?</span>
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-sm sm:text-[0.95rem]">
                I'm currently open to full-time developer roles and exciting internship opportunities. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you!
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm sm:text-[0.9rem]">
                  <Mail size={15} className="text-blue-600 flex-shrink-0" />
                  {personal.email}
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm sm:text-[0.9rem]">
                  <MapPin size={15} className="text-blue-600 flex-shrink-0" />
                  {personal.location}
                </div>
              </div>

              <a
                href={`mailto:${personal.email}`}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
              >
                <Mail size={18} />
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Media query removed since tailwind md:grid-cols-2 handles the tablet/desktop columns */
      `}</style>
    </section>
  );
};

export default Contact;
