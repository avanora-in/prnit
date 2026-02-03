"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function IOSCompanySection() {
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#F05138]/5 rounded-3xl" />

              {/* iPhone Mockup */}
              <div className="absolute inset-4 md:inset-6 flex items-center justify-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] rounded-[44px] p-3 shadow-2xl">
                    <div className="bg-white rounded-[36px] overflow-hidden w-[220px] md:w-[240px]">
                      {/* Notch */}
                      <div className="relative bg-[#1a1a1a] h-7 flex items-center justify-center">
                        <div className="w-20 h-5 bg-[#1a1a1a] rounded-b-2xl absolute -bottom-2" />
                      </div>

                      {/* Screen Content */}
                      <div className="p-4 space-y-3 h-[380px] md:h-[420px]">
                        {/* App Header */}
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-lg bg-[#1F4FD8] flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                          </div>
                        </div>

                        {/* Welcome Text */}
                        <div>
                          <p className="text-[10px] text-gray-400">Welcome back</p>
                          <p className="text-sm font-bold text-gray-800">Dashboard</p>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-gradient-to-r from-[#1F4FD8] to-[#1F4FD8]/80 rounded-xl p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-[8px] text-white/70">Total Revenue</p>
                              <p className="text-base font-bold text-white">$24,580</p>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center gap-1">
                            <span className="text-[8px] text-[#28CA41]">+12.5%</span>
                            <span className="text-[8px] text-white/50">vs last month</span>
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-4 gap-2">
                          {["Send", "Request", "Cards", "More"].map((action, i) => (
                            <div key={i} className="text-center">
                              <div className="w-10 h-10 mx-auto rounded-xl bg-gray-50 flex items-center justify-center mb-1">
                                <div className={`w-5 h-5 rounded-full ${i === 0 ? "bg-[#1F4FD8]" : i === 1 ? "bg-[#28CA41]" : i === 2 ? "bg-[#F05138]" : "bg-gray-300"}`} />
                              </div>
                              <p className="text-[8px] text-gray-500">{action}</p>
                            </div>
                          ))}
                        </div>

                        {/* Recent Transactions */}
                        <div>
                          <p className="text-[10px] font-semibold text-gray-800 mb-2">Recent Activity</p>
                          <div className="space-y-2">
                            {[
                              { name: "App Store", amount: "-$9.99", color: "bg-[#1F4FD8]" },
                              { name: "Transfer", amount: "+$250.00", color: "bg-[#28CA41]" },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <div className={`w-6 h-6 rounded-full ${item.color} flex items-center justify-center`}>
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                  </div>
                                  <span className="text-[9px] font-medium text-gray-700">{item.name}</span>
                                </div>
                                <span className={`text-[9px] font-semibold ${item.amount.startsWith("+") ? "text-[#28CA41]" : "text-gray-800"}`}>
                                  {item.amount}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="flex justify-center pb-2">
                        <div className="w-24 h-1 bg-gray-300 rounded-full" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Apps Delivered</p>
                    <p className="text-lg font-bold primary-black">120+</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">App Store Rating</p>
                    <p className="text-lg font-bold primary-black">4.9/5</p>
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
              iOS App Development <span className="md:block font-black red-text">Company</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                As a leading iOS app development company, we specialize in creating innovative iPhone and iPad applications. Our experienced developers use Swift, SwiftUI, and Objective-C to build exceptional apps.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                From startups to enterprises, we&apos;ve helped businesses across various industries launch successful iOS applications that meet Apple&apos;s strict guidelines.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "Native iOS development with Swift & SwiftUI",
                "iPhone, iPad & Apple Watch apps",
                "App Store optimization & submission",
                "iOS app maintenance & updates",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black">{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="/#contact" className="block w-fit mt-4 md:mt-6">
              Start Your iOS Project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
