"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const techStack = [
  { name: "Unity", icon: "/techlogo/pngwing.com.png", category: "tools" },
  { name: "Python", icon: "/techlogo/pngwing.com (1).png", category: "backend" },
  { name: "React", icon: "/techlogo/pngwing.com (2).png", category: "frontend" },
  { name: "Flutter", icon: "/techlogo/pngwing.com (3).png", category: "mobile" },
  { name: "JavaScript", icon: "/techlogo/pngwing.com (4).png", category: "frontend" },
];

const experiences = [
  {
    title: "Developer - InnoXR Labs",
    description: "Built various products such as AR/VR-based solutions, chatbots, and AI-powered applications.",
    type: "work" as const,
  },
  {
    title: "Internship - Acmegrade",
    description: "Built a LLM based chatbot that can curate response according to the user's emotion.",
    type: "work" as const,
  },
];

const volunteering = [
  {
    title: "Chair of Technology Hub SIST",
    description: "Conducted classes on AR & VR and mentored students in various domains.",
    type: "volunteer" as const,
  },
  {
    title: "Tamil Nadu State Design Lead of YUCI",
    description: "Led a specialized core group driving major initiatives across Tamil Nadu.",
    type: "volunteer" as const,
  },
  {
    title: "Technical Roles",
    description: "Technical Member of GDSC SIST, Hack SIST & Innovation Club SIST – Contributed to projects, organized hackathons, and worked on innovative solutions.",
    type: "volunteer" as const,
  },
  {
    title: "Management Roles",
    description: "Management Member of ACM SIST & OWASP SIST – Managed events promoted computational learning and cybersecurity awareness.",
    type: "volunteer" as const,
  },
];

export default function About() {
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
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Profile Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/upscalemedia-transformed (1) (1).png"
                  alt="Goutham Srinath"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </motion.div>
              
              {/* Floating decoration */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            <Card className="glass-effect border-border/50">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  About Me
                </Badge>
                <CardTitle className="text-3xl text-gradient">Hey!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I am a Computer Science undergraduate specializing in AI/ML, VR/AR, and generative AI,
                  with extensive experience in product development and management. I have a strong track record
                  of building innovative solutions across education, healthcare, and entertainment, including VR
                  simulations, AI-driven platforms, and multimodal AI applications. Skilled in Unity, Python, and
                  LLMs, I thrive on transforming ideas into scalable, impactful products while leading
                  multidisciplinary teams to push technological boundaries.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-4xl font-bold text-gradient mb-8">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-4">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} logo`}
                          width={48}
                          height={48}
                          className="mx-auto group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="font-semibold text-foreground">{tech.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Volunteering Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gradient mb-8 text-center">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gradient mb-8 text-center">Volunteering</h3>
              <div className="space-y-6">
                {volunteering.map((vol, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">{vol.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{vol.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}