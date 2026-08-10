"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { MangoModel } from "./MangoModel";

export default function MangoCanvas() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full">
        <Canvas shadows>
          {/* Default camera */}
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />

          {/* Lighting setup to make the mango look great */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />

          {/* Environment map for realistic reflections (assuming PBR materials) */}
          <Environment preset="city" />

          <Suspense fallback={null}>
            {/* 
              Start the mango positioned on the right to match the hero section placeholder, 
              and slightly scaled up depending on the model's native size.
            */}
            <MangoModel position={[-4, 3.0, 0]} scale={7.0} rotation={[0.2, 0.5, 0]} />
            {/* Add a realistic soft shadow to blend the model with the webpage background */}
            <ContactShadows position={[-4, -0.5, 0]} opacity={0.4} scale={20} blur={2.5} far={10} color="#000000" />
          </Suspense>


        </Canvas>
      </div>
    </div>
  );
}
