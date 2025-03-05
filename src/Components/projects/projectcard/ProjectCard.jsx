import React from "react";
import { motion } from "framer-motion";
import "./projectcard.scss";

const kebabCase = (str) => str.toLowerCase().replace(/ /g, "-");

function ProjectCard({ project }) {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { 
          type: "spring",
          stiffness: 120,
          damping: 20,
        }
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
        transition: { type: "spring", stiffness: 300 }
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <a href={project.link || project.github} target="_blank" rel="noopener noreferrer">
        <motion.img 
          src={project.img} 
          alt={project.title} 
          className="project-image"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        />
      </a>
      <div className="project-details">
        <div className="title-links">
          <a href={project.link || project.github} target="_blank" rel="noreferrer">
            <motion.h3 
              className="project-title"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.title}
            </motion.h3>
          </a>
          <div className="links">
            {project.link && (
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "easeInOut", stiffness: 2 }}
              >
                🌐
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "easeInOut", stiffness: 300 }}
              >
                💻
              </motion.a>
            )}
          </div>
        </div>
        <motion.p 
          className="project-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.desc}
        </motion.p>
        <ul className="project-tags">
          {project.tags.map((tag) => (
            <motion.li 
              key={tag}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "easeInOut", stiffness: 300 }}
            >
              <a href={`/projects/tag/${kebabCase(tag)}`}>{tag}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectCard;