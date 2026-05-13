import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/seo/entity";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";
import CaseStudyDetailView from "@/components/work/CaseStudyDetailView";
import {
  getAdjacentCaseStudies,
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/lib/work/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return { title: "Case Study" };
  }
  const url = `${siteConfig.siteUrl}/work/${slug}`;
  return {
    title: `${study.title} | PRNIT Case Study`,
    description: study.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${study.title} | PRNIT`,
      description: study.description,
      url,
      siteName: siteConfig.organizationName,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    notFound();
  }

  const { prev, next } = getAdjacentCaseStudies(slug);
  const pageUrl = `${siteConfig.siteUrl}/work/${slug}`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/work" },
    { name: study.title, path: `/work/${slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    author: {
      "@type": "Organization",
      name: siteConfig.organizationName,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.organizationName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    image: `${siteConfig.siteUrl}/og-image.jpg`,
  };

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[breadcrumbSchema, articleSchema]} />
      <CaseStudyDetailView study={study} prev={prev} next={next} />
    </main>
  );
}
