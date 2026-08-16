"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    image: "/bg/socialmedia.png",
    title: "Social Media Content",
    desc: "Engaging, scroll-stopping content designed natively for every platform to build your community."
  },
  {
    image: "/bg/videoproduction.png",
    title: "Reels Production",
    desc: "High-quality, short-form video production that captures attention and drives viral growth."
  },
  {
    image: "/bg/tvcommercial.png",
    title: "TV Commercials",
    desc: "Cinematic, broadcast-ready advertisements that tell your brand's story on the big screen."
  },
  {
    image: "/bg/photography.png",
    title: "Photography",
    desc: "Professional product and lifestyle photography that makes your brand visually unforgettable."
  },
  {
    image: "/bg/digitalmarketing.png",
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies and paid media to maximize your reach and conversions."
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-start">
          
          {/* LEFT COLUMN: Reserved for Mango */}
          <div className="w-full lg:col-span-5 xl:col-span-5 relative flex flex-col items-center lg:items-start justify-end pointer-events-none min-h-[100px] lg:min-h-[400px]">
             {/* Left side remains empty for Mango */}
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left relative z-10 pt-10 lg:pt-0 pointer-events-auto">
            
            {/* Title Section */}
            <div ref={titleRef} className="w-full mb-12">
              <div className="relative inline-flex items-center justify-center">
                <img src="/bg/yellowBadgeStroke.png" alt="badge" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[250%] object-fill -z-10 pointer-events-none" />
                <span className="relative z-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B132B] px-3 py-1 whitespace-nowrap">WHAT WE DO</span>
              </div>
              <h2 className="font-mileast font-extrabold text-[#0B132B] text-5xl sm:text-6xl lg:text-[64px] xl:text-[72px] leading-[1.1] tracking-tight mt-4">
                We <span className="text-[#2E7D32]">Create.</span> You <span className="text-[#2E7D32]">Connect.</span><br/>
                We <span className="text-[#FFB800]">Make</span> It Matter.
              </h2>
              <div className="mt-8 relative inline-block text-[#475569] font-poppins text-[15px] sm:text-lg leading-relaxed">
                From scroll-stopping content to performance-driven campaigns,<br className="hidden sm:block" />
                we create, connect and convert across every platform.
                {/* Green scribbled underline */}
                <svg width="220" height="12" viewBox="0 0 200 12" fill="none" className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
                  <path d="M15 10C70 5 130 9 180 7" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Full Screen Carousel Section with Wavy Edges */}
      <div ref={cardsRef} className="w-full -mt-4 lg:-mt-12 mb-4 relative z-0 bg-[#FFB800]">
        
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 text-[#FFB800] -translate-y-[99%] z-10 pointer-events-none">
          <svg className="relative block w-full h-[50px] md:h-[70px] lg:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>

        {/* Marquee Wrapper (Hides Overflow) */}
        <div className="w-full overflow-hidden py-16">
          <div className="flex gap-8 w-max animate-marquee px-4">
          {[...services, ...services, ...services, ...services].map((service, idx) => (
            <div 
              key={idx}
              className="service-card shrink-0 w-[340px] h-[460px] bg-white p-10 flex flex-col items-center relative border border-[#FFB800]/20 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-4 hover:shadow-[0_40px_60px_-15px_rgba(0,0,0,0.2)] hover:border-[#FFB800]/50 transition-all duration-500 ease-out group"
              style={{ borderRadius: idx % 2 === 0 ? '30px 45px 30px 45px / 45px 30px 45px 30px' : '45px 30px 45px 30px / 30px 45px 30px 45px' }}
            >

              {/* Icon Area */}
              <div className="w-56 h-56 -mt-6 mb-0 relative flex items-center justify-center">
                {/* Dot Grid Pattern */}
                <svg 
                  className={`absolute top-12 -left-4 w-14 h-20 opacity-60 z-0 transition-opacity duration-500 group-hover:opacity-100 ${idx % 2 === 0 ? 'text-[#FFB800]' : 'text-[#2E7D32]'}`}
                  fill="currentColor" viewBox="0 0 24 40"
                >
                  <circle cx="4" cy="4" r="1.5" /><circle cx="12" cy="4" r="1.5" /><circle cx="20" cy="4" r="1.5" />
                  <circle cx="4" cy="14" r="1.5" /><circle cx="12" cy="14" r="1.5" /><circle cx="20" cy="14" r="1.5" />
                  <circle cx="4" cy="24" r="1.5" /><circle cx="12" cy="24" r="1.5" /><circle cx="20" cy="24" r="1.5" />
                  <circle cx="4" cy="34" r="1.5" /><circle cx="12" cy="34" r="1.5" /><circle cx="20" cy="34" r="1.5" />
                </svg>
                
                <img 
                  src={idx % 2 === 0 ? "/bg/cardblobyellow.png" : "/bg/cardblobgreen.png"} 
                  alt="blob background"
                  className="absolute inset-0 w-full h-full object-contain transform scale-[1.4] group-hover:scale-[1.55] transition-all duration-700 ease-out"
                />
                <img src={service.image} alt={service.title} className="w-44 h-44 object-contain relative z-10 drop-shadow-md group-hover:scale-125 group-hover:-translate-y-4 group-hover:drop-shadow-2xl transition-all duration-500 ease-out" />
              </div>

              <h3 className="font-poppins font-bold text-[#0B132B] text-2xl mb-4 text-center">
                <span className="relative inline-block">
                  {service.title}
                  {/* Pen drawn underline */}
                  <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[75%] h-[6px] text-[#FFB800] opacity-100" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M2 8 Q 50 2 98 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
                  </svg>
                </span>
              </h3>
              <p className="text-[#1E293B] font-poppins text-[15px] leading-relaxed text-center flex-1">
                {service.desc}
              </p>
              
              {/* Bottom Arrow */}
              <div className="mt-6 w-12 h-12 rounded-full bg-[#E5D7C2]/40 flex items-center justify-center group-hover:bg-[#FFB800] group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300 ease-out shrink-0 cursor-pointer">
                <ArrowRight className="w-6 h-6 text-[#0B132B] group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none text-[#FFB800] translate-y-[99%] z-10 pointer-events-none">
          <svg className="relative block w-full h-[50px] md:h-[70px] lg:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 16px)); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
      </div>
    </section>
  );
}
