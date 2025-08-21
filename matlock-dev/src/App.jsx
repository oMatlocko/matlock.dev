import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import ThreeGrid from './ThreeGrid.jsx';
import ScrollerVertical from './ScrollerVertical.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));


function App() {

  return(
    <>
        <ScrollerVertical/>

        <div className="content">
            <ThreeGrid/>
            <Header/>

            <main className="main-content">
              <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                  </Routes>
              </Suspense>
            </main>

            <Footer/>
        </div>
    </>
  );
}

export default App
