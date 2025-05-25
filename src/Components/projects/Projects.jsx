import React from "react";
import { motion } from "framer-motion";
import "./projects.scss";
import ProjectCard from "./projectcard/ProjectCard";
import Particles from './particles/Particles';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Moot VR ",
      desc: "A Virtually Reality platform for hosting and attending Mock Trials both in Android and Quest 2.",
      img: "/WhatsApp_Image_2024-10-25_at_23.50.30-removebg-preview.png",
      link: "https://www.youtube.com/watch?v=TEUuFttBG9U",
      github: "https://www.youtube.com/watch?v=TEUuFttBG9U",
      tags: ["Unity", "C#", "Photon", "Cardboard SDK","Quest SDK"],
    },
    {
      id: 2,
      title: "HoloInteract",
      desc: "Holographic Interacticve Display with LLM Integration.",
      img: "/path-to-image2.jpg",
      link: "https://example2.com",
      github: "https://github.com/username/repo2",
      tags: ["Python", "Unity,", "C#", "LLMs"],
    },
    {
      id: 4,
      title: "Wander Lens",
      desc: "Created AI travel buddy with itinerary planning, AR exploration, and 3D food previews using RAG and Gaussian Splatting.",
      img: "/path-to-image4.jpg",
      link: "https://github.com/kenzzhood/Wander_Lens",
      github: "https://github.com/kenzzhood/Wander_Lens",
      tags: ["Python", "Fast API","Hugging Face","LLMs","Ollama","Immersal XR"],
    },
    {
      id: 3,
      title: "Voice Vista",
      desc: "Live Voice to Image Generator",
      img: "/path-to-image3.jpg",
      link: "https://www.youtube.com/watch?v=6i2k7E3zcyU",
      github: "https://github.com/username/repo3",
      tags: ["Python", "Fast API", "GenAi"],
    },
    {
      id: 5,
      title: "Health Intellect",
      desc: "A Medical Repository for Doctors and Patients.",
      img: "/path-to-image5.jpg",
      link: "https://example5.com",
      github: "https://github.com/kenzzhood/Health-Intellect",
      tags: ["Python", "React", "Firebase","LLMs"],
    },
    {
      id: 6,
      title: "AR Product",
      desc: "An AR based Product Visualizer for E-commerce Products",
      img: "/path-to-image6.jpg",
      link: "https://example6.com",
      github: "https://github.com/username/repo6",
      tags: ["Unity","Python","GenAi","C++", "Vuforia"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 120,
        damping: 20,
      }
    }
  };
  

  return (
    <motion.div 
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Particles Background */}
      <Particles
        particleColors={['#6a11cb', '#2575fc']}
        particleCount={150}
        particleSpread={7}
        speed={0.15}
        particleBaseSize={150}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
        className="page-particles"
        id = "portfolio"
      />

      {/* Content */}
      <div className="content-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I have built many projects over the years. Here are some of my favorites..
        </motion.h2>

        <motion.div 
          className="project-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
              }
            }
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;