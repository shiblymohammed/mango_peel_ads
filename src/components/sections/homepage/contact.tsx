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
        <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: 3D MODEL PLACEHOLDER                                         */}
          {/* ========================================================================= */}
          <div className="w-full col-span-5 order-1 flex min-h-[250px] sm:min-h-[400px] lg:min-h-[600px] items-center justify-center">
            {/* Left side reserved for your 3D scene */}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: CONTACT TYPOGRAPHY & FORM                                   */}
          {/* ========================================================================= */}
          <div className="w-full col-span-7 order-2 flex flex-col items-start text-left relative z-20">
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#FFB800]/10 to-[#2E7D32]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-mileast font-extrabold text-[#0B132B] text-[22px] xs:text-3xl sm:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.1] tracking-tight mb-4 sm:mb-12 flex flex-col gap-0 sm:gap-1 select-none text-left"
            >
              <span>Ready to <span className="text-[#FFB800] drop-shadow-sm">Peel</span></span>
              <span className="text-[#2E7D32] drop-shadow-sm relative w-max mx-0">
                The Ordinary?
              </span>
            </motion.h2>

            {/* Interactive Mad Libs Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-3xl bg-white/40 backdrop-blur-xl border border-white/60 p-3 sm:p-10 lg:p-12 rounded-[16px] sm:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-5 sm:gap-6 font-poppins w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[8px] xs:text-[9px] sm:text-sm font-bold text-[#0B132B] uppercase tracking-widest pl-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-white/50 border border-gray-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 rounded-xl sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3.5 text-[9px] xs:text-[10px] sm:text-base text-[#0B132B] focus:outline-none transition-all placeholder:text-gray-400" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[8px] xs:text-[9px] sm:text-sm font-bold text-[#0B132B] uppercase tracking-widest pl-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white/50 border border-gray-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 rounded-xl sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3.5 text-[9px] xs:text-[10px] sm:text-base text-[#0B132B] focus:outline-none transition-all placeholder:text-gray-400" 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[8px] xs:text-[9px] sm:text-sm font-bold text-[#0B132B] uppercase tracking-widest pl-1">Project Type</label>
                  <select 
                    defaultValue=""
                    className="w-full bg-white/50 border border-gray-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 rounded-xl sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3.5 text-[9px] xs:text-[10px] sm:text-base text-[#0B132B] focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a project type...</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="campaign">Marketing Campaign</option>
                    <option value="social">Social Media</option>
                    <option value="video">Video Production</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[8px] xs:text-[9px] sm:text-sm font-bold text-[#0B132B] uppercase tracking-widest pl-1">Message</label>
                  <textarea 
                    placeholder="Tell us about your project..." 
                    rows={4}
                    className="w-full bg-white/50 border border-gray-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/20 rounded-xl sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3.5 text-[9px] xs:text-[10px] sm:text-base text-[#0B132B] focus:outline-none transition-all placeholder:text-gray-400 resize-none" 
                  />
                </div>
              </div>
              
              <div className="mt-8 sm:mt-12 flex justify-start">
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-1.5 sm:gap-3 px-3 py-2 sm:px-6 sm:py-4 xs:px-10 xs:py-5 rounded-full bg-[#2E7D32] overflow-hidden shadow-[0_8px_20px_rgba(46,125,50,0.2)] lg:hover:shadow-[0_15px_30px_rgba(46,125,50,0.4)] transition-all duration-300 transform lg:hover:-translate-y-1 w-full xs:w-auto justify-center"
                >
                  <div className="absolute inset-0 bg-[#FFB800] translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                  <span className="relative z-10 font-poppins font-extrabold tracking-[0.15em] uppercase text-[9px] xs:text-[10px] sm:text-[15px] text-white lg:group-hover:text-[#0B132B] transition-colors duration-500">
                    SEND INQUIRY
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-white lg:group-hover:text-[#0B132B] transition-all duration-500 lg:group-hover:translate-x-1" />
                </button>
              </div>
            </motion.form>
            
          </div>
        </div>
      </div>
    </section>
  );
}
