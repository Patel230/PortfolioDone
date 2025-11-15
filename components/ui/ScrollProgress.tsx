"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      {/* Glow layer */}
      <motion.div
        className="absolute inset-0 blur-sm opacity-50"
        style={{
          scaleX: scrollProgress / 100,
          background: 'linear-gradient(90deg, #4285F4 0%, #8E44AD 50%, #DB4491 100%)'
        }}
        initial={{ scaleX: 0 }}
      />

      {/* Progress bar */}
      <motion.div
        className="absolute inset-0 shadow-[0_0_10px_currentColor]"
        style={{
          scaleX: scrollProgress / 100,
          background: 'linear-gradient(90deg, #4285F4 0%, #8E44AD 50%, #DB4491 100%)'
        }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
}
