import type { Metadata } from "next";
import WebDevHeroSection from "@/components/services/web-development/WebDevHeroSection";
import WebDevSolutionsSection from "@/components/services/web-development/WebDevSolutionsSection";
import WebDevDesignTechSection from "@/components/services/web-development/WebDevDesignTechSection";
import WebDevWhyChooseSection from "@/components/services/web-development/WebDevWhyChooseSection";
import LogoSlider from "@/components/sections/LogoSlider";
import ProcessSection from "@/components/sections/ProcessSection";
import TechnologiesSection from "@/components/sections/Technologies";
import ServicesSection from "@/components/sections/ServicesSection";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import JsonLd from "@/components/seo/JsonLd";
import { servicePageMetadata } from "@/lib/seo/service-page-metadata";
import { serviceDetailBreadcrumb } from "@/lib/seo/service-breadcrumbs";

export const metadata: Metadata = servicePageMetadata({
  title: "Web Development Services in India",
  description:
    "PRNIT builds scalable web applications and websites in India with modern architecture, performance optimization, and reliable engineering delivery.",
  path: "/services/web-development",
});

export default function WebDevelopmentPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={serviceDetailBreadcrumb("web-development")} />
      <WebDevHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT builds web platforms for startups and businesses that need scale, speed, and security.
        We design architecture, ship production-ready applications, and optimize performance across
        modern stacks. The goal is clear: stable growth and faster product delivery.
      </PageLead>
      <ServiceSeoSection
        h1="Web Development Services in India"
        explanation="PRNIT delivers web development services in India for startups and growth businesses that need fast, secure, and scalable products. We design architecture, build production-ready applications, and support continuous improvement with clear technical ownership."
        internalLinks={[
          { href: "/services/app-development", label: "App Development" },
          { href: "/services/cloud", label: "Cloud Services" },
          { href: "/services/web-development-faq", label: "Web Development FAQ" },
        ]}
        faqs={[
          {
            question: "How long does a web development project take?",
            answer: "Most projects range from 6 to 16 weeks depending on scope, integrations, and review cycles.",
          },
          {
            question: "Do you rebuild legacy systems?",
            answer: "Yes. We modernize legacy codebases incrementally to reduce risk while improving performance and maintainability.",
          },
        ]}
      />
      <ProcessSection />
      <ServicesSection />
      <TechnologiesSection />
      <WebDevSolutionsSection />
      <WebDevDesignTechSection />
      <WebDevWhyChooseSection />
    </main>
  );
}
