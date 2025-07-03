"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { Spotlight } from "@/components/aceternity/spotlight";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!heroRef.current || isMobile) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x: Math.min(Math.max(x, 30), 70),
      y: Math.min(Math.max(y, 30), 70),
    });
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
    hidden: { opacity: 0, y: 50 },
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
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
    >
      <BackgroundBeams className="absolute inset-0" />
      <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-primary font-semibold text-lg mb-4 tracking-wider uppercase"
              variants={itemVariants}
            >
              Goutham Srinath
            </motion.p>

            <motion.div
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <div className="text-gradient min-h-[1.2em]">
                <Typewriter
                  options={{
                    strings: [
                      "AI & ML Developer",
                      "AR & VR Developer",
                      "GenAI Specialist",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    typeSpeed: 80,
                  }}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <TextGenerateEffect
                words="Computer Science undergraduate specializing in AI/ML, VR/AR, and generative AI. Building innovative solutions that push technological boundaries."
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button
                asChild
                variant="gradient"
                size="xl"
                className="group"
              >
                <Link
                  href="https://drive.google.com/file/d/1EIKbd_CA2BVtS_lUbemYIAKUT5WMg0Ha/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="xl"
                className="glass-effect hover:bg-primary/10"
              >
                <Link href="#contact">
                  Get In Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/scroll.png"
                  alt="Scroll down"
                  width={30}
                  height={30}
                  className="opacity-70"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/ggas.png"
                  alt="Goutham Srinath"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Interactive Eyes */}
              {!isMobile && (
                <div className="absolute top-[23%] left-1/2 transform -translate-x-1/2 flex gap-8 pointer-events-none z-20">
                  {[1, 2].map((eye) => (
                    <div
                      key={eye}
                      className="w-10 h-6 bg-white rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        className="w-5 h-5 bg-black rounded-full absolute"
                        style={{
                          top: `${mousePosition.y}%`,
                          left: `${mousePosition.x}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"
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
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Text */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-0 left-0 text-8xl md:text-9xl font-black text-white/5 whitespace-nowrap pointer-events-none"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          AI & ML Developer • AR & VR Developer • GenAI Specialist •
        </motion.div>
      )}
    </section>
  );
}