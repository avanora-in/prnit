"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function QABenefitsSection() {
  const floatRef1 = useRef<HTMLDivElement>(null);
  const floatRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set([floatRef1.current, floatRef2.current], {
      force3D: true,
      willChange: "transform",
    });

    gsap.to(floatRef1.current, {
      y: 12,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      force3D: true,
    });

    gsap.to(floatRef2.current, {
      y: 12,
      duration: 3.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      force3D: true,
      delay: 0.5,
    });
  }, []);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Visual */}
          <div className="order-2 lg:order-1 space-y-4">
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  Why Choose Us
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Ensure a Bug Free <span className="md:block font-black red-text">Launch</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                We integrate and maintain quality processes with the latest tools and methodologies to deliver excellent results within the given time and budget.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Our result-oriented QA methodologies are focused on maximizing test coverage and providing measurable results that improve your product quality.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "Result-oriented testing methodologies",
                "Certified expert QA team",
                "Latest tools & technologies",
                "Cost-effective solutions",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black">{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="/#contact" className="block w-fit mt-4 md:mt-6">
              Start QA Project
            </ButtonLink>
          </div>

          {/* Right - Content */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#28CA41]/5 rounded-3xl" />

              {/* Benefits Dashboard Mockup */}
              <div className="absolute inset-4 md:inset-6">
                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[rgba(15,15,15,0.08)]">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1F4FD8] flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Quality Metrics</p>
                        <p className="text-[10px] text-gray-400">Project Dashboard</p>
                      </div>
                    </div>
                    <span className="text-[9px] px-2 py-1 rounded-full bg-[#28CA41]/10 text-[#28CA41] font-semibold">
                      Live
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="p-3 bg-gradient-to-br from-[#1F4FD8] to-[#1F4FD8]/80 rounded-xl text-white">
                        <p className="text-[9px] text-white/70">Bug Detection Rate</p>
                        <p className="text-2xl font-bold">99.2%</p>
                        <div className="flex items-center gap-1 mt-1">
                          <svg className="w-3 h-3 text-[#28CA41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          <span className="text-[8px] text-[#28CA41]">+2.4%</span>
                        </div>
                      </div>
                      <div className="p-3 bg-gradient-to-br from-[#28CA41] to-[#28CA41]/80 rounded-xl text-white">
                        <p className="text-[9px] text-white/70">Cost Savings</p>
                        <p className="text-2xl font-bold">45%</p>
                        <div className="flex items-center gap-1 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          <span className="text-[8px] text-white">Reduced</span>
                        </div>
                      </div>
                    </div>

                    {/* Benefits List */}
                    <p className="text-[10px] font-semibold text-gray-800 mb-3">Key Benefits</p>
                    <div className="space-y-2">
                      {[
                        { label: "Result Oriented Testing", value: "100%", icon: "📊" },
                        { label: "Expert QA Team", value: "50+", icon: "👥" },
                        { label: "Latest Tools", value: "15+", icon: "⚙️" },
                        { label: "24/7 Support", value: "Always", icon: "🕐" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{item.icon}</span>
                            <span className="text-[10px] font-medium text-gray-700">{item.label}</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#1F4FD8]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div
                ref={floatRef1}
                className="absolute -top-2 right-0 md:right-4 bg-white rounded-xl shadow-xl p-4 border border-[rgba(15,15,15,0.06)] will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#28CA41]/20 flex items-center justify-center text-[#28CA41]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Client Satisfaction</p>
                    <p className="text-lg font-bold primary-black">99%</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div
                ref={floatRef2}
                className="absolute -bottom-2 left-0 md:left-4 bg-white rounded-xl shadow-xl p-4 border border-[rgba(15,15,15,0.06)] will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1F4FD8]/20 flex items-center justify-center text-[#1F4FD8]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Faster Delivery</p>
                    <p className="text-lg font-bold primary-black">2x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
