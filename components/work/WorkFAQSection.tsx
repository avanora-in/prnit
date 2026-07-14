"use client";

import { useState, useRef, useLayoutEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const faqData = [
  {
    question: "What types of projects does PRNIT take on?",
    answer:
      "PRNIT builds web apps, mobile apps (iOS & Android), cloud platforms, e-commerce solutions, and business automation systems — primarily for SaaS, healthtech, logistics, fintech, media, hospitality, and manufacturing clients.",
  },
  {
    question: "Does PRNIT share client names or project details publicly?",
    answer:
      "Where clients permit, PRNIT publishes detailed case studies including the problem, solution approach, technology stack, and measurable outcomes. Some projects are shared anonymously to respect NDA agreements.",
  },
  {
    question: "What measurable results has PRNIT delivered for clients?",
    answer:
      "Results vary by project, but documented outcomes include: month-end closing reduced from 3 days to 3 hours, API response times improved by 41%, production incidents reduced by 62%, release throughput increased 2.1x, and quarterly audit work reduced from weeks to a single day.",
  },
  {
    question: "Does PRNIT work with international clients?",
    answer:
      "Yes. PRNIT has delivered projects for clients in India, the UAE, Australia, and the US — including HIPAA-compliant healthcare platforms, UAE VAT-compliant accounting systems, and cross-border logistics platforms.",
  },
  {
    question: "Can I see a case study relevant to my industry?",
    answer:
      "Yes. The work page includes a filter by category (website, app) and industry (logistics, healthtech, e-commerce, SaaS, etc.) so you can view projects most relevant to your sector. You can also contact PRNIT directly for a tailored portfolio walkthrough.",
  },
];

export default function WorkFAQSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const FAQItem = ({
    faq,
    index,
  }: {
    faq: (typeof faqData)[0];
    index: number;
  }) => {
    const isHovered = hoveredIndex === index;
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useLayoutEffect(() => {
      const el = contentRef.current;
      if (!el) return;
      const measure = () => setContentHeight(el.scrollHeight);
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }, [faq.answer]);

    return (
      <div
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`rounded-xl sm:rounded-2xl border overflow-hidden cursor-pointer transition-all duration-[450ms] ease-in-out ${
          isHovered
            ? "bg-[#1F4FD8] shadow-xl shadow-[#1F4FD8]/20 border-[#1A4FCB]"
            : "border-black/5 secondary-background"
        }`}
      >
        <div className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4">
          <h5
            className={`text-base md:text-lg xl:text-xl font-bold transition-colors duration-[450ms] ease-in-out ${
              isHovered ? "secondary-text" : "primary-black"
            }`}
          >
            {faq.question}
          </h5>
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-[450ms] ease-in-out ${
              isHovered
                ? "bg-white/20 secondary-text border-white/20 rotate-180"
                : "border-black/5 secondary-background primary-black"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight: isHovered ? contentHeight : 0 }}
        >
          <div ref={contentRef}>
            <p
              className={`px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base leading-normal transition-opacity duration-500 ease-in-out ${
                isHovered ? "secondary-text opacity-100" : "primary-black opacity-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-12 md:mb-16">
          <SectionLabel>Got Questions?</SectionLabel>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            Frequently Asked <span className="font-black red-text">Questions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg primary-black">
            Everything you need to know about PRNIT&apos;s work and case studies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <div className="space-y-4">
            {faqData.slice(0, 3).map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
          <div className="space-y-4">
            {faqData.slice(3).map((faq, index) => (
              <FAQItem key={index + 3} faq={faq} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
