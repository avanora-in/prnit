"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function QAHeroSection() {
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
        <SectionLabel>QA & Testing</SectionLabel>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight primary-black">
            QA & Software{" "}
            <span className="font-black red-text">Testing Services</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg primary-black mb-8 max-w-4xl mx-auto">
            Our comprehensive QA approach helps teams focus on ensuring users get a seamless experience. We provide manual and automated testing services to ensure your software is bug-free and performs flawlessly.
          </p>

          <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6 lg:mt-8">
            Get Started
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
