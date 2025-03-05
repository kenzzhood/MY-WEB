import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gkjd1rn",      // From EmailJS dashboard
        "template_n32wqi6",     // From EmailJS dashboard
        formRef.current,
        "0xcOeuygVsFEqZqHk"       // From EmailJS dashboard
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          setError(true);
          setSuccess(false);
          setTimeout(() => setError(false), 3000);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>gtkgoutham@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Bangalore</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 9620858652</span>
        </motion.div>
      </motion.div>

      <motion.div className="formContainer" variants={variants}>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} required placeholder="Message" name="message" />
          <button type="submit">Send</button>
          {error && <span className="error">Failed to send message. Please try again.</span>}
          {success && <span className="success">Message sent successfully!</span>}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;