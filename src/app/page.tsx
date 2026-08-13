import HeroSection from "@/components/sections/hero";
import IntroSection from "@/components/sections/intro";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import WorksSection from "@/components/sections/works";
import PortfolioSection from "@/components/sections/portfolio";
import ContactSection from "@/components/sections/contact";
import CTASection from "@/components/sections/cta";
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
      {/* <IntroSection /> */}
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <PortfolioSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
