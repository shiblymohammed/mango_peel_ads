import TeamCard from "@/components/team/TeamCard";


const teamMembers = [
  {
    name: "Mibish",
    role: "Founder & Head of Creatives",
    imageSrc: "/assets/team/Mibish_Founder-_Head-of-Creatives.png",
    skills: "Leadership • Strategy • Creative"
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

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 overflow-hidden">
            
     

            {/* Rest of the Team Section */}
            <section className="w-full flex flex-col items-center px-4 py-24 bg-gray-100">
                <div className="flex flex-col items-center text-center mb-24 mt-10">
                    <h1 className="font-mileast text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
                        The people behind <br className="hidden sm:block" />
                        the <span className="text-[#FFB800]">work</span> we do.
                    </h1>
                    <p className="font-poppins-italic text-[#64748B] text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                        A diverse team of designers, developers, and dreamers <br className="hidden sm:block" />
                        building thoughtful products with purpose.
                    </p>
                    {/* Curved line SVG */}
                    <svg className="mt-10 text-[#FFB800] w-24 h-6 opacity-80" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 4 20 Q 50 2 96 20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </svg>
                </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1600px] w-full">
                {teamMembers.map((member, index) => (
                    <div 
                        key={index} 
                        className={`flex justify-center w-full transition-transform duration-500 ${
                            index % 2 === 0 ? 'lg:translate-y-8' : 'lg:-translate-y-8'
                        }`}
                    >
                        <TeamCard 
                            themeColor={[1, 3, 4, 6].includes(index) ? "#10B981" : "#FFB800"}
                            imageSrc={member.imageSrc}
                            name={member.name}
                            role={member.role}
                            skills={member.skills}
                        />
                    </div>
                ))}
            </div>
            </section>
        </main>
    );
}