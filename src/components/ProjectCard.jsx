import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const GRADIENT_MAP = {
  'AI/ML': 'linear-gradient(135deg, #7c3aed, #6d28d9)',
  'Web':   'linear-gradient(135deg, #0891b2, #0284c7)',
  'IoT':   'linear-gradient(135deg, #059669, #0d9488)',
};

const ProjectCard = ({ project }) => {
  const { title, description, technologies, features, github, demo, category, gradient } = project;

  return (
    <div
      className="project-card"
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      {/* Card top color bar */}
      <div style={{
        background: `linear-gradient(135deg, ${gradient.split('from-')[1]?.split(' ')[0] || '#00d4ff'}, transparent)`,
        padding: '1.5rem 1.5rem 0',
        paddingTop: '1.5rem',
      }}>
        {/* Category + status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{
            padding: '0.25rem 0.75rem',
            borderRadius: 100,
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            background: GRADIENT_MAP[category] || 'rgba(0,212,255,0.15)',
            color: '#fff',
          }}>
            {category}
          </span>
          <span style={{
            padding: '0.2rem 0.6rem',
            borderRadius: 100,
            fontSize: '0.7rem',
            fontWeight: 600,
            background: 'rgba(16,185,129,0.15)',
            color: 'var(--accent-emerald)',
            border: '1px solid rgba(16,185,129,0.25)',
          }}>
            ✓ {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.2rem',
          lineHeight: 1.3,
        }}>
          {title}
        </h3>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Description */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.82rem',
          lineHeight: 1.6,
          marginBottom: '1rem',
        }}>
          {description}
        </p>

        {/* Key features */}
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          marginBottom: '1.25rem',
          listStyle: 'none',
          padding: 0,
        }}>
          {features.slice(0, 3).map((f, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem', marginTop: '0.2rem', flexShrink: 0 }}>▸</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.815rem', lineHeight: 1.5 }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {technologies.map((tech) => (
            <span key={tech} className="tech-badge" style={{ fontSize: '0.7rem' }}>{tech}</span>
          ))}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Actions */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border)',
        }}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-secondary)',
              fontSize: '0.82rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              padding: '0.4rem 0',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <Github size={15} />
            Source Code
            <ArrowUpRight size={13} />
          </a>

          {demo !== '#' && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-secondary)',
                fontSize: '0.82rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '0.4rem 0',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
