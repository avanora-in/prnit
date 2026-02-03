"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import BlogPostCard from "./BlogPostCard";
import BlogSidebar from "./BlogSidebar";
import BlogSearchBar from "./BlogSearchBar";
import ButtonLink from "@/components/ui/ButtonLink";
import { blogPosts } from "./blog-data";

const POSTS_PER_PAGE = 6;

export default function BlogPageContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const filteredPosts = searchQuery
    ? blogPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery) ||
          p.excerpt.toLowerCase().includes(searchQuery) ||
          p.category.toLowerCase().includes(searchQuery) ||
          p.tags.some((t) => t.toLowerCase().includes(searchQuery))
      )
    : blogPosts;

  const [displayedCount, setDisplayedCount] = useState(POSTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const displayedPosts = filteredPosts.slice(0, displayedCount);
  const hasMore = displayedCount < filteredPosts.length;

  const loadMorePosts = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount((prev) => Math.min(prev + POSTS_PER_PAGE, filteredPosts.length));
      setIsLoading(false);
    }, 400);
  }, [isLoading, hasMore, filteredPosts.length]);

  useEffect(() => {
    setDisplayedCount(POSTS_PER_PAGE);
  }, [searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && hasMore && !isLoading) loadMorePosts();
      },
      { rootMargin: "80px", threshold: 0 }
    );
    const ref = loadMoreRef.current;
    if (ref) observer.observe(ref);
    return () => { if (ref) observer.unobserve(ref); };
  }, [loadMorePosts, hasMore, isLoading]);

  return (
    <section className="w-full secondary-background py-10 md:py-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        {/* Mobile/Tablet: Search bar at top (hidden on desktop) */}
        <div className="lg:hidden mb-8">
          <BlogSearchBar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Posts - appears first on mobile/tablet, first on desktop (left) */}
          <div className="lg:col-span-2">
            {displayedPosts.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-primary-black/80">No posts found.</p>
                {searchQuery && (
                  <ButtonLink href="/blog" className="mt-4 inline-block">
                    View all posts
                  </ButtonLink>
                )}
              </div>
            ) : (
              <>
                {displayedPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
                <div ref={loadMoreRef} className="py-10 flex justify-center">
                  {isLoading && (
                    <span className="text-sm text-primary-black/60">Loading...</span>
                  )}
                  {!hasMore && displayedPosts.length > POSTS_PER_PAGE && (
                    <span className="text-sm text-primary-black/50">End of list</span>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Sidebar - appears after posts on mobile/tablet, on right side on desktop */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              {/* On mobile/tablet: hide search (already shown above), on desktop: show full sidebar */}
              <div className="hidden lg:block">
                <BlogSidebar hideSearch={false} />
              </div>
              <div className="lg:hidden">
                <BlogSidebar hideSearch={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
