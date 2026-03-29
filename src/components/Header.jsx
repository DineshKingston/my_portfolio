import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Home, User, Lightbulb, Briefcase, FolderGit2, GraduationCap, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: User },
  { label: 'Skills', href: '/skills', icon: Lightbulb },
  { label: 'Experience', href: '/experience', icon: Briefcase },
  { label: 'Projects', href: '/projects', icon: FolderGit2 },
  { label: 'Education', href: '/education', icon: GraduationCap },
  { label: 'Contact', href: '/contact', icon: Mail },
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
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'
      }`}>
      <div className="section-container">
        <nav className={`relative flex items-center justify-between px-6 py-2.5 rounded-full transition-all duration-500 ${isScrolled
          ? 'glass-card border-slate-200 shadow-2xl shadow-black/40'
          : 'bg-transparent border-transparent'
          }`}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center font-bold text-slate-900 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
              D
            </div>
            <span className="font-mono font-bold text-lg text-slate-900 tracking-tighter hidden sm:block">
              Dinesh<span className="text-blue-600">Kingston</span>
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
                    ? 'bg-blue-600/10 text-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/5'}
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
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Full-Screen Transparent Glass Bento Menu */}
      <div
        className={`fixed inset-0 z-[120] md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Deeply Transparent Glass Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[40px]" />

        {/* Soft immersive inner glows */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/20 rounded-full blur-[100px]" />

        {/* Floating Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-3 bg-white/40 backdrop-blur-md rounded-full border border-white/50 text-slate-700 hover:text-slate-900 shadow-lg transition-transform hover:scale-110 z-[130]"
        >
          <X size={24} />
        </button>

        {/* Monumental Typography Structure */}
        <div className="relative h-full flex flex-col items-start justify-center px-6 gap-6">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item, idx) => {
              // Mathematical curve for 7 items to form a clean C-shape arc
              const curveOffsets = [0, 30, 70, 95, 70, 30, 0];
              const curveMargin = curveOffsets[idx] || 0;
              
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  style={{ 
                    transitionDelay: `${idx * 60}ms`,
                    marginLeft: isMobileMenuOpen ? `${curveMargin}px` : '-40px'
                  }}
                  className={({ isActive }) => `
                    group flex items-center gap-6 py-6 px-12 -ml-12 cursor-pointer
                    transition-all duration-500
                    ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}
                    ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span 
                        className={`font-mono inline-block tracking-tighter origin-left transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.35] group-hover:translate-x-12 ${
                          isActive 
                            ? 'text-5xl font-black text-blue-600 scale-110 translate-x-4' 
                            : 'text-4xl font-bold text-slate-400 group-hover:text-blue-500'
                        }`}
                      >
                        {item.label}
                      </span>

                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          <div
            className={`mt-12 transition-all duration-1000 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              href="/DineshKingston-Resume.pdf"
              className="text-lg font-bold text-blue-600 tracking-widest uppercase hover:text-blue-800 transition-colors flex items-center gap-2 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 hover:after:w-0 after:transition-all"
            >
              Get Full Resume
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
