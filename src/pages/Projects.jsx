import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Calendar, Star, Code, Layers, Zap, Award, Filter } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const { projects } = portfolioData;
  const [setHoveredProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const projectCategories = ['all', 'AI/ML', 'Web Dev', 'IoT'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase()) ||
          (filter === 'AI/ML' && (tech.includes('AI') || tech.includes('ML') || tech.includes('Python'))) ||
          (filter === 'Web Dev' && (tech.includes('React') || tech.includes('Spring') || tech.includes('Node'))) ||
          (filter === 'IoT' && (tech.includes('Raspberry') || tech.includes('OpenCV')))
        )
      );

  const getProjectIcon = (technologies) => {
    if (technologies.some(tech => tech.includes('AI') || tech.includes('ML') || tech.includes('TensorFlow'))) {
      return <Zap className="text-yellow-400" size={20} />;
    }
    if (technologies.some(tech => tech.includes('React') || tech.includes('Spring'))) {
      return <Code className="text-blue-400" size={20} />;
    }
    if (technologies.some(tech => tech.includes('Raspberry') || tech.includes('OpenCV'))) {
      return <Layers className="text-green-400" size={20} />;
    }
    return <Star className="text-purple-400" size={20} />;
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-16 sm:pt-20 pb-8 sm:pb-16">
        <div className="mobile-container section-padding">
          {/* Hero Section - Mobile Optimized */}
          <div className="text-center mb-12 sm:mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 rounded-2xl sm:rounded-3xl blur-3xl"></div>
            <div className="relative z-10 py-8 sm:py-16">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                  My Projects
                </span>
              </h1>
              <p className="mobile-text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-slate-400 px-4">
                A showcase of innovative solutions and creative development work
              </p>
              <div className="flex justify-center mt-6 sm:mt-8">
                <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-slate-700">
                  <Award className="text-purple-400" size={18} />
                  <span className="text-slate-300 font-medium text-sm sm:text-base">{projects.length}+ Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Section - Mobile Optimized */}
          <div className="mb-8 sm:mb-16">
            {/* Mobile Filter Button */}
            <div className="sm:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-slate-700/50 text-white"
              >
                <span className="flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filter: {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </span>
                <span className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
            </div>

            {/* Filter Options */}
            <div className={`${showFilters || 'hidden sm:flex'} flex flex-col sm:flex-row gap-2 sm:justify-center`}>
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setFilter(category);
                    setShowFilters(false);
                  }}
                  className={`px-4 py-3 sm:px-6 sm:py-3 rounded-lg sm:rounded-full font-medium transition-all duration-300 touch-target ${
                    filter === category
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
                  } backdrop-blur-sm border border-slate-700/50`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Project - Mobile Layout */}
          <div className="mb-12 sm:mb-16">
            <h2 className="mobile-text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center px-4 sm:px-0">
              <Star className="mr-3 text-yellow-400" size={24} />
              Featured Project
            </h2>
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                  {/* Project Info */}
                  <div className="mobile-space-y">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      {getProjectIcon(projects[0].technologies)}
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                          {projects[0].title}
                        </h3>
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar size={14} className="mr-2" />
                          <span>Latest Project • 2024</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mobile-text-lg leading-relaxed">
                      {projects[0].description}
                    </p>
                    
                    {/* Technologies - Mobile Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-2 sm:gap-3">
                      {projects[0].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-slate-800/70 backdrop-blur-sm text-purple-300 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border border-slate-700/50 text-center"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons - Mobile Stack */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                      <a
                        href={projects[0].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full sm:w-auto group/btn"
                      >
                        <Github size={18} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </a>
                      <a
                        href={projects[0].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-auto group/btn"
                      >
                        <ExternalLink size={18} className="mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                  
                  {/* Project Visual - Hidden on small mobile */}
                  <div className="hidden sm:flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative bg-slate-800 rounded-xl p-6 border border-slate-700">
                        <div className="w-full h-32 sm:h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                          <div className="text-4xl sm:text-6xl opacity-50">
                            {getProjectIcon(projects[0].technologies)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Projects Grid - Mobile Optimized */}
          <div>
            <h2 className="mobile-text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 px-4 sm:px-0">
              All Projects ({filteredProjects.length})
            </h2>
            <div className="mobile-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 p-4 sm:p-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="p-2 bg-slate-700/50 rounded-lg flex-shrink-0">
                          {getProjectIcon(project.technologies)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 truncate">
                            {project.title}
                          </h3>
                          <div className="text-slate-500 text-xs flex items-center space-x-2">
                            <span className="truncate">{project.category}</span>
                            <div className={`w-2 h-2 rounded-full bg-green-400 flex-shrink-0`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                      {project.description}
                    </p>

                    {/* Technologies - Mobile Optimized */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-slate-700/70 text-slate-300 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-slate-500 text-xs px-2 py-1 bg-slate-700/30 rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Links - Mobile Stack */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium group/link touch-target"
                      >
                        <Github size={16} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium group/link touch-target"
                      >
                        <ExternalLink size={16} className="mr-2 group-hover/link:translate-x-1 transition-transform" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Mobile Optimized */}
          <div className="mt-12 sm:mt-20">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-slate-700/50 text-center">
              <h3 className="mobile-text-2xl sm:text-3xl font-bold text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto mobile-text-lg px-4 sm:px-0">
                I'm always open to discussing new projects and opportunities. 
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link
                  to="/contact"
                  className="btn-primary group w-full sm:w-auto"
                >
                  Let's Talk
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group w-full sm:w-auto"
                >
                  <Github className="mr-2 group-hover:rotate-12 transition-transform" size={18} />
                  View All on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
