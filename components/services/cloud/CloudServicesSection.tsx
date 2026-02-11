"use client";

import { useState } from "react";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import SectionLabel from "@/components/ui/SectionLabel";

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
          <SectionLabel>What We Offer</SectionLabel>
          
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black">
              Cloud Application <span className="font-black red-text">Services</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">100+</h3>
              <p className="text-sm font-medium primary-black">Projects</p>
            </div>
            <div className="w-px h-10 bg-[#0F0F0F]/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">6+</h3>
              <p className="text-sm font-medium primary-black">Services</p>
            </div>
            <div className="w-px h-10 bg-[#0F0F0F]/10"></div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black leading-normal support-blue">99.9%</h3>
              <p className="text-sm font-medium primary-black">Uptime</p>
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
                      : "border-black/5 secondary-background"
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
                    isHovered ? "secondary-text" : "primary-black/70"
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
