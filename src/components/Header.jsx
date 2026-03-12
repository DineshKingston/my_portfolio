import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="section-container">
        <nav className={`relative flex items-center justify-between px-6 py-2.5 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'glass-card border-white/10 shadow-2xl shadow-black/40' 
            : 'bg-transparent border-transparent'
        }`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
              D
            </div>
            <span className="font-mono font-bold text-lg text-white tracking-tighter hidden sm:block">
              Dinesh<span className="text-cyan-400">Kingston</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `
                  px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive 
                    ? 'bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'}
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <a 
              href="/DineshKingston-Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-5 text-sm"
            >
              Resume
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[-1] md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item, idx) => (
            <NavLink
              key={item.href}
              to={item.href}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={({ isActive }) => `
                text-2xl font-bold transition-all duration-300
                ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                ${isActive ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}
              `}
            >
              {item.label}
            </NavLink>
          ))}
          <a 
            href="/DineshKingston-Resume.pdf"
            className={`mt-4 btn-primary transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
