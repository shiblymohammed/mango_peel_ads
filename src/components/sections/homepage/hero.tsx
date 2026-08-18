"use client";

import { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clapperboard, Target, Rocket, Briefcase, Smile, Star, Eye } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        delay: 1.2,
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
    <section className="relative w-full min-h-screen pt-28 pb-16 lg:py-0 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Highlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-110px)]">
          {/* ========================================================================= */}
          {/* 3D MODEL PLACEHOLDER / BACKGROUND                                         */}
          {/* ========================================================================= */}
          <div className="relative w-full lg:col-span-5 xl:col-span-5 order-2 lg:order-1 hidden lg:flex min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] items-center justify-center">
             {/* Model renders here via MangoCanvas */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: HERO TYPOGRAPHY & CTA                                      */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-center sm:items-start text-center sm:text-left relative pt-[45vh] sm:pt-[50vh] lg:pt-0 lg:ml-4 xl:ml-8 max-w-full sm:max-w-2xl xl:max-w-3xl"
          >
            {/* Main Display Headline */}
            <h1 className="font-mileast font-extrabold tracking-tight select-none relative z-20 flex flex-col items-center sm:items-start gap-y-0 sm:gap-y-1 md:gap-y-2 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[1.0] sm:leading-[0.95] md:leading-[0.92]">
              {/* Line 1 */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-1.5 sm:gap-x-3 md:gap-x-4">
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#0F172A] inline-block"
                >
                  We Make
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#0F172A] inline-block"
                >
                  People
                </motion.span>
              </div>

              {/* Line 2 */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-1.5 sm:gap-x-3 md:gap-x-4 relative w-fit mt-0.5 sm:mt-2">
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#2E7D32] inline-block"
                >
                  Stop
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.0, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
              className="font-poppins text-[#64748B] text-xs sm:text-base lg:text-[17px] font-medium leading-[1.4] sm:leading-[1.6] mt-2 sm:mt-8 max-w-[280px] xs:max-w-[320px] sm:max-w-lg lg:max-w-none lg:whitespace-nowrap relative z-20"
            >
              We&apos;re a creative advertising agency that builds stories, sparks emotions,<br /> and delivers real results for brands that dare to{" "}
              <span className="font-bold text-[#1F2937]">stand out.</span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 sm:mt-12 flex flex-row flex-wrap items-center sm:items-start gap-3 sm:gap-6 relative z-20 w-full justify-center sm:justify-start"
            >
              {/* Primary CTA */}
              <Link
                href="/works"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-[18px] rounded-full bg-[#2E7D32] overflow-hidden transition-all duration-500 shadow-[0_8px_25px_rgba(46,125,50,0.25)] lg:hover:shadow-[0_12px_30px_rgba(46,125,50,0.35)] lg:hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-[#F0A202] translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                
                <span className="relative z-10 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white lg:group-hover:text-[#0F3124] transition-colors duration-500">
                  View Our Work
                </span>
                <ArrowUpRight className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 text-white lg:group-hover:text-[#0F3124] transition-all duration-500 lg:group-hover:rotate-45" />
              </Link>

              {/* Secondary CTA - Minimalist Outline */}
              <Link
                href="/showreel"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-[18px] rounded-full border border-[#0F172A]/15 bg-transparent lg:hover:border-[#F0A202] lg:hover:bg-[#F0A202]/5 transition-all duration-500"
              >
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#F0A202]/20 flex items-center justify-center lg:group-hover:bg-[#F0A202] transition-colors duration-500">
                   <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#F0A202] lg:group-hover:text-black ml-0.5 transition-colors duration-500 w-2 h-2 sm:w-3 sm:h-3">
                      <path d="M8 5v14l11-7z" />
                   </svg>
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#0F172A]">
                  Showreel
                </span>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-6 sm:mt-16 w-full grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-2 sm:gap-x-4 relative z-20"
            >
              {[
                {
                  value: 100, suffix: "+",
                  label: "Ad Films"
                },
                {
                  value: 50, suffix: "+",
                  label: "Brands"
                },
                {
                  value: 25, suffix: "+",
                  label: "Campaigns"
                },
                {
                  value: 10, suffix: "M+",
                  label: "Views"
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.15, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center relative text-center group min-h-[50px] sm:min-h-[120px]"
                >
                  {/* Divider line */}
                  <div className={`absolute right-[-4px] sm:right-[-12px] top-[15%] h-[70%] w-[1px] bg-[#0F3124]/20 ${index === 3 ? 'hidden' : ''} ${index === 1 ? 'hidden sm:block' : ''}`} />

                  <div className="relative z-10 text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F3124] font-mileast leading-none mb-1 sm:mb-2 mt-0.5 sm:mt-2 transition-transform duration-300 lg:group-hover:-translate-y-1 lg:group-hover:scale-105 lg:group-hover:text-[#2E7D32]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="relative z-10 text-[9px] sm:text-[11px] lg:text-[13px] font-bold text-[#0F3124]/70 uppercase tracking-[0.1em] sm:tracking-[0.15em] whitespace-pre-line leading-[1.1] sm:leading-[1.3] font-poppins block transition-colors duration-300 lg:group-hover:text-[#0F3124]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
