import { useState } from 'react';
import { Download, ExternalLink, Eye, FileText } from 'lucide-react';

const PDFViewer = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/DineshKingston-Resume.pdf';
    link.download = 'DineshKingston-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-slate-800 rounded-xl p-8 animate-slide-up">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100 mb-2">My Resume</h2>
        <p className="text-slate-400">Download or view my complete resume</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={handleDownload}
          className="btn-download inline-flex items-center justify-center"
        >
          <Download className="mr-2" size={20} />
          Download PDF
        </button>
        <button
          onClick={() => setShowPDF(!showPDF)}
          className="btn-secondary inline-flex items-center justify-center"
        >
          <Eye className="mr-2" size={20} />
          {showPDF ? 'Hide Preview' : 'View Preview'}
        </button>
        <a
          href="/DineshKingston-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center"
        >
          <ExternalLink className="mr-2" size={20} />
          Open in New Tab
        </a>
      </div>

      {showPDF && (
        <div className="bg-slate-900 rounded-lg p-4 animate-fade-in">
          <div className="aspect-[8.5/11] w-full max-w-4xl mx-auto">
            <iframe
              src="/DineshKingston-Resume.pdf"
              className="w-full h-full rounded border-2 border-blue-500/20"
              title="Resume Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
