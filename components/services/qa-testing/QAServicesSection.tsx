"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    title: "Functional Testing",
    description: "Comprehensive testing to verify all features work as expected according to requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Automation Testing",
    description: "Automated test scripts for regression, smoke testing, and continuous integration pipelines.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Performance Testing",
    description: "Load testing, stress testing, and performance optimization to ensure scalability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Mobile App Testing",
    description: "Testing for iOS and Android apps across devices, OS versions, and screen sizes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "API Testing",
    description: "Validate REST and GraphQL APIs for functionality, security, and performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Security Testing",
    description: "Identify vulnerabilities and ensure your application is protected against threats.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function QAServicesSection() {
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
              QA & Testing <span className="font-black red-text">Services</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">500+</h3>
              <p className="text-sm font-medium primary-black">Projects Tested</p>
            </div>
            <div className="w-px h-10 bg-black/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">6+</h3>
              <p className="text-sm font-medium primary-black">Services</p>
            </div>
            <div className="w-px h-10 bg-black/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">99%</h3>
              <p className="text-sm font-medium primary-black">Bug Detection</p>
            </div>
          </div>
        </div>

        {/* Services Grid - expand description on hover with smooth transition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`rounded-xl sm:rounded-2xl border overflow-hidden cursor-default transition-all duration-300 ${
                  isHovered
                    ? "bg-[#1F4FD8] shadow-xl shadow-[#1F4FD8]/20 border-[#1A4FCB]"
                    : "border-black/5 secondary-background"
                }`}
              >
                {/* Header - always visible */}
                <div className="p-5 sm:p-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-300 ${
                      isHovered
                        ? "bg-white/20 text-white border-white/20"
                        : "border-black/10 bg-black/5 text-[#0f0f0f]/60"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h5
                    className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                      isHovered ? "secondary-text" : "primary-black"
                    }`}
                  >
                    {service.title}
                  </h5>
                </div>

                {/* Expandable description - smooth height + opacity */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out overflow-hidden"
                  style={{ gridTemplateRows: isHovered ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-5 sm:px-6 pb-5 sm:pb-6 text-sm md:text-base leading-normal transition-opacity duration-300 ease-out ${
                        isHovered ? "secondary-text opacity-100" : "primary-black opacity-0"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
