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
    skills = "Skill 1 • Skill 2"
}: TeamCardProps) {
    return (
        <div className="group w-[260px] sm:w-[340px] flex flex-col cursor-pointer">
            {/* Image Section */}
            <div className="relative w-full h-[220px] sm:h-[300px] flex items-end justify-center overflow-visible">
                {/* Ambient Glow on hover */}
                <div 
                    className="absolute bottom-0 left-0 w-full h-full rounded-tr-[4.5rem] sm:rounded-tr-[6rem] opacity-0 group-hover:opacity-45 blur-2xl transition-all duration-500 -z-10 pointer-events-none"
                    style={{ backgroundColor: themeColor }}
                />

                {/* 1. Background Shape */}
                <motion.div 
                    className="absolute bottom-0 left-0 w-full h-full rounded-tr-[4.5rem] sm:rounded-tr-[6rem] group-hover:rounded-t-[2.5rem] sm:group-hover:rounded-t-[3.5rem] overflow-hidden transition-all duration-500 ease-out group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] group-hover:brightness-105"
                    style={{ backgroundColor: themeColor }}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Shine Line passing across the entire bg shape from left to right behind the person image */}
                    <div className="absolute inset-y-0 -left-[100px] w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 group-hover:translate-x-[500px] transition-transform duration-1000 ease-in-out pointer-events-none" />
                </motion.div>
                
                {/* 2. Image */}
                {imageSrc && (
                    <motion.div
                        className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none"
                        initial={{ opacity: 0, y: 35, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <img 
                            src={imageSrc} 
                            alt={name}
                            className="relative z-10 w-[92%] scale-[1.38] sm:scale-[1.32] h-[115%] bottom-[40px] sm:bottom-[55px] object-contain object-bottom grayscale drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:grayscale-0 transition-all duration-500 ease-out"
                        />
                    </motion.div>
                )}
            </div>

            {/* 3. Details Section */}
            <div className="relative z-20 mt-3 sm:mt-4 flex flex-col px-2 pb-2 text-left">
                <motion.div 
                    className="relative w-fit"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h3 className="text-[18px] sm:text-[22px] font-black text-gray-900 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 leading-tight tracking-tight">{name}</h3>
                    <div className="h-[3px] w-0 group-hover:w-full transition-all duration-300 ease-out mt-0.5 rounded-full" style={{ backgroundColor: themeColor }} />
                </motion.div>
                <motion.p 
                    className="text-[12px] sm:text-[13px] font-bold mt-1 group-hover:translate-x-1 transition-all duration-300 delay-75" 
                    style={{ color: themeColor }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                    {role}
                </motion.p>
                
                <motion.div 
                    className="flex items-center justify-between mt-1 sm:mt-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-[10px] sm:text-[11px] font-medium text-gray-500 tracking-wide">{skills}</p>
                </motion.div>
            </div>
        </div>
    );
}