"use client";

import { useState, useRef, useLayoutEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const faqData = [
  {
    question: "What kinds of clients do you work with?",
    answer:
      "We have the experience and expertise to work with large enterprises but also can deliver work to price-sensitive startups. From Paid Traffic by a local small business to large enterprises with multiple web properties, we can deliver good solutions to organizations of just about any size.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost varies based on complexity, features, and timeline. A simple brochure website might start around $3,000-$5,000, while complex web applications can range from $15,000 to $100,000+. We provide detailed quotes after understanding your specific requirements.",
  },
  {
    question: "How long will it take to build my website?",
    answer:
      "Typically, a simple website takes 4-6 weeks, while more complex projects can take 3-6 months. The timeline depends on factors like scope, complexity, content readiness, and feedback cycles. We always provide a detailed timeline during project planning.",
  },
  {
    question: "What if all I need is a makeover of my current website?",
    answer:
      "We are committed to delivering each client's specific needs in either a full redesign or just an upgrade with an updated feel that has become a time-saver for many businesses looking to refresh their online presence without starting from scratch.",
  },
  {
    question: "Will you help me get my website found on Google?",
    answer:
      "For such things, we provide valuable insight from end-to-end overall website development services support and website-dedicated content because a business website is virtually useless if it cannot be found by people searching for the goods and services provided by that business.",
  },
  {
    question: "How do you know that my new website is working as required?",
    answer:
      "Before launching, we perform numerous quality checks and testing protocols including functionality tests, performance tests, security scans, and usability reviews. After going live, we provide analytics integration and monitoring to track key metrics and ensure everything runs smoothly.",
  },
  {
    question: "Do you provide training on how to edit the content on my website?",
    answer:
      "We provide simple training on how to access your website dashboard to manage, maintain and edit your content. Depending on your timeline, we can provide in-person, phone, and/or web conferencing training to ensure you're comfortable managing your site.",
  },
  {
    question: "What responsibilities do you have after the website is completed?",
    answer:
      "We provide both short-term and long-term support for many of the websites we develop. Support includes, but is not limited to, maintenance tasks like managing updates, bug fixes, Images, Videos, etc. Support depends on what is your need according to the support plans we provide including Standard Services and our people can on-demand work by providing monthly basis services.",
  },
  {
    question: "What if there's a problem with my website? Will you fix it?",
    answer:
      "Absolutely! We offer either month-to-month support agreements and offers after paid period, no matter your level. Our only exception to this is if the website has issues created in any way to penetrate bad malware or other bad try us.",
  },
  {
    question: "Do you provide website hosting?",
    answer:
      "We offer a free hosting on many of our projects, but you may choose to keep your current hosting company. If you are happy with their services, we can work with most hosting providers to deploy your website seamlessly.",
  },
  {
    question: "Do you work with out of state clients?",
    answer:
      "We work for clients globally! However, we have clients in many countries like Australia, Canada, India, Canada, Singapore, Thailand, and New York. Communication tools like video conferencing, project management platforms, and collaborative software make remote partnerships seamless.",
  },
  {
    question: "Do you need to have all the content for my website before starting work?",
    answer:
      "No, we don't. It would be better if you get more time to get the idea ready before half done or ready for website deliverables. But content is the biggest source of website delays, so it is not unusual for us to finish a project and not move the website live until we have this information.",
  },
  {
    question: "What's the best way to manage my website project internally?",
    answer:
      "We have development projects work best when clients designate a project person or project manager to coordinate communications and facilitate timely responses to our questions and requests. This streamlines the process and helps us deliver on time.",
  },
  {
    question: "How will my website display on tablets and smartphones?",
    answer:
      "All the websites we build are mobile-friendly. Modern friendly websites are now a prime as more and more users access the web from tablets and smartphones. Responsive design ensures your site looks great on any device.",
  },
];

export default function FAQSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = faqData.slice(0, midPoint);
  const rightColumnFAQs = faqData.slice(midPoint);

  const FAQItem = ({
    faq,
    index,
    globalIndex,
  }: {
    faq: (typeof faqData)[0];
    index: number;
    globalIndex: number;
  }) => {
    const isHovered = hoveredIndex === globalIndex;
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
        onMouseEnter={() => setHoveredIndex(globalIndex)}
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
            Everything you need to know about our QA & Testing services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-4">
            {leftColumnFAQs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} globalIndex={index} />
            ))}
          </div>
          <div className="space-y-4">
            {rightColumnFAQs.map((faq, index) => (
              <FAQItem key={index + midPoint} faq={faq} index={index} globalIndex={index + midPoint} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
