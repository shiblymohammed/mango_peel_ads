"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorksSection() {
  const clients = [
    "Walkaroo_idthIMNtuc_1.png",
    "caritas hospital.png",
    "logo.png",
    "mend.png",
    "milma-seeklogo.png",
    "pothys.png",
    "santa monica.png",
  ];

  return (
    <section
      id="works"
      className="relative w-full pt-0 pb-10 lg:pb-16 flex items-start justify-center overflow-hidden bg-transparent"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: 3D MODEL PLACEHOLDER                                         */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-5 xl:col-span-5 order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] flex items-start justify-center">
            {/* Left side reserved for your 3D scene */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: OUR CLIENTS TYPOGRAPHY & LOGOS                             */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left relative z-20">
            
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 mt-4 lg:mt-0 ml-4 lg:ml-0"
            >
              <div className="relative inline-flex items-center justify-center">
                <img src="/bg/yellowBadgeStroke.png" alt="badge" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[200%] object-fill -z-10 pointer-events-none" />
                <span className="relative z-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B132B] px-3 py-1 whitespace-nowrap">
                  OUR PARTNERS
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-mileast text-[64px] sm:text-[76px] md:text-[88px] lg:text-[96px] leading-[0.9] text-[#0B132B] mb-5 flex flex-wrap gap-x-4 select-none"
            >
              <span>Trusted <span className="text-[#FFB800] drop-shadow-md">by</span></span>
              <span className="text-[#2E7D32] drop-shadow-md relative">
                Visionaries.
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-poppins text-[#475569] text-xl sm:text-2xl font-bold tracking-wide leading-[1.5] mb-4 mt-4 max-w-xl"
            >
              We partner with industry leaders and ambitious challengers to deliver campaigns that disrupt markets and drive undeniable growth.
            </motion.p>

            {/* MASSIVE UNCONSTRAINED LOGOS */}
            <div className="w-full relative mt-16 mb-24">
              <div className="flex flex-wrap items-center justify-start gap-x-12 sm:gap-x-16 lg:gap-x-24 gap-y-16 sm:gap-y-20">
                {clients.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ 
                      duration: 0.8, 
                      delay: idx * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={`/clients/${logo}`}
                      alt={`Client Logo ${idx + 1}`}
                      className="max-h-[70px] sm:max-h-[90px] lg:max-h-[110px] max-w-[160px] sm:max-w-[220px] lg:max-w-[300px] w-auto object-contain filter drop-shadow-sm hover:drop-shadow-2xl transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 mb-8 z-20 relative"
            >
              <Link
                href="/works"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#0B132B] overflow-hidden shadow-[0_8px_20px_rgba(11,19,43,0.15)] hover:shadow-[0_15px_30px_rgba(255,184,0,0.3)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800] to-[#FF9800] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                
                <span className="relative z-10 font-poppins font-extrabold tracking-[0.15em] uppercase text-[15px] text-white group-hover:text-[#0B132B] transition-colors duration-500">
                  SEE OUR WORK
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:text-[#0B132B] transition-all duration-500 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
