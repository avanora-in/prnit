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
    </main>
  );
}
