"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import SectionLabel from "@/components/ui/SectionLabel";

const industries = [
  {
    name: "Healthcare",
    description: "HIPAA-compliant telemedicine apps, patient portals & health monitoring",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    apps: "45+ Apps",
  },
  {
    name: "Finance",
    description: "Secure banking apps, payment gateways & investment platforms",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    apps: "30+ Apps",
  },
  {
    name: "E-Commerce",
    description: "Shopping apps, marketplaces & retail management solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    apps: "50+ Apps",
  },
  {
    name: "Education",
    description: "E-learning platforms, LMS & virtual classroom applications",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    apps: "25+ Apps",
  },
  {
    name: "Real Estate",
    description: "Property listing apps, virtual tours & CRM solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    apps: "20+ Apps",
  },
  {
    name: "Travel",
    description: "Booking apps, hotel systems & tourism platforms",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    apps: "15+ Apps",
  },
  {
    name: "Logistics",
    description: "Fleet management, supply chain & delivery tracking apps",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    apps: "18+ Apps",
  },
  {
    name: "Entertainment",
    description: "Streaming apps, gaming platforms & social media solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    apps: "22+ Apps",
  },
];

export default function AppDevIndustrySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={industries_we_serve_section_bg}
          alt=""
          fill
          className="object-cover object-center pointer-events-none"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="space-y-4">
            <SectionLabel>
              Industries We Serve
            </SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Building Apps Across <span className="font-black red-text">Every Industry</span>
            </h2>
          </div>

          {/* Stats inline */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">150+</h3>
              <p className="text-sm font-medium primary-black">Apps Built</p>
            </div>
            <div className="w-px h-10 bg-black/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">8+</h3>
              <p className="text-sm font-medium primary-black">Industries</p>
            </div>
            <div className="w-px h-10 bg-black/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">50+</h3>
              <p className="text-sm font-medium primary-black">Clients</p>
            </div>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
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
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 ${hoveredIndex === index
                     ? "bg-white/20 secondary-text border-white/10" : "border-black/5 secondary-background"
                    }`}>
                  {industry.icon}
                </div>

                {/* Title & Apps count */}
                <div className="flex items-center justify-between mb-2">
                  <h5 className={`text-base md:text-lg xl:text-xl font-bold transition-colors duration-300 ${hoveredIndex === index ? "secondary-text" : "primary-black"
                    }`}>
                    {industry.name}
                  </h5>
                  <span className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full transition-all duration-300 border border-black/5 ${hoveredIndex === index
                     ? "bg-white/20 secondary-text border-white/10" : "border-black/5 secondary-background"
                    }`}>
                    {industry.apps}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-sm md:text-base leading-normal transition-colors duration-300 ${hoveredIndex === index ? "secondary-text" : "primary-black"
                  }`}>
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
