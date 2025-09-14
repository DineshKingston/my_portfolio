import Header from '../components/Header';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Database, Wrench, Brain, Zap, Star, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Skills = () => {
  const { skills } = portfolioData;
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    setAnimateProgress(true);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      subtitle: 'Development',
      icon: Code,
      skills: skills.frontend,
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      bgGradient: 'from-cyan-500/10 to-blue-600/10',
      description: 'Crafting beautiful, responsive user interfaces',
      proficiency: 92
    },
    {
      title: 'Backend',
      subtitle: 'Development', 
      icon: Server,
      skills: skills.backend,
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      bgGradient: 'from-green-500/10 to-emerald-600/10',
      description: 'Building robust server-side applications',
      proficiency: 88
    },
    {
      title: 'Database',
      subtitle: 'Management',
      icon: Database,
      skills: skills.database,
      gradient: 'from-yellow-400 via-orange-500 to-red-600',
      bgGradient: 'from-yellow-500/10 to-orange-600/10',
      description: 'Designing efficient data storage solutions',
      proficiency: 85
    },
    {
      title: 'Development',
      subtitle: 'Tools',
      icon: Wrench,
      skills: skills.tools,
      gradient: 'from-purple-400 via-pink-500 to-rose-600',
      bgGradient: 'from-purple-500/10 to-pink-600/10',
      description: 'Mastering modern development workflows',
      proficiency: 90
    }
  ];

  const programmingLanguages = [
    { 
      name: 'C', 
      level: 85, 
      color: '#3B82F6',
      icon: '🔧',
      description: 'System programming'
    },
    { 
      name: 'Java', 
      level: 90, 
      color: '#F97316',
      icon: '☕',
      description: 'Enterprise applications'
    },
    { 
      name: 'Python', 
      level: 88, 
      color: '#10B981',
      icon: '🐍',
      description: 'AI/ML development'
    },
  ];

  const currentlyLearning = [
    { name: 'Machine Learning', progress: 75, color: 'bg-blue-500' },
    { name: 'AI Development', progress: 65, color: 'bg-purple-500' },
    { name: 'Cloud Computing', progress: 70, color: 'bg-green-500' },
    { name: 'DevOps', progress: 60, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-16 sm:pt-20 pb-8 sm:pb-16">
        <div className="mobile-container section-padding">
          {/* Hero Section - Mobile Optimized */}
          <div className="text-center mb-12 sm:mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl blur-3xl"></div>
            <div className="relative z-10 py-8 sm:py-16">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h1>
              <p className="mobile-text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-slate-400 px-4">
                A showcase of my expertise across different technologies and programming languages
              </p>
              <div className="flex justify-center mt-6 sm:mt-8">
                <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-slate-700">
                  <TrendingUp className="text-green-400" size={18} />
                  <span className="text-slate-300 font-medium text-sm sm:text-base">Continuously Growing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Categories Grid - Mobile First */}
          <div className="mobile-grid grid-cols-1 lg:grid-cols-2 mb-12 sm:mb-20">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500`}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Header - Mobile Optimized */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div className="flex items-center mb-4 sm:mb-0">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-3 sm:mr-4 shadow-lg`}>
                          <Icon size={24} className="sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                            {category.title}
                          </h3>
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                            {category.subtitle}
                          </h4>
                          <p className="text-slate-400 text-xs sm:text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-center sm:text-right">
                        <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                          {category.proficiency}%
                        </div>
                        <div className="text-slate-500 text-xs sm:text-sm">Proficiency</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2 sm:h-3 mb-6 overflow-hidden">
                      <div 
                        className={`h-2 sm:h-3 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{ 
                          width: animateProgress ? `${category.proficiency}%` : '0%',
                          transformOrigin: 'left'
                        }}
                      ></div>
                    </div>
                    
                    {/* Skills Tags - Mobile Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-slate-200 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-default border border-slate-700/30 text-center"
                        >
                          <span className="group-hover:text-white transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Programming Languages - Mobile Optimized */}
          <div className="mb-12 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="mobile-text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Brain className="mr-3 sm:mr-4 text-blue-400" size={28} />
                Programming Languages
              </h2>
              <p className="text-slate-400 mobile-text-lg px-4">Languages I'm proficient in and actively use</p>
            </div>

            <div className="mobile-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {programmingLanguages.map((lang, index) => (
                <div 
                  key={index} 
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500"
                >
                  {/* Animated background with safe color */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${lang.color}20, ${lang.color}10)` }}
                  ></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{lang.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{lang.name}</h3>
                    <p className="text-slate-400 text-sm mb-4 sm:mb-6">{lang.description}</p>
                    
                    {/* Simplified Circular Progress - Mobile Friendly */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                      <svg className="w-20 h-20 sm:w-24 sm:h-24 transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background Circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          stroke="#374151"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        {/* Progress Circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          stroke={lang.color}
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 35}`}
                          strokeDashoffset={animateProgress ? `${2 * Math.PI * 35 * (1 - lang.level / 100)}` : `${2 * Math.PI * 35}`}
                          className="transition-all duration-2000 ease-out"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span 
                          className="text-lg sm:text-xl font-bold"
                          style={{ color: lang.color }}
                        >
                          {lang.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning - Mobile Layout */}
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50">
            <h3 className="mobile-text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center">
              <Zap className="mr-3 sm:mr-4 text-yellow-400" size={28} />
              Currently Learning
            </h3>
            <div className="mobile-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {currentlyLearning.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-semibold text-sm sm:text-base">{skill.name}</span>
                      <span className="text-slate-400 text-xs sm:text-sm">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: animateProgress ? `${skill.progress}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
