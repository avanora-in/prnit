"use client";

import Link from "next/link";
import { blogPosts, recentComments } from "./blog-data";
import BlogSearchBar from "./BlogSearchBar";

function SidebarBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[rgba(15,15,15,0.08)] p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
          <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
        </div>
        <h3 className="text-base font-black primary-black uppercase tracking-wide">
          {title}
        </h3>
        <div className="flex-1 h-px bg-black/5" />
      </div>
      {children}
    </div>
  );
}

interface BlogSidebarProps {
  hideSearch?: boolean;
}

export default function BlogSidebar({ hideSearch = false }: BlogSidebarProps) {
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <aside className="space-y-6 sm:space-y-8">
      {!hideSearch && <BlogSearchBar />}

      <SidebarBlock title="Recent Posts">
        <ul className="space-y-0">
          {recentPosts.map((post, i) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex gap-3 py-3.5 group items-center"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black/5 text-xs font-bold group-hover:bg-[#1F4FD8] group-hover:text-white transition-colors">
                  {i + 1}
                </span>
                <span className="relative text-sm font-medium line-clamp-1 transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarBlock>

      <SidebarBlock title="Recent Comments">
        <ul className="space-y-6">
          {recentComments.map((comment) => (
            <li
              key={comment.id}
              className="border-b border-[rgba(15,15,15,0.07)] pb-6 last:border-b-0"
            >
              <p className="text-xs font-bold support-blue mb-1">{comment.author}</p>
              <Link
                href={`/blog/${comment.postSlug}`}
                className="relative text-sm font-semibold line-clamp-1 mb-1.5 transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit"
              >
                {comment.postTitle}
              </Link>
              <p className="text-xs primary-black/70 line-clamp-2">&ldquo;{comment.excerpt}&rdquo;</p>
            </li>
          ))}
        </ul>
      </SidebarBlock>
    </aside>
  );
}
