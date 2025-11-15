"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { CONTENT } from "@/lib/constants";

export default function ProjectsObjects() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[3, 1, 0]}>
      {/* Project cards as 3D planes */}
      {CONTENT.projects.map((project, i) => (
        <group key={project.id} position={[0, i * 1 - 1, 0]}>
          <RoundedBox args={[1.5, 0.8, 0.1]} radius={0.05}>
            <meshStandardMaterial
              color={project.color}
              metalness={0.7}
              roughness={0.3}
            />
          </RoundedBox>

          {/* Glow effect */}
          <pointLight
            position={[0, 0, 0.3]}
            color={project.color}
            intensity={0.5}
            distance={2}
          />
        </group>
      ))}
    </group>
  );
}
