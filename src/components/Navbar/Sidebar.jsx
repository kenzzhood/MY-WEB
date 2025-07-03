import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const sidebarVariants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="sidebar">
      <motion.div 
        className="sidebar__background"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <motion.nav 
          className="sidebar__nav"
          variants={menuVariants}
        >
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="sidebar__link"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLinkClick}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>

      <button
        className="sidebar__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="currentColor"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.path
            strokeWidth="3"
            stroke="currentColor"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.path
            strokeWidth="3"
            stroke="currentColor"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;