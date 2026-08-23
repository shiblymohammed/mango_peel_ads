"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode, useEffect, useState } from 'react';

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: isMobile ? 0.1 : 0.05,
        duration: isMobile ? 1.0 : 1.6,
        smoothWheel: true,
        syncTouch: false, // Disables forced Lenis touch delay for native 1-to-1 mobile touch scroll
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

