"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gray_background, industries_we_serve_section_bg, custom_mobile_app_development, custom_website_development, custom_ecommerce_development, cloud_devops_solutions, crm_development_services, api_development_services, custom_data_engineering, web_application_security } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "app-dev",
    tag: "App Development Solution",
    title: "Custom Mobile App Development Services",
    description:
      "Whether you need a brand-new application or want to upgrade your existing one with the latest technologies, PRNIT builds high-performance mobile apps tailored to your vision and business goals.",
    bullets: [
      "Multi-Platform Deployment",
      "Rapid Prototyping",
      "Custom UI/UX",
      "Scalable Architecture",
      "Continuous Updates & Maintenance",
      "Seamless API Integrations",
    ],
    image: custom_mobile_app_development,
  },
  {
    id: "web-dev",
    tag: "Web Development Solution",
    title: "Custom Website Development Services",
    description:
      "Build a fast, secure, and user-friendly website powered by modern technologies and tailored to your business goals. PRNIT creates web experiences that are visually polished, responsive, and built to perform.",
    bullets: [
      "Custom Web Design & Development",
      "Creative UX/UI with SEO-Optimized Structure",
      "Fully Responsive & Mobile-First Websites",
      "Integration & Migration Services",
      "Secure, Scalable, Robust Development",
      "Continuous Support & Maintenance",
    ],
    image: custom_website_development,
  },
  {
    id: "e-commerce-dev",
    tag: "E-Commerce Development",
    title: "Custom E-Commerce Development Services",
    description:
      "Supercharge your online business with powerful, secure, and scalable E-Commerce systems built by PRNIT Software. We create smooth shopping experiences that help you increase sales, enhance customer trust, and grow your digital presence.",
    bullets: [
      "Tailored Online Storefronts Designed for Your Brand",
      "Mobile-First & High-Performance Commerce UI",
      "Seamless Migration from Any Existing Platform",
      "Smart Integrations with Third-Party Tools & APIs",
      "Secure & Reliable Payment Gateway Setup",
      "Dedicated Support, Updates & Maintenance",
    ],
    image: custom_ecommerce_development,
  },
  {
    id: "cloud-consulting",
    tag: "Cloud Consulting",
    title: "Cloud & DevOps Solutions for Faster, Smarter Growth",
    description:
      "Transform the way your business runs with PRNIT Software's powerful Cloud and DevOps services. We help you migrate, automate, and scale with confidence—ensuring performance, security, and cost-efficiency at every step.",
    bullets: [
      "Expert Cloud Architects & DevOps Engineers",
      "End-to-End Development, Testing & Deployment",
      "Automated CI/CD Pipelines & Workflow Optimization",
      "Seamless Migration from On-Premise to Cloud",
      "Intelligent Cost Control & Resource Optimization",
      "24/7 Cloud Monitoring, Security & Support",
    ],
    image: cloud_devops_solutions,
  },
  {
    id: "crm-dev",
    tag: "CRM Software Development",
    title: "Custom CRM Development & Implementation Services",
    description:
      "We build tailored CRM solutions that simplify operations, improve customer management, and accelerate business growth.",
    bullets: [
      "Automated Lead Scoring & Nurturing",
      "AI-Powered Customer Insights",
      "Custom Workflow Automation",
      "Advanced Reporting & Data Visualization",
      "GDPR & HIPAA-Ready Security",
      "Reliable Data Backup & Recovery",
    ],
    image: crm_development_services,
  },
  {
    id: "api-dev",
    tag: "API Development",
    title: "Custom API Development & Integration Services",
    description:
      "We create secure, high-performance APIs that enable smooth data flow across your systems. From RESTful and GraphQL to third-party integrations, we ensure speed, reliability, and scalability.",
    bullets: [
      "API Consulting & Strategy",
      "Secure & Scalable Architecture",
      "RESTful API Development",
      "Third-Party Integrations",
      "API Automation & Optimization",
      "End-to-End API Design & Implementation",
    ],
    image: api_development_services,
  },
  {
    id: "data-engineering",
    tag: "Data Engineering",
    title: "Custom Data Engineering Services",
    description:
      "We build powerful data pipelines and systems that help your business process, manage, and utilize data with precision—turning raw information into actionable insights.",
    bullets: [
      "End-to-End Data Strategy & Consulting",
      "High-Performance Data Processing",
      "AI-Enhanced Data Operations (AIOps)",
      "Data Quality Monitoring & Improvement",
      "iPaaS-Based Data Integration",
      "Advanced ML-Driven Data Pipelines",
    ],
    image: custom_data_engineering,
  },
  {
    id: "cyber-security",
    tag: "Cyber Security",
    title: "Web Application Security",
    description:
      "Shield your digital platforms with enterprise-grade security. PRNIT delivers end-to-end protection to keep your data, apps, and users safe from evolving threats.",
    bullets: [
      "OWASP Top 10 Compliance",
      "Security Misconfiguration Detection",
      "API Security Hardening",
      "Vulnerability Scanning & Pen-Testing",
      "Secure Code Review",
      "Advanced Threat Monitoring",
    ],
    image: web_application_security,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const triggers: (ScrollTrigger | undefined)[] = [];

    panelRefs.current.forEach((panel, i) => {
      const content = contentRefs.current[i];
      const imageEl = imageRefs.current[i];
      if (!panel || !content) return;

      // Scroll-triggered reveal: text + image animate as panel enters view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });
      tl.fromTo(
        content,
        { opacity: 0, y: 56 },
        { opacity: 1, y: 0, ease: "power2.out" }
      );
      if (imageEl) {
        tl.fromTo(
          imageEl,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, []);

  const sectionHeightVh = services.length * 100;

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* Single scroll container: SERVICES sticky is limited to this height so it never appears on Custom AI / next sections */}
      <div
        className="relative"
        style={{ height: `${sectionHeightVh}vh` }}
      >
        {/* SERVICES overlay - sticky only while this container is in view */}
        <div
          className="sticky top-0 left-0 z-50 min-h-screen flex items-center justify-start pr-2 sm:pr-3 md:pr-4 lg:pr-6 pointer-events-none"
          aria-hidden
        >
          <span
            className="text-white/20 text-[clamp(2rem,6vw,11rem)] sm:text-[clamp(12rem,10vw,11rem)] lg:text-[clamp(4rem,9vw,11rem)] font-black uppercase leading-none select-none [writing-mode:vertical-lr]"
            style={{ textOrientation: "mixed", writingMode: "vertical-rl" }}
          >
            SERVICES
          </span>
        </div>

        {/* Panels wrapper - negative margin so panels start at same vertical position as SERVICES */}
        <div
          className="relative -mt-[100vh]"
          style={{ height: `${sectionHeightVh}vh` }}
        >
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={service.id}
              ref={(el) => {
                panelRefs.current[index] = el;
              }}
              className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-24"
              style={{ zIndex: index + 1 }}
            >
              {/* Background - full bleed behind entire panel */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={gray_background}
                  alt=""
                  fill
                  priority={index === 0}
                  className={`hidden lg:block object-cover object-center pointer-events-none ${isReversed ? "scale-x-[-1]" : ""}`}
                />
                <Image src={industries_we_serve_section_bg} alt="" fill priority className="block lg:hidden object-cover object-center pointer-events-none" />
              </div>

              <div className="relative z-10 h-full w-full max-w-[1320px] mx-auto flex justify-center items-center px-4 sm:px-5 md:px-6">
                {/* Content row - scroll-triggered reveal */}
                <div
                  className={`relative z-10 w-full flex flex-col lg:flex-row 
                    justify-center items-center gap-10 md:gap-12 lg:gap-24 ${isReversed ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Text block */}
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className="flex-1 space-y-4 sm:space-y-5 md:space-y-6 min-w-0"
                  >
                    <div className="inline-flex flex-col gap-2">
                      <div className="inline-flex items-center gap-2 sm:gap-3">
                        <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                          <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                          {service.tag}
                        </p>
                      </div>
                      <div className="h-px w-60 sm:w-80 md:w-100 primary-black-background" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black red-text leading-normal">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg primary-black">
                      {service.description}
                    </p>

                    <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-[color:var(--primary-black,#0f0f0f)]">
                      {service.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[6px] sm:mt-[8px] h-1 w-1 sm:h-1.5 sm:w-1.5 shrink-0 rounded-full primary-black-background" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <ButtonLink href="#contact" className="block w-fit">
                      Let&apos;s Talk
                    </ButtonLink>
                  </div>

                  {/* Image block - scroll-triggered reveal */}
                  <div
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                    className="flex-1 flex items-center justify-center w-full"
                  >
                    <div className="relative w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={400}
                        priority={index === 0}
                        className="rounded-xl sm:rounded-2xl w-full h-40 md:h-70 lg:h-full object-cover shadow-xl border-5 border-white lg:border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
