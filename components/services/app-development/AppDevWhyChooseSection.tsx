"use client";

import { useState } from "react";
import Image from "next/image";
import { gray_background } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";

const features = [
  {
    title: "Transparent Pricing",
    description: "Clear pricing with no hidden costs",
  },
  {
    title: "Rapid Delivery",
    description: "Fast iterations with CI/CD pipelines",
  },
  {
    title: "Free Consultation",
    description: "Expert advice at no cost to you",
  },
  {
    title: "Dedicated Manager",
    description: "Single point of contact throughout",
  },
];

export default function AppDevWhyChooseSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={gray_background}
          alt=""
          fill
          className="object-cover object-center pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
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
              Partner With Experts Who{" "}
              <span className="font-black red-text">Deliver Results</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              We combine technical excellence with a client-first approach. Our team is committed to turning your vision into a successful mobile application.
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

          {/* Right - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={feature.title}
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
                      {feature.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isHovered ? "text-white/70" : "primary-black/70"
                    }`}>
                      {feature.description}
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
