import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">

        {/* Heading */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">Experience</div>
          <h2 className="section-title">Work & Internships</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real-world experience building IoT and AI systems
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '3rem', maxWidth: 800, margin: '0 auto' }}>
          {/* vertical line */}
          <div className="timeline-line" />

          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className="reveal-left"
              style={{
                transitionDelay: `${i * 0.15}s`,
                marginBottom: i < experience.length - 1 ? '3rem' : 0,
                position: 'relative',
              }}
            >
              {/* dot */}
              <div
                className="timeline-dot"
                style={{
                  position: 'absolute',
                  left: -21,
                  top: 0,
                }}
              >
                <Briefcase size={16} style={{ color: '#000' }} />
              </div>

              {/* Card */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                transition: 'var(--transition)',
                marginLeft: '1rem',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--glow-cyan)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
              >
                {/* Header row */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}>
                  <div>
                    <div style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(0,212,255,0.08)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      borderRadius: 100,
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.6rem',
                    }}>
                      {exp.type}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {exp.role}
                    </h3>
                    <p className="gradient-text-cyan" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                      {exp.company}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', alignItems: 'flex-end' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                      <Calendar size={13} />
                      {exp.duration}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                      <MapPin size={13} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', listStyle: 'none', padding: 0 }}>
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '0.15rem' }} />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
