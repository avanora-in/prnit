export const clientCountries = [
  { flag: "🇮🇳", name: "India" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇦🇺", name: "Australia" },
] as const;

export const trustBarItems = [
  { label: "Zoho Certified Partner", icon: "badge" as const },
  { label: "Zoho One Implementation", icon: "layers" as const },
  { label: "Multi-Currency & Multi-Tax Ready", icon: "currency" as const },
  { label: "Global Clients", icon: "globe" as const },
  { label: "End-to-End Automation", icon: "automation" as const },
  { label: "Post Go-Live Support", icon: "support" as const },
];

export const globalRegions = [
  {
    id: "india",
    title: "India",
    flag: "🇮🇳",
    body: "Our home base as a Zoho implementation partner in India. GST, TDS, e-invoicing, and Indian compliance built into every Zoho CRM and Zoho Books rollout.",
  },
  {
    id: "uae",
    title: "UAE & Middle East",
    flag: "🇦🇪",
    body: "Your Zoho partner in UAE — VAT-ready Zoho Books implementation, Arabic-aware setups, and multi-currency workflows for import/export businesses.",
  },
  {
    id: "us",
    title: "United States",
    flag: "🇺🇸",
    body: "Zoho implementation partner for US teams — Sales Tax setup, multi-entity Books, USD workflows, and integrations with US payment gateways.",
  },
  {
    id: "uk-au",
    title: "UK & Australia",
    flag: "🇬🇧 🇦🇺",
    body: "Zoho One partner UK and Zoho consultant for Australia — VAT and GST compliance, timezone-flexible delivery, and local tax configurations.",
  },
];

import type { ZohoIndustryIconKey, ZohoProductIconKey } from "@/components/zoho/ZohoIcons";

export const zohoProducts: Array<{
  id: string;
  icon: ZohoProductIconKey;
  name: string;
  body: string;
}> = [
  {
    id: "crm",
    icon: "crm",
    name: "Zoho CRM Implementation",
    body: "End-to-end Zoho CRM implementation — pipeline, lead automation, custom modules, territory management, and CRM-to-Books integration across currencies.",
  },
  {
    id: "books",
    icon: "books",
    name: "Zoho Books Implementation",
    body: "Zoho Books implementation with multi-currency accounting, country-specific tax (GST/VAT/Sales Tax), custom invoices, and vendor automation.",
  },
  {
    id: "creator",
    icon: "creator",
    name: "Zoho Creator Development",
    body: "Zoho Creator developer services — custom apps, client portals, approval workflows, and field tools built to your exact process.",
  },
  {
    id: "analytics",
    icon: "analytics",
    name: "Zoho Analytics Setup",
    body: "Unified dashboards pulling data from across your Zoho stack — sales, finance, HR, operations — in real time.",
  },
  {
    id: "people",
    icon: "people",
    name: "Zoho People Configuration",
    body: "HR, payroll, leave, attendance and performance — configured for local labour law requirements in each market.",
  },
  {
    id: "projects",
    icon: "projects",
    name: "Zoho Projects Setup",
    body: "Project management, milestones, time tracking, resource planning and client-facing portals.",
  },
  {
    id: "inventory",
    icon: "inventory",
    name: "Zoho Inventory Management",
    body: "Multi-warehouse stock management, purchase and sales orders, and seamless Books integration.",
  },
  {
    id: "desk",
    icon: "desk",
    name: "Zoho Desk Configuration",
    body: "Customer support ticketing, SLA rules, automation, and CRM integration for a unified customer view.",
  },
  {
    id: "one",
    icon: "one",
    name: "Zoho One Full Suite",
    body: "Full Zoho suite implementation — connect CRM, Books, People, Desk, and more with single sign-on, cross-module automation, and one data architecture.",
  },
];

export const engagementIncludes = [
  {
    title: "Discovery & Process Mapping",
    body: "We study your business before touching any software. We map your workflows, understand your market requirements, and design the right Zoho architecture.",
  },
  {
    title: "Configuration & Customisation",
    body: "Custom fields, modules, layouts, automation rules, and workflows built to match exactly how your business operates.",
  },
  {
    title: "Data Migration",
    body: "Clean migration from Excel, Tally, Xero, QuickBooks, Salesforce, or any legacy system — your data arrives intact.",
  },
  {
    title: "Automation & Integration",
    body: "Cross-app automations, API integrations, webhook connections, and Deluge scripting — your Zoho apps work as one system.",
  },
  {
    title: "Training & Adoption",
    body: "Role-specific training for every user — remote sessions that work across timezones. Recordings provided.",
  },
  {
    title: "Post Go-Live Support",
    body: "We stay your Zoho partner after launch. Bug fixes, change requests, new features — ongoing, not one-and-done.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Free Discovery Call",
    body: "30 minutes over Zoom or Google Meet. We understand your business, current tools, and what you need Zoho to do.",
  },
  {
    step: 2,
    title: "Scope & Proposal",
    body: "A clear written scope with deliverables, timeline, and fixed pricing. Nothing vague. No hourly surprises.",
  },
  {
    step: 3,
    title: "Build & Configure",
    body: "We implement in a structured environment with testing at every stage before anything goes live.",
  },
  {
    step: 4,
    title: "Training & Go-Live",
    body: "Remote training sessions for your team, user acceptance testing, and a smooth managed cutover.",
  },
  {
    step: 5,
    title: "Ongoing Partnership",
    body: "Retainer or on-demand support — we stay your Zoho partner as you grow and expand.",
  },
];

export const whyPrnit = [
  {
    title: "Full Zoho Expertise",
    body: "We work across the entire Zoho suite — CRM, Finance, HR, Analytics, Custom Apps. Whatever you need, we've built it.",
  },
  {
    title: "Global + Local Configuration",
    body: "We configure Zoho for your specific market — tax laws, currency, compliance, and language requirements handled from day one.",
  },
  {
    title: "We Build. You Run.",
    body: "We do the implementation ourselves, in your account, with your data. You get a working system — not advice and a manual.",
  },
  {
    title: "Fixed Scope. Clear Pricing.",
    body: "Every project has a written scope and fixed price agreed upfront. You know exactly what you're getting before we start a single task.",
  },
];

export const industries: Array<{ id: string; icon: ZohoIndustryIconKey; name: string }> = [
  { id: "trading", icon: "trading", name: "Trading & Distribution" },
  { id: "manufacturing", icon: "manufacturing", name: "Manufacturing & Supply Chain" },
  { id: "real-estate", icon: "real-estate", name: "Real Estate & Property" },
  { id: "ecommerce", icon: "ecommerce", name: "E-commerce & D2C Brands" },
  {
    id: "professional",
    icon: "professional",
    name: "Professional Services (Consulting, Legal, CA)",
  },
  { id: "agency", icon: "agency", name: "Agencies & Creative Studios" },
  { id: "logistics", icon: "logistics", name: "Logistics & Field Services" },
  { id: "education", icon: "education", name: "Education & Training" },
  { id: "healthcare", icon: "healthcare", name: "Healthcare & Clinics" },
  { id: "saas", icon: "saas", name: "SaaS & Technology Companies" },
];

export const testimonials = [
  {
    name: "Rajesh Mehta",
    company: "Apex Distributors Pvt Ltd",
    country: "India",
    flag: "🇮🇳",
    quote:
      "We had CRM in one tool and accounting in another. PRNIT rolled out Zoho CRM and Books with GST, e-invoicing, and branch-wise reporting. Our sales and finance teams finally work from the same numbers.",
  },
  {
    name: "Fatima Al-Hassan",
    company: "GulfTrade FZ-LLC",
    country: "UAE",
    flag: "🇦🇪",
    quote:
      "VAT setup, multi-currency invoicing, and CRM-to-Books sync were done properly the first time. Fixed scope, weekly demos on Zoom, and no surprises on the invoice. Exactly what we needed from a Zoho partner.",
  },
  {
    name: "Michael Torres",
    company: "Northline Field Services LLC",
    country: "United States",
    flag: "🇺🇸",
    quote:
      "They migrated us off spreadsheets without breaking daily operations. Sales tax in Books, pipeline in CRM, and Desk tied to both — all configured for US workflows. Remote delivery across time zones was seamless.",
  },
  {
    name: "Sarah Mitchell",
    company: "Pacific Route Logistics Pty Ltd",
    country: "Australia",
    flag: "🇦🇺",
    quote:
      "Zoho One connected sales, inventory, and support into one system. Australian GST, AUD pricing, and automations between Desk and CRM were set up before go-live. Our team was productive within the first week.",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    subtitle: "Single Product",
    description: "One Zoho product, fully implemented",
    forLabel: "Small teams, single product rollout",
    includes: "Setup, configuration, customisation, training",
    cta: "Get a Quote",
    contactInterest: "I'm interested in the Zoho Starter plan (single product implementation).",
    highlight: false,
  },
  {
    name: "Professional",
    subtitle: "Multi Product",
    description: "2–4 Zoho products, connected and automated",
    forLabel: "Growing businesses needing Zoho CRM implementation plus Finance",
    includes:
      "Everything in Starter + integrations, automation, data migration, full team training",
    cta: "Get a Quote",
    contactInterest:
      "I'm interested in the Zoho Professional plan (multi-product implementation).",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    subtitle: "Zoho One / Custom",
    description: "Full suite or complex custom requirements",
    forLabel: "Larger teams, Zoho Creator apps, advanced analytics, ongoing retainer",
    includes: "Custom modules, API integrations, Deluge scripting, dedicated support contact",
    cta: "Talk to Us",
    contactInterest:
      "I'm interested in Zoho Enterprise / Zoho One full suite implementation.",
    highlight: false,
  },
];
