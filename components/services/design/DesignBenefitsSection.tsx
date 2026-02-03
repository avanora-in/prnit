"use client";

import { useState } from "react";
import Image from "next/image";
import { gray_background } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";

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
          src={gray_background}
          alt=""
          fill
          className="object-cover object-center pointer-events-none"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  Why Choose Us
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Benefits of Our UI/UX{" "}
              <span className="font-black red-text">Design Solutions</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              Our design solutions deliver measurable business outcomes. We focus on creating experiences that not only look great but also drive real results for your business.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink href="/#contact">
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
                      {benefit.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isHovered ? "text-white/70" : "primary-black/70"
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
