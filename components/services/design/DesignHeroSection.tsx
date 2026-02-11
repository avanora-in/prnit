"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function DesignHeroSection() {
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
          <SectionLabel>UI/UX Design</SectionLabel>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight primary-black">
              User Experience{" "}
              <span className="font-black red-text">Services</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
              The more effortless you make the user journey, the easier it will be to reach your business goals. We cover everything from experience design to improving software architecture and making operations more methodical by optimizing the client&apos;s software portfolio.
            </p>
          </div>

          <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6 lg:mt-8">
            Get Started
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
