"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function DesignApproachSection() {
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
          {/* Left - Content */}
          <div className="space-y-4">
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
              Transparent Approach to <span className="md:block font-black red-text">Design Excellence</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Our transparent approach provides clients with full visibility into the design process. We follow a step-by-step methodology for designing every application according to user expectations.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Our experienced UI/UX designers understand the importance of user requirements while keeping in mind the latest design trends, cost efficiency, and project timelines.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "User research & persona development",
                "Wireframing & interactive prototyping",
                "Visual design & branding systems",
                "Usability testing & iteration",
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

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#8B1E2D]/5 rounded-3xl" />

              {/* Design Process Visualization */}
              <div className="absolute inset-4 md:inset-6">
                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[rgba(15,15,15,0.08)]">
                  {/* Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#1F4FD8]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/30" />
                      <div className="w-3 h-3 rounded-full bg-white/30" />
                      <div className="w-3 h-3 rounded-full bg-white/30" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-white/80 font-medium">Design Process</span>
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div className="p-4 space-y-3">
                    {/* Step 1 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1F4FD8]/10">
                      <div className="w-8 h-8 rounded-lg bg-[#1F4FD8] flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div className="flex-1">
                        <div className="w-24 h-3 bg-[#1F4FD8]/30 rounded mb-1" />
                        <div className="w-32 h-2 bg-[#1F4FD8]/10 rounded" />
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#28CA41] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1F4FD8]/10">
                      <div className="w-8 h-8 rounded-lg bg-[#1F4FD8] flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div className="flex-1">
                        <div className="w-20 h-3 bg-[#1F4FD8]/30 rounded mb-1" />
                        <div className="w-28 h-2 bg-[#1F4FD8]/10 rounded" />
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#28CA41] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 3 - Active */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1F4FD8] shadow-lg">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#1F4FD8] text-xs font-bold">3</div>
                      <div className="flex-1">
                        <div className="w-28 h-3 bg-white/40 rounded mb-1" />
                        <div className="w-20 h-2 bg-white/20 rounded" />
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-white/50 animate-pulse" />
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                      <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-bold">4</div>
                      <div className="flex-1">
                        <div className="w-24 h-3 bg-gray-200 rounded mb-1" />
                        <div className="w-32 h-2 bg-gray-100 rounded" />
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-500">Progress</span>
                        <span className="text-xs font-bold text-[#1F4FD8]">75%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-[#1F4FD8] to-[#1F4FD8]/70 rounded-full" />
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
                  <div className="w-10 h-10 rounded-lg bg-[#1F4FD8]/20 flex items-center justify-center text-[#1F4FD8]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">On-Time Delivery</p>
                    <p className="text-lg font-bold primary-black">98%</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Quality Score</p>
                    <p className="text-lg font-bold primary-black">4.9/5</p>
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
