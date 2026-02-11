"use client";

import { useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BlogSearchBar() {
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("search") ?? "";
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value?.trim() ?? "";
    if (value) {
      window.location.href = `/blog?search=${encodeURIComponent(value)}`;
    }
  };

  const hasActiveSearch = !!urlSearch;

  return (
    <div className="rounded-2xl border border-[rgba(15,15,15,0.08)] p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
          <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
        </div>
        <h5 className="text-base md:text-lg xl:text-xl font-black primary-black leading-normal uppercase tracking-wide">
          Search
        </h5>
        <div className="flex-1 h-px bg-black/5" />
      </div>
      <form ref={formRef} onSubmit={handleSearch} className="relative">
        <input
          key={urlSearch}
          ref={inputRef}
          type="text"
          name="q"
          defaultValue={urlSearch}
          placeholder="Search articles..."
          className="w-full pl-4 pr-11 py-3 rounded-xl border border-[rgba(15,15,15,0.1)] bg-white text-sm primary-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--support-blue,#1f4fd8)] focus:border-transparent transition-shadow"
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={() => formRef.current?.requestSubmit()}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-[rgba(15,15,15,0.05)] transition-colors cursor-pointer"
          aria-label="Search"
        >
          <svg className="w-5 h-5 primary-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
      {hasActiveSearch && (
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium support-blue hover:text-[#8b1e2d] hover:underline transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Clear & view all
        </Link>
      )}
    </div>
  );
}
