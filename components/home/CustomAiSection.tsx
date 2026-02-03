"use client";

import { useState } from "react";
import Image from "next/image";
import { ai_powered_automation, decision_intelligence, strategy_development } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";

const aiTabs = [
  {
    id: "automation",
    title: "AI Powered Automation",
    description:
      "Unlock the power of automation and smart decision-making with PRNIT's advanced AI solutions. We design intelligent systems that integrate seamlessly, optimize operations, and drive business growth.",
    features: [
      "Automated Workflows",
      "Faster & Smarter Decisions",
      "Smooth System Integrations",
      "Reduced Costs & Higher Efficiency",
    ],
    image: ai_powered_automation,
  },
  {
    id: "intelligence",
    title: "Decision Intelligence",
    description:
      "Transform your business decisions with AI-powered insights. Our decision intelligence solutions help you analyze data, predict outcomes, and make informed choices that drive growth.",
    features: [
      "Data-Driven Insights",
      "Predictive Analytics",
      "Real-Time Decision Support",
      "Advanced Reporting & Visualization",
    ],
    image: decision_intelligence,
  },
  {
    id: "strategy",
    title: "Strategy & Development",
    description:
      "Build intelligent, future-ready systems with our strategic AI development services. We help you plan, develop, and deploy AI solutions that align with your business goals.",
    features: [
      "AI Strategy Consulting",
      "Custom AI Development",
      "Model Training & Optimization",
      "Deployment & Integration",
    ],
    image: strategy_development,
  },
];

export default function CustomAiSection() {
  const [activeTab, setActiveTab] = useState("automation");
  const activeContent = aiTabs.find((tab) => tab.id === activeTab) || aiTabs[0];

  return (
    <section
      id="ai"
      className="w-full bg-[var(--secondary-background,#fafaf7)] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6 space-y-8 sm:space-y-10">
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <div className="inline-flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 sm:gap-3">
              <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                Custom AI Solutions
              </p>
            </div>
            <div className="h-px w-60 sm:w-80 md:w-100 primary-black-background" />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black primary-black leading-normal max-w-lg lg:max-w-4xl">
              Building Intelligent, Future-Ready Systems
            </h2>
            <div className="text-left sm:text-right">
              <ButtonLink href="#contact">Let&apos;s Talk</ButtonLink>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div className="col-span-1">
            {aiTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full py-4 sm:py-5 md:py-6 text-left transition-colors cursor-pointer border-b neutral-grey-border ${activeTab === tab.id ? "" : "hover:bg-[rgba(15,15,15,0.05)]"
                  }`}
              >
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  <h3
                    className={`text-xl sm:text-2xl font-black ${activeTab === tab.id
                      ? "text-[#8b1e2d]"
                      : "primary-black"
                      }`}
                  >
                    {tab.title}
                  </h3>
                  <svg className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 ${activeTab === tab.id ? "text-[#8b1e2d]" : "primary-black"}`} width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.498 25.4999H6.49854V22.5H41.498V25.4999Z" fill="currentColor" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M40.0005 22.5C32.9455 22.5 27.1805 28.7042 27.1805 35.32V36.82H30.1805V35.32C30.1805 30.297 34.6657 25.5 40.0005 25.5H41.4997V22.5H40.0005Z" fill="currentColor" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M40.0005 25.4998C32.9455 25.4998 27.1805 19.2955 27.1805 12.6797V11.1797H30.1805V12.6797C30.1805 17.7028 34.6657 22.4998 40.0005 22.4998H41.4997V25.4998H40.0005Z" fill="currentColor" />
                  </svg>
                </div>
                {activeTab === tab.id && (
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg primary-black">
                    {tab.description}
                  </p>
                )}
              </button>
            ))}
          </div>
          <div className="col-span-1 space-y-4 sm:space-y-5 md:space-y-6">
            <ul className="space-y-2 text-xs sm:text-sm md:text-base text-[color:var(--primary-black,#0f0f0f)]">
              {activeContent.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-[4px] sm:mt-[6px] h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full primary-black-background" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Image src={activeContent.image} alt={activeContent.title} width={300} height={300} className="rounded-xl sm:rounded-2xl w-full h-auto sm:h-70 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
