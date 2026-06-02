import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import ZohoFadeIn from "@/components/zoho/ZohoFadeIn";
import ZohoWhatsAppFloat from "@/components/zoho/ZohoWhatsAppFloat";
import {
  zohoContactHref,
  zohoContactInterests,
} from "@/components/zoho/zoho-links";
import { zohoFaqs } from "@/components/zoho/zoho-faqs";
import {
  clientCountries,
  engagementIncludes,
  globalRegions,
  industries,
  pricingTiers,
  processSteps,
  testimonials,
  trustBarItems,
  whyPrnit,
  zohoProducts,
} from "@/components/zoho/zoho-data";
import { industryIconMap, productIconMap, trustIconMap } from "@/components/zoho/ZohoIcons";

const cardBase =
  "h-full rounded-2xl border border-[rgba(15,15,15,0.08)] bg-white/70 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-[var(--support-blue,#1f4fd8)]/20 md:p-8";

const cardGroup =
  "group h-full rounded-2xl border border-[rgba(15,15,15,0.08)] bg-white/70 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-[var(--support-blue,#1f4fd8)]/20 md:p-8";

function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  light = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <header className="mb-10 space-y-6 md:mb-14">
      {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
      <div className="space-y-2">
        <h2
          id={id}
          className={`text-2xl font-bold leading-normal primary-black sm:text-3xl md:text-4xl ${
            light ? "secondary-text" : ""
          }`}
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={`text-sm leading-normal sm:text-base md:text-lg ${
              light ? "text-white/85" : "text-[var(--color-body,#4b5563)]"
            }`}
          >
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  );
}

export default function ZohoLanding() {
  return (
    <>
      <ZohoWhatsAppFloat />

      {/* 1. Hero */}
      <section
        id="hero"
        className="relative w-full overflow-hidden rounded-b-[24px] bg-gradient-to-br from-[#ffe2e6] to-[#b8caff] sm:rounded-b-[32px] md:rounded-b-[48px]"
      >
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#1F4FD8]/10 blur-3xl md:h-96 md:w-96"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1320px] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <SectionLabel labelClassName="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black sora-font whitespace-nowrap" lineClassName="w-60 sm:w-70 md:w-86 primary-black-background">
                Zoho Consulting Partner
              </SectionLabel>
            </div>
            <h1 className="sora-font text-3xl font-bold leading-tight primary-black sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Zoho Consulting Partner — End-to-End Zoho One Implementation
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-body,#4b5563)] sm:text-lg md:text-xl">
              Certified Zoho partner for Zoho CRM implementation, Zoho Books implementation, and
              full Zoho suite implementation — configured for India, UAE, the US, the UK, and
              Australia.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={zohoContactHref(zohoContactInterests.consultation)}>
                Book a Free Consultation
              </ButtonLink>
              <ButtonLink href="#products" variant="secondary">
                Explore What We Build
              </ButtonLink>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-body,#4b5563)]">
                Clients in
              </p>
              <ul
                className="flex flex-wrap items-center justify-center gap-2"
                aria-label="Countries we serve"
              >
                {clientCountries.map((c) => (
                  <li key={c.name}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-xs font-medium primary-black shadow-sm sm:text-sm">
                      <span aria-hidden>{c.flag}</span>
                      {c.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LogoSlider />

      <PageLead>
        PRNIT is your Zoho Consulting Partner for end-to-end Zoho One implementation — including
        Zoho CRM implementation, Zoho Books implementation, and Zoho Creator developer work. We
        deliver full Zoho suite implementation for businesses in India, the UAE, the United States,
        the United Kingdom, and Australia.
      </PageLead>

      {/* 2. Trust bar */}
      <section id="trust" className="secondary-background border-b border-black/5 py-6 md:py-8">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {trustBarItems.map((item) => {
              const Icon = trustIconMap[item.icon];
              return (
                <li
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-xs font-medium primary-black shadow-sm sm:px-4 sm:text-sm"
                >
                  <span className="support-blue-text">
                    <Icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 3. Global presence */}
      <section id="global" className="secondary-background primary-black py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading
              id="global-heading"
              eyebrow="Global Reach"
              title="Serving Businesses Across 4 Continents"
              intro="Headquartered in India — configured for your market, wherever you operate."
            />
          </ZohoFadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {globalRegions.map((region) => (
              <ZohoFadeIn key={region.id}>
                <article className={cardBase}>
                  <p className="text-2xl" aria-hidden>
                    {region.flag}
                  </p>
                  <h3 className="sora-font mt-3 text-lg font-bold primary-black">{region.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-body,#4b5563)] sm:text-base">
                    {region.body}
                  </p>
                </article>
              </ZohoFadeIn>
            ))}
          </div>
          <p className="mt-8 text-sm text-[var(--color-body,#4b5563)] sm:text-base">
            Can&apos;t see your country? We work with businesses globally —{" "}
            <Link
              href={zohoContactHref(zohoContactInterests.globalInquiry)}
              className="support-blue-text font-semibold hover:underline"
            >
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 4. Products */}
      <section id="products" className="bg-white py-16 md:py-24 border-y border-black/5">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading
              eyebrow="Zoho Products"
              title="The Full Zoho Stack, Configured for Your Business"
              intro="We deliver Zoho CRM implementation, Zoho Books implementation, and every major Zoho app — individually or as a unified Zoho One implementation."
            />
          </ZohoFadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {zohoProducts.map((product) => {
              const ProductIcon = productIconMap[product.icon];
              return (
              <ZohoFadeIn key={product.id}>
                <article id={product.id} className={cardGroup}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--support-blue,#1f4fd8)]/10 text-[var(--support-blue,#1f4fd8)] transition-all duration-300 group-hover:bg-[var(--support-blue,#1f4fd8)] group-hover:text-white">
                    <ProductIcon />
                  </div>
                  <h3 className="sora-font text-lg font-bold primary-black transition-colors group-hover:support-blue-text md:text-xl">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-body,#4b5563)] sm:text-base">
                    {product.body}
                  </p>
                </article>
              </ZohoFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Engagement */}
      <section id="engagement" className="secondary-background py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading eyebrow="Every Project" title="What Every Engagement Includes" />
          </ZohoFadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {engagementIncludes.map((item) => (
              <ZohoFadeIn key={item.title}>
                <article className={cardBase}>
                  <h3 className="sora-font text-lg font-bold primary-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-body,#4b5563)] sm:text-base">
                    {item.body}
                  </p>
                </article>
              </ZohoFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section id="process" className="bg-white py-16 md:py-24 border-y border-black/5">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading eyebrow="How We Work" title="Our Implementation Process" />
          </ZohoFadeIn>
          <ol className="grid gap-6 md:grid-cols-5">
            {processSteps.map((step) => (
              <ZohoFadeIn key={step.step}>
                <li className={`${cardBase} text-center`}>
                  <span className="support-blue-background secondary-text mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                    {step.step}
                  </span>
                  <h3 className="sora-font text-base font-bold primary-black sm:text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-body,#4b5563)]">
                    {step.body}
                  </p>
                </li>
              </ZohoFadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Why PRNIT */}
      <section id="why" className="secondary-background py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading eyebrow="Why PRNIT" title="Why Global Businesses Choose Us" />
          </ZohoFadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {whyPrnit.map((item) => (
              <ZohoFadeIn key={item.title}>
                <article className={cardBase}>
                  <h3 className="sora-font text-lg font-bold primary-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-body,#4b5563)] sm:text-base">
                    {item.body}
                  </p>
                </article>
              </ZohoFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industries */}
      <section id="industries" className="bg-white py-16 md:py-24 border-y border-black/5">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading
              eyebrow="Industries"
              title="Built for Businesses Across Industries"
              intro="From trading floors to clinics and SaaS teams — we configure Zoho for how your sector actually operates."
            />
          </ZohoFadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {industries.map((industry) => {
              const IndustryIcon = industryIconMap[industry.icon];
              return (
                <ZohoFadeIn key={industry.id}>
                  <article
                    className={`${cardGroup} flex items-center gap-4 border-l-4 border-l-transparent pl-5 hover:border-l-[var(--support-blue,#1f4fd8)]`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--support-blue,#1f4fd8)]/10 text-[var(--support-blue,#1f4fd8)] transition-all duration-300 group-hover:bg-[var(--support-blue,#1f4fd8)] group-hover:text-white sm:h-14 sm:w-14">
                      <IndustryIcon />
                    </div>
                    <h3 className="sora-font min-w-0 flex-1 text-base font-bold leading-snug primary-black transition-colors group-hover:support-blue-text sm:text-lg">
                      {industry.name}
                    </h3>
                  </article>
                </ZohoFadeIn>
              );
            })}
          </div>
          <p className="mt-10 text-sm text-[var(--color-body,#4b5563)] sm:text-base">
            Your industry not listed?{" "}
            <Link href={zohoContactHref(zohoContactInterests.industryInquiry)} className="support-blue-text font-semibold hover:underline">
              Tell us about your business
            </Link>{" "}
            — we configure Zoho for unique workflows every week.
          </p>
        </div>
      </section>

      {/* 9. Spotlight */}
      <section id="spotlight" className="secondary-background py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading eyebrow="Get Started" title="Starting Fresh or Already on Zoho?" />
          </ZohoFadeIn>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <ZohoFadeIn>
              <article className={`${cardBase} flex flex-col`}>
                <h3 className="sora-font text-xl font-bold primary-black">
                  &ldquo;I&apos;m New to Zoho&rdquo;
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-body,#4b5563)] sm:text-base">
                  We recommend the right products for your business, implement in the right order, and
                  get your team productive fast — wherever you are in the world.
                </p>
                <ButtonLink href={zohoContactHref(zohoContactInterests.newToZoho)} className="mt-6 inline-block w-fit">
                  Start with Zoho
                </ButtonLink>
              </article>
            </ZohoFadeIn>
            <ZohoFadeIn>
              <article className={`${cardBase} flex flex-col`}>
                <h3 className="sora-font text-xl font-bold primary-black">
                  &ldquo;I Already Use Zoho&rdquo;
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-body,#4b5563)] sm:text-base">
                  We audit your current setup, fix what&apos;s not working, build what&apos;s missing, and
                  connect everything so it works as one system.
                </p>
                <ButtonLink
                  href={zohoContactHref(zohoContactInterests.existingZoho)}
                  variant="secondary"
                  className="mt-6 inline-block w-fit"
                >
                  Improve My Setup
                </ButtonLink>
              </article>
            </ZohoFadeIn>
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section id="testimonials" className="bg-white py-16 md:py-24 border-y border-black/5">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by Businesses Globally"
              intro="Teams across India, the UAE, the US, and Australia use PRNIT to implement and run Zoho — remotely, on scope, and on time."
            />
          </ZohoFadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {testimonials.map((t) => (
              <ZohoFadeIn key={t.name}>
                <figure className={`${cardGroup} flex flex-col`}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--support-blue,#1f4fd8)]/10 text-lg font-bold text-[var(--support-blue,#1f4fd8)]">
                    {t.name.charAt(0)}
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-[var(--color-body,#4b5563)]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 border-t border-black/10 pt-4">
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl leading-none" aria-hidden>
                        {t.flag}
                      </span>
                      <div>
                        <p className="text-sm font-bold primary-black">{t.name}</p>
                        <p className="mt-0.5 text-xs text-[var(--color-body,#4b5563)]">{t.company}</p>
                        <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-body,#4b5563)]/80">
                          {t.country}
                        </p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </ZohoFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Pricing */}
      <section id="pricing" className="secondary-background py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading
              eyebrow="Pricing"
              title="Transparent, Project-Based Pricing"
              intro="We quote per project, not per hour. All prices quoted in your currency."
            />
          </ZohoFadeIn>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {pricingTiers.map((tier) => (
              <ZohoFadeIn key={tier.name}>
                <article
                  className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 md:p-8 ${
                    tier.highlight
                      ? "border-[#1F4FD8] bg-[#fafbff] shadow-lg ring-2 ring-[#1F4FD8]/20"
                      : "border-black/10 bg-[#FAFAF7] hover:border-[var(--support-blue,#1f4fd8)]/20 hover:shadow-xl"
                  }`}
                >
                  {"badge" in tier && tier.badge ? (
                    <p className="support-blue-text mb-2 text-xs font-bold uppercase tracking-wide">
                      {tier.badge}
                    </p>
                  ) : null}
                  <p className="support-blue-text text-sm font-bold uppercase tracking-wide">
                    {tier.name}
                  </p>
                  <h3 className="sora-font mt-1 text-xl font-bold primary-black">{tier.subtitle}</h3>
                  <p className="mt-2 text-sm text-[var(--color-body,#4b5563)]">{tier.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase text-[var(--color-body,#4b5563)]">
                    For
                  </p>
                  <p className="text-sm primary-black">{tier.forLabel}</p>
                  <p className="mt-4 text-xs font-semibold uppercase text-[var(--color-body,#4b5563)]">
                    Includes
                  </p>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-[var(--color-body,#4b5563)]">
                    {tier.includes}
                  </p>
                  <ButtonLink
                    href={zohoContactHref(tier.contactInterest)}
                    variant={tier.highlight ? "primary" : "secondary"}
                    className="mt-6 block w-full text-center"
                  >
                    {tier.cta}
                  </ButtonLink>
                  <p className="mt-3 text-center text-xs leading-relaxed text-[var(--color-body,#4b5563)]">
                    Quotes available in INR / AED / USD / GBP / AUD
                  </p>
                </article>
              </ZohoFadeIn>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 text-center">
            <p className="font-semibold primary-black">Request a quote — no prices shown online.</p>
            <ButtonLink href={zohoContactHref(zohoContactInterests.consultation)} className="mt-4 inline-block">
              Request a Quote
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section id="faq" className="bg-white py-16 md:py-24 border-y border-black/5">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <ZohoFadeIn>
            <SectionHeading eyebrow="FAQ" title="Common Questions" />
          </ZohoFadeIn>
          <div className="mx-auto space-y-2">
            {zohoFaqs.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-black/10 bg-white/50 p-4"
              >
                <summary className="cursor-pointer font-semibold primary-black">{item.question}</summary>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body,#4b5563)] sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-sm text-[var(--color-body,#4b5563)] sm:text-base">
            Still have questions?{" "}
            <Link
              href={zohoContactHref(zohoContactInterests.consultation)}
              className="support-blue-text font-semibold hover:underline"
            >
              Book a free consultation
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
