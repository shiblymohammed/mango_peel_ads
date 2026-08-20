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
        <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-12 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: 3D MODEL PLACEHOLDER                                         */}
          {/* ========================================================================= */}
          <div className="w-full col-span-5 order-1 flex min-h-[250px] sm:min-h-[400px] lg:min-h-[600px] items-start justify-center">
            {/* Left side reserved for your 3D scene */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: OUR CLIENTS TYPOGRAPHY & LOGOS                             */}
          {/* ========================================================================= */}
          <div className="w-full col-span-7 order-2 flex flex-col items-start text-left relative z-20">
            
            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-mileast font-extrabold text-[#0B132B] text-[22px] xs:text-3xl sm:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.1] tracking-tight mb-2 sm:mb-5 flex flex-wrap justify-start gap-x-2 sm:gap-x-4 select-none"
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
              className="font-poppins text-[#475569] text-[10px] xs:text-[11px] sm:text-lg leading-relaxed mb-4 sm:mb-8 mt-2 sm:mt-4 max-w-xl"
            >
              We partner with industry leaders and ambitious challengers to deliver campaigns that disrupt markets and drive undeniable growth.
            </motion.p>

            {/* CLIENT LOGOS GRID */}
            <div className="w-full relative mt-12 mb-16 max-w-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center bg-transparent"
              >
                {[
                  "Caritas.png",
                  "Fruitomans.png",
                  "Kerala-gov.png",
                  "Melange.png",
                  "Milma.png",
                  "Pothys.png",
                  "Quality.png",
                  "Santa-monica.png",
                  "Walkaroo.png",
                  "ddrc.png"
                ].map((logo, index) => (
                  <div key={index} className="w-full relative flex items-center justify-center lg:hover:scale-110 transition-transform duration-300">
                    <img
                      src={`/clients/${logo}`}
                      alt={`Client ${index + 1}`}
                      className="max-w-[80px] sm:max-w-[100px] lg:max-w-[120px] max-h-[60px] sm:max-h-[80px] object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.05)] opacity-80 lg:hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
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
                className="group relative inline-flex items-center gap-1.5 sm:gap-3 px-4 py-2.5 sm:px-10 sm:py-5 rounded-full bg-[#0B132B] overflow-hidden shadow-[0_8px_20px_rgba(11,19,43,0.15)] lg:hover:shadow-[0_15px_30px_rgba(255,184,0,0.3)] transition-all duration-300 transform lg:hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800] to-[#FF9800] translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                
                <span className="relative z-10 font-poppins font-extrabold tracking-[0.15em] uppercase text-[10px] sm:text-[15px] text-white lg:group-hover:text-[#0B132B] transition-colors duration-500">
                  SEE OUR WORK
                </span>
                <ArrowRight className="relative z-10 w-3 h-3 sm:w-5 sm:h-5 text-white lg:group-hover:text-[#0B132B] transition-all duration-500 lg:group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
