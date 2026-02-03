"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function IOSHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    if (heroSection) {
      gsap.fromTo(
        heroSection,
        { opacity: 0, y: 50, duration: 0.5, ease: "power2.in" },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#ffe2e6] to-[#b8caff] rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[48px] overflow-hidden">
      <div className="mx-auto max-w-[1320px] flex items-center py-20 md:py-28 lg:py-32 min-h-[50vh] md:min-h-[70vh] px-4 sm:px-6 md:px-8">
        <div ref={heroRef} className="space-y-4">
          <div className="inline-flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 sm:gap-3">
              <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                iOS App Development
              </p>
            </div>
            <div className="h-px w-70 sm:w-90 md:w-100 primary-black-background" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight primary-black">
            iOS App Development{" "}
            <span className="font-black red-text">Services</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg primary-black mb-8 max-w-4xl mx-auto">
            We are expert iOS developers delivering high-quality iPhone and iPad applications. Our team leverages Swift, SwiftUI, and the latest Apple technologies to create stunning, performant apps that users love.
          </p>

          <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6 lg:mt-8">
            Get Started
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
