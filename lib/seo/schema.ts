import { siteConfig } from "@/lib/seo/entity";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.organizationName,
    legalName: siteConfig.legalName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.jpg`,
    description:
      "PRNIT is a technology company founded in 2011 by Praveen Singh Shekhawat. We build AI-powered apps, cloud solutions, mobile platforms, and distributed engineering teams. Based in Jaipur, India, working globally.",
    founder: {
      "@type": "Person",
      name: siteConfig.founderName,
      jobTitle: "Founder & Engineering Architect",
      url: siteConfig.founderLinkedIn,
    },
    foundingDate: "2011",
    email: siteConfig.email,
    telephone: "+91-97853-94461",
    address: {
      "@type": "PostalAddress",
      streetAddress: "24-A, Umraw Vihar, Gokulpura",
      addressLocality: "Jhotwara, Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302012",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 26.9124, longitude: 75.7873 },
    sameAs: siteConfig.socialProfiles,
    areaServed: ["IN", "TH", "US", "GB", "AU"],
    knowsAbout: [
      "Software Development",
      "Cloud Architecture",
      "AI Development",
      "Mobile App Development",
      "Distributed Engineering Teams",
      "SaaS",
      "Healthtech",
      "Fintech",
      "Logistics Technology",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.organizationName,
    url: baseUrl,
    description: "AI-powered software development company in Jaipur, India.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceSchema(params: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.organizationName,
      url: baseUrl,
    },
    areaServed: ["IN", "TH", "US", "GB", "AU"],
    url: params.url,
  };
}

export function getFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founderName,
    jobTitle: "Founder & Engineering Architect",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.organizationName,
      url: baseUrl,
    },
    description:
      "Engineering Architect with 14 years of experience in SaaS, healthtech, logistics, and fintech. Fixes architecture problems that slow growth in scaling startups.",
    url: `${baseUrl}/about`,
    image: `${baseUrl}/praveen-shekhawat.jpg`,
    sameAs: [
      ...siteConfig.founderSocialProfiles,
      baseUrl,
    ],
    knowsAbout: [
      "Software Architecture",
      "Cloud Engineering",
      "AI Systems",
      "Distributed Teams",
      "Startup Scaling",
      "SaaS",
      "Healthtech",
      "Fintech",
    ],
  };
}
