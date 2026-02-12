import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/layout/HeaderSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/layout/FooterSection";

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
  title: "PRNIT - Driving Business Growth with AI, Data, and Cloud",
  description: "Unlock the power of modern technology with custom-built digital solutions designed to optimize operations, reduce costs, and drive measurable business results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${syne.variable} antialiased`} suppressHydrationWarning>
        <HeaderSection />
        {children}
        <ContactSection />
        <FooterSection />
      </body>
    </html>
  );
}
