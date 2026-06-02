import type { CaseStudyMetricIconId } from "./case-study-metric-icons";

export type CaseStudyCategory = "Website" | "Website + App";

export type CaseStudyIndustry =
  | "HealthTech"
  | "Logistics"
  | "Hospitality"
  | "Media"
  | "E-commerce"
  | "Manufacturing"
  | "Travel"
  | "Social"
  | "AI"
  | "UAE"
  | "Trading";

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

export type NarrativeProblemCard = {
  icon: string;
  title: string;
  description: string;
};

export type NarrativeInsightBlock = {
  text: string;
};

export type NarrativeBeforeAfterItem = {
  text: string;
};

export type NarrativeSoundFamiliarTag = string;

export type CaseStudyNarrative = {
  /** Hero headline (multiline) */
  heroHeadline: string[];
  /** Hero subtext */
  heroSubtext: string;
  /** Numbers bar metrics */
  numbersBar: {
    label: string;
    value: string;
    description: string;
  }[];
  /** Problem section heading */
  problemHeading: string;
  /** Problem section subheading */
  problemSubheading: string;
  /** Problem cards */
  problemCards: NarrativeProblemCard[];
  /** Deeper problem heading */
  deeperProblemHeading: string;
  /** Deeper problem insight blocks */
  deeperProblemInsights: NarrativeInsightBlock[];
  /** What We Did heading */
  whatWeDidHeading: string;
  /** What We Did body */
  whatWeDidBody: string;
  /** What We Did caption (proprietary messaging) */
  whatWeDidCaption: string;
  /** Result heading */
  resultHeading: string;
  /** Before items */
  beforeItems: NarrativeBeforeAfterItem[];
  /** After items */
  afterItems: NarrativeBeforeAfterItem[];
  /** Client quote */
  clientQuote: string;
  /** Client quote attribution */
  clientQuoteAttribution: string;
  /** Sound familiar heading */
  soundFamiliarHeading: string;
  /** Sound familiar subtext */
  soundFamiliarSubtext: string;
  /** Sound familiar tags */
  soundFamiliarTags: NarrativeSoundFamiliarTag[];
  /** Sound familiar closing line */
  soundFamiliarClosing: string;
  /** CTA heading */
  ctaHeading: string;
  /** CTA subtext */
  ctaSubtext: string;
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
  /** Optional narrative content for custom case study layout */
  narrative?: CaseStudyNarrative;
};

export const CASE_STUDY_CATEGORY_FILTERS = ["All", "Website", "Website + App"] as const;
export const CASE_STUDY_INDUSTRY_FILTERS = [
  "All",
  "HealthTech",
  "Logistics",
  "Hospitality",
  "Media",
  "E-commerce",
  "Manufacturing",
  "Travel",
  "Social",
  "AI",
  "UAE",
  "Trading",
] as const;

export type CaseStudyCategoryFilter = (typeof CASE_STUDY_CATEGORY_FILTERS)[number];
export type CaseStudyIndustryFilter = (typeof CASE_STUDY_INDUSTRY_FILTERS)[number];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ecommerce-inventory-automation",
    category: "Website",
    industry: "E-commerce",
    title: "E-Commerce Inventory Automation",
    description:
      "An online retail brand had inventory, orders and accounting in three separate systems. Month-end took 3 days. We fixed it entirely inside Zoho.",
    resultHeadline: "Month-end went from 3 days to 3 hours",
    outcomeStatement:
      "Stock levels accurate and updated in real time. Every order captured and tracked automatically. Returns reflected instantly across all records. One system. One version of the truth.",
    typeLabel: "E-Commerce Brand",
    platformShort: "Web",
    timeline: "4 months",
    clientType: "Online retail brand",
    servicesProvided: "Zoho Books, Zoho Inventory, Zoho CRM integration",
    platformOverview: "Website",
    challenge:
      "Inventory in one platform, orders in another, and accounting in a third. Nobody had the full picture. Every month-end, someone paid for it with their weekend.",
    approach:
      "We designed and built a solution that unified their entire operation inside the Zoho ecosystem. Inventory, orders, customer records, returns and accounting now speak to each other in real time.",
    whatWeBuilt: [
      "Unified inventory, orders and accounting in Zoho ecosystem",
      "Real-time stock level synchronization across all channels",
      "Automated month-end reconciliation from 3 days to 3 hours",
      "Single source of truth for business operations",
    ],
    resultMetrics: [
      { icon: "timer", value: "3 hrs", label: "Month-end reconciliation (was 3 days)" },
      { icon: "devices", value: "1", label: "Unified system of truth" },
      { icon: "bolt", value: "Real-time", label: "Stock and order visibility" },
    ],
    projectVisuals: [
      {
        src: "/assets/custom_ecommerce_development.png",
        alt: "E-commerce inventory and order management system integration with Zoho ecosystem",
      },
      {
        src: "/assets/ecommerce_website_app_development.svg",
        alt: "Unified business operations dashboard showing inventory, orders and accounting in real time",
      },
    ],
    narrative: {
      heroHeadline: [
        "Three Systems. Three Teams.",
        "Three Days Wasted Every Month.",
        "We Connected Everything.",
      ],
      heroSubtext:
        "An online retail brand had their inventory in one platform, orders in another, and accounting in a third. Nobody had the full picture. And every month-end, someone paid for it with their weekend.",
      numbersBar: [
        { label: "Systems", value: "3", description: "Systems that never spoke to each other" },
        { label: "Time Lost", value: "3 days", description: "Lost every single month to manual reconciliation" },
        { label: "Visibility", value: "0", description: "Real-time visibility into stock, revenue or returns" },
      ],
      problemHeading: "They were growing fast. Their systems were falling apart just as fast.",
      problemSubheading:
        "Scaling an e-commerce business is hard enough. Doing it while your data lives in three different places is a disaster waiting to happen.",
      problemCards: [
        {
          icon: "box",
          title: "Stock that lied",
          description:
            "Inventory numbers in their stock system never matched what was actually available. Overselling was a regular occurrence. Customer complaints followed every spike in orders.",
        },
        {
          icon: "file-x",
          title: "Orders lost in translation",
          description:
            "Orders came in from multiple channels. Each channel updated a different system. By the time someone manually reconciled everything, the data was already stale — and some orders had slipped through entirely.",
        },
        {
          icon: "rotate-ccw",
          title: "Returns were a black hole",
          description:
            "When a customer returned a product, three separate systems needed to be updated — manually. Stock rarely got restocked correctly. Refunds took too long. The accounting never balanced.",
        },
        {
          icon: "trending-down",
          title: "Month-end was a crisis",
          description:
            "Reconciling stock levels, order revenue, returns, and accounting took three full days every single month. The finance team worked weekends. Errors were found after the fact. Reports were always slightly wrong.",
        },
      ],
      deeperProblemHeading: "It wasn't just inefficiency. It was decisions being made on bad data.",
      deeperProblemInsights: [
        {
          text: "The business had no real-time view of which products were actually profitable after returns and fulfilment costs.",
        },
        {
          text: "Customer service was making refund decisions without knowing if the item was even back in stock yet.",
        },
        {
          text: "The accountant was building financial reports from data that was 72 hours out of date by the time it was compiled.",
        },
      ],
      whatWeDidHeading: "We fixed it. We're not going to tell you how.",
      whatWeDidBody:
        "The client's problem wasn't that they had the wrong software. They had the right software — just completely disconnected. We designed and built a solution that unified their entire operation inside the Zoho ecosystem. Inventory, orders, customer records, returns and accounting now speak to each other in real time. We're deliberately keeping the details off this page. That conversation happens on a call.",
      whatWeDidCaption:
        "We keep our implementation approach proprietary. Book a call and we'll walk you through everything.",
      resultHeading: "Month-end went from 3 days to 3 hours.",
      beforeItems: [
        { text: "Inventory numbers were always wrong" },
        { text: "Orders fell through the gaps regularly" },
        { text: "Returns caused accounting chaos every time" },
        { text: "3 days of manual reconciliation every month" },
        { text: "Reports built on stale, unreliable data" },
        { text: "No single view of the business anywhere" },
      ],
      afterItems: [
        { text: "Stock levels accurate and updated in real time" },
        { text: "Every order captured and tracked automatically" },
        { text: "Returns reflected instantly across all records" },
        { text: "Month-end reconciliation down to hours not days" },
        { text: "Live reports available to management at any time" },
        { text: "One system. One version of the truth." },
      ],
      clientQuote:
        "We didn't realise how much time we were spending just trying to figure out what was actually happening in our business. Now we just open Zoho and it's all there.",
      clientQuoteAttribution: "Operations Director, E-Commerce Brand, India (Name withheld at client's request)",
      soundFamiliarHeading: "This problem is more common than most businesses admit.",
      soundFamiliarSubtext: "We've seen this exact situation across:",
      soundFamiliarTags: [
        "D2C Brands",
        "Multi-Channel Online Retailers",
        "Wholesale + Online Hybrid Businesses",
        "Marketplace Sellers (Amazon, Flipkart, Noon)",
        "Subscription Box Companies",
      ],
      soundFamiliarClosing: "If your stock, orders and accounting live in different places — this conversation is for you.",
      ctaHeading: "Sound like your business? Book a free 30-minute call. We'll tell you exactly how we'd approach your specific setup — before you commit to anything.",
      ctaSubtext: "",
    },
  },
  {
    slug: "manufacturing-margin-visibility",
    category: "Website",
    industry: "Manufacturing",
    title: "Manufacturing Margin Visibility",
    description:
      "A manufacturing business was invoicing clients, paying suppliers, and running production — all without a single clear view of whether each product was actually making them money. We fixed it entirely inside Zoho.",
    resultHeadline: "For the first time, they knew exactly which products to push and which to reprice",
    outcomeStatement:
      "Real cost per product updated automatically. Margin visible on every product in real time. Price change impact calculated before invoicing. Finance and production finally on the same numbers.",
    typeLabel: "Manufacturing Company",
    platformShort: "Web",
    timeline: "3 months",
    clientType: "Manufacturing company",
    servicesProvided: "Zoho Books, Zoho Inventory integration",
    platformOverview: "Website",
    challenge:
      "Revenue was growing. But nobody could tell if profit was growing with it. In manufacturing, the gap between what you invoice and what you actually keep is everything. This company had no way to measure that gap — in real time or at month end.",
    approach:
      "The client didn't need new software. They needed their existing systems to stop existing in isolation. We built a solution that connected raw material purchasing, production costs, and final invoicing into a single coherent view — so the business could finally see, in real time, whether each product was making or losing money.",
    whatWeBuilt: [
      "Connected raw material purchasing, production costs, and final invoicing",
      "Real-time margin visibility on every product",
      "Automated cost per product calculation",
      "Finance and production on the same numbers",
    ],
    resultMetrics: [
      { icon: "compass", value: "Real-time", label: "Margin visibility per product" },
      { icon: "devices", value: "1", label: "Unified cost and invoice view" },
      { icon: "target", value: "Data-driven", label: "Pricing decisions" },
    ],
    projectVisuals: [
      {
        src: "/assets/custom_ecommerce_development.png",
        alt: "Manufacturing margin visibility system integration with Zoho ecosystem",
      },
      {
        src: "/assets/ecommerce_website_app_development.svg",
        alt: "Real-time product margin dashboard showing costs and profitability",
      },
    ],
    narrative: {
      heroHeadline: [
        "They Knew Their Revenue.",
        "They Had No Idea About Their Actual Margin.",
      ],
      heroSubtext:
        "A manufacturing business was invoicing clients, paying suppliers, and running production — all without a single clear view of whether each product was actually making them money. They were busy. But were they profitable?",
      numbersBar: [
        { label: "Visibility", value: "0", description: "Real-time visibility into per-product profitability" },
        { label: "Systems", value: "3", description: "Disconnected systems handling purchases, production and invoicing" },
        { label: "Decisions", value: "Every month", description: "Decisions made on gut feeling instead of data" },
      ],
      problemHeading: "Revenue was growing. But nobody could tell if profit was growing with it.",
      problemSubheading:
        "In manufacturing, the gap between what you invoice and what you actually keep is everything. This company had no way to measure that gap — in real time or at month end.",
      problemCards: [
        {
          icon: "box",
          title: "Raw materials with no cost trail",
          description:
            "Purchase orders were raised. Materials arrived. But the actual landed cost — including freight, duties, and delays — was never captured against the product it went into. Every cost estimate was a guess.",
        },
        {
          icon: "settings",
          title: "Production costs that disappeared",
          description:
            "Labour, machine time, energy, wastage — none of it was tracked against individual production runs. The cost of making each product was an assumption, not a number. A wrong assumption, as it turned out.",
        },
        {
          icon: "file-x",
          title: "Invoices disconnected from reality",
          description:
            "Sales invoices were raised based on price lists set months ago. Nobody was checking whether those prices still covered actual costs. Some products were being sold below their real cost of production.",
        },
        {
          icon: "trending-down",
          title: "Margin erosion nobody noticed",
          description:
            "By the time the accountant prepared quarterly numbers, the damage was already done. Price increases were always reactive, always late, and always based on incomplete information.",
        },
      ],
      deeperProblemHeading: "The business was making decisions with one eye closed.",
      deeperProblemInsights: [
        {
          text: "The owner knew which clients were buying the most. They had no idea which products were actually worth selling.",
        },
        {
          text: "When raw material prices went up, the impact on final product margin wasn't calculated until weeks later — after dozens of invoices had already gone out at the old price.",
        },
        {
          text: "The finance team and the production team had different numbers for the same costs. Neither set was completely right.",
        },
      ],
      whatWeDidHeading: "We connected the dots. We're not sharing the details here.",
      whatWeDidBody:
        "The client didn't need new software. They needed their existing systems to stop existing in isolation. We built a solution that connected raw material purchasing, production costs, and final invoicing into a single coherent view — so the business could finally see, in real time, whether each product was making or losing money. How we built it is a conversation for a call.",
      whatWeDidCaption:
        "We keep our implementation approach proprietary. Book a call and we'll walk you through everything.",
      resultHeading: "For the first time, they knew exactly which products to push and which to reprice.",
      beforeItems: [
        { text: "No real cost per product — ever" },
        { text: "Price lists updated reactively, months too late" },
        { text: "Production costs tracked in a separate spreadsheet" },
        { text: "Raw material cost increases absorbed silently" },
        { text: "Quarterly financials always a surprise" },
        { text: "Sales team selling unprofitable products unknowingly" },
      ],
      afterItems: [
        { text: "Real cost per product updated automatically" },
        { text: "Margin visible on every product in real time" },
        { text: "Price change impact calculated before invoicing" },
        { text: "Raw material cost increases reflected immediately" },
        { text: "Finance and production finally on the same numbers" },
        { text: "Sales team equipped with live margin data per product" },
      ],
      clientQuote:
        "We'd been in business for eleven years and never actually known our true margin per product. Within a month of going live we repriced four product lines. That decision alone paid for the entire project.",
      clientQuoteAttribution: "Director, Manufacturing Company, India (Name withheld at client's request)",
      soundFamiliarHeading: "If you manufacture, assemble, or process — this is your problem too.",
      soundFamiliarSubtext: "We've solved this for:",
      soundFamiliarTags: [
        "Small & Mid-Size Manufacturers",
        "Custom Order / Made-to-Order Businesses",
        "Assembly & Kitting Operations",
        "Food & Beverage Producers",
        "Export-Oriented Manufacturers",
      ],
      soundFamiliarClosing: "If your costs and your invoices live in different systems — you don't actually know your margin.",
      ctaHeading: "Do you actually know your margin per product? Book a free 30-minute call. We'll look at your current setup and tell you exactly where the visibility gap is.",
      ctaSubtext: "",
    },
  },
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
  {
    slug: "uae-multicurrency-vat-automation",
    category: "Website",
    industry: "UAE",
    title: "UAE Multi-Currency VAT Automation",
    description:
      "A UAE-based trading company was managing AED, USD and INR manually with inconsistent VAT calculations. Audit season was a crisis every quarter. We fixed it in Zoho Books.",
    resultHeadline: "Audit season went from weeks of panic to a one-day review",
    outcomeStatement:
      "Consistent exchange rate policy applied automatically. VAT calculated correctly on every transaction at source. Multi-currency invoices reconciled in real time. Audit preparation reduced to a single day.",
    typeLabel: "Trading Company",
    platformShort: "Web",
    timeline: "3 months",
    clientType: "UAE-based trading company",
    servicesProvided: "Zoho Books configuration, multi-currency setup, VAT compliance automation",
    platformOverview: "Website",
    challenge:
      "A UAE-based trading company was importing goods from India and exporting across the GCC — dealing in AED, USD and INR daily. Their VAT was calculated manually. Their exchange rates were applied inconsistently. And every audit season was a crisis.",
    approach:
      "The client needed their accounting system to handle multi-currency transactions, VAT calculations, and cross-border reconciliation without any manual intervention. We built that — entirely within their existing Zoho Books account, configured specifically for UAE FTA compliance requirements.",
    whatWeBuilt: [
      "Multi-currency transaction handling in Zoho Books",
      "Automated VAT calculation at transaction source",
      "Consistent exchange rate policy application",
      "Real-time cross-border invoice reconciliation",
      "FTA-compliant record maintenance",
    ],
    resultMetrics: [
      { icon: "map", value: "3", label: "Currencies managed automatically" },
      { icon: "check", value: "1 day", label: "Audit preparation (was 2-3 weeks)" },
      { icon: "shield", value: "Compliant", label: "FTA VAT records maintained" },
    ],
    projectVisuals: [
      {
        src: "/assets/custom_ecommerce_development.png",
        alt: "UAE multi-currency VAT automation system with Zoho Books integration",
      },
      {
        src: "/assets/ecommerce_website_app_development.svg",
        alt: "Real-time VAT liability dashboard for UAE trading company",
      },
    ],
    narrative: {
      heroHeadline: [
        "Three Currencies. VAT Compliance.",
        "Cross-Border Suppliers.",
        "All Being Managed in One Excel File.",
      ],
      heroSubtext:
        "A UAE-based trading company was importing goods from India and exporting across the GCC — dealing in AED, USD and INR daily. Their VAT was calculated manually. Their exchange rates were applied inconsistently. And every audit season was a crisis.",
      numbersBar: [
        { label: "Currencies", value: "3", description: "Currencies managed manually every day" },
        { label: "Consistency", value: "0", description: "Consistent exchange rate policy across transactions" },
        { label: "Audit", value: "Every audit", description: "A scramble to reconstruct months of transactions" },
      ],
      problemHeading: "In UAE cross-border trade, the margin for error is zero. Their process had margin for error everywhere.",
      problemSubheading:
        "VAT in the UAE is unforgiving. Exchange rate inconsistencies compound over months. Manual reconciliation across currencies is not a process — it's a liability.",
      problemCards: [
        {
          icon: "dollar-sign",
          title: "Exchange rates applied by feel",
          description:
            "There was no consistent rate policy. Different staff applied different rates on different days. By month end, AED-USD-INR conversions were impossible to reconcile cleanly.",
        },
        {
          icon: "percent",
          title: "VAT calculated transaction by transaction",
          description:
            "Every invoice required manual VAT calculation. Different rates applied to different goods. The risk of error on every single transaction was real — and it happened.",
        },
        {
          icon: "globe",
          title: "Supplier invoices in three currencies",
          description:
            "Indian suppliers invoiced in INR. Some international partners in USD. Local transactions in AED. Each one required manual conversion before it could be entered into the books.",
        },
        {
          icon: "file-warning",
          title: "Audit preparation took weeks",
          description:
            "When FTA audit season came, the finance team spent weeks reconstructing transaction histories, correcting exchange rate mismatches, and explaining VAT discrepancies. Every year.",
        },
        {
          icon: "alert-circle",
          title: "No real-time tax liability view",
          description:
            "The business never knew their actual VAT liability until the accountant calculated it at quarter end. Cash flow planning was impossible. Surprises were guaranteed.",
        },
      ],
      deeperProblemHeading: "This wasn't just an accounting problem. It was a compliance risk.",
      deeperProblemInsights: [
        {
          text: "In the UAE, VAT errors don't just cost money to fix — they attract FTA penalties that can significantly impact a business's standing and relationships.",
        },
        {
          text: "Exchange rate inconsistencies meant profit margins on cross-border deals were never accurately known until well after the deal had closed.",
        },
        {
          text: "The finance team was spending more time correcting data than analysing it. Strategic decisions were being delayed because the numbers couldn't be trusted.",
        },
      ],
      whatWeDidHeading: "We made UAE compliance automatic. Details on a call.",
      whatWeDidBody:
        "The client needed their accounting system to handle multi-currency transactions, VAT calculations, and cross-border reconciliation without any manual intervention. We built that — entirely within their existing Zoho Books account, configured specifically for UAE FTA compliance requirements. The approach is something we walk through on a discovery call, not something we publish on a webpage.",
      whatWeDidCaption:
        "We keep our UAE compliance implementation approach proprietary. Book a call to see exactly how we'd approach your setup.",
      resultHeading: "Audit season went from weeks of panic to a one-day review.",
      beforeItems: [
        { text: "Exchange rates applied inconsistently by different staff" },
        { text: "VAT calculated manually on every transaction" },
        { text: "Supplier invoices in 3 currencies reconciled by hand" },
        { text: "Audit preparation took 2–3 weeks every quarter" },
        { text: "VAT liability unknown until quarter end" },
        { text: "FTA compliance always at risk of human error" },
      ],
      afterItems: [
        { text: "Consistent exchange rate policy applied automatically" },
        { text: "VAT calculated correctly on every transaction at source" },
        { text: "Multi-currency invoices reconciled in real time" },
        { text: "Audit preparation reduced to a single day" },
        { text: "Live VAT liability visible at any point in time" },
        { text: "FTA-compliant records maintained automatically" },
      ],
      clientQuote:
        "Our accountant used to dread every quarter. Last quarter he told me the VAT return took him four hours. It used to take three weeks. That says everything.",
      clientQuoteAttribution: "Managing Director, Trading Company, Dubai, UAE (Name withheld at client's request)",
      soundFamiliarHeading: "If you operate across borders in the UAE — this is your risk too.",
      soundFamiliarSubtext: "We've solved this for:",
      soundFamiliarTags: [
        "UAE Import / Export Businesses",
        "GCC-Based Trading Companies",
        "Indian-Owned Businesses Operating in UAE",
        "Multi-Entity Businesses Across India and UAE",
        "Businesses Preparing for FTA Audits",
      ],
      soundFamiliarClosing:
        "If your VAT is calculated manually and your exchange rates are inconsistent — you have a compliance risk you may not know about yet.",
      ctaHeading: "Is your UAE accounting actually audit-ready?",
      ctaSubtext: "Book a free 30-minute call. We'll review your current Zoho Books setup and tell you exactly where your compliance gaps are.",
    },
  },
  {
    slug: "vendor-commission-automation",
    category: "Website",
    industry: "Trading",
    title: "Vendor Commission Automation",
    description:
      "A trading company was spending 8 hours a month calculating broker commissions manually. We automated the entire process inside Zoho Books. Zero disputes. Zero double payments.",
    resultHeadline: "One billing cycle. Zero manual work. No more disputes.",
    outcomeStatement:
      "Zero manual calculation — runs automatically. Every commission traceable to the exact invoice. Duplicate billing made impossible by the system. Real-time payment status visible at all times.",
    typeLabel: "Trading & Distribution",
    platformShort: "Web",
    timeline: "2 months",
    clientType: "Trading company in India",
    servicesProvided: "Zoho Books automation, commission tracking, billing integration",
    platformOverview: "Website",
    challenge:
      "Every month, their finance team dreaded commission day. Every invoice had to be checked by hand to calculate what each broker was owed. When disputes came up, there was no reliable record. The same commission was occasionally billed twice.",
    approach:
      "The client was already using Zoho Books. They didn't need new software — they needed their existing software to work harder. We designed and built a solution entirely within their Zoho Books account that automated the full commission lifecycle.",
    whatWeBuilt: [
      "Automated commission calculation in Zoho Books",
      "Invoice-to-commission tracking system",
      "Duplicate payment prevention",
      "Real-time payment status visibility",
      "Audit trail for every commission",
    ],
    resultMetrics: [
      { icon: "timer", value: "8 hrs", label: "Manual work eliminated every month" },
      { icon: "check", value: "0", label: "Commission disputes since go-live" },
      { icon: "star", value: "1", label: "Billing cycle to see full ROI" },
    ],
    projectVisuals: [
      {
        src: "/assets/custom_ecommerce_development.png",
        alt: "Vendor commission automation system in Zoho Books",
      },
      {
        src: "/assets/ecommerce_website_app_development.svg",
        alt: "Real-time commission tracking dashboard",
      },
    ],
    narrative: {
      heroHeadline: [
        "From 8 Hours of Manual Work Every Month",
        "to Zero.",
        "Automatically.",
      ],
      heroSubtext:
        "A trading company was calculating broker commissions by hand every month — in spreadsheets, outside their accounting system. We fixed it. Entirely inside Zoho Books.",
      numbersBar: [
        { label: "Manual work", value: "8 hrs", description: "Manual work eliminated every month" },
        { label: "Disputes", value: "0", description: "Commission disputes since go-live" },
        { label: "ROI", value: "1", description: "Billing cycle to see full ROI" },
      ],
      problemHeading: "Every month, their finance team dreaded commission day.",
      problemSubheading:
        "The manual process was error-prone, time-consuming, and created disputes that could have been avoided with a proper system.",
      problemCards: [
        {
          icon: "timer",
          title: "Hours of manual work",
          description: "Every invoice had to be checked by hand to calculate what each broker was owed.",
        },
        {
          icon: "bell",
          title: "No audit trail",
          description: "When disputes came up, there was no reliable record of which invoice generated which commission.",
        },
        {
          icon: "trending-up",
          title: "Double payments",
          description: "The same commission was occasionally billed twice. Nobody knew until the broker called.",
        },
        {
          icon: "lock",
          title: "Zero visibility",
          description: "Management had no idea of total commission liability at any point during the month.",
        },
      ],
      deeperProblemHeading: "This wasn't just a time management problem. It was a risk to business relationships.",
      deeperProblemInsights: [
        {
          text: "Commission disputes strained relationships with brokers who were critical to the business's revenue.",
        },
        {
          text: "Double payments meant direct financial loss that went unnoticed until reconciliation.",
        },
        {
          text: "The finance team was spending valuable time on manual calculations instead of strategic financial planning.",
        },
      ],
      whatWeDidHeading: "We built a system inside Zoho Books that handles it all automatically.",
      whatWeDidBody:
        "The client was already using Zoho Books. They didn't need new software — they needed their existing software to work harder. We designed and built a solution entirely within their Zoho Books account that automated the full commission lifecycle, from the moment an invoice is raised to the moment a broker is paid. We're deliberately not going into the details here — that's what the discovery call is for.",
      whatWeDidCaption:
        "We keep our commission automation approach proprietary. Book a call to see exactly how we'd approach your setup.",
      resultHeading: "One billing cycle. Zero manual work. No more disputes.",
      beforeItems: [
        { text: "6–8 hours of manual work every month" },
        { text: "Commission disputes with no paper trail" },
        { text: "Double payments with no way to prevent them" },
        { text: "Brokers chasing payment status constantly" },
        { text: "Month-end only reconciliation in spreadsheets" },
      ],
      afterItems: [
        { text: "Zero manual calculation — runs automatically" },
        { text: "Every commission traceable to the exact invoice" },
        { text: "Duplicate billing made impossible by the system" },
        { text: "Real-time payment status visible at all times" },
        { text: "Live commission liability updated on every save" },
      ],
      clientQuote:
        "Before this, our finance team dreaded month-end. Now commissions are calculated the moment we save an invoice — we just check and raise the bill. It took us one billing cycle to realise how much time we'd been wasting.",
      clientQuoteAttribution: "Finance Manager, Trading Company, India (Name withheld at client's request)",
      soundFamiliarHeading: "This isn't just a trading company problem.",
      soundFamiliarSubtext: "We've built variations of this for:",
      soundFamiliarTags: [
        "Real Estate Brokers",
        "Distribution Companies",
        "Commission-Based Sales Teams",
        "Service Agencies",
        "Import / Export Businesses",
      ],
      soundFamiliarClosing: "If you pay commissions and track them manually — we should talk.",
      ctaHeading: "Curious how this works?",
      ctaSubtext: "Book a free 30-minute call. We'll show you exactly what we built and whether the same approach makes sense for your business.",
    },
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
