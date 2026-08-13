"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clapperboard, Target, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 lg:py-0 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Highlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-110px)]">
          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 3D MODEL PLACEHOLDER (Reserved for your 3D model later)     */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-5 xl:col-span-5 order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            {/* Right side reserved for your 3D scene */}
          </div>

          {/* ========================================================================= */}
          {/* LEFT COLUMN: HERO TYPOGRAPHY & CTA                                       */}
          {/* Matches the exact typography, colors, and buttons from your reference     */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left relative pt-2 sm:pt-4 lg:pt-0"
          >
            {/* Main Display Headline */}
            <h1 className="font-mileast font-extrabold tracking-tight select-none relative z-20 flex flex-wrap gap-x-4">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#0F172A] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]"
              >
                We Make People
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#2E7D32] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]"
              >
                Stop
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[#F0A202] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]"
              >
                Scrolling.
              </motion.span>
            </h1>

            {/* Subtitle / Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="font-poppins text-[#64748B] text-base sm:text-lg lg:text-[17px] font-medium leading-[1.6] mt-6 sm:mt-8 max-w-xl relative z-20"
            >
              Creative films, reels &amp; campaigns<br className="hidden sm:block" />
              that drive real results for brands that dare to stand out.
            </motion.p>

            {/* Action Buttons (Horizontal layout) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 relative z-20 w-full"
            >
              {/* Primary CTA: VIEW OUR WORK -> */}
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <span className="text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
                  VIEW OUR WORK
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              {/* Secondary CTA: LET'S TALK -> */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full border border-[#2E7D32] bg-transparent text-[#2E7D32] hover:bg-[#2E7D32]/5 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
                  LET&apos;S TALK
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>

            {/* Bottom Features Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-16 flex flex-wrap items-center gap-6 sm:gap-10 relative z-20"
            >
              {/* Feature 1 */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#1A4314] font-bold text-lg sm:text-xl font-poppins">01</span>
                <div className="w-12 h-12 rounded-full bg-[#4E8B4F]/10 flex items-center justify-center text-[#1A4314]">
                  <Clapperboard className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1F2937] leading-tight">
                    Creative<br />Storytelling
                  </span>
                  <span className="text-xs text-[#64748B] mt-1 font-medium">Ideas that connect.</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] h-12 bg-gray-300"></div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#1A4314] font-bold text-lg sm:text-xl font-poppins">02</span>
                <div className="w-12 h-12 rounded-full bg-[#F0A202]/15 flex items-center justify-center text-[#F0A202]">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1F2937] leading-tight">
                    Performance<br />Driven
                  </span>
                  <span className="text-xs text-[#64748B] mt-1 font-medium">Strategies that work.</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] h-12 bg-gray-300"></div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#1A4314] font-bold text-lg sm:text-xl font-poppins">03</span>
                <div className="w-12 h-12 rounded-full bg-[#4E8B4F]/10 flex items-center justify-center text-[#1A4314]">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1F2937] leading-tight">
                    Results That<br />Matter
                  </span>
                  <span className="text-xs text-[#64748B] mt-1 font-medium">Impact you can see.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
