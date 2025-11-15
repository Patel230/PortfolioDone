"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { CAMERA_POSITIONS, SECTIONS } from "@/lib/constants";

export default function ScrollCamera() {
  const cameraRef = useRef<any>();
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalSections = 4;

      // Calculate which section we're in (0-3)
      const sectionIndex = Math.min(
        Math.floor((scrollY / windowHeight) * totalSections) / totalSections * (totalSections - 1),
        totalSections - 1
      );

      // Interpolate between sections
      const progress = (scrollY / windowHeight);
      const currentSection = Math.floor(progress);
      const nextSection = Math.min(currentSection + 1, totalSections - 1);
      const sectionProgress = progress - currentSection;

      if (currentSection < totalSections && nextSection < totalSections) {
        const currentPos = CAMERA_POSITIONS[currentSection];
        const nextPos = CAMERA_POSITIONS[nextSection];

        gsap.to(camera.position, {
          x: currentPos.x + (nextPos.x - currentPos.x) * sectionProgress,
          y: currentPos.y + (nextPos.y - currentPos.y) * sectionProgress,
          z: currentPos.z + (nextPos.z - currentPos.z) * sectionProgress,
          duration: 1,
          ease: "power2.out",
        });
      }

      // Rotate camera slightly based on scroll
      gsap.to(camera.rotation, {
        y: progress * 0.1,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [camera]);

  useFrame(() => {
    // Look at center
    camera.lookAt(0, 0, 0);
  });

  return null;
}
