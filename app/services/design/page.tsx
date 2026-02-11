import DesignHeroSection from "@/components/services/design/DesignHeroSection";
import DesignSolutionsSection from "@/components/services/design/DesignSolutionsSection";
import DesignServicesSection from "@/components/services/design/DesignServicesSection";
import DesignBenefitsSection from "@/components/services/design/DesignBenefitsSection";
import DesignApproachSection from "@/components/services/design/DesignApproachSection";
import LogoSlider from "@/components/sections/LogoSlider";

export const metadata = {
  title: "UI/UX Design Services | PRNIT",
  description:
    "We provide exceptional UI/UX design services. Our team creates intuitive, user-centered designs that enhance user experience and drive business results.",
};

export default function DesignPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <DesignHeroSection />
      <LogoSlider />
      <DesignSolutionsSection />
      <DesignServicesSection />
      <DesignApproachSection />
      <DesignBenefitsSection />
    </main>
  );
}
