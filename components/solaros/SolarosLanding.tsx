import ButtonLink from "@/components/ui/ButtonLink";
import { solarosFaqs } from "@/components/solaros/solaros-faqs";
import LogoCarousel from "@/components/sections/LogoSlider";
import { siteConfig } from "@/lib/seo/entity";

const trustHighlights = [
  "Fully Cloud-Based",
  "White-Label Platform",
  "Built for Indian Solar Businesses",
  "Mobile Friendly",
  "AI-Powered Automation",
];

const problems = [
  {
    title: "No Website Presence",
    body: "Customers search online and find competitors instead of you.",
  },
  {
    title: "Quotations Managed on WhatsApp",
    body: "No proper tracking, follow-ups, or quotation history.",
  },
  {
    title: "Inventory Managed Manually",
    body: "Stock shortages happen during installations.",
  },
  {
    title: "Manual GST Billing",
    body: "Invoice delays and accounting confusion.",
  },
  {
    title: "No Customer Follow-Up System",
    body: "Leads go cold without reminders or tracking.",
  },
  {
    title: "No Business Visibility",
    body: "No idea which projects are profitable.",
  },
];

const solutionModules = [
  {
    title: "Website + AI SEO",
    body: "Professional website with AI-powered SEO optimization.",
  },
  {
    title: "CRM + Quotation Management",
    body: "Track leads, follow-ups, quotations, and sales.",
  },
  {
    title: "Stock & Inventory Management",
    body: "Manage solar inventory across warehouses and sites.",
  },
  {
    title: "GST Billing & Payments",
    body: "Generate invoices, receipts, and payment reminders.",
  },
  {
    title: "Google Business & Local SEO",
    body: "Improve visibility and manage customer reviews.",
  },
  {
    title: "Analytics & Reports",
    body: "Track revenue, pipeline, profits, and business performance.",
  },
];

const websiteSeoFeatures = [
  "Mobile Responsive Solar Website",
  "AI SEO Optimization",
  "Custom Domain & SSL",
  "Google Analytics Integration",
  "AI Blog Generator",
  "City-Based SEO Landing Pages",
  "Lead Capture Forms",
  "Google Business Profile Integration",
];

const crmFeatures = [
  "Lead Management",
  "Follow-Up Reminders",
  "Sales Pipeline Tracking",
  "Branded PDF Quotations",
  "WhatsApp Quotation Sharing",
  "Residential & Industrial Quotation Types",
  "Version Control",
  "Team Access Management",
];

const stockFeatures = [
  "Solar Panel Inventory",
  "Inverter & Battery Tracking",
  "Cable & Structure Material Management",
  "Multi-Warehouse Support",
  "Auto Material Reservation",
  "Technician Consumption Logs",
  "Low Stock Alerts",
  "Purchase Orders & Supplier Tracking",
  "FIFO Cost Tracking",
  "Project Profitability Reports",
];

const gstFeatures = [
  "GST Invoice Generation",
  "HSN Code Support",
  "Advance & Balance Tracking",
  "Payment Receipts",
  "Credit Notes",
  "Tally Export",
  "Auto Payment Reminders",
  "Proforma Invoices",
  "Project-Wise P&L Reports",
];

const gbpFeatures = [
  "Google Business Profile Sync",
  "Review Management",
  "AI Review Responses",
  "Google Posts Publishing",
  "Local SEO Tracking",
  "GBP Analytics Dashboard",
  "Local Search Optimization",
];

const dashboardMetrics = [
  "Website Visitors",
  "Leads Generated",
  "Open Quotations",
  "Conversion Rate",
  "Revenue Collected",
  "Pending Payments",
  "Stock Value",
  "Project Profitability",
];

const flowSteps = [
  "Customer Finds You on Google",
  "Lead Captured in CRM",
  "Quotation Generated",
  "Stock Reserved Automatically",
  "Installation Completed",
  "Invoice Generated",
  "Profit & Analytics Updated",
];

const customizationSteps = [
  {
    title: "Share Requirement",
    body: "Tell us your workflow or feature request.",
  },
  {
    title: "Planning & Confirmation",
    body: "Our team confirms implementation scope.",
  },
  {
    title: "Development & Deployment",
    body: "Feature delivered directly into your account.",
  },
];

const pricingPlans = [
  {
    name: "Website Plan",
    price: "₹599",
    period: "/month",
    includes: [
      "Solar Website",
      "AI SEO",
      "Google Business Integration",
      "Analytics Dashboard",
      "Lead Forms",
    ],
  },
  {
    name: "Starter Plan",
    price: "₹1,499",
    period: "/month",
    includes: [
      "Everything in Website Plan",
      "CRM",
      "Quotations",
      "GST Billing",
      "Follow-Up System",
    ],
  },
  {
    name: "Business Plan",
    price: "₹2,499",
    period: "/month",
    highlight: true,
    includes: [
      "Everything in Starter",
      "Inventory Management",
      "Purchase Orders",
      "Advanced Reports",
      "WhatsApp Alerts",
    ],
  },
  {
    name: "Pro Plan",
    price: "₹3,999",
    period: "/month",
    includes: [
      "Everything in Business",
      "Unlimited Users",
      "Multi-Branch Support",
      "Digital Signatures",
      "AMC Management",
      "Priority Support",
    ],
  },
];

const whyChoose = [
  {
    title: "Built for Solar Industry",
    body: "Not generic software.",
  },
  {
    title: "White-Label Platform",
    body: "Your branding everywhere.",
  },
  {
    title: "AI Automation",
    body: "Marketing and SEO automated.",
  },
  {
    title: "GST & India Ready",
    body: "Built for Indian workflows.",
  },
  {
    title: "Scalable Platform",
    body: "Start small and grow.",
  },
  {
    title: "Dedicated Support",
    body: "Fast onboarding and support.",
  },
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm sm:text-base leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full support-blue-background" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center space-y-3 mb-10 md:mb-14">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide support-blue-text">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-tight"
      >
        {title}
      </h2>
      {intro ? <p className="text-base sm:text-lg text-[var(--color-body,#4b5563)] leading-relaxed">{intro}</p> : null}
    </div>
  );
}

export default function SolarosLanding() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative w-full overflow-hidden rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[48px] bg-gradient-to-br from-[#fff8eb] via-[#ffe8dc] to-[#b8d4ff]">
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#1F4FD8]/10 blur-3xl md:h-96 md:w-96"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1320px] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:py-32">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Left: headline + CTAs */}
            <div className="space-y-5 lg:col-span-7">
              <div className="inline-flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 sm:gap-3">
                  <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] items-center rounded-full border support-blue-border">
                    <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] rounded-full support-blue-background" />
                  </div>
                  <p className="text-lg sm:text-xl font-semibold primary-black syne-font">SolarOS</p>
                </div>
                <div className="h-px w-24 sm:w-32 primary-black-background" />
              </div>
              <h1 className="text-3xl font-bold leading-tight primary-black sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Run Your Entire Solar Business{" "}
                <span className="font-black red-text">From One Platform</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-body,#4b5563)] sm:text-lg md:text-xl">
                Website, CRM, Quotations, Stock Management, GST Invoicing, Analytics & AI SEO — built
                specifically for Indian Solar Dealers, EPC Companies & Installers.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="#contact">Start Free Trial</ButtonLink>
                <ButtonLink
                  href={`tel:${siteConfig.phoneE164}`}
                  variant="secondary"
                  className="inline-flex items-center justify-center gap-2"
                  aria-label={`Call PRNIT at ${siteConfig.phone}`}
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="tabular-nums">{siteConfig.phone}</span>
                </ButtonLink>
              </div>
            </div>

            {/* Right: pricing + trust */}
            <aside className="flex w-full justify-center lg:col-span-5 lg:justify-end">
              <div className="w-full max-w-md space-y-6 lg:sticky lg:top-28">
                <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white/85 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] backdrop-blur-md sm:rounded-3xl">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1F4FD8] via-[#8B1E2D] to-[#1F4FD8]" aria-hidden />
                  <div className="px-5 py-6 sm:px-7 sm:py-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1F4FD8]">Pricing</p>
                    <p className="mt-2 text-2xl font-black leading-tight primary-black sm:text-3xl">
                      Starting at{" "}
                      <span className="whitespace-nowrap support-blue-text">₹599</span>
                      <span className="text-lg font-bold text-[var(--color-body,#4b5563)]">/month</span>
                    </p>
                    <div className="mt-5 space-y-3 border-t border-black/10 pt-5 text-sm sm:text-base">
                      <p className="flex items-start justify-between gap-4 primary-black">
                        <span className="text-[var(--color-body,#4b5563)]">One-time setup</span>
                        <span className="shrink-0 font-semibold tabular-nums">₹19,000</span>
                      </p>
                      <p className="rounded-xl bg-[#f0f5ff] px-3 py-2.5 text-sm font-medium leading-snug text-[#1e3a5f]">
                        30-day free trial + 2-month money-back guarantee
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white/55 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-body,#4b5563)]">
                    Platform highlights
                  </p>
                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label="Trust highlights"
                  >
                    {trustHighlights.map((label) => (
                      <li key={label}>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-xs font-medium primary-black shadow-sm sm:text-sm">
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full support-blue-background"
                            aria-hidden
                          />
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2. Logo Carousel */}
      <LogoCarousel />

      {/* 3. Problem */}
      <section className="secondary-background primary-black py-16 md:py-24" aria-labelledby="solaros-problem">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <SectionHeading
            id="solaros-problem"
            title="Still Running Your Solar Business on WhatsApp & Excel?"
            intro="Most solar businesses lose leads, profits, and operational control because their systems are disconnected."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-black/10 bg-white/60 p-5 sm:p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold syne-font mb-2">{p.title}</h3>
                <p className="text-sm sm:text-base text-[var(--color-body,#4b5563)] leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solution */}
      <section className="bg-white primary-black py-16 md:py-24 border-y border-black/5" aria-labelledby="solaros-solution">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <SectionHeading
            id="solaros-solution"
            title="One Platform. Complete Solar Business Management."
            intro="SolarOS replaces multiple disconnected tools with one integrated platform designed specifically for the solar industry."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutionModules.map((m) => (
              <article
                key={m.title}
                className="rounded-2xl border border-black/10 bg-[#FAFAF7] p-5 sm:p-6"
              >
                <h3 className="text-lg font-bold mb-2 support-blue-text">{m.title}</h3>
                <p className="text-sm sm:text-base text-[var(--color-body,#4b5563)] leading-relaxed">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Website & AI SEO */}
      <section className="secondary-background primary-black py-16 md:py-24" aria-labelledby="solaros-web-seo">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="space-y-4">
              <h2 id="solaros-web-seo" className="text-2xl sm:text-3xl font-bold syne-font leading-tight">
                Professional Solar Website + <span className="red-text">AI SEO</span>
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-body,#4b5563)] leading-relaxed">
                Get discovered online before your competitors. Every SolarOS account includes a professionally
                designed solar website with AI-powered local SEO.
              </p>
              <ButtonLink href="#contact" className="inline-block">
                Get Your Solar Website Live in Days
              </ButtonLink>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-body,#4b5563)] mb-4">
                Features
              </h3>
              <FeatureList items={websiteSeoFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CRM & Quotation */}
      <section className="bg-white primary-black py-16 md:py-24 border-y border-black/5" aria-labelledby="solaros-crm">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="space-y-4 lg:order-2">
              <h2 id="solaros-crm" className="text-2xl sm:text-3xl font-bold leading-tight">
                Close More Deals with Smart <span className="red-text">CRM & Quotations</span>
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-body,#4b5563)] leading-relaxed">
                Manage leads, quotations, follow-ups, and sales pipelines from one centralized dashboard.
              </p>
              <div className="rounded-xl border border-support-blue-border bg-[#f0f5ff] px-4 py-3 text-sm font-semibold primary-black">
                Workflow: Lead → Quotation → Follow-Up → Approval → Invoice
              </div>
            </div>
            <div className="lg:order-1">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-body,#4b5563)] mb-4">
                Features
              </h3>
              <FeatureList items={crmFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Stock */}
      <section className="secondary-background primary-black py-16 md:py-24" aria-labelledby="solaros-stock">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="space-y-4">
              <h2 id="solaros-stock" className="text-2xl sm:text-3xl font-bold leading-tight">
                Inventory & Material Management Built for <span className="red-text">Solar</span>
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-body,#4b5563)] leading-relaxed">
                Track every solar component across warehouses, installation sites, and ongoing projects.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-body,#4b5563)] mb-4">
                Features
              </h3>
              <FeatureList items={stockFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. GST */}
      <section className="bg-white primary-black py-16 md:py-24 border-y border-black/5" aria-labelledby="solaros-gst">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="space-y-4 lg:order-2">
                <h2 id="solaros-gst" className="text-2xl sm:text-3xl font-bold leading-tight">
                GST Billing & <span className="red-text">Payment Automation</span>
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-body,#4b5563)] leading-relaxed">
                Create GST-compliant invoices, track payments, and automate financial workflows.
              </p>
            </div>
            <div className="lg:order-1">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-body,#4b5563)] mb-4">
                Features
              </h3>
              <FeatureList items={gstFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Google Business */}
      <section className="secondary-background primary-black py-16 md:py-24" aria-labelledby="solaros-gbp">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="space-y-4">
              <h2 id="solaros-gbp" className="text-2xl sm:text-3xl font-bold leading-tight">
                Manage Your <span className="red-text">Google Presence</span> Automatically
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-body,#4b5563)] leading-relaxed">
                Increase local visibility and generate more leads with integrated Google Business tools.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-body,#4b5563)] mb-4">
                Features
              </h3>
              <FeatureList items={gbpFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Analytics */}
      <section className="bg-white primary-black py-16 md:py-24 border-y border-black/5" aria-labelledby="solaros-analytics">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <SectionHeading
            id="solaros-analytics"
            title="Know Your Numbers Every Day"
            intro="Track leads, revenue, quotations, stock value, and project profitability from one dashboard."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardMetrics.map((m) => (
              <div
                key={m}
                className="rounded-xl border border-black/10 bg-[#FAFAF7] px-4 py-4 text-center text-sm sm:text-base font-semibold primary-black"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Workflow */}
      <section
        className="primary-black-background secondary-text py-16 md:py-24"
        aria-labelledby="solaros-flow"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <h2 id="solaros-flow" className="text-2xl sm:text-3xl md:text-4xl font-bold">
              One Workflow. Zero Double Entry.
            </h2>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              Every module is connected so your business runs smoothly without duplicate work or disconnected
              systems.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {flowSteps.map((step, i) => (
              <li
                key={step}
                className="relative rounded-2xl border border-white/15 bg-white/5 px-4 py-5 text-center"
              >
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full support-blue-background text-sm font-bold secondary-text">
                  {i + 1}
                </span>
                <p className="text-sm font-medium leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 12. Customization */}
      <section className="secondary-background primary-black py-16 md:py-24" aria-labelledby="solaros-custom">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <SectionHeading
            id="solaros-custom"
            title="Need Something Custom? We Build It."
            intro="Every solar business works differently. We customize SolarOS based on your operational workflow and business requirements."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {customizationSteps.map((s, i) => (
              <article key={s.title} className="rounded-2xl border border-black/10 bg-white/70 p-6">
                <span className="text-sm font-bold support-blue-text">Step {i + 1}</span>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-[var(--color-body,#4b5563)] leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Pricing */}
      <section id="pricing" className="bg-white primary-black py-16 md:py-24 border-y border-black/5">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <SectionHeading title="Simple & Transparent Pricing" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-6 ${plan.highlight
                    ? "border-[#1F4FD8] shadow-lg ring-2 ring-[#1F4FD8]/20 bg-[#fafbff]"
                    : "border-black/10 bg-[#FAFAF7]"
                  }`}
              >
                {plan.highlight ? (
                  <p className="text-xs font-bold uppercase tracking-wide support-blue-text mb-2">Popular</p>
                ) : null}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-3xl font-black primary-black">
                  {plan.price}
                  <span className="text-base font-semibold text-[var(--color-body,#4b5563)]">{plan.period}</span>
                </p>
                <p className="mt-4 text-sm font-bold text-[var(--color-body,#4b5563)]">Includes</p>
                <ul className="mt-2 flex-1 space-y-2 text-sm leading-relaxed">
                  {plan.includes.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-[#1F4FD8]" aria-hidden>
                        ✓
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-black/10 bg-secondary-background p-6 text-center space-y-2 max-w-2xl mx-auto">
            <p className="font-semibold primary-black">₹19,000 One-Time Setup Fee</p>
            <p className="text-sm sm:text-base text-[var(--color-body,#4b5563)]">
              30-Day Free Trial · 2-Month Money Back Guarantee
            </p>
          </div>
        </div>
      </section>

      {/* 14. Why SolarOS */}
      <section className="secondary-background primary-black py-16 md:py-24" aria-labelledby="solaros-why">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <SectionHeading id="solaros-why" title="Why Solar Businesses Choose SolarOS" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <article key={w.title} className="rounded-2xl border border-black/10 bg-white/60 p-5">
                <h3 className="text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-[var(--color-body,#4b5563)]">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Testimonials */}
      <section className="bg-white primary-black py-16 md:py-24 border-y border-black/5" aria-labelledby="solaros-testimonials">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <SectionHeading
            id="solaros-testimonials"
            title="Trusted by Solar Businesses Across India"
            intro="Example testimonial"
          />
          <figure className="mx-auto max-w-3xl rounded-2xl border-l-4 border-[#1F4FD8] bg-[#FAFAF7] p-8 shadow-sm">
            <blockquote className="text-lg sm:text-xl leading-relaxed primary-black">
              &ldquo;SolarOS helped us manage leads, stock, quotations, and invoicing from one place. Our
              operations became significantly faster and more organized.&rdquo;
            </blockquote>
          </figure>
        </div>
      </section>

      {/* 16. FAQ — content + schema in page */}
      <section id="faq" className="secondary-background primary-black py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold syne-font text-center mb-10">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-3">
            {solarosFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-black/10 bg-white/50 p-4">
                <summary className="cursor-pointer font-semibold primary-black">{item.question}</summary>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-[var(--color-body,#4b5563)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 17. Final CTA */}
      <section className="primary-black-background secondary-text py-16 md:py-24" aria-labelledby="solaros-final-cta">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 text-center space-y-6">
          <h2 id="solaros-final-cta" className="text-2xl sm:text-3xl md:text-4xl font-bold syne-font max-w-2xl mx-auto">
            Ready to Transform Your Solar Business?
          </h2>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Start your free trial today and streamline your entire solar business with one integrated platform.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 justify-center">
            <ButtonLink href="#contact">Start Free Trial</ButtonLink>
            <ButtonLink
              href={`tel:${siteConfig.phoneE164}`}
              variant="secondary"
              className="inline-flex items-center justify-center gap-2"
              aria-label={`Call PRNIT at ${siteConfig.phone}`}
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="tabular-nums">{siteConfig.phone}</span>
            </ButtonLink>
          </div>
          <p className="text-sm text-white/70 pt-4">SolarOS — Built for Indian Solar Businesses</p>
        </div>
      </section>
    </>
  );
}
