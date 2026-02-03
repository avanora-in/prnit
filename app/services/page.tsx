import { Metadata } from "next";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import LogoSlider from "@/components/sections/LogoSlider";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Our Services | PRNIT - Digital Solutions & Development",
  description:
    "Explore PRNIT's comprehensive range of digital services including web development, app development, design, e-commerce, cloud solutions, and more.",
};

export default function ServicesPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <ServicesHeroSection />
      <LogoSlider />
      <ServicesCTASection />
      <ServicesSection />
    </main>
  );
}
