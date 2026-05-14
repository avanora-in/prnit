import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import HowWeWorkHeroSection from "@/components/how-we-work/HowWeWorkHeroSection";
import ProcessSection from "@/components/how-we-work/ProcessSection";
import IndustryCoverageSection from "@/components/how-we-work/IndustryCoverageSection";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = pageMetadata({
  title: "How We Work",
  description:
    "Our proven process for delivering scalable digital solutions — from discovery to deployment.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "How We Work", path: "/how-we-work" },
  ]);

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={breadcrumbSchema} />
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
