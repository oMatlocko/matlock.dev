import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import styles from './App.module.css';

import Grid from './Grid.jsx';
import ScrollerVertical from './ScrollerVertical.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Home = lazy(() => import('./Home.jsx'));
const About = lazy(() => import('./About.jsx'));
const Projects = lazy(() => import('./Projects.jsx'));
const Contact = lazy(() => import('./Contact.jsx'));
const ProjectGazprea = lazy(() => import('./projects/ProjectGazprea.jsx'));

function App() {
  const location = useLocation();

  const routeLabels = {
    '/': 'Home',
    '/about': 'About',
    '/projects': 'Projects',
    '/contact': 'Contact',
    '/projects/gazprea-compiler': 'Gazprea Compiler'
  };

  const label = routeLabels[location.pathname] || 'UNKNOWN PAGE';

  return (
    <>
      <ScrollerVertical label={label} />

      <div className={styles.content}>
        <Grid />
        <Header />

        <main className={styles.mainContent}>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects/gazprea-compiler' element={<ProjectGazprea />} />
          </Routes>

        </main>

        <Footer />
      </div>
    </>
  )
}

export default App;