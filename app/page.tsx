import HeaderSection from "@/components/layout/HeaderSection";
import HeroSection from "@/components/home/HeroSection";
import LogoSlider from "@/components/sections/LogoSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CustomAiSection from "@/components/home/CustomAiSection";
import BlogSection from "@/components/home/BlogSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <main className="deep-navy scroll-smooth">
      <HeroSection />
      <LogoSlider />
      <AboutSection />
      <ServicesSection />
      <CustomAiSection />
      <IndustriesSection />
      <BlogSection />
      <TestimonialsSection />
    </main>
  );
}
