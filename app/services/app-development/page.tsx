import AppDevHeroSection from "@/components/services/app-development/AppDevHeroSection";
import AppDevProcessSection from "@/components/sections/ProcessSection";
import AppDevIndustrySection from "@/components/services/app-development/AppDevIndustrySection";
import AppDevExpertSection from "@/components/services/app-development/AppDevExpertSection";
import AppDevWhyChooseSection from "@/components/services/app-development/AppDevWhyChooseSection";
import LogoSlider from "@/components/sections/LogoSlider";
import TechnologiesSection from "@/components/sections/Technologies";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: "App Development Services | PRNIT",
  description:
    "We provide top-tier mobile app development services. Our team builds iOS, Android, and cross-platform applications that drive business growth.",
};

export default function AppDevelopmentPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <AppDevHeroSection />
      <LogoSlider />
      <AppDevProcessSection />
      <ServicesSection />
      <TechnologiesSection />
      <AppDevIndustrySection />
      <AppDevExpertSection />
      <AppDevWhyChooseSection />
    </main>
  );
}
