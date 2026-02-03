import WebDevHeroSection from "@/components/services/web-development/WebDevHeroSection";
import WebDevSolutionsSection from "@/components/services/web-development/WebDevSolutionsSection";
import WebDevDesignTechSection from "@/components/services/web-development/WebDevDesignTechSection";
import WebDevWhyChooseSection from "@/components/services/web-development/WebDevWhyChooseSection";
import LogoSlider from "@/components/sections/LogoSlider";
import ProcessSection from "@/components/sections/ProcessSection";
import TechnologiesSection from "@/components/sections/Technologies";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Web Development Services | PRNIT",
  description:
    "We provide exceptional web development services. Our team builds responsive websites, web applications, and enterprise solutions that drive business growth.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <WebDevHeroSection />
      <LogoSlider />
      <ProcessSection />
      <ServicesSection />
      <TechnologiesSection />
      <WebDevSolutionsSection />
      <WebDevDesignTechSection />
      <WebDevWhyChooseSection />
    </main>
  );
}
