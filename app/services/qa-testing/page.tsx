import type { Metadata } from "next";
import QAHeroSection from "@/components/services/qa-testing/QAHeroSection";
import QAServicesSection from "@/components/services/qa-testing/QAServicesSection";
import QAProcessSection from "@/components/services/qa-testing/QAProcessSection";
import QAToolsSection from "@/components/services/qa-testing/QAToolsSection";
import QAApproachSection from "@/components/services/qa-testing/QAApproachSection";
import QABenefitsSection from "@/components/services/qa-testing/QABenefitsSection";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import JsonLd from "@/components/seo/JsonLd";
import { getFaqSchema, getServiceSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/entity";
import { servicePageMetadata } from "@/lib/seo/service-page-metadata";
import { serviceDetailBreadcrumb } from "@/lib/seo/service-breadcrumbs";

export const metadata: Metadata = servicePageMetadata({
  title: "QA & Software Testing Services in India",
  description:
    "PRNIT offers QA and software testing services in India including manual, automation, and performance testing for reliable product releases.",
  path: "/services/qa-testing",
});

export default function QATestingPage() {
  const faqItems = [
    {
      question: "How do we start with PRNIT?",
      answer: "Share your goals and current challenges. We then define scope, milestones, and delivery plan.",
    },
    {
      question: "Can PRNIT work with distributed teams?",
      answer: "Yes. Our delivery model is built for distributed collaboration, transparent updates, and predictable execution.",
    },
  ];

  const serviceSchema = getServiceSchema({
    name: "QA & Software Testing Services in India",
    description:
      "PRNIT offers QA and software testing services in India including manual, automation, and performance testing for reliable product releases.",
    url: `${siteConfig.siteUrl}/services/qa-testing`,
  });

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd
        data={[serviceSchema, serviceDetailBreadcrumb("qa-testing"), getFaqSchema(faqItems)]}
      />
      <QAHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT provides manual and automated QA to catch defects before release. We validate product
        quality across functional, performance, and regression testing so engineering teams can ship
        with confidence and reduce production risk.
      </PageLead>
      <ServiceSeoSection
        h1="QA & Software Testing Services in India"
        explanation="PRNIT helps teams ship confidently with structured QA and testing workflows. We cover functional, regression, automation, and performance testing to reduce release risk."
        internalLinks={[
          { href: "/services/web-development", label: "Web Development" },
          { href: "/services/app-development", label: "App Development" },
          { href: "/services/cloud", label: "Cloud Services" },
        ]}
        faqs={faqItems}
      />
      <QAServicesSection />
      <QAToolsSection />
      <QAProcessSection />
      <QABenefitsSection />
      <QAApproachSection />
    </main>
  );
}
