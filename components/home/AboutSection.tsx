"use client";
import Image from "next/image";
import { about_left, about_top, about_bottom } from "@/public/assets";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function AboutSection() {
  const aboutLeftRef = useRef<HTMLImageElement>(null);
  const aboutTopRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to([aboutLeftRef.current, aboutTopRef.current], {
      y: 20,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative flex w-full justify-center secondary-background py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1320px] grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 px-4 sm:px-5 md:px-6">
        <div className="relative col-span-1 pl-4 pr-8 sm:pl-5 sm:pr-12 md:pl-6 md:pr-16 flex items-center justify-center">
          <Image src={about_left} alt="About Left" width={150} height={150} className="absolute top-8 left-2 md:top-10 md:left-8 lg:top-14 lg:left-[-20px] w-20 h-20 sm:w-24 sm:h-24 md:w-[150px] md:h-[150px]" ref={aboutLeftRef} />
          <Image src={about_bottom} alt="About Bottom" width={500} height={500} className="h-full w-auto" />
          <Image src={about_top} alt="About Top" width={250} height={250} className="absolute bottom-8 right-2 md:bottom-10 md:right-5 lg:bottom-14 lg:right-[-20px] w-32 h-32 sm:w-40 sm:h-40 md:w-[250px] md:h-[250px]" ref={aboutTopRef} />
        </div>
        <div className="col-span-1 space-y-2 md:space-y-6 lg:space-y-8">
          <div className="inline-flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 sm:gap-3">
              <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                About us
              </p>
            </div>
            <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            Empowering Businesses Through <span className="font-black red-text">Technology</span>
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg primary-black">
              PRNIT is a forward-thinking technology company, driven by a passionate team dedicated to building
              intelligent, scalable, and future-ready digital solutions. We specialize in AI-powered innovation,
              modern software development, cloud transformation, engineering, and next-gen digital services—delivering
              unmatched value through our expanding portfolio of products and solutions.
            </p>
            <p className="text-sm sm:text-base md:text-lg primary-black">
              We collaborate with businesses across key industries, offering tailored solutions for Finance,
              Manufacturing, Healthcare, Technology, Media, Retail, Mobility, and Public Services. With consistent
              growth and a strong vision, PRNIT continues to evolve as a trusted partner for companies seeking faster
              development, smarter systems, and seamless digital transformation.
            </p>
          </div>
          <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6 lg:mt-8">Let&apos;s Talk</ButtonLink>
        </div>
      </div>
    </section>
  );
}

