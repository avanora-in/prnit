"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";

export default function IOSApproachSection() {
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

  const steps = [
    { name: "Discovery", status: "completed" },
    { name: "Design", status: "completed" },
    { name: "Development", status: "current" },
    { name: "Testing", status: "pending" },
    { name: "Launch", status: "pending" },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={industries_we_serve_section_bg}
          alt=""
          fill
          className="object-cover object-center pointer-events-none"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4FD8]/10 to-[#F05138]/5 rounded-3xl" />

              {/* Process Tracker Mockup */}
              <div className="absolute inset-4 md:inset-6">
                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[rgba(15,15,15,0.08)]">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1F4FD8] flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">iOS Project</p>
                        <p className="text-[10px] text-gray-400">Development Tracker</p>
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
                    {/* Progress Steps */}
                    <div className="space-y-3 mb-6">
                      {steps.map((step, index) => (
                        <div key={step.name} className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                            step.status === "completed" 
                              ? "bg-[#28CA41]" 
                              : step.status === "current" 
                                ? "bg-[#1F4FD8]" 
                                : "bg-gray-100"
                          }`}>
                            {step.status === "completed" ? (
                              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : step.status === "current" ? (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            ) : (
                              <span className="text-[10px] font-semibold text-gray-400">{index + 1}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className={`text-sm font-medium ${
                                step.status === "pending" ? "text-gray-400" : "text-gray-800"
                              }`}>
                                {step.name}
                              </span>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                                step.status === "completed" 
                                  ? "bg-[#28CA41]/10 text-[#28CA41]" 
                                  : step.status === "current" 
                                    ? "bg-[#1F4FD8]/10 text-[#1F4FD8]" 
                                    : "bg-gray-100 text-gray-400"
                              }`}>
                                {step.status === "completed" ? "Done" : step.status === "current" ? "In Progress" : "Pending"}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-5">
                      <div className="flex justify-between text-[10px] mb-1.5">
                        <span className="text-gray-500">Overall Progress</span>
                        <span className="font-semibold text-[#1F4FD8]">60%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[60%] bg-gradient-to-r from-[#1F4FD8] to-[#1F4FD8]/70 rounded-full" />
                      </div>
                    </div>

                    {/* Team */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex -space-x-2">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${
                            i === 0 ? "bg-[#1F4FD8]" : i === 1 ? "bg-[#F05138]" : "bg-[#28CA41]"
                          } flex items-center justify-center`}>
                            <span className="text-[10px] font-bold text-white">
                              {["D", "R", "Q"][i]}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-gray-400">Team</p>
                        <p className="text-xs font-semibold text-gray-700">3 Members</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">On-Time Delivery</p>
                    <p className="text-lg font-bold primary-black">98%</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs primary-black/60">Quality Score</p>
                    <p className="text-lg font-bold primary-black">4.9/5</p>
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
                  Our Approach
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              iOS Application Development <span className="md:block font-black red-text">Approach</span>
            </h2>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg primary-black">
                We follow Apple&apos;s Human Interface Guidelines to create iOS apps that feel native and intuitive. Our development approach ensures your app meets App Store requirements.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                We believe in transparent communication and agile development. You&apos;ll have visibility into every stage of your project.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {[
                "Human Interface Guidelines compliance",
                "Performance optimization for all devices",
                "Accessibility features (VoiceOver, Dynamic Type)",
                "App Store submission & approval support",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black">{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6">
              Get Free Consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
