import type { Metadata } from "next";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import LogoSlider from "@/components/sections/LogoSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import { servicePageMetadata } from "@/lib/seo/service-page-metadata";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = servicePageMetadata({
  title: "Software Development Services in India",
  description:
    "Explore PRNIT software development services in India including web, app, cloud, QA, design, CMS, and e-commerce delivery.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={breadcrumbSchema} />
      <ServicesHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT delivers end-to-end software services for teams that need reliable scale. We cover
        web, mobile, cloud, QA, design, and CMS delivery with senior distributed engineers.
        Engagements focus on performance, predictable timelines, and architecture that supports
        business growth.
      </PageLead>
      <ServicesGridSection />
      <ServiceSeoSection
        h1="Software Development Services in India"
        explanation="PRNIT provides software development services in India for startups and enterprises that need scalable architecture and reliable execution across web, mobile, cloud, QA, and design."
        internalLinks={[
          { href: "/services/web-development", label: "Web Development" },
          { href: "/services/app-development", label: "App Development" },
          { href: "/services/cloud", label: "Cloud Services" },
          { href: "/solar-os", label: "SolarOS" },
          { href: "/zoho-consulting-partner", label: "Zoho Consulting" },
        ]}
        faqs={[
          {
            question: "How do we start with PRNIT?",
            answer: "Share your goals and current challenges. We then define scope, milestones, and delivery plan.",
          },
          {
            question: "Can PRNIT work with distributed teams?",
            answer: "Yes. Our delivery model is built for distributed collaboration, transparent updates, and predictable execution.",
          },
        ]}
      />
      <ServicesCTASection />
      <ServicesSection />
    </main>
  );
}
