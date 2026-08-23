"use client";

import { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Briefcase } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(0, value, {
        duration: 2.2,
        ease: "easeOut",
        delay: 0.8,
        onUpdate(v) {
          node.textContent = Math.floor(v) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [value, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-20 sm:pt-28 pb-12 lg:py-0 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Highlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FFB800]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#2E7D32]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-100px)]">
          {/* ========================================================================= */}
          {/* 3D MODEL PLACEHOLDER / BACKGROUND (DESKTOP ONLY)                          */}
          {/* ========================================================================= */}
          <div className="hidden lg:flex relative w-full lg:col-span-5 order-1 min-h-[500px] items-center justify-center">
             {/* Model renders here via MangoCanvas */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: HERO TYPOGRAPHY & CTA                                      */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full col-span-12 lg:col-span-7 order-2 flex flex-col items-start text-left relative pt-0 lg:ml-4 xl:ml-8 max-w-full sm:max-w-2xl md:max-w-3xl xl:max-w-3xl"
          >
            {/* Agency Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/25 mb-4 sm:mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2E7D32] font-poppins">
                Creative Advertising Agency
              </span>
            </motion.div>

            {/* Main Display Headline */}
            <h1 className="font-mileast font-extrabold tracking-tight select-none relative z-20 flex flex-col items-start gap-y-1 text-[36px] xs:text-[44px] sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[88px] 2xl:text-[98px] leading-[1.02] sm:leading-[0.95]">
              {/* Line 1 */}
              <div className="flex flex-wrap justify-start gap-x-2 sm:gap-x-3 md:gap-x-4">
                <motion.span
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#0F172A] inline-block"
                >
                  We Make
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#0F172A] inline-block"
                >
                  People
                </motion.span>
              </div>

              {/* Line 2 */}
              <div className="flex flex-wrap justify-start gap-x-2 sm:gap-x-3 md:gap-x-4 relative w-fit mt-0.5 sm:mt-1">
                <motion.span
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#2E7D32] inline-block"
                >
                  Stop
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#F0A202] inline-block"
                >
                  Scrolling.
                </motion.span>
              </div>
            </h1>

            {/* Subtitle / Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="font-poppins text-[#475569] text-[14px] xs:text-[16px] sm:text-lg font-medium leading-relaxed mt-4 sm:mt-6 lg:mt-8 max-w-xl relative z-20"
            >
              We build compelling stories, spark deep brand emotions, and deliver undeniable market results for brands that dare to <span className="font-bold text-[#0B132B]">stand out.</span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 sm:mt-8 lg:mt-10 flex flex-col xs:flex-row items-stretch xs:items-center justify-start gap-3 sm:gap-4 lg:gap-6 relative z-20 w-full xs:w-auto"
            >
              {/* Primary CTA */}
              <Link
                href="/works"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#2E7D32] overflow-hidden transition-all duration-500 shadow-[0_8px_25px_rgba(46,125,50,0.25)] lg:hover:shadow-[0_12px_30px_rgba(46,125,50,0.35)] lg:hover:-translate-y-1 active:scale-95 w-full xs:w-auto text-center"
              >
                <div className="absolute inset-0 bg-[#F0A202] translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                
                <span className="relative z-10 text-[13px] sm:text-[14px] font-extrabold tracking-[0.15em] uppercase text-white lg:group-hover:text-[#0F3124] transition-colors duration-500">
                  View Our Work
                </span>
                <ArrowUpRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-white lg:group-hover:text-[#0F3124] transition-all duration-500 lg:group-hover:rotate-45" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-[#0F172A]/20 bg-white/50 backdrop-blur-sm lg:hover:border-[#F0A202] lg:hover:bg-[#F0A202]/10 transition-all duration-500 active:scale-95 w-full xs:w-auto text-center"
              >
                <div className="w-6 h-6 rounded-full bg-[#F0A202]/20 flex items-center justify-center lg:group-hover:bg-[#F0A202] transition-colors duration-500">
                   <Briefcase className="w-3.5 h-3.5 text-[#F0A202] lg:group-hover:text-black transition-colors duration-500" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] sm:text-[14px] font-extrabold tracking-[0.15em] uppercase text-[#0F172A]">
                  Our Services
                </span>
              </Link>
            </motion.div>

            {/* Stats Glass Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-8 sm:mt-12 lg:mt-14 w-full bg-white/75 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-full border border-[#0B132B]/12 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-items-center relative z-20"
            >
              {[
                { value: 100, suffix: "+", label: "Ad Films" },
                { value: 50, suffix: "+", label: "Brands" },
                { value: 25, suffix: "+", label: "Campaigns" },
                { value: 10, suffix: "M+", label: "Views" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center text-center relative w-full"
                >
                  {/* Dashed divider for desktop */}
                  {index !== 3 && (
                    <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[40px] border-r border-dashed border-[#0B132B]/20" />
                  )}

                  <div className="text-[28px] xs:text-[32px] sm:text-3xl lg:text-[40px] font-extrabold text-[#0F3124] font-mileast leading-none mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] xs:text-[12px] font-bold text-[#0F3124]/75 uppercase tracking-widest font-poppins">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
