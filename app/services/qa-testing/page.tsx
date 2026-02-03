import QAHeroSection from "@/components/services/qa-testing/QAHeroSection";
import QAServicesSection from "@/components/services/qa-testing/QAServicesSection";
import QAProcessSection from "@/components/services/qa-testing/QAProcessSection";
import QAToolsSection from "@/components/services/qa-testing/QAToolsSection";
import QAApproachSection from "@/components/services/qa-testing/QAApproachSection";
import QABenefitsSection from "@/components/services/qa-testing/QABenefitsSection";
import LogoSlider from "@/components/sections/LogoSlider";

export const metadata = {
  title: "QA & Software Testing Services | PRNIT",
  description:
    "Professional QA and software testing services including manual testing, automation testing, and performance testing to ensure bug-free product launches.",
};

export default function QATestingPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <QAHeroSection />
      <LogoSlider />
      <QAServicesSection />
      <QAToolsSection />
      <QAProcessSection />
      <QABenefitsSection />
      <QAApproachSection />
    </main>
  );
}
