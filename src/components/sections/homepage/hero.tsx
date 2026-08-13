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
          <div className="relative w-full lg:col-span-6 xl:col-span-6 order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            {/* Yellow stroke background for the mango model */}
            <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none z-0">
              <Image 
                src="/bg/yellowstroke-2.png" 
                alt="Yellow Stroke Background" 
                fill
                className="object-contain scale-[1.4] md:scale-[1.8] -rotate-6 -translate-x-12 md:-translate-x-20 translate-y-6 md:translate-y-10"
                priority
              />
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: HERO TYPOGRAPHY & CTA                                      */}
          {/* Matches the exact typography, colors, and buttons from your reference     */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="w-full lg:col-span-6 xl:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left relative pt-2 sm:pt-4 lg:pt-0 lg:ml-8 xl:ml-16 max-w-xl xl:max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="text-[#1F2937] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
                Stories That Create Impact
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F0A202]"></span>
            </motion.div>

            {/* Main Display Headline */}
            <h1 className="font-mileast font-extrabold tracking-tight select-none relative z-20 flex flex-col gap-y-1 sm:gap-y-2 text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]">
              {/* Line 1 */}
              <div className="flex flex-wrap gap-x-3 sm:gap-x-4">
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[#0F172A]"
                >
                  We Make
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[#0F172A]"
                >
                  People
                </motion.span>
              </div>

              {/* Line 2 */}
              <div className="flex flex-wrap gap-x-3 sm:gap-x-4 relative w-fit mt-1 sm:mt-2">
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[#2E7D32]"
                >
                  Stop
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-[#F0A202]"
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
              className="font-poppins text-[#64748B] text-base sm:text-lg lg:text-[17px] font-medium leading-[1.6] mt-6 sm:mt-8 max-w-lg relative z-20"
            >
              We&apos;re a creative advertising agency that builds stories, sparks emotions, and delivers real results for brands that dare to{" "}
              <span className="font-bold text-[#1F2937]">stand out.</span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 relative z-20 w-full"
            >
              {/* Primary CTA */}
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] transition-all duration-300 shadow-sm"
              >
                <span className="text-sm sm:text-base font-semibold tracking-wide">
                  View Our Work
                </span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/showreel"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-[#F0A202] bg-transparent text-[#0F172A] hover:bg-[#F0A202]/10 transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F0A202] flex items-center justify-center text-black shadow-sm">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="sm:w-[14px] sm:h-[14px] ml-0.5">
                      <path d="M8 5v14l11-7z" />
                   </svg>
                </div>
                <span className="text-sm sm:text-base font-semibold tracking-wide">
                  Watch Showreel
                </span>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-12 sm:mt-16 w-full grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-4 relative z-20"
            >
              {[
                {
                  value: 100, suffix: "+",
                  label: "Campaigns\nDelivered",
                  bgImage: "url('/bg/stroke-green.png')"
                },
                {
                  value: 50, suffix: "+",
                  label: "Happy\nClients",
                  bgImage: "url('/bg/stroke-yellow.png')"
                },
                {
                  value: 4, suffix: "+",
                  label: "Years of\nImpact",
                  bgImage: "url('/bg/stroke-green.png')"
                },
                {
                  value: 1, suffix: "M+",
                  label: "Views\nGenerated",
                  bgImage: "url('/bg/stroke-yellow.png')"
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.15, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center relative text-center group min-h-[120px]"
                >
                  <div 
                    className="absolute inset-0 z-0 bg-center bg-no-repeat bg-contain opacity-40 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: stat.bgImage, transform: 'scale(1.35)' }} 
                  />
                  
                  {/* Divider line - much darker now for visibility */}
                  <div className={`absolute right-[-10px] sm:right-[-12px] top-[10%] h-[80%] w-[1px] bg-[#0F3124]/30 ${index === 1 ? 'hidden sm:block' : ''} ${index === 3 ? 'hidden' : ''}`} />

                  <div className="relative z-10 text-3xl sm:text-[34px] font-extrabold text-[#0F3124] font-mileast leading-none mb-1.5 mt-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="relative z-10 text-[11px] sm:text-[12px] font-semibold text-[#0F3124]/80 whitespace-pre-line leading-[1.3] font-poppins">
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
