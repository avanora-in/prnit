"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function EcommerceSolutionsSection() {
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

              {/* E-commerce Dashboard Mockup */}
              <div className="absolute inset-4 md:inset-6">
                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[rgba(15,15,15,0.08)]">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#1F4FD8]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-xs text-white font-semibold">Store Dashboard</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/30" />
                      <div className="w-3 h-3 rounded-full bg-white/30" />
                      <div className="w-3 h-3 rounded-full bg-white/30" />
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-4 space-y-3">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 rounded-lg bg-[#1F4FD8]/10">
                        <p className="text-[10px] text-gray-500">Revenue</p>
                        <p className="text-sm font-bold text-[#1F4FD8]">$24.5k</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#28CA41]/10">
                        <p className="text-[10px] text-gray-500">Orders</p>
                        <p className="text-sm font-bold text-[#28CA41]">1,234</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#8B1E2D]/10">
                        <p className="text-[10px] text-gray-500">Visitors</p>
                        <p className="text-sm font-bold text-[#8B1E2D]">8.9k</p>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-medium text-gray-500">Sales Overview</span>
                        <span className="text-[10px] font-bold text-[#28CA41]">+12.5%</span>
                      </div>
                      <div className="flex items-end gap-1 h-16">
                        <div className="flex-1 bg-[#1F4FD8]/20 rounded-t h-6" />
                        <div className="flex-1 bg-[#1F4FD8]/30 rounded-t h-10" />
                        <div className="flex-1 bg-[#1F4FD8]/40 rounded-t h-8" />
                        <div className="flex-1 bg-[#1F4FD8]/50 rounded-t h-12" />
                        <div className="flex-1 bg-[#1F4FD8]/60 rounded-t h-10" />
                        <div className="flex-1 bg-[#1F4FD8] rounded-t h-16" />
                        <div className="flex-1 bg-[#1F4FD8]/70 rounded-t h-14" />
                      </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-medium text-gray-500">Recent Orders</span>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                        <div className="w-8 h-8 rounded bg-[#1F4FD8]/10" />
                        <div className="flex-1">
                          <div className="w-20 h-2 bg-gray-200 rounded mb-1" />
                          <div className="w-12 h-2 bg-gray-100 rounded" />
                        </div>
                        <span className="text-[10px] font-bold text-[#28CA41]">$89</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                        <div className="w-8 h-8 rounded bg-[#8B1E2D]/10" />
                        <div className="flex-1">
                          <div className="w-16 h-2 bg-gray-200 rounded mb-1" />
                          <div className="w-10 h-2 bg-gray-100 rounded" />
                        </div>
                        <span className="text-[10px] font-bold text-[#28CA41]">$145</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div
                ref={floatRef1}
                className="absolute -top-2 left-0 md:left-2 bg-white rounded-xl shadow-xl p-4 border border-[rgba(15,15,15,0.06)] will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#28CA41]/20 flex items-center justify-center text-[#28CA41]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Conversion Rate</p>
                    <p className="text-lg font-bold primary-black">+45%</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div
                ref={floatRef2}
                className="absolute -bottom-2 right-0 md:right-2 bg-white rounded-xl shadow-xl p-4 border border-[rgba(15,15,15,0.06)] will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1F4FD8]/20 flex items-center justify-center text-[#1F4FD8]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Stores Built</p>
                    <p className="text-lg font-bold primary-black">100+</p>
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
              E-Commerce Website & <span className="md:block font-black red-text">App Development</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Whether you&apos;re an aspiring entrepreneur or a running e-commerce business, our development services address every facet of e-commerce solutions from simple to complex implementations.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Our team helps you strategically launch e-commerce applications that sell products, offer discounts, display brand identity, and serve as a gateway for physical stores.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "Custom e-commerce platform development",
                "Multi-vendor marketplace solutions",
                "Payment gateway integration",
                "Inventory management systems",
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
