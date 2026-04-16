"use client";
import Image from "next/image";
import { about_left, about_top, about_bottom } from "@/public/assets";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

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
          <Image src={about_left} alt="About Left" width={150} height={150} className="absolute top-8 left-2 lg:top-12 w-20 h-20 sm:w-24 sm:h-24 md:w-[150px] md:h-[150px]" ref={aboutLeftRef} />
          <Image src={about_bottom} alt="About Bottom" width={500} height={500} className="w-[91%] h-auto" />
          <Image src={about_top} alt="About Top" width={250} height={250} className="absolute bottom-8 right-2 lg:bottom-16 w-32 h-32 sm:w-40 sm:h-40 md:w-[250px] md:h-[250px]" ref={aboutTopRef} />
        </div>
        <div className="col-span-1 space-y-6">
          <div className="space-y-2">
            <SectionLabel>About us</SectionLabel>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Empowering Businesses Through <span className="font-black red-text">Technology</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
              PRNIT was founded in January 2011 by Praveen Singh Shekhawat to solve a recurring
              startup challenge: products that break as they scale. We combine architecture-first
              thinking with hands-on engineering delivery for teams that need both strategy and
              execution.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
              We work with founders and product teams across SaaS, healthtech, logistics, and
              fintech, helping them ship faster with stable, scalable systems.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base md:text-lg leading-normal primary-black">
              <li>Founded in January 2011 by Praveen Singh Shekhawat</li>
              <li>Team of engineers with 8-14 years of experience</li>
              <li>Projects delivered across 8 industries</li>
              <li>Clients save 30-40 hours per week through automation</li>
              <li>Active AI projects in logistics and healthcare</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/about" className="block w-fit">Read Full Story</ButtonLink>
            <ButtonLink href="/work" variant="secondary" className="block w-fit">View Our Work</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

