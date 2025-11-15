"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Navigation() {
  const scrollToSection = (sectionIndex: number) => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: sectionIndex * windowHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group fixed top-4 md:top-8 left-4 md:left-8 z-50 flex items-center gap-2 md:gap-3 cursor-pointer px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all duration-500 overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(66, 133, 244, 0.2), inset 0 1px 0 rgba(255,255,255,0.15)'
        }}
        onClick={() => scrollToSection(0)}
      >
        <Logo size={40} className="md:w-12 md:h-12" />
        <span className="text-base md:text-xl font-extrabold gradient-text hidden sm:inline tracking-tight">
          PortfolioDone
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-4 md:top-8 right-4 md:right-8 z-50 hidden sm:flex gap-2 md:gap-3 p-2 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        {["Home", "About", "Projects", "Contact"].map((section, index) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(index)}
            whileHover={{ scale: 1.05, y: -2, rotateX: 3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-500 overflow-hidden focus:outline-none"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <span className="relative z-10">{section}</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
        ))}
      </motion.nav>
    </>
  );
}
