import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import ThreeGrid from './ThreeGrid.jsx';
import ScrollerVertical from './ScrollerVertical.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));
const ProjectGaz = lazy(() => import('./projects/ProjectGaz.jsx'));


function App() {
  const location = useLocation();

  const routeLabels = {
    "/": "homepage",
    "/about": "about",
    "/projects": "projects",
    "/contact": "contact",
    "/projects/gazprea-compiler": "gazprea compiler"
  };

  const label = routeLabels[location.pathname] || "UNKNOWN PAGE";

  return(
    <>
        <ScrollerVertical label={label} />

        <div className="content">
            <ThreeGrid />
            <Header />

            <main className="main-content">
              <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/projects/gazprea-compiler" element={<ProjectGaz />} />
                  </Routes>
              </Suspense>
            </main>

            <Footer />
        </div>
    </>
  );
}

export default App
