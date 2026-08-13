import HeroSection from "@/components/sections/homepage/hero";
import AboutSection from "@/components/sections/homepage/about";
import ServicesSection from "@/components/sections/homepage/services";
import WorksSection from "@/components/sections/homepage/works";
import ContactSection from "@/components/sections/homepage/contact";
import MangoCanvas from "@/components/3d/MangoCanvas";

export default function Home() {
  return (
    <main 
      className="w-full min-h-screen bg-[#F4F1E8] relative z-0"
      style={{
        backgroundImage: 'url("/bg/french-stucco.png")',
        backgroundRepeat: 'repeat',
      }}
    >
      <MangoCanvas />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <ContactSection />
    </main>
  );
}
