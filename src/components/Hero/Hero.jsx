import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (event) => {
    if (!heroRef.current || isMobile) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x: Math.min(Math.max(x, 30), 70),
      y: Math.min(Math.max(y, 30), 70)
    });
  };

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
    >
      <div className="hero__container">
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="hero__subtitle"
            variants={itemVariants}
          >
            GOUTHAM SRINATH
          </motion.h2>

          <motion.h1 
            className="hero__title"
            variants={itemVariants}
          >
            <Typewriter
              options={{
                strings: [
                  "AI & ML Developer",
                  "AR & VR Developer", 
                  "GenAI Specialist"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                typeSpeed: 80,
              }}
            />
          </motion.h1>

          <motion.p 
            className="hero__description"
            variants={itemVariants}
          >
            Computer Science undergraduate specializing in AI/ML, VR/AR, and generative AI. 
            Building innovative solutions that push technological boundaries.
          </motion.p>

          <motion.div 
            className="hero__actions"
            variants={itemVariants}
          >
            <motion.a
              href="https://drive.google.com/file/d/1EIKbd_CA2BVtS_lUbemYIAKUT5WMg0Ha/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="hero__button hero__button--secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero__scroll"
            variants={scrollVariants}
            animate="animate"
          >
            <img src="/scroll.png" alt="Scroll down" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero__image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero__image-container">
            <img src="/ggas.png" alt="Goutham Srinath" />
            {!isMobile && (
              <div className="hero__eyes">
                <div className="hero__eye">
                  <div
                    className="hero__pupil"
                    style={{
                      top: `${mousePosition.y}%`,
                      left: `${mousePosition.x}%`,
                    }}
                  />
                </div>
                <div className="hero__eye">
                  <div
                    className="hero__pupil"
                    style={{
                      top: `${mousePosition.y}%`,
                      left: `${mousePosition.x}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {!isMobile && (
        <motion.div 
          className="hero__background-text"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          AI & ML Developer • AR & VR Developer • 
        </motion.div>
      )}
    </section>
  );
};

export default Hero;