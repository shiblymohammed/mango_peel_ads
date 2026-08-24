"use client";

import { Lightbulb, Target, PenTool, Heart, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const featureBarRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Target,
      title: "Strategy",
      desc: "Purpose-driven brand approach"
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      desc: "Ideas that stand out"
    },
    {
      icon: PenTool,
      title: "Storytelling",
      desc: "Stories that connect"
    },
    {
      icon: Heart,
      title: "Impact",
      desc: "Results that matter"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Disable scroll entrance animations entirely on mobile for instant loading
      if (window.innerWidth < 768) return;

      // 2. Headline Entrance
      gsap.from(headlineRef.current, {
        scrollTrigger: { trigger: headlineRef.current, start: "top 85%" },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // 3. Paragraph Entrance
      gsap.from(paragraphRef.current, {
        scrollTrigger: { trigger: paragraphRef.current, start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out"
      });

      // 4. Feature Bar Container & Staggered Items
      gsap.from(featureBarRef.current, {
        scrollTrigger: { trigger: featureBarRef.current, start: "top 85%" },
        scale: 0.98,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      });
      gsap.from('.feature-item', {
        scrollTrigger: { trigger: featureBarRef.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.5)"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full py-8 sm:py-12 lg:py-20 bg-transparent overflow-hidden">
      {/* Background Decor Card */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] bg-white/80 backdrop-blur-md rounded-2xl lg:rounded-l-[150px] shadow-sm pointer-events-none -z-10" />
      <div 
        className="absolute top-0 right-0 w-36 h-36 sm:w-64 sm:h-64 opacity-20 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#2E7D32 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Reserved for 3D Scene (DESKTOP ONLY) */}
          <div className="hidden lg:flex w-full lg:col-span-5 order-1 min-h-[400px] relative flex-col items-start justify-end pb-10 pointer-events-none">
            {/* Left side reserved for your 3D scene (Mango) */}
          </div>

          {/* RIGHT COLUMN: Typography & Content */}
          <div className="w-full col-span-12 lg:col-span-7 flex flex-col items-start text-left relative z-10 order-2">
            
            {/* TOP ROW: Text & Button */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-8 w-full">
              
              {/* Left Text */}
              <div className="flex-1 flex flex-col items-start text-left">
                {/* Headline */}
                <h2 ref={headlineRef} className="font-mileast font-extrabold text-[#0B132B] text-[34px] xs:text-[42px] sm:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.05] tracking-tight relative z-10">
                  <span className="relative inline-block">
                    Who We
                    {/* Yellow Burst */}
                    <svg viewBox="0 0 40 40" fill="none" className="absolute -right-7 -top-1 w-6 h-6 xs:w-7 xs:h-7 sm:-right-12 sm:-top-2 sm:w-[42px] sm:h-[42px]">
                      <path d="M10 25L4 8" stroke="#FFB800" strokeWidth="4.5" strokeLinecap="round"/>
                      <path d="M18 28L26 4" stroke="#FFB800" strokeWidth="4.5" strokeLinecap="round"/>
                      <path d="M26 30L40 18" stroke="#FFB800" strokeWidth="4.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <br />
                  <span className="relative inline-flex items-baseline mt-1 sm:mt-2">
                    Really <span className="text-[#2E7D32] ml-2.5 sm:ml-4">Are</span><span className="text-[#FFB800]">.</span>
                    {/* Green squiggly line */}
                    <svg viewBox="0 0 100 10" fill="none" className="absolute -bottom-2.5 left-0 w-20 sm:-bottom-4 sm:w-[100px] h-2 sm:h-2.5">
                      <path d="M2 7C20 3 80 3 98 7" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>

                {/* Paragraphs */}
                <div ref={paragraphRef} className="mt-4 sm:mt-6 text-[#475569] font-poppins text-[14px] xs:text-[15px] sm:text-lg leading-relaxed max-w-xl">
                  <p className="mb-3 sm:mb-4 font-medium">
                    We&apos;re a creative advertising agency that turns ideas into impactful stories. We blend creativity, strategy, and storytelling to build brands people love and remember.
                  </p>
                  <p className="font-bold text-[#2E7D32] text-[15px] sm:text-lg">
                    <span className="relative inline-block">
                      We don&apos;t follow trends.
                      {/* Yellow underline */}
                      <svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none" fill="none" className="absolute -bottom-[2px] left-0 w-full overflow-visible">
                        <path d="M-2 6C20 1 80 2 102 5" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
                      </svg>
                    </span>{" "}
                    We create stories that last.
                  </p>
                </div>
              </div>

              {/* Spinning Watch Our Story Play Button */}
              <div className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 xl:w-48 xl:h-48 flex items-center justify-center shrink-0 self-start sm:self-auto mt-2 sm:mt-8 xl:mr-6 cursor-pointer group active:scale-95 transition-transform">
                <div className="absolute inset-2 sm:inset-4 xl:inset-5 border-[1.5px] border-dashed border-[#2E7D32]/30 rounded-full lg:group-hover:border-[#2E7D32]/60 transition-colors" />
                
                {/* Spinning Text */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
                  <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] xs:text-[11px] sm:text-[12px] xl:text-[14px] font-bold tracking-[0.2em] fill-[#0B132B] uppercase">
                    <textPath href="#textPath" startOffset="0%">WATCH OUR STORY • WATCH OUR STORY • </textPath>
                  </text>
                </svg>
                
                {/* Play Button Icon */}
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-14 sm:h-14 xl:w-[72px] xl:h-[72px] bg-[#FFB800] rounded-full flex items-center justify-center shadow-md lg:group-hover:scale-105 transition-transform z-10">
                  <Play className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-white fill-white ml-0.5" />
                </div>
              </div>

            </div>

            {/* MIDDLE ROW: Feature Bar */}
            <div ref={featureBarRef} className="mt-8 sm:mt-12 xl:mt-16 w-full relative z-20">
              <div 
                className="w-full bg-white/90 sm:bg-white/70 backdrop-blur-md p-4 xs:p-5 sm:px-6 sm:py-8 lg:px-6 xl:px-8 lg:py-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 shadow-sm border border-[#0B132B]/15 rounded-2xl sm:rounded-[24px] lg:hover:border-[#0B132B]/40 transition-colors"
              >
                {features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="feature-item flex flex-col items-start sm:items-center text-left sm:text-center relative w-full p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/60 sm:bg-transparent border border-[#0B132B]/5 sm:border-none active:scale-[0.98] transition-transform"
                  >
                    {/* Dashed Divider for Desktop (all but last) */}
                    {idx !== features.length - 1 && (
                      <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[60px] border-r border-dashed border-[#0B132B]/20" />
                    )}

                    <div className="mb-2.5 sm:mb-4 p-2 sm:p-0 rounded-lg bg-[#2E7D32]/10 sm:bg-transparent">
                      {feature.title === "Creativity" ? (
                         <div className="relative">
                           <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                             <path d="M20 6L20 10" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round"/>
                             <path d="M12 12L15 15" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round"/>
                             <path d="M28 12L25 15" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round"/>
                           </svg>
                           <feature.icon className="w-5 h-5 sm:w-8 sm:h-8 text-[#2E7D32]" strokeWidth={2} />
                         </div>
                      ) : (
                        <feature.icon className="w-5 h-5 sm:w-8 sm:h-8 text-[#2E7D32]" strokeWidth={2} />
                      )}
                    </div>
                    
                    <h4 className="font-poppins font-bold text-[#0B132B] text-[14px] xs:text-[15px] xl:text-[17px] mb-1">{feature.title}</h4>
                    <p className="font-poppins text-[#475569] text-[11px] xs:text-[12px] font-medium leading-snug">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
