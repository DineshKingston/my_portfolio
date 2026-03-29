import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Server, Database, Cloud, Terminal, Wrench, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'frontend', label: 'Frontend Engineering', icon: Code2, desc: 'React, UI/UX, & Browsers' },
  { id: 'backend', label: 'Backend Architecture', icon: Server, desc: 'APIs, Services, & Logic' },
  { id: 'database', label: 'Data Systems', icon: Database, desc: 'SQL, NoSQL, & Modeling' },
  { id: 'cloudDevops', label: 'Cloud & DevOps', icon: Cloud, desc: 'AWS, Docker, & CI/CD' },
];

const Skills = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('frontend');
  const sectionRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle tab change with animation reset
  const handleTabChange = (id) => {
    if (id === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(id);
      setIsAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
          e.target.classList.remove('opacity-0', 'translate-y-6');
        }
      }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-fade');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeData = skills[activeTab] || [];

  return (
    <section id="skills" ref={sectionRef} className="py-16 lg:py-24 bg-white min-h-[800px] flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">

        {/* Header Section */}
        <div className="reveal-fade opacity-0 translate-y-6 transition-all duration-700 ease-out mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Technical Stack</h2>
          <p className="text-slate-500 max-w-2xl text-base md:text-lg">
            A comprehensive breakdown of my engineering capabilities, neatly organized by domain.
          </p>
        </div>

        {/* Modular Side-Tab Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 reveal-fade opacity-0 translate-y-6 transition-all duration-1000 ease-out delay-200">

          {/* Left Column: Navigation */}
          <div className="w-full md:w-1/3 flex overflow-x-auto md:flex-col gap-3 pb-4 md:pb-0 snap-x hide-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`snap-start flex-shrink-0 w-[240px] md:w-full text-left px-4 py-3 md:px-5 md:py-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${isActive
                    ? 'bg-violet-600/10 border-violet-500/30'
                    : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200 shadow-sm hover:shadow-md'
                    }`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`p-2 lg:p-3 rounded-lg flex-shrink-0 ${isActive ? 'bg-violet-600/20 text-violet-600' : 'bg-slate-100 text-slate-500'}`}>
                      <Icon size={20} className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-semibold text-[15px] md:text-base whitespace-nowrap md:whitespace-normal ${isActive ? 'text-violet-600' : 'text-slate-200'}`}>
                        {cat.label}
                      </h3>
                      <p className="hidden md:block text-xs text-slate-500 mt-0.5">{cat.desc}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className={`hidden md:block transition-transform duration-300 flex-shrink-0 ${isActive ? 'text-violet-600 translate-x-1 opacity-100' : 'text-slate-600 opacity-0 md:opacity-100 md:-translate-x-2'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Panel */}
          <div className="w-full md:w-2/3 bg-white rounded-2xl border border-slate-200 p-6 md:p-10 relative overflow-hidden min-h-[380px] shadow-sm">
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>

              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                {CATEGORIES.find(c => c.id === activeTab)?.label}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {activeData.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{
                      animation: isAnimating ? 'none' : `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                      opacity: 0
                    }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-700 font-medium tracking-wide">{skill.name}</span>
                      <span className="text-xs font-mono text-violet-600/80 bg-violet-600/10 px-2 py-1 rounded">{skill.level}%</span>
                    </div>
                    {/* Professional Thick Track Data Bar */}
                    <div className="w-full h-[6px] bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-0"
                        style={{
                          animation: isAnimating ? 'none' : `growBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + (index * 0.1)}s forwards`,
                          '--target-width': `${skill.level}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Global Languages & Tools */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 reveal-fade opacity-0 translate-y-6 transition-all duration-1000 ease-out delay-300">
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
            <div className="p-4 rounded-xl bg-slate-50 text-slate-500">
              <Terminal size={24} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Core Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(lang => (
                  <span key={lang} className="text-sm text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-300">{lang}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
            <div className="p-4 rounded-xl bg-slate-50 text-slate-500">
              <Wrench size={24} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Dev Workflow</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(tool => (
                  <span key={tool} className="text-sm text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-300">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Internal CSS for scoped animations */}
      <style>{`
        @keyframes growBar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal-fade.opacity-100 {
          opacity: 1;
          transform: translateY(0);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Skills;
