import Header from '../components/Header';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const { personal, education } = portfolioData;

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Passionate about creating innovative solutions and learning new technologies
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
                <img
                  src="/dinesh-photo.jpg"
                  alt="Dinesh Kingston S"
                  className="relative w-80 h-80 rounded-2xl object-cover border-4 border-slate-700 shadow-2xl"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiByeD0iMTYiIGZpbGw9IiMzMzQxNTUiLz4KPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTQwIiByPSI0MCIgZmlsbD0iIzY0NzQ4QiIvPgo8cGF0aCBkPSJNMTAwIDI0MEMxMDAgMjA2Ljg2MyAxMjYuODYzIDE4MCAxNjAgMTgwUzIyMCAyMDYuODYzIDIyMCAyNDBIMTAwWiIgZmlsbD0iIzY0NzQ4QiIvPgo8L3N2Zz4="
                  }}
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Who Am I?</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  {personal.bio}
                </p>
                <p>
                  I specialize in building modern web applications using cutting-edge technologies. 
                  My passion lies in creating efficient, scalable solutions that solve real-world problems
                  and deliver exceptional user experiences.
                </p>
                <p>
                  Currently pursuing my Bachelor's degree in Computer Science, I'm always eager to learn 
                  new technologies and take on challenging projects that push my skills to the next level.
                  I believe in continuous learning and staying updated with the latest industry trends.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-slate-400 text-sm">Projects Completed</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">2+</div>
                  <div className="text-slate-400 text-sm">Years Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-400" size={28} />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    {education.degree}
                  </h4>
                  <p className="text-white font-medium mb-1">
                    {education.field}
                  </p>
                  <p className="text-slate-400 mb-2">
                    {education.college}
                  </p>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {education.duration}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-3 text-purple-400" size={28} />
                Achievements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-white font-medium">The Mega Project Expo</h4>
                    <p className="text-slate-400 text-sm">Participated in college project exhibition</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-white font-medium">PCI Innovism & Hackathon</h4>
                    <p className="text-slate-400 text-sm">Competed in innovation challenges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-white font-medium">NPTEL Certifications</h4>
                    <p className="text-slate-400 text-sm">Completed online courses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-white font-medium">Django Internship</h4>
                    <p className="text-slate-400 text-sm">IPCS Global, Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center text-slate-400 bg-slate-800 rounded-full px-6 py-3">
              <MapPin className="mr-2" size={20} />
              Currently based in {personal.location}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
