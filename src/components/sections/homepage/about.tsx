"use client";

import { User, Lightbulb, Target, PenTool, Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const featureBarRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Target,
      title: "Strategy",
      desc: "Purpose-driven\napproach"
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      desc: "Ideas that\nstand out"
    },
    {
      icon: PenTool,
      title: "Storytelling",
      desc: "Stories that\nconnect"
    },
    {
      icon: Heart,
      title: "Impact",
      desc: "Results that\nmatter"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // 1. Wavy Badge Entrance & Parallax
      gsap.from('.wavy-badge', {
        scrollTrigger: { trigger: '.wavy-badge', start: "top 85%" },
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.6)"
      });
      gsap.to('.wavy-badge', {
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
        y: -120,
        ease: "none"
      });

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

      // 5. Quote Card Entrance
      gsap.from(quoteRef.current, {
        scrollTrigger: { trigger: quoteRef.current, start: "top 85%" },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full py-12 lg:py-16 bg-transparent overflow-hidden">
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
            
            {/* Left side reserved for your 3D scene (Mango) */}
          </div>

          {/* RIGHT COLUMN: Typography & Content */}
          <div className="w-full lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left relative z-10 order-1 lg:order-2 pt-12 sm:pt-16 lg:pt-0">
            
            {/* TOP ROW: Text & Button */}
            <div className="flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-8 w-full">
              
              {/* Left Text */}
              <div className="flex-1">
                {/* Eyebrow */}
                <div className="mb-6">
                  <div className="relative inline-flex items-center justify-center">
                    <img src="/bg/yellowBadgeStroke.png" alt="badge" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[250%] object-fill -z-10 pointer-events-none" />
                    <span className="relative z-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B132B] px-3 py-1 whitespace-nowrap">ABOUT US</span>
                  </div>
                </div>

                {/* Headline */}
                <h2 ref={headlineRef} className="font-mileast font-extrabold text-[#0B132B] text-4xl sm:text-6xl lg:text-[64px] xl:text-[72px] leading-[1.1] tracking-tight relative z-10">
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
                <div ref={paragraphRef} className="mt-4 text-[#475569] font-poppins text-[15px] sm:text-lg leading-relaxed max-w-[500px]">
                  <p className="mb-6 font-medium">
                    We're a creative advertising agency that turns ideas into impactful stories. We blend creativity, strategy and storytelling to build brands people love and remember.
                  </p>
                  <p className="font-bold text-[#2E7D32]">
                    <span className="relative inline-block">
                      We don't follow trends.
                      {/* Yellow underline */}
                      <svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none" fill="none" className="absolute -bottom-[2px] left-0 w-full overflow-visible">
                        <path d="M-2 6C20 1 80 2 102 5" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
                      </svg>
                    </span>{" "}
                    We create stories that last.
                  </p>
                </div>
              </div>

              {/* Right Button (Watch Our Story) */}
              <div className="relative w-32 h-32 xs:w-40 xs:h-40 xl:w-48 xl:h-48 flex items-center justify-center shrink-0 mt-4 xl:mt-12 xl:mr-10 self-start sm:self-center lg:self-start cursor-pointer group">
                {/* Dashed Circle */}
                <div className="absolute inset-4 xl:inset-5 border-[1.5px] border-dashed border-[#2E7D32]/30 rounded-full group-hover:border-[#2E7D32]/60 transition-colors" />
                
                {/* Spinning Text */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
                  <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[9px] xs:text-[10px] font-bold tracking-[0.2em] fill-[#0B132B] uppercase">
                    <textPath href="#textPath" startOffset="0%">WATCH OUR STORY • WATCH OUR STORY • </textPath>
                  </text>
                </svg>
                
                {/* Play Button */}
                <div className="w-12 h-12 xs:w-16 xs:h-16 xl:w-[72px] xl:h-[72px] bg-[#FFB800] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform z-10">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1 xs:border-t-[8px] xs:border-l-[14px] xs:border-b-[8px] xl:border-t-[9px] xl:border-l-[16px] xl:border-b-[9px]" />
                </div>
              </div>

            </div>

            {/* MIDDLE ROW: Feature Bar */}
            <div ref={featureBarRef} className="mt-12 xl:mt-16 w-full relative z-20 hover:-translate-y-1 transition-transform duration-500">
              <div 
                className="w-full bg-white/70 backdrop-blur-md px-4 py-8 lg:px-6 xl:px-8 lg:py-10 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-2 shadow-sm relative overflow-hidden border-[1.5px] border-[#0B132B]/20 hover:border-[#0B132B]/40 transition-colors"
                style={{ borderRadius: '24px' }}
              >
                {features.map((feature, idx) => (
                  <div key={idx} className="feature-item flex flex-col items-center text-center relative w-full">
                    {/* Dashed Divider for Desktop (all but last) */}
                    {idx !== features.length - 1 && (
                      <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[60px] border-r border-dashed border-[#0B132B]/20" />
                    )}
                    {/* Dashed Divider for Mobile (odd items) */}
                    {idx % 2 === 0 && (
                      <div className="block sm:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[60px] border-r border-dashed border-[#0B132B]/20" />
                    )}

                    <div className="mb-4">
                      {/* For Creativity icon, we add tiny hand-drawn rays to match the sketch */}
                      {feature.title === "Creativity" ? (
                         <div className="relative">
                           <svg width="30" height="30" viewBox="0 0 40 40" fill="none" className="absolute -top-3 left-1/2 -translate-x-1/2">
                             <path d="M20 6L20 10" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round"/>
                             <path d="M12 12L15 15" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round"/>
                             <path d="M28 12L25 15" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round"/>
                           </svg>
                           <feature.icon className="w-8 h-8 text-[#2E7D32]" strokeWidth={1.5} />
                         </div>
                      ) : (
                        <feature.icon className="w-8 h-8 text-[#2E7D32]" strokeWidth={1.5} />
                      )}
                    </div>
                    
                    <h4 className="font-poppins font-bold text-[#0B132B] text-[15px] xl:text-[17px] mb-1">{feature.title}</h4>
                    <p className="font-poppins text-[#475569] text-[11px] xl:text-[12px] font-medium leading-snug whitespace-pre-line">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM ROW: Quote */}
            <div
              ref={quoteRef}
              className="mt-10 xl:mt-12 w-full max-w-[560px] bg-[#FFF8E7] p-6 flex flex-col sm:flex-row items-center gap-6 relative border border-[#FFB800]/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-500"
              style={{ borderRadius: '15px 255px 15px 225px / 255px 15px 225px 15px' }}
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
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
