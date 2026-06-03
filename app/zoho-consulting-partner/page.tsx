import type { Metadata } from "next";
import ZohoLanding from "@/components/zoho/ZohoLanding";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { buildBreadcrumbSchema, getFaqSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/entity";
import { zohoFaqs } from "@/components/zoho/zoho-faqs";
import { zohoFocusKeyword, zohoMetaKeywords } from "@/components/zoho/zoho-seo-keywords";
import { getZohoProfessionalServiceSchema } from "@/components/zoho/zoho-schema";
import {
  zohoImageAlts,
  zohoOgDescription,
  zohoOgImageUrl,
  zohoOgTitle,
  zohoPageUrl,
  zohoTwitterDescription,
} from "@/components/zoho/zoho-seo";
import Link from "next/link";

const path = "/zoho-consulting-partner";

const pageTitle = "Zoho Consulting Partner | Zoho One Implementation | PRNIT INDIA LLP";

const baseMeta = pageMetadata({
  title: "Zoho Consulting Partner | Zoho One Implementation",
  description:
    "Certified Zoho Consulting Partner. End-to-end Zoho One implementation across India, UAE, US, UK & Australia. CRM, Books, Creator, Analytics and full suite. Fixed price, global delivery.",
  path,
});

export const metadata: Metadata = {
  ...baseMeta,
  title: { absolute: pageTitle },
  keywords: [...zohoMetaKeywords],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: zohoPageUrl,
  },
  openGraph: {
    type: "website",
    url: zohoPageUrl,
    title: zohoOgTitle,
    description: zohoOgDescription,
    siteName: siteConfig.legalName,
    locale: "en_IN",
    images: [
      {
        url: zohoOgImageUrl,
        width: 1200,
        height: 630,
        alt: zohoImageAlts.hero,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prnitsoftware",
    creator: "@prnitsoftware",
    title: zohoOgTitle,
    description: zohoTwitterDescription,
    images: [zohoOgImageUrl],
  },
};

export default function ZohoConsultingPartnerPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: zohoFocusKeyword, path },
  ]);

  const professionalServiceSchema = getZohoProfessionalServiceSchema();
  const faqSchema = getFaqSchema([...zohoFaqs]);

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[breadcrumbSchema, professionalServiceSchema, faqSchema]} />
      <ZohoLanding />
      <div className="secondary-background py-8 text-center">
        <p className="text-sm text-[var(--color-body,#4b5563)] mb-2">
          Already using Tally? Migrate to Zoho Books with zero data loss.
        </p>
        <Link href="/services/tally-to-zoho-books" className="text-sm font-semibold support-blue hover:underline">
          Learn about Tally to Zoho Books Migration →
        </Link>
      </div>
      <div className="secondary-background py-8 text-center border-t border-black/5">
        <p className="text-sm text-[var(--color-body,#4b5563)] mb-2">
          Migrating from a different platform? We handle Salesforce, QuickBooks, Xero, HubSpot & more.
        </p>
        <Link href="/zoho-migration" className="text-sm font-semibold support-blue hover:underline">
          Learn about Zoho migration from any platform →
        </Link>
      </div>
    </main>
  );
}
