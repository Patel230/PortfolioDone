"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ScrollCamera from "./ScrollCamera";
import HeroObjects from "./HeroObjects";
import AboutObjects from "./AboutObjects";
import ProjectsObjects from "./ProjectsObjects";
import ContactObjects from "./ContactObjects";
import { Stars, Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas
      className="fixed top-0 left-0 w-full h-full"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        {/* Environment */}
        <Environment preset="night" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Fog */}
        <fog attach="fog" args={["#0a0a0a", 5, 20]} />

        {/* Scroll-controlled camera */}
        <ScrollCamera />

        {/* 3D Objects for each section */}
        <HeroObjects />
        <AboutObjects />
        <ProjectsObjects />
        <ContactObjects />
      </Suspense>
    </Canvas>
  );
}
