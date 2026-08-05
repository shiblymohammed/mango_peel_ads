"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const DribbbleIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
  </svg>
);
export default function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <footer className="relative bg-[#18181B] text-white pt-24 pb-8 overflow-hidden rounded-t-[2.5rem] mt-[-2rem] z-10">
      
      {/* Decorative Blur */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFB800] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* TOP CTA SECTION */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-white/10 pb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] text-white">
              Got a project? <br className="hidden md:block" />
              <span className="text-[#FFB800] font-mileast font-normal">Let&apos;s create something</span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Link 
              href="/contact" 
              className="group flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#FFB800] text-[#08120D] hover:bg-white transition-colors duration-500"
            >
              <div className="flex flex-col items-center justify-center gap-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500">
                <ArrowUpRight size={40} strokeWidth={2} />
                <span className="font-bold tracking-widest uppercase text-[11px] md:text-xs">Start Now</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* MIDDLE LINKS SECTION */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <img src="/logo/logo.png" alt="Mango Peel Ads" className="w-32 brightness-0 invert opacity-90" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A creative advertising agency pushing boundaries and creating experiences that move audiences.
            </p>
          </motion.div>

          {/* Column 2 - Links */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-50">Navigation</h4>
            {['Home', 'Work', 'Services', 'About Us', 'Team', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-white/80 hover:text-[#FFB800] text-[15px] font-medium transition-colors w-fit"
              >
                {item}
              </Link>
            ))}
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-50">Contact Us</h4>
            <a href="mailto:info@mangopeelads.com" className="text-white/80 hover:text-[#FFB800] text-[15px] font-medium transition-colors w-fit">
              info@mangopeelads.com
            </a>
            <a href="tel:+918547909279" className="text-white/80 hover:text-[#FFB800] text-[15px] font-medium transition-colors w-fit">
              +91 8547909279
            </a>
            <div className="text-white/60 text-[15px] mt-2">
              Pheonix Building, <br />
              Padivattom P.O, <br />
              Ernakulam, Kerala
            </div>
          </motion.div>

          {/* Column 4 - Socials */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-50">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: InstagramIcon, href: 'https://www.instagram.com/mangopeelads?igsh=bmN2ZGFleTdvZG80' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx} 
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-[#FFB800] hover:text-[#08120D] hover:border-transparent transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM MASSIVE TEXT */}
        <motion.div 
          className="pt-10 border-t border-white/10 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full text-center overflow-hidden">
            <h1 className="text-[12vw] font-black tracking-tight leading-none pb-10 text-white/5 select-none font-mileast">
              mangopeel
            </h1>
          </div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-6 text-white/40 text-xs sm:text-sm font-medium">
            <p>© {new Date().getFullYear()} Mango Peel Ads. All rights reserved.</p>
            
            <a href="https://dexiko.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group hover:text-white transition-colors">
              <span>Developed by</span>
              <img src="/logo/dexiko-logo.png" alt="Dexiko" className="h-5 brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

          </div>
        </motion.div>
        
      </div>
    </footer>
  );
}
