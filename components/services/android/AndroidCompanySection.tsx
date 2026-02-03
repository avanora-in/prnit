"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function AndroidCompanySection() {
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
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#8B1E2D]/5 rounded-3xl" />

              {/* Multi-Device Mockup */}
              <div className="absolute inset-4 md:inset-6">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Tablet */}
                  <div className="absolute left-0 top-1/4 bg-[#1a1a1a] rounded-xl p-2 shadow-xl w-[140px] md:w-[160px]">
                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="h-3 bg-[#1F4FD8] flex items-center px-2">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 rounded-full bg-white/50" />
                          <div className="w-1 h-1 rounded-full bg-white/50" />
                          <div className="w-1 h-1 rounded-full bg-white/50" />
                        </div>
                      </div>
                      <div className="p-2 space-y-2">
                        <div className="h-3 bg-[#1F4FD8]/20 rounded w-3/4" />
                        <div className="h-2 bg-gray-100 rounded w-full" />
                        <div className="h-2 bg-gray-100 rounded w-2/3" />
                        <div className="flex gap-1.5 mt-2">
                          <div className="flex-1 h-8 bg-[#1F4FD8]/10 rounded" />
                          <div className="flex-1 h-8 bg-[#8B1E2D]/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone - Center */}
                  <div className="relative z-10 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] rounded-[32px] p-2.5 shadow-2xl">
                    <div className="bg-white rounded-[24px] overflow-hidden w-[180px] md:w-[200px]">
                      {/* Notch */}
                      <div className="relative bg-[#1a1a1a] h-6 flex items-center justify-center">
                        <div className="w-16 h-4 bg-[#1a1a1a] rounded-b-xl absolute -bottom-1" />
                      </div>

                      {/* Screen Content */}
                      <div className="p-3 space-y-2.5 h-[300px] md:h-[340px]">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[8px] text-gray-400">Welcome</p>
                            <p className="text-xs font-bold text-gray-800">Dashboard</p>
                          </div>
                          <div className="w-7 h-7 rounded-full bg-[#1F4FD8] flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">A</span>
                          </div>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-gradient-to-r from-[#1F4FD8] to-[#1F4FD8]/80 rounded-lg p-2.5">
                          <p className="text-[7px] text-white/60">Total Revenue</p>
                          <p className="text-sm font-bold text-white">$48,250</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-[7px] text-[#28CA41]">+24.5%</span>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div className="w-5 h-5 rounded bg-[#1F4FD8]/10 mb-1 flex items-center justify-center">
                              <div className="w-2 h-2 bg-[#1F4FD8] rounded-full" />
                            </div>
                            <p className="text-[7px] text-gray-400">Users</p>
                            <p className="text-xs font-bold text-gray-800">12.4K</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div className="w-5 h-5 rounded bg-[#28CA41]/10 mb-1 flex items-center justify-center">
                              <div className="w-2 h-2 bg-[#28CA41] rounded-full" />
                            </div>
                            <p className="text-[7px] text-gray-400">Orders</p>
                            <p className="text-xs font-bold text-gray-800">1,847</p>
                          </div>
                        </div>

                        {/* Activity */}
                        <div className="space-y-1.5">
                          {[1, 2].map((i) => (
                            <div key={i} className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg">
                              <div className={`w-5 h-5 rounded-full ${i === 1 ? "bg-[#1F4FD8]" : "bg-[#28CA41]"} flex items-center justify-center`}>
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                              </div>
                              <div className="flex-1">
                                <div className="h-1.5 bg-gray-200 rounded w-16" />
                                <div className="h-1 bg-gray-100 rounded w-10 mt-0.5" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="flex justify-center pb-1.5">
                        <div className="w-16 h-1 bg-gray-300 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Watch */}
                  <div className="absolute right-0 top-1/3 bg-[#1a1a1a] rounded-xl p-1.5 shadow-xl">
                    <div className="bg-white rounded-lg overflow-hidden w-[50px] md:w-[56px] h-[60px] md:h-[68px]">
                      <div className="h-full flex flex-col items-center justify-center p-1.5">
                        <div className="w-8 h-8 rounded-full bg-[#1F4FD8]/10 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-[#1F4FD8]">12</span>
                        </div>
                        <div className="h-1 bg-gray-100 rounded w-6 mt-1" />
                      </div>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Total Downloads</p>
                    <p className="text-lg font-bold primary-black">3B+</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Client Satisfaction</p>
                    <p className="text-lg font-bold primary-black">99%</p>
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
              Full-service Android App <span className="md:block font-black red-text">Development Company</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                PRNIT is a full-service Android app development company. We handle everything from ideation to deployment and beyond with experienced developers, designers, and strategists.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Whether you need a consumer app, enterprise solution, or IoT integration, we have the expertise to deliver across healthcare, finance, retail, and more.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "End-to-end Android development",
                "Cross-device compatibility",
                "Google Play Store optimization",
                "Ongoing maintenance & support",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black">{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="/#contact" className="block w-fit mt-4 md:mt-6">
              Start Your Project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
