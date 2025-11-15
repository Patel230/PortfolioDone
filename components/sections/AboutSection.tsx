"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CONTENT } from "@/lib/constants";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="flex items-center justify-center px-6">
      <div className="max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 md:mb-8 leading-tight tracking-tight gradient-text"
          style={{
            textShadow: '0 0 50px rgba(66, 133, 244, 0.3), 0 0 25px rgba(142, 68, 173, 0.2)'
          }}
        >
          {CONTENT.about.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 md:mb-12 leading-relaxed"
        >
          {CONTENT.about.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 gradient-text">Skills & Technologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {CONTENT.about.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.03, y: -4, rotateX: 3, rotateY: index % 2 === 0 ? -3 : 3 }}
                className="group relative px-6 py-4 rounded-xl text-center font-medium transition-all duration-500 overflow-hidden cursor-default"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <span className="relative z-10">{skill}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
