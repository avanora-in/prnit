"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function ServicesHeroSection() {

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
      id="services"
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
                  Services
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-normal primary-black">
                Driving Business Growth with
                <span className="md:block font-black red-text"> Our Services</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                We offer a wide range of services to help you grow your business.
              </p>
            </div>
            <ButtonLink href="#contact" className="block w-fit mt-4 sm:mt-5 md:mt-6">
              Let&apos;s Talk
            </ButtonLink>
          </div>

          <div className="col-span-1 relative flex items-center justify-center lg:justify-end" ref={heroRightSectionRef}>
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* Central Hub */}
              <circle cx="200" cy="200" r="60" fill="#121212" opacity="0.15" />
              <circle cx="200" cy="200" r="45" fill="#121212" opacity="0.2" />
              <circle cx="200" cy="200" r="30" fill="#121212" opacity="0.3" />

              {/* Connecting Lines */}
              <line x1="200" y1="140" x2="200" y2="80" stroke="#121212" strokeWidth="2" opacity="0.3" />
              <line x1="200" y1="260" x2="200" y2="320" stroke="#121212" strokeWidth="2" opacity="0.3" />
              <line x1="140" y1="200" x2="80" y2="200" stroke="#121212" strokeWidth="2" opacity="0.3" />
              <line x1="260" y1="200" x2="320" y2="200" stroke="#121212" strokeWidth="2" opacity="0.3" />
              <line x1="158" y1="158" x2="110" y2="110" stroke="#121212" strokeWidth="2" opacity="0.3" />
              <line x1="242" y1="158" x2="290" y2="110" stroke="#121212" strokeWidth="2" opacity="0.3" />
              <line x1="158" y1="242" x2="110" y2="290" stroke="#121212" strokeWidth="2" opacity="0.3" />
              <line x1="242" y1="242" x2="290" y2="290" stroke="#121212" strokeWidth="2" opacity="0.3" />

              {/* Service Nodes */}
              {/* Web Development */}
              <circle cx="200" cy="60" r="25" fill="#121212" opacity="0.2" />
              <text x="200" y="65" fill="#121212" fontSize="14" fontWeight="bold" textAnchor="middle">&lt;/&gt;</text>

              {/* Mobile */}
              <circle cx="320" cy="200" r="25" fill="#121212" opacity="0.2" />
              <rect x="310" y="185" width="20" height="30" rx="3" fill="#121212" opacity="0.8" />

              {/* Cloud */}
              <circle cx="290" cy="110" r="25" fill="#121212" opacity="0.2" />
              <ellipse cx="290" cy="115" rx="12" ry="8" fill="#121212" opacity="0.6" />
              <ellipse cx="283" cy="110" rx="8" ry="6" fill="#121212" opacity="0.8" />
              <ellipse cx="297" cy="110" rx="8" ry="6" fill="#121212" opacity="0.8" />

              {/* Design */}
              <circle cx="110" cy="110" r="25" fill="#121212" opacity="0.2" />
              <path d="M100 120 L110 100 L120 120 Z" fill="#121212" opacity="0.7" />
              <circle cx="110" cy="108" r="4" fill="#121212" opacity="0.8" />

              {/* Database */}
              <circle cx="80" cy="200" r="25" fill="#121212" opacity="0.2" />
              <ellipse cx="80" cy="195" rx="12" ry="6" fill="#121212" opacity="0.6" />
              <rect x="68" y="195" width="24" height="15" fill="#121212" opacity="0.4" />
              <ellipse cx="80" cy="210" rx="12" ry="6" fill="#121212" opacity="0.6" />

              {/* QA Testing */}
              <circle cx="110" cy="290" r="25" fill="#121212" opacity="0.2" />
              <circle cx="110" cy="290" r="10" stroke="#121212" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M118 298 L128 308" stroke="#121212" strokeWidth="3" opacity="0.7" />

              {/* E-commerce */}
              <circle cx="200" cy="340" r="25" fill="#121212" opacity="0.2" />
              <rect x="190" y="330" width="20" height="15" rx="2" fill="#121212" opacity="0.6" />
              <circle cx="195" cy="352" r="3" fill="#121212" opacity="0.8" />
              <circle cx="205" cy="352" r="3" fill="#121212" opacity="0.8" />

              {/* Security */}
              <circle cx="290" cy="290" r="25" fill="#121212" opacity="0.2" />
              <path d="M290 280 L300 285 L300 295 L290 302 L280 295 L280 285 Z" fill="#121212" opacity="0.6" />

              {/* Center Icon - Gear */}
              <circle cx="200" cy="200" r="15" fill="#121212" opacity="0.8" />
              <circle cx="200" cy="200" r="6" fill="#1F4FD8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

