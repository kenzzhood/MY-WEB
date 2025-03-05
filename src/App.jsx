import React from 'react';
import './App.scss';
import Navbar from './Components/navbar/NavBar';
import Hero from './Components/hero/Hero';
import Sidebar from './Components/sidebar/sidebar';
import Parallax from './Components/parallax/Parallax';
import About from './Components/about/About';
import Projects from './Components/projects/Projects';
import Contact from './Components/contact/Contact';

const App = () => {
  return (
    <div>
      
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <section>
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
