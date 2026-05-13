import type { Metadata } from "next";
import CloudHeroSection from "@/components/services/cloud/CloudHeroSection";
import CloudServicesSection from "@/components/services/cloud/CloudServicesSection";
import CloudWhyChooseSection from "@/components/services/cloud/CloudWhyChooseSection";
import CloudBenefitsSection from "@/components/services/cloud/CloudBenefitsSection";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import JsonLd from "@/components/seo/JsonLd";
import { servicePageMetadata } from "@/lib/seo/service-page-metadata";
import { serviceDetailBreadcrumb } from "@/lib/seo/service-breadcrumbs";

export const metadata: Metadata = servicePageMetadata({
  title: "Cloud Consulting Services in India (AWS & GCP)",
  description:
    "PRNIT provides cloud consulting services in India for AWS and Google Cloud, covering migration, optimization, reliability, and DevOps delivery.",
  path: "/services/cloud",
});

export default function CloudPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={serviceDetailBreadcrumb("cloud")} />
      <CloudHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT provides cloud architecture and operations support for teams on AWS and Google Cloud.
        We design migrations, optimize infrastructure, and improve reliability with measurable cost
        and performance outcomes. The focus is simple: stable systems at scale.
      </PageLead>
      <ServiceSeoSection
        h1="Cloud Consulting Services in India"
        explanation="PRNIT helps teams migrate, optimize, and operate cloud infrastructure with predictable cost and performance. We support AWS and Google Cloud with architecture and DevOps practices built for scale."
        internalLinks={[
          { href: "/services/web-development", label: "Web Development" },
          { href: "/services/qa-testing", label: "QA & Testing" },
          { href: "/services", label: "All Services" },
        ]}
        faqs={[
          {
            question: "Do you support both AWS and Google Cloud?",
            answer: "Yes. We design and operate workloads on both platforms based on your technical and business goals.",
          },
          {
            question: "Can you reduce cloud spend without hurting performance?",
            answer: "Yes. We optimize architecture, observability, and resource usage to improve cost efficiency.",
          },
        ]}
      />
      <CloudServicesSection />
      <CloudBenefitsSection />
      <CloudWhyChooseSection />
    </main>
  );
}
