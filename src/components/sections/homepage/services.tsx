"use client";

import { motion } from "framer-motion";
import { Smartphone, Clapperboard, Tv, Megaphone, Camera, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { icon: Smartphone, label: "Social Media Content" },
    { icon: Clapperboard, label: "Reels Production" },
    { icon: Tv, label: "TV Commercials" },
    { icon: Megaphone, label: "Brand Campaigns" },
    { icon: Camera, label: "Photography" },
    { icon: TrendingUp, label: "Digital Marketing" },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-20 lg:py-28 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: 3D MODEL PLACEHOLDER                                        */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-5 xl:col-span-5 order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            {/* Left side reserved for your 3D scene */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: SERVICES CONTENT                                            */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left relative pt-2 sm:pt-4 lg:pt-0">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="font-poppins-italic italic text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#2E7D32]"
            >
              SERVICES
            </motion.span>

            {/* Main Heading */}
            <h2 className="font-mileast font-extrabold tracking-tight select-none mt-2 sm:mt-3 flex flex-wrap gap-x-3 sm:gap-x-4">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#0F172A] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]"
              >
                What
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#F0A202] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]"
              >
                We <span className="text-[#2E7D32]">Do.</span>
              </motion.span>
            </h2>

            {/* Green Line Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-14 sm:w-16 h-0.5 bg-[#2E7D32] mt-6 sm:mt-7 origin-left"
            />

            {/* Services Grid */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-2xl xl:max-w-3xl">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#0F172A]/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] px-5 py-4 sm:px-6 sm:py-4 hover:shadow-md hover:border-[#2E7D32]/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2E7D32] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    </div>
                    <span className="font-poppins-italic italic font-bold text-[#1E293B] text-sm sm:text-base leading-snug">
                      {item.label}
                    </span>
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
