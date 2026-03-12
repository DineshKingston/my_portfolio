import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const CATEGORIES = ['All', 'AI/ML', 'Web', 'IoT'];

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-scale').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">

        {/* Heading */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">Projects</div>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A collection of projects showcasing AI, full-stack, and IoT development
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center',
          marginBottom: '2.5rem',
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-tab ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: '1fr',
        }} className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="reveal-scale"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
            Want to see more?
          </p>
          <a
            href="https://github.com/DineshKingston"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex' }}
          >
            View All on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
