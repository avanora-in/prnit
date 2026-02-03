"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function AppDevExpertSection() {
  const floatRef1 = useRef<HTMLDivElement>(null);
  const floatRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial transform for GPU acceleration
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
            {/* Main Visual Container */}
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#8B1E2D]/5 rounded-3xl" />
              
              {/* Center Phone Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 md:w-56 h-[380px] md:h-[420px] bg-[#1F4FD8] rounded-[36px] shadow-2xl p-2">
                  <div className="w-full h-full bg-white rounded-[28px] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="p-4 space-y-3 mt-6">
                      <div className="w-full h-3 bg-[#1F4FD8]/20 rounded-full" /> 
                      <div className="w-3/4 h-3 bg-[#1F4FD8]/10 rounded-full" />
                      <div className="mt-4 w-full h-24 bg-gradient-to-br from-[#1F4FD8]/10 to-[#8B1E2D]/10 rounded-xl" />
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-16 bg-[#1F4FD8]/10 rounded-lg" />
                        <div className="h-16 bg-[#8B1E2D]/10 rounded-lg" />
                      </div>
                      <div className="w-full h-10 bg-[#1F4FD8] rounded-lg mt-4" />
                      <div className="space-y-2 mt-4">
                        <div className="w-full h-2 bg-gray-100 rounded-full" />
                        <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                  </div>
                  {/* Phone Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1F4FD8] rounded-full" />
                </div>
              </div>

              {/* Floating Card 1 */}
              <div
                ref={floatRef1}
                className="absolute top-8 left-0 md:left-4 bg-white rounded-xl shadow-xl p-4 border border-[rgba(15,15,15,0.06)] will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1F4FD8]/20 flex items-center justify-center text-[#1F4FD8]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Success Rate</p>
                    <p className="text-lg font-bold primary-black">100%</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div
                ref={floatRef2}
                className="absolute bottom-12 right-0 md:right-4 bg-white rounded-xl shadow-xl p-4 border border-[rgba(15,15,15,0.06)] will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1F4FD8]/20 flex items-center justify-center text-[#1F4FD8]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Apps Delivered</p>
                    <p className="text-lg font-bold primary-black">500+</p>
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
              Experienced Mobile App <span className="md:block font-black red-text">Development Team</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Our mobile app development team specializes in building feature-rich, scalable, and high-performance applications. We combine technical expertise with creative design to deliver apps that users love and businesses rely on.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                With over a decade of experience across iOS, Android, and cross-platform development, we&apos;ve helped startups and enterprises launch successful apps that drive real business results.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "10+ years of mobile development experience",
                "Agile methodology with continuous delivery",
                "Post-launch support & maintenance included",
                "Transparent communication throughout",
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
