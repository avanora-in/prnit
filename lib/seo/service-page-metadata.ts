import type { Metadata } from "next";
import { siteConfig } from "./entity";

function siteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "").trim() ||
    siteConfig.siteUrl
  );
}

/** Consistent SEO for service routes: canonical, Open Graph, Twitter; title works with root `title.template`. */
export function servicePageMetadata(opts: {
  /** Segment only — layout template appends ` | PRNIT` for the document title */
  title: string;
  description: string;
  /** Path starting with `/`, e.g. `/services/web-development` */
  path: string;
}): Metadata {
  const base = siteUrl();
  const url = `${base}${opts.path}`;
  const fullTitle = `${opts.title} | PRNIT`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: opts.description,
      siteName: siteConfig.organizationName,
      locale: "en_IN",
      images: [
        {
          url: `${base}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@prnitsoftware",
      creator: "@prnitsoftware",
      title: fullTitle,
      description: opts.description,
      images: [`${base}/og-image.jpg`],
    },
  };
}
