import { Suspense } from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import BlogPageHero from "@/components/blog/BlogPageHero";
import BlogPageContent from "@/components/blog/BlogPageContent";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Insights on AI, cloud, app development, and digital transformation from the PRNIT team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <BlogPageHero />
      <LogoSlider />
      <PageLead>
        This blog shares practical guidance on AI, cloud architecture, web engineering, and product
        scaling. PRNIT publishes direct, implementation-focused insights that help teams make better
        technical decisions and ship faster with fewer architecture bottlenecks. Publishing cadence:
        2 new posts per month.
      </PageLead>
      <Suspense fallback={<div className="secondary-background py-24 min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[var(--support-blue,#1f4fd8)] border-t-transparent rounded-full animate-spin" /></div>}>
        <BlogPageContent />
      </Suspense>
    </main>
  );
}
