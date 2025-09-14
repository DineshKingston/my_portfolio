import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { personal, social } = portfolioData;
  
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram, 
    facebook: Facebook,
    discord: MessageCircle
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h3 className="text-xl font-bold gradient-text mb-4">
            {personal.name}
          </h3>
          
          <div className="flex justify-center space-x-6 mb-6">
            {Object.entries(social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
