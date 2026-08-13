"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { MangoModel } from "./MangoModel";

export default function MangoCanvas() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div 
        className="sticky top-0 h-screen w-full"
        style={{ filter: 'drop-shadow(-20px 100px 40px rgba(26, 67, 20, 0.5))' }}
      >
        <Canvas shadows>
          {/* Default camera */}
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />

          {/* Layer 3: Better Lighting Setup (Three-point lighting + Environment) */}
          <ambientLight intensity={0.8} />
          
          {/* Key Light - Main illumination and mesh shadows (Layer 1) */}
          <directionalLight 
            position={[-10, 30, 8]} 
            intensity={2.5} 
            castShadow 
            shadow-mapSize={[2048, 2048]} 
            shadow-bias={-0.0001}
          />
          
          {/* Fill Light - Softens shadows on the unlit side */}
          <directionalLight 
            position={[10, 0, 5]} 
            intensity={1.0} 
            color="#FFF4E0"
          />
          
          {/* Rim Light - Highlights the edge of the mango */}
          <spotLight 
            position={[-5, -5, -10]} 
            intensity={5} 
            angle={0.5} 
            penumbra={1} 
            color="#FFB800" 
          />

          {/* Environment map for realistic reflections (assuming PBR materials) */}
          <Environment preset="city" />

          <Suspense fallback={null}>
            {/* 
              Start the mango positioned on the right to match the hero section placeholder, 
              and slightly scaled up depending on the model's native size.
            */}
            <MangoModel position={[-4, 3.0, 0]} scale={7.0} rotation={[0.2, 0.5, 0]} />
            
            {/* Layer 2: Soft ambient shadows underneath (Two-layer composite) */}
            {/* Broad, very soft ambient shadow */}
            <ContactShadows 
              position={[-4, -1.0, 0]} 
              opacity={0.35} 
              scale={35} 
              blur={3.5} 
              far={15} 
              color="#0F172A" 
              resolution={256} 
            />
            {/* Tighter, darker contact shadow */}
            <ContactShadows 
              position={[-4, -1.0, 0]} 
              opacity={0.65} 
              scale={15} 
              blur={1.2} 
              far={10} 
              color="#1A4314" 
              resolution={512} 
            />
          </Suspense>


        </Canvas>
      </div>
    </div>
  );
}
