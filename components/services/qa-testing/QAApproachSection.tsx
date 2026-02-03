"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";

export default function QAApproachSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#28CA41]/5 rounded-3xl" />

              {/* QA Report Mockup */}
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
                        <p className="text-sm font-semibold text-gray-800">QA Report</p>
                        <p className="text-[10px] text-gray-400">Test Results Summary</p>
                      </div>
                    </div>
                    <span className="text-[9px] px-2 py-1 rounded-full bg-[#28CA41]/10 text-[#28CA41] font-semibold">
                      Completed
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Test Summary */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      <div className="text-center p-3 bg-[#28CA41]/10 rounded-xl">
                        <p className="text-xl font-bold text-[#28CA41]">156</p>
                        <p className="text-[9px] text-gray-500">Passed</p>
                      </div>
                      <div className="text-center p-3 bg-[#FF4444]/10 rounded-xl">
                        <p className="text-xl font-bold text-[#FF4444]">12</p>
                        <p className="text-[9px] text-gray-500">Failed</p>
                      </div>
                      <div className="text-center p-3 bg-[#1F4FD8]/10 rounded-xl">
                        <p className="text-xl font-bold text-[#1F4FD8]">8</p>
                        <p className="text-[9px] text-gray-500">Skipped</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-5">
                      <div className="flex justify-between text-[10px] mb-1.5">
                        <span className="text-gray-500">Overall Pass Rate</span>
                        <span className="font-semibold text-[#28CA41]">88.6%</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
                        <div className="h-full w-[88.6%] bg-[#28CA41] rounded-l-full" />
                        <div className="h-full w-[6.8%] bg-[#FF4444]" />
                        <div className="h-full w-[4.6%] bg-[#1F4FD8] rounded-r-full" />
                      </div>
                    </div>

                    {/* Test Categories */}
                    <p className="text-[10px] font-semibold text-gray-800 mb-3">Test Categories</p>
                    <div className="space-y-2">
                      {[
                        { name: "Unit Tests", passed: 82, total: 85, color: "#28CA41" },
                        { name: "Integration Tests", passed: 45, total: 52, color: "#1F4FD8" },
                        { name: "E2E Tests", passed: 29, total: 39, color: "#8B1E2D" },
                      ].map((cat, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                            <span className="text-[10px] font-medium text-gray-700">{cat.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] text-gray-500">{cat.passed}/{cat.total}</span>
                            <span className="text-[9px] font-semibold" style={{ color: cat.color }}>
                              {Math.round((cat.passed / cat.total) * 100)}%
                            </span>
                          </div>
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
                    <p className="text-xs primary-black/60">Bug Detection</p>
                    <p className="text-lg font-bold primary-black">95%</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Report Delivery</p>
                    <p className="text-lg font-bold primary-black">24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-4">
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  Our Approach
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              QA and Software Testing <span className="md:block font-black red-text">Approach</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                We help you identify and improve development issues by implementing proven best practices. Our comprehensive reports provide detailed metrics about quality, stability, and functionality.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                You can enhance your existing QA processes by following our valuable recommendations and use our detailed reports for better development decisions.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "Comprehensive test coverage analysis",
                "Automated regression testing",
                "Performance bottleneck identification",
                "Cross-browser & cross-device testing",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black">{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="/#contact" className="block w-fit mt-4 md:mt-6">
              Get Free QA Consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
