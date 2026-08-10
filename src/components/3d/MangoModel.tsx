"use client";

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Group } from "three";
import * as THREE from "three";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function MangoModel(props: any) {
  // Use two groups: outer for props (position/scale from parent), inner for animation
  const outerGroup = useRef<Group>(null);
  const innerGroup = useRef<Group>(null);
  
  const { scene, animations } = useGLTF("/models/mango_export.glb");
  const { actions } = useAnimations(animations, innerGroup);
  
  const scrollProgress = useRef(0);

  // Setup GSAP ScrollTrigger
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom", 
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    setTimeout(() => ScrollTrigger.refresh(), 500);
    setTimeout(() => ScrollTrigger.refresh(), 2000);
  }, []);

  // Update the animation frame on every render tick
  useFrame((state, delta) => {
    if (!innerGroup.current) return;

    const p = scrollProgress.current;

    // Simplify the choreography to prevent the model from swinging off-screen
    // We use continuous mathematical curves for an elegant, organic feel that stays centered
    const targetRotY = p * Math.PI; // Rotates 180 degrees over the entire scroll
    
    // Subtle tilt on X and Z axes based on a sine wave of the scroll progress
    // This creates a natural "sway" that returns to normal at the end
    const targetRotX = Math.sin(p * Math.PI) * 0.15; 
    const targetRotZ = Math.cos(p * Math.PI * 2) * -0.05; 
    
    // Remove the drastic Y position shifts that were causing it to go off-screen
    const targetPosY = 0; 

    // Responsive scaling
    const isMobile = window.innerWidth < 768;
    const m = isMobile ? 0.4 : 1.0; // Shrink the sway even more on mobile

    // Apply smooth dampening to the inner group
    innerGroup.current.rotation.y = THREE.MathUtils.damp(innerGroup.current.rotation.y, targetRotY, 4, delta);
    innerGroup.current.rotation.x = THREE.MathUtils.damp(innerGroup.current.rotation.x, targetRotX * m, 4, delta);
    innerGroup.current.rotation.z = THREE.MathUtils.damp(innerGroup.current.rotation.z, targetRotZ * m, 4, delta);
    
    // Keep only a very subtle continuous float so it breathes
    const floatY = Math.sin(state.clock.elapsedTime * 1.2) * 0.05 * m;
    innerGroup.current.position.y = THREE.MathUtils.damp(innerGroup.current.position.y, floatY, 4, delta);

    // Apply Peel Animation mapping strictly to scroll progress like before
    if (!actions) return;
    
    const actionNames = Object.keys(actions);
    if (actionNames.length > 0) {
      actionNames.forEach((name) => {
        const action = actions[name];
        if (action) {
          if (!action.isRunning()) {
            action.play();
            action.paused = true;
          }
          const duration = action.getClip().duration;
          
          const ANIM_START_PERCENT = 0.40;
          const ANIM_END_PERCENT = 1.08;
          const startTime = duration * ANIM_START_PERCENT;
          const endTime = duration * ANIM_END_PERCENT;
          const activeDuration = endTime - startTime;
          
          // Map peeling exactly to scroll progress (p) for reliable control
          const targetTime = startTime + (p * activeDuration);
          
          // Add a tiny bit of dampening so the peeling feels slightly buttery
          action.time = THREE.MathUtils.damp(action.time || startTime, targetTime, 6, delta);
        }
      });
    }
  });

  return (
    <group ref={outerGroup} {...props} dispose={null}>
      <group ref={innerGroup}>
        <primitive object={scene} rotation={[0, 0, Math.PI]} />
      </group>
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/mango_export.glb");
