import type { MetadataRoute } from "next";
import { blogPosts } from "@/components/blog/blog-data";
import { siteConfig } from "@/lib/seo/entity";
import { getAllCaseStudySlugs } from "@/lib/work/case-studies";

const base =
  (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "").trim() || siteConfig.siteUrl) ?? "https://prnit.com";

/** Service detail routes under app/services (each has page.tsx). */
const SERVICE_PATHS = [
  "/services/app-development",
  "/services/web-development",
  "/services/cloud",
  "/services/design",
  "/services/e-commerce",
  "/services/cms",
  "/services/ios",
  "/services/android",
  "/services/qa-testing",
  "/services/web-development-faq",
  "/services/tally-to-zoho-books",
] as const;

/** Additional service pages not under /services/ */
const ADDITIONAL_SERVICE_PATHS = [
  "/zoho-consulting-partner",
  "/zoho-migration",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const workEntries: MetadataRoute.Sitemap = getAllCaseStudySlugs().map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICE_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path.endsWith("web-development-faq") ? 0.75 : 0.85,
  }));

  const additionalServiceEntries: MetadataRoute.Sitemap = ADDITIONAL_SERVICE_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/how-we-work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/search`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/solar-os`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    ...serviceEntries,
    ...additionalServiceEntries,
    ...blogEntries,
    ...workEntries,
  ];
}
