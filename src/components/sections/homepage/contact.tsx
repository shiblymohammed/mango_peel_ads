"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
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
          {/* RIGHT COLUMN: CONTACT TYPOGRAPHY & FORM                                   */}
          {/* ========================================================================= */}
          <div className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left relative pt-2 sm:pt-4 lg:pt-0">
            {/* Eyebrow: CONTACT US */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#2E7D32]"
            >
              CONTACT US
            </motion.span>

            {/* Main Heading */}
            <h2 className="font-mileast font-extrabold tracking-tight select-none mt-2 sm:mt-3 flex flex-wrap gap-x-3 sm:gap-x-4">
              <div className="w-full">
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[#0F172A] text-5xl sm:text-6xl md:text-7xl lg:text-[68px] xl:text-[80px] 2xl:text-[90px] leading-[1.05]"
                >
                  Let&apos;s <span className="text-[#F0A202]">Create</span>
                </motion.span>
              </div>
              <div className="w-full mt-1 sm:mt-2">
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[#0F172A] text-5xl sm:text-6xl md:text-7xl lg:text-[68px] xl:text-[80px] 2xl:text-[90px] leading-[1.05]"
                >
                  Something People
                </motion.span>
              </div>
              <div className="w-full mt-1 sm:mt-2">
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[#0F172A] text-5xl sm:text-6xl md:text-7xl lg:text-[68px] xl:text-[80px] 2xl:text-[90px] leading-[1.05]"
                >
                  Can&apos;t <span className="text-[#2E7D32]">Ignore.</span>
                </motion.span>
              </div>
            </h2>

            {/* Green Horizontal Divider Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-14 sm:w-16 h-0.5 bg-[#2E7D32] mt-6 sm:mt-7 origin-left"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-poppins-italic italic text-[#64748B] text-base sm:text-lg font-medium leading-[1.38] mt-6 sm:mt-7"
            >
              Have a project in mind? Let&apos;s make it amazing together.
            </motion.p>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 sm:mt-10 w-full max-w-2xl flex flex-col gap-4 sm:gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 text-[#0F172A] placeholder:text-gray-400 placeholder:italic placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 text-[#0F172A] placeholder:text-gray-400 placeholder:italic placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] transition-all"
                />
              </div>
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 text-[#0F172A] placeholder:text-gray-400 placeholder:italic placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] transition-all resize-none"
              ></textarea>
              
              <div className="mt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm w-full sm:w-auto"
                >
                  <span className="text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
                    SEND MESSAGE
                  </span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
