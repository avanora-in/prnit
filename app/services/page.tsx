import { Metadata } from "next";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import LogoSlider from "@/components/sections/LogoSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";

export const metadata: Metadata = {
  title: "Software Development Services in India | PRNIT",
  description:
    "Explore PRNIT software development services in India including web, app, cloud, QA, design, CMS, and e-commerce delivery.",
};

export default function ServicesPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <ServicesHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT delivers end-to-end software services for teams that need reliable scale. We cover
        web, mobile, cloud, QA, design, and CMS delivery with senior distributed engineers.
        Engagements focus on performance, predictable timelines, and architecture that supports
        business growth.
      </PageLead>
      <ServiceSeoSection
        h1="Software Development Services in India"
        explanation="PRNIT provides software development services in India for startups and enterprises that need scalable architecture and reliable execution across web, mobile, cloud, QA, and design."
        internalLinks={[
          { href: "/services/web-development", label: "Web Development" },
          { href: "/services/app-development", label: "App Development" },
          { href: "/services/cloud", label: "Cloud Services" },
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
