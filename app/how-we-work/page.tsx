import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo/entity";
import HowWeWorkHeroSection from "@/components/how-we-work/HowWeWorkHeroSection";
import ProcessSection from "@/components/how-we-work/ProcessSection";
import IndustryCoverageSection from "@/components/how-we-work/IndustryCoverageSection";
import HowWeWorkFAQSection from "@/components/how-we-work/HowWeWorkFAQSection";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, getHowToSchema, getFaqSchema } from "@/lib/seo/schema";

const howWeWorkUrl = `${siteConfig.siteUrl}/how-we-work`;
const howWeWorkTitle = "Our Software Development Process — Strategy to Launch | PRNIT";
const howWeWorkDescription = "PRNIT follows an 11-step process — from discovery & UX strategy to development, QA, and post-launch support. See how we deliver scalable digital products with precision and speed.";
const howWeWorkOgTitle = "How PRNIT Works — Our 11-Step Software Development Process";
const howWeWorkOgDescription = "From discovery & UX strategy to development, QA, and post-launch support — see PRNIT's structured 11-step process for building scalable digital products.";
const howWeWorkTwitterTitle = "How PRNIT Works — Our 11-Step Dev Process";
const howWeWorkTwitterDescription = "Discovery → UX → Design → Development → QA → Launch. See the structured process PRNIT uses to ship scalable digital products.";
const ogImageUrl = `${siteConfig.siteUrl}/og-how-we-work.jpg`;

export const metadata: Metadata = {
  title: howWeWorkTitle,
  description: howWeWorkDescription,
  alternates: {
    canonical: howWeWorkUrl,
  },
  openGraph: {
    type: "website",
    url: howWeWorkUrl,
    title: howWeWorkOgTitle,
    description: howWeWorkOgDescription,
    siteName: siteConfig.organizationName,
    locale: "en_IN",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "PRNIT's 11-step software development process — from discovery to post-launch support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prnitsoftware",
    creator: "@prnitsoftware",
    title: howWeWorkTwitterTitle,
    description: howWeWorkTwitterDescription,
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

export default function HowWeWorkPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "How We Work", path: "/how-we-work" },
  ]);

  const howToSchema = getHowToSchema({
    name: "How PRNIT Builds Scalable Digital Products",
    description: "PRNIT's 11-step software development process — from discovery and UX strategy through development, QA testing, and post-launch support.",
    steps: [
      {
        position: 1,
        name: "Discovery & Strategy",
        text: "We learn about your vision, audience, competitors, and challenges. Through in-depth discussions and research, we define a clear product roadmap.",
        url: "https://prnit.com/how-we-work#step-01"
      },
      {
        position: 2,
        name: "Information Architecture",
        text: "We design a logical content and navigation framework ensuring users can easily find what they need.",
        url: "https://prnit.com/how-we-work#step-02"
      },
      {
        position: 3,
        name: "UX & Wireframing",
        text: "We build wireframes and interactive prototypes to map out layouts, functionality, and user interactions.",
        url: "https://prnit.com/how-we-work#step-03"
      },
      {
        position: 4,
        name: "Content Strategy",
        text: "We organise and refine your content to communicate your brand story effectively across the platform.",
        url: "https://prnit.com/how-we-work#step-04"
      },
      {
        position: 5,
        name: "Visual Identity & Style",
        text: "We establish a consistent visual language through colours, typography, icons, and UI patterns.",
        url: "https://prnit.com/how-we-work#step-05"
      },
      {
        position: 6,
        name: "UI Design",
        text: "We transform concepts into polished, modern, and responsive designs.",
        url: "https://prnit.com/how-we-work#step-06"
      },
      {
        position: 7,
        name: "Development",
        text: "We develop your product using modern technologies and best practices for speed, security, and scalability.",
        url: "https://prnit.com/how-we-work#step-07"
      },
      {
        position: 8,
        name: "Content Integration",
        text: "We integrate text, images, videos, and data while optimising performance and SEO.",
        url: "https://prnit.com/how-we-work#step-08"
      },
      {
        position: 9,
        name: "Testing & QA",
        text: "We rigorously test functionality, performance, and compatibility across all devices and browsers.",
        url: "https://prnit.com/how-we-work#step-09"
      },
      {
        position: 10,
        name: "Training & Handover",
        text: "We provide documentation and training to help your team manage and grow your platform independently.",
        url: "https://prnit.com/how-we-work#step-10"
      },
      {
        position: 11,
        name: "Launch & Support",
        text: "We deploy your project and provide ongoing maintenance to keep your platform optimised long-term.",
        url: "https://prnit.com/how-we-work#step-11"
      }
    ]
  });

  const faqSchema = getFaqSchema([
    {
      question: "What is PRNIT's software development process?",
      answer: "PRNIT follows an 11-step process: Discovery & Strategy → Information Architecture → UX & Wireframing → Content Strategy → Visual Identity → UI Design → Development → Content Integration → Testing & QA → Training & Handover → Launch & Support."
    },
    {
      question: "How long does a typical project take with PRNIT?",
      answer: "Project timelines vary by scope. A standard web or app project typically takes 6–16 weeks from discovery to launch. PRNIT provides a detailed timeline after the initial discovery phase."
    },
    {
      question: "Does PRNIT use agile methodology?",
      answer: "Yes. PRNIT uses an iterative delivery approach aligned with agile principles — working in transparent sprints with regular client check-ins and continuous feedback throughout the build."
    },
    {
      question: "What happens after my product launches?",
      answer: "PRNIT provides post-launch maintenance, performance monitoring, and ongoing support to keep your platform secure, optimised, and up to date."
    },
    {
      question: "How do I get started with PRNIT?",
      answer: "Fill out the contact form on prnit.com to book a free consultation. PRNIT's team will reach out to understand your requirements and walk you through the discovery process."
    }
  ]);

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[breadcrumbSchema, howToSchema, faqSchema]} />
      <HowWeWorkHeroSection />
      <LogoSlider />
      <PageLead>
        We run a structured delivery process from discovery to launch and support. PRNIT aligns
        engineering decisions with product goals, then executes in transparent iterations. This
        approach reduces risk, improves delivery speed, and keeps architecture stable as products
        scale.
      </PageLead>
      <ProcessSection />
      <HowWeWorkFAQSection />
      <IndustryCoverageSection />
    </main>
  );
}
