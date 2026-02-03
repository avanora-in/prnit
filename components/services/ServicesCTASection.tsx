"use client";

import { useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";

const features = [
  {
    title: "Free Consultation",
    description: "Get expert advice on your project requirements at no cost",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    description: "We guarantee timely delivery without compromising quality",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description: "Round-the-clock assistance throughout your project journey",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description: "Clear pricing with no hidden costs or surprise charges",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesCTASection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="space-y-4">
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  Let&apos;s Work Together
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black">
              Ready to Start Your <span className="font-black red-text">Next Project?</span>
            </h2>
          </div>

          {/* Stats inline */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">150+</p>
              <p className="text-xs font-medium primary-black/60">Projects</p>
            </div>
            <div className="w-px h-10 bg-[#0F0F0F]/10"></div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">50+</p>
              <p className="text-xs font-medium primary-black/60">Clients</p>
            </div>
            <div className="w-px h-10 bg-[#0F0F0F]/10"></div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">98%</p>
              <p className="text-xs font-medium primary-black/60">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 md:mb-14">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredIndex === index
                  ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30"
                  : "bg-white hover:shadow-xl"
              }`}
            >
              {/* Background decoration */}
              <div
                className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full transition-all duration-500 ${
                  hoveredIndex === index ? "bg-white/10" : "bg-[#1F4FD8]/5"
                }`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredIndex === index
                      ? "bg-white/20 text-white"
                      : "bg-[#1F4FD8]/10 text-[#1F4FD8]"
                  }`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                    hoveredIndex === index ? "text-white" : "primary-black"
                  }`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    hoveredIndex === index ? "text-white/80" : "primary-black/60"
                  }`}
                >
                  {feature.description}
                </p>

                {/* Arrow */}
                <div
                  className={`mt-4 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    hoveredIndex === index
                      ? "text-white translate-x-1"
                      : "text-[#1F4FD8] opacity-0 group-hover:opacity-100"
                  }`}
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink href="/#contact">
            Start Your Project
          </ButtonLink>
          <ButtonLink href="/how-we-work" variant="secondary">
            Our Process
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
