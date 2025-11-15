"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CONTENT } from "@/lib/constants";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10 md:mb-12 text-center leading-tight gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-6 md:space-y-8">
          {CONTENT.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -6, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
              className="group relative p-6 md:p-8 rounded-2xl transition-all duration-500 overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >

              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 md:mb-4 leading-tight tracking-tight"
                    style={{
                      color: project.color,
                      textShadow: `0 0 30px ${project.color}40`
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-4 md:mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 rounded-2xl font-bold transition-all duration-400 overflow-hidden"
                    style={{
                      backgroundColor: project.color,
                      boxShadow: `0 10px 40px ${project.color}50, 0 4px 12px ${project.color}40, inset 0 1px 0 rgba(255,255,255,0.3)`,
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <span className="relative z-10">View Project →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
