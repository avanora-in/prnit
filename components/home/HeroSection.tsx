"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { banner_illustration } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 lg:gap-16 items-center w-full">
          <div className="max-w-xl space-y-4 col-span-1" ref={heroLeftSectionRef}>
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  The Next <span className="support-blue">Gen</span>
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-normal primary-black">
                Driving Business Growth with
                <span className="md:block font-black red-text"> AI, Data, and Cloud</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Unlock the power of modern technology with custom-built digital solutions designed to optimize
                operations, reduce costs, and drive measurable business results.
              </p>
            </div>
            <ButtonLink href="#contact" className="block w-fit mt-4 sm:mt-5 md:mt-6">
              Let&apos;s Talk
            </ButtonLink>
          </div>

          <div className="col-span-1 relative flex items-center justify-center lg:justify-end" ref={heroRightSectionRef}>
            <Image src={banner_illustration} alt="Banner Illustration" width={800} height={800} className="w-full max-w-[220px] md:max-w-[400px] lg:max-w-[500px] h-fit lg:h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

