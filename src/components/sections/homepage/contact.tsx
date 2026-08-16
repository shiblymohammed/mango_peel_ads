"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 lg:py-32 flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: 3D MODEL PLACEHOLDER                                         */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-5 xl:col-span-5 order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            {/* Left side reserved for your 3D scene */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: CONTACT TYPOGRAPHY & FORM                                   */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left relative z-20">
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#FFB800]/10 to-[#2E7D32]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 ml-4 lg:ml-6"
            >
              <div className="relative inline-flex items-center justify-center">
                <img src="/bg/yellowBadgeStroke.png" alt="badge" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[180%] object-fill -z-10 pointer-events-none" />
                <span className="relative z-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B132B] px-3 py-1 whitespace-nowrap">
                  START A PROJECT
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-mileast text-[64px] sm:text-[76px] md:text-[88px] lg:text-[104px] leading-[0.9] text-[#0B132B] mb-8 sm:mb-12 flex flex-col gap-1 select-none"
            >
              <span>Ready to <span className="text-[#FFB800] drop-shadow-sm">Peel</span></span>
              <span className="text-[#2E7D32] drop-shadow-sm relative w-max">
                The Ordinary?
              </span>
            </motion.h2>

            {/* Interactive Mad Libs Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-3xl bg-white/40 backdrop-blur-xl border border-white/60 p-6 sm:p-10 lg:p-12 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="font-poppins text-2xl sm:text-3xl lg:text-[34px] leading-[2] sm:leading-[2.2] lg:leading-[2.4] font-medium text-[#475569]">
                Hi, my name is 
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="inline-block bg-transparent border-b-2 border-gray-300 focus:border-[#FFB800] mx-3 px-2 w-[180px] sm:w-[220px] text-center italic font-semibold text-[#0B132B] focus:outline-none transition-colors placeholder:text-gray-300 placeholder:font-normal placeholder:italic pb-1" 
                /> 
                <br className="hidden lg:block" />
                and I'm looking for a creative partner to help me with 
                <input 
                  type="text" 
                  placeholder="Project Type" 
                  className="inline-block bg-transparent border-b-2 border-gray-300 focus:border-[#FFB800] mx-3 px-2 w-[220px] sm:w-[280px] text-center italic font-semibold text-[#0B132B] focus:outline-none transition-colors placeholder:text-gray-300 placeholder:font-normal placeholder:italic pb-1" 
                />.
                <br className="hidden lg:block" />
                You can reach me at
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="inline-block bg-transparent border-b-2 border-gray-300 focus:border-[#FFB800] mx-3 px-2 w-[240px] sm:w-[300px] text-center italic font-semibold text-[#0B132B] focus:outline-none transition-colors placeholder:text-gray-300 placeholder:font-normal placeholder:italic pb-1" 
                /> 
                to discuss this further.
              </div>
              
              <div className="mt-12 flex justify-start">
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#2E7D32] overflow-hidden shadow-[0_8px_20px_rgba(46,125,50,0.2)] hover:shadow-[0_15px_30px_rgba(46,125,50,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-[#FFB800] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                  <span className="relative z-10 font-poppins font-extrabold tracking-[0.15em] uppercase text-[15px] text-white group-hover:text-[#0B132B] transition-colors duration-500">
                    SEND INQUIRY
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:text-[#0B132B] transition-all duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.form>
            
          </div>
        </div>
      </div>
    </section>
  );
}
