import { siteConfig } from "@/lib/seo/entity";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;

/**
 * Aggregate star rating for Organization rich results.
 * Google requires this to reflect real, user-visible reviews on the site — update counts and score when sourcing changes.
 */
export function getAggregateRatingSchema() {
  return {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.organizationName,
    legalName: siteConfig.legalName,
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    image: `${baseUrl}/og-image.jpg`,
    description:
      "AI-powered apps, cloud infrastructure and distributed engineering teams for scaling startups. Based in Jaipur, India since 2011.",
    founder: {
      "@type": "Person",
      name: siteConfig.founderName,
      jobTitle: "Founder & Engineering Architect",
      url: siteConfig.founderLinkedIn,
    },
    foundingDate: siteConfig.foundingDate,
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: "24-A, Umraw Vihar, Gokulpura, Jhotwara",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302012",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 26.9124, longitude: 75.7873 },
    sameAs: siteConfig.socialProfiles,
    areaServed: ["IN", "US", "GB", "AU", "AE"],
    aggregateRating: getAggregateRatingSchema(),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "ISO/IEC 27001:2022 Certified",
    },
    serviceType: [
      "AI App Development",
      "Cloud & DevOps Services",
      "Mobile App Development",
      "Web Development",
      "E-Commerce Development",
      "CRM Development",
      "Data Engineering",
      "Zoho Consulting",
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

/**
 * Breadcrumb URLs aligned with `baseUrl` (env / siteConfig).
 * Pass `path` like `/services/app-development` or `/` for home.
 */
export function buildBreadcrumbSchema(segments: Array<{ name: string; path: string }>) {
  const normalizedBase = baseUrl.replace(/\/$/, "");
  const items = segments.map((s) => {
    const path = s.path.startsWith("/") ? s.path : `/${s.path}`;
    const url = path === "/" ? `${normalizedBase}/` : `${normalizedBase}${path}`;
    return { name: s.name, url };
  });
  return getBreadcrumbSchema(items);
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

/** PRNIT as an IT / professional services provider with service catalog (Tier 2 rich results). */
export function getLocalBusinessSchema() {
  const offerPaths: Array<{ name: string; path: string }> = [
    { name: "App Development", path: "/services/app-development" },
    { name: "Web Development", path: "/services/web-development" },
    { name: "Cloud Solutions", path: "/services/cloud" },
    { name: "UI/UX Design", path: "/services/design" },
    { name: "E-Commerce Development", path: "/services/e-commerce" },
    { name: "CMS & WordPress Development", path: "/services/cms" },
    { name: "iOS Development", path: "/services/ios" },
    { name: "Android Development", path: "/services/android" },
    { name: "QA & Software Testing", path: "/services/qa-testing" },
    { name: "Web Development FAQ", path: "/services/web-development-faq" },
    { name: "Tally to Zoho Books Migration", path: "/services/tally-to-zoho-books" },
    { name: "Zoho Migration Services", path: "/zoho-migration" },
  ];

  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "ITService"],
    "@id": `${baseUrl}/#professional-service`,
    name: siteConfig.organizationName,
    legalName: siteConfig.legalName,
    description:
      "AI & cloud software development company — mobile apps, web platforms, cloud architecture, QA, design, and e-commerce delivery for startups and enterprises.",
    url: baseUrl,
    image: `${baseUrl}/og-image.jpg`,
    logo: `${baseUrl}/logo.png`,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.headquartersAddressLine1,
      addressLocality: `Jhotwara, ${siteConfig.headquartersCity}`,
      addressRegion: "Rajasthan",
      postalCode: siteConfig.headquartersPostalCode,
      addressCountry: siteConfig.headquartersCountryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.9124,
      longitude: 75.7873,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    sameAs: siteConfig.socialProfiles,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: offerPaths.map((item) => ({
        "@type": "Offer",
        url: `${baseUrl}${item.path}`,
        itemOffered: {
          "@type": "Service",
          name: item.name,
          url: `${baseUrl}${item.path}`,
          provider: { "@id": `${baseUrl}/#organization` },
        },
      })),
    },
  };
}

/** Corporate web presence as a schema.org SoftwareApplication node (paired with Organization). */
export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${baseUrl}/#software-application`,
    name: `${siteConfig.organizationName} — Official Website`,
    alternateName: siteConfig.organizationName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    browserRequirements: "Requires HTML5 and JavaScript.",
    url: baseUrl,
    screenshot: `${baseUrl}/og-image.jpg`,
    description:
      "Official PRNIT web application for exploring software development services, case studies, blog insights, and contacting the team for AI, cloud, mobile, and web engineering engagements.",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: siteConfig.organizationName,
      url: baseUrl,
    },
    offers: {
      "@type": "Offer",
      url: `${baseUrl}/services`,
      description: "Software development and IT consulting engagements — scope and pricing via proposal.",
    },
  };
}

/** Founder / principal Person node for E-E-A-T (use on About or sitewide). */
export function getFounderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#founder`,
    name: siteConfig.founderName,
    jobTitle: "Founder & Engineering Architect",
    worksFor: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: siteConfig.organizationName,
      url: baseUrl,
    },
    description:
      "Engineering Architect with 14+ years of experience in SaaS, healthtech, logistics, and fintech. Leads architecture and delivery for scaling product teams.",
    url: `${baseUrl}/about`,
    image: `${baseUrl}/praveen-shekhawat.jpg`,
    sameAs: [...siteConfig.founderSocialProfiles],
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

/** Same graph as `getFounderSchema` — existing About page import. */
export function getPersonSchema() {
  return getFounderSchema();
}

/** HowTo schema for process/methodology pages */
export function getHowToSchema(params: {
  name: string;
  description: string;
  steps: Array<{
    position: number;
    name: string;
    text: string;
    url: string;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    totalTime: "P4W",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "Contact for quote",
    },
    supply: [
      { "@type": "HowToSupply", name: "Project brief or idea" },
      { "@type": "HowToSupply", name: "Business goals and target audience" },
    ],
    step: params.steps.map((step) => ({
      "@type": "HowToStep",
      position: step.position,
      name: step.name,
      text: step.text,
      url: step.url,
    })),
    author: {
      "@type": "Organization",
      name: siteConfig.organizationName,
      url: baseUrl,
    },
  };
}
