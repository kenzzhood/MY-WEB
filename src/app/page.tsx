import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Parallax from "@/components/sections/parallax";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      
      <Parallax type="about" />
      
      <section id="about">
        <About />
      </section>
      
      <Parallax type="projects" />
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}