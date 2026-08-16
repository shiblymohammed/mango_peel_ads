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
  const translationGroup = useRef<Group>(null);
  const innerGroup = useRef<Group>(null);
  const spinLinesGroup = useRef<Group>(null);
  const materialsRef = useRef<(THREE.MeshBasicMaterial | null)[]>([]);
  const prevRotY = useRef(0);
  
  const { scene, animations } = useGLTF("/models/mango_export-optimized.glb");
  const { actions } = useAnimations(animations, innerGroup);
  
  // Enable shadows on the model
  React.useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  const scrollProgress = useRef(0);

  // Setup GSAP ScrollTrigger and Entrance Animation
  useGSAP(() => {
    // 1. Fast, spinning entrance drop
    if (outerGroup.current) {
      gsap.from(outerGroup.current.position, {
        y: 10,
        duration: 1.5, // Slower drop
        ease: "power2.out",
        delay: 0.4
      });
      gsap.from(outerGroup.current.rotation, {
        x: Math.PI / 2,
        y: Math.PI,
        z: Math.PI / 4,
        duration: 2.0, // Slower spin
        ease: "power2.out",
        delay: 0.4
      });
    }

    // 2. ScrollTrigger
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

  // Notify parent that the model is loaded and ready for entrance effects
  React.useEffect(() => {
    // Small timeout prevents race conditions if the model loads instantly from cache
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("mangoLoaded"));
    }, 50);
    return () => clearTimeout(timer);
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

    // Extra hero section animation: larger and extra tilted at the very top
    // Fades out by the time p reaches 0.15 (as they scroll past hero)
    const heroEffect = Math.max(0, 1 - p * 6.66); 
    
    // On mobile, shrink significantly (to 0.55x). On desktop, keep normal size (1.0x).
    const baseScale = isMobile ? 0.55 : 1.0;
    const topScaleBonus = 1.25 - baseScale;
    const targetScale = baseScale + (topScaleBonus * heroEffect); 
    
    const extraTiltX = -0.1 * heroEffect; 
    const extraTiltZ = 0.1 * heroEffect;

    // Calculate mouse spin effect (only active in the hero section because of * heroEffect)
    // Increase the multiplier to make it spin multiple times across the screen
    const mouseSpinY = state.pointer.x * (Math.PI * 3) * heroEffect; 

    // Apply smooth dampening to the inner group
    innerGroup.current.scale.setScalar(THREE.MathUtils.damp(innerGroup.current.scale.x, targetScale, 4, delta));

    if (translationGroup.current) {
      // Move to right edge on mobile when scrolling down
      const targetPosX = isMobile ? (1 - heroEffect) * 1.8 : 0;
      translationGroup.current.position.x = THREE.MathUtils.damp(translationGroup.current.position.x, targetPosX, 4, delta);
    }

    // Increase damp factor for Y rotation so it reacts much faster to mouse movements
    innerGroup.current.rotation.y = THREE.MathUtils.damp(innerGroup.current.rotation.y, targetRotY + mouseSpinY, 10, delta);
    innerGroup.current.rotation.x = THREE.MathUtils.damp(innerGroup.current.rotation.x, targetRotX * m + extraTiltX, 4, delta);
    innerGroup.current.rotation.z = THREE.MathUtils.damp(innerGroup.current.rotation.z, targetRotZ * m + extraTiltZ, 4, delta);
    
    // Dynamic 3D Speed Lines Logic
    if (spinLinesGroup.current && innerGroup.current) {
      const currentRotY = innerGroup.current.rotation.y;
      const velocityY = (currentRotY - prevRotY.current) / delta;
      prevRotY.current = currentRotY;

      const absVelocity = Math.abs(velocityY);
      // Keep lines permanently visible (e.g., 0.35 opacity) and brighten up to 0.95 when spinning fast
      const targetOpacity = 0.35 + Math.max(0, Math.min(0.6, absVelocity / 4.0));

      // Make the speed lines constantly spin around the mango, plus extra based on velocity
      spinLinesGroup.current.rotation.y += (0.6 + velocityY * 1.5) * delta;
      
      // Match the tilt and scale of the mango so the rings stay perfectly aligned
      spinLinesGroup.current.rotation.x = innerGroup.current.rotation.x;
      spinLinesGroup.current.rotation.z = innerGroup.current.rotation.z;
      spinLinesGroup.current.scale.copy(innerGroup.current.scale);

      // Apply opacity to all the 3D curves
      materialsRef.current.forEach(mat => {
        if (mat) {
          mat.opacity = THREE.MathUtils.damp(mat.opacity, targetOpacity * 0.9, 10, delta);
        }
      });
    }

    // Keep only a very subtle continuous float so it breathes, but disable it in the hero section
    const floatY = Math.sin(state.clock.elapsedTime * 1.2) * 0.05 * m * (1 - heroEffect);
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
      <group ref={translationGroup}>
        {/* 3D Motion Blur Lines */}
        <group ref={spinLinesGroup}>
          {/* Equator Lines (Middle) */}
          <group rotation={[0, 0, 0]} position={[0, -0.5, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.35, 0.002, 8, 32, Math.PI / 1.5]} />
              <meshBasicMaterial ref={(el) => { materialsRef.current[0] = el; }} color="#2E7D32" transparent opacity={0} />
            </mesh>
          </group>
          <group rotation={[0, Math.PI, 0]} position={[0, -0.5, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.35, 0.002, 8, 32, Math.PI / 1.5]} />
              <meshBasicMaterial ref={(el) => { materialsRef.current[1] = el; }} color="#FFB800" transparent opacity={0} />
            </mesh>
          </group>

          {/* Upper Lines */}
          <group rotation={[0, Math.PI / 2, 0]} position={[0, -0.4, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.3, 0.0015, 8, 32, Math.PI / 1.8]} />
              <meshBasicMaterial ref={(el) => { materialsRef.current[2] = el; }} color="#FFB800" transparent opacity={0} />
            </mesh>
          </group>
          <group rotation={[0, -Math.PI / 2, 0]} position={[0, -0.4, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.3, 0.0015, 8, 32, Math.PI / 1.8]} />
              <meshBasicMaterial ref={(el) => { materialsRef.current[3] = el; }} color="#2E7D32" transparent opacity={0} />
            </mesh>
          </group>

          {/* Lower Lines */}
          <group rotation={[0, Math.PI / 4, 0]} position={[0, -0.6, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.3, 0.0015, 8, 32, Math.PI / 1.8]} />
              <meshBasicMaterial ref={(el) => { materialsRef.current[4] = el; }} color="#2E7D32" transparent opacity={0} />
            </mesh>
          </group>
          <group rotation={[0, Math.PI + Math.PI / 4, 0]} position={[0, -0.6, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.3, 0.0015, 8, 32, Math.PI / 1.8]} />
              <meshBasicMaterial ref={(el) => { materialsRef.current[5] = el; }} color="#FFB800" transparent opacity={0} />
            </mesh>
          </group>
          
          {/* Small Cap Lines (Top & Bottom) */}
          <group rotation={[0, Math.PI / 3, 0]} position={[0, -0.3, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.15, 0.001, 8, 32, Math.PI]} />
              <meshBasicMaterial ref={(el) => { materialsRef.current[6] = el; }} color="#2E7D32" transparent opacity={0} />
            </mesh>
          </group>
          <group rotation={[0, -Math.PI / 3, 0]} position={[0, -0.7, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.15, 0.001, 8, 32, Math.PI]} />
              <meshBasicMaterial ref={(el) => { materialsRef.current[7] = el; }} color="#FFB800" transparent opacity={0} />
            </mesh>
          </group>
        </group>

        <group ref={innerGroup} scale={1.25}>
          <primitive object={scene} rotation={[0, 0, Math.PI]} />
        </group>
        
        {props.children}
      </group>
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/mango_export-optimized.glb");
