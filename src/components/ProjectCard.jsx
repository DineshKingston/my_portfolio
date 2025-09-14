import { ExternalLink, Github, Star, Calendar, Users, Code } from 'lucide-react';

const ProjectCard = ({ project, featured = false }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI/ML': return '🤖';
      case 'Web Development': return '🌐';
      case 'IoT': return '🔧';
      default: return '💻';
    }
  };

  if (featured) {
    return (
      <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{getCategoryIcon(project.category)}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></div>
                  </div>
                  <div className="flex items-center text-slate-400 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{project.status} • 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Star size={16} className="mr-2 text-yellow-400" />
                      <span className="text-sm">Featured Project</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                {project.description}
              </p>
              
              {/* Key Features */}
              {project.features && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start text-slate-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-800/70 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-slate-700/50 hover:bg-slate-600/50 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm border border-slate-600/50 group/btn"
                >
                  <Github size={20} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium group/btn"
                >
                  <ExternalLink size={20} className="mr-2 group-hover/btn:translate-x-1 transition-transform" />
                  Live Demo
                </a>
              </div>
            </div>
            
            {/* Project Architecture Visualization */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🤖</div>
                      <div className="text-white font-semibold">Document AI Agent</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-2xl mb-1">⚛️</div>
                        <div className="text-slate-300 text-sm">React Frontend</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-2xl mb-1">🍃</div>
                        <div className="text-slate-300 text-sm">Spring Boot</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-2xl mb-1">🍃</div>
                        <div className="text-slate-300 text-sm">MongoDB</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-2xl mb-1">✨</div>
                        <div className="text-slate-300 text-sm">Gemini AI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular project card for grid view
  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-700/50 rounded-lg">
              <div className="text-xl">{getCategoryIcon(project.category)}</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {project.title}
              </h3>
              <div className="text-slate-500 text-xs flex items-center space-x-2">
                <span>{project.category}</span>
                <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                <span>{project.status}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-slate-400 mb-4 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
          {project.description}
        </p>

        {/* Key Features Preview */}
        {project.features && (
          <div className="mb-4">
            <div className="text-slate-500 text-xs mb-2">Key Features:</div>
            <ul className="space-y-1">
              {project.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-start text-slate-400 text-xs">
                  <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-slate-700/70 text-slate-300 px-3 py-1 rounded-lg text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-slate-500 text-xs px-3 py-1 bg-slate-700/30 rounded-lg">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Project Links */}
        <div className="flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium group/link"
          >
            <Github size={16} className="mr-2 group-hover/link:rotate-12 transition-transform" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium group/link"
          >
            <ExternalLink size={16} className="mr-2 group-hover/link:translate-x-1 transition-transform" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
