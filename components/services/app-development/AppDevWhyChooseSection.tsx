"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

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
          src={industries_we_serve_section_bg}
          alt=""
          fill
          className="object-cover object-center pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <SectionLabel>Why Choose Us</SectionLabel>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
                Partner With Experts Who{" "}
                <span className="font-black red-text">Deliver Results</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                We combine technical excellence with a client-first approach. Our team is committed to turning your vision into a successful mobile application.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink href="#contact">
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
                  className={`group rounded-xl sm:rounded-2xl p-6 transition-all duration-500 border cursor-pointer overflow-hidden ${isHovered
                    ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30 border-[#1A4FCB]"
                    : "border-black/5 secondary-background"
                    }`}
                >

                  {/* Content */}
                  <div className="space-y-2">
                    <span className={`text-3xl font-black block transition-colors duration-300 ${isHovered ? "text-white/30" : "text-[#1F4FD8]/20"
                      }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h5 className={`text-base md:text-lg xl:text-xl leading-normal font-bold transition-colors duration-300 ${isHovered ? "secondary-text" : "primary-black"
                      }`}>
                      {feature.title}
                    </h5>
                    <p className={`text-sm md:text-base leading-normal transition-colors duration-300 ${isHovered ? "secondary-text" : "primary-black/70"
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
