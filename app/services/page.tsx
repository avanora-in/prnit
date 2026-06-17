import type { Metadata } from "next";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import LogoSlider from "@/components/sections/LogoSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import { siteConfig } from "@/lib/seo/entity";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, getOrganizationSchema, getFaqSchema } from "@/lib/seo/schema";

const servicesUrl = `${siteConfig.siteUrl}/services`;
const servicesTitle = "Software Development Services in India | Web, App, Cloud & More | PRNIT";
const servicesDescription = "PRNIT delivers end-to-end software development services in India — web, mobile apps, cloud, UI/UX design, CMS, e-commerce, QA & Zoho solutions. Scalable architecture. Predictable delivery. Trusted by 50+ clients across industries.";
const servicesOgTitle = "Software Development Services in India | Web, App, Cloud & More | PRNIT";
const servicesOgDescription = "PRNIT delivers end-to-end software development services in India — web, mobile apps, cloud, UI/UX design, CMS, e-commerce, QA & Zoho solutions. Scalable architecture. Predictable delivery. Trusted by 50+ clients.";
const servicesTwitterTitle = "Software Development Services in India | PRNIT";
const servicesTwitterDescription = "Web, mobile, cloud, QA, design & Zoho solutions. Scalable. Predictable. Trusted by 50+ clients. Get a free consultation today.";
const ogImageUrl = `${siteConfig.siteUrl}/og-services.jpg`;

export const metadata: Metadata = {
  title: servicesTitle,
  description: servicesDescription,
  alternates: {
    canonical: servicesUrl,
  },
  openGraph: {
    type: "website",
    url: servicesUrl,
    title: servicesOgTitle,
    description: servicesOgDescription,
    siteName: siteConfig.organizationName,
    locale: "en_IN",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "PRNIT Software Development Services in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prnitsoftware",
    creator: "@prnitsoftware",
    title: servicesTwitterTitle,
    description: servicesTwitterDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  const organizationSchema = getOrganizationSchema();

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Software Development Services in India | PRNIT",
    url: servicesUrl,
    description: "PRNIT delivers end-to-end software development services in India.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: servicesUrl },
      ],
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PRNIT Software Development Services",
    url: servicesUrl,
    numberOfItems: 14,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "App Development", url: "https://prnit.com/services/app-development" },
      { "@type": "ListItem", position: 2, name: "Web Development", url: "https://prnit.com/services/web-development" },
      { "@type": "ListItem", position: 3, name: "UI/UX Design", url: "https://prnit.com/services/design" },
      { "@type": "ListItem", position: 4, name: "E-Commerce Development", url: "https://prnit.com/services/e-commerce" },
      { "@type": "ListItem", position: 5, name: "CMS Development", url: "https://prnit.com/services/cms" },
      { "@type": "ListItem", position: 6, name: "iOS Development", url: "https://prnit.com/services/ios" },
      { "@type": "ListItem", position: 7, name: "Android Development", url: "https://prnit.com/services/android" },
      { "@type": "ListItem", position: 8, name: "Cloud Solutions", url: "https://prnit.com/services/cloud" },
      { "@type": "ListItem", position: 9, name: "QA & Testing", url: "https://prnit.com/services/qa-testing" },
      { "@type": "ListItem", position: 10, name: "SolarOS", url: "https://prnit.com/solar-os" },
      { "@type": "ListItem", position: 11, name: "Zoho Consulting", url: "https://prnit.com/zoho-consulting-partner" },
      { "@type": "ListItem", position: 12, name: "Zoho Migration", url: "https://prnit.com/zoho-migration" },
      { "@type": "ListItem", position: 13, name: "Tally to Zoho Books", url: "https://prnit.com/services/tally-to-zoho-books" },
      { "@type": "ListItem", position: 14, name: "Strategy & Consulting", url: "https://prnit.com/how-we-work" },
    ],
  };

  const faqSchema = getFaqSchema([
    {
      question: "How do we start with PRNIT?",
      answer: "Share your goals and current challenges. We then define scope, milestones, and a delivery plan tailored to your requirements."
    },
    {
      question: "Can PRNIT work with distributed teams?",
      answer: "Yes. Our delivery model is built for distributed collaboration, transparent updates, and predictable execution across time zones."
    },
    {
      question: "What software development services does PRNIT offer?",
      answer: "PRNIT offers web development, mobile app development (iOS & Android), cloud solutions (AWS & GCP), UI/UX design, e-commerce development, CMS solutions, QA & testing, Zoho consulting, and data engineering."
    },
    {
      question: "How much do PRNIT's software development services cost?",
      answer: "PRNIT offers transparent pricing with no hidden charges. Cost depends on scope and complexity. We provide a free consultation and a detailed estimate before any engagement begins."
    },
    {
      question: "Is PRNIT a certified partner for any platforms?",
      answer: "Yes. PRNIT is a certified Zoho consulting partner and is ISO/IEC 27001:2022 certified, ensuring global security and data protection standards."
    },
    {
      question: "Does PRNIT provide post-delivery support and maintenance?",
      answer: "Yes. PRNIT provides dedicated round-the-clock support throughout and after project delivery — including updates, maintenance, and 30-day post-migration support on migration projects."
    }
  ]);

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[organizationSchema, webPageSchema, itemListSchema, breadcrumbSchema, faqSchema]} />
      <ServicesHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT delivers end-to-end software services for teams that need reliable scale. We cover
        web, mobile, cloud, QA, design, and CMS delivery with senior distributed engineers.
        Engagements focus on performance, predictable timelines, and architecture that supports
        business growth.
      </PageLead>
      <ServicesGridSection />
      <ServiceSeoSection
        h1="Software Development Services in India"
        explanation="PRNIT provides software development services in India for startups and enterprises that need scalable architecture and reliable execution across web, mobile, cloud, QA, and design."
        internalLinks={[
          { href: "/services/web-development", label: "Web Development" },
          { href: "/services/app-development", label: "App Development" },
          { href: "/services/cloud", label: "Cloud Services" },
          { href: "/solar-os", label: "SolarOS" },
          { href: "/zoho-consulting-partner", label: "Zoho Consulting" },
          { href: "/services/tally-to-zoho-books", label: "Tally to Zoho Books" },
        ]}
        faqs={[
          {
            question: "How do we start with PRNIT?",
            answer: "Share your goals and current challenges. We then define scope, milestones, and a delivery plan tailored to your requirements."
          },
          {
            question: "Can PRNIT work with distributed teams?",
            answer: "Yes. Our delivery model is built for distributed collaboration, transparent updates, and predictable execution across time zones."
          },
          {
            question: "What software development services does PRNIT offer?",
            answer: "PRNIT offers web development, mobile app development (iOS & Android), cloud solutions (AWS & GCP), UI/UX design, e-commerce development, CMS solutions, QA & testing, Zoho consulting, and data engineering."
          },
          {
            question: "How much do PRNIT's software development services cost?",
            answer: "PRNIT offers transparent pricing with no hidden charges. Cost depends on scope and complexity. We provide a free consultation and a detailed estimate before any engagement begins."
          },
          {
            question: "Is PRNIT a certified partner for any platforms?",
            answer: "Yes. PRNIT is a certified Zoho consulting partner and is ISO/IEC 27001:2022 certified, ensuring global security and data protection standards."
          },
          {
            question: "Does PRNIT provide post-delivery support and maintenance?",
            answer: "Yes. PRNIT provides dedicated round-the-clock support throughout and after project delivery — including updates, maintenance, and 30-day post-migration support on migration projects."
          }
        ]}
      />
      <ServicesCTASection />
      <ServicesSection />
    </main>
  );
}
