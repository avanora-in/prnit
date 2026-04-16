import HowWeWorkHeroSection from "@/components/how-we-work/HowWeWorkHeroSection";
import ProcessSection from "@/components/how-we-work/ProcessSection";
import IndustryCoverageSection from "@/components/how-we-work/IndustryCoverageSection";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";

export const metadata = {
  title: "How We Work | PRNIT - Our Process",
  description:
    "Our structured, collaborative approach to building powerful digital products. Discovery, design, development, and ongoing support that drives growth.",
};

export default function HowWeWorkPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <HowWeWorkHeroSection />
      <LogoSlider />
      <PageLead>
        We run a structured delivery process from discovery to launch and support. PRNIT aligns
        engineering decisions with product goals, then executes in transparent iterations. This
        approach reduces risk, improves delivery speed, and keeps architecture stable as products
        scale.
      </PageLead>
      <ProcessSection />
      <IndustryCoverageSection />
    </main>
  );
}
