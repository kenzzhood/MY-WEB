import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Moot VR",
      description: "A Virtual Reality platform for hosting and attending Mock Trials both in Android and Quest 2.",
      image: "/WhatsApp_Image_2024-10-25_at_23.50.30-removebg-preview.png",
      link: "https://www.youtube.com/watch?v=TEUuFttBG9U",
      github: "https://www.youtube.com/watch?v=TEUuFttBG9U",
      tags: ["Unity", "C#", "Photon", "Cardboard SDK", "Quest SDK"]
    },
    {
      id: 2,
      title: "HoloInteract",
      description: "Holographic Interactive Display with LLM Integration for immersive user experiences.",
      image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
      link: "#",
      github: "#",
      tags: ["Python", "Unity", "C#", "LLMs"]
    },
    {
      id: 3,
      title: "Wander Lens",
      description: "Created AI travel buddy with itinerary planning, AR exploration, and 3D food previews using RAG and Gaussian Splatting.",
      image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
      link: "https://github.com/kenzzhood/Wander_Lens",
      github: "https://github.com/kenzzhood/Wander_Lens",
      tags: ["Python", "Fast API", "Hugging Face", "LLMs", "Ollama", "Immersal XR"]
    },
    {
      id: 4,
      title: "Voice Vista",
      description: "Live Voice to Image Generator using advanced AI models for real-time visual creation.",
      image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
      link: "https://www.youtube.com/watch?v=6i2k7E3zcyU",
      github: "#",
      tags: ["Python", "Fast API", "GenAI"]
    },
    {
      id: 5,
      title: "Health Intellect",
      description: "A comprehensive Medical Repository platform for Doctors and Patients with AI assistance.",
      image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
      link: "#",
      github: "https://github.com/kenzzhood/Health-Intellect",
      tags: ["Python", "React", "Firebase", "LLMs"]
    },
    {
      id: 6,
      title: "AR Product Visualizer",
      description: "An AR based Product Visualizer for E-commerce Products with real-time 3D rendering.",
      image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
      link: "#",
      github: "#",
      tags: ["Unity", "Python", "GenAI", "C++", "Vuforia"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="projects">
      <div className="projects__container">
        <motion.div
          className="projects__header"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            I have built many projects over the years. Here are some of my favorites that showcase 
            my expertise in AI/ML, AR/VR, and full-stack development.
          </p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;