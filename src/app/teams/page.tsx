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

                {/* Background Lines */}
                <div 
                    className="absolute inset-0 z-0 pointer-events-none opacity-25"
                    style={{ 
                        backgroundImage: 'url("/assets/images/bg-lines.png")', 
                        backgroundSize: '800px', // Adjust this value to make lines smaller or larger
                        backgroundPosition: 'top left',
                        backgroundRepeat: 'repeat'
                    }}
                />

                {/* Noise/Grain Overlay */}
                {/* <div 
                    className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-[0.02]"
                    style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                /> */}

               

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



                {/* Team Cards Grid */}
                <div className="relative z-10 flex flex-wrap justify-center gap-10 max-w-[1200px] w-full mt-12 md:mt-20">
                    
                    {/* Founder Custom Card (Mibish) - Matching grid layout but custom shape style */}
                    <div className="flex justify-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.35, delay: 0 }}
                            className="group w-[340px] flex flex-col cursor-pointer"
                        >
                            {/* Image Section */}
                            <div className="relative w-full h-[300px] flex items-end justify-center mb-4 overflow-visible">
                                {/* Yellow shape with only top-right corner rounded */}
                                <div className="absolute bottom-0 left-0 w-full h-full bg-[#FFB800] rounded-tr-[6rem] transition-all duration-500 group-hover:bg-[#ffc633]"></div>
                                
                                {/* Founder Image */}
                                <img 
                                    src="/assets/team/Mibish_Founder-_Head-of-Creatives.png" 
                                    alt="Mibish Biju"
                                    className="relative z-10 w-[92%] scale-[1.32] h-[115%] bottom-[55px] object-contain object-bottom grayscale drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:grayscale-0 transition-all duration-500 ease-out"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="relative z-20 mt-4 flex flex-col px-2 pb-2 text-left">
                                <h3 className="text-[22px] font-black text-gray-900 leading-tight tracking-tight">Mibish Biju</h3>
                                <p className="text-[13px] font-bold mt-1 text-[#FFB800]">Creative Director</p>
                                
                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-[11px] font-medium text-gray-500 tracking-wide">Strategy • Creative • Leadership</p>
                                    
                                    {/* Social Icons */}
                                    <div className="flex space-x-2">
                                        <a href="#" className="w-8 h-8 bg-gray-200/50 border border-transparent rounded-full shadow-sm flex items-center justify-center text-gray-700 hover:scale-110 hover:text-black hover:bg-white hover:border-gray-200 transition-all">
                                            <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-gray-200/50 border border-transparent rounded-full shadow-sm flex items-center justify-center text-gray-700 hover:scale-110 hover:text-black hover:bg-white hover:border-gray-200 transition-all">
                                            <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-gray-200/50 border border-transparent rounded-full shadow-sm flex items-center justify-center text-gray-700 hover:scale-110 hover:text-black hover:bg-white hover:border-gray-200 transition-all">
                                            <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

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
                                index={index + 1}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}