"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

export default function AboutObjects() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(t + i) * 0.2;
      });
    }
  });

  return (
    <group ref={groupRef} position={[-3, 2, 0]}>
      {/* Floating cubes representing skills */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <RoundedBox
          key={i}
          args={[0.5, 0.5, 0.5]}
          radius={0.05}
          position={[
            (i % 3) * 0.8 - 0.8,
            Math.floor(i / 3) * 0.8,
            0,
          ]}
        >
          <meshStandardMaterial
            color="#10b981"
            metalness={0.6}
            roughness={0.4}
          />
        </RoundedBox>
      ))}
    </group>
  );
}
