import HeroSection from "@/components/sections/hero";
import IntroSection from "@/components/sections/intro";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import ProgrammesSection from "@/components/sections/programmes";
import PortfolioSection from "@/components/sections/portfolio";
import TestimonialsSection from "@/components/sections/testimonials";
import CTASection from "@/components/sections/cta";

export default function Home() {
  return (
    <main 
      className="w-full min-h-screen bg-[#F4F1E8]"
      style={{
        backgroundImage: 'url("/bg/french-stucco.png")',
        backgroundRepeat: 'repeat',
      }}
    >
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <ProgrammesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
