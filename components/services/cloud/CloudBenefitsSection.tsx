"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";

export default function CloudBenefitsSection() {
  const floatRef1 = useRef<HTMLDivElement>(null);
  const floatRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set([floatRef1.current, floatRef2.current], {
      force3D: true,
      willChange: "transform",
    });

    gsap.to(floatRef1.current, {
      y: 12,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      force3D: true,
    });

    gsap.to(floatRef2.current, {
      y: 12,
      duration: 3.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      force3D: true,
      delay: 0.5,
    });
  }, []);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#8B1E2D]/5 rounded-3xl" />

              {/* Cloud Dashboard Mockup */}
              <div className="absolute inset-4 md:inset-6">
                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[rgba(15,15,15,0.08)]">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1F4FD8] flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Cloud Console</p>
                        <p className="text-[10px] text-gray-400">Infrastructure Overview</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { label: "Uptime", value: "99.9%", color: "bg-[#28CA41]" },
                        { label: "Instances", value: "24", color: "bg-[#1F4FD8]" },
                        { label: "Regions", value: "8", color: "bg-[#8B1E2D]" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-3 text-center">
                          <div className={`w-2 h-2 rounded-full ${stat.color} mx-auto mb-2`} />
                          <p className="text-lg font-bold text-gray-800">{stat.value}</p>
                          <p className="text-[9px] text-gray-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <p className="text-[10px] font-semibold text-gray-800 mb-3">Active Services</p>
                    <div className="space-y-2 mb-5">
                      {[
                        { name: "Compute Engine", status: "Running", instances: "12" },
                        { name: "Cloud Storage", status: "Active", instances: "4 TB" },
                        { name: "Kubernetes", status: "Running", instances: "3" },
                      ].map((service, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#1F4FD8]/10 flex items-center justify-center">
                              <div className="w-3 h-3 rounded bg-[#1F4FD8]" />
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-gray-700">{service.name}</p>
                              <p className="text-[8px] text-gray-400">{service.instances}</p>
                            </div>
                          </div>
                          <span className="text-[8px] px-2 py-0.5 rounded-full bg-[#28CA41]/10 text-[#28CA41]">
                            {service.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Usage Chart */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-[9px] font-medium text-gray-600">Resource Usage</p>
                        <p className="text-[9px] text-[#1F4FD8] font-semibold">68%</p>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-[68%] bg-gradient-to-r from-[#1F4FD8] to-[#1F4FD8]/70 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div
                ref={floatRef1}
                className="absolute -top-2 right-0 md:right-4 bg-white rounded-xl shadow-xl p-4 border border-[rgba(15,15,15,0.06)] will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#28CA41]/20 flex items-center justify-center text-[#28CA41]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Cost Saved</p>
                    <p className="text-lg font-bold primary-black">50%</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div
                ref={floatRef2}
                className="absolute -bottom-2 left-0 md:left-4 bg-white rounded-xl shadow-xl p-4 border border-[rgba(15,15,15,0.06)] will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1F4FD8]/20 flex items-center justify-center text-[#1F4FD8]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Always On</p>
                    <p className="text-lg font-bold primary-black">99.9%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-4">
            <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  Our Expertise
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Benefits of Cloud <span className="md:block font-black red-text">Consulting Services</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Cloud computing offers pay-as-you-grow models, allowing you to scale resources based on demand while only paying for what you use.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                With 99.9% uptime guarantees and automatic scaling, your applications stay available 24/7 while reducing infrastructure costs.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "Pay-as-you-grow pricing model",
                "99.9% uptime guarantee",
                "Automatic scaling & load balancing",
                "Reduced infrastructure costs",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black">{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="/#contact" className="block w-fit mt-4 md:mt-6">
              Get Free Consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
