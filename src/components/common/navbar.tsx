"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky floating navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating to a new route
  useEffect(() => {
    const timer = setTimeout(() => setMobileMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/works" },
    { name: "Team", href: "/teams" },
    { name: "Contact", href: "/contact" },
  ];

  const fullScreenMenuVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.98,
      y: -15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.98,
      y: -15,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center px-6 md:px-12 lg:px-16 bg-transparent ${
          scrolled ? "h-20" : "h-24"
        }`}
      >
        {/* Logo (Left) */}
        <div className="flex-1 flex justify-start">
          <Link 
            href="/" 
            className="flex items-center group bg-white/85 backdrop-blur-md px-3.5 py-1.5 md:px-4 md:py-2 rounded-full  shadow-sm hover:bg-white hover:shadow-md hover:border-[#FFB800]/40 transition-all duration-300"
          >
            <img 
              src="/logo/logo.png" 
              alt="Mango Peel Ads" 
              className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]" 
            />
          </Link>
        </div>

        {/* Navigation Links (Center - Desktop Glassmorphic Pill) */}
        <div className="hidden md:flex flex-none items-center justify-center gap-1 lg:gap-2 bg-white/75 backdrop-blur-md px-3 py-1.5 lg:px-4 lg:py-1.5 rounded-full border border-[#0F172A]/10 shadow-xs">
          {navLinks.map((link) => {
            const isActive = 
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative px-3.5 py-1.5 lg:px-4 lg:py-2 text-[13px] lg:text-[14.5px] rounded-full transition-all duration-300 ${
                  isActive 
                    ? "text-[#0F172A] font-bold bg-[#FFB800]/25 shadow-2xs" 
                    : "text-[#475569] font-medium hover:text-[#0F172A] hover:bg-[#0F172A]/5"
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {link.name}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shadow-[0_0_6px_#FFB800]" />
                  )}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA Button & Hamburger Menu (Right) */}
        <div className="flex-1 flex justify-end items-center gap-2.5 sm:gap-3">
          <Link 
            href="/contact"
            className="group relative inline-flex items-center gap-1.5 sm:gap-2 bg-[#1A3626] text-white px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wide hover:bg-[#FFB800] hover:text-[#0F172A] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight 
              className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              strokeWidth={2.5} 
            />
          </Link>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 border border-[#0F172A]/10 text-[#0F172A] hover:bg-white hover:border-[#FFB800]/50 transition-all duration-300 shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1A3626]/20"
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={20} strokeWidth={2.5} />
          </button>
        </div>
      </nav>

      {/* Full-Screen Immersive Mobile Menu Overlay (Outside <nav> to avoid CSS backdrop-blur containing block trapping) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            variants={fullScreenMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] md:hidden bg-[#F4F1E8] flex flex-col justify-between overflow-hidden"
            style={{
              backgroundImage: 'url("/bg/french-stucco.png")',
              backgroundRepeat: 'repeat',
            }}
          >
            {/* Ambient Glowing Orbs */}
            <div
              className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none z-0"
              style={{ background: 'radial-gradient(circle at 50% 50%, #FFB80040 0%, #FFB80015 45%, transparent 70%)' }}
            />
            <div
              className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] rounded-full pointer-events-none z-0"
              style={{ background: 'radial-gradient(circle at 50% 50%, #1A362625 0%, #1A362610 45%, transparent 70%)' }}
            />

            {/* Header / Top Bar Inside Overlay */}
            <div className="h-24 px-6 flex items-center justify-between relative z-10 border-b border-[#0F172A]/10 shrink-0">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#0F172A]/15 shadow-sm"
              >
                <img 
                  src="/logo/logo.png" 
                  alt="Mango Peel Ads" 
                  className="h-8 sm:h-9 w-auto object-contain" 
                />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#0F172A]/10 text-[#0F172A] hover:bg-white hover:border-[#FFB800] transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                aria-label="Close mobile menu"
              >
                <span className="text-xs font-semibold tracking-wider uppercase">Close</span>
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Navigation Links Area */}
            <div className="flex-grow flex flex-col justify-center px-6 py-6 overflow-y-auto relative z-10">
              <div className="flex flex-col gap-3 sm:gap-4 max-w-lg mx-auto w-full">
                {navLinks.map((link, index) => {
                  const isActive = 
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                  return (
                    <motion.div key={link.name} variants={menuItemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center justify-between py-2 sm:py-3 px-2 rounded-2xl transition-all duration-300"
                      >
                        <div className="flex items-baseline">
                          <span className="font-poppins-italic text-sm sm:text-base text-[#FFB800] font-normal tracking-widest mr-4 sm:mr-6">
                            0{index + 1}
                          </span>
                          <span className={`relative font-mileast text-4xl sm:text-5xl tracking-tight transition-colors duration-300 ${
                            isActive 
                              ? "text-[#0F172A]" 
                              : "text-[#334155] group-hover:text-[#0F172A]"
                          }`}>
                            {link.name}
                            {isActive && (
                              <svg
                                className="absolute left-[-4%] w-[108%] h-auto pointer-events-none"
                                style={{ bottom: '-0.08em' }}
                                viewBox="0 0 120 18" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                              >
                                <path d="M3 12 C8 6, 18 4, 30 7 S52 14, 65 9 S85 3, 100 8 S112 13, 117 10" stroke="#FFB800" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 13 C12 7, 22 5, 33 8 S55 15, 67 10 S88 4, 102 9 S114 14, 118 11" stroke="#FFB800" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                              </svg>
                            )}
                          </span>
                        </div>

                        <div className="flex items-center">
                          {isActive ? (
                            <div className="w-9 h-9 rounded-full bg-[#1A3626] text-white flex items-center justify-center shadow-md">
                              <ArrowUpRight size={18} strokeWidth={2.5} />
                            </div>
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-white/60 border border-[#0F172A]/10 text-[#64748B] flex items-center justify-center group-hover:bg-[#FFB800] group-hover:text-[#0F172A] group-hover:border-[#FFB800] transition-all duration-300">
                              <ArrowUpRight size={18} strokeWidth={2} />
                            </div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Area */}
            <motion.div 
              variants={menuItemVariants}
              className="px-6 py-5 border-t border-[#0F172A]/10 bg-white/50 backdrop-blur-md relative z-10 shrink-0"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-lg mx-auto w-full">
                <div>
                  <p className="font-poppins-italic text-xs sm:text-sm text-[#64748B] mb-0.5">
                    Let&apos;s peel fresh ideas together
                  </p>
                  <a
                    href="mailto:info@mangopeelads.com"
                    className="text-sm font-semibold text-[#0F172A] hover:text-[#FFB800] transition-colors"
                  >
                    info@mangopeelads.com
                  </a>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between gap-3 bg-[#1A3626] text-white px-5 py-2.5 sm:py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#FFB800] hover:text-[#0F172A] transition-all duration-300 shadow-sm w-full sm:w-auto"
                >
                  <span>Start a Project</span>
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </Link>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
