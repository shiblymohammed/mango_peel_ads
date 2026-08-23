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
        <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-110px)]">
          {/* ========================================================================= */}
          {/* 3D MODEL PLACEHOLDER / BACKGROUND                                         */}
          {/* ========================================================================= */}
          <div className="relative w-full col-span-5 order-1 flex min-h-[250px] sm:min-h-[400px] lg:min-h-[600px] items-center justify-center">
             {/* Model renders here via MangoCanvas */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: HERO TYPOGRAPHY & CTA                                      */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="w-full col-span-7 order-2 flex flex-col items-start text-left relative pt-0 lg:ml-4 xl:ml-8 max-w-full sm:max-w-2xl md:max-w-3xl xl:max-w-3xl"
          >
            {/* Main Display Headline */}
            <h1 className="font-mileast font-extrabold tracking-tight select-none relative z-20 flex flex-col items-start gap-y-0 sm:gap-y-1 md:gap-y-2 text-[32px] xs:text-[40px] sm:text-4xl md:text-5xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[1.0] sm:leading-[0.95] md:leading-[0.92]">
              {/* Line 1 */}
              <div className="flex flex-wrap justify-start gap-x-1 sm:gap-x-1.5 md:gap-x-4">
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
              <div className="flex flex-wrap justify-start gap-x-1 sm:gap-x-1.5 md:gap-x-4 relative w-fit mt-0 sm:mt-0.5 lg:mt-2">
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
              className="font-poppins text-[#64748B] text-[13px] xs:text-[15px] sm:text-xs lg:text-[17px] font-medium leading-[1.3] sm:leading-[1.4] lg:leading-[1.6] mt-2 sm:mt-4 lg:mt-8 max-w-[90%] sm:max-w-md lg:max-w-none lg:whitespace-nowrap relative z-20"
            >
              We&apos;re a creative advertising agency that builds stories, sparks emotions,<br /> and delivers real results for brands that dare to{" "}
              <span className="font-bold text-[#1F2937]">stand out.</span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 sm:mt-6 lg:mt-12 flex flex-row flex-wrap items-center justify-start gap-2.5 sm:gap-4 lg:gap-6 relative z-20 w-full"
            >
              {/* Primary CTA */}
              <Link
                href="/works"
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 lg:px-10 lg:py-[18px] rounded-full bg-[#2E7D32] overflow-hidden transition-all duration-500 shadow-[0_8px_25px_rgba(46,125,50,0.25)] lg:hover:shadow-[0_12px_30px_rgba(46,125,50,0.35)] lg:hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-[#F0A202] translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                
                <span className="relative z-10 text-[11px] xs:text-[13px] sm:text-[14px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white lg:group-hover:text-[#0F3124] transition-colors duration-500">
                  View Our Work
                </span>
                <ArrowUpRight className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 text-white lg:group-hover:text-[#0F3124] transition-all duration-500 lg:group-hover:rotate-45" />
              </Link>

              {/* Secondary CTA - Minimalist Outline */}
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 lg:px-10 lg:py-[18px] rounded-full border border-[#0F172A]/20 bg-transparent lg:hover:border-[#F0A202] lg:hover:bg-[#F0A202]/5 transition-all duration-500"
              >
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#F0A202]/20 flex items-center justify-center lg:group-hover:bg-[#F0A202] transition-colors duration-500">
                   <Briefcase className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#F0A202] lg:group-hover:text-black transition-colors duration-500" strokeWidth={2.5} />
                </div>
                <span className="text-[11px] xs:text-[13px] sm:text-[14px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#0F172A]">
                  Our Services
                </span>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-4 sm:mt-8 lg:mt-16 w-full grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:gap-y-6 lg:gap-y-10 gap-x-1 sm:gap-x-2 lg:gap-x-4 relative z-20"
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

                  <div className="relative z-10 text-[32px] xs:text-[36px] sm:text-3xl lg:text-[46px] font-extrabold text-[#0F3124] font-mileast leading-none mb-0.5 sm:mb-1 lg:mb-2 mt-0 sm:mt-1 lg:mt-2 transition-transform duration-300 lg:group-hover:-translate-y-1 lg:group-hover:scale-105 lg:group-hover:text-[#2E7D32]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="relative z-10 text-[11px] xs:text-[12px] sm:text-[9px] lg:text-[13px] font-bold text-[#0F3124]/70 uppercase tracking-[0.05em] sm:tracking-[0.1em] lg:tracking-[0.15em] whitespace-pre-line leading-[1.0] sm:leading-[1.1] lg:leading-[1.3] font-poppins block transition-colors duration-300 lg:group-hover:text-[#0F3124]">
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
