"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    title: "Experienced Team",
    description: "Our WordPress experts bring years of experience and a passion for creating exceptional digital experiences.",
  },
  {
    title: "Custom Solutions",
    description: "We build tailored WordPress solutions that perfectly match your brand identity and business requirements.",
  },
  {
    title: "Fast Delivery",
    description: "Efficient development process ensures your WordPress site is delivered on time without compromising quality.",
  },
  {
    title: "Ongoing Support",
    description: "Dedicated maintenance and support to keep your WordPress site secure, updated, and running smoothly.",
  },
];

export default function CMSWhySection() {
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
              Why PRNIT for WordPress <span className="md:block font-black red-text">Web Development?</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              At PRNIT, we are a company of professionals who use the latest technology in building our clients&apos; products. Our WordPress experts deliver exceptional digital experiences.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">200+</h3>
                <p className="text-sm font-medium primary-black">WordPress Projects</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">50+</h3>
                <p className="text-sm font-medium primary-black">Custom Themes</p>
              </div>
              <div className="w-px h-12 bg-[#0F0F0F]/10"></div>
              <div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">100+</h3>
                <p className="text-sm font-medium primary-black">Plugins Built</p>
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
                  className={`group rounded-xl sm:rounded-2xl p-6 transition-all duration-500 border cursor-pointer overflow-hidden ${isHovered
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
