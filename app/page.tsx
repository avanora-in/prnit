import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import LogoSlider from "@/components/sections/LogoSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CustomAiSection from "@/components/home/CustomAiSection";
import BlogSection from "@/components/home/BlogSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeFAQSection from "@/components/home/HomeFAQSection";
import { siteConfig } from "@/lib/seo/entity";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, getFaqSchema } from "@/lib/seo/schema";

const homeUrl = `${siteConfig.siteUrl}/`;
const homeTitle = "PRNIT — AI & Cloud Software Development | Jaipur, India";
const homeMetaDescription =
  "AI-powered apps, cloud infrastructure & distributed engineering teams — built by PRNIT, Jaipur's trusted software partner since 2011. SaaS, healthtech, logistics & fintech.";
const homeAiDescription = homeMetaDescription;
const homeOgDescription = "We build AI-powered apps, cloud infrastructure & distributed engineering teams for scaling startups. Based in Jaipur, India — since 2011.";
const homeOgTitle = "PRNIT — AI & Cloud Software Development | Jaipur, India";
const homeTwitterTitle = "PRNIT — AI & Cloud Software Development | Jaipur";
const homeTwitterDescription =
  "AI-powered apps, cloud infrastructure & distributed engineering teams for scaling startups. Jaipur-based since 2011.";
const ogImageUrl = `${siteConfig.siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: homeTitle,
  description: homeMetaDescription,
  alternates: {
    canonical: homeUrl,
  },
  openGraph: {
    type: "website",
    url: homeUrl,
    title: homeOgTitle,
    description: homeOgDescription,
    siteName: siteConfig.organizationName,
    locale: "en_IN",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "PRNIT — AI & Cloud Software Development Company, Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prnitsoftware",
    creator: "@prnitsoftware",
    title: homeTwitterTitle,
    description: homeTwitterDescription,
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

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", path: "/" }]);
  const faqSchema = getFaqSchema([
    {
      question: "What services does PRNIT offer?",
      answer: "PRNIT offers AI-powered app development, cloud & DevOps, custom web development, mobile apps (iOS & Android), e-commerce, CRM development, data engineering, QA & testing, and Zoho consulting."
    },
    {
      question: "How long has PRNIT been in business?",
      answer: "PRNIT was founded in January 2011 by Praveen Singh Shekhawat, with over 14 years of experience delivering software for startups and enterprises globally."
    },
    {
      question: "Which industries does PRNIT serve?",
      answer: "PRNIT specialises in SaaS, healthtech, logistics, fintech, retail, and education across India, the US, UK, UAE, and Australia."
    },
    {
      question: "Is PRNIT ISO certified?",
      answer: "Yes. PRNIT holds ISO/IEC 27001:2022 certification for information security management."
    }
  ]);

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[breadcrumbSchema, faqSchema]} />
      <HeroSection />
      <LogoSlider />
      <AboutSection />
      <ServicesSection />
      <CustomAiSection />
      <IndustriesSection />
      <BlogSection />
      <HomeFAQSection />
      <TestimonialsSection />
    </main>
  );
}
