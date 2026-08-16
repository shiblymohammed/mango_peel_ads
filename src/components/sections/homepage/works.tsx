"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorksSection() {
  const brands = [
    {
      name: "MILMA",
      description: "Co-operative Dairy Brand",
      highlight: false,
    },
    {
      name: "WALKAROO",
      description: "Quality Footwear Brand",
      highlight: true,
    },
    {
      name: "POTHYS",
      description: "Heritage Retail & Textiles",
      highlight: false,
    },
  ];

  return (
    <section
      id="works"
      className="relative w-full py-20 lg:py-28 flex items-center justify-center overflow-hidden bg-transparent"
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
          {/* RIGHT COLUMN: OUR WORK TYPOGRAPHY & CARDS                                */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left relative pt-10 lg:pt-0">
            
            {/* Eyebrow */}
            <span className="text-[#FFB800] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              OUR WORK
            </span>

            {/* Main Heading */}
            <h2 className="font-mileast text-7xl md:text-8xl lg:text-[110px] leading-[0.85] text-[#0B132B] mt-2 mb-6 flex flex-col items-start select-none">
              <span className="block">Work <span className="text-[#FFB800]">That</span></span>
              <span className="block relative inline-block text-[#2E7D32]">
                Works.
                <img src="/bg/stroke-green.png" alt="stroke" className="absolute -bottom-6 left-0 w-full h-[40px] object-cover opacity-90 pointer-events-none" />
              </span>
            </h2>

            {/* Subtitle */}
            <p className="font-poppins text-[#475569] text-lg sm:text-xl font-medium leading-[1.38] mt-6 sm:mt-10 mb-8">
              Some of the brands that trust us.
            </p>

            {/* Styled Scrapbook Masonry Gallery */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mt-16 mb-12 relative">
              
              {/* Item 1 - Large Left (MILMA) */}
              <div className="group relative w-full h-[400px] md:h-[650px] mt-0 md:mt-10">
                {/* Background Dot Grid */}
                <svg className="absolute -top-8 -left-8 w-32 h-32 opacity-40 text-[#FFB800] z-0 transition-transform duration-700 group-hover:-translate-y-2" fill="currentColor" viewBox="0 0 40 40">
                  <pattern id="dots-works-1" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2"></circle></pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#dots-works-1)"></rect>
                </svg>
                
                {/* Background Blob */}
                <img src="/bg/cardblobgreen.png" alt="blob" className="absolute -bottom-16 -right-16 w-[350px] h-[350px] object-contain opacity-50 z-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 ease-out" />

                {/* Main Card */}
                <div 
                  className="relative w-full h-full overflow-hidden bg-[#0B132B] shadow-[0_15px_40px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-all duration-500 z-10 border-[6px] border-white cursor-pointer"
                  style={{ borderRadius: '45px 30px 45px 30px / 30px 45px 30px 45px' }}
                >
                  <img src="/bg/photography.png" alt="MILMA" className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:-rotate-2 group-hover:opacity-100 transition-all duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-[#FFB800] rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg z-20">
                    <ArrowRight className="w-6 h-6 text-[#0B132B]" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <span className="inline-block px-5 py-2 rounded-full bg-[#2E7D32] text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                      Co-operative Dairy Brand
                    </span>
                    <h3 className="text-white font-mileast text-5xl sm:text-7xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">MILMA</h3>
                  </div>
                </div>
              </div>

              {/* Right Column for Items 2 & 3 */}
              <div className="flex flex-col gap-10 sm:gap-14 h-full relative z-10">
                
                {/* Item 2 - Top Right (WALKAROO) */}
                <div className="group relative w-full h-[350px] md:h-[310px]">
                  {/* Pluses Pattern */}
                  <img src="/bg/little-pluses.png" alt="pluses" className="absolute -top-12 -right-8 w-24 h-24 object-contain opacity-50 z-0 group-hover:rotate-45 group-hover:scale-110 transition-all duration-700 ease-out" />
                  
                  <div 
                    className="relative w-full h-full overflow-hidden bg-[#0B132B] shadow-[0_15px_40px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-all duration-500 z-10 border-[6px] border-white cursor-pointer"
                    style={{ borderRadius: '30px 45px 30px 45px / 45px 30px 45px 30px' }}
                  >
                    <img src="/bg/tvcommercial.png" alt="WALKAROO" className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:rotate-2 group-hover:opacity-100 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    {/* Floating Action Button */}
                    <div className="absolute top-5 right-5 w-12 h-12 bg-[#FFB800] rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg z-20">
                      <ArrowRight className="w-5 h-5 text-[#0B132B]" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB800] text-[#0B132B] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                        Quality Footwear
                      </span>
                      <h3 className="text-white font-mileast text-4xl sm:text-5xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">WALKAROO</h3>
                    </div>
                  </div>
                </div>

                {/* Item 3 - Bottom Right (POTHYS) - Staggered layout with negative margin */}
                <div className="group relative w-full h-[350px] md:h-[310px] md:-ml-12">
                  {/* Background Blob */}
                  <img src="/bg/cardblobyellow.png" alt="blob" className="absolute -bottom-12 -left-12 w-[300px] h-[300px] object-contain opacity-50 z-0 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 ease-out" />
                  
                  <div 
                    className="relative w-full h-full overflow-hidden bg-[#0B132B] shadow-[0_15px_40px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-all duration-500 z-10 border-[6px] border-white cursor-pointer"
                    style={{ borderRadius: '40px 20px 40px 20px / 20px 40px 20px 40px' }}
                  >
                    <img src="/bg/videoproduction.png" alt="POTHYS" className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:-rotate-2 group-hover:opacity-100 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    {/* Floating Action Button */}
                    <div className="absolute top-5 right-5 w-12 h-12 bg-[#2E7D32] rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg z-20">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-[#2E7D32] text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                        Heritage Retail
                      </span>
                      <h3 className="text-white font-mileast text-4xl sm:text-5xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">POTHYS</h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 mb-8">
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B132B] text-white hover:bg-[#FFB800] hover:text-[#0B132B] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_8px_20px_rgba(11,19,43,0.15)] hover:shadow-[0_15px_30px_rgba(255,184,0,0.3)]"
              >
                <span className="font-poppins font-bold tracking-[0.14em] uppercase text-sm">
                  VIEW ALL WORKS
                </span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
