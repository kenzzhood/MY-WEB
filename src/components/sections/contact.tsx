"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "gtkgoutham@gmail.com",
    href: "mailto:gtkgoutham@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Bangalore, India",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+91 9620858652",
    href: "tel:+919620858652",
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.sendForm(
        "service_gkjd1rn",
        "template_n32wqi6",
        formRef.current,
        "0xcOeuygVsFEqZqHk"
      );

      setStatus({ loading: false, success: true, error: false });
      setFormState({ name: "", email: "", message: "" });
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Let's Work Together
              </h2>
              <p className="text-xl text-muted-foreground">
                Have a project in mind? Let's discuss how we can bring your ideas to life
                with cutting-edge AI/ML and AR/VR solutions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg glass-effect hover:bg-primary/5 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="glass-effect"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                      className="glass-effect"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="glass-effect resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status.loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    size="lg"
                  >
                    {status.loading ? (
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>

                  {status.success && (
                    <motion.div
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {status.error && (
                    <motion.div
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Failed to send message. Please try again or contact me directly.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}