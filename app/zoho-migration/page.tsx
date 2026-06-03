import type { Metadata } from "next";
import Link from "next/link";
import ZohoMigrationHeroSection from "@/components/zoho-migration/ZohoMigrationHeroSection";
import ZohoMigrationPathwaysSection from "@/components/zoho-migration/ZohoMigrationPathwaysSection";
import ZohoMigrationDataSection from "@/components/zoho-migration/ZohoMigrationDataSection";
import ZohoMigrationMethodologySection from "@/components/zoho-migration/ZohoMigrationMethodologySection";
import ZohoMigrationGuaranteesSection from "@/components/zoho-migration/ZohoMigrationGuaranteesSection";
import ZohoMigrationIndustriesSection from "@/components/zoho-migration/ZohoMigrationIndustriesSection";
import ZohoMigrationTestimonialsSection from "@/components/zoho-migration/ZohoMigrationTestimonialsSection";
import ZohoMigrationFAQSection from "@/components/zoho-migration/ZohoMigrationFAQSection";
import ZohoMigrationBottomCTASection from "@/components/zoho-migration/ZohoMigrationBottomCTASection";
import LogoSlider from "@/components/sections/LogoSlider";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import JsonLd from "@/components/seo/JsonLd";
import { servicePageMetadata } from "@/lib/seo/service-page-metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/entity";

export const metadata: Metadata = servicePageMetadata({
  title: "Zoho Migration Services | Migrate to Zoho One | PRNIT India LLP",
  description:
    "Migrate from Salesforce, QuickBooks, Xero, HubSpot, Tally or Excel to Zoho. Certified Zoho partner. Zero data loss. India, UAE, US, UK, Australia.",
  path: "/zoho-migration",
});

export default function ZohoMigrationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Zoho Migration Services", path: "/zoho-migration" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you migrate from any source system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have proven playbooks for Tally, QuickBooks, Xero, Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, and Excel. For custom legacy systems, we conduct a discovery session to assess extractability and scope. If your data can be exported (in any format), we can migrate it.",
        },
      },
      {
        "@type": "Question",
        name: "Will my historical data and records be migrated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We migrate historical records — typically 2–3 years by default. Full history migration is available on request and is factored into the project scope and pricing.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to our integrations and automations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We audit your existing integrations and automation rules before migration. Where possible, we recreate equivalent automations in Zoho's native workflow engine. Third-party integrations (payment gateways, bank feeds, e-commerce) are reconnected post-migration.",
        },
      },
      {
        "@type": "Question",
        name: "Do we need to shut down operations during migration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We migrate to a staging Zoho org first, validate everything, then do a final delta migration at go-live (usually a weekend cutover). You keep operating in your source system until the moment you switch.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle data privacy during migration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All data is handled under strict NDA and in accordance with our ISO/IEC 27001:2022 certification. We do not store your data beyond the project duration and process everything in secure environments.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in the 30-day post-migration support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any issue arising directly from the migration — missing records, incorrect field mapping, workflow errors, or configuration problems — is resolved at no charge within the 30-day window. This is a fixed-price commitment, not a time-and-materials support arrangement.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Zoho Migration Services",
    provider: {
      "@type": "Organization",
      name: siteConfig.organizationName,
    },
    description:
      "Expert migration to Zoho from Salesforce, QuickBooks, Xero, HubSpot & Tally. Zero data loss. Fixed price. Global delivery.",
    areaServed: ["IN", "AE", "US", "GB", "AU"],
  };

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[breadcrumbSchema, faqSchema, serviceSchema]} />
      <ZohoMigrationHeroSection />
      <LogoSlider />
      <ServiceSeoSection
        h1="Migrate to Zoho — From Any System, Without Losing a Record"
        explanation="Migrate from Salesforce, QuickBooks, Xero, HubSpot, Tally or Excel to Zoho. Certified Zoho partner. Zero data loss. India, UAE, US, UK, Australia."
        internalLinks={[
          { href: "/zoho-consulting-partner", label: "Zoho Consulting Partner" },
          { href: "/services/tally-to-zoho-books", label: "Tally to Zoho Books" },
          { href: "/services/cloud", label: "Cloud Services" },
        ]}
        faqs={[
          {
            question: "Can you migrate from any source system?",
            answer: "We have proven playbooks for Tally, QuickBooks, Xero, Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, and Excel. For custom legacy systems, we conduct a discovery session to assess extractability and scope.",
          },
          {
            question: "Will my historical data be migrated?",
            answer: "Yes. We migrate historical records — typically 2–3 years by default. Full history migration is available on request.",
          },
        ]}
      />
      <ZohoMigrationPathwaysSection />
      <ZohoMigrationDataSection />
      <ZohoMigrationMethodologySection />
      <ZohoMigrationGuaranteesSection />
      <ZohoMigrationIndustriesSection />
      <ZohoMigrationTestimonialsSection />
      <ZohoMigrationFAQSection />
      <div className="secondary-background py-8 text-center border-t border-black/5">
        <p className="text-sm text-[var(--color-body,#4b5563)] mb-2">
          Specifically migrating from Tally?
        </p>
        <Link href="/services/tally-to-zoho-books" className="text-sm font-semibold support-blue hover:underline">
          Learn about Tally to Zoho Books Migration →
        </Link>
      </div>
      <ZohoMigrationBottomCTASection />
    </main>
  );
}
