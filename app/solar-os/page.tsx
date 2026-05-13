import type { Metadata } from "next";
import SolarosLanding from "@/components/solaros/SolarosLanding";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { buildBreadcrumbSchema, getFaqSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/entity";
import { solarosFaqs } from "@/components/solaros/solaros-faqs";

const path = "/solar-os";

export const metadata: Metadata = pageMetadata({
  title: "SolarOS — Solar ERP, CRM & Business Operating System",
  description:
    "Run your entire solar business from one platform: website, CRM, quotations, stock, GST invoicing, analytics, and AI SEO for Indian solar dealers, EPCs, and installers. From ₹599/month.",
  path,
});

const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SolarOS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Complete ERP, CRM, and operational platform for Indian solar dealers, EPC companies, and installers — website, CRM, quotations, inventory, GST billing, and analytics.",
  provider: {
    "@type": "Organization",
    name: siteConfig.organizationName,
    url: siteConfig.siteUrl,
  },
  offers: {
    "@type": "Offer",
    price: "599",
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "599",
      priceCurrency: "INR",
      unitText: "MONTH",
    },
    url: `${siteConfig.siteUrl.replace(/\/$/, "")}${path}#pricing`,
  },
};

export default function SolarOsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "SolarOS", path },
  ]);
  const faqSchema = getFaqSchema([...solarosFaqs]);

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[breadcrumbSchema, softwareApplicationLd, faqSchema]} />
      <SolarosLanding />
    </main>
  );
}
