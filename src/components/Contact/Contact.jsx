import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.sendForm(
        'service_gkjd1rn',
        'template_n32wqi6',
        formRef.current,
        '0xcOeuygVsFEqZqHk'
      );
      
      setStatus({ loading: false, success: true, error: false });
      setFormState({ name: '', email: '', message: '' });
      formRef.current.reset();
      
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      value: "gtkgoutham@gmail.com",
      href: "mailto:gtkgoutham@gmail.com"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Location",
      value: "Bangalore, India"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Phone",
      value: "+91 9620858652",
      href: "tel:+919620858652"
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
    <section className="contact">
      <div className="contact__container">
        <motion.div
          className="contact__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="contact__info">
            <motion.div className="contact__header" variants={itemVariants}>
              <h2 className="contact__title">Let's Work Together</h2>
              <p className="contact__subtitle">
                Have a project in mind? Let's discuss how we can bring your ideas to life 
                with cutting-edge AI/ML and AR/VR solutions.
              </p>
            </motion.div>

            <motion.div className="contact__details" variants={itemVariants}>
              {contactInfo.map((info, index) => (
                <div key={index} className="contact__detail">
                  <div className="contact__detail-icon">
                    {info.icon}
                  </div>
                  <div className="contact__detail-content">
                    <h3>{info.title}</h3>
                    {info.href ? (
                      <a href={info.href} className="contact__detail-link">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div className="contact__form-container" variants={itemVariants}>
            <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="contact__input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="contact__input"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="contact__textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="contact__submit"
                disabled={status.loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status.success && (
                <motion.div
                  className="contact__message contact__message--success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  className="contact__message contact__message--error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;