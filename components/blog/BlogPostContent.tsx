"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";
import { BlogPost } from "@/components/blog/blog-data";

// Share icons
const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const CopyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

type BlogPostContentProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Animate hero
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }

    // Animate content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: "power2.out" }
      );
    }

  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="scroll-smooth">

      {/* Hero Section with Background Image */}
      <section className="relative w-full secondary-background rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[48px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B] via-[#0B1F3B]/80 to-[#0B1F3B]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4FD8]/30 to-transparent" />
        </div>

        {/* Back Button - Top of Hero */}
        <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 pt-20 md:pt-24 lg:pt-28">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white hover:bg-white/20 transition-all group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 flex items-end min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh]">
          <div ref={heroRef} className="max-w-xl space-y-4">
            {/* Section Label with Pill */}
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border border-white/30">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full bg-white/50" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 text-white syne-font">
                  {post.category}
                </p>
              </div>
              <div className="h-px w-56 sm:w-60 md:w-70 bg-white/30" />
            </div>

            {/* Title */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-white">
                {post.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/80">
                {post.excerpt}
              </p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/70 pt-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{post.date}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5 min read</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                  P
                </div>
                <span>PRNIT Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="relative secondary-background py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 md:pb-20">
            {/* Sidebar - Left */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Share Section */}
                <div className="rounded-2xl border border-black/5 secondary-background p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                      <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                    </div>
                    <h3 className="text-base font-black primary-black uppercase tracking-wide">
                      Share Article
                    </h3>
                    <div className="flex-1 h-px bg-black/5" />
                  </div>
                  <div className="flex flex-wrap divide-x divide-black/5">
                    <button
                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, "_blank")}
                      className="px-4 py-2 hover:rounded-xl hover:bg-[#8B1E2D] hover:text-white text-[#0F0F0F] transition-all duration-300 cursor-pointer"
                      aria-label="Share on Twitter"
                    >
                      <TwitterIcon />
                    </button>
                    <button
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`, "_blank")}
                      className="px-4 py-2 hover:rounded-xl hover:bg-[#8B1E2D] hover:text-white text-[#0F0F0F] transition-all duration-300 cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <LinkedInIcon />
                    </button>
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank")}
                      className="px-4 py-2 hover:rounded-xl hover:bg-[#8B1E2D] hover:text-white text-[#0F0F0F] transition-all duration-300 cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <FacebookIcon />
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className={`px-4 py-2 hover:rounded-xl transition-all duration-300 ${copied
                          ? "bg-green-500 text-white"
                          : "hover:bg-[#8B1E2D] hover:text-white text-[#0F0F0F] cursor-pointer"
                        }`}
                      aria-label="Copy link"
                    >
                      {copied ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>
                </div>

                {/* Tags Section */}
                <div className="rounded-2xl border border-black/5 secondary-background p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                      <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                    </div>
                    <h3 className="text-base font-black primary-black uppercase tracking-wide">
                      Tags
                    </h3>
                    <div className="flex-1 h-px bg-black/5" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?search=${encodeURIComponent(tag)}`}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-black/10 border border-black/5 text-[#0F0F0F] hover:bg-[#8B1E2D] hover:text-white hover:border-[#8B1E2D] transition-all duration-300 cursor-pointer"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="rounded-2xl border border-black/5 secondary-background p-5 sm:p-6 hidden lg:block">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                      <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                    </div>
                    <h3 className="text-base font-black primary-black uppercase tracking-wide">
                      In This Article
                    </h3>
                    <div className="flex-1 h-px bg-black/5" />
                  </div>
                  <nav className="space-y-0">
                    <a href="#introduction" className="flex gap-3 py-3 border-b border-black/5 secondary-background last:border-b-0 group items-center">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black/5 text-xs font-bold group-hover:bg-[#1F4FD8] group-hover:text-white transition-colors">
                        1
                      </span>
                      <span className="relative block transition-colors duration-300 text-sm font-medium ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">
                        Introduction
                      </span>
                    </a>
                    <a href="#key-points" className="flex gap-3 py-3 border-b border-black/5 secondary-background last:border-b-0 group items-center">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black/5 text-xs font-bold group-hover:bg-[#1F4FD8] group-hover:text-white transition-colors">
                        2
                      </span>
                      <span className="relative block transition-colors duration-300 text-sm font-medium ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">
                        Key Points
                      </span>
                    </a>
                    <a href="#conclusion" className="flex gap-3 py-3 border-b border-black/5 secondary-background last:border-b-0 group items-center">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black/5 text-xs font-bold group-hover:bg-[#1F4FD8] group-hover:text-white transition-colors">
                        3
                      </span>
                      <span className="relative block transition-colors duration-300 text-sm font-medium ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">
                        Conclusion
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content - Right */}
            <article className="lg:col-span-9 order-1 lg:order-2">
              <div className="rounded-2xl sm:rounded-3xl border border-black/5 secondary-background p-6 sm:p-8 md:p-10 lg:p-12">
                {/* Article Content */}
                <div className="max-w-none">
                  {/* Introduction Section */}
                  <div id="introduction" className="mb-8">
                    <div className="inline-flex flex-col gap-2 mb-6">
                      <div className="inline-flex items-center gap-2 sm:gap-3">
                        <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                          <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                          Introduction
                        </p>
                      </div>
                      <div className="h-px w-40 sm:w-48 md:w-56 primary-black-background" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base primary-black mb-4">
                      {post.excerpt}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base primary-black">
                      In today&apos;s rapidly evolving digital landscape, staying ahead of the curve is more important than ever.
                      Whether you&apos;re a startup looking to make your mark or an established enterprise seeking to modernize,
                      understanding the latest trends and best practices can make all the difference.
                    </p>
                  </div>

                  {/* Quote Block */}
                  <blockquote className="relative my-8 py-5 px-6 sm:px-8 rounded-2xl border border-black/5 secondary-background">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-1 rounded-full support-blue-background" />
                      <div>
                        <p className="text-xs sm:text-sm md:text-base font-medium primary-black italic mb-4">
                          &quot;The best way to predict the future is to create it. Digital transformation isn&apos;t just about technology—it&apos;s about reimagining how your business operates and delivers value.&quot;
                        </p>
                        <cite className="text-base primary-black not-italic font-semibold">— PRNIT Development Team</cite>
                      </div>
                    </div>
                  </blockquote>

                  {/* Key Points Section */}
                  <div id="key-points" className="mb-8 mt-10">
                    <div className="inline-flex flex-col gap-2 mb-6">
                      <div className="inline-flex items-center gap-2 sm:gap-3">
                        <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                          <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                          Key Points to Consider
                        </p>
                      </div>
                      <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base primary-black mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 my-6">
                    {["User Experience Focus", "Performance Optimization", "Scalable Architecture", "Security First"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-black/5 secondary-background">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full support-blue-background flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm md:text-base font-medium primary-black">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm md:text-base primary-black mb-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>

                  {/* Info Box */}
                  <div className="my-6 p-5 sm:p-6 rounded-2xl border border-black/5 secondary-background">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl support-blue-background flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-bold primary-black mb-1 syne-font">Pro Tip</h4>
                        <p className="text-xs sm:text-sm md:text-base primary-black">
                          Always start with a clear strategy before diving into implementation.
                          This saves time and resources in the long run.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion Section */}
                  <div id="conclusion" className="mt-10">
                    <div className="inline-flex flex-col gap-2 mb-6">
                      <div className="inline-flex items-center gap-2 sm:gap-3">
                        <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                          <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                          Conclusion
                        </p>
                      </div>
                      <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base primary-black mb-4">
                      Our team at PRNIT specializes in delivering custom digital solutions that drive
                      measurable business results. From initial concept to final deployment, we work
                      closely with our clients to ensure every project exceeds expectations.
                    </p>
                    <p className="text-xs sm:text-sm md:text-base primary-black">
                      Ready to transform your digital presence? Let&apos;s discuss how we can help bring
                      your vision to life with cutting-edge technology and thoughtful design.
                    </p>
                  </div>
                </div>

                {/* Author Box */}
                <div className="mt-10 pt-8 border-t border-black/5 secondary-background">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-black/5 secondary-background">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl support-blue-background flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0 syne-font">
                      P
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold primary-black syne-font">PRNIT Team</h3>
                      <p className="text-xs sm:text-sm md:text-base primary-black mt-1 mb-3">
                        We&apos;re a team of passionate developers, designers, and strategists dedicated to
                        helping businesses succeed in the digital world.
                      </p>
                      <div className="flex gap-2 divide-x divide-black/5">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:rounded-xl hover:bg-[#8B1E2D] hover:text-white text-[#0F0F0F] transition-all duration-300 cursor-pointer">
                          <TwitterIcon />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:rounded-xl hover:bg-[#8B1E2D] hover:text-white text-[#0F0F0F] transition-all duration-300 cursor-pointer">
                          <LinkedInIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="mt-8 p-6 sm:p-8 rounded-2xl support-blue-background text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 syne-font">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 mb-6 max-w-lg mx-auto">
                    Let&apos;s discuss how we can help transform your ideas into reality.
                  </p>
                  <ButtonLink href="#contact" variant="secondary" className="block w-fit mx-auto">
                    Get in Touch
                  </ButtonLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts - Same layout as blog listing page */}
      {relatedPosts.length > 0 && (
        <section className="secondary-background pb-20 md:pb-24">
          <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
            <div className="mb-8">
              <div className="inline-flex flex-col gap-2 mb-4">
                <div className="inline-flex items-center gap-2 sm:gap-3">
                  <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                    <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                    Keep Reading
                  </p>
                </div>
                <div className="h-px w-56 sm:w-60 md:w-70 primary-black-background" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
                Related <span className="font-black red-text">Articles</span>
              </h2>
            </div>

            {/* Same card layout as blog listing */}
            <div>
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 sm:py-8 border-b border-black/5 secondary-background last:border-b-0 group">
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="block w-full sm:w-48 md:w-56 shrink-0 rounded-lg overflow-hidden bg-black/5 aspect-[16/10] sm:aspect-square"
                  >
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover hover:opacity-95 transition-opacity"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm md:text-base font-semibold support-blue syne-font">
                      {relatedPost.category} · {relatedPost.date}
                    </p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="mt-1 text-lg sm:text-xl font-bold group-hover:text-[#8B1E2D] line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="mt-2 text-sm primary-black line-clamp-2 leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {relatedPost.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs primary-black">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <ButtonLink href={`/blog/${relatedPost.slug}`} className="block w-fit mt-4 md:mt-6 lg:mt-8">Read More</ButtonLink>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <ButtonLink href="/blog">
                View All Posts
              </ButtonLink>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
