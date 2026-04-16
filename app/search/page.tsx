import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/components/blog/blog-data";
import { siteConfig } from "@/lib/seo/entity";
import ButtonLink from "@/components/ui/ButtonLink";

type Props = {
  searchParams: Promise<{ q?: string | string[] }>;
};

function normalizeQuery(raw: string | string[] | undefined): string {
  if (raw === undefined) return "";
  const s = Array.isArray(raw) ? raw[0] : raw;
  return s.trim();
}

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search PRNIT for blog articles and quick links to services, about, and how we work.",
  robots: { index: true, follow: true },
};

export default async function SearchPage({ searchParams }: Props) {
  const sp = await searchParams;
  const q = normalizeQuery(sp.q);
  const qLower = q.toLowerCase();

  const blogMatches =
    qLower.length > 0
      ? blogPosts.filter((post) => {
          const hay = `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(" ")}`.toLowerCase();
          return hay.includes(qLower);
        })
      : [];

  return (
    <main className="deep-navy scroll-smooth min-h-[60vh]">
      <section className="secondary-background rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[48px]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 py-16 md:py-20 lg:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold primary-black">Search</h1>
          <p className="mt-2 text-sm sm:text-base text-black/80 max-w-2xl">
            Find blog posts or jump to key pages on {siteConfig.organizationName}.
          </p>

          <form action="/search" method="get" className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <label htmlFor="site-search-q" className="sr-only">
              Search query
            </label>
            <input
              id="site-search-q"
              name="q"
              type="search"
              defaultValue={q}
              placeholder="e.g. SaaS, cloud, web development"
              className="flex-1 rounded-lg border border-black/15 bg-white px-4 py-3 text-sm sm:text-base text-black shadow-sm focus:border-[var(--support-blue,#1f4fd8)] focus:outline-none focus:ring-2 focus:ring-[var(--support-blue,#1f4fd8)]/25"
            />
            <button
              type="submit"
              className="rounded-lg bg-[var(--support-blue,#1f4fd8)] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 py-12 md:py-16 text-white">
        {q ? (
          <div className="space-y-6">
            <p className="text-white/90">
              Results for <span className="font-semibold text-white">&quot;{q}&quot;</span>
            </p>
            {blogMatches.length > 0 ? (
              <ul className="space-y-4">
                {blogMatches.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-lg font-semibold text-white underline-offset-4 hover:underline hover:text-white/95"
                    >
                      {post.title}
                    </Link>
                    <p className="mt-1 text-sm text-white/75 max-w-3xl">{post.excerpt}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white/80">
                No blog posts matched that phrase. Try another keyword or explore the links below.
              </p>
            )}
          </div>
        ) : (
          <p className="text-white/80">Enter a keyword to search blog titles and topics.</p>
        )}

        <div className="mt-12 pt-10 border-t border-white/20">
          <h2 className="text-lg font-semibold text-white">Popular destinations</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {[
              { href: "/about", label: "About" },
              { href: "/how-we-work", label: "How we work" },
              { href: "/services", label: "Services" },
              { href: "/services/app-development", label: "App development" },
              { href: "/services/web-development", label: "Web development" },
              { href: "/services/cloud", label: "Cloud" },
              { href: "/blog", label: "Blog" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-full border border-white/25 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/#contact">Contact us</ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}
