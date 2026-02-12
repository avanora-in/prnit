"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { banner_illustration } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HeroSection() {

  const heroLeftSectionRef = useRef<HTMLDivElement>(null);
  const heroRightSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(heroLeftSectionRef.current, {
      opacity: 0,
      x: "-100%",
      duration: 0.5,
      ease: "power2.in",
    }, {
      opacity: 1,
      x: "0%",
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(heroRightSectionRef.current, {
      opacity: 0,
      x: "100%",
      duration: 0.5,
      ease: "power2.in",
    }, {
      opacity: 1,
      x: "0%",
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full secondary-background rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[48px] overflow-hidden"
    >
      <div className="mx-auto max-w-[1320px] flex items-center py-20 md:py-28 lg:py-24 min-h-screen px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-12 lg:gap-16 items-center w-full">
          <div className="space-y-6 col-span-1" ref={heroLeftSectionRef}>
            <SectionLabel>
              The Next <span className="support-blue">Gen</span>
            </SectionLabel>
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-normal primary-black">
                Driving Business Growth with
                <span className="md:block font-black red-text"> AI, Data, and Cloud</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                Unlock the power of modern technology with custom-built digital solutions designed to optimize
                operations, reduce costs, and drive measurable business results.
              </p>
            </div>
            <ButtonLink href="#contact" className="block w-fit">
              Let&apos;s Talk
            </ButtonLink>
          </div>

          <div className="col-span-1 relative flex items-center justify-center lg:justify-end" ref={heroRightSectionRef}>
            <Image src={banner_illustration} alt="Banner Illustration" width={800} height={800} className="w-full max-w-full md:max-w-[400px] lg:max-w-[500px] h-fit lg:h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

