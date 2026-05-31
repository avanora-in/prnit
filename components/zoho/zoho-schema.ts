import { siteConfig } from "@/lib/seo/entity";
import { zohoLogoUrl, zohoOgImageUrl, zohoPageUrl } from "@/components/zoho/zoho-seo";

/** ProfessionalService JSON-LD for /zoho-consulting-partner */
export function getZohoProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    description:
      "Certified Zoho Consulting Partner offering end-to-end Zoho One implementation across India, UAE, US, UK and Australia.",
    url: zohoPageUrl,
    logo: zohoLogoUrl,
    image: zohoOgImageUrl,
    telephone: "+91-97853-94461",
    email: "hello@prnit.in",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Rajasthan",
    },
    areaServed: [
      "India",
      "United Arab Emirates",
      "United States",
      "United Kingdom",
      "Australia",
    ],
    serviceType: [
      "Zoho One Implementation",
      "Zoho CRM Implementation",
      "Zoho Books Implementation",
      "Zoho Creator Development",
      "Zoho Analytics Setup",
      "Zoho Consulting",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zoho Implementation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zoho CRM Implementation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zoho Books Implementation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zoho One Full Suite",
          },
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/company/prnit",
      "https://twitter.com/prnit",
    ],
  };
}
