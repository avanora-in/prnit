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

export type CaseStudyDemoClientFeedback = {
  /** Placeholder/demo feedback copy until verified client testimonials are approved. */
  quote: string;
  attribution: string;
};

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
  /** Placeholder/demo feedback, not a verified client testimonial. */
  demoClientFeedback: CaseStudyDemoClientFeedback;
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
  /** Full narrative content for the unified case study layout */
  narrative: CaseStudyNarrative;
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
      demoClientFeedback: {
        quote:
          "We used to spend too much time checking different places before making a simple operational decision. Having inventory, orders, returns, and accounting connected in one workflow made daily reviews much clearer.",
        attribution: "Operations Lead",
      },
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
      demoClientFeedback: {
        quote:
          "The biggest shift was confidence in the numbers. Product costs, invoices, and margin no longer felt like separate conversations, so pricing discussions became much easier to handle.",
        attribution: "Business Owner",
      },
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
    slug: "saas-growth-platform-optimization",
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
    narrative: {
      heroHeadline: ["A Growing SaaS Platform", "Hit Performance Walls.", "We Made Shipping Feel Safe Again."],
      heroSubtext:
        "A Series A B2B SaaS product was carrying real customer growth, but peak-hour latency and risky deployments were pulling engineers away from the roadmap.",
      numbersBar: [
        { label: "API speed", value: "41%", description: "Faster p95 API response after optimization" },
        { label: "Incidents", value: "62%", description: "Fewer production incidents after reliability work" },
        { label: "Throughput", value: "2.1x", description: "Release throughput without adding headcount" },
      ],
      problemHeading: "The product was growing faster than the platform underneath it.",
      problemSubheading:
        "Leadership needed more roadmap velocity, but engineering time was being spent on latency spikes, incident response, and deployments that felt fragile.",
      problemCards: [
        {
          icon: "bolt",
          title: "Peak-hour APIs slowed down",
          description:
            "The busiest read paths could not keep pace with customer usage. Latency was especially visible in flows that mattered most to paying accounts.",
        },
        {
          icon: "alert-circle",
          title: "Production incidents stole roadmap time",
          description:
            "Engineers were pulled into firefighting instead of product work, which made planning less predictable and slowed visible progress.",
        },
        {
          icon: "rocket",
          title: "Deployments felt risky",
          description:
            "Releases needed safer rollout mechanics so the team could ship more often without treating every production change like a gamble.",
        },
        {
          icon: "chart-bar",
          title: "Signals were too noisy",
          description:
            "Leadership did not have a clear view of where engineering effort was going or which reliability investments would pay back first.",
        },
      ],
      deeperProblemHeading: "The real cost was not just slower APIs. It was slower decision-making.",
      deeperProblemInsights: [
        {
          text: "When reliability work is invisible, every team debates symptoms instead of seeing the highest-leverage fixes clearly.",
        },
        {
          text: "Risky deployments create a hidden tax on product velocity because engineers spend more energy avoiding failure than improving the product.",
        },
        {
          text: "Without measurable SLOs, leadership cannot tell whether reliability is improving or simply getting quieter for a week.",
        },
      ],
      whatWeDidHeading: "We treated reliability as a product surface.",
      whatWeDidBody:
        "We profiled the hottest request paths, improved queries and indexes, moved heavy workflows into async processing, added caching where it matched real user journeys, and strengthened releases with staged rollouts, feature flags, and instrumentation for critical flows.",
      whatWeDidCaption:
        "The implementation details stayed specific to the client's architecture, but the work centered on measurable SLOs and incremental production-safe improvements.",
      resultHeading: "The platform delivered 41% faster p95 API response, 62% fewer incidents, and 2.1x release throughput.",
      beforeItems: [
        { text: "Peak-hour API latency was hurting important user journeys" },
        { text: "Engineers lost roadmap time to incident response" },
        { text: "Deployments felt risky and slowed release cadence" },
        { text: "Heavy workflows blocked request paths" },
        { text: "Leadership lacked clear reliability signals" },
        { text: "Optimization work competed with feature delivery" },
      ],
      afterItems: [
        { text: "p95 API response improved by 41%" },
        { text: "Production incidents dropped by 62%" },
        { text: "Release throughput increased 2.1x" },
        { text: "Heavy workflows moved behind async processing" },
        { text: "Critical flows gained staged rollout and instrumentation" },
        { text: "The team shipped faster without adding headcount" },
      ],
      demoClientFeedback: {
        quote:
          "The work gave our team clearer signals and safer release habits. Instead of guessing where reliability work mattered most, we could focus on the parts of the product that were actually slowing us down.",
        attribution: "Department Head",
      },
      soundFamiliarHeading: "This problem is common across scaling software products.",
      soundFamiliarSubtext: "We see similar reliability and release pressure in:",
      soundFamiliarTags: [
        "B2B SaaS Platforms",
        "Usage-Based Software Products",
        "Post-Funding Product Teams",
        "API-Heavy Web Apps",
        "Cloud-Native Platforms",
      ],
      soundFamiliarClosing:
        "If your engineers are firefighting instead of shipping, performance is already a business problem.",
      ctaHeading: "Scaling past your current architecture? Book a free call and we will review where performance, reliability, and release flow are holding you back.",
      ctaSubtext: "",
    },
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
    narrative: {
      heroHeadline: ["Cargo Booking, Tracking,", "and Dispatch", "Moved Into One Flow."],
      heroSubtext:
        "A regional logistics operator needed customers, drivers, and operations to work from the same shipment truth from quote to proof of delivery.",
      numbersBar: [
        { label: "Platform", value: "Web + App", description: "Unified delivery experience across customer, driver, and ops surfaces" },
        { label: "Dispatch", value: "35%", description: "Faster dispatch cycle time after workflow consolidation" },
        { label: "Traceability", value: "Single", description: "Audit trail from quote to delivery" },
      ],
      problemHeading: "The logistics operation was moving freight, but the information moved too slowly.",
      problemSubheading:
        "Customers could not self-serve, drivers updated status through disconnected channels, and dispatch saw SLA risk only after exceptions had already grown.",
      problemCards: [
        { icon: "clipboard", title: "Bookings lived outside the system", description: "Shippers relied on manual handoffs instead of a customer portal for booking, status, and notifications." },
        { icon: "map", title: "Dispatch lacked live exception context", description: "Operations needed a live map and KPI strip to spot delays before they became missed commitments." },
        { icon: "truck", title: "Driver workflows were fragmented", description: "Pickup, delivery status, and proof-of-delivery capture needed to be simple enough for field use." },
        { icon: "file-x", title: "The audit trail was incomplete", description: "Quote, assignment, delivery, and settlement records were scattered across spreadsheets and exports." },
      ],
      deeperProblemHeading: "Every disconnected handoff made service quality harder to protect.",
      deeperProblemInsights: [
        { text: "Dispatchers were reacting to delays instead of managing exceptions with live operational context." },
        { text: "Customers lacked confidence because shipment visibility depended on staff manually relaying updates." },
        { text: "Finance and operations had to reconstruct what happened after the delivery instead of relying on one event trail." },
      ],
      whatWeDidHeading: "We mapped the real operating flow before designing screens.",
      whatWeDidBody:
        "We modeled quote, assign, execute, and settle as one operational flow, then built role-specific surfaces: a customer booking and tracking portal, driver mobile workflows for status and POD capture, a dispatch dashboard with live map and exceptions, and integrations for pricing rules and legacy TMS exports.",
      whatWeDidCaption: "The build focused on practical logistics workflows, live visibility, and keeping legacy exports available where the business still needed them.",
      resultHeading: "The client gained one platform for customers, drivers, and ops from quote to proof of delivery.",
      beforeItems: [
        { text: "Customers could not self-serve shipment booking" },
        { text: "Dispatch saw SLA risk too late" },
        { text: "Driver updates were captured through disconnected tools" },
        { text: "Proof of delivery required manual follow-up" },
        { text: "Pricing and TMS exports lived outside the main workflow" },
        { text: "Quote-to-delivery history was difficult to audit" },
      ],
      afterItems: [
        { text: "Customer booking and tracking portal with notifications" },
        { text: "35% faster dispatch cycle time" },
        { text: "Driver mobile workflows for pickup, status, and POD" },
        { text: "Live map, exceptions, and KPI strip for dispatch" },
        { text: "Pricing rules and legacy TMS exports integrated" },
        { text: "Single audit trail from quote to delivery" },
      ],
      demoClientFeedback: {
        quote:
          "Bringing booking, driver updates, dispatch, and delivery history into one flow made the operation easier to follow. The team could see exceptions sooner instead of piecing together updates after the fact.",
        attribution: "Operations Lead",
      },
      soundFamiliarHeading: "This problem is common across logistics teams with fast-moving operations.",
      soundFamiliarSubtext: "We see similar gaps in:",
      soundFamiliarTags: ["Freight Operators", "Last-Mile Delivery Teams", "Regional 3PLs", "Courier Networks", "Field Service Fleets"],
      soundFamiliarClosing: "If dispatch, drivers, and customers do not share the same shipment truth, exceptions will keep arriving late.",
      ctaHeading: "Need a clearer logistics operating system? Book a free call and we will map where visibility is breaking down.",
      ctaSubtext: "",
    },
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
    narrative: {
      heroHeadline: ["A Clinic Front Desk", "Was Buried in Repeat Calls.", "Patients Needed a Calmer Portal."],
      heroSubtext:
        "A multi-location healthcare brand needed secure self-service for appointments, records, and care-team messaging without weakening access controls.",
      numbersBar: [
        { label: "Calls", value: "28%", description: "Drop in routine call volume" },
        { label: "Access", value: "RBAC", description: "Role-based access by site" },
        { label: "UI", value: "AA-ready", description: "Accessibility-first interface patterns" },
      ],
      problemHeading: "Patients needed simple digital access, and staff needed fewer repetitive tasks.",
      problemSubheading:
        "The practice had to reduce phone load while keeping healthcare-grade expectations around roles, audit logs, encryption, and accessibility.",
      problemCards: [
        { icon: "phone", title: "Routine calls consumed staff time", description: "Reschedules, forms, and basic record requests repeatedly landed with the front desk." },
        { icon: "calendar", title: "Appointment flow needed self-service", description: "Patients needed a clearer way to book, reschedule, and receive reminders without calling each location." },
        { icon: "lock", title: "Access rules could not be an afterthought", description: "Multi-location teams needed site-aware permissions, audit logs, and secure document handling." },
        { icon: "users", title: "The UI had to work for older adults", description: "Content hierarchy and interaction patterns had to stay calm, readable, and accessible." },
      ],
      deeperProblemHeading: "The real cost was staff attention being spent on work patients could safely do themselves.",
      deeperProblemInsights: [
        { text: "Every routine call delayed higher-value patient support and made busy clinic days harder to manage." },
        { text: "Without structured intake, staff had to chase missing forms and documents after appointments were already close." },
        { text: "If security or accessibility felt bolted on, adoption would suffer and clinical teams would keep reverting to phone workflows." },
      ],
      whatWeDidHeading: "We prioritized self-service flows that reduce phone load first.",
      whatWeDidBody:
        "We built appointment self-service with reminders and waitlist hooks, encrypted document upload, patient-friendly record views, care-team messaging aligned to existing EHR handoffs, and accessible UI patterns for older patients and multi-location staff.",
      whatWeDidCaption: "The implementation stayed compliance-minded, with role-based access and secure defaults shaping the product decisions.",
      resultHeading: "Routine call volume dropped 28% while the portal gained secure, accessible patient workflows.",
      beforeItems: [
        { text: "Patients called for routine appointment changes" },
        { text: "Forms and documents created repeat follow-up work" },
        { text: "Records access was difficult for patients to navigate" },
        { text: "Care-team messages lacked structured handoff paths" },
        { text: "Permissions needed clearer site-level rules" },
        { text: "Older adults needed a calmer digital front door" },
      ],
      afterItems: [
        { text: "Appointment self-service with reminders and waitlist hooks" },
        { text: "28% drop in routine call volume" },
        { text: "Encrypted upload and patient-friendly record views" },
        { text: "Care-team messaging aligned to EHR handoffs" },
        { text: "Role-based access by site" },
        { text: "AA-ready accessibility-first UI patterns" },
      ],
      demoClientFeedback: {
        quote:
          "Patients needed a calmer way to handle routine requests, and staff needed less repeat work at the front desk. The portal helped move those everyday tasks into a more organized self-service flow.",
        attribution: "Internal Team",
      },
      soundFamiliarHeading: "This problem is common across healthcare teams modernizing patient access.",
      soundFamiliarSubtext: "We see it in:",
      soundFamiliarTags: ["Multi-Location Clinics", "Specialty Practices", "Diagnostic Centers", "Healthcare Networks", "Patient Portals"],
      soundFamiliarClosing: "If your staff handles every routine patient request by phone, your portal is not carrying enough of the workflow.",
      ctaHeading: "Want fewer front-desk calls without compromising access control? Book a free call and we will review your patient workflows.",
      ctaSubtext: "",
    },
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
    narrative: {
      heroHeadline: ["Telehealth Across Web,", "iOS, and Android", "Needed One Patient Truth."],
      heroSubtext:
        "A national telehealth startup needed scheduling, video visits, reminders, and post-visit care plans to behave consistently across web and native apps.",
      numbersBar: [
        { label: "Platforms", value: "3", description: "Web, iOS, and Android using one source of truth" },
        { label: "Visits", value: "18%", description: "More completed visits" },
        { label: "No-shows", value: "22%", description: "Fewer missed appointments" },
      ],
      problemHeading: "Patients were moving between channels, but the experience did not move with them.",
      problemSubheading:
        "Booking on the web did not always match the app, video visits struggled on older devices, and reminders were not consistent enough to reduce no-shows.",
      problemCards: [
        { icon: "devices", title: "Channel state was inconsistent", description: "Patients saw different schedule details depending on whether they used web or mobile." },
        { icon: "video", title: "Video visits needed resilience", description: "Older devices and low-bandwidth conditions made the visit path unreliable for some patients." },
        { icon: "bell", title: "Reminders were fragmented", description: "Push and email reminders needed to reflect the same canonical visit state everywhere." },
        { icon: "file-text", title: "Care plans needed to travel", description: "Post-visit summaries had to remain accessible and useful even when connectivity was limited." },
      ],
      deeperProblemHeading: "The real cost was lost trust at the exact moment patients needed reliability.",
      deeperProblemInsights: [
        { text: "A telehealth journey breaks down quickly when the schedule, reminder, or visit state differs by device." },
        { text: "No-shows are not only a scheduling issue; they create wasted provider time and lower care continuity." },
        { text: "When video fails late, support teams inherit stress that better preflight checks could prevent." },
      ],
      whatWeDidHeading: "We unified the patient and visit model first.",
      whatWeDidBody:
        "We introduced shared auth and profiles across web and native clients, hardened the video visit flow with device capability checks, orchestrated push and email reminders, and added post-visit care plans with offline-friendly summaries.",
      whatWeDidCaption: "The build focused on reliable visit state, resilient media paths, and consistent patient communication across channels.",
      resultHeading: "Completed visits increased 18% and no-shows fell 22% across a consistent web, iOS, and Android experience.",
      beforeItems: [
        { text: "Web booking and app schedules did not always match" },
        { text: "Video visits failed on older or constrained devices" },
        { text: "Reminder timing differed across channels" },
        { text: "Patients lacked one profile across web and apps" },
        { text: "Care plans were harder to access after visits" },
        { text: "Support handled preventable visit issues" },
      ],
      afterItems: [
        { text: "Shared auth and profile across web and native clients" },
        { text: "18% more completed visits" },
        { text: "22% fewer no-shows" },
        { text: "Device capability checks before video visits" },
        { text: "Push and email reminder orchestration" },
        { text: "Offline-friendly post-visit summaries" },
      ],
      demoClientFeedback: {
        quote:
          "The experience felt more consistent once scheduling, reminders, visit access, and care summaries followed the same patient state across web and mobile.",
        attribution: "Product Lead",
      },
      soundFamiliarHeading: "This problem is common across virtual care products.",
      soundFamiliarSubtext: "We see similar needs in:",
      soundFamiliarTags: ["Telehealth Providers", "Remote Care Startups", "Clinic Networks", "Patient Engagement Apps", "Hybrid Care Platforms"],
      soundFamiliarClosing: "If visit state changes by device, patients will feel the gap before your team sees it in metrics.",
      ctaHeading: "Building or repairing a telehealth experience? Book a free call and we will map the patient journey across every channel.",
      ctaSubtext: "",
    },
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
    narrative: {
      heroHeadline: ["A Boutique Hotel Site", "Was Losing Direct Bookings", "to OTA Habits."],
      heroSubtext:
        "An independent hotel group needed a faster, brand-led booking engine that marketing could operate without developer support for every offer.",
      numbersBar: [
        { label: "Direct share", value: "+31%", description: "Increase in direct booking share" },
        { label: "Speed", value: "40%", description: "Faster LCP on key pages" },
        { label: "Campaigns", value: "Self-serve", description: "Promo campaigns managed by marketing" },
      ],
      problemHeading: "The property had a brand worth booking direct, but the funnel did not prove it.",
      problemSubheading:
        "Poor conversion and developer-dependent promotions pushed the hotel toward OTAs even when direct revenue was the better business outcome.",
      problemCards: [
        { icon: "credit-card", title: "Direct booking underperformed", description: "Guests had fewer reasons to complete on the hotel site instead of returning to OTA habits." },
        { icon: "bolt", title: "Speed hurt trust", description: "Key pages needed stronger performance so discovery and checkout felt immediate." },
        { icon: "tag", title: "Promos required developer help", description: "Marketing could not launch targeted offers safely without waiting on engineering." },
        { icon: "bed", title: "Upsells were missed", description: "Packages, room add-ons, and event-led pages needed to be part of the booking path." },
      ],
      deeperProblemHeading: "The real cost was control over revenue moving away from the hotel.",
      deeperProblemInsights: [
        { text: "Every OTA-led booking reduced ownership of the guest relationship and made future direct marketing harder." },
        { text: "Slow pages create doubt during a high-intent purchase where confidence matters." },
        { text: "When campaigns depend on developers, marketing misses windows tied to seasonality, events, and inventory." },
      ],
      whatWeDidHeading: "We rebuilt the booking funnel around speed, trust, and self-serve offers.",
      whatWeDidBody:
        "We delivered high-performance landing templates for packages and events, PMS-aware availability with parity-safe rate rules, room upsells and add-ons in checkout, payment integration, and analytics events for funnel and campaign attribution.",
      whatWeDidCaption: "The approach protected rate parity while giving marketing practical controls for direct-channel growth.",
      resultHeading: "Direct booking share increased 31%, and key pages loaded 40% faster.",
      beforeItems: [
        { text: "The site converted poorly against OTA alternatives" },
        { text: "Targeted offers required developer involvement" },
        { text: "Key pages were slower than the booking moment allowed" },
        { text: "Room upsells and add-ons were not embedded cleanly" },
        { text: "Campaign attribution was difficult to read" },
        { text: "Direct revenue depended too heavily on external channels" },
      ],
      afterItems: [
        { text: "Direct booking share up 31%" },
        { text: "40% faster LCP on key pages" },
        { text: "Self-serve promo campaigns for marketing" },
        { text: "High-performance templates for packages and events" },
        { text: "PMS-aware availability and parity-safe rate rules" },
        { text: "Checkout upsells and analytics events in place" },
      ],
      demoClientFeedback: {
        quote:
          "Marketing had more control over offers without waiting on every small site change. The booking path also felt faster and more aligned with the way we wanted guests to experience the brand.",
        attribution: "Business Owner",
      },
      soundFamiliarHeading: "This problem is common across hospitality teams trying to grow direct revenue.",
      soundFamiliarSubtext: "We see it in:",
      soundFamiliarTags: ["Boutique Hotels", "Resort Groups", "Serviced Apartments", "Event Venues", "Hospitality Marketing Teams"],
      soundFamiliarClosing: "If every offer needs a developer, your booking engine is slowing down revenue.",
      ctaHeading: "Want a stronger direct booking funnel? Book a free call and we will review your current guest path.",
      ctaSubtext: "",
    },
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
    narrative: {
      heroHeadline: ["Editors Needed Speed.", "Readers Needed Performance.", "The Platform Needed Guardrails."],
      heroSubtext:
        "A subscription-led media brand needed modular publishing workflows, paywall paths, and front-end performance that stayed stable during traffic spikes.",
      numbersBar: [
        { label: "Publishing", value: "4x", description: "Faster layout publishing" },
        { label: "Performance", value: "35%", description: "LCP improvement on article pages" },
        { label: "Vitals", value: "Stable", description: "Core Web Vitals held under traffic spikes" },
      ],
      problemHeading: "Editorial ambition was being limited by engineering tickets and page performance.",
      problemSubheading:
        "Editors needed flexible layouts without breaking templates, while readers and subscribers needed fast pages even when traffic surged.",
      problemCards: [
        { icon: "pen", title: "Layout changes required engineering", description: "Editorial teams could not move quickly because every new article treatment depended on developer time." },
        { icon: "image", title: "Modules created page weight", description: "Article pages slowed when editors stacked media and promotional blocks without guardrails." },
        { icon: "lock", title: "Paywall flows created template sprawl", description: "Subscriber journeys needed to stay separate from editorial experiments without multiplying fragile page variants." },
        { icon: "trending-up", title: "Traffic spikes exposed weak caching", description: "High-read posts needed delivery patterns that protected Core Web Vitals under load." },
      ],
      deeperProblemHeading: "The real cost was a slower newsroom and a weaker reader experience at peak moments.",
      deeperProblemInsights: [
        { text: "When publishing relies on tickets, editorial teams cannot respond quickly to campaigns, news cycles, or subscriber experiments." },
        { text: "Performance issues on article pages directly affect reader trust, engagement, and search visibility." },
        { text: "Paywall complexity can quietly spread across templates until every change becomes risky." },
      ],
      whatWeDidHeading: "We gave editors composable tools with performance guardrails.",
      whatWeDidBody:
        "We introduced editor-friendly article modules with previews, paywall and entitlement flows with minimal template sprawl, edge-friendly caching for high-read posts, and subscriber onboarding plus newsletter tie-ins.",
      whatWeDidCaption: "The architecture balanced editorial flexibility with front-end constraints that protected reader experience.",
      resultHeading: "Editors published layouts 4x faster, and article LCP improved 35%.",
      beforeItems: [
        { text: "Every layout tweak needed engineering support" },
        { text: "Article pages slowed under stacked modules" },
        { text: "Paywall logic spread across too many templates" },
        { text: "Traffic spikes threatened Core Web Vitals" },
        { text: "Subscriber onboarding was disconnected from content" },
        { text: "Newsletter tie-ins were harder to manage" },
      ],
      afterItems: [
        { text: "Composable article modules with previews" },
        { text: "4x faster layout publishing" },
        { text: "35% LCP improvement on articles" },
        { text: "Stable vitals under traffic spikes" },
        { text: "Paywall and entitlement flows with less template sprawl" },
        { text: "Subscriber onboarding and newsletter tie-ins connected" },
      ],
      demoClientFeedback: {
        quote:
          "Editors could work with more flexibility without turning each layout change into an engineering request. The guardrails made publishing feel faster without making the site feel fragile.",
        attribution: "Internal Team",
      },
      soundFamiliarHeading: "This problem is common across content businesses with growing editorial needs.",
      soundFamiliarSubtext: "We see similar challenges in:",
      soundFamiliarTags: ["Digital Publishers", "Subscription Media", "Newsrooms", "Content Platforms", "Newsletter-Led Brands"],
      soundFamiliarClosing: "If every layout experiment needs engineering, your CMS is slowing down editorial strategy.",
      ctaHeading: "Need a faster publishing platform? Book a free call and we will review your CMS, paywall, and performance bottlenecks.",
      ctaSubtext: "",
    },
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
    narrative: {
      heroHeadline: ["Marketplace Growth", "Was Outrunning Catalog Control.", "We Centralized the Truth."],
      heroSubtext:
        "A growing marketplace needed seller onboarding, catalog, checkout, buyer apps, and operations tooling to share one inventory and order model.",
      numbersBar: [
        { label: "Catalog", value: "1", description: "Single catalog source of truth" },
        { label: "Buyer apps", value: "Cross-platform", description: "Web and mobile experiences stayed in sync" },
        { label: "Rating", value: "4.8", description: "Average post-launch app rating" },
      ],
      problemHeading: "Sellers, buyers, and ops were looking at different versions of the marketplace.",
      problemSubheading:
        "Duplicated listings, stock drift, and inconsistent delivery promises made the platform harder to trust as seller and buyer activity increased.",
      problemCards: [
        { icon: "cart", title: "Catalog data duplicated", description: "Sellers repeated listing work and product truth drifted between surfaces." },
        { icon: "box", title: "Stock levels diverged", description: "Inventory updates did not consistently reach every channel where buyers made decisions." },
        { icon: "credit-card", title: "Checkout needed split payouts", description: "Marketplace payments required clean order orchestration and seller settlement paths." },
        { icon: "shield", title: "Operations needed better controls", description: "Disputes, compliance checks, and SLA tracking needed a shared admin console." },
      ],
      deeperProblemHeading: "The real cost was buyer confidence being eroded by operational inconsistency.",
      deeperProblemInsights: [
        { text: "When catalog and stock are not centralized, every new sales channel increases the chance of a broken promise." },
        { text: "Seller onboarding friction slows supply growth and makes quality control harder to enforce." },
        { text: "Operations teams cannot resolve disputes quickly if order state and payout context are split across tools." },
      ],
      whatWeDidHeading: "We made APIs the center of catalog, inventory, and order state.",
      whatWeDidBody:
        "We centralized catalog, inventory, and order state behind explicit APIs, then built vendor onboarding and compliance checks, unified checkout with split payouts, buyer iOS/Android apps, and an operations console for disputes and SLA tracking.",
      whatWeDidCaption: "The work kept web storefront and mobile apps as consistent clients on top of shared marketplace logic.",
      resultHeading: "The marketplace gained one catalog truth across web storefront and mobile buyer apps.",
      beforeItems: [
        { text: "Sellers duplicated listings across channels" },
        { text: "Stock drifted between storefront and apps" },
        { text: "Delivery promises differed by purchase channel" },
        { text: "Payout and checkout logic needed clearer orchestration" },
        { text: "Operations lacked one dispute and SLA console" },
        { text: "Buyer experience varied by platform" },
      ],
      afterItems: [
        { text: "One catalog source of truth" },
        { text: "Web and mobile buyer apps in sync" },
        { text: "4.8 average post-launch app rating" },
        { text: "Vendor onboarding, catalog, and compliance checks" },
        { text: "Unified checkout with split payouts" },
        { text: "Operations console for disputes and SLA tracking" },
      ],
      demoClientFeedback: {
        quote:
          "Centralizing the catalog and order flow made the marketplace easier to operate. Sellers, buyers, and the operations team were no longer working from slightly different versions of the same information.",
        attribution: "Operations Lead",
      },
      soundFamiliarHeading: "This problem is common across marketplaces adding sellers and channels.",
      soundFamiliarSubtext: "We see it in:",
      soundFamiliarTags: ["Multi-Vendor Marketplaces", "Retail Platforms", "Seller Networks", "Mobile Commerce Apps", "Marketplace Operators"],
      soundFamiliarClosing: "If catalog truth changes by channel, growth will create more operational cleanup instead of more leverage.",
      ctaHeading: "Need your marketplace to scale cleaner? Book a free call and we will review catalog, checkout, and seller workflows.",
      ctaSubtext: "",
    },
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
    narrative: {
      heroHeadline: ["Trips Were Planned in PDFs.", "Travelers Needed Live Itineraries", "Across Every Device."],
      heroSubtext:
        "A travel tech brand needed web planning, mobile wallet views, companion sharing, and supplier updates to converge into one live trip timeline.",
      numbersBar: [
        { label: "Timeline", value: "Live", description: "Single itinerary timeline across suppliers" },
        { label: "Sharing", value: "Shared", description: "Companion sync with permission levels" },
        { label: "Support", value: "-40%", description: "Itinerary-related support tickets" },
      ],
      problemHeading: "The trip existed in too many static places.",
      problemSubheading:
        "Email threads and PDFs could not keep up when suppliers changed times, companions needed updates, or travelers switched to mobile at the airport.",
      problemCards: [
        { icon: "compass", title: "Itineraries went stale", description: "Static PDFs could not reflect supplier changes quickly enough for travelers and companions." },
        { icon: "users", title: "Companions fell out of sync", description: "Shared trips needed clear permissions and one timeline everyone could trust." },
        { icon: "wifi-off", title: "Mobile needed airport mode", description: "Tickets and summaries had to remain useful when connectivity was poor." },
        { icon: "link", title: "Partners changed schedules", description: "Supplier updates needed webhook ingestion instead of manual support follow-up." },
      ],
      deeperProblemHeading: "The real cost was support load caused by uncertainty during travel.",
      deeperProblemInsights: [
        { text: "A traveler only needs one stale detail to lose confidence in the whole itinerary." },
        { text: "Companion confusion turns into support tickets when sharing is not permissioned and live." },
        { text: "Partner schedule changes create avoidable stress when they do not flow directly into the trip timeline." },
      ],
      whatWeDidHeading: "We modeled trips as a live timeline instead of a document.",
      whatWeDidBody:
        "We built a web planner with drag-and-drop day builder, mobile wallet views for tickets and boarding passes, shareable trip links with permission levels, and partner webhook ingestion for schedule changes.",
      whatWeDidCaption: "The product architecture kept supplier data, traveler edits, and mobile snapshots aligned around one itinerary model.",
      resultHeading: "Itinerary-related support tickets dropped 40% after travelers and companions shared one live timeline.",
      beforeItems: [
        { text: "Travel plans lived in email and PDFs" },
        { text: "Supplier changes made itineraries stale" },
        { text: "Companions saw outdated trip details" },
        { text: "Tickets were hard to use in low-connectivity moments" },
        { text: "Support handled itinerary clarification manually" },
        { text: "Web planning and mobile travel context felt separate" },
      ],
      afterItems: [
        { text: "Live single trip timeline" },
        { text: "40% fewer itinerary-related support tickets" },
        { text: "Web planner with drag-and-drop day builder" },
        { text: "Mobile wallet views for tickets and boarding passes" },
        { text: "Shareable trip links with permission levels" },
        { text: "Partner webhook ingestion for schedule changes" },
      ],
      demoClientFeedback: {
        quote:
          "The live itinerary model made the product feel much more useful during the actual trip. Travelers and companions could rely on the same timeline instead of checking old PDFs or message threads.",
        attribution: "Product Lead",
      },
      soundFamiliarHeading: "This problem is common across travel products that depend on live supplier data.",
      soundFamiliarSubtext: "We see it in:",
      soundFamiliarTags: ["Travel Tech Brands", "Itinerary Products", "Tour Operators", "Trip Planning Apps", "Supplier-Integrated Platforms"],
      soundFamiliarClosing: "If your itinerary is still a static document, every supplier change creates support work.",
      ctaHeading: "Planning a travel product around live updates? Book a free call and we will map the itinerary model with you.",
      ctaSubtext: "",
    },
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
    narrative: {
      heroHeadline: ["A Paid Community", "Outgrew Generic Forum Software.", "Moderation Had to Scale."],
      heroSubtext:
        "A membership-led creator community needed feeds, groups, subscriptions, rich media, native apps, and moderation tools that could grow without losing trust.",
      numbersBar: [
        { label: "Traffic", value: "2x", description: "Traffic handled while trust scores stayed stable" },
        { label: "Apps", value: "Native", description: "iOS and Android apps for members" },
        { label: "Ratings", value: "5★", description: "Store ratings post-launch" },
      ],
      problemHeading: "The community was growing, but the tools were built for a smaller world.",
      problemSubheading:
        "Generic forum software could not handle paid tiers, rich media, mobile-first usage, or the moderation volume that came with growth.",
      problemCards: [
        { icon: "users", title: "Member experience needed modern feeds", description: "Groups and media-rich posts needed to feel native to how members already participated." },
        { icon: "shield", title: "Moderation queues overwhelmed volunteers", description: "Reports, strikes, and role-based workflows needed structure as traffic increased." },
        { icon: "credit-card", title: "Paid tiers needed product hooks", description: "Membership billing had to connect to access and community privileges." },
        { icon: "devices", title: "Mobile-first usage needed native apps", description: "Members expected iOS and Android experiences connected to the same APIs as web." },
      ],
      deeperProblemHeading: "The real cost was member trust becoming harder to protect as the community became more valuable.",
      deeperProblemInsights: [
        { text: "Moderation systems must scale before traffic doubles, because trust breaks faster than features can repair it." },
        { text: "Paid communities need access control and billing hooks to feel invisible when they work and fair when they block." },
        { text: "Mobile apps cannot drift from web behavior without fragmenting the member experience." },
      ],
      whatWeDidHeading: "We built custom community primitives around trust and mobile usage.",
      whatWeDidBody:
        "We delivered home and group feeds with media-rich posts, reporting, strikes, and moderator workflows, native iOS and Android apps for members, and billing hooks for paid tiers using the same APIs as the web product.",
      whatWeDidCaption: "The build prioritized community safety, consistent APIs, and membership mechanics over generic forum conventions.",
      resultHeading: "Traffic doubled while trust scores stayed stable, supported by native apps and scalable moderation.",
      beforeItems: [
        { text: "Generic forum software limited subscriptions and rich media" },
        { text: "Moderation queues overwhelmed volunteers" },
        { text: "Mobile usage was not served by native member apps" },
        { text: "Paid tier access was difficult to connect cleanly" },
        { text: "Reports and strikes lacked structured workflows" },
        { text: "Growth risked weakening member trust" },
      ],
      afterItems: [
        { text: "2x traffic with stable trust scores" },
        { text: "Native iOS and Android apps" },
        { text: "5-star store ratings post-launch" },
        { text: "Home and group feeds with media-rich posts" },
        { text: "Reporting, strikes, and moderator workflows" },
        { text: "Billing hooks for paid tiers" },
      ],
      demoClientFeedback: {
        quote:
          "As the community grew, moderation needed to feel structured instead of reactive. The new workflows gave the team clearer ways to review reports, manage access, and keep the member experience consistent.",
        attribution: "Internal Team",
      },
      soundFamiliarHeading: "This problem is common across communities moving beyond off-the-shelf tools.",
      soundFamiliarSubtext: "We see it in:",
      soundFamiliarTags: ["Paid Communities", "Creator Platforms", "Membership Apps", "Niche Social Networks", "Moderated Forums"],
      soundFamiliarClosing: "If moderation is held together by volunteer heroics, community growth will keep adding risk.",
      ctaHeading: "Growing a paid community product? Book a free call and we will review feeds, billing, and moderation workflows.",
      ctaSubtext: "",
    },
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
    narrative: {
      heroHeadline: ["Dispatch Had One Screen.", "Leadership Had Nightly CSVs.", "The Fleet Needed One Live View."],
      heroSubtext:
        "A mid-size fleet operator needed live maps, exception alerts, KPI views, and finance-ready exports from the same operational model.",
      numbersBar: [
        { label: "Visibility", value: "Live", description: "Fleet map and exception state" },
        { label: "Escalation", value: "50%", description: "Faster escalation on delays" },
        { label: "View", value: "1", description: "Shared ops and leadership picture" },
      ],
      problemHeading: "Dispatch and leadership were managing the same fleet from different realities.",
      problemSubheading:
        "Operational teams used live screens, executives exported CSVs after hours, and SLA breaches were often spotted later than they should have been.",
      problemCards: [
        { icon: "map", title: "Fleet visibility was not shared", description: "Dispatch had operational context that leadership could not see without manual reporting." },
        { icon: "bell", title: "Exceptions surfaced late", description: "Delay, idle-time, and SLA-risk alerts needed rules that escalated issues earlier." },
        { icon: "chart-bar", title: "KPI views lacked drill-down", description: "Executives needed fleet-level indicators with a path back to jobs and vehicles." },
        { icon: "file-text", title: "Billing close still needed exports", description: "Finance workflows required scheduled exports, not screenshots or one-off CSV assembly." },
      ],
      deeperProblemHeading: "The real cost was decisions being made after the operational moment had already passed.",
      deeperProblemInsights: [
        { text: "Late SLA visibility turns manageable exceptions into customer-facing issues." },
        { text: "Leadership dashboards are only useful when they connect back to the job and vehicle signals behind the metric." },
        { text: "Finance reconciliation slows down when operational truth and billing outputs are treated as separate systems." },
      ],
      whatWeDidHeading: "We streamed vehicle and job signals into one operational model.",
      whatWeDidBody:
        "We built a live map with vehicle and job states, alert rules for delays, idle time, and SLA risk, executive KPI views with drill-down, and scheduled exports for billing close.",
      whatWeDidCaption: "The dashboard balanced real-time dispatch action with leadership visibility and finance outputs.",
      resultHeading: "Delay escalation became 50% faster, and operations and leadership finally shared one live view.",
      beforeItems: [
        { text: "Dispatch and leadership worked from different screens" },
        { text: "SLA breaches were noticed late" },
        { text: "Executives relied on after-hours CSV exports" },
        { text: "Fleet KPIs lacked job-level drill-down" },
        { text: "Billing close required manual reconciliation" },
        { text: "Delay escalation depended on human scanning" },
      ],
      afterItems: [
        { text: "Live fleet map and exception visibility" },
        { text: "50% faster escalation on delays" },
        { text: "One shared view for ops and leadership" },
        { text: "Alert rules for delays, idle time, and SLA risk" },
        { text: "Executive KPI views with drill-down" },
        { text: "Scheduled exports for billing close" },
      ],
      demoClientFeedback: {
        quote:
          "Having dispatch, leadership, and finance work from the same operational view removed a lot of manual follow-up. Exceptions were easier to spot, and exports no longer felt disconnected from the day-to-day work.",
        attribution: "Operations Lead",
      },
      soundFamiliarHeading: "This problem is common across fleet and dispatch-heavy operations.",
      soundFamiliarSubtext: "We see it in:",
      soundFamiliarTags: ["Fleet Operators", "Dispatch Teams", "3PL Networks", "Field Logistics", "Transport Operations"],
      soundFamiliarClosing: "If leadership waits for nightly CSVs, the business is learning about exceptions too late.",
      ctaHeading: "Need live fleet visibility? Book a free call and we will review your dispatch, KPI, and billing workflows.",
      ctaSubtext: "",
    },
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
      demoClientFeedback: {
        quote:
          "VAT, currency conversion, and reconciliation used to require a lot of manual checking. Once those rules were organized inside the accounting workflow, audit preparation felt far more controlled.",
        attribution: "Business Owner",
      },
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
      demoClientFeedback: {
        quote:
          "Commission work stopped feeling like a separate monthly exercise. The team could trace each commission back to the invoice and check payment status without rebuilding the calculation by hand.",
        attribution: "Department Head",
      },
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
