"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  CASE_STUDIES,
  CASE_STUDY_CATEGORY_FILTERS,
  CASE_STUDY_INDUSTRY_FILTERS,
  type CaseStudyCategoryFilter,
  type CaseStudyIndustryFilter,
} from "@/lib/work/case-studies";

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={`ml-2 inline-flex shrink-0 text-[#1F4FD8] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

type FilterDropdownProps<T extends string> = {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (v: T) => void;
  accent?: "blue" | "red";
};

function FilterDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
  accent = "blue",
}: FilterDropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const btnId = useId();

  const accentBar = accent === "red" ? "bg-[var(--red,#8B1E2D)]" : "bg-[var(--support-blue,#1F4FD8)]";

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div ref={rootRef} className="relative w-full">
      <p
        id={`${btnId}-label`}
        className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black/50"
      >
        <span className={`h-px w-6 ${accentBar} rounded-full`} aria-hidden />
        {label}
      </p>

      <button
        type="button"
        id={btnId}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={`${btnId}-label`}
        onClick={() => setOpen((o) => !o)}
        className="group mt-3 flex w-full items-center justify-between gap-3 rounded-2xl border border-black/10 px-4 py-3.5 text-left hover:shadow-sm transition-all duration-200 cursor-pointer"
      >
        <span className="relative flex min-w-0 flex-1 items-center gap-3">
          <span className={`absolute -left-1 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full ${accentBar} opacity-90`} />
          <span className="pl-3 text-base font-black leading-tight primary-black syne-font truncate">{value}</span>
        </span>
        <Chevron open={open} />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={`${btnId}-label`}
          className="absolute left-0 right-0 z-30 mt-2 max-h-64 overflow-y-auto rounded-2xl border border-black/10 bg-white/95 py-2 shadow-[0_20px_50px_rgba(11,31,59,0.14)] backdrop-blur-md ring-1 ring-black/5"
        >
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <li key={opt} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold transition-colors sm:text-base ${selected
                    ? "bg-[#1F4FD8]/10 text-[#1F4FD8]"
                    : "text-primary-black hover:bg-black/[0.04]"
                    }`}
                >
                  {selected ? (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F4FD8] text-[10px] text-white syne-font">
                      ✓
                    </span>
                  ) : (
                    <span className="h-5 w-5 shrink-0 rounded-full border border-black/15" aria-hidden />
                  )}
                  <span className="truncate">{opt}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default function CaseStudyListingSection() {
  const [category, setCategory] = useState<CaseStudyCategoryFilter>("All");
  const [industry, setIndustry] = useState<CaseStudyIndustryFilter>("All");
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return CASE_STUDIES.filter((item) => {
      const catOk = category === "All" || item.category === category;
      const indOk = industry === "All" || item.industry === industry;
      return catOk && indOk;
    });
  }, [category, industry]);

  return (
    <section className="secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-5 sm:py-12 md:px-6 md:py-16">
        <div className="relative rounded-3xl border border-black/10 shadow-sm p-6 sm:p-8">
          <div className="relative">
            <h3 className="font-black transition-colors duration-300 text-xl sm:text-2xl md:text-3xl">
              Filter <span className="red-text">Projects</span>
            </h3>
            <p className="mt-1 max-w-xl text-sm text-black/60">
              Pick a delivery type and industry — cards update instantly.
            </p>

            <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 w-full">
              <FilterDropdown
                label="Category"
                value={category}
                options={CASE_STUDY_CATEGORY_FILTERS}
                onChange={setCategory}
                accent="red"
              />
              <FilterDropdown
                label="Industry"
                value={industry}
                options={CASE_STUDY_INDUSTRY_FILTERS}
                onChange={setIndustry}
                accent="blue"
              />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-sm sm:text-base text-black/70">
            No case studies match these filters. Try &quot;All&quot; for category or industry.
          </p>
        ) : (
          <div className="relative mt-12 py-2">
            <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-[#1F4FD8] opacity-5 blur-[150px]" />
            <div className="pointer-events-none absolute bottom-10 left-0 h-96 w-96 rounded-full bg-[#8B1E2D] opacity-5 blur-[180px]" />

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative m-0 list-none p-0">
              {filtered.map((item, index) => {
                const isLarge = index === 0;
                const isHovered = hoveredCardIndex === index;

                return (
                  <li
                    key={item.slug}
                    className={isLarge ? "md:col-span-2 lg:col-span-2" : undefined}
                  >
                    <Link
                      href={`/work/${item.slug}`}
                      onMouseEnter={() => setHoveredCardIndex(index)}
                      onMouseLeave={() => setHoveredCardIndex(null)}
                      className={`block h-full rounded-xl sm:rounded-2xl p-4 md:p-6 lg:p-8 border cursor-pointer overflow-hidden transition-all duration-500 ${isHovered
                        ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30 border-[#1A4FCB]"
                        : "border-black/5 secondary-background"
                        }`}
                    >
                      <div className="flex h-full flex-col">
                        <div className="mb-4 flex items-start justify-between sm:mb-5 md:mb-6">
                          <span
                            className={`mt-1 text-sm font-bold transition-colors duration-300 sm:mt-2 ${isHovered ? "text-white/80" : "red-text"
                              }`}
                          >
                            {item.industry}
                          </span>

                          <span
                            className={`rounded-full border border-black/5 px-2 py-1 text-xs font-semibold transition-all duration-300 sm:px-3 ${isHovered ? "bg-white/20 text-white" : "bg-black/[0.03] text-[#0f0f0f]"
                              }`}
                          >
                            {item.category}
                          </span>
                        </div>

                        <h3
                          className={`font-black transition-colors duration-300 ${isLarge ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl md:text-2xl"
                            } ${isHovered ? "text-white" : "text-[#0f0f0f]"}`}
                        >
                          {item.title}
                        </h3>



                        <p
                          className={`mt-3 flex-1 leading-relaxed transition-colors duration-300 sm:mt-4 ${isLarge ? "text-base sm:text-lg" : "text-sm sm:text-base"
                            } ${isHovered ? "secondary-text" : "primary-black"}`}
                        >
                          {item.description}
                        </p>

                        <p
                          className={`mt-4 border-t pt-4 text-sm font-semibold leading-snug transition-colors duration-300 ${isHovered
                            ? "border-white/20 text-white/90"
                            : "border-black/10 text-black/90"
                            }`}
                        >
                          {item.resultHeadline}
                        </p>

                        <span
                          className={`mt-5 inline-flex w-full shrink-0 items-center justify-center rounded px-6 py-3 text-xs font-semibold transition-colors sm:text-sm md:w-fit ${
                            isHovered
                              ? "bg-white text-[#1F4FD8] shadow-md"
                              : "bg-[#FAFAF7] text-[#1F4FD8]"
                          }`}
                        >
                          View case study →
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
