"use client";

import { useState } from "react";
import Image from "next/image";
import { gray_background } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

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
            <SectionLabel>Our Process</SectionLabel>

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
                  className={`group rounded-xl sm:rounded-2xl p-6 transition-all duration-500 border cursor-pointer overflow-hidden ${
                    isHovered
                      ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30 border-[#1A4FCB]"
                      : "border-black/5 secondary-background"
                  }`}
                >
                  {/* Content */}
                  <div>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 ${isHovered
                      ? "bg-white/20 secondary-text border-white/10"
                      : "border-black/5 secondary-background primary-black"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h5 className={`text-base md:text-lg xl:text-xl font-bold mb-2 transition-colors duration-300 ${isHovered ? "secondary-text" : "primary-black"
                      }`}>
                      {step.title}
                    </h5>
                    <p className={`text-sm md:text-base leading-normal transition-colors duration-300 ${isHovered ? "secondary-text" : "primary-black/70"
                      }`}>
                      {step.description}
                    </p>
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
