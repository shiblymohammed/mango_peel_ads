import HeroSection from "@/components/sections/homepage/hero";
import AboutSection from "@/components/sections/homepage/about";
import ServicesSection from "@/components/sections/homepage/services";
import WorksSection from "@/components/sections/homepage/works";
import ContactSection from "@/components/sections/homepage/contact";
import MangoCanvas from "@/components/3d/MangoCanvas";
import Preloader from "@/components/common/Preloader";

export default function Home() {
  return (
    <main 
      className="w-full min-h-screen bg-[#F4F1E8] relative z-0"
      style={{
        backgroundImage: 'url("/bg/french-stucco.png")',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Background Lines from Team Section */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{ 
            backgroundImage: 'url("/assets/images/bg-lines.png")', 
            backgroundSize: '800px',
            backgroundPosition: 'top left',
            backgroundRepeat: 'repeat'
        }}
      />
      
      <Preloader />
      <MangoCanvas />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <ContactSection />
    </main>
  );
}
