"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Moot VR",
    description: "A Virtual Reality platform for hosting and attending Mock Trials both in Android and Quest 2.",
    image: "/WhatsApp_Image_2024-10-25_at_23.50.30-removebg-preview.png",
    link: "https://www.youtube.com/watch?v=TEUuFttBG9U",
    github: "https://www.youtube.com/watch?v=TEUuFttBG9U",
    tags: ["Unity", "C#", "Photon", "Cardboard SDK", "Quest SDK"],
    featured: true,
  },
  {
    id: 2,
    title: "HoloInteract",
    description: "Holographic Interactive Display with LLM Integration for immersive user experiences.",
    image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
    link: "#",
    github: "#",
    tags: ["Python", "Unity", "C#", "LLMs"],
  },
  {
    id: 3,
    title: "Wander Lens",
    description: "Created AI travel buddy with itinerary planning, AR exploration, and 3D food previews using RAG and Gaussian Splatting.",
    image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
    link: "https://github.com/kenzzhood/Wander_Lens",
    github: "https://github.com/kenzzhood/Wander_Lens",
    tags: ["Python", "Fast API", "Hugging Face", "LLMs", "Ollama", "Immersal XR"],
    featured: true,
  },
  {
    id: 4,
    title: "Voice Vista",
    description: "Live Voice to Image Generator using advanced AI models for real-time visual creation.",
    image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
    link: "https://www.youtube.com/watch?v=6i2k7E3zcyU",
    github: "#",
    tags: ["Python", "Fast API", "GenAI"],
  },
  {
    id: 5,
    title: "Health Intellect",
    description: "A comprehensive Medical Repository platform for Doctors and Patients with AI assistance.",
    image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
    link: "#",
    github: "https://github.com/kenzzhood/Health-Intellect",
    tags: ["Python", "React", "Firebase", "LLMs"],
  },
  {
    id: 6,
    title: "AR Product Visualizer",
    description: "An AR based Product Visualizer for E-commerce Products with real-time 3D rendering.",
    image: "/WhatsApp_Image_2024-12-29_at_04.19.13-removebg-preview_(1)-transformed.png",
    link: "#",
    github: "#",
    tags: ["Unity", "Python", "GenAI", "C++", "Vuforia"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group h-full"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col overflow-hidden">
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {project.link && project.link !== "#" && (
              <Button
                asChild
                size="icon"
                variant="secondary"
                className="rounded-full"
              >
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            )}
            {project.github && project.github !== "#" && (
              <Button
                asChild
                size="icon"
                variant="secondary"
                className="rounded-full"
              >
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>

          {project.featured && (
            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600">
              Featured
            </Badge>
          )}
        </div>

        <CardHeader className="flex-grow">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col justify-between flex-grow">
          <p className="text-muted-foreground mb-4 flex-grow">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="tech" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I have built many projects over the years. Here are some of my favorites that showcase
            my expertise in AI/ML, AR/VR, and full-stack development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}