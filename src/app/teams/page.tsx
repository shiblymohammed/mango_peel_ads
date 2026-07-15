"use client";

import TeamCard from "@/components/team/TeamCard";
import { motion } from "framer-motion";


const teamMembers = [
  {
    name: "Annie",
    role: "Co Founder & Head of Operations",
    imageSrc: "/assets/team/Annie_Co Founder-_Head-of-Operations.png",
    skills: "Operations • Management • Planning"
  },
  {
    name: "Ajuraj",
    role: "Art Director",
    imageSrc: "/assets/team/Ajuraj_Art_Director.png",
    skills: "Design • Creative • Branding"
  },
  {
    name: "Hari",
    role: "Consultant & Creative Director",
    imageSrc: "/assets/team/Hari_Consultant_Creative-Director.png",
    skills: "Creative Direction • Consulting"
  },
  {
    name: "John",
    role: "Ideation Head",
    imageSrc: "/assets/team/John_Ideation_Head.png",
    skills: "Ideation • Innovation • Planning"
  },
  {
    name: "Shelson",
    role: "Finance Manager",
    imageSrc: "/assets/team/Shelson_Finance_Manager.png",
    skills: "Finance • Accounting"
  },
  {
    name: "Midhun",
    role: "Sales Associate",
    imageSrc: "/assets/team/Midhun_Sales-Associate_Kerala.png",
    skills: "Sales • Regional"
  },
  {
    name: "Rohan",
    role: "Sales Associate",
    imageSrc: "/assets/team/Rohan_Sales-Associate_UAE.png",
    skills: "Sales • International"
  }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 overflow-hidden">

            {/* Team Section */}
            <section className="relative w-full flex flex-col items-center px-4 py-24 bg-gray-100">

                {/* ===== DECORATIVE BACKGROUND ELEMENTS ===== */}

                {/* Large green gradient orb — top right */}
                <div
                  className="absolute top-[-80px] right-[-100px] w-[450px] h-[450px] rounded-full pointer-events-none z-0 hidden lg:block"
                  style={{ background: 'radial-gradient(circle at 40% 40%, #10B98150 0%, #10B98120 40%, transparent 70%)' }}
                />

                {/* Large yellow gradient orb — bottom left */}
                <div
                  className="absolute bottom-[-60px] left-[-80px] w-[380px] h-[380px] rounded-full pointer-events-none z-0 hidden lg:block"
                  style={{ background: 'radial-gradient(circle at 60% 60%, #FFB80040 0%, #FFB80015 45%, transparent 70%)' }}
                />

                {/* Medium green gradient orb — mid left */}
                <div
                  className="absolute top-[45%] left-[-40px] w-[250px] h-[250px] rounded-full pointer-events-none z-0 hidden md:block"
                  style={{ background: 'radial-gradient(circle, #10B98125 0%, transparent 65%)' }}
                />

                {/* Medium yellow gradient orb — mid right */}
                <div
                  className="absolute top-[30%] right-[-30px] w-[220px] h-[220px] rounded-full pointer-events-none z-0 hidden md:block"
                  style={{ background: 'radial-gradient(circle, #FFB80030 0%, transparent 60%)' }}
                />

                {/* Green organic blob — top right */}
                <svg
                  className="absolute top-[-40px] right-[-60px] w-[280px] h-[320px] pointer-events-none z-0 opacity-90 hidden lg:block"
                  viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M220 10 C280 30, 310 120, 280 200 S240 310, 180 340 C120 360, 60 300, 40 230 S50 100, 120 50 C160 20, 190 0, 220 10Z" fill="#10B981" opacity="0.85" />
                </svg>

                {/* Green organic blob — bottom left */}
                <svg
                  className="absolute bottom-[-60px] left-[-80px] w-[260px] h-[300px] pointer-events-none z-0 opacity-80 hidden lg:block"
                  viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M60 20 C120 -10, 200 30, 240 100 S270 240, 220 290 C170 330, 80 310, 40 250 S-20 120, 30 60 C40 40, 50 25, 60 20Z" fill="#10B981" opacity="0.8" />
                </svg>

                {/* Orange/yellow half-arc — left side */}
                <svg
                  className="absolute top-[35%] left-[-30px] w-[120px] h-[120px] pointer-events-none z-0 opacity-60 hidden md:block"
                  viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="60" r="50" stroke="#FFB800" strokeWidth="4" fill="none" />
                </svg>

                {/* Orange half-arc — bottom right */}
                <svg
                  className="absolute bottom-[15%] right-[-20px] w-[100px] h-[100px] pointer-events-none z-0 opacity-50 hidden md:block"
                  viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="90" cy="50" r="40" stroke="#FFB800" strokeWidth="3.5" fill="none" />
                </svg>

                {/* Dot grid pattern — right side */}
                <svg
                  className="absolute top-[40%] right-[3%] w-[80px] h-[80px] pointer-events-none z-0 opacity-30 hidden lg:block"
                  viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  {[0, 1, 2, 3, 4].map(row =>
                    [0, 1, 2, 3, 4].map(col => (
                      <circle key={`dot-r-${row}-${col}`} cx={8 + col * 16} cy={8 + row * 16} r="2.5" fill="#94A3B8" />
                    ))
                  )}
                </svg>

                {/* Dot grid pattern — left side */}
                <svg
                  className="absolute bottom-[25%] left-[5%] w-[60px] h-[60px] pointer-events-none z-0 opacity-25 hidden lg:block"
                  viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  {[0, 1, 2, 3].map(row =>
                    [0, 1, 2, 3].map(col => (
                      <circle key={`dot-l-${row}-${col}`} cx={7 + col * 15} cy={7 + row * 15} r="2" fill="#94A3B8" />
                    ))
                  )}
                </svg>

                {/* Wavy line — between heading and cards */}
                <svg
                  className="absolute top-[35.5%] left-[10%] w-[80%] h-[20px] pointer-events-none z-0 opacity-[0.08] hidden md:block"
                  viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                >
                  <path d="M0 10 Q40 0, 80 10 T160 10 T240 10 T320 10 T400 10 T480 10 T560 10 T640 10 T720 10 T800 10" stroke="#10B981" strokeWidth="2" fill="none" />
                </svg>

                {/* Subtle yellow glow — behind heading */}
                <div
                  className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full pointer-events-none z-0 opacity-25 hidden md:block"
                  style={{ background: 'radial-gradient(ellipse at center, #FFB80035 0%, #FFB80010 50%, transparent 75%)' }}
                />

                {/* Subtle green glow — behind cards */}
                <div
                  className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none z-0 hidden lg:block"
                  style={{ background: 'radial-gradient(ellipse at center, #10B98118 0%, #10B98108 50%, transparent 70%)' }}
                />

                {/* Small static dots */}
                <div className="absolute top-[30%] right-[8%] w-2 h-2 rounded-full bg-[#10B981] opacity-40 pointer-events-none z-0 hidden lg:block" />
                <div className="absolute top-[65%] left-[7%] w-3 h-3 rounded-full bg-[#FFB800] opacity-30 pointer-events-none z-0 hidden lg:block" />
                <div className="absolute bottom-[10%] right-[12%] w-2.5 h-2.5 rounded-full bg-[#10B981] opacity-35 pointer-events-none z-0 hidden lg:block" />
                <div className="absolute top-[22%] right-[25%] w-2 h-2 rounded-full bg-[#10B981] opacity-25 pointer-events-none z-0 hidden lg:block" />

                {/* Cross shapes */}
                <svg className="absolute top-[48%] left-[8%] w-[20px] h-[20px] pointer-events-none z-0 opacity-30 hidden lg:block" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="2" x2="10" y2="18" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="10" x2="18" y2="10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg className="absolute bottom-[20%] right-[6%] w-[16px] h-[16px] pointer-events-none z-0 opacity-25 hidden lg:block" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="8" y1="1" x2="8" y2="15" stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="1" y1="8" x2="15" y2="8" stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" />
                </svg>

                {/* Sparkle star */}
                <svg className="absolute top-[8%] right-[18%] w-[28px] h-[28px] pointer-events-none z-0 opacity-70 hidden md:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" fill="#FFB800" opacity="0.7" />
                </svg>

                {/* ===== END DECORATIVE ELEMENTS ===== */}

                {/* Heading */}
                <div className="relative z-10 flex flex-col items-center text-center mb-24 mt-10">
                    <h1 className="font-mileast text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
                        The people behind <br className="hidden sm:block" />
                        the{" "}
                        <span className="relative inline-block text-[#FFB800]">
                          work
                          <svg
                            className="absolute left-[-6%] w-[112%] h-auto pointer-events-none"
                            style={{ bottom: '-0.1em' }}
                            viewBox="0 0 120 18" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                          >
                            <path d="M3 12 C8 6, 18 4, 30 7 S52 14, 65 9 S85 3, 100 8 S112 13, 117 10" stroke="#FFB800" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 13 C12 7, 22 5, 33 8 S55 15, 67 10 S88 4, 102 9 S114 14, 118 11" stroke="#FFB800" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
                          </svg>
                        </span>{" "}
                        we do.
                    </h1>
                    <p className="font-poppins-italic text-[#64748B] text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                        A diverse team of designers, developers, and dreamers <br className="hidden sm:block" />
                        building thoughtful products with purpose.
                    </p>
                </div>

                {/* Featured Founder Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.35 }}
                    className="relative z-10 w-full max-w-[960px] mx-auto p-6 md:p-8 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20 mb-24"
                >
                    
                    {/* Left part: Text */}
                    <div className="flex-1 flex flex-col justify-center text-center md:text-left relative z-20">
                        
                        {/* Eyebrow */}
                        <div className="flex items-center justify-center md:justify-start gap-2.5 mb-6">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB800] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFB800]"></span>
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                Meet The Founder
                            </span>
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-5xl md:text-[56px] font-black text-gray-900 leading-[1.05] tracking-tight mb-2">
                            Mibish <span className="text-[#FFB800]">Biju</span>
                        </h2>
                        
                        {/* Role */}
                        <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-6">
                            Creative Director
                        </h3>

                        {/* Divider */}
                        <div className="w-12 h-1 bg-[#10B981] rounded-full mx-auto md:mx-0 mb-6"></div>
                        
                        {/* Description */}
                        <p className="text-[15px] md:text-base text-gray-500 font-medium leading-[1.8] mb-8 max-w-[95%] mx-auto md:mx-0">
                            With a passion for creativity and a strategy-first mindset, Mibish founded Mango Peel Ads to help brands stand out and connect with the right audience through powerful, story-driven campaigns.
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-3 justify-center md:justify-start items-center">
                            <a href="#" className="group w-11 h-11 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:bg-[#FFB800] hover:text-white hover:border-[#FFB800] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                            <a href="#" className="group w-11 h-11 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:bg-[#FFB800] hover:text-white hover:border-[#FFB800] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right part: Image matching the reference */}
                    <div className="relative w-[300px] h-[300px] md:w-[340px] md:h-[340px] shrink-0 flex items-end justify-center">
                        {/* Yellow shape with rounded top-right corner */}
                        <div className="absolute bottom-0 left-0 w-[94.99%] h-[95%] bg-[#FFB800] rounded-tr-[5rem] md:rounded-tr-[7rem]"></div>
                        
                        {/* Founder Image */}
                        <img 
                            src="/assets/team/Mibish_Founder-_Head-of-Creatives.png" 
                            alt="Mibish Biju"
                            className="relative z-10 w-[100%] h-[126%] object-contain left-[1%] top-[4.7%] object-bottom grayscale drop-shadow-xl -translate-y-4 -translate-x-3"
                        />
                    </div>
                </motion.div>

                {/* Team Cards Grid */}
                <div className="relative z-10 flex flex-wrap justify-center gap-10 max-w-[1200px] w-full">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="flex justify-center"
                        >
                            <TeamCard 
                                themeColor={[1, 3, 5, 6].includes(index) ? "#10B981" : "#FFB800"}
                                imageSrc={member.imageSrc}
                                name={member.name}
                                role={member.role}
                                skills={member.skills}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}