"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/team/TeamCard";
import { teamMembers } from "@/data/team";

export default function TeamGrid() {
    return (
        <div className="relative z-10 flex flex-wrap justify-center gap-x-8 sm:gap-x-14 md:gap-x-20 lg:gap-x-24 gap-y-36 sm:gap-y-44 md:gap-y-36 max-w-[1400px] w-full mt-16 md:mt-24 px-4">
            {teamMembers.map((member, index) => (
                <motion.div 
                    key={index} 
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 45, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                        duration: 0.65,
                        delay: (index % 4) * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    <TeamCard 
                        themeColor={index % 2 === 0 ? "#FFB800" : "#10B981"}
                        imageSrc={member.imageSrc}
                        name={member.name}
                        role={member.role}
                        skills={member.skills}
                        index={index}
                    />
                </motion.div>
            ))}
        </div>
    );
}
