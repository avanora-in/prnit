"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function QAToolsSection() {
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

  const tools = [
    { name: "Selenium", letter: "Se", color: "#43B02A" },
    { name: "Cypress", letter: "Cy", color: "#17202C" },
    { name: "Jest", letter: "Js", color: "#C21325" },
    { name: "Postman", letter: "PM", color: "#FF6C37" },
    { name: "Appium", letter: "Ap", color: "#662D91" },
    { name: "JMeter", letter: "JM", color: "#D22128" },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#8B1E2D]/5 rounded-3xl" />

              {/* Testing Dashboard Mockup */}
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
                        <p className="text-sm font-semibold text-gray-800">Test Suite</p>
                        <p className="text-[10px] text-gray-400">Running tests...</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Progress */}
                    <div className="mb-5">
                      <div className="flex justify-between text-[10px] mb-1.5">
                        <span className="text-gray-500">Test Progress</span>
                        <span className="font-semibold text-[#28CA41]">87% Passed</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-gradient-to-r from-[#28CA41] to-[#28CA41]/70 rounded-full" />
                      </div>
                    </div>

                    {/* Tools Grid */}
                    <p className="text-[10px] font-semibold text-gray-800 mb-3">Testing Tools</p>
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {tools.map((tool, i) => (
                        <div key={i} className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
                            style={{ backgroundColor: tool.color }}
                          >
                            {tool.letter}
                          </div>
                          <p className="text-[8px] text-gray-600 mt-1">{tool.name}</p>
                        </div>
                      ))}
                    </div>

                    {/* Test Results */}
                    <p className="text-[10px] font-semibold text-gray-800 mb-2">Recent Tests</p>
                    <div className="space-y-2">
                      {[
                        { name: "Login Flow", status: "passed", time: "1.2s" },
                        { name: "API Response", status: "passed", time: "0.8s" },
                        { name: "Form Validation", status: "running", time: "..." },
                      ].map((test, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              test.status === "passed" ? "bg-[#28CA41]" : "bg-[#1F4FD8]"
                            }`}>
                              {test.status === "passed" ? (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                              )}
                            </div>
                            <span className="text-[9px] font-medium text-gray-700">{test.name}</span>
                          </div>
                          <span className="text-[8px] text-gray-400">{test.time}</span>
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
                    <p className="text-xs primary-black/60">Pass Rate</p>
                    <p className="text-lg font-bold primary-black">99.2%</p>
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
                    <p className="text-xs primary-black/60">Avg. Test Time</p>
                    <p className="text-lg font-bold primary-black">1.2s</p>
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
                  Our Expertise
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Industry-Leading <span className="md:block font-black red-text">QA Testing Tools</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                We use the most powerful and reliable testing tools in the industry to ensure comprehensive coverage and accurate results.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Our team is certified in Selenium, Cypress, Appium, and other leading frameworks to deliver quality assurance you can trust.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "Selenium & Cypress for web automation",
                "Appium for mobile app testing",
                "JMeter for performance testing",
                "Postman for API testing",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black">{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6">
              Start Testing
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
