import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-100 mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          <Home className="mr-2" size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
