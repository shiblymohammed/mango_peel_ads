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
        syncTouch: true, // Enable smooth scrolling on touch devices (mobile)
      }}
    >
      {children}
    </ReactLenis>
  )
}
