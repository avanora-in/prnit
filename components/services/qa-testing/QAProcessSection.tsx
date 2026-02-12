"use client";

import { useState } from "react";
import Image from "next/image";
import { gray_background } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";

const processSteps = [
  {
    title: "Requirement Analysis",
    description: "We gather project details and define testing scope based on your business needs and objectives.",
  },
  {
    title: "Strategy & Planning",
    description: "We prepare Quality Test Plans and create detailed test cases after thorough requirement analysis.",
  },
  {
    title: "Environment Setup",
    description: "Configure software and hardware infrastructure to create the optimal test environment.",
  },
  {
    title: "Test Implementation",
    description: "Execute test cases and provide systematic reports on bugs and defects for all stakeholders.",
  },
];

export default function QAProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={gray_background}
          alt=""
          fill
          className="object-cover object-center pointer-events-none"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-4">
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  Our Process
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              QA & Software <span className="md:block font-black red-text">Testing Process</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              Our systematic testing process ensures comprehensive coverage and quality. We follow industry best practices to deliver bug-free software that meets your standards.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">4</p>
                <p className="text-xs font-medium primary-black/60">Phase Process</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">100%</p>
                <p className="text-xs font-medium primary-black/60">Coverage</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">24h</p>
                <p className="text-xs font-medium primary-black/60">Bug Reports</p>
              </div>
            </div>

            <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6">
              Start Testing
            </ButtonLink>
          </div>

          {/* Right - Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {processSteps.map((step, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={step.title}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                    isHovered
                      ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30"
                      : "bg-white hover:shadow-xl"
                  }`}
                >
                  {/* Background decoration */}
                  <div className={`absolute -right-8 -bottom-8 w-28 h-28 rounded-full transition-all duration-500 ${
                    isHovered ? "bg-white/10" : "bg-[#1F4FD8]/5"
                  }`} />

                  {/* Content */}
                  <div className="relative z-10">
                    <span className={`text-3xl font-black mb-3 block transition-colors duration-300 ${
                      isHovered ? "text-white/30" : "text-[#1F4FD8]/20"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      isHovered ? "text-white" : "primary-black"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isHovered ? "text-white/70" : "primary-black/70"
                    }`}>
                      {step.description}
                    </p>
                    {/* Arrow */}
                    <div className={`mt-4 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                      isHovered
                        ? "text-white translate-x-1 opacity-100"
                        : "text-[#1F4FD8] opacity-0 group-hover:opacity-100"
                    }`}>
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
