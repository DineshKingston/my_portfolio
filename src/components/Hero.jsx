import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Instagram, Facebook, MessageCircle, Download, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { personal, social } = portfolioData;

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
    discord: MessageCircle
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/DineshKingston-Resume.pdf';
    link.download = 'DineshKingston-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden safe-top">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mobile-container section-padding relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Profile Image - Mobile First */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <img
                src="/dinesh-photo.jpg"
                alt="Dinesh Kingston S"
                className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-slate-700 shadow-2xl"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjM4NCIgdmlld0JveD0iMCAwIDM4NCAzODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzODQiIGhlaWdodD0iMzg0IiByeD0iMTkyIiBmaWxsPSIjMzM0MTU1Ii8+CjxjaXJjbGUgY3g9IjE5MiIgY3k9IjE2MCIgcj0iNDgiIGZpbGw9IiM2Mzc0OEIiLz4KPHBhdGggZD0iTTEyMCAyODBDMTIwIDIzNi44NjMgMTQ4Ljg2MyAyMDggMTkyIDIwOFMyNjQgMjM2Ljg2MyAyNjQgMjgwSDEyMFoiIGZpbGw9IiM2Mzc0OEIiLz4KPHN2Zz4="
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {personal.name.split(' ')[0]}
              </span>
            </h1>
            
            <h2 className="mobile-text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-6 sm:mb-8 font-light">
              {personal.title}
            </h2>
            
            <p className="text-slate-400 mobile-text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
              {personal.bio}
            </p>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  to="/projects" 
                  className="btn-primary group w-full sm:w-auto justify-center"
                >
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-secondary w-full sm:w-auto justify-center"
                >
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Link>
              </div>
              <button 
                onClick={handleDownloadResume}
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-slate-700 w-full sm:w-auto flex items-center justify-center touch-target"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </button>
            </div>

            {/* Social Links - Mobile Optimized */}
            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
              {Object.entries(social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-all duration-300 p-2 sm:p-3 touch-target"
                  >
                    <Icon size={24} className="sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
