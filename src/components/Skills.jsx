import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Server, Database, Cloud } from 'lucide-react';

const TABS = [
  { id: 'frontend',    label: 'Frontend',     icon: Code2,    color: 'cyan',   barClass: '' },
  { id: 'backend',     label: 'Backend',      icon: Server,   color: 'purple', barClass: 'purple' },
  { id: 'database',    label: 'Database',     icon: Database, color: 'green',  barClass: 'green' },
  { id: 'cloudDevops', label: 'Cloud & DevOps',icon: Cloud,   color: 'orange', barClass: 'orange' },
];

const Skills = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('frontend');
  const [animated, setAnimated] = useState({});
  const sectionRef = useRef(null);
  const barsRef = useRef(null);

  // Scroll reveal for section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Animate bars when tab content is visible
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(prev => ({ ...prev, [activeTab]: true }));
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Trigger animation on initial scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(prev => ({ ...prev, [activeTab]: true }));
        }
      },
      { threshold: 0.2 }
    );
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, [activeTab]);

  const currentSkills = skills[activeTab] || [];
  const currentTab = TABS.find(t => t.id === activeTab);

  const colorMap = {
    cyan:   { bg: 'rgba(0,212,255,0.08)',   border: 'rgba(0,212,255,0.2)',   text: 'var(--accent-cyan)' },
    purple: { bg: 'rgba(139,92,246,0.08)',  border: 'rgba(139,92,246,0.2)',  text: '#c4b5fd' },
    green:  { bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.2)',  text: 'var(--accent-emerald)' },
    orange: { bg: 'rgba(249,115,22,0.08)',  border: 'rgba(249,115,22,0.2)',  text: '#fb923c' },
  };

  return (
    <section id="skills" ref={sectionRef} className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">

        {/* Heading */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">Technical Skills</div>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        {/* Tab switcher */}
        <div className="reveal" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center',
          marginBottom: '2.5rem',
        }}>
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`filter-tab ${activeTab === id ? 'active' : ''}`}
            >
              <Icon size={14} style={{ display: 'inline-block', marginRight: 6, verticalAlign: 'middle' }} />
              {label}
            </button>
          ))}
        </div>

        {/* Skills bars */}
        <div className="reveal-scale" ref={barsRef} style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          marginBottom: '2.5rem',
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: colorMap[currentTab?.color]?.text || 'var(--accent-cyan)',
            marginBottom: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            {currentTab && <currentTab.icon size={20} />}
            {currentTab?.label} Skills
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {currentSkills.map(({ name, level }) => (
              <div key={name}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.4rem',
                }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>{name}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: colorMap[currentTab?.color]?.text || 'var(--accent-cyan)',
                    fontWeight: 600,
                  }}>
                    {level}%
                  </span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className={`skill-bar-fill ${currentTab?.barClass || ''}`}
                    style={{ width: animated[activeTab] ? `${level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages + Tools badge cloud */}
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr' }} className="skills-bottom-grid">
          {/* Programming languages */}
          <div className="reveal glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Programming Languages
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skills.languages.map((lang) => (
                <span key={lang} style={{
                  padding: '0.45rem 1rem',
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  borderRadius: 100,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="reveal glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Tools & Platforms
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skills.tools.map((tool) => (
                <span key={tool} className="tech-badge">{tool}</span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .skills-bottom-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
