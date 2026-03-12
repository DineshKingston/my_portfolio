import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Education from '../pages/Education';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <Home />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
