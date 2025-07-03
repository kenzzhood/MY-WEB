import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const techStack = [
    { name: "Unity", icon: "/techlogo/pngwing.com.png" },
    { name: "Python", icon: "/techlogo/pngwing.com (1).png" },
    { name: "React", icon: "/techlogo/pngwing.com (2).png" },
    { name: "Flutter", icon: "/techlogo/pngwing.com (3).png" },
    { name: "JavaScript", icon: "/techlogo/pngwing.com (4).png" }
  ];

  const experiences = [
    {
      title: "Developer - InnoXR Labs",
      description: "Built various products such as AR/VR-based solutions, chatbots, and AI-powered applications."
    },
    {
      title: "Internship - Acmegrade", 
      description: "Built a LLM based chatbot that can curate response according to the user's emotion."
    }
  ];

  const volunteering = [
    {
      title: "Chair of Technology Hub SIST",
      description: "Conducted classes on AR & VR and mentored students in various domains."
    },
    {
      title: "Tamil Nadu State Design Lead of YUCI",
      description: "Led a specialized core group driving major initiatives across Tamil Nadu."
    },
    {
      title: "Technical Roles",
      description: "Technical Member of GDSC SIST, Hack SIST & Innovation Club SIST – Contributed to projects, organized hackathons, and worked on innovative solutions."
    },
    {
      title: "Management Roles", 
      description: "Management Member of ACM SIST & OWASP SIST – Managed events promoted computational learning and cybersecurity awareness. Conducted two 24 hour hackathons one national level and one intra college."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
    <section className="about">
      <div className="about__container">
        <motion.div 
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Profile Section */}
          <motion.div className="about__profile" variants={itemVariants}>
            <div className="about__image">
              <img 
                src="/upscalemedia-transformed (1) (1).png" 
                alt="Goutham Srinath"
              />
            </div>
            <div className="about__info">
              <span className="about__label">About Me</span>
              <h2 className="about__title">Hey!</h2>
              <p className="about__description">
                I am a Computer Science undergraduate specializing in AI/ML, VR/AR, and generative AI, 
                with extensive experience in product development and management. I have a strong track record 
                of building innovative solutions across education, healthcare, and entertainment, including VR 
                simulations, AI-driven platforms, and multimodal AI applications. Skilled in Unity, Python, and 
                LLMs, I thrive on transforming ideas into scalable, impactful products while leading 
                multidisciplinary teams to push technological boundaries.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div className="about__tech" variants={itemVariants}>
            <h3 className="about__section-title">Tech Stack</h3>
            <div className="about__tech-grid">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="about__tech-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={tech.icon} alt={`${tech.name} logo`} />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Volunteering Section */}
          <div className="about__experience-section">
            <motion.div className="about__experience" variants={itemVariants}>
              <h3 className="about__section-title">Experience</h3>
              <div className="about__cards">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="about__card"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4>{exp.title}</h4>
                    <p>{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about__volunteering" variants={itemVariants}>
              <h3 className="about__section-title">Volunteering</h3>
              <div className="about__cards">
                {volunteering.map((vol, index) => (
                  <motion.div
                    key={index}
                    className="about__card"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4>{vol.title}</h4>
                    <p>{vol.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;