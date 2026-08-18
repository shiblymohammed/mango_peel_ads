"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorksSection() {


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
          <div className="w-full lg:col-span-5 xl:col-span-5 order-2 lg:order-1 hidden lg:flex min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] items-start justify-center">
            {/* Left side reserved for your 3D scene */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: OUR CLIENTS TYPOGRAPHY & LOGOS                             */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left relative z-20">
            
            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-mileast font-extrabold text-[#0B132B] text-4xl sm:text-6xl lg:text-[64px] xl:text-[72px] leading-[1.1] tracking-tight mb-5 flex flex-wrap gap-x-4 select-none"
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
              className="font-poppins text-[#475569] text-[15px] sm:text-lg leading-relaxed mb-8 mt-4 max-w-xl"
            >
              We partner with industry leaders and ambitious challengers to deliver campaigns that disrupt markets and drive undeniable growth.
            </motion.p>

            {/* ALL IN ONE CLIENT LOGO */}
            {/* ALL IN ONE CLIENT LOGO */}
            <div className="w-full relative mt-12 mb-16 group cursor-pointer max-w-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center p-6 sm:p-8 lg:p-10 overflow-visible"
              >
                {/* Ambient Glow on hover */}
                <div 
                    className="absolute inset-0 rounded-tr-[4.5rem] sm:rounded-tr-[6rem] opacity-0 lg:group-hover:opacity-45 blur-2xl transition-all duration-500 -z-10 pointer-events-none"
                    style={{ backgroundColor: "#10B981" }}
                />

                {/* Background Shape */}
                <div 
                    className="absolute inset-0 w-full h-full rounded-tr-[4.5rem] sm:rounded-tr-[6rem] lg:group-hover:rounded-[2.5rem] sm:lg:group-hover:rounded-[3.5rem] overflow-hidden transition-all duration-500 ease-out lg:group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] lg:group-hover:brightness-105"
                    style={{ backgroundColor: "#10B981" }}
                >
                    {/* Shine Line */}
                    <div className="absolute inset-y-0 -left-[100px] w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 lg:group-hover:translate-x-[1000px] transition-transform duration-1000 ease-in-out pointer-events-none" />
                </div>
                
                {/* Image */}
                <img
                  src="/clients/AIOclientsLogos.png"
                  alt="Our Clients"
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] lg:group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none"
                />
              </motion.div>
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
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#0B132B] overflow-hidden shadow-[0_8px_20px_rgba(11,19,43,0.15)] lg:hover:shadow-[0_15px_30px_rgba(255,184,0,0.3)] transition-all duration-300 transform lg:hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800] to-[#FF9800] translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                
                <span className="relative z-10 font-poppins font-extrabold tracking-[0.15em] uppercase text-[15px] text-white lg:group-hover:text-[#0B132B] transition-colors duration-500">
                  SEE OUR WORK
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-white lg:group-hover:text-[#0B132B] transition-all duration-500 lg:group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
