"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CONTENT } from "@/lib/constants";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 md:mb-6 gradient-text leading-tight tracking-tight"
          style={{
            textShadow: '0 0 50px rgba(66, 133, 244, 0.3), 0 0 25px rgba(142, 68, 173, 0.2)'
          }}
        >
          {CONTENT.contact.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          {CONTENT.contact.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <motion.a
            href={`mailto:${CONTENT.contact.email}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-block px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-2xl font-bold transition-all duration-400 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #8E44AD 0%, #DB4491 100%)',
              boxShadow: '0 10px 40px rgba(142, 68, 173, 0.5), 0 4px 12px rgba(219, 68, 145, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <span className="relative z-10">{CONTENT.contact.email}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4 md:gap-6 flex-wrap"
        >
          {Object.entries(CONTENT.contact.social)
            .filter(([platform]) => platform !== 'phone')
            .map(([platform, url], index) => (
              <motion.a
                key={platform}
                href={url}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                className="group relative px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold capitalize text-sm md:text-base transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">{platform}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>
            ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            Built with ❤️ with Technology
          </p>
          <p className="text-gray-500 mt-2">
            © 2025 Lakshman Patel. All rights reserved
          </p>
          <p className="text-gray-600 text-sm mt-1">
            📍 Gurgaon, India
          </p>
          <p className="text-gray-600 text-sm mt-1">
            📞 {CONTENT.contact.social.phone}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
