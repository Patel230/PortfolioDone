"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["Home", "About", "Projects", "Contact"];

export default function SectionIndicators() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;
      const totalHeight = document.documentElement.scrollHeight;
      const sectionHeight = totalHeight / 4;

      const current = Math.floor(scrollPosition / sectionHeight);
      setActiveSection(Math.min(current, 3));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: index * windowHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => scrollToSection(index)}
          className="group relative flex items-center focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded-full"
          aria-label={`Navigate to ${section} section`}
        >
          {/* Dot */}
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === index
                ? "border-transparent"
                : "bg-transparent border-white/30"
            }`}
            style={activeSection === index ? {
              background: 'linear-gradient(135deg, #4285F4 0%, #8E44AD 100%)'
            } : {}}
          />

          {/* Label on hover */}
          <span className="absolute right-6 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {section}
          </span>
        </button>
      ))}
    </div>
  );
}
