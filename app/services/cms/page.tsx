import CMSHeroSection from "@/components/services/cms/CMSHeroSection";
import CMSSolutionsSection from "@/components/services/cms/CMSSolutionsSection";
import CMSServicesSection from "@/components/services/cms/CMSServicesSection";
import CMSWhySection from "@/components/services/cms/CMSWhySection";
import CMSFeaturesSection from "@/components/services/cms/CMSFeaturesSection";
import LogoSlider from "@/components/sections/LogoSlider";

export const metadata = {
  title: "CMS & WordPress Development Services | PRNIT",
  description:
    "We provide expert WordPress and CMS development services. Our team builds custom themes, plugins, and scalable content management solutions.",
};

export default function CMSPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <CMSHeroSection />
      <LogoSlider />
      <CMSSolutionsSection /> 
      <CMSServicesSection />
      <CMSFeaturesSection />
      <CMSWhySection />
    </main>
  );
}
