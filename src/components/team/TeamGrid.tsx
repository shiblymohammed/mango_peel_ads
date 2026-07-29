"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/team/TeamCard";

const teamMembers = [
  {
    name: "Mibish Biju",
    role: "Creative Director",
    imageSrc: "/assets/team/Mibish_Founder-_Head-of-Creatives.png",
    skills: "Strategy • Creative • Leadership"
  },
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

export default function TeamGrid() {
    return (
        <div className="relative z-10 flex flex-wrap justify-center gap-x-8 sm:gap-x-14 md:gap-x-20 lg:gap-x-24 gap-y-28 sm:gap-y-36 md:gap-y-28 max-w-[1400px] w-full mt-16 md:mt-24 px-4">
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
