import IOSHeroSection from "@/components/services/ios/IOSHeroSection";
import IOSCompanySection from "@/components/services/ios/IOSCompanySection";
import IOSServicesSection from "@/components/services/ios/IOSServicesSection";
import IOSExpertiseSection from "@/components/services/ios/IOSExpertiseSection";
import AppDevProcessSection from "@/components/sections/ProcessSection";
import IOSApproachSection from "@/components/services/ios/IOSApproachSection";
import LogoSlider from "@/components/sections/LogoSlider";
import TechnologiesSection from "@/components/sections/Technologies";

export const metadata = {
  title: "iOS App Development Services | PRNIT",
  description:
    "We provide expert iOS app development services. Our team builds high-quality iPhone and iPad applications using Swift and the latest Apple technologies.",
};

export default function IOSPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <IOSHeroSection />
      <LogoSlider />
      <IOSCompanySection />
      <IOSServicesSection />
      <AppDevProcessSection />
      <IOSExpertiseSection />
      <TechnologiesSection />
      <IOSApproachSection />
    </main>
  );
}
