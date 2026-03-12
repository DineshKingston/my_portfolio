import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  const { education, certifications, languages } = portfolioData;
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
    <section id="education" ref={sectionRef} className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">

        {/* Heading */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">Education</div>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Building a strong foundation in Computer Science
          </p>
        </div>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr' }} className="education-grid">

          {/* Education cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, i) => (
              <div
                key={edu.id}
                className="reveal-left glass-card"
                style={{
                  padding: '2rem',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* Icon + Degree */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: 'var(--glow-cyan)',
                    fontSize: '1.4rem',
                  }}>
                    {edu.icon}
                  </div>
                  <div>
                    <div style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.65rem',
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.25)',
                      borderRadius: 100,
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--accent-emerald)',
                      marginBottom: '0.4rem',
                    }}>
                      {edu.status}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                      {edu.degree}
                    </h3>
                    <p className="gradient-text-cyan" style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                      {edu.field}
                    </p>
                  </div>
                </div>

                {/* Info row */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
                    {edu.college}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                    {edu.university}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.25rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <Calendar size={13} /> {edu.duration}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <MapPin size={13} /> {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <div className="reveal-left" style={{ transitionDelay: '0.2s' }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
              }}>
                <h3 style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <Award size={14} />
                  Certifications & Training
                </h3>
                {certifications.map((cert) => (
                  <div key={cert.title} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem',
                    background: 'rgba(249,115,22,0.06)',
                    border: '1px solid rgba(249,115,22,0.15)',
                    borderRadius: 'var(--radius-sm)',
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        {cert.icon} {cert.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{cert.issuer}</div>
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#fb923c',
                      fontWeight: 600,
                    }}>
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages panel */}
          <div className="reveal-right" style={{ transitionDelay: '0.2s' }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <h3 style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                Languages
              </h3>

              {languages.map(({ name, level }) => (
                <div key={name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{name}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{level}</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: level === 'Native' ? '100%' : '85%' }}
                    />
                  </div>
                </div>
              ))}

              {/* Quick facts */}
              <div style={{
                marginTop: 'auto',
                padding: '1.25rem',
                background: 'rgba(0,212,255,0.03)',
                border: '1px solid rgba(0,212,255,0.1)',
                borderRadius: 'var(--radius-md)',
              }}>
                <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.75rem' }}>
                  Quick Facts
                </h4>
                {[
                  ['🎓', 'B.Tech CSE student (2022–2026)'],
                  ['📍', 'Tirunelveli, Tamil Nadu'],
                  ['💼', 'Open to full-time & internship roles'],
                  ['🚀', 'Always learning something new'],
                ].map(([icon, text]) => (
                  <div key={text} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .education-grid { grid-template-columns: 1.4fr 1fr !important; align-items: start; }
        }
      `}</style>
    </section>
  );
};

export default Education;
