"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  industries_we_serve_section_bg, healthcare_industry_image, education_industry_image, financial_industry_image, retail_industry_image

} from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";

const industries = [
  {
    id: "healthcare",
    title: "Healthcare Industry",
    description:
      "Empowering healthcare providers with smart, secure, and scalable digital solutions that enhance care delivery and streamline every workflow.",
    image: healthcare_industry_image,
  },
  {
    id: "education",
    title: "Education",
    description:
      "Creating smart digital solutions that enhance learning, support educators, and make quality education more accessible for everyone.",
    image: education_industry_image,
  },
  {
    id: "financial",
    title: "Financial Services",
    description:
      "Delivering next-gen financial solutions that elevate customer experience, strengthen risk management, and accelerate growth across every digital channel.",
    image: financial_industry_image,
  },
  {
    id: "retail",
    title: "Retail",
    description:
      "Designing smart retail solutions that personalize customer journeys, streamline inventory operations, and boost profitability across all channels.",
    image: retail_industry_image,
  },
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>("healthcare");
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    industries.forEach((industry) => {
      const contentRef = contentRefs.current[industry.id];
      if (contentRef) {
        if (activeIndustry === industry.id) {
          // Set initial state and measure height
          gsap.set(contentRef, { height: "auto", display: "block" });
          const height = contentRef.scrollHeight;
          gsap.set(contentRef, { height: 0, opacity: 0 });

          // Animate open
          gsap.to(contentRef, {
            height: height,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          // Animate close
          const currentHeight = contentRef.scrollHeight;
          gsap.to(contentRef, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(contentRef, { display: "none" });
            },
          });
        }
      }
    });
  }, [activeIndustry]);

  const toggleIndustry = (id: string) => {
    setActiveIndustry(activeIndustry === id ? null : id);
  };

  return (
    <section
      id="industries"
      className="relative overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={industries_we_serve_section_bg}
        alt="Services Background"
        fill
        priority
        className="object-cover object-center transition-transform duration-700"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] py-12 sm:py-16 md:py-20 lg:py-24 w-full flex-col gap-8 sm:gap-10 px-4 sm:px-5 md:px-6">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 sm:gap-3">
              <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                Industries we serve
              </p>
            </div>
            <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black primary-black leading-normal">
            Bespoke Solutions for Your Industry&apos;s Needs
          </h2>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg primary-black">
            Explore our bespoke solutions, thoughtfully designed to address the unique challenges and requirements
            of diverse industries.
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {industries.map((industry) => {
            const isActive = activeIndustry === industry.id;
            return (
              <div
                key={industry.id}
                className="backdrop-blur-[10px] bg-[rgba(15,15,15,0.05)] border border-[rgba(15,15,15,0.05)] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-10 transition-all"
              >
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                  <button
                    onClick={() => toggleIndustry(industry.id)}
                    className="w-full grid grid-cols-1 lg:grid-cols-3 items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <svg className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 ${activeIndustry === industry.id ? "text-[#8b1e2d] rotate-90" : "primary-black"}`} width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M41.498 25.4999H6.49854V22.5H41.498V25.4999Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M40.0005 22.5C32.9455 22.5 27.1805 28.7042 27.1805 35.32V36.82H30.1805V35.32C30.1805 30.297 34.6657 25.5 40.0005 25.5H41.4997V22.5H40.0005Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M40.0005 25.4998C32.9455 25.4998 27.1805 19.2955 27.1805 12.6797V11.1797H30.1805V12.6797C30.1805 17.7028 34.6657 22.4998 40.0005 22.4998H41.4997V25.4998H40.0005Z" fill="currentColor" />
                      </svg>
                      <h3
                        className={`text-xl sm:text-2xl font-black transition-colors ${isActive
                          ? "text-[var(--primary-accent,#8b1e2d)]"
                          : "text-[color:var(--primary-black,#0f0f0f)]"
                          }`}
                      >
                        {industry.title}
                      </h3>
                    </div>

                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                      <p className="text-xs sm:text-sm md:text-base text-left col-span-1 md:col-span-2">
                        {industry.description}
                      </p>

                      <div className="col-span-1 flex justify-end">
                        <ButtonLink
                          href="#contact"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full md:w-fit"
                        >
                          Let&apos;s Talk
                        </ButtonLink>
                      </div>
                    </div>
                  </button>
                  <div
                    ref={(el) => { if (el) contentRefs.current[industry.id] = el }}
                    className="overflow-hidden"
                    style={{ display: activeIndustry === industry.id ? "block" : "none" }}
                  >
                    <div className="flex pt-3 sm:pt-4 justify-center sm:justify-end">
                      <Image src={industry.image} alt={industry.title} width={648} height={400} className="w-full sm:w-3/4 md:w-1/2 h-auto rounded-xl sm:rounded-2xl" />
                    </div>
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
