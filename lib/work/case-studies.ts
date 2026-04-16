import type { CaseStudyMetricIconId } from "./case-study-metric-icons";

export type CaseStudyCategory = "Website" | "Website + App";

export type CaseStudyIndustry =
  | "HealthTech"
  | "Logistics"
  | "Hospitality"
  | "Media"
  | "E-commerce"
  | "Travel"
  | "Social"
  | "AI";

export type CaseStudyPlatformOverview = "Website" | "App" | "Both";

export type CaseStudyResultMetric = {
  icon: CaseStudyMetricIconId;
  value: string;
  label: string;
};

export type CaseStudyProjectVisual = {
  src: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  category: CaseStudyCategory;
  industry: CaseStudyIndustry;
  title: string;
  description: string;
  resultHeadline: string;
  outcomeStatement: string;
  /** "Type" pill — engagement or product type */
  typeLabel: string;
  /** "Platform" pill — short label for hero */
  platformShort: string;
  timeline: string;
  clientType: string;
  servicesProvided: string;
  platformOverview: CaseStudyPlatformOverview;
  challenge: string;
  approach: string;
  whatWeBuilt: string[];
  resultMetrics: [CaseStudyResultMetric, CaseStudyResultMetric, CaseStudyResultMetric];
  projectVisuals: readonly CaseStudyProjectVisual[];
};

export const CASE_STUDY_CATEGORY_FILTERS = ["All", "Website", "Website + App"] as const;
export const CASE_STUDY_INDUSTRY_FILTERS = [
  "All",
  "HealthTech",
  "Logistics",
  "Hospitality",
  "Media",
  "E-commerce",
  "Travel",
  "Social",
  "AI",
] as const;

export type CaseStudyCategoryFilter = (typeof CASE_STUDY_CATEGORY_FILTERS)[number];
export type CaseStudyIndustryFilter = (typeof CASE_STUDY_INDUSTRY_FILTERS)[number];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "project-name",
    category: "Website",
    industry: "AI",
    title: "SaaS Growth Platform Optimization",
    description:
      "Architecture and cloud work for a B2B SaaS product hitting performance walls after Series A.",
    resultHeadline: "41% faster APIs, 62% fewer incidents, 2.1x release throughput",
    outcomeStatement:
      "41% faster APIs, 62% fewer production incidents, and 2.1× release throughput — without adding headcount.",
    typeLabel: "B2B SaaS",
    platformShort: "Web",
    timeline: "5 months",
    clientType: "Series A B2B SaaS platform",
    servicesProvided: "Architecture review, backend engineering, cloud optimization, reliability & DevOps",
    platformOverview: "Website",
    challenge:
      "API latency spiked during peak hours and deployments felt risky. Engineers were stuck firefighting incidents instead of shipping the roadmap, and leadership lacked clear signals on where time was going.",
    approach:
      "We treated reliability as a product: profile the hottest paths first, ship incremental wins with measurable SLOs, and pair caching and async work with safer rollout mechanics so the team could move fast without gambling on production.",
    whatWeBuilt: [
      "Query and indexing improvements on the highest-traffic read paths",
      "Async processing for heavy workflows that previously blocked requests",
      "Caching and request-path optimizations aligned to real user journeys",
      "Staged rollouts, feature flags, and instrumentation for critical flows",
    ],
    resultMetrics: [
      { icon: "bolt", value: "41%", label: "Faster p95 API response" },
      { icon: "trend-down", value: "62%", label: "Fewer production incidents" },
      { icon: "rocket", value: "2.1×", label: "Release throughput" },
    ],
    projectVisuals: [
      {
        src: "/assets/saas_growth_platform_optimization_1.jpg",
        alt: "Web application delivery illustration for the B2B SaaS platform performance and reliability engagement",
      },
      {
        src: "/assets/saas_growth_platform_optimization_2.jpg",
        alt: "Design and engineering collaboration concept for API, caching, and release pipeline work on the SaaS product",
      },
    ],
  },
  {
    slug: "cargo-delivery-platform",
    category: "Website + App",
    industry: "Logistics",
    title: "Cargo Delivery Platform",
    description:
      "End-to-end web and mobile experience for booking, tracking, and fleet coordination.",
    resultHeadline: "End-to-end logistics web + mobile solution",
    outcomeStatement: "One platform for customers, drivers, and ops — from quote to proof of delivery.",
    typeLabel: "Logistics operator",
    platformShort: "Web + Mobile",
    timeline: "8 months",
    clientType: "Regional freight and last-mile logistics company",
    servicesProvided: "Product discovery, UI/UX design, web & mobile development, API integration",
    platformOverview: "Both",
    challenge:
      "Teams lived in spreadsheets and disconnected tools. Shippers could not self-serve, and dispatch lacked a live view of exceptions or SLA risk until it was too late.",
    approach:
      "We mapped the real operational flow first — quote, assign, execute, settle — then built a single source of truth with role-specific surfaces so each persona saw only what they needed to act.",
    whatWeBuilt: [
      "Customer booking and tracking portal with notifications",
      "Driver mobile workflows for pickups, status, and POD capture",
      "Dispatch dashboard with live map, exceptions, and KPI strip",
      "Integrations to pricing rules and legacy TMS exports",
    ],
    resultMetrics: [
      { icon: "devices", value: "Web + App", label: "Unified delivery experience" },
      { icon: "timer", value: "35%", label: "Faster dispatch cycle time" },
      { icon: "clipboard", value: "Single", label: "Audit trail quote → delivery" },
    ],
    projectVisuals: [
      {
        src: "/assets/cargo_delivery_platform_1.jpg",
        alt: "Mobile app surfaces for shipper booking, driver status updates, and proof of delivery on the cargo logistics platform",
      },
      {
        src: "/assets/cargo_delivery_platform_2.jpg",
        alt: "End-to-end shipment booking and tracking journey for the freight and last-mile logistics web and mobile build",
      },
    ],
  },
  {
    slug: "healthtech-patient-portal",
    category: "Website",
    industry: "HealthTech",
    title: "Clinical Patient Portal",
    description:
      "Secure web portal for appointments, records access, and care-team messaging.",
    resultHeadline: "HIPAA-minded workflows with a calm, accessible UI",
    outcomeStatement: "Fewer front-desk calls and faster onboarding — with compliance-minded access controls.",
    typeLabel: "Multi-location clinic",
    platformShort: "Web",
    timeline: "4 months",
    clientType: "Multi-location healthcare brand",
    servicesProvided: "UI/UX design, web development, security review, SEO foundations",
    platformOverview: "Website",
    challenge:
      "Patients called for every reschedule and form. Staff were buried in repeat tasks, and the practice needed a calmer digital front door that still respected strict access rules.",
    approach:
      "We prioritized flows that remove phone load first — self-service booking, document intake, and structured messaging — while keeping roles, audit logs, and encryption defaults non-negotiable.",
    whatWeBuilt: [
      "Appointment self-service with reminders and waitlist hooks",
      "Encrypted document upload and patient-friendly record views",
      "Care-team messaging aligned to existing EHR handoffs",
      "Accessible UI patterns and content hierarchy for older adults",
    ],
    resultMetrics: [
      { icon: "phone", value: "28%", label: "Drop in routine call volume" },
      { icon: "lock", value: "RBAC", label: "Role-based access by site" },
      { icon: "star", value: "AA-ready", label: "Accessibility-first UI" },
    ],
    projectVisuals: [
      {
        src: "/assets/clinical_patient_portal_1.jpg",
        alt: "Patient portal UI and UX treatment for appointments, records access, and care-team messaging across clinic locations",
      },
      {
        src: "/assets/clinical_patient_portal_2.jpg",
        alt: "Design system and accessibility-led layout direction for the multi-location healthcare patient portal",
      },
    ],
  },
  {
    slug: "telehealth-companion-app",
    category: "Website + App",
    industry: "HealthTech",
    title: "Telehealth Companion",
    description:
      "Web scheduling plus native apps for video visits, reminders, and post-visit care plans.",
    resultHeadline: "Consistent experience across web, iOS, and Android",
    outcomeStatement: "Higher completed visits and fewer no-shows with one identity layer across web and apps.",
    typeLabel: "Virtual care provider",
    platformShort: "Web + iOS + Android",
    timeline: "7 months",
    clientType: "National telehealth startup",
    servicesProvided: "Mobile development, web development, video stack integration, QA",
    platformOverview: "Both",
    challenge:
      "Video visits failed on older devices, and booking on the web did not match what patients saw in the app. No-shows stayed high because reminders were inconsistent.",
    approach:
      "We introduced a canonical patient and visit model, hardened the media path for low-bandwidth cases, and unified notifications so the same schedule state appeared everywhere.",
    whatWeBuilt: [
      "Shared auth and profile across web and native clients",
      "Resilient video visit flow with device capability checks",
      "Push + email reminder orchestration",
      "Post-visit care plans and offline-friendly summaries",
    ],
    resultMetrics: [
      { icon: "devices", value: "3", label: "Platforms one codebase of truth" },
      { icon: "check", value: "18%", label: "More completed visits" },
      { icon: "bell", value: "22%", label: "Fewer no-shows" },
    ],
    projectVisuals: [
      {
        src: "/assets/telehealth_companion_1.jpg",
        alt: "Telehealth iOS and Android apps with scheduling, video visit entry, and post-visit care plan screens",
      },
      {
        src: "/assets/telehealth_companion_2.jpg",
        alt: "Cross-channel care journey illustration for web scheduling and native telehealth companion delivery",
      },
    ],
  },
  {
    slug: "hospitality-booking-engine",
    category: "Website",
    industry: "Hospitality",
    title: "Boutique Hotel Booking Engine",
    description:
      "Brand-led booking site with dynamic pricing hooks and OTA-style discovery without losing direct revenue.",
    resultHeadline: "Direct bookings up without sacrificing rate parity tools",
    outcomeStatement: "Stronger direct channel revenue with promos and upsells the marketing team can run themselves.",
    typeLabel: "Boutique hotel group",
    platformShort: "Web",
    timeline: "3 months",
    clientType: "Independent boutique hotel group",
    servicesProvided: "UI/UX design, web development, payment integration, technical SEO",
    platformOverview: "Website",
    challenge:
      "The property leaned on OTAs because the site converted poorly and could not launch targeted offers without a developer every time.",
    approach:
      "We rebuilt the booking funnel around speed and trust — sharp brand storytelling up top, a frictionless date/room path, and a promo engine marketing could operate safely.",
    whatWeBuilt: [
      "High-performance landing templates for packages and events",
      "Room upsells and add-ons in-checkout",
      "PMS-aware availability with parity-safe rate rules",
      "Analytics events for funnel and campaign attribution",
    ],
    resultMetrics: [
      { icon: "credit-card", value: "+31%", label: "Direct booking share" },
      { icon: "bolt", value: "40%", label: "Faster LCP on key pages" },
      { icon: "target", value: "Self-serve", label: "Promo campaigns" },
    ],
    projectVisuals: [
      {
        src: "/assets/boutique_hotel_booking_engine_1.jpg",
        alt: "Boutique hotel direct booking funnel with room selection, packages, and promo-driven conversion flows",
      },
      {
        src: "/assets/boutique_hotel_booking_engine_2.jpg",
        alt: "Brand-led hospitality interface refinements for OTA-competitive discovery and checkout performance",
      },
    ],
  },
  {
    slug: "media-publisher-platform",
    category: "Website",
    industry: "Media",
    title: "Publisher Content Platform",
    description:
      "Editorial workflows, paywalls, and performance-first article delivery for a digital media brand.",
    resultHeadline: "Editorial speed + front-end performance for high traffic",
    outcomeStatement: "Editors ship layouts without tickets — and readers get Core Web Vitals that hold under spikes.",
    typeLabel: "Digital publisher",
    platformShort: "Web",
    timeline: "6 months",
    clientType: "Subscription-led digital media brand",
    servicesProvided: "Web development, CMS architecture, performance engineering, paywall integration",
    platformOverview: "Website",
    challenge:
      "Every layout tweak required engineering. Article pages bloated and Core Web Vitals slipped whenever traffic spiked or editors stacked modules.",
    approach:
      "We introduced a modular content system with guardrails, tuned caching and image delivery for article traffic, and separated subscriber flows from editorial experiments.",
    whatWeBuilt: [
      "Composable article modules with editor-friendly previews",
      "Paywall and entitlement flows with minimal template sprawl",
      "Edge-friendly caching strategy for high-read posts",
      "Subscriber onboarding and newsletter tie-ins",
    ],
    resultMetrics: [
      { icon: "pen", value: "4×", label: "Faster layout publishing" },
      { icon: "bolt", value: "35%", label: "LCP improvement on articles" },
      { icon: "trending-up", value: "Stable", label: "Vitals under traffic spikes" },
    ],
    projectVisuals: [
      {
        src: "/assets/publisher_content_platform_1.jpg",
        alt: "Editorial CMS, modular article layouts, and paywall surfaces for the subscription digital publisher platform",
      },
      {
        src: "/assets/publisher_content_platform_2.jpg",
        alt: "Content operations and publishing workflow concept for high-traffic article delivery and subscriber journeys",
      },
    ],
  },
  {
    slug: "ecommerce-marketplace",
    category: "Website + App",
    industry: "E-commerce",
    title: "Multi-vendor Marketplace",
    description:
      "Seller onboarding, catalog, checkout, and buyer apps with shared catalog and order orchestration.",
    resultHeadline: "Single catalog truth across web storefront and mobile buyers",
    outcomeStatement: "One catalog and order model — web storefront plus buyer apps stay in sync.",
    typeLabel: "Marketplace operator",
    platformShort: "Web + Mobile",
    timeline: "10 months",
    clientType: "Growing multi-vendor marketplace",
    servicesProvided: "Platform architecture, web & app development, payments, admin tooling",
    platformOverview: "Both",
    challenge:
      "Sellers duplicated listings and stock drifted between channels. Buyers saw conflicting delivery promises depending on where they purchased.",
    approach:
      "We centralized catalog, inventory, and order state behind explicit APIs, then exposed seller tools and buyer apps as thin, consistent clients on top.",
    whatWeBuilt: [
      "Vendor onboarding, catalog, and compliance checks",
      "Unified checkout with split payouts",
      "Buyer iOS/Android apps on shared API",
      "Operations console for disputes and SLA tracking",
    ],
    resultMetrics: [
      { icon: "cart", value: "1", label: "Catalog source of truth" },
      { icon: "devices", value: "Cross-platform", label: "Buyer apps in sync" },
      { icon: "star", value: "4.8", label: "Avg. post-launch app rating" },
    ],
    projectVisuals: [
      {
        src: "/assets/multi_vendor_marketplace_1.jpg",
        alt: "Multi-vendor marketplace storefront, seller onboarding, and unified catalog across web and buyer mobile apps",
      },
      {
        src: "/assets/multi_vendor_marketplace_2.jpg",
        alt: "Checkout, split payouts, and order orchestration experience for the marketplace platform rebuild",
      },
    ],
  },
  {
    slug: "travel-itinerary-planner",
    category: "Website + App",
    industry: "Travel",
    title: "Itinerary Planner & Trip Wallet",
    description:
      "Plan trips on the web, carry tickets and live updates on mobile, with partner API integrations.",
    resultHeadline: "One itinerary timeline across suppliers and devices",
    outcomeStatement: "Travelers and companions always see the same live itinerary — no more stale PDFs.",
    typeLabel: "Travel tech brand",
    platformShort: "Web + Mobile",
    timeline: "9 months",
    clientType: "B2C travel planning product",
    servicesProvided: "Product design, web & mobile development, partner integrations",
    platformOverview: "Both",
    challenge:
      "Itineraries lived in email and PDFs. When suppliers changed times, companions and devices fell out of sync and support load spiked.",
    approach:
      "We modeled trips as a single timeline with webhooks from partners, share permissions for groups, and mobile-first offline snapshots for airport mode.",
    whatWeBuilt: [
      "Web planner with drag-and-drop day builder",
      "Mobile wallet views for tickets and boarding passes",
      "Shareable trip links with permission levels",
      "Partner webhook ingestion for schedule changes",
    ],
    resultMetrics: [
      { icon: "compass", value: "Live", label: "Single trip timeline" },
      { icon: "users", value: "Shared", label: "Companion sync" },
      { icon: "bolt", value: "−40%", label: "Itinerary-related support tickets" },
    ],
    projectVisuals: [
      {
        src: "/assets/how_we_work_hero_img.svg",
        alt: "Trip planning web experience with day builder and supplier-linked itinerary for the travel itinerary product",
      },
      {
        src: "/assets/banner_illustration.svg",
        alt: "Mobile trip wallet and live itinerary updates for companions across devices on the travel platform",
      },
    ],
  },
  {
    slug: "social-community-platform",
    category: "Website + App",
    industry: "Social",
    title: "Niche Community Platform",
    description:
      "Feeds, groups, moderation tools, and mobile apps for a paid membership community.",
    resultHeadline: "Safe community growth with scalable moderation",
    outcomeStatement: "Member trust stayed high as traffic doubled — moderation scaled with the product.",
    typeLabel: "Paid community",
    platformShort: "Web + Mobile",
    timeline: "12 months",
    clientType: "Membership-led creator community",
    servicesProvided: "Platform engineering, iOS & Android apps, moderation tooling, QA",
    platformOverview: "Both",
    challenge:
      "Generic forum software could not handle subscriptions, rich media, or mobile-first usage. Moderation queues overwhelmed volunteers as the community grew.",
    approach:
      "We built a custom feed and groups model with reporting pipelines, role-based moderation, and native apps hitting the same APIs as the web app.",
    whatWeBuilt: [
      "Home and group feeds with media-rich posts",
      "Reporting, strikes, and moderator workflows",
      "iOS and Android apps for members",
      "Billing hooks for paid tiers",
    ],
    resultMetrics: [
      { icon: "shield", value: "2×", label: "Traffic with stable trust scores" },
      { icon: "devices", value: "Native", label: "iOS & Android apps" },
      { icon: "star", value: "5★", label: "Store ratings post-launch" },
    ],
    projectVisuals: [
      {
        src: "/assets/mobile_app_development.svg",
        alt: "Native member apps with feeds, groups, and moderation actions for the paid niche community platform",
      },
      {
        src: "/assets/banner_illustration.svg",
        alt: "Web community hub with subscriptions, rich media posts, and reporting flows for the membership product",
      },
    ],
  },
  {
    slug: "logistics-fleet-dashboard",
    category: "Website",
    industry: "Logistics",
    title: "Fleet Operations Dashboard",
    description:
      "Live map, exception alerts, and KPI views for dispatch and operations leadership.",
    resultHeadline: "Real-time visibility into fleet and SLA breaches",
    outcomeStatement: "Leaders and dispatch finally share one live picture — no more nightly CSV reconciliation.",
    typeLabel: "Fleet operator",
    platformShort: "Web",
    timeline: "5 months",
    clientType: "Mid-size logistics fleet operator",
    servicesProvided: "Data visualization, web development, real-time pipeline, integrations",
    platformOverview: "Website",
    challenge:
      "Executives exported CSVs after hours while dispatch used a different screen. SLA breaches were noticed late and finance reconciliations dragged.",
    approach:
      "We streamed vehicle and job signals into a single operational model, layered role-specific dashboards, and kept finance exports as first-class outputs.",
    whatWeBuilt: [
      "Live map with vehicle and job states",
      "Alert rules for delays, idle time, and SLA risk",
      "Executive KPI views with drill-down",
      "Scheduled exports for billing close",
    ],
    resultMetrics: [
      { icon: "map", value: "Live", label: "Fleet map & exceptions" },
      { icon: "bolt", value: "50%", label: "Faster escalation on delays" },
      { icon: "chart-bar", value: "1", label: "Ops + leadership single view" },
    ],
    projectVisuals: [
      {
        src: "/assets/design_and_technology.svg",
        alt: "Fleet operations dashboard with live map, job states, and exception alerts for dispatch and leadership users",
      },
      {
        src: "/og-image.jpg",
        alt: "Executive KPI strip and SLA breach visibility for the mid-size logistics fleet operator engagement",
      },
    ],
  },
];

const bySlug = new Map(CASE_STUDIES.map((c) => [c.slug, c]));

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return bySlug.get(slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}

export function getAdjacentCaseStudies(slug: string): {
  prev: CaseStudy | null;
  next: CaseStudy | null;
} {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: i > 0 ? CASE_STUDIES[i - 1]! : null,
    next: i < CASE_STUDIES.length - 1 ? CASE_STUDIES[i + 1]! : null,
  };
}
