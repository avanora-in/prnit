"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    title: "iPhone App Development",
    description: "Custom iPhone applications built with Swift and the latest iOS frameworks for optimal performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "iPad App Development",
    description: "Tablet-optimized applications that leverage the iPad's larger screen for enhanced productivity.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Apple Watch Apps",
    description: "WatchOS applications that extend your iOS app functionality to Apple Watch devices.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "App Store Optimization",
    description: "Strategic ASO to improve your app's visibility and increase downloads on the App Store.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Enterprise iOS Solutions",
    description: "Secure, scalable iOS applications for enterprise environments with MDM integration.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "iOS App Migration",
    description: "Seamless migration of existing apps to the latest iOS versions and modern architectures.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function IOSServicesSection() {
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
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="space-y-4">
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              iOS Development <span className="font-black red-text">Services</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">120+</h3>
              <p className="text-sm font-medium primary-black">Apps Built</p>
            </div>
            <div className="w-px h-10 bg-black/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">6+</h3>
              <p className="text-sm font-medium primary-black">Services</p>
            </div>
            <div className="w-px h-10 bg-black/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">4.9</h3>
              <p className="text-sm font-medium primary-black">App Store Rating</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
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
                    isHovered
                      ? "bg-white/20 secondary-text border-white/10"
                      : "border-black/5 secondary-background primary-black"
                  }`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h5 className={`text-base md:text-lg xl:text-xl font-bold mb-2 transition-colors duration-300 ${
                    isHovered ? "secondary-text" : "primary-black"
                  }`}>
                    {service.title}
                  </h5>

                  {/* Description */}
                  <p className={`text-sm md:text-base leading-normal transition-colors duration-300 ${
                    isHovered ? "secondary-text" : "primary-black"
                  }`}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
