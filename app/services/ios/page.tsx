import type { Metadata } from "next";
import IOSHeroSection from "@/components/services/ios/IOSHeroSection";
import IOSCompanySection from "@/components/services/ios/IOSCompanySection";
import IOSServicesSection from "@/components/services/ios/IOSServicesSection";
import IOSExpertiseSection from "@/components/services/ios/IOSExpertiseSection";
import AppDevProcessSection from "@/components/sections/ProcessSection";
import IOSApproachSection from "@/components/services/ios/IOSApproachSection";
import LogoSlider from "@/components/sections/LogoSlider";
import TechnologiesSection from "@/components/sections/Technologies";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import JsonLd from "@/components/seo/JsonLd";
import { servicePageMetadata } from "@/lib/seo/service-page-metadata";
import { serviceDetailBreadcrumb } from "@/lib/seo/service-breadcrumbs";
import { siteConfig } from "@/lib/seo/entity";
import {
  getOrganizationSchema,
  getServiceSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = servicePageMetadata({
  title: "iOS App Development Services in India",
  description:
    "PRNIT delivers iOS app development services in India with Swift expertise, scalable architecture, and release discipline for growing products.",
  path: "/services/ios",
});

export default function IOSPage() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "iOS App Development Services in India",
    description: "PRNIT delivers iOS app development services in India with Swift expertise, scalable architecture, and release discipline for growing products.",
    url: `${siteConfig.siteUrl}/services/ios`,
  });
  const breadcrumbSchema = serviceDetailBreadcrumb("ios");

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[organizationSchema, serviceSchema, breadcrumbSchema]} />
      <IOSHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT delivers iOS applications with strong architecture, smooth performance, and scalable
        release workflows. We build and maintain iPhone and iPad products using modern Apple
        standards, helping teams launch confidently and iterate faster.
      </PageLead>
      <ServiceSeoSection
        h1="iOS App Development Services in India"
        explanation="PRNIT builds high-quality iOS applications for startups and enterprises. We focus on architecture quality, App Store readiness, and long-term maintainability."
        internalLinks={[
          { href: "/services/app-development", label: "App Development" },
          { href: "/services/qa-testing", label: "QA & Testing" },
          { href: "/services/design", label: "UI/UX Design" },
        ]}
        faqs={[
          {
            question: "Do you support App Store deployment?",
            answer: "Yes. We handle build pipelines, review readiness, and release support for production launches.",
          },
          {
            question: "Can you scale an existing iOS codebase?",
            answer: "Yes. We improve architecture, reduce technical debt, and establish stable release processes.",
          },
        ]}
      />
      <IOSCompanySection />
      <IOSServicesSection />
      <AppDevProcessSection />
      <IOSExpertiseSection />
      <TechnologiesSection />
      <IOSApproachSection />
    </main>
  );
}
