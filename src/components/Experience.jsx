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
        <div className="relative pl-6 sm:pl-12 max-w-[800px] mx-auto">
          {/* vertical line */}
          <div className="timeline-line sm:left-[20px] left-[10px]" />

          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className="reveal-left relative mb-12 last:mb-0"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* dot */}
              <div
                className="timeline-dot absolute sm:left-[-21px] left-[-31px] top-0"
              >
                <Briefcase size={16} style={{ color: '#000' }} />
              </div>

              {/* Card */}
              <div 
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-5 sm:p-8 ml-2 sm:ml-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(34,211,238,0.1)]"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 mb-5">
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full text-[0.72rem] font-bold text-blue-600 tracking-wider uppercase mb-2">
                      {exp.type}
                    </div>
                    <h3 className="text-[1.1rem] font-bold text-[var(--text-primary)] mb-1">
                      {exp.role}
                    </h3>
                    <p className="gradient-text-crown text-[0.9rem] font-semibold">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-3 sm:gap-1.5 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-[0.82rem]">
                      <Calendar size={13} className="text-blue-600" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-[0.82rem]">
                      <MapPin size={13} className="text-blue-600" />
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
