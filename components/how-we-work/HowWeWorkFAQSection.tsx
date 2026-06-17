"use client";

import { useState, useRef, useLayoutEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const faqData = [
  {
    question: "What is PRNIT's software development process?",
    answer:
      "PRNIT follows an 11-step process: Discovery & Strategy → Information Architecture → UX & Wireframing → Content Strategy → Visual Identity → UI Design → Development → Content Integration → Testing & QA → Training & Handover → Launch & Support.",
  },
  {
    question: "How long does a typical project take with PRNIT?",
    answer:
      "Project timelines vary by scope. A standard web or app project typically takes 6–16 weeks from discovery to launch. PRNIT provides a detailed timeline after the initial discovery phase.",
  },
  {
    question: "Does PRNIT use agile methodology?",
    answer:
      "Yes. PRNIT uses an iterative delivery approach aligned with agile principles — working in transparent sprints with regular client check-ins and continuous feedback throughout the build.",
  },
  {
    question: "What happens after my product launches?",
    answer:
      "PRNIT provides post-launch maintenance, performance monitoring, and ongoing support to keep your platform secure, optimised, and up to date.",
  },
  {
    question: "How do I get started with PRNIT?",
    answer:
      "Fill out the contact form on prnit.com to book a free consultation. PRNIT's team will reach out to understand your requirements and walk you through the discovery process.",
  },
];

export default function HowWeWorkFAQSection() {
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
            Everything you need to know about our software development process
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
