import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/goutham-srinath-380446288/",
      icon: "/techlogo/65a6560f146646659dbdefe7ae0c82ac.png",
      alt: "LinkedIn",
      label: "LinkedIn Profile"
    },
    {
      href: "https://github.com/kenzzhood",
      icon: "/transparent-github-icon-silhouette-of-cat-with-curled-body-and-open-mouth65cb0db59501c4.8162897917078061336103.png",
      alt: "GitHub",
      label: "GitHub Profile"
    },
    {
      href: "https://www.instagram.com/_goutham.srinath_/",
      icon: "/instagram.png",
      alt: "Instagram",
      label: "Instagram Profile"
    }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Sidebar />
      
      <div className="navbar__container">
        <motion.div 
          className="navbar__logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/G-removebg-preview.png" 
            alt="Goutham Srinath Logo" 
            width="60"
            height="60"
          />
        </motion.div>

        <div className="navbar__social">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-link"
              aria-label={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={link.icon} 
                alt={link.alt}
                width="24"
                height="24"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;