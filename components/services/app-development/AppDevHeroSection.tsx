"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AppDevHeroSection() {
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
        <div ref={heroRef} className="space-y-6">
        <SectionLabel>App Development</SectionLabel>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-normal primary-black">
              Mobile App{" "}
              <span className="font-black red-text">Development</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
              We provide top-tier mobile app development services. Our team builds iOS, Android, and cross-platform applications that drive business growth.
            </p>
          </div>

          <ButtonLink href="#contact" className="block w-fit">
            Get Started
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
