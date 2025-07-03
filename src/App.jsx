import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Parallax from './components/Parallax/Parallax';
import './styles/global.css';

const App = () => {
  return (
    <div className="app">
      <section id="home" className="section">
        <Navbar />
        <Hero />
      </section>
      
      <section id="about-parallax" className="section">
        <Parallax type="about" />
      </section>
      
      <section id="about" className="section">
        <About />
      </section>
      
      <section id="projects-parallax" className="section">
        <Parallax type="projects" />
      </section>
      
      <section id="projects" className="section">
        <Projects />
      </section>
      
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
};

export default App;