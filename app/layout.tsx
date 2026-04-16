import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/layout/HeaderSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/layout/FooterSection";
import { siteConfig } from "@/lib/seo/entity";
import WebVitalsTracker from "@/components/analytics/WebVitalsTracker";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo/schema";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.organizationName,
  title: {
    default: "PRNIT | AI & Cloud Software Development Company in Jaipur, India",
    template: "%s | PRNIT",
  },
  description:
    "PRNIT is a Jaipur-based software company specialising in AI-powered apps, cloud architecture, mobile development, and distributed engineering teams. Founded in 2011 by Praveen Singh Shekhawat. Serving SaaS, healthtech, logistics, and fintech startups globally.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.siteUrl}/`,
    title: "PRNIT | AI & Cloud Software Development — Jaipur, India",
    description:
      "PRNIT is a Jaipur-based software company specialising in AI-powered apps, cloud architecture, mobile development, and distributed engineering teams. Founded in 2011 by Praveen Singh Shekhawat. Serving SaaS, healthtech, logistics, and fintech startups globally.",
    siteName: siteConfig.organizationName,
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/og-image.jpg`,
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
    title: "PRNIT | Software Development Company, Jaipur",
    description:
      "AI-powered apps, cloud architecture, and distributed engineering teams. Founded in 2011 by Praveen Singh Shekhawat.",
    images: [`${siteConfig.siteUrl}/og-image.jpg`],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${syne.variable} antialiased`} suppressHydrationWarning>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <WebVitalsTracker />
        <HeaderSection />
        {children}
        <ContactSection />
        <FooterSection />
      </body>
    </html>
  );
}
