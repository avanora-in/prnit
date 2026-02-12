"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    title: "Material Design 3",
    description: "Modern UI components following Google's latest Material Design guidelines for intuitive interfaces.",
  },
  {
    title: "Jetpack Compose",
    description: "Declarative UI toolkit for building native Android interfaces with less code and powerful tools.",
  },
  {
    title: "Offline-First Architecture",
    description: "Apps that work seamlessly offline with intelligent data synchronization when connected.",
  },
  {
    title: "Cloud Integration",
    description: "Seamless integration with cloud services for real-time sync, storage, and scalability.",
  },
];

export default function AndroidFeaturesSection() {
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
            <SectionLabel>Features</SectionLabel>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Features With Android App <span className="md:block font-black red-text">Development</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              Our Android development services come packed with features that ensure your app performs exceptionally. We focus on building apps that are functional and delightful to use.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">150+</h3>
                <p className="text-sm font-medium primary-black">Apps Delivered</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">4.8★</h3>
                <p className="text-sm font-medium primary-black">Play Store Rating</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">8+</h3>
                <p className="text-sm font-medium primary-black">Years Experience</p>
              </div>
            </div>

            <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6">
              Discuss Your Project
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
                  className={`group rounded-xl sm:rounded-2xl p-4 transition-all duration-500 border cursor-pointer overflow-hidden ${hoveredIndex === index
                    ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30 border-[#1A4FCB]"
                    : "secondary-background border-black/5"
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
