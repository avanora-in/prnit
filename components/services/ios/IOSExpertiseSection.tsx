"use client";

import { useState } from "react";
import Image from "next/image";
import { gray_background } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    title: "Technical Excellence",
    description: "Our iOS team combines deep Swift expertise with creative problem-solving to build high-performance apps.",
  },
  {
    title: "Industry Experience",
    description: "We've delivered successful apps across fintech, healthcare, education, e-commerce, and entertainment.",
  },
  {
    title: "End-to-End Service",
    description: "From concept to App Store submission, we handle every aspect of your iOS app development journey.",
  },
  {
    title: "User-Centered Design",
    description: "Our apps follow Apple's Human Interface Guidelines while delivering unique, engaging experiences.",
  },
];

export default function IOSExpertiseSection() {
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
            <SectionLabel>Why Choose Us</SectionLabel>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Expertise in iOS App <span className="md:block font-black red-text">Development</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              Our iOS development team delivers apps that users love and businesses depend on. We combine technical excellence with a transparent, collaborative process.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">100+</p>
                <p className="text-xs font-medium primary-black/60">iOS Apps Delivered</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">4.8★</p>
                <p className="text-xs font-medium primary-black/60">Avg. App Rating</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">8+</p>
                <p className="text-xs font-medium primary-black/60">Years Experience</p>
              </div>
            </div>

            <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6">
              Start Your Project
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
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 ${
                      isHovered ? "bg-white/20 secondary-text border-white/10" : "border-black/5 secondary-background primary-black"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h5 className={`text-base md:text-lg xl:text-xl font-bold mb-2 transition-colors duration-300 ${isHovered ? "secondary-text" : "primary-black"
                      }`}>
                      {feature.title}
                    </h5>
                    <p className={`text-sm md:text-base leading-normal transition-colors duration-300 ${isHovered ? "secondary-text" : "primary-black"
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
