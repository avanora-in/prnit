import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo/entity";

function siteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ||
    siteConfig.siteUrl ||
    "https://prnit.com"
  );
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const base = siteUrl();
  const url = `${base}${path}`;
  const fullTitle = `${title} | PRNIT`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
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
      description,
      images: [`${base}/og-image.jpg`],
    },
  };
}
