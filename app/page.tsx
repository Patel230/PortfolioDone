"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navigation from "@/components/ui/Navigation";
import SectionIndicators from "@/components/ui/SectionIndicators";

const Scene = dynamic(() => import("@/components/3d/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <SectionIndicators />
      <Scene />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
