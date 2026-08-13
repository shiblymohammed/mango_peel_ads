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
          <div className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left relative pt-2 sm:pt-4 lg:pt-0">
            {/* Eyebrow: OUR WORK */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#2E7D32]"
            >
              OUR WORK
            </motion.span>

            {/* Main Heading: Work That Works. */}
            <h2 className="font-mileast font-extrabold tracking-tight select-none mt-2 sm:mt-3 flex flex-wrap gap-x-3 sm:gap-x-4">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#0F172A] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]"
              >
                Work <span className="text-[#F0A202]">That </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#2E7D32] text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] leading-[0.92]"
              >
                Works.
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

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-poppins-italic italic text-[#64748B] text-lg sm:text-xl font-medium leading-[1.38] mt-6 sm:mt-7"
            >
              Some of the brands that trust us.
            </motion.p>

            {/* Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl"
            >
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center p-5 sm:p-6 bg-white rounded-[24px] border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                    brand.highlight ? "border-[#2E7D32]/30" : "border-gray-100"
                  }`}
                >
                  {/* Logo Placeholder */}
                  <div 
                    className={`w-full aspect-[4/3] rounded-xl border border-dashed flex flex-col items-center justify-center mb-5 ${
                      brand.highlight ? "border-[#2E7D32]/30 bg-[#2E7D32]/5" : "border-gray-200 bg-gray-50/50"
                    }`}
                  >
                    <span className={`font-bold text-xs sm:text-sm tracking-widest ${
                      brand.highlight ? "text-[#2E7D32]" : "text-gray-400"
                    }`}>
                      [ LOGO ]
                    </span>
                    <span className={`text-[10px] sm:text-xs italic mt-1 ${
                      brand.highlight ? "text-[#2E7D32]/60" : "text-gray-300"
                    }`}>
                      (Placeholder Text)
                    </span>
                  </div>

                  {/* Brand Name */}
                  <h3 className={`font-bold text-sm tracking-wide ${
                    brand.highlight ? "text-[#2E7D32]" : "text-[#0F172A]"
                  }`}>
                    {brand.name}
                  </h3>

                  {/* Brand Description */}
                  <p className="text-[11px] sm:text-xs text-gray-400 italic text-center mt-1">
                    {brand.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 sm:mt-12"
            >
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-transparent border border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <span className="text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
                  VIEW ALL WORKS
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
