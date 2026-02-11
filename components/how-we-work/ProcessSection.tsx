"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    subtitle: "Understanding Your Business & Goals",
    description:
      "We start by learning about your vision, audience, competitors, and challenges. Through in-depth discussions and research, we define a clear roadmap.",
    phase: "Plan",
  },
  {
    number: "02",
    title: "Information Architecture",
    subtitle: "Creating a Strong Structural Foundation",
    description:
      "We design a logical content and navigation framework that ensures users can easily find what they need.",
    phase: "Plan",
  },
  {
    number: "03",
    title: "UX & Wireframing",
    subtitle: "Designing the User Experience",
    description:
      "We build wireframes and interactive prototypes to map out layouts, functionality, and interactions.",
    phase: "Design",
  },
  {
    number: "04",
    title: "Content Strategy",
    subtitle: "Crafting Clear & Engaging Messaging",
    description:
      "We organize and refine your content to communicate your brand story effectively.",
    phase: "Design",
  },
  {
    number: "05",
    title: "Visual Identity & Style",
    subtitle: "Defining Your Brand's Look & Feel",
    description:
      "We establish a consistent visual language through colors, typography, icons, and UI patterns.",
    phase: "Design",
  },
  {
    number: "06",
    title: "UI Design",
    subtitle: "Designing High-Impact Interfaces",
    description:
      "We transform concepts into polished, modern, and responsive designs that look stunning.",
    phase: "Design",
  },
  {
    number: "07",
    title: "Development",
    subtitle: "Building Secure & Scalable Solutions",
    description:
      "We develop your product using modern technologies and best practices for speed and security.",
    phase: "Build",
  },
  {
    number: "08",
    title: "Content Integration",
    subtitle: "Populating & Optimizing Your Platform",
    description:
      "We integrate your text, images, videos, and data while optimizing performance and SEO.",
    phase: "Build",
  },
  {
    number: "09",
    title: "Testing & QA",
    subtitle: "Delivering a Flawless Experience",
    description:
      "We rigorously test functionality, performance, and compatibility across all devices.",
    phase: "Test",
  },
  {
    number: "10",
    title: "Training & Handover",
    subtitle: "Putting You in Control",
    description:
      "We provide documentation and training to help your team manage and grow your platform.",
    phase: "Launch",
  },
  {
    number: "11",
    title: "Launch & Support",
    subtitle: "Ensuring Long-Term Success",
    description:
      "We deploy your project and provide ongoing maintenance to keep your platform optimized.",
    phase: "Launch",
  },
];

export default function ProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full secondary-background py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#1F4FD8] rounded-full blur-[150px] opacity-5" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#8B1E2D] rounded-full blur-[180px] opacity-5" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        {/* Section Header */}
        <div className="space-y-6 mb-10 md:mb-14">
          <SectionLabel>Our Process</SectionLabel>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              From Idea to <span className="font-black red-text">Reality</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
              11 carefully crafted steps to transform your vision into a successful digital product
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const isLarge = index === 0;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group rounded-xl sm:rounded-2xl p-4 md:p-6 lg:p-8 transition-all duration-500 border cursor-pointer overflow-hidden ${isLarge ? "md:col-span-2 lg:col-span-2" : ""
                  } ${isHovered
                    ? "bg-[#1F4FD8] shadow-2xl shadow-[#1F4FD8]/30 border-[#1A4FCB]"
                    : "border-black/5 secondary-background"
                  }`}
              >

                {/* Content */}
                <div>
                  {/* Top Row - Number & Phase */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                    <span className={`font-black transition-colors duration-300 ${isLarge ? "text-5xl sm:text-6xl md:text-7xl" : "text-4xl sm:text-5xl"
                      } ${isHovered ? "text-white/30" : "text-[#1F4FD8]/20"
                      }`}>
                      {step.number}
                    </span>
                    <div className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full transition-all duration-300 border border-black/5 ${isHovered ? "bg-white/20 text-white" : ""}`}>
                      {step.phase}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-black transition-colors duration-300 ${isLarge ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl md:text-2xl"
                    } ${isHovered ? "text-white" : "text-[#0f0f0f]"
                    }`}>
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`text-sm font-bold mt-1 sm:mt-2 transition-colors duration-300 syne-font ${isHovered ? "text-white/80" : "red-text"
                    }`}>
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`mt-3 sm:mt-4 leading-relaxed transition-colors duration-300 ${isLarge ? "text-base sm:text-lg" : "text-sm sm:text-base"
                    } ${isHovered ? "secondary-text" : "primary-black"
                    }`}>
                    {step.description}
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
