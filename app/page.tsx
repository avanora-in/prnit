import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import LogoSlider from "@/components/sections/LogoSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CustomAiSection from "@/components/home/CustomAiSection";
import BlogSection from "@/components/home/BlogSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { siteConfig } from "@/lib/seo/entity";

const homeUrl = `${siteConfig.siteUrl}/`;
const homeTitle = "PRNIT | AI & Cloud Software Development Company in Jaipur, India";
const homeMetaDescription =
  "PRNIT is a Jaipur-based software company specialising in AI-powered apps, cloud architecture, mobile development, and distributed engineering teams. Founded in 2011 by Praveen Singh Shekhawat. Serving SaaS, healthtech, logistics, and fintech startups globally.";
const homeAiDescription = homeMetaDescription;
const homeOgTitle = "PRNIT | AI & Cloud Software Development — Jaipur, India";
const homeTwitterTitle = "PRNIT | Software Development Company, Jaipur";
const homeTwitterDescription =
  "AI-powered apps, cloud architecture, and distributed engineering teams. Founded in 2011 by Praveen Singh Shekhawat.";
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
    description: homeAiDescription,
    siteName: siteConfig.organizationName,
    locale: "en_IN",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "PRNIT - AI & Cloud Software Development in Jaipur, India",
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
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  return (
    <main className="deep-navy scroll-smooth">
      <HeroSection />
      <LogoSlider />
      <AboutSection />
      <ServicesSection />
      <CustomAiSection />
      <IndustriesSection />
      <BlogSection />
      <TestimonialsSection />
    </main>
  );
}
