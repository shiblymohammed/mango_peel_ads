"use client";

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.03, // Lower lerp for heavier/smoother weight
        duration: 2.0,
        smoothWheel: true,
        syncTouch: true, // Enables smooth scrolling on touch devices (mobile)
        touchMultiplier: 1.0, // Reduces mobile scroll speed (default is 2.0)
      }}
    >
      {children}
    </ReactLenis>
  )
}
