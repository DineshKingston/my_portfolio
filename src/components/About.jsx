import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="bg-slate-800 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            About Me
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Learn more about my background and education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">
              Who Am I?
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                {personal.bio}
              </p>
              <p>
                I specialize in building modern web applications using the latest technologies. 
                My passion lies in creating efficient, scalable solutions that solve real-world problems.
              </p>
              <p>
                Currently pursuing my Bachelor's degree in Computer Science, I'm always eager to learn 
                new technologies and take on challenging projects that push my skills to the next level.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-slate-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-400" />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-blue-400">
                  {education.degree}
                </h4>
                <p className="text-slate-300 font-medium">
                  {education.field}
                </p>
                <p className="text-slate-400">
                  {education.college}
                </p>
                <p className="text-slate-500 text-sm">
                  {education.duration}
                </p>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="mr-2" size={16} />
                {personal.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
