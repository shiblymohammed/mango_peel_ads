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
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="fixed inset-0 z-[9999] bg-[#F4F1E8] flex flex-col items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("/bg/french-stucco.png")',
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="relative flex flex-col items-center z-10">
            {/* Simple outline/Spinner */}
            <div className="w-16 h-16 border-4 border-[#2E7D32]/20 border-t-[#FFB800] rounded-full animate-spin mb-6" />
            <motion.h2 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#0B132B] font-mileast text-2xl tracking-widest uppercase mb-2"
            >
              Loading...
            </motion.h2>
            <div className="w-48 h-1.5 bg-[#0B132B]/10 rounded-full overflow-hidden shadow-inner">
              <motion.div 
                className="h-full bg-[#2E7D32]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.3 }}
              />
            </div>
            <div className="mt-2 text-[#0B132B]/60 font-poppins text-xs font-bold">
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
