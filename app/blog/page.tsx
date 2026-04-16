import { Suspense } from "react";
import BlogPageHero from "@/components/blog/BlogPageHero";
import BlogPageContent from "@/components/blog/BlogPageContent";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";

export const metadata = {
  title: "Blog | PRNIT - Insights, Updates & Industry Trends",
  description:
    "Stay ahead with the latest articles on web development, AI, cloud solutions, digital transformation, and technology trends from PRNIT.",
};

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
