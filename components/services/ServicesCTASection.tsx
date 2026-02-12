"use client";

import { useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "../ui/SectionLabel";

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
            <SectionLabel>Let&apos;s Work Together</SectionLabel>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Ready to Start Your <span className="font-black red-text">Next Project?</span>
            </h2>
          </div>

          {/* Stats inline */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">150+</h3>
              <p className="text-sm font-medium primary-black">Projects</p>
            </div>
            <div className="w-px h-10 bg-[#0F0F0F]/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">50+</h3>
              <p className="text-sm font-medium primary-black">Clients</p>
            </div>
            <div className="w-px h-10 bg-[#0F0F0F]/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">98%</h3>
              <p className="text-sm font-medium primary-black">Satisfaction</p>
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
              className={`group rounded-xl sm:rounded-2xl p-4 transition-all duration-500 border cursor-pointer overflow-hidden ${hoveredIndex === index
                ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30 border-[#1A4FCB]"
                : "border-black/5 secondary-background"
                }`}
            >

              {/* Content */}
              <div>
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 ${hoveredIndex === index
                    ? "bg-white/20 secondary-text border-white/10" : "border-black/5 secondary-background"
                    }`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-base md:text-lg xl:text-xl font-bold mb-2 transition-colors duration-300 ${hoveredIndex === index ? "text-white" : "primary-black"
                    }`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm md:text-base leading-normal transition-colors duration-300 ${hoveredIndex === index ? "text-white/80" : "primary-black/60"}`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="flex flex-row items-center justify-center gap-4">
          <ButtonLink href="#contact">
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
