import CloudHeroSection from "@/components/services/cloud/CloudHeroSection";
import CloudServicesSection from "@/components/services/cloud/CloudServicesSection";
import CloudWhyChooseSection from "@/components/services/cloud/CloudWhyChooseSection";
import CloudBenefitsSection from "@/components/services/cloud/CloudBenefitsSection";
import LogoSlider from "@/components/sections/LogoSlider";

export const metadata = {
  title: "Cloud Consulting Services (Google Cloud | AWS) | PRNIT",
  description:
    "Expert cloud consulting services for Google Cloud and AWS. We help businesses migrate, optimize, and manage cloud infrastructure for maximum efficiency.",
};

export default function CloudPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <CloudHeroSection />
      <LogoSlider />
      <CloudServicesSection />
      <CloudBenefitsSection />
      <CloudWhyChooseSection />
    </main>
  );
}
