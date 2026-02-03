"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

const features = [
  {
    name: "Easy Product Search",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    name: "Multiple Payments",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    name: "Push Notifications",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    name: "Easy Checkout",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "AR/VR Integration",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    name: "Social Integration",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    name: "Shipment Tracking",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: "Loyalty Rewards",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
];

export default function EcommerceFeaturesSection() {
  const floatRef1 = useRef<HTMLDivElement>(null);
  const floatRef2 = useRef<HTMLDivElement>(null);
  const floatRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set([floatRef1.current, floatRef2.current, floatRef3.current], {
      force3D: true,
      willChange: "transform",
    });

    gsap.to(floatRef1.current, {
      y: 15,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      force3D: true,
    });

    gsap.to(floatRef2.current, {
      y: 12,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      force3D: true,
      delay: 0.3,
    });

    gsap.to(floatRef3.current, {
      y: 10,
      duration: 2.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      force3D: true,
      delay: 0.6,
    });
  }, []);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 secondary-background overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Phone Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] mx-auto">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#8B1E2D]/5 rounded-3xl" />

              {/* Phone Frame - Centered */}
              <div className="relative flex items-center justify-center py-8 md:py-12">
                <div className="relative bg-gradient-to-b from-[#1F4FD8] to-[#1F4FD8]/80 rounded-[44px] p-3 shadow-2xl shadow-[#1F4FD8]/20">
                  <div className="bg-white rounded-[36px] overflow-hidden w-[220px] md:w-[260px]">
                    {/* Notch */}
                    <div className="flex justify-center pt-2 pb-3 bg-white">
                      <div className="w-20 h-5 bg-gray-100 rounded-full" />
                    </div>

                    {/* Screen Content */}
                    <div className="px-4 pb-6">
                      {/* App Header */}
                      <div className="flex items-center justify-between py-2">
                        <div className="w-8 h-8 rounded-full bg-[#1F4FD8]" />
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-100" />
                          <div className="w-6 h-6 rounded-full bg-gray-100" />
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 mb-4">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div className="w-24 h-3 bg-gray-200 rounded" />
                      </div>

                      {/* Products Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 rounded-xl p-3">
                          <div className="w-full h-20 bg-[#1F4FD8]/10 rounded-lg mb-2" />
                          <div className="w-16 h-2.5 bg-gray-200 rounded mb-1" />
                          <div className="w-10 h-3 bg-[#1F4FD8] rounded" />
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                          <div className="w-full h-20 bg-[#8B1E2D]/10 rounded-lg mb-2" />
                          <div className="w-16 h-2.5 bg-gray-200 rounded mb-1" />
                          <div className="w-10 h-3 bg-[#8B1E2D] rounded" />
                        </div>
                      </div>

                      {/* Cart Button */}
                      <div className="bg-[#1F4FD8] rounded-xl py-3 text-center">
                        <div className="w-20 h-3 bg-white/50 rounded mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Feature Badges */}
                <div
                  ref={floatRef1}
                  className="absolute left-2 md:left-4 top-12 md:top-16 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 border border-[rgba(15,15,15,0.06)] will-change-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#28CA41]/20 flex items-center justify-center text-[#28CA41]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold primary-black">Secure</span>
                </div>

                <div
                  ref={floatRef2}
                  className="absolute right-2 md:right-4 top-1/3 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 border border-[rgba(15,15,15,0.06)] will-change-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1F4FD8]/20 flex items-center justify-center text-[#1F4FD8]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold primary-black">Fast</span>
                </div>

                <div
                  ref={floatRef3}
                  className="absolute left-4 md:left-8 bottom-8 md:bottom-12 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 border border-[rgba(15,15,15,0.06)] will-change-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#8B1E2D]/20 flex items-center justify-center text-[#8B1E2D]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold primary-black">Loved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-5">
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold primary-black syne-font">
                  Key Features
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Feature Rich Shopping <span className="md:block font-black red-text">Cart Experience</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              We create feature-rich e-commerce mobile applications with everything your customers need for a seamless shopping experience.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[rgba(15,15,15,0.06)] hover:shadow-md hover:border-[#1F4FD8]/20 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1F4FD8]/10 flex items-center justify-center text-[#1F4FD8]">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium primary-black">{feature.name}</span>
                </div>
              ))}
            </div>

            <ButtonLink href="/#contact" className="block w-fit mt-4">
              Get Started
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
