"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  type: "about" | "projects";
}

export default function Parallax({ type }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      ref={ref}
      className={`relative h-screen flex items-center justify-center overflow-hidden ${
        type === "about"
          ? "bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900"
      }`}
    >
      <motion.h1
        className="text-6xl md:text-8xl lg:text-9xl font-black text-white text-center z-30 relative"
        style={{ y: yText }}
      >
        {type === "about" ? "About Me" : "My Projects"}
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-20"
        style={{
          y: yBg,
          backgroundImage: "url('/mountains.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="absolute inset-0 z-10"
        style={{
          y: yBg,
          backgroundImage: type === "about" ? "url('/planets.png')" : "url('/sun.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: yBg,
          backgroundImage: "url('/stars.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}