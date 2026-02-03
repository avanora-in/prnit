import { Suspense } from "react";
import BlogPageHero from "@/components/blog/BlogPageHero";
import BlogPageContent from "@/components/blog/BlogPageContent";
import LogoSlider from "@/components/sections/LogoSlider";

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
      <Suspense fallback={<div className="secondary-background py-24 min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[var(--support-blue,#1f4fd8)] border-t-transparent rounded-full animate-spin" /></div>}>
        <BlogPageContent />
      </Suspense>
    </main>
  );
}
