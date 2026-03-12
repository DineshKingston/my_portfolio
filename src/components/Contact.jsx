import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, Instagram, MapPin, Send } from 'lucide-react';

const SOCIAL_CARDS = [
  {
    key: 'github',
    label: 'GitHub',
    username: 'DineshKingston',
    icon: Github,
    color: '#f0f6ff',
    bg: 'rgba(240,246,255,0.05)',
    border: 'rgba(240,246,255,0.1)',
    hoverBg: 'rgba(240,246,255,0.09)',
    hoverBorder: 'rgba(240,246,255,0.2)',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    username: 'dinesh-kingston-s',
    icon: Linkedin,
    color: '#0ea5e9',
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
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.05)',
    border: 'rgba(0,212,255,0.15)',
    hoverBg: 'rgba(0,212,255,0.1)',
    hoverBorder: 'rgba(0,212,255,0.3)',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    username: '_b_lank.heart_dinesh_21',
    icon: Instagram,
    color: '#ec4899',
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

        <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr', alignItems: 'start', maxWidth: 900, margin: '0 auto' }} className="contact-grid">

          {/* Left — social cards */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
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
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    background: bg,
                    border: `1px solid ${border}`,
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    color: 'inherit',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = hoverBg;
                    e.currentTarget.style.borderColor = hoverBorder;
                    e.currentTarget.style.transform = 'translateX(6px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = bg;
                    e.currentTarget.style.borderColor = border;
                    e.currentTarget.style.transform = '';
                  }}
                >
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${color}15`,
                    flexShrink: 0,
                  }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                      {label}
                    </div>
                    <div style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                      {username}
                    </div>
                  </div>
                  <Send size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                </a>
              );
            })}
          </div>

          {/* Right — info card */}
          <div className="reveal-right">
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
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

              <div className="availability-badge" style={{ marginBottom: '1.5rem' }}>
                {personal.availability}
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Ready to <span className="gradient-text-cyan">collaborate?</span>
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                I'm currently open to full-time developer roles and exciting internship opportunities. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <Mail size={15} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  {personal.email}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <MapPin size={15} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
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
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
