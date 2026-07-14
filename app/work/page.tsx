import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/seo/entity";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, getFaqSchema } from "@/lib/seo/schema";
import CaseStudyListingSection from "@/components/work/CaseStudyListingSection";
import LogoSlider from "@/components/sections/LogoSlider";
import WorkFAQSection from "@/components/work/WorkFAQSection";

const workUrl = `${siteConfig.siteUrl}/work`;
const workTitle = "Case Studies & Portfolio — Software Projects by PRNIT";
const workDescription = "14 case studies across logistics, healthtech, e-commerce, SaaS & more. See how PRNIT cut month-end from 3 days to 3 hours, delivered 41% faster APIs, and more.";
const workOgTitle = "PRNIT Case Studies — 14 Real Projects, Real Outcomes";
const workOgDescription = "Logistics, healthtech, SaaS, e-commerce & more. See how PRNIT delivered measurable results — from 41% faster APIs to month-end closing in 3 hours instead of 3 days.";
const workTwitterTitle = "PRNIT Portfolio — 14 Case Studies Across 9 Industries";
const workTwitterDescription = "41% faster APIs. Month-end in 3 hrs. Audit season from weeks to 1 day. Real outcomes from logistics, healthtech, SaaS & e-commerce projects.";
const ogImageUrl = `${siteConfig.siteUrl}/og-work.jpg`;

export const metadata: Metadata = {
  title: workTitle,
  description: workDescription,
  alternates: {
    canonical: workUrl,
  },
  openGraph: {
    type: "website",
    url: workUrl,
    title: workOgTitle,
    description: workOgDescription,
    siteName: siteConfig.organizationName,
    locale: "en_IN",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "PRNIT portfolio — 14 case studies across logistics, healthtech, SaaS, and e-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prnitsoftware",
    creator: "@prnitsoftware",
    title: workTwitterTitle,
    description: workTwitterDescription,
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

export default function WorkPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/work" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies & Portfolio — PRNIT",
    description: "14 real-world software projects delivered by PRNIT across logistics, healthtech, SaaS, e-commerce, hospitality, media, travel, and manufacturing.",
    url: workUrl,
    author: {
      "@type": "Organization",
      name: siteConfig.organizationName,
      url: siteConfig.siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "PRNIT Project Portfolio",
      numberOfItems: 14,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            name: "E-Commerce Inventory Automation",
            url: "https://prnit.com/work/ecommerce-inventory-automation",
            description: "Unified inventory, orders, and accounting inside Zoho for an online retail brand. Month-end processing reduced from 3 days to 3 hours.",
            about: { "@type": "Thing", name: "E-Commerce Automation" },
            genre: "E-Commerce",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "CreativeWork",
            name: "Manufacturing Margin Visibility",
            url: "https://prnit.com/work/manufacturing-margin-visibility",
            description: "Built real-time product-level margin visibility inside Zoho for a manufacturing business, enabling data-driven pricing decisions.",
            about: { "@type": "Thing", name: "Manufacturing ERP" },
            genre: "Manufacturing",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "CreativeWork",
            name: "SaaS Growth Platform Optimization",
            url: "https://prnit.com/work/saas-growth-platform-optimization",
            description: "Architecture and cloud optimisation for a B2B SaaS product post-Series A. Delivered 41% faster APIs, 62% fewer incidents, and 2.1x release throughput.",
            about: { "@type": "Thing", name: "SaaS Architecture" },
            genre: "SaaS",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "CreativeWork",
            name: "Cargo Delivery Platform",
            url: "https://prnit.com/work/cargo-delivery-platform",
            description: "End-to-end web and mobile platform for cargo booking, shipment tracking, and fleet coordination.",
            about: { "@type": "Thing", name: "Logistics Software" },
            genre: "Logistics",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "CreativeWork",
            name: "Clinical Patient Portal",
            url: "https://prnit.com/work/healthtech-patient-portal",
            description: "HIPAA-minded secure web portal for appointment booking, medical records access, and care-team messaging.",
            about: { "@type": "Thing", name: "Healthcare Software" },
            genre: "HealthTech",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "CreativeWork",
            name: "Telehealth Companion App",
            url: "https://prnit.com/work/telehealth-companion-app",
            description: "Cross-platform telehealth solution with web scheduling and native iOS/Android apps for video visits, reminders, and post-visit care plans.",
            about: { "@type": "Thing", name: "Telehealth Application" },
            genre: "HealthTech",
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "CreativeWork",
            name: "Boutique Hotel Booking Engine",
            url: "https://prnit.com/work/hospitality-booking-engine",
            description: "Brand-led direct booking website with dynamic pricing and OTA-style discovery to increase direct revenue without sacrificing rate parity.",
            about: { "@type": "Thing", name: "Hospitality Software" },
            genre: "Hospitality",
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "CreativeWork",
            name: "Publisher Content Platform",
            url: "https://prnit.com/work/media-publisher-platform",
            description: "Performance-first editorial platform with paywalls, structured workflows, and high-traffic article delivery for a digital media brand.",
            about: { "@type": "Thing", name: "Media Publishing Platform" },
            genre: "Media",
          },
        },
        {
          "@type": "ListItem",
          position: 9,
          item: {
            "@type": "CreativeWork",
            name: "Multi-Vendor Marketplace",
            url: "https://prnit.com/work/ecommerce-marketplace",
            description: "Full-stack multi-vendor marketplace with seller onboarding, shared catalog, checkout, and native buyer apps for web and mobile.",
            about: { "@type": "Thing", name: "E-Commerce Marketplace" },
            genre: "E-Commerce",
          },
        },
        {
          "@type": "ListItem",
          position: 10,
          item: {
            "@type": "CreativeWork",
            name: "Itinerary Planner & Trip Wallet",
            url: "https://prnit.com/work/travel-itinerary-planner",
            description: "Web-based trip planning tool with mobile companion app for live updates, tickets, and unified itinerary across multiple travel suppliers.",
            about: { "@type": "Thing", name: "Travel Technology" },
            genre: "Travel",
          },
        },
        {
          "@type": "ListItem",
          position: 11,
          item: {
            "@type": "CreativeWork",
            name: "Niche Community Platform",
            url: "https://prnit.com/work/social-community-platform",
            description: "Paid membership community with feeds, groups, moderation tools, and native mobile apps for safe, scalable community growth.",
            about: { "@type": "Thing", name: "Social Community App" },
            genre: "Social",
          },
        },
        {
          "@type": "ListItem",
          position: 12,
          item: {
            "@type": "CreativeWork",
            name: "Fleet Operations Dashboard",
            url: "https://prnit.com/work/logistics-fleet-dashboard",
            description: "Real-time fleet monitoring dashboard with live map, exception alerts, and KPI views for dispatch and operations leadership.",
            about: { "@type": "Thing", name: "Fleet Management Software" },
            genre: "Logistics",
          },
        },
        {
          "@type": "ListItem",
          position: 13,
          item: {
            "@type": "CreativeWork",
            name: "UAE Multi-Currency VAT Automation",
            url: "https://prnit.com/work/uae-multicurrency-vat-automation",
            description: "Automated AED, USD, and INR multi-currency VAT handling in Zoho Books for a UAE trading company. Quarterly audit reduced from weeks to a single day.",
            about: { "@type": "Thing", name: "VAT Automation UAE" },
            genre: "Finance",
          },
        },
        {
          "@type": "ListItem",
          position: 14,
          item: {
            "@type": "CreativeWork",
            name: "Vendor Commission Automation",
            url: "https://prnit.com/work/vendor-commission-automation",
            description: "Fully automated broker commission calculation inside Zoho Books for a trading company — eliminating 8 hours of monthly manual work with zero disputes.",
            about: { "@type": "Thing", name: "Commission Automation" },
            genre: "Trading",
          },
        },
      ],
    },
  };

  const faqSchema = getFaqSchema([
    {
      question: "What types of projects does PRNIT take on?",
      answer: "PRNIT builds web apps, mobile apps (iOS & Android), cloud platforms, e-commerce solutions, and business automation systems for SaaS, healthtech, logistics, fintech, media, hospitality, and manufacturing clients."
    },
    {
      question: "What measurable results has PRNIT delivered for clients?",
      answer: "Documented outcomes include: month-end closing from 3 days to 3 hours, API response times improved by 41%, production incidents reduced by 62%, release throughput increased 2.1x, and quarterly audit work from weeks to a single day."
    },
    {
      question: "Does PRNIT work with international clients?",
      answer: "Yes. PRNIT has delivered projects in India, UAE, Australia, and the US — including HIPAA-compliant healthcare platforms, UAE VAT-compliant accounting systems, and cross-border logistics platforms."
    },
    {
      question: "Can I see a case study relevant to my industry?",
      answer: "Yes. The work page includes filters by category and industry so you can view projects most relevant to your sector. You can also contact PRNIT directly for a tailored portfolio walkthrough."
    }
  ]);

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[breadcrumbSchema, collectionSchema, faqSchema]} />
      <section
        id="home"
        className="relative w-full bg-gradient-to-br from-[#ffe2e6] to-[#b8caff] rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[48px] overflow-hidden"
      >
        <div className="mx-auto max-w-[1320px] flex items-center py-20 md:py-28 lg:py-32 min-h-[50vh] md:min-h-[70vh] px-4 sm:px-6 md:px-8">
          <div className="space-y-6">
            <SectionLabel>Our Case Studies</SectionLabel>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-normal primary-black">
                Our <span className="font-black red-text">Work</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                Real projects. Real results across logistics, healthtech, e-commerce, travel, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LogoSlider />

      <CaseStudyListingSection />
      <WorkFAQSection />

      <section className="border-t border-white/10 bg-[#1F4FD8]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-xl sm:text-2xl font-bold text-white leading-snug max-w-xl">
            Have a project in mind? Let&apos;s build something great.
          </p>
          <ButtonLink href="#contact" variant="primary-light" className="shrink-0 w-full md:w-auto text-center">
            Contact Us
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
