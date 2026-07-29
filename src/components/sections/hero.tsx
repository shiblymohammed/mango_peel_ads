"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 lg:py-0 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Highlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-110px)]">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: 3D MODEL PLACEHOLDER (Reserved for your 3D model later)     */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-6 xl:col-span-7 order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            {/* Left side reserved for your 3D scene */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: HERO TYPOGRAPHY & CTA                                       */}
          {/* Matches the exact typography, colors, and buttons from your reference     */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="w-full lg:col-span-6 xl:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left relative pt-2 sm:pt-4 lg:pt-0"
          >
            {/* Main Display Headline (4 Lines: We Make / People / Stop / Scrolling.) */}
            <h1 className="font-mileast font-extrabold tracking-tight select-none relative z-20">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-[#0F172A] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]"
              >
                We Make
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block text-[#0F172A] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92] mt-1 sm:mt-1.5"
              >
                People
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-[#2E7D32] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92] mt-1 sm:mt-1.5"
              >
                Stop
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block text-[#F0A202] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92] mt-1 sm:mt-1.5"
              >
                Scrolling.
              </motion.span>
            </h1>

            {/* Subtitle / Description (3 Lines in Italic Slate Grey) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="font-poppins-italic italic text-[#64748B] text-lg sm:text-xl md:text-2xl xl:text-[24px] font-medium leading-[1.38] mt-6 sm:mt-8 max-w-lg relative z-20"
            >
              Creative films, reels &amp;
              <br className="hidden sm:block" />
              campaigns that drive
              <br className="hidden sm:block" />
              real results.
            </motion.p>

            {/* Action Buttons (Stacked vertically: View Our Work & Let's Talk) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 sm:mt-10 flex flex-col items-start gap-3.5 sm:gap-4 relative z-20"
            >
              {/* Primary CTA: VIEW OUR WORK -> */}
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full border-[1.5px] border-[#2E7D32] bg-white/60 backdrop-blur-sm text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white hover:border-[#2E7D32] hover:shadow-lg hover:shadow-[#2E7D32]/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
                  VIEW OUR WORK
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              {/* Secondary CTA: LET'S TALK -> */}
              <Link
                href="/contact"
                className="group/talk inline-flex items-center gap-2.5 ml-2 sm:ml-3 py-1.5 text-[#0F172A] hover:text-[#2E7D32] transition-colors duration-200"
              >
                <span className="italic font-extrabold text-xs sm:text-sm tracking-[0.16em] uppercase">
                  LET&apos;S TALK
                </span>
                <ArrowRight className="w-4 h-4 text-[#2E7D32] transition-transform duration-300 group-hover/talk:translate-x-1.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
