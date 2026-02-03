"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import industries_we_serve_section_bg from "@/public/assets/industries_we_serve_section_bg.png";
import ButtonLink from "@/components/ui/ButtonLink";

// Import all industry icons
import {
  HealthcareIcon,
  FinanceIcon,
  ITSaaSIcon,
  FitnessIcon,
  GamingIcon,
  LogisticsIcon,
  RetailIcon,
  SocialPlatformsIcon,
  EducationIcon,
  ARVRIcon,
  WellnessIcon,
  TravelIcon,
} from "@/components/icons/industries";

gsap.registerPlugin(ScrollTrigger);

// Industry data with imported icons
const industries = [
  {
    title: "Healthcare",
    description: "Digital platforms for clinics, hospitals, and wellness brands. We create HIPAA-compliant solutions that streamline patient care and medical workflows.",
    icon: <HealthcareIcon />,
  },
  {
    title: "Finance",
    description: "Secure and scalable solutions for fintech, banking, and accounting. Build trust with robust security and seamless transaction experiences.",
    icon: <FinanceIcon />,
  },
  {
    title: "IT & SaaS",
    description: "High-performance platforms for tech startups and enterprises. Scalable architecture designed for growth and innovation.",
    icon: <ITSaaSIcon />,
  },
  {
    title: "Fitness",
    description: "Websites and apps for gyms, trainers, and health brands. Engage members with booking systems, progress tracking, and community features.",
    icon: <FitnessIcon />,
  },
  {
    title: "Gaming",
    description: "Interactive platforms for gaming communities and developers. Create immersive experiences that keep players engaged.",
    icon: <GamingIcon />,
  },
  {
    title: "Logistics",
    description: "Digital systems for supply chain and transportation management. Optimize operations with real-time tracking and analytics.",
    icon: <LogisticsIcon />,
  },
  {
    title: "Retail & E-commerce",
    description: "Online stores and omnichannel experiences. Convert visitors into customers with seamless shopping journeys.",
    icon: <RetailIcon />,
  },
  {
    title: "Social Platforms",
    description: "Community-driven and engagement-focused solutions. Build connections that foster meaningful interactions.",
    icon: <SocialPlatformsIcon />,
  },
  {
    title: "Education",
    description: "Learning management systems and e-learning platforms. Empower educators and students with innovative digital tools.",
    icon: <EducationIcon />,
  },
  {
    title: "AR / VR",
    description: "Immersive digital and interactive experiences. Push the boundaries of reality with cutting-edge technology.",
    icon: <ARVRIcon />,
  },
  {
    title: "Wellness",
    description: "Lifestyle, healthcare, and personal growth platforms. Support holistic well-being with personalized digital experiences.",
    icon: <WellnessIcon />,
  },
  {
    title: "Travel & Hospitality",
    description: "Booking systems and tourism platforms. Create memorable journeys from discovery to destination.",
    icon: <TravelIcon />,
  },
];

export default function IndustryCoverageSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger for card changes
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalCards = industries.length;
    const scrollHeight = totalCards * 100; // 100vh per card

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${scrollHeight}%`,
      pin: containerRef.current,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * totalCards),
          totalCards - 1
        );
        setActiveIndex(newIndex);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // Animate SVG when active index changes
  useEffect(() => {
    if (!iconContainerRef.current) return;

    // Check if it's a simple icon (with icon-path class) or complex illustration
    const iconPaths = iconContainerRef.current.querySelectorAll(".icon-path");
    const illustrationSvg = iconContainerRef.current.querySelector(".illustration-svg");

    if (iconPaths.length > 0) {
      // Simple icon - stroke drawing animation
      iconPaths.forEach((path, index) => {
        const pathElement = path as SVGPathElement;
        const length = pathElement.getTotalLength ? pathElement.getTotalLength() : 200;

        gsap.set(pathElement, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0,
        });

        gsap.to(pathElement, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.08,
          ease: "power2.out",
        });
      });
    } else if (illustrationSvg) {
      // Complex illustration - fade/scale/stagger animation
      const svg = illustrationSvg as SVGElement;

      // Get different element groups
      const bgElements = svg.querySelectorAll(".svg-bg");
      const floorElements = svg.querySelectorAll(".svg-floor");
      const plantElements = svg.querySelectorAll(".svg-plant");
      const bodyElements = svg.querySelectorAll(".svg-body");
      const personElements = svg.querySelectorAll(".svg-person");
      const elementElements = svg.querySelectorAll(".svg-element");
      const lineElements = svg.querySelectorAll(".svg-line");

      // All other paths without specific class
      const allPaths = svg.querySelectorAll("path, circle, rect");

      // Reset all elements
      gsap.set(allPaths, { opacity: 0, y: 20 });

      // Create staggered animation timeline
      const tl = gsap.timeline();

      // Background first
      tl.to(bgElements, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      // Floor
      tl.to(floorElements, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      }, "-=0.2");

      // Plants grow up
      tl.to(plantElements, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(1.2)",
      }, "-=0.1");

      // Body/main elements
      tl.to(bodyElements, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.03,
        ease: "power2.out",
      }, "-=0.3");

      // Person elements
      tl.to(personElements, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
      }, "-=0.2");

      // Other elements
      tl.to(elementElements, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
      }, "-=0.2");

      // Lines fade in
      tl.to(lineElements, {
        opacity: 0.58,
        y: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
      }, "-=0.2");

      // Any remaining paths
      const animatedSelectors = ".svg-bg, .svg-floor, .svg-plant, .svg-body, .svg-person, .svg-element, .svg-line";
      const remainingPaths = svg.querySelectorAll(`path:not(${animatedSelectors}), circle:not(${animatedSelectors}), rect:not(${animatedSelectors})`);

      tl.to(remainingPaths, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.01,
        ease: "power2.out",
      }, "-=0.3");
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden secondary-background"
    >
      {/* Pinned Container */}
      <div ref={containerRef} className="w-full relative overflow-hidden min-h-screen py-24 flex items-center justify-center">
        <Image
          src={industries_we_serve_section_bg}
          alt="Industry Coverage Background"
          fill
          priority
          className="object-cover object-center transition-transform duration-700 h-full w-full"
        />

        <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6 space-y-8 sm:space-y-12 md:space-y-24">
          {/* Section Header */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  Industry Coverage
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Trusted Across Multiple <span className="font-black red-text">Business Domains</span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center flex-1">
            {/* Left - Animated SVG Icon */}
            <div className="flex justify-center lg:justify-start col-span-1">
              {/* Icon Container */}
              <div
                ref={iconContainerRef}
                className="relative w-full h-100 text-[#1F4FD8]"
              >
                {industries[activeIndex].icon}
              </div>

            </div>

            {/* Right - Active Card Content */}
            <div className="col-span-1">
              {/* Progress Indicator */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold primary-black/60">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-1 bg-[rgba(15,15,15,0.1)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1F4FD8] rounded-full transition-all duration-500"
                    style={{ width: `${((activeIndex + 1) / industries.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-semibold primary-black/60">
                  {String(industries.length).padStart(2, "0")}
                </span>
              </div>

              {/* Card Content */}
              <div className="backdrop-blur-[10px] bg-white/90 border border-[rgba(15,15,15,0.08)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
                {/* Number */}
                <span className="text-6xl sm:text-7xl md:text-8xl font-black text-[#1F4FD8]/10 block mb-2">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0f0f0f] mb-3">
                  {industries[activeIndex].title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed primary-black/80 mb-6">
                  {industries[activeIndex].description}
                </p>

                {/* CTA */}
                <ButtonLink href="#contact" className="w-full md:w-fit">
                  Let&apos;s Talk
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
