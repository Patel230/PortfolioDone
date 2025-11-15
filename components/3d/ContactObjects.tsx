"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function ContactObjects() {
  const torusRef = useRef<THREE.Mesh>(null);
  const spheresRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
    }

    if (spheresRef.current) {
      spheresRef.current.rotation.y = -t * 0.5;
    }
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Central torus */}
      <Torus ref={torusRef} args={[1, 0.3, 16, 100]}>
        <meshStandardMaterial
          color="#ec4899"
          metalness={0.8}
          roughness={0.2}
          emissive="#ec4899"
          emissiveIntensity={0.3}
        />
      </Torus>

      {/* Orbiting contact spheres */}
      <group ref={spheresRef}>
        {[0, 1, 2].map((i) => {
          const angle = (i / 3) * Math.PI * 2;
          const radius = 1.8;
          return (
            <Sphere
              key={i}
              args={[0.15, 32, 32]}
              position={[
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius,
              ]}
            >
              <meshStandardMaterial
                color="#10b981"
                emissive="#10b981"
                emissiveIntensity={0.5}
              />
            </Sphere>
          );
        })}
      </group>
    </group>
  );
}
