import { buildBreadcrumbSchema } from "@/lib/seo/schema";

/** Labels for `/services/[slug]` BreadcrumbList (position 3). */
const SERVICE_SLUG_LABEL: Record<string, string> = {
  "app-development": "App Development",
  "web-development": "Web Development",
  cloud: "Cloud Solutions",
  design: "UI/UX Design",
  "e-commerce": "E-Commerce",
  cms: "CMS & WordPress",
  ios: "iOS Development",
  android: "Android Development",
  "qa-testing": "QA & Testing",
  "web-development-faq": "Web Development FAQ",
  "tally-to-zoho-books": "Tally to Zoho Books Migration",
  "zoho-migration": "Zoho Migration Services",
};

export function serviceDetailBreadcrumb(slug: string) {
  const label = SERVICE_SLUG_LABEL[slug];
  if (!label) {
    throw new Error(`serviceDetailBreadcrumb: unknown services slug "${slug}"`);
  }
  return buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: label, path: `/services/${slug}` },
  ]);
}
