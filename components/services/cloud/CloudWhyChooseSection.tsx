"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    title: "Cost Saving",
    description: "Affordable cloud storage with automatic data replication - no additional data centers needed.",
  },
  {
    title: "Secure Data",
    description: "Enterprise-grade security with encryption, access control, and compliance management.",
  },
  {
    title: "Accessibility",
    description: "Access your data from any device - laptops, phones, tablets - anywhere with internet.",
  },
  {
    title: "Disaster Recovery",
    description: "Secure offsite backup of critical business documents with instant recovery capabilities.",
  },
];

export default function CloudWhyChooseSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-4">
          <SectionLabel>Why Choose Us</SectionLabel>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Why Choose <span className="md:block font-black red-text">Cloud Platform</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              Cloud computing transforms how businesses operate, offering scalability, reliability, and cost-effectiveness that traditional infrastructure can&apos;t match.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">99.9%</h3>
                <p className="text-sm font-medium primary-black">Uptime Guarantee</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">50%</h3>
                <p className="text-sm font-medium primary-black">Cost Reduction</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">24/7</h3>
                <p className="text-sm font-medium primary-black">Support</p>
              </div>
            </div>

            <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6">
              Get Started
            </ButtonLink>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {features.map((feature, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={feature.title}
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
                    <span className={`text-3xl font-black mb-3 block transition-colors duration-300 ${
                      isHovered ? "text-white/30" : "text-[#1F4FD8]/20"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h5 className={`text-base md:text-lg xl:text-xl font-bold mb-2 transition-colors duration-300 ${
                      isHovered ? "secondary-text" : "primary-black"
                    }`}>
                      {feature.title}
                    </h5>
                    <p className={`text-sm md:text-base leading-normal transition-colors duration-300 ${
                      isHovered ? "secondary-text" : "primary-black"
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
