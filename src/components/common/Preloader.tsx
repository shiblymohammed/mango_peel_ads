"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

export default function Preloader() {
  const { progress, active } = useProgress();
  const [loading, setLoading] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    // Ensure the preloader stays at least for a tiny bit so it's not a jarring flash
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 1500); // 1.5 seconds minimum
    
    // Fallback timeout just in case it gets stuck
    const fallback = setTimeout(() => {
      setLoading(false);
    }, 8000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    // When progress hits 100, or if it never became active after a while (no 3D models)
    if (progress >= 100 && minTimePassed) {
      setLoading(false);
    }
  }, [progress, minTimePassed]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Refresh scroll trigger after preloader is gone and layout is final
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 500);
      
      // Also manually refresh ScrollTrigger if it's loaded in window
      setTimeout(() => {
        if ((window as any).ScrollTrigger) {
          (window as any).ScrollTrigger.refresh();
        }
      }, 800);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="fixed inset-0 z-[9999] bg-[#F4F1E8] flex flex-col items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("/bg/french-stucco.png")',
            backgroundRepeat: 'repeat',
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Minimalist Brand Name */}
            <h2 className="text-[#0F3124] font-poppins font-semibold text-[11px] sm:text-[13px] uppercase tracking-[0.4em] mb-6">
              Mango Peel
            </h2>

            {/* Ultra-thin elegant progress bar */}
            <div className="w-40 sm:w-56 h-[1px] bg-[#0F3124]/10 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#0F3124]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.3 }}
              />
            </div>
            
            {/* Subtle Percentage */}
            <div className="mt-4 text-[#0F3124]/40 font-poppins text-[10px] tracking-widest">
              {progress === 100 ? "READY" : `${Math.round(progress)}%`}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
