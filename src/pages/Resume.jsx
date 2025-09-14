import Header from '../components/Header';
import PDFViewer from '../components/PDFViewer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="pt-24 section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <PDFViewer />
          
          {/* Resume Summary */}
          <div className="mt-12 bg-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Resume Summary</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Education</h4>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Bachelor of Technology</strong></p>
                  <p>Computer Science and Business System</p>
                  <p>Francis Xavier Engineering College (2022-2026)</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'C', 'React.js', 'Spring Boot', 'MySQL', 'Git', 'OpenCV'].map((skill) => (
                    <span key={skill} className="bg-slate-900 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Recent Projects</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Object Detection Using Raspberry Pi with YOLO/TensorFlow</li>
                <li>• Voice Recognition System with real-time speech-to-text</li>
                <li>• Online Fees Payment System with secure payment gateway</li>
                <li>• Document Read AI Agent (Latest Project)</li>
                <li>• ML Multiple Disease Prediction System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
