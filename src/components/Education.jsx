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

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 education-grid">

          {/* Education cards */}
          <div className="flex flex-col gap-6">
            {education.map((edu, i) => (
              <div
                key={edu.id}
                className="reveal-left bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 sm:p-8"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Icon + Degree */}
                <div className="flex gap-4 items-start mb-5">
                  <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0 shadow-[var(--glow-cyan)] text-2xl text-slate-900">
                    {edu.icon}
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[0.7rem] font-bold text-emerald-400 mb-2">
                      {edu.status}
                    </div>
                    <h3 className="text-lg sm:text-[1.1rem] font-bold text-[var(--text-primary)] leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="gradient-text-crown font-semibold text-sm sm:text-[0.9rem] mt-1">
                      {edu.field}
                    </p>
                  </div>
                </div>

                {/* Info row */}
                <div className="flex flex-col gap-2 pt-4 border-t border-[var(--border)]">
                  <div className="text-[var(--text-secondary)] text-sm font-medium">
                    {edu.college}
                  </div>
                  <div className="text-[var(--text-muted)] text-[0.82rem]">
                    {edu.university}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <span className="flex items-center gap-2 text-[var(--text-muted)] text-xs sm:text-[0.8rem]">
                      <Calendar size={13} className="text-blue-600" /> {edu.duration}
                    </span>
                    <span className="flex items-center gap-2 text-[var(--text-muted)] text-xs sm:text-[0.8rem]">
                      <MapPin size={13} className="text-blue-600" /> {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <div className="reveal-left" style={{ transitionDelay: '0.2s' }}>
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6">
                <h3 className="text-[0.85rem] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Award size={14} />
                  Certifications & Training
                </h3>
                {certifications.map((cert) => (
                  <div key={cert.title} className="flex justify-between items-center p-3 mb-2 bg-orange-500/5 border border-orange-500/10 rounded-lg">
                    <div>
                      <div className="font-semibold text-sm sm:text-[0.9rem] text-[var(--text-primary)]">
                        {cert.icon} {cert.title}
                      </div>
                      <div className="text-[0.78rem] text-[var(--text-muted)]">{cert.issuer}</div>
                    </div>
                    <span className="text-xs font-mono text-orange-400 font-bold bg-orange-500/10 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages panel */}
          <div className="reveal-right" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 sm:p-8 h-full flex flex-col gap-6">
              <h3 className="text-[0.85rem] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                Languages
              </h3>

              <div className="flex flex-col gap-2.5">
                {languages.map(({ name, level }) => (
                  <div key={name} className="flex justify-between items-center p-3 sm:p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:bg-slate-50 hover:border-blue-200 transition-all duration-300">
                    <div className="font-semibold text-[0.95rem] text-[var(--text-primary)]">
                      {name}
                    </div>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
                      {level}
                    </div>
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
