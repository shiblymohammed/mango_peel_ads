"use client";

import { motion } from "framer-motion";
import { Clock, Award, Handshake } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Clock,
      text: "7+ Years of Experience",
    },
    {
      icon: Award,
      text: (
        <>
          Award Winning
          <br />
          Creative Team
        </>
      ),
    },
    {
      icon: Handshake,
      text: (
        <>
          Trusted by
          <br />
          Leading Brands
        </>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 lg:py-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Ambient Highlights */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: 3D MODEL PLACEHOLDER (Reserved for your 3D model later)     */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-6 xl:col-span-7 order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            {/* Left side reserved for your 3D scene */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: ABOUT US TYPOGRAPHY & FEATURES                              */}
          {/* Matches the exact typography, colors, and cards from your reference       */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-6 xl:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left relative pt-2 sm:pt-4 lg:pt-0">
            {/* Eyebrow: ABOUT US */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#2E7D32]"
            >
              ABOUT US
            </motion.span>

            {/* Main Heading: Who We Are. */}
            <h2 className="font-mileast font-extrabold tracking-tight select-none mt-2 sm:mt-3">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-[#0F172A] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]"
              >
                Who
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92] mt-1 sm:mt-1.5"
              >
                <span className="text-[#F0A202]">We </span>
                <span className="text-[#2E7D32]">Are.</span>
              </motion.span>
            </h2>

            {/* Green Horizontal Divider Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-14 sm:w-16 h-0.5 bg-[#2E7D32] mt-6 sm:mt-7 origin-left"
            />

            {/* Subtitle / Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-poppins-italic italic text-[#64748B] text-lg sm:text-xl md:text-2xl xl:text-[22px] font-medium leading-[1.38] mt-6 sm:mt-7 max-w-lg"
            >
              We are a creative advertising
              <br className="hidden sm:block" />
              agency passionate about telling
              <br className="hidden sm:block" />
              stories that create impact.
            </motion.p>

            {/* Three Feature / Stat Icon Cards */}
            <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:gap-5 w-full max-w-md">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45 + index * 0.15 }}
                    className="flex items-center gap-4 sm:gap-5 group"
                  >
                    {/* White Rounded-2xl Icon Pill Box */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-[#0F172A]/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-[#2E7D32]/20">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2E7D32]" />
                    </div>

                    {/* Italic Feature Text */}
                    <div className="font-poppins-italic italic font-semibold text-[#1E293B] text-base sm:text-lg leading-snug">
                      {item.text}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
