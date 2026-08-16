"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { MangoModel } from "./MangoModel";
import { motion } from "framer-motion";

function SpeedLines() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setShow(true);
      // Hide the speed lines after the slower mango drop has completely settled
      setTimeout(() => setShow(false), 2400);
    };

    window.addEventListener("mangoLoaded", handleLoad);
    return () => window.removeEventListener("mangoLoaded", handleLoad);
  }, []);

  if (!show) return null;

  // Generate lightweight vertical speed lines tightly focused around the mango
  const lines = Array.from({ length: 10 }).map((_, i) => {
    // Mango is roughly at 30% left. Restrict tightly to 26%-34% so it's ONLY around the mango.
    const left = 26 + Math.random() * 8; 
    const height = 60 + Math.random() * 100; // Shorter lines
    // Start BEFORE the mango drops (mango drop starts at 0.4s)
    const delay = 0.2 + Math.random() * 0.2; 
    const duration = 0.2 + Math.random() * 0.2; // Very fast
    const width = Math.random() > 0.8 ? 3 : 1.5;
    
    return (
      <motion.div
        key={i}
        className="absolute top-0 bg-white/90 rounded-full z-20"
        style={{
          left: `${left}%`,
          width: `${width}px`,
          height: `${height}px`,
        }}
        initial={{ y: -height, opacity: 0 }}
        animate={{ y: "100vh", opacity: [0, 1, 1, 0] }}
        transition={{
          duration,
          delay,
          ease: "linear",
          times: [0, 0.1, 0.8, 1],
          repeat: 4 // Repeat enough times to span the drop
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {lines}
    </div>
  );
}

export default function MangoCanvas() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <SpeedLines />
      <div 
        className="sticky top-0 h-screen w-full"
        style={{ filter: 'drop-shadow(-20px 100px 40px rgba(26, 67, 20, 0.5))' }}
      >
        <Canvas shadows style={{ pointerEvents: 'none' }}>
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
            <MangoModel position={[-3.3, 3.8, 0]} scale={7.0} rotation={[0.2, 0.5, 0]} />
            
            {/* Layer 2: Soft ambient shadows underneath (Two-layer composite) */}
            {/* Broad, very soft ambient shadow */}
            <ContactShadows 
              position={[-3.3, -1.0, 0]} 
              opacity={0.35} 
              scale={35} 
              blur={3.5} 
              far={15} 
              color="#0F172A" 
              resolution={256} 
            />
            {/* Tighter, darker contact shadow */}
            <ContactShadows 
              position={[-3.3, -1.0, 0]} 
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
