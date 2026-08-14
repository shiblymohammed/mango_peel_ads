"use client";

import { motion } from "framer-motion";
import { User, Lightbulb } from "lucide-react";

export default function AboutSection() {

  return (
    <section id="about" className="relative w-full py-12 lg:py-16 bg-transparent overflow-hidden">
      {/* Background Decor (Curve and Dots) */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-white/80 backdrop-blur-sm rounded-l-[150px] pointer-events-none" />
      <div 
        className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2E7D32 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Reserved for 3D Scene */}
          <div className="w-full lg:col-span-5 xl:col-span-5 order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] relative flex flex-col items-center lg:items-start justify-end pb-10 pointer-events-none">
            {/* Left side reserved for your 3D scene (Mango) */}
            
            {/* Wavy Badge (Creative at the core) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
              className="relative self-center lg:self-end sm:mr-4 lg:-mr-6 xl:-mr-12 mt-[250px] lg:mt-[450px] pointer-events-auto hover:-translate-y-2 hover:rotate-3 transition-transform duration-300 z-0"
            >
              {/* Scalloped White Background */}
              <svg width="180" height="180" viewBox="0 0 200 200" className="drop-shadow-md text-white">
                <path fill="currentColor" d="M100.5,10.6c7.7-4,16.8,1.3,18.4,9.8c1.3,7.1,8.3,11.2,15,8.8c8.1-2.9,16.5,4.7,15,13.2
                  c-1.2,7,4.3,13.2,11.3,12.7c8.5-0.5,13.9,9.4,9.5,16.7c-3.6,6,0,13.8,7.3,16c8.3,2.6,9.8,13.5,2.6,18.2c-5.8,3.9-6.3,12.3-1,16.9
                  c6.3,5.6,3.5,16-5.1,17.4c-7.1,1.1-11,8.8-8.1,15.2c3.5,7.8-3.9,15.9-11.7,12.4c-6.4-2.9-13.6,2.2-14.7,9.3
                  c-1.4,8.5-12.7,10-18.3,4.2c-4.7-4.8-12.8-3.4-15.6,2.8c-3.4,7.9-15.2,6.5-18.6-1.5c-2.8-6.2-10.9-7.6-15.6-2.8
                  c-5.6,5.8-16.9,4.3-18.3-4.2c-1.1-7.1-8.3-12.2-14.7-9.3c-7.8,3.5-15.2-4.6-11.7-12.4c2.9-6.4-1-14.1-8.1-15.2
                  c-8.6-1.4-11.4-11.8-5.1-17.4c5.3-4.6,4.8-13-1-16.9c-7.2-4.7-5.7-15.6,2.6-18.2c7.3-2.2,10.9-10,7.3-16c-4.4-7.3,1-17.2,9.5-16.7
                  c7,0.5,12.5-5.7,11.3-12.7c-1.5-8.5,6.9-16.1,15-13.2c6.7,2.4,13.7-1.7,15-8.8C83.7,11.9,92.8,6.6,100.5,10.6z"/>
              </svg>

              {/* Content Inside */}
              <div className="absolute inset-0 flex flex-col items-center justify-center -mt-2">
                {/* Lightbulb and Hand-drawn Rays */}
                <div className="relative mb-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <path d="M20 4L20 8" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M10 12L13 15" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M30 12L27 15" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <Lightbulb className="w-10 h-10 text-[#2E7D32]" strokeWidth={2} />
                </div>
                
                <span className="font-poppins font-bold text-[#2E7D32] text-[15px] leading-[1.2] text-center">
                  Creative<br/>at the core
                </span>
              </div>

              {/* Yellow Burst Bottom Right */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute -bottom-6 -right-6">
                <path d="M10 10L4 25" stroke="#FFB800" strokeWidth="4" strokeLinecap="round"/>
                <path d="M18 10L26 30" stroke="#FFB800" strokeWidth="4" strokeLinecap="round"/>
                <path d="M26 12L40 20" stroke="#FFB800" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </motion.div>
            
          </div>

          {/* RIGHT COLUMN: Typography & Content */}
          <div className="w-full lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left relative z-10 order-1 lg:order-2 pt-12 sm:pt-16 lg:pt-0">
            
            {/* TOP ROW: Text & Button */}
            <div className="flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-8 w-full">
              
              {/* Left Text */}
              <div className="flex-1">
                {/* Eyebrow */}
                <div className="mb-6">
                  <span className="text-sm font-bold tracking-widest uppercase text-[#FFB800]">ABOUT US</span>
                  <svg width="40" height="6" viewBox="0 0 40 6" fill="none" className="mt-1">
                    <path d="M2 4C12 2 28 2 38 4" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Headline */}
                <h2 className="font-mileast font-extrabold text-[#0B132B] text-6xl sm:text-7xl lg:text-[76px] xl:text-[84px] leading-[1.0] tracking-tight relative z-10">
                  <div className="flex items-center relative inline-block">
                    Who We
                    {/* Yellow Burst */}
                    <svg width="45" height="45" viewBox="0 0 40 40" fill="none" className="absolute -right-14 -top-2">
                      <path d="M10 25L4 8" stroke="#FFB800" strokeWidth="4.5" strokeLinecap="round"/>
                      <path d="M18 28L26 4" stroke="#FFB800" strokeWidth="4.5" strokeLinecap="round"/>
                      <path d="M26 30L40 18" stroke="#FFB800" strokeWidth="4.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <br />
                  <div className="flex items-baseline relative inline-block mt-2">
                    Really <span className="text-[#2E7D32] ml-4 lg:ml-5">Are</span><span className="text-[#FFB800]">.</span>
                    {/* Green squiggly line */}
                    <svg width="100" height="10" viewBox="0 0 100 10" fill="none" className="absolute -bottom-4 left-0">
                      <path d="M2 7C20 3 80 3 98 7" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                </h2>

                {/* Paragraphs */}
                <div className="mt-14 text-[#475569] font-poppins text-[15px] sm:text-lg leading-relaxed max-w-[500px]">
                  <p className="mb-6 font-medium">
                    We're a creative advertising agency that turns ideas into impactful stories. We blend creativity, strategy and storytelling to build brands people love and remember.
                  </p>
                  <p className="font-bold text-[#2E7D32]">
                    We don't follow trends. We create stories that last.
                  </p>
                </div>
              </div>

              {/* Right Button (Watch Our Story) */}
              <div className="relative w-40 h-40 xl:w-48 xl:h-48 flex items-center justify-center shrink-0 mt-4 xl:mt-12 xl:mr-10 self-start cursor-pointer group">
                {/* Dashed Circle */}
                <div className="absolute inset-4 xl:inset-5 border-[1.5px] border-dashed border-[#2E7D32]/30 rounded-full group-hover:border-[#2E7D32]/60 transition-colors" />
                
                {/* Spinning Text */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
                  <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] font-bold tracking-[0.2em] fill-[#0B132B] uppercase">
                    <textPath href="#textPath" startOffset="0%">WATCH OUR STORY • WATCH OUR STORY • </textPath>
                  </text>
                </svg>
                
                {/* Play Button */}
                <div className="w-16 h-16 xl:w-[72px] xl:h-[72px] bg-[#FFB800] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform z-10">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1 xl:border-t-[9px] xl:border-l-[16px] xl:border-b-[9px]" />
                </div>
              </div>

            </div>

            {/* BOTTOM ROW: Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 xl:mt-12 w-full max-w-[560px] bg-[#FFF8E7] rounded-[24px] p-6 flex flex-col sm:flex-row items-center gap-6 relative border border-[#FFB800]/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
            >
              {/* Big Quote marks */}
              <div className="absolute top-4 left-5 text-6xl font-serif text-[#FFB800] opacity-40 leading-none select-none">
                &ldquo;
              </div>
              
              <div className="flex-1 relative z-10 pl-6">
                <h3 className="font-poppins font-bold text-[#0B132B] text-lg xl:text-[19px] leading-snug mb-2">
                  People don't buy products. <br className="hidden sm:block"/>
                  They buy stories.
                </h3>
                <svg width="100" height="6" viewBox="0 0 140 8" fill="none" className="mt-1">
                  <path d="M2 6C30 2 110 2 138 6" stroke="#FFB800" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="hidden sm:block w-[1px] h-12 bg-[#E5D7C2]/60" />

              <div className="flex flex-col items-center justify-center shrink-0 pr-2">
                {/* Simple Avatar outline */}
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-[#FAF8F3] mb-2 overflow-hidden">
                  <img src="/seth.jpg" alt="Seth Godin" className="w-full h-full object-cover" />
                </div>
                <span className="font-poppins font-bold text-[11px] text-[#0B132B] tracking-wide">– Seth Godin</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
