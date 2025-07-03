import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Parallax.css';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div className={`parallax parallax--${type}`} ref={ref}>
      <motion.h1 
        className="parallax__title"
        style={{ y: yText }}
      >
        {type === "about" ? "About Me" : "My Projects"}
      </motion.h1>
      
      <motion.div 
        className="parallax__mountains"
        style={{ y: yBg }}
      />
      
      <motion.div 
        className={`parallax__planets parallax__planets--${type}`}
        style={{ y: yBg }}
      />
      
      <motion.div 
        className="parallax__stars"
        style={{ y: yBg }}
      />
    </div>
  );
};

export default Parallax;