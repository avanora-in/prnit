import type { Metadata } from "next";
import CMSHeroSection from "@/components/services/cms/CMSHeroSection";
import CMSSolutionsSection from "@/components/services/cms/CMSSolutionsSection";
import CMSServicesSection from "@/components/services/cms/CMSServicesSection";
import CMSWhySection from "@/components/services/cms/CMSWhySection";
import CMSFeaturesSection from "@/components/services/cms/CMSFeaturesSection";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import JsonLd from "@/components/seo/JsonLd";
import { servicePageMetadata } from "@/lib/seo/service-page-metadata";
import { serviceDetailBreadcrumb } from "@/lib/seo/service-breadcrumbs";

export const metadata: Metadata = servicePageMetadata({
  title: "CMS & WordPress Development Services in India",
  description:
    "PRNIT offers CMS and WordPress development services in India for secure, scalable, and easy-to-manage content platforms.",
  path: "/services/cms",
});

export default function CMSPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={serviceDetailBreadcrumb("cms")} />
      <CMSHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT builds CMS and WordPress platforms that are easy to manage and ready for growth. We
        deliver custom themes, plugin integrations, and scalable content workflows with secure,
        maintainable implementation for business teams.
      </PageLead>
      <ServiceSeoSection
        h1="CMS & WordPress Development Services in India"
        explanation="PRNIT builds CMS platforms that are easy for teams to manage and robust enough for long-term scale. We deliver custom WordPress and CMS solutions with secure implementation and maintainable architecture."
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
      <CMSSolutionsSection /> 
      <CMSServicesSection />
      <CMSFeaturesSection />
      <CMSWhySection />
    </main>
  );
}
