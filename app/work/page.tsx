import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/seo/entity";
import { pageMetadata } from "@/lib/seo/page-metadata";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";
import CaseStudyListingSection from "@/components/work/CaseStudyListingSection";
import LogoSlider from "@/components/sections/LogoSlider";

const workUrl = `${siteConfig.siteUrl}/work`;

export const metadata: Metadata = pageMetadata({
  title: "Our Work",
  description:
    "Explore PRNIT's case studies — real projects delivering real results across web, app, and cloud.",
  path: "/work",
});

export default function WorkPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/work" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PRNIT Case Studies",
    url: workUrl,
    description:
      "Case studies from PRNIT across web, mobile, and cloud — logistics, healthtech, hospitality, media, e-commerce, travel, social, and AI.",
    isPartOf: siteConfig.siteUrl,
  };

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[breadcrumbSchema, collectionSchema]} />
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
