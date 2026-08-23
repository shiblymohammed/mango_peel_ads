"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Flame, PlaySquare, Projector, Focus, Radar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: Flame,
    title: "Creative Campaigns",
    desc: "Engaging, scroll-stopping content designed natively for every platform to build your community.",
    accent: "gold"
  },
  {
    icon: PlaySquare,
    title: "Reels Production",
    desc: "High-quality, short-form video production that captures attention and drives viral growth.",
    accent: "green"
  },
  {
    icon: Projector,
    title: "TV Commercials",
    desc: "Cinematic, broadcast-ready advertisements that tell your brand's story on the big screen.",
    accent: "green"
  },
  {
    icon: Focus,
    title: "Photography",
    desc: "Professional product and lifestyle photography that makes your brand visually unforgettable.",
    accent: "gold"
  },
  {
    icon: Radar,
    title: "Corporate Films",
    desc: "Data-driven marketing strategies and cinematic corporate media to maximize your reach.",
    accent: "green"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Disable scroll entrance animations entirely on mobile for instant loading
      if (window.innerWidth < 768) return;
      // Title Animation
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Cards Stagger
      gsap.fromTo('.service-card', 
        { x: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)"
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative w-full py-12 lg:py-24 bg-transparent overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-8 xl:gap-12 items-start">
          
          {/* LEFT COLUMN: Reserved for Mango (DESKTOP ONLY) */}
          <div className="hidden lg:flex w-full lg:col-span-5 relative flex-col items-center lg:items-start justify-end pointer-events-none min-h-[400px]">
             {/* Left side remains empty for Mango */}
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full col-span-12 lg:col-span-7 flex flex-col items-start text-left relative z-10 pt-0 pointer-events-auto">
            
            {/* Title Section */}
            <div ref={titleRef} className="w-full mb-8 sm:mb-12">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/30 mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-[#F0A202] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0B132B] font-poppins">
                  Our Services
                </span>
              </div>

              <h2 className="font-mileast font-extrabold text-[#0B132B] text-[32px] xs:text-[40px] sm:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.05] tracking-tight">
                We <span className="text-[#2E7D32]">Create.</span> You <span className="text-[#2E7D32]">Connect.</span><br className="hidden xs:block"/>
                We <span className="text-[#FFB800]">Make</span> It Matter.
              </h2>
              <div className="mt-3 lg:mt-4 relative inline-block text-[#475569] font-poppins text-[14px] xs:text-[16px] sm:text-lg leading-relaxed">
                From scroll-stopping content to performance-driven campaigns,<br className="hidden sm:block" />
                we create, connect and convert across every platform.
                {/* Green scribbled underline */}
                <svg width="100%" height="12" viewBox="0 0 200 12" fill="none" className="absolute -bottom-3 left-0 w-44 sm:w-[200px] overflow-visible">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
                  <path d="M15 10C70 5 130 9 180 7" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
                </svg>
              </div>
            </div>

            {/* Modern Bento Grid Services List */}
            <div ref={cardsRef} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-2 sm:mt-6">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  onMouseEnter={() => window.innerWidth >= 1024 && setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`service-card group relative w-full flex flex-col p-5 sm:p-8 lg:p-10 bg-white/80 sm:bg-white/60 backdrop-blur-md border border-[#0B132B]/12 shadow-sm lg:hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] lg:hover:-translate-y-2 active:scale-[0.98] active:border-[#2E7D32] transition-all duration-300 cursor-pointer overflow-hidden rounded-2xl sm:rounded-[24px] ${
                    idx === 0 ? 'sm:col-span-2 sm:rounded-tr-[80px]' : ''
                  } ${
                    idx % 2 === 1 ? 'sm:rounded-tl-[80px]' : ''
                  }`}
                >
                  
                  {/* Flowing Shared Hover Background */}
                  <AnimatePresence>
                    {hoveredIdx === idx && (
                      <motion.div
                        layoutId="serviceHoverBg"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1,
                          backgroundColor: service.accent === 'gold' ? '#FFB800' : '#10B981',
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        className="absolute inset-0 z-0 pointer-events-none"
                      />
                    )}
                  </AnimatePresence>

                  {/* Shine Line Glare Effect */}
                  <div className="absolute inset-y-0 -left-[150px] w-32 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 lg:group-hover:translate-x-[1200px] transition-transform duration-1000 ease-in-out pointer-events-none z-10" />

                  {/* Background Ambient Number */}
                  <div className="absolute -bottom-2 -right-1 sm:-bottom-8 sm:-right-4 text-[60px] sm:text-[120px] lg:text-[140px] leading-none font-mileast font-bold text-[#0B132B]/[0.04] lg:group-hover:text-[#0B132B]/[0.1] transition-all duration-500 pointer-events-none select-none z-0">
                    0{idx + 1}
                  </div>

                  {/* Top: Icon & Arrow */}
                  <div className="flex justify-between items-center w-full mb-4 sm:mb-8 relative z-10">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl border border-[#0B132B]/10 flex items-center justify-center bg-white lg:group-hover:bg-[#0B132B] transition-colors duration-500 shadow-sm">
                       <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2E7D32] lg:group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#0B132B]/5 flex items-center justify-center lg:group-hover:bg-white/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-[#0B132B]/60 lg:group-hover:text-[#0B132B] lg:group-hover:-rotate-45 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Bottom: Title & Description */}
                  <div className="relative z-10 flex flex-col gap-1.5 sm:gap-2.5 mt-auto">
                    <h3 className="font-poppins font-bold text-[#0B132B] text-[17px] xs:text-[18px] sm:text-2xl leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-poppins text-[#475569] lg:group-hover:text-[#0B132B]/85 text-[13px] xs:text-[14px] sm:text-[15px] leading-relaxed transition-colors duration-500">
                      {service.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
