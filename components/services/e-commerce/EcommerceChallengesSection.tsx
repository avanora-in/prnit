"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import SectionLabel from "@/components/ui/SectionLabel";

const challenges = [
  {
    title: "Multiple User Persona",
    description:
      "Our experts research and create personas to understand behavior patterns, goals and decisions of your target audience.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Achieving Business Potential",
    description:
      "You dream it, we build it. Our aim is to make your app successful because your app is your reputation in the marketplace.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Winning Zero Tolerance Users",
    description:
      "We design user-centric apps so customers enjoy seamless and smooth application navigation experience.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Book Online, Sell Offline",
    description:
      "New brick and mortar strategy for retail stores. Drive customers from online to your physical store.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Real-time Inventory",
    description:
      "Real-time inventory management with instant stock updates, low-stock alerts, and automated reordering.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Enterprise Management",
    description:
      "Manage multiple stores, handle complex pricing rules, and integrate with existing ERP and CRM systems.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function EcommerceChallengesSection() {
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
          <SectionLabel>Solutions We Offer</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Challenges & <span className="font-black red-text">Opportunities</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">100+</h3>
              <p className="text-sm font-medium primary-black">Stores Built</p>
            </div>
            <div className="w-px h-10 bg-black/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">6+</h3>
              <p className="text-sm font-medium primary-black">Solutions</p>
            </div>
            <div className="w-px h-10 bg-black/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">45%</h3>
              <p className="text-sm font-medium primary-black">Avg. Growth</p>
            </div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((challenge, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group rounded-xl sm:rounded-2xl p-6 transition-all duration-500 border cursor-pointer overflow-hidden ${
                  isHovered
                    ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30 border-[#1A4FCB]"
                    : "border-black/5 secondary-background"
                }`}
              >
                {/* Content */}
                <div>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 ${
                    isHovered
                      ? "bg-white/20 secondary-text border-white/10"
                      : "border-black/5 secondary-background primary-black"
                  }`}>
                    {challenge.icon}
                  </div>

                  {/* Title */}
                  <h5 className={`text-base md:text-lg xl:text-xl font-bold mb-2 transition-colors duration-300 ${
                    isHovered ? "secondary-text" : "primary-black"
                  }`}>
                    {challenge.title}
                  </h5>

                  {/* Description */}
                  <p className={`text-sm md:text-base leading-normal transition-colors duration-300 ${
                    isHovered ? "secondary-text" : "primary-black"
                  }`}>
                    {challenge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
