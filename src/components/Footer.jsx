import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const { personal, social } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '2rem 0',
    }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-6">
          {/* Logo */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '1rem',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            DineshKingston<span style={{ color: 'var(--accent-cyan)', WebkitTextFillColor: 'var(--accent-cyan)' }}>.</span>
          </div>

          {/* Copyright */}
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center', order: 3 }}>
            © {year} {personal.name}
          </p>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[
              { href: social.github, Icon: Github, label: 'GitHub' },
              { href: social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: social.instagram, Icon: Instagram, label: 'Instagram' },
              { href: social.email, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="social-btn"
                style={{ width: 36, height: 36 }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
