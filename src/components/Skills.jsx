import { portfolioData } from '../data/portfolioData';
import { Code, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: skills.frontend,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Backend', 
      icon: Server,
      skills: skills.backend,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Database',
      icon: Database,
      skills: skills.database,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-pink-500 to-red-600'
    }
  ];

  return (
    <section id="skills" className="bg-slate-800 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-6 card-hover"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-100 mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Programming Languages */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-slate-100 mb-6">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.languages.map((language, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg transform hover:scale-105 transition-all duration-300"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
