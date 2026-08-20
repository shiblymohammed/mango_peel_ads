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
    shortDesc: "Scroll-stopping native content."
  },
  {
    icon: PlaySquare,
    title: "Reels Production",
    desc: "High-quality, short-form video production that captures attention and drives viral growth.",
    shortDesc: "Viral short-form video."
  },
  {
    icon: Projector,
    title: "TV Commercials",
    desc: "Cinematic, broadcast-ready advertisements that tell your brand's story on the big screen.",
    shortDesc: "Cinematic broadcast ads."
  },
  {
    icon: Focus,
    title: "Photography",
    desc: "Professional product and lifestyle photography that makes your brand visually unforgettable.",
    shortDesc: "Professional photography."
  },
  {
    icon: Radar,
    title: "Corporate Films",
    desc: "Data-driven marketing strategies and paid media to maximize your reach and conversions.",
    shortDesc: "Data-driven marketing."
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
    <section ref={sectionRef} id="services" className="relative w-full py-16 lg:py-24 bg-transparent overflow-hidden">

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10 pointer-events-none">
        <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-12 items-start">
          
          {/* LEFT COLUMN: Reserved for Mango */}
          <div className="w-full col-span-5 relative flex flex-col items-center lg:items-start justify-end pointer-events-none min-h-[100px] lg:min-h-[400px]">
             {/* Left side remains empty for Mango */}
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full col-span-7 flex flex-col items-start text-left relative z-10 pt-0 lg:pt-0 pointer-events-auto">
            
            {/* Title Section */}
            <div ref={titleRef} className="w-full mb-12">
              <h2 className="font-mileast font-extrabold text-[#0B132B] text-[32px] xs:text-[40px] sm:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.1] tracking-tight mt-0 lg:mt-4">
                We <span className="text-[#2E7D32]">Create.</span> You <span className="text-[#2E7D32]">Connect.</span><br/>
                We <span className="text-[#FFB800]">Make</span> It Matter.
              </h2>
              <div className="mt-2 lg:mt-4 relative inline-block text-[#475569] font-poppins text-[14px] xs:text-[16px] sm:text-lg leading-relaxed">
                From scroll-stopping content to performance-driven campaigns,<br className="hidden sm:block" />
                we create, connect and convert across every platform.
                {/* Green scribbled underline */}
                <svg width="220" height="12" viewBox="0 0 200 12" fill="none" className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
                  <path d="M15 10C70 5 130 9 180 7" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
                </svg>
              </div>
            </div>

            {/* Modern Bento Grid Services List */}
            <div ref={cardsRef} className="w-full grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-8">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  onMouseEnter={() => window.innerWidth >= 1024 && setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`service-card group relative w-full flex flex-col p-2 xs:p-3 sm:p-10 bg-white/60 backdrop-blur-sm border-[1.5px] border-[#0B132B]/10 lg:hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] lg:hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                    idx === 0 ? 'col-span-2' : ''
                  } ${
                    idx % 2 === 0 
                      ? 'rounded-xl sm:rounded-[24px] sm:rounded-tr-[80px] lg:hover:border-[#FFB800]' 
                      : 'rounded-xl sm:rounded-[24px] sm:rounded-tl-[80px] lg:hover:border-[#10B981]'
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
                          backgroundColor: idx % 2 === 0 ? '#FFB800' : '#10B981',
                          borderRadius: idx % 2 === 0 ? '24px 80px 24px 24px' : '80px 24px 24px 24px'
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
                  <div className="absolute -bottom-2 -right-1 sm:-bottom-8 sm:-right-4 text-[70px] sm:text-[140px] leading-none font-mileast font-bold text-[#0B132B]/[0.03] lg:group-hover:text-[#0B132B]/[0.1] lg:group-hover:-translate-y-4 lg:group-hover:-translate-x-2 transition-all duration-700 ease-out pointer-events-none select-none z-10">
                    0{idx + 1}
                  </div>

                  {/* Top: Icon & Arrow */}
                  <div className="flex justify-between items-start w-full mb-3 sm:mb-12 relative z-10">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 rounded-md sm:rounded-xl border border-[#0B132B]/10 flex items-center justify-center bg-white lg:group-hover:bg-[#0B132B] transition-colors duration-500 shadow-sm">
                       <service.icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#2E7D32] lg:group-hover:text-white transition-colors duration-500" strokeWidth={2.5} />
                    </div>
                    <ArrowRight className="w-3 h-3 sm:w-6 sm:h-6 text-[#0B132B]/20 lg:group-hover:text-[#0B132B] lg:group-hover:-rotate-45 transition-all duration-500 shrink-0" />
                  </div>

                  {/* Bottom: Title & Description */}
                  <div className="relative z-10 flex flex-col gap-1 sm:gap-3 mt-auto">
                    <h3 className="font-poppins font-bold text-[#0B132B] text-[10px] xs:text-[12px] sm:text-2xl leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-poppins text-[#475569] lg:group-hover:text-[#0B132B]/80 text-[8px] xs:text-[9px] sm:text-[15px] leading-[1.3] sm:leading-relaxed max-w-[95%] transition-colors duration-500">
                      <span className="hidden sm:block">{service.desc}</span>
                      <span className="block sm:hidden">{service.shortDesc}</span>
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
