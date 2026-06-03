import type { Metadata } from "next";
import Link from "next/link";
import TallyHeroSection from "@/components/services/tally-to-zoho-books/TallyHeroSection";
import TallyPainPointsSection from "@/components/services/tally-to-zoho-books/TallyPainPointsSection";
import TallyMigrationTableSection from "@/components/services/tally-to-zoho-books/TallyMigrationTableSection";
import TallyProcessSection from "@/components/services/tally-to-zoho-books/TallyProcessSection";
import TallyComparisonSection from "@/components/services/tally-to-zoho-books/TallyComparisonSection";
import TallyTestimonialSection from "@/components/services/tally-to-zoho-books/TallyTestimonialSection";
import TallyFAQSection from "@/components/services/tally-to-zoho-books/TallyFAQSection";
import TallyBottomCTASection from "@/components/services/tally-to-zoho-books/TallyBottomCTASection";
import LogoSlider from "@/components/sections/LogoSlider";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import JsonLd from "@/components/seo/JsonLd";
import { servicePageMetadata } from "@/lib/seo/service-page-metadata";
import { serviceDetailBreadcrumb } from "@/lib/seo/service-breadcrumbs";
import { siteConfig } from "@/lib/seo/entity";

export const metadata: Metadata = servicePageMetadata({
  title: "Migrate Tally to Zoho Books | Expert Migration Service | PRNIT India",
  description:
    "Switch from Tally ERP / TallyPrime to Zoho Books with zero data loss. GST-compliant migration for India, UAE & US. Certified Zoho partner. Fixed price.",
  path: "/services/tally-to-zoho-books",
});

export default function TallyToZohoBooksPage() {
  const breadcrumbSchema = serviceDetailBreadcrumb("tally-to-zoho-books");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does Tally to Zoho Books migration take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard migration takes 8–12 business days from data handover to go-live. This includes the pre-migration audit, ledger mapping, import, trial balance reconciliation, GST configuration, and team training.",
        },
      },
      {
        "@type": "Question",
        name: "Will my historical data be migrated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We migrate your complete transaction history including sales invoices, purchase bills, receipts, payments, and journal vouchers. We recommend migrating 1–3 years of historical data by default.",
        },
      },
      {
        "@type": "Question",
        name: "What data gets migrated from Tally to Zoho Books?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We migrate chart of accounts, customers, vendors, items with HSN/SAC codes, opening balances, sales invoices, purchase bills, receipts, payments, journal vouchers, and tax configurations.",
        },
      },
      {
        "@type": "Question",
        name: "Is the migration GST-compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We configure GST settings, tax rates, and HSN/SAC codes as per Indian GST regulations. We also ensure trial balance reconciliation matches your Tally data.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of Tally to Zoho Books migration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer fixed-price migration packages based on data volume and complexity. Contact us for a free assessment and custom quote.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide post-migration support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide 30-day post-migration support to address any issues and ensure your team is comfortable using Zoho Books.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tally to Zoho Books Migration",
    provider: {
      "@type": "Organization",
      name: siteConfig.organizationName,
    },
    description:
      "Expert Tally to Zoho Books migration — chart of accounts, GST, trial balance reconciliation. Fixed price. 10-day delivery.",
  };

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[breadcrumbSchema, faqSchema, serviceSchema]} />
      <TallyHeroSection />
      <LogoSlider />
      <ServiceSeoSection
        h1="Migrate from Tally to Zoho Books — Zero Data Loss. GST-Ready. Done in 10 Days."
        explanation="Switch from Tally ERP / TallyPrime to Zoho Books with zero data loss. GST-compliant migration for India, UAE & US. Certified Zoho partner. Fixed price."
        internalLinks={[
          { href: "/zoho-consulting-partner", label: "Zoho Consulting Partner" },
          { href: "/zoho-migration", label: "Zoho Migration Services" },
          { href: "/services/cloud", label: "Cloud Services" },
        ]}
        faqs={[
          {
            question: "How long does Tally to Zoho Books migration take?",
            answer: "A standard migration takes 8–12 business days from data handover to go-live. This includes the pre-migration audit, ledger mapping, import, trial balance reconciliation, GST configuration, and team training.",
          },
          {
            question: "Will my historical data be migrated?",
            answer: "Yes. We migrate your complete transaction history including sales invoices, purchase bills, receipts, payments, and journal vouchers. We recommend migrating 1–3 years of historical data by default.",
          },
        ]}
      />
      <TallyPainPointsSection />
      <TallyMigrationTableSection />
      <TallyProcessSection />
      <TallyComparisonSection />
      <TallyTestimonialSection />
      <TallyFAQSection />
      <div className="secondary-background py-8 text-center border-t border-black/5">
        <p className="text-sm text-[var(--color-body,#4b5563)] mb-2">
          Migrating from a different system?
        </p>
        <Link href="/zoho-migration" className="text-sm font-semibold support-blue hover:underline">
          Explore Zoho Migration Services →
        </Link>
      </div>
      <TallyBottomCTASection />
    </main>
  );
}
