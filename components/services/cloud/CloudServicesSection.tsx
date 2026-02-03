"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";

const services = [
  {
    title: "Consulting Solution",
    description: "Best-in-class Cloud Consulting that automates cloud instances and enhances your entire infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Integration",
    description: "High-end enterprise integration services for mission-critical solutions that scale with your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Migration Solution",
    description: "Seamless data migration from any platform to cloud-based servers with zero downtime.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable and reliable cloud infrastructure setup with AWS, Azure, and Google Cloud Platform.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "DevOps Services",
    description: "CI/CD pipelines, containerization with Docker & Kubernetes, and automated deployments.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Cloud Security",
    description: "Comprehensive security solutions including encryption, access control, and compliance management.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function CloudServicesSection() {
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
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  What We Offer
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black">
              Cloud Application <span className="font-black red-text">Services</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">100+</p>
              <p className="text-xs font-medium primary-black/60">Projects</p>
            </div>
            <div className="w-px h-10 bg-[#0F0F0F]/10"></div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">6+</p>
              <p className="text-xs font-medium primary-black/60">Services</p>
            </div>
            <div className="w-px h-10 bg-[#0F0F0F]/10"></div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-[#1F4FD8]">99.9%</p>
              <p className="text-xs font-medium primary-black/60">Uptime</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  isHovered
                    ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30"
                    : "bg-white hover:shadow-xl"
                }`}
              >
                {/* Background decoration */}
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full transition-all duration-500 ${
                  isHovered ? "bg-white/10" : "bg-[#1F4FD8]/5"
                }`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isHovered
                      ? "bg-white/20 text-white"
                      : "bg-[#1F4FD8]/10 text-[#1F4FD8]"
                  }`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                    isHovered ? "text-white" : "primary-black"
                  }`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isHovered ? "text-white/80" : "primary-black/60"
                  }`}>
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className={`mt-4 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    isHovered
                      ? "text-white translate-x-1 opacity-100"
                      : "text-[#1F4FD8] opacity-0 group-hover:opacity-100"
                  }`}>
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
