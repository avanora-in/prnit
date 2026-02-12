"use client";

import { useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

const processSteps = [
  {
    number: "01",
    title: "Research & Discovery",
    subtitle: "Understanding Your Vision",
    description:
      "We conduct in-depth analysis of your target audience, competitors, and market trends to establish a clear strategic foundation for your app.",
    deliverables: ["Market Analysis", "User Personas", "Project Roadmap"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Wireframing & Planning",
    subtitle: "Mapping the Blueprint",
    description:
      "We create detailed wireframes to visualize app structure, user flows, and key features before development begins.",
    deliverables: ["Wireframes", "User Flows", "Technical Specs"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "UI/UX Design",
    subtitle: "Crafting the Experience",
    description:
      "Our designers create stunning, intuitive interfaces that delight users and align perfectly with your brand identity.",
    deliverables: ["UI Designs", "Prototypes", "Design System"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Building Excellence",
    description:
      "Using agile methodology, our developers build your app with clean code, modern tech stacks, and industry best practices.",
    deliverables: ["Source Code", "API Integration", "Database Setup"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Testing & QA",
    subtitle: "Ensuring Perfection",
    description:
      "Rigorous testing across all devices ensures your app performs flawlessly with functional, performance, and security checks.",
    deliverables: ["Test Reports", "Bug Fixes", "Performance Audit"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Launch & Support",
    subtitle: "Going Live & Beyond",
    description:
      "We handle app store submissions, deployment, and provide ongoing maintenance to keep your app running smoothly.",
    deliverables: ["App Deployment", "Store Listing", "Ongoing Support"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
];

export default function AppDevProcessSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section className="relative w-full py-16 md:py-24 secondary-background overflow-hidden">
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="space-y-6 mb-10 md:mb-14">
          <SectionLabel>Our Process</SectionLabel>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              How We <span className="font-black red-text">Build Your App</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
              A proven 6-step process that transforms your idea into a successful mobile application
            </p>
          </div>
        </div>

        {/* Process grid: 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {processSteps.map((step, index) => {
            const isExpanded = expandedStep === index;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setExpandedStep(index)}
                onMouseLeave={() => setExpandedStep(null)}
                className={`group rounded-xl sm:rounded-2xl transition-all duration-500 border cursor-pointer overflow-hidden ${isExpanded ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30 border-[#1A4FCB]" : "border-black/5 secondary-backgroun "}`}
              >
                <div className="w-full text-left p-5 sm:p-6 relative">
                  {/* Icon - neutral by default, blue when hovered/expanded */}
                  <div
                    className={`w-11 h-11 rounded-lg border flex items-center justify-center mb-4 transition-colors duration-200 ${isExpanded ? "bg-white/20 secondary-text border-white/10" : "border-black/5 secondary-background primary-black"}`}
                  >
                    {step.icon}
                  </div>
                  {/* Chevron - top right */}
                  <span
                    className={`absolute top-5 right-5 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center transition-all duration-200 ${isExpanded ? "rotate-180 secondary-text" : "text-[#0f0f0f]/50"}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  {/* STEP number - small uppercase gray */}
                  <span className={`text-[10px] font-semibold uppercase tracking-wider block mb-1 ${isExpanded ? "secondary-text" : "primary-black"}`}>
                    Step {step.number}
                  </span>
                  <h3 className={`font-bold text-base sm:text-lg pr-10 ${isExpanded ? "text-white" : "primary-black"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm font-medium mt-0.5 ${isExpanded ? "text-white" : "text-[#8B1E2D]"}`}>
                    {step.subtitle}
                  </p>
                </div>

                {/* Expandable: smooth height + opacity transition */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-5 sm:px-6 pb-5 sm:pb-6 border-t border-black/5 group-hover:border-white/30 transition-opacity duration-300 ease-out ${isExpanded ? "opacity-100" : "opacity-0"}`}
                    >
                      <p className={`text-sm leading-relaxed pt-4 mb-4 ${isExpanded ? "secondary-text" : "primary-black"}`}>
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-black/5 group-hover:border-white/30 text-xs font-medium text-[#1F4FD8] group-hover:text-white bg-[#1F4FD8]/05 group-hover:bg-[#1F4FD8]"
                          >
                            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 p-5 sm:p-6 rounded-xl secondary-background border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h6 className="text-base md:text-lg font-bold text-[#0f0f0f] leading-normal">
              Ready to Start Building?
            </h6>
            <p className="text-sm text-[#0f0f0f]/65 mt-0.5">
              Let&apos;s discuss your app idea
            </p>
          </div>
          <ButtonLink href="#contact" className="block w-fit">
            Get Started
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
