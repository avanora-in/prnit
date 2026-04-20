import type { ReactNode } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/work/case-studies";
import { CaseStudyMetricIcon } from "@/lib/work/case-study-metric-icons";
import CaseStudyProjectVisualsGallery from "./CaseStudyProjectVisualsGallery";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "../ui/SectionLabel";
import LogoSlider from "../sections/LogoSlider";

type Props = {
  study: CaseStudy;
  prev: CaseStudy | null;
  next: CaseStudy | null;
};

/** Map case study platform to relevant service landing pages for internal linking. */
function caseStudyServiceLinks(study: CaseStudy): { href: string; label: string }[] {
  switch (study.platformOverview) {
    case "App":
      return [{ href: "/services/app-development", label: "See our App Development Services →" }];
    case "Both":
      return [
        { href: "/services/web-development", label: "See our Web Development Services →" },
        { href: "/services/app-development", label: "See our App Development Services →" },
      ];
    case "Website":
    default:
      return [{ href: "/services/web-development", label: "See our Web Development Services →" }];
  }
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-1.5 text-xs sm:text-sm font-semibold primary-black">
      {children}
    </span>
  );
}

export default function CaseStudyDetailView({ study, prev, next }: Props) {
  const serviceLinks = caseStudyServiceLinks(study);

  return (
    <>
      <section
        id="home"
        className="relative w-full bg-gradient-to-br from-[#ffe2e6] to-[#b8caff] rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[48px] overflow-hidden"
      >
        <div className="mx-auto max-w-[1320px] flex items-center py-20 md:py-28 lg:py-32 min-h-[50vh] md:min-h-[70vh] px-4 sm:px-6 md:px-8">
          <div className="space-y-6">
            <SectionLabel>{study.industry}</SectionLabel>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-normal primary-black">
                {study.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                {study.outcomeStatement}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              <Pill>
                <span className="text-black/50 font-medium mr-1.5">Industry</span>
                {study.industry}
              </Pill>
              <Pill>
                <span className="text-black/50 font-medium mr-1.5">Type</span>
                {study.typeLabel}
              </Pill>
              <Pill>
                <span className="text-black/50 font-medium mr-1.5">Platform</span>
                {study.platformShort}
              </Pill>
              <Pill>
                <span className="text-black/50 font-medium mr-1.5">Timeline</span>
                {study.timeline}
              </Pill>
            </div>
          </div>
        </div>
      </section>

      <LogoSlider />

      <section className="secondary-background">
        <div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-5 sm:py-12 md:px-6 md:py-14">
          <div className="grid gap-4 sm:grid-cols-3 rounded-2xl border border-black/10 p-5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/50">Client type</p>
              <p className="mt-2 text-sm sm:text-base font-semibold leading-snug primary-black">{study.clientType}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/50">Services provided</p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed primary-black">{study.servicesProvided}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/50">Platform</p>
              <p className="mt-2 text-sm sm:text-base font-semibold primary-black">{study.platformOverview}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-background">
        <div className="mx-auto max-w-[1320px] px-4 pb-6 sm:px-5 md:px-6 space-y-8">
          <article className="rounded-2xl border border-black/10 p-5 sm:p-6">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-black primary-black leading-normal">The Challenge</h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed primary-black">{study.challenge}</p>
          </article>

          <article className="rounded-2xl border border-black/10 p-5 sm:p-6">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-black primary-black leading-normal">Our Approach</h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed primary-black">{study.approach}</p>
          </article>

          <article className="rounded-2xl border border-black/10 p-5 sm:p-6">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-black primary-black leading-normal">What We Built</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm sm:text-base leading-relaxed primary-black">
              {study.whatWeBuilt.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-black/10 p-5 sm:p-6">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-black primary-black leading-normal">Results</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {study.resultMetrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col rounded-xl border border-black/10 p-5 text-center sm:text-left"
                >
                  <CaseStudyMetricIcon
                    name={m.icon}
                    className="h-7 w-7 shrink-0 text-[#1F4FD8] sm:h-8 sm:w-8"
                  />
                  <p className="mt-3 text-2xl sm:text-3xl font-black syne-font primary-black">{m.value}</p>
                  <p className="mt-1 text-sm text-black/75 leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="deep-navy">
        <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <h2 className="text-lg sm:text-xl font-bold text-white">Project Visuals</h2>
          {study.projectVisuals.length > 0 ? (
            <CaseStudyProjectVisualsGallery visuals={study.projectVisuals} />
          ) : (
            <div
              className="mt-6 flex min-h-[220px] sm:min-h-[280px] md:min-h-[360px] items-center justify-center rounded-2xl border border-dashed border-white/25 bg-white/[0.06] text-white/50 text-sm sm:text-base font-medium"
              role="status"
              aria-label="Project visuals"
            >
              Visuals coming soon
            </div>
          )}
        </div>
      </section>

      <section className="secondary-background border-t border-black/10">
        <div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-5 sm:py-12 md:px-6 md:py-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="min-h-[3rem]">
              {prev ? (
                <Link
                  href={`/work/${prev.slug}`}
                  className="group inline-flex flex-col gap-1 rounded-xl border border-black/10 bg-white/50 p-4 transition-colors hover:border-[#1F4FD8]/40 hover:bg-white/80 w-full sm:max-w-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-black/50">Previous</span>
                  <span className="text-base font-bold primary-black group-hover:text-[#1F4FD8]">
                    ← {prev.title}
                  </span>
                </Link>
              ) : null}
            </div>
            <div className="min-h-[3rem] sm:text-right">
              {next ? (
                <Link
                  href={`/work/${next.slug}`}
                  className="group inline-flex flex-col gap-1 rounded-xl border border-black/10 bg-white/50 p-4 transition-colors hover:border-[#1F4FD8]/40 hover:bg-white/80 w-full sm:max-w-md sm:ml-auto sm:items-end"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-black/50">Next</span>
                  <span className="text-base font-bold primary-black group-hover:text-[#1F4FD8]">
                    {next.title} →
                  </span>
                </Link>
              ) : null}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-8">
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm sm:text-base font-semibold text-[#1F4FD8] hover:text-[#8B1E2D] underline-offset-4 hover:underline transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#1F4FD8]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-xl sm:text-2xl font-bold text-white leading-snug max-w-xl">
            Liked this project? Let&apos;s work together.
          </p>
          <ButtonLink href="#contact" variant="primary-light" className="shrink-0 w-full md:w-auto text-center">
            Contact Us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
