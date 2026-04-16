import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo/entity";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import SectionLabel from "@/components/ui/SectionLabel";
import ButtonLink from "@/components/ui/ButtonLink";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getPersonSchema } from "@/lib/seo/schema";
import Image from "next/image";
import { about_left, about_top, about_bottom } from "@/public/assets";

const aboutUrl = `${siteConfig.siteUrl}/about`;
const aboutTitle =
  "About PRNIT | Praveen Singh Shekhawat, Engineering Architect — Jaipur, India";
const aboutDescription =
  "Founded in January 2011, PRNIT helps teams solve architecture scaling challenges with senior engineering execution led by founder Praveen Singh Shekhawat.";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: {
    canonical: aboutUrl,
  },
  openGraph: {
    type: "website",
    url: aboutUrl,
    title: aboutTitle,
    description: aboutDescription,
    siteName: siteConfig.organizationName,
    locale: "en_US",
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.siteUrl}/` },
    { name: "About", url: `${siteConfig.siteUrl}/about` },
  ]);

  return (
    <main className="deep-navy scroll-smooth secondary-text">
      <JsonLd data={getPersonSchema()} />
      <JsonLd data={breadcrumbJsonLd} />
      <section
        id="home"
        className="relative w-full secondary-background rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[48px] overflow-hidden"
      >
        <div className="mx-auto max-w-[1320px] flex items-center py-20 md:py-28 lg:py-24 min-h-screen px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-12 lg:gap-16 items-center w-full">
            <div className="space-y-6 col-span-1">
              <SectionLabel>
                About <span className="support-blue">PRNIT</span>
              </SectionLabel>
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-normal primary-black">
                  Engineering Architecture for
                  <span className="md:block font-black red-text"> Scaling Startups</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                  Founded in January 2011 by Praveen Singh Shekhawat, PRNIT helps companies fix software
                  architecture problems that slow growth. We combine architecture leadership with
                  distributed engineering execution across SaaS, healthtech, logistics, and fintech.
                </p>
              </div>
              <ButtonLink href="#contact" className="block w-fit">
                Let&apos;s Talk
              </ButtonLink>
            </div>

            <div className="relative col-span-1 pl-4 pr-8 sm:pl-5 sm:pr-12 md:pl-6 md:pr-16 flex items-center justify-center">
              <Image src={about_left} alt="About Left" width={150} height={150} className="absolute top-8 left-2 lg:top-12 w-20 h-20 sm:w-24 sm:h-24 md:w-[150px] md:h-[150px]" />
              <Image src={about_bottom} alt="About Bottom" width={500} height={500} className="w-[91%] h-auto" />
              <Image src={about_top} alt="About Top" width={250} height={250} className="absolute bottom-8 right-2 lg:bottom-16 w-32 h-32 sm:w-40 sm:h-40 md:w-[250px] md:h-[250px]" />
            </div>
          </div>
        </div>
      </section>

      <LogoSlider />
      <PageLead>
        PRNIT was built to solve one recurring issue: products that work early but break as they
        scale. We provide both architectural direction and delivery capacity, so founders and CTOs
        can move faster without sacrificing reliability.
      </PageLead>

      <section>
        <div className="mx-auto max-w-[1320px] py-12 sm:py-16 md:py-20 lg:py-24 border-b border-white/20">
          <SectionLabel
            labelClassName="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 text-white syne-font"
            lineClassName="w-50 sm:w-60 md:w-70 bg-white/50">Our Story</SectionLabel>
          <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white">
            PRNIT was founded in <strong>January 2011</strong> to solve a recurring challenge:
            products were growing faster than their architecture. Teams needed systems that could
            handle scale, performance pressure, and evolving business complexity. We stepped in to
            design and implement scalable architecture patterns that keep delivery stable as
            products and users grow.
          </p>
        </div>
        <div className="mx-auto max-w-[1320px] py-12 sm:py-16 md:py-20 lg:py-24">
          <SectionLabel
            labelClassName="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 text-white syne-font"
            lineClassName="w-50 sm:w-60 md:w-70 bg-white/50">Team</SectionLabel>
          <div className="mt-5 space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-white">
            <p>
              We run a distributed engineering team based in India, with engineers carrying
              <strong> 8-14 years</strong> of hands-on experience.
            </p>
            <p>
              The team covers full stack web, iOS, Android, cloud, and QA delivery. We are also
              actively working on AI models for logistics and healthcare use cases.
            </p>
          </div>
        </div>
      </section>

      <section className="secondary-background">
        <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <SectionLabel
            labelClassName="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font"
            lineClassName="w-50 sm:w-60 md:w-70 bg-black"
          >
            Founder
          </SectionLabel>
          <div className="mt-5 space-y-4 text-sm sm:text-base md:text-lg leading-relaxed primary-black">
            <p>
              <strong>Praveen Singh Shekhawat — Founder &amp; Engineering Architect</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>14 years of hands-on engineering and architecture experience</li>
              <li>Current: Development Team Lead at BookMyCargo, Bangkok</li>
              <li>Current: Solutions Architect at Research Hive LLC</li>
              <li>
                Past: Toptal (vetted network), Are Media, Galen Growth, Showcare, Mission, Wolken
                Software
              </li>
              <li>Industries: SaaS, healthtech, logistics, fintech</li>
              <li>
                LinkedIn:{" "}
                <a
                  href={siteConfig.founderLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-[var(--support-blue,#1f4fd8)]"
                >
                  Praveen Singh Shekhawat
                </a>
              </li>
              <li>
                Toptal:{" "}
                <a
                  href={siteConfig.founderToptal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-[var(--support-blue,#1f4fd8)]"
                >
                  Toptal Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <SectionLabel
            labelClassName="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 text-white syne-font"
            lineClassName="w-50 sm:w-60 md:w-70 bg-white/50"
          >
            Numbers
          </SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <article className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Founded</p>
              <p className="mt-2 text-2xl sm:text-3xl font-black syne-font">2011</p>
            </article>
            <article className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Years of Operation</p>
              <p className="mt-2 text-2xl sm:text-3xl font-black syne-font">{siteConfig.yearsInBusiness}</p>
            </article>
            <article className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Projects Delivered</p>
              <p className="mt-2 text-xl sm:text-2xl font-black syne-font">
                {siteConfig.projectsCount}
              </p>
            </article>
            <article className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Industries Served</p>
              <p className="mt-2 text-2xl sm:text-3xl font-black syne-font">
                {siteConfig.industriesCount}
              </p>
            </article>
            <article className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Time Saved</p>
              <p className="mt-2 text-2xl sm:text-3xl font-black syne-font">
                {siteConfig.weeklyTimeSaved}
              </p>
            </article>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed">
            Industries: Finance, Manufacturing, Healthcare, Technology, Media, Retail, Mobility,
            Public Services. Update Projects Delivered with your verified production total.
          </p>
          <div className="mt-6">
            <ButtonLink href="/work/project-name" className="block w-fit">
              View Case Study
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
