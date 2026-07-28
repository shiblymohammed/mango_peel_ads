"use client";

import { motion } from "framer-motion";

interface TeamCardProps {
    themeColor?: string;
    imageSrc?: string;
    name?: string;
    role?: string;
    skills?: string;
    index?: number;
}

export default function TeamCard({
    themeColor = "#FFB800",
    imageSrc,
    name = "Team Member",
    role = "Role",
    skills = "Skill 1 • Skill 2",
    index = 0
}: TeamCardProps) {
    const stagger = index * 0.05;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: stagger }}
            className="group w-[340px] flex flex-col cursor-pointer"
        >
            {/* Image Section */}
            <div className="relative w-full h-[300px] flex items-end justify-center overflow-visible">
                {/* Shape with only top-right corner rounded */}
                <div 
                    className="absolute bottom-0 left-0 w-full h-full rounded-tr-[6rem] transition-all duration-500 group-hover:brightness-105"
                    style={{ backgroundColor: themeColor }}
                ></div>
                
                {/* Image */}
                {imageSrc && (
                    <img 
                        src={imageSrc} 
                        alt={name}
                        className="relative z-10 w-[92%] scale-[1.32] h-[115%] bottom-[55px] object-contain object-bottom grayscale drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:grayscale-0 transition-all duration-500 ease-out"
                    />
                )}
            </div>

            {/* Details Section */}
            <div className="relative z-20 mt-4 flex flex-col px-2 pb-2 text-left">
                <h3 className="text-[22px] font-black text-gray-900 leading-tight tracking-tight">{name}</h3>
                <p className="text-[13px] font-bold mt-1" style={{ color: themeColor }}>{role}</p>
                
                <div className="flex items-center justify-between">
                    <p className="text-[11px] font-medium text-gray-500 tracking-wide">{skills}</p>
                    
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
    );
}