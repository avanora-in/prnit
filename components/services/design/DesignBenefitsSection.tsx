"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

const benefits = [
  {
    title: "Lower Development Cost",
    description:
      "Systematic process reduces redevelopment needs through iterative design, wireframing, and prototyping.",
  },
  {
    title: "Increase in Revenue",
    description:
      "Enhanced user engagement and clear CTAs drive higher conversion rates and user interaction.",
  },
  {
    title: "Enhanced User Satisfaction",
    description:
      "Intuitive interfaces that users love, creating experiences that keep them coming back.",
  },
  {
    title: "Competitive Advantage",
    description:
      "Stand out with unique, memorable designs that differentiate your product in the market.",
  },
];

export default function DesignBenefitsSection() {
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

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <SectionLabel>Why Choose Us</SectionLabel>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
                Benefits of Our UI/UX{" "}
                <span className="font-black red-text">Design Solutions</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                Our design solutions deliver measurable business outcomes. We focus on creating experiences that not only look great but also drive real results for your business.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href="#contact">
                Start Your Project
              </ButtonLink>
              <ButtonLink href="/how-we-work" variant="secondary">
                Our Process
              </ButtonLink>
            </div>
          </div>

          {/* Right - Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={benefit.title}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group rounded-xl sm:rounded-2xl p-6 transition-all duration-500 border cursor-pointer overflow-hidden ${isHovered
                      ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30 border-[#1A4FCB]"
                      : "border-black/5 secondary-background"
                    }`}
                >

                  {/* Content */}
                  <div>
                    <span className={`text-3xl font-black mb-3 block transition-colors duration-300 ${isHovered ? "text-white/30" : "text-[#1F4FD8]/20"
                      }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h5 className={`text-base md:text-lg xl:text-xl font-bold mb-2 transition-colors duration-300 ${isHovered ? "secondary-text" : "primary-black"
                      }`}>
                      {benefit.title}
                    </h5>
                    <p className={`text-sm md:text-base leading-normal transition-colors duration-300 ${isHovered ? "secondary-text" : "primary-black/70"
                      }`}>
                      {benefit.description}
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
