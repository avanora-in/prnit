"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function DesignSolutionsSection() {
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

              {/* Design Software Mockup */}
              <div className="absolute inset-4 md:inset-6">
                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[rgba(15,15,15,0.08)]">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#1F4FD8]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/30" />
                      <div className="w-3 h-3 rounded-full bg-white/30" />
                      <div className="w-3 h-3 rounded-full bg-white/30" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded bg-white/20" />
                      <div className="w-6 h-6 rounded bg-white/20" />
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex h-[calc(100%-44px)]">
                    {/* Left Toolbar */}
                    <div className="w-12 bg-[#f8f8f8] border-r border-[rgba(15,15,15,0.06)] p-2 space-y-3">
                      <div className="w-8 h-8 rounded bg-[#1F4FD8]/10" />
                      <div className="w-8 h-8 rounded bg-[#1F4FD8]/10" />
                      <div className="w-8 h-8 rounded bg-[#1F4FD8]" />
                      <div className="w-8 h-8 rounded bg-[#1F4FD8]/10" />
                      <div className="w-8 h-8 rounded bg-[#1F4FD8]/10" />
                    </div>

                    {/* Canvas Area */}
                    <div className="flex-1 p-4 bg-[#fafafa]">
                      {/* Artboard */}
                      <div className="w-full h-full bg-white rounded-lg shadow-sm border border-[rgba(15,15,15,0.08)] p-4">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                          <div className="w-16 h-4 bg-[#1F4FD8] rounded" />
                          <div className="flex gap-2">
                            <div className="w-8 h-3 bg-gray-200 rounded" />
                            <div className="w-8 h-3 bg-gray-200 rounded" />
                            <div className="w-8 h-3 bg-gray-200 rounded" />
                          </div>
                        </div>

                        {/* Hero */}
                        <div className="w-full h-16 bg-gradient-to-r from-[#1F4FD8]/20 to-[#8B1E2D]/20 rounded-lg mb-3" />

                        {/* Cards */}
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          <div className="h-12 bg-[#1F4FD8]/10 rounded" />
                          <div className="h-12 bg-[#8B1E2D]/10 rounded" />
                          <div className="h-12 bg-[#1F4FD8]/10 rounded" />
                        </div>

                        {/* CTA */}
                        <div className="flex gap-2">
                          <div className="w-20 h-6 bg-[#1F4FD8] rounded" />
                          <div className="w-20 h-6 border border-[#1F4FD8]/30 rounded" />
                        </div>
                      </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-28 bg-[#f8f8f8] border-l border-[rgba(15,15,15,0.06)] p-2 space-y-3">
                      <div className="w-full h-4 bg-[#1F4FD8]/10 rounded" />
                      <div className="space-y-2">
                        <div className="w-full h-6 bg-white rounded border border-[rgba(15,15,15,0.08)]" />
                        <div className="w-full h-6 bg-white rounded border border-[rgba(15,15,15,0.08)]" />
                      </div>
                      <div className="w-full h-4 bg-[#1F4FD8]/10 rounded mt-4" />
                      <div className="grid grid-cols-4 gap-1">
                        <div className="w-full h-5 bg-[#1F4FD8] rounded" />
                        <div className="w-full h-5 bg-[#8B1E2D] rounded" />
                        <div className="w-full h-5 bg-[#0F0F0F] rounded" />
                        <div className="w-full h-5 bg-gray-300 rounded" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Satisfaction</p>
                    <p className="text-lg font-bold primary-black">100%</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Designs Created</p>
                    <p className="text-lg font-bold primary-black">300+</p>
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
              Excellent UI/UX <span className="md:block font-black red-text">Design Solutions</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Our UI/UX design solutions provide a world-class experience to users. We follow a systematic approach that results in designs that are creative, intuitive, flexible & engaging.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Our team excels at delivering designs through information architecture, user stories, mock-ups, and user flows. Our track record guarantees client satisfaction with cost-effective solutions.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "User-centered design approach",
                "Information architecture expertise",
                "Interactive prototyping & testing",
                "Design system development",
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
