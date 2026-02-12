"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "../ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Research & Discovery",
    subtitle: "Understanding Your Vision",
    description:
      "We conduct in-depth analysis of your target audience, competitors, and market trends to establish a clear strategic foundation for your app.",
    deliverables: ["Market Analysis", "User Personas", "Project Roadmap"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Wireframing & Planning",
    subtitle: "Mapping the Blueprint",
    description:
      "We create detailed wireframes to visualize app structure, user flows, and key features before development begins.",
    deliverables: ["Wireframes", "User Flows", "Technical Specs"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "UI/UX Design",
    subtitle: "Crafting the Experience",
    description:
      "Our designers create stunning, intuitive interfaces that delight users and align perfectly with your brand identity.",
    deliverables: ["UI Designs", "Prototypes", "Design System"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Building Excellence",
    description:
      "Using agile methodology, our developers build your app with clean code, modern tech stacks, and industry best practices.",
    deliverables: ["Source Code", "API Integration", "Database Setup"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Testing & QA",
    subtitle: "Ensuring Perfection",
    description:
      "Rigorous testing across all devices ensures your app performs flawlessly with functional, performance, and security checks.",
    deliverables: ["Test Reports", "Bug Fixes", "Performance Audit"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Launch & Support",
    subtitle: "Going Live & Beyond",
    description:
      "We handle app store submissions, deployment, and provide ongoing maintenance to keep your app running smoothly.",
    deliverables: ["App Deployment", "Store Listing", "Ongoing Support"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
];

const AUTO_PLAY_INTERVAL = 4000;

export default function AppDevProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const deliverablesRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);

  const animateContentChange = useCallback(() => {
    const tl = gsap.timeline();

    // Animate out - slide to right and fade
    tl.to([titleRef.current, subtitleRef.current], {
      x: 60,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      stagger: 0.05,
    })
      .to([descRef.current, deliverablesRef.current], {
        y: 20,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        stagger: 0.05,
      }, "-=0.15")
      .to(numberRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      }, "-=0.2");

    // Animate in - slide from left and fade in
    tl.fromTo([titleRef.current, subtitleRef.current], {
      x: -60,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
      stagger: 0.08,
    })
      .fromTo([descRef.current, deliverablesRef.current], {
        y: 20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.08,
      }, "-=0.2")
      .fromTo(numberRef.current, {
        scale: 1.2,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "back.out(1.5)",
      }, "-=0.25");

    return tl;
  }, []);

  const nextStep = useCallback(() => {
    animateContentChange();
    setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 250);
    setProgress(0);
    progressRef.current = 0;
  }, [animateContentChange]);

  // Auto-advance animation
  useEffect(() => {
    if (isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      progressRef.current += (deltaTime / AUTO_PLAY_INTERVAL) * 100;
      setProgress(progressRef.current);

      if (progressRef.current >= 100) {
        nextStep();
      } else {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, activeStep, nextStep]);

  const handleStepClick = (index: number) => {
    if (index !== activeStep) {
      animateContentChange();
      setTimeout(() => {
        setActiveStep(index);
      }, 250);
    }
    setProgress(0);
    progressRef.current = 0;
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".process-step-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          delay: index * 0.05,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const currentStep = processSteps[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 secondary-background overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="space-y-6 mb-10 md:mb-14">
          <SectionLabel>Our Process</SectionLabel>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              How We <span className="font-black red-text">Build Your App</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
              A proven 6-step process that transforms your idea into a successful mobile application
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Step List with Progress */}
          <div className="space-y-2">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              const isCompleted = index < activeStep;

              return (
                <button
                  key={step.number}
                  onClick={() => handleStepClick(index)}
                  className={`process-step-card relative w-full text-left p-4 md:p-5 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer ${isActive
                    ? "bg-[#1F4FD8] shadow-lg shadow-[#1F4FD8]/10"
                    : "border border-[#1F4FD8]/10 hover:bg-[#1F4FD8]/10"
                    }`}
                >
                  {/* Progress Bar for Active Step */}
                  {isActive && (
                    <div
                      className="absolute inset-0 bg-[#1a3fa8] transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-4">
                    {/* Step Number/Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isActive
                        ? "bg-white/20 text-white"
                        : isCompleted
                          ? "bg-[#1F4FD8]/10 text-[#1F4FD8]"
                          : "bg-[#1F4FD8]/10 text-[#1F4FD8]"
                        }`}
                    >
                      {isCompleted ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.icon
                      )}
                    </div>

                    {/* Step Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={`text-xs font-bold ${isActive ? "text-white/60" : "text-[#1F4FD8]/60"
                            }`}
                        >
                          STEP {step.number}
                        </span>
                      </div>
                      <h5
                        className={`font-bold text-base md:text-lg xl:text-xl truncate ${isActive ? "text-white" : "primary-black"
                          }`}
                      >
                        {step.title}
                      </h5>
                    </div>

                    {/* Arrow */}
                    <svg
                      className={`flex-shrink-0 w-5 h-5 transition-transform ${isActive ? "text-white translate-x-1" : "text-[#1F4FD8]/30"
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              );
            })}

            {/* Pause Indicator */}
            <p className="text-center text-xs text-[#0F0F0F]/40 mt-4">
              {isPaused ? "Paused — click a step or move mouse away to continue" : "Auto-advancing..."}
            </p>
          </div>

          {/* Right - Active Step Details */}
          <div className="lg:sticky lg:top-28" ref={contentRef}>
            <div className="relative rounded-2xl bg-gradient-to-br from-[#1F4FD8] to-[#0d2a7a] p-6 md:p-8 lg:p-10 overflow-hidden min-h-[520px]">
              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

              {/* Large Background Number */}
              <span
                ref={numberRef}
                className="absolute top-4 right-4 md:top-6 md:right-8 text-[100px] md:text-[140px] font-black text-white/[0.08] leading-none select-none pointer-events-none"
              >
                {currentStep.number}
              </span>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Step Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Step {currentStep.number} of {processSteps.length}
                </div>

                {/* Title */}
                <h3
                  ref={titleRef}
                  className="text-xl md:text-2xl xl:text-3xl font-black secondary-text leading-normal"
                >
                  {currentStep.title}
                </h3>

                {/* Subtitle */}
                <p
                  ref={subtitleRef}
                  className="text-sm sm:text-base md:text-lg leading-normal secondary-text mb-6"
                >
                  {currentStep.subtitle}
                </p>

                {/* Divider */}
                <div className="w-16 h-1 bg-white/20 rounded-full mb-6" />

                {/* Description */}
                <p
                  ref={descRef}
                  className="text-xs sm:text-sm md:text-base leading-normal secondary-text mb-8"
                >
                  {currentStep.description}
                </p>

                {/* Deliverables */}
                <div ref={deliverablesRef} className="mt-auto">
                  <h6 className="text-xs md:text-sm xl:text-base font-black secondary-text leading-normal uppercase tracking-wide mb-4">
                    Key Deliverables
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-sm font-medium secondary-text border border-white/10"
                      >
                        <svg className="w-4 h-4 text-[#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Below Card */}
            <div className="mt-4 p-5 rounded-xl bg-[#FAFAFA] border border-[rgba(15,15,15,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h6 className="text-xs md:text-sm xl:text-base font-bold primary-black leading-normal">Ready to Start Building?</h6>
                <p className="text-xs sm:text-sm leading-normal primary-black">Let&apos;s discuss your app idea</p>
              </div>
              <ButtonLink href="#contact" className="block w-fit">
                Get Started
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
