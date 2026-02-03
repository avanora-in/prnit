"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "App Development",
    description:
      "We build high-performance native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and drive measurable business growth.",
    href: "/services/app-development",
    features: ["iOS & Android Apps", "Cross-Platform Development", "UI/UX Design", "App Maintenance"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "Create fast, secure, and user-friendly websites powered by modern technologies. From simple landing pages to complex web applications, we build it all.",
    href: "/services/web-development",
    features: ["Custom Web Apps", "E-Commerce Sites", "Progressive Web Apps", "API Development"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Design",
    description:
      "Transform your brand with stunning visual identities and intuitive user experiences. Our design team creates memorable digital experiences that captivate users.",
    href: "/services/design",
    features: ["UI/UX Design", "Brand Identity", "Motion Graphics", "Design Systems"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "E-Commerce",
    description:
      "Launch and scale your online store with powerful, secure, and feature-rich e-commerce solutions. We build platforms that drive sales and enhance customer experience.",
    href: "/services/e-commerce",
    features: ["Custom Storefronts", "Payment Integration", "Inventory Management", "Analytics Dashboard"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "CMS Development",
    description:
      "Empower your content management with custom CMS solutions. We build flexible, scalable systems that make content creation and management effortless.",
    href: "/services/cms",
    features: ["WordPress Development", "Headless CMS", "Custom CMS Solutions", "Content Migration"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "iOS Development",
    description:
      "Create stunning iOS applications that leverage the full power of Apple's ecosystem. From iPhone to iPad, we deliver seamless native experiences.",
    href: "/services/ios",
    features: ["Native Swift Apps", "SwiftUI Development", "App Store Optimization", "iOS Updates & Maintenance"],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
  },
  {
    title: "Android Development",
    description:
      "Build powerful Android applications that reach billions of users worldwide. We create feature-rich, high-performance apps for the Android platform.",
    href: "/services/android",
    features: ["Native Kotlin Apps", "Jetpack Compose", "Play Store Optimization", "Android Updates"],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud computing with AWS and Google Cloud. We design, deploy, and manage scalable cloud infrastructure for your business.",
    href: "/services/cloud",
    features: ["AWS & GCP Services", "Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "QA & Testing",
    description:
      "Ensure your software is bug-free, secure, and performs flawlessly. Our QA experts provide comprehensive testing services across all platforms.",
    href: "/services/qa-testing",
    features: ["Automated Testing", "Manual Testing", "Performance Testing", "Security Audits"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Strategy & Consulting",
    description:
      "Get expert guidance on your digital transformation journey. We help businesses define strategies, optimize processes, and achieve their technology goals.",
    href: "/how-we-work",
    features: ["Digital Strategy", "Technology Consulting", "Process Optimization", "Growth Planning"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function ServicesGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
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

  return (
    <section ref={sectionRef} id="services" className="w-full py-16 md:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex h-[16px] w-[32px] items-center rounded-full border support-blue-border">
              <div className="mx-auto h-[9px] w-[24px] rounded-full support-blue-background" />
            </div>
            <p className="text-sm font-semibold support-blue uppercase tracking-wide">
              What We Offer
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black mb-4">
            Comprehensive Digital Services
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg primary-black/70">
            From concept to deployment, we provide end-to-end solutions that drive business growth and digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group"
            >
              <div
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="h-full p-6 md:p-8 rounded-2xl border border-[rgba(15,15,15,0.08)] bg-white/70 hover:bg-white hover:shadow-xl hover:border-[var(--support-blue,#1f4fd8)]/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[var(--support-blue,#1f4fd8)]/10 flex items-center justify-center text-[var(--support-blue,#1f4fd8)] group-hover:bg-[var(--support-blue,#1f4fd8)] group-hover:text-white transition-all duration-300 mb-5">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold primary-black mb-3 group-hover:text-[var(--support-blue,#1f4fd8)] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base primary-black/70 mb-5 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm primary-black/60">
                      <svg className="w-4 h-4 text-[var(--support-blue,#1f4fd8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--support-blue,#1f4fd8)] group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
