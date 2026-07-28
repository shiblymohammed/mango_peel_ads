"use client";

import TeamGrid from "@/components/team/TeamGrid";

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start overflow-hidden">

            {/* Team Section */}
            <section className="relative w-full flex flex-col items-center px-4 py-24 bg-gray-100">

                {/* Background Lines */}
                <div 
                    className="absolute inset-0 z-0 pointer-events-none opacity-50"
                    style={{ 
                        backgroundImage: 'url("/assets/images/bg-lines.png")', 
                        backgroundSize: '800px', // Adjust this value to make lines smaller or larger
                        backgroundPosition: 'top left',
                        backgroundRepeat: 'repeat'
                    }}
                />

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
                <TeamGrid />
            </section>
        </main>
    );
}