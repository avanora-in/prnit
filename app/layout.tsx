import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/layout/HeaderSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/layout/FooterSection";
import { siteConfig } from "@/lib/seo/entity";
import WebVitalsTracker from "@/components/analytics/WebVitalsTracker";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import JsonLd from "@/components/seo/JsonLd";
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getSoftwareApplicationSchema,
  getWebSiteSchema,
} from "@/lib/seo/schema";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
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
  verification: {
    google: "M5TnQ09wS8jy5y-ktxC4YUvsR0WRhjjWAcS-dxOqJMY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${syne.variable} antialiased`} suppressHydrationWarning>
        <GoogleTagManager />
        <JsonLd
          data={[
            getOrganizationSchema(),
            getWebSiteSchema(),
            getLocalBusinessSchema(),
            getSoftwareApplicationSchema(),
          ]}
        />
        <WebVitalsTracker />
        <HeaderSection />
        {children}
        <ContactSection />
        <FooterSection />
      </body>
    </html>
  );
}
