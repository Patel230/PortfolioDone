"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4 md:mb-6 gradient-text leading-[1.1] tracking-tight"
        style={{
          textShadow: '0 0 60px rgba(66, 133, 244, 0.3), 0 0 30px rgba(142, 68, 173, 0.2)'
        }}
      >
        {CONTENT.hero.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed"
        style={{
          textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        {CONTENT.hero.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -4, rotateX: 5, rotateY: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" })}
          className="group relative px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black overflow-hidden"
          style={{
            background: 'rgba(66, 133, 244, 0.15)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(66, 133, 244, 0.3)',
            boxShadow: '0 8px 32px rgba(66, 133, 244, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <span className="relative z-10">View Work</span>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, y: -4, rotateX: 5, rotateY: 5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: "smooth" })}
          className="group relative px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold transition-all duration-500 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.15)',
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
