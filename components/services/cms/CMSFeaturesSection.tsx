"use client";
import ButtonLink from "@/components/ui/ButtonLink";

const features = [
  {
    title: "Custom Development",
    description:
      "We are here to meet your expectations for personalized requirements. From custom themes to complex plugin development, our WordPress experts deliver tailored solutions that perfectly align with your business objectives.",
    buttonText: "Explore Services",
    buttonLink: "#services",
    illustration: (
      <svg viewBox="0 0 300 200" fill="none" className="w-full h-auto">
        <rect x="50" y="30" width="200" height="140" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="50" y="30" width="200" height="25" rx="10" fill="#1F4FD8" />
        <rect x="50" y="48" width="200" height="7" fill="#1F4FD8" />
        <circle cx="70" cy="42" r="5" fill="white" opacity="0.4" />
        <circle cx="85" cy="42" r="5" fill="white" opacity="0.4" />
        <circle cx="100" cy="42" r="5" fill="white" opacity="0.4" />
        <rect x="70" y="70" width="80" height="8" rx="2" fill="#1F4FD8" opacity="0.3" />
        <rect x="70" y="90" width="160" height="50" rx="4" fill="#E5E7EB" />
        <rect x="80" y="100" width="60" height="6" rx="2" fill="#1F4FD8" opacity="0.4" />
        <rect x="80" y="112" width="100" height="4" rx="1" fill="white" />
        <rect x="80" y="122" width="80" height="4" rx="1" fill="white" />
        <rect x="70" y="150" width="60" height="12" rx="4" fill="#1F4FD8" />
      </svg>
    ),
    reverse: false,
  },
  {
    title: "Dedicated Developers",
    description:
      "Hiring our offshore WordPress developers means that you get access to our full stack of experienced and knowledgeable experts who are ready to work exclusively on your project with full commitment.",
    buttonText: "Hire Developers",
    buttonLink: "/#contact",
    illustration: (
      <svg viewBox="0 0 300 200" fill="none" className="w-full h-auto">
        <circle cx="150" cy="70" r="40" fill="#1F4FD8" opacity="0.2" />
        <circle cx="150" cy="60" r="25" fill="#1F4FD8" />
        <rect x="115" y="95" width="70" height="50" rx="8" fill="#1F4FD8" />
        <rect x="80" y="50" width="40" height="60" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="88" y="60" width="24" height="4" rx="1" fill="#1F4FD8" opacity="0.3" />
        <rect x="88" y="70" width="20" height="4" rx="1" fill="#E5E7EB" />
        <rect x="88" y="80" width="24" height="4" rx="1" fill="#E5E7EB" />
        <rect x="88" y="95" width="24" height="8" rx="2" fill="#1F4FD8" />
        <rect x="180" y="50" width="40" height="60" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="188" y="60" width="24" height="4" rx="1" fill="#8B1E2D" opacity="0.3" />
        <rect x="188" y="70" width="20" height="4" rx="1" fill="#E5E7EB" />
        <rect x="188" y="80" width="24" height="4" rx="1" fill="#E5E7EB" />
        <rect x="188" y="95" width="24" height="8" rx="2" fill="#8B1E2D" />
        <path d="M120 80 L130 70" stroke="#1F4FD8" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M180 80 L170 70" stroke="#8B1E2D" strokeWidth="2" strokeDasharray="3 3" />
        <rect x="100" y="160" width="100" height="25" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="115" y="168" width="70" height="8" rx="2" fill="#28CA41" opacity="0.3" />
      </svg>
    ),
    reverse: true,
  },
  {
    title: "Support & Maintenance",
    description:
      "You can rest easy and let us handle things while maintaining a steady flow of website efficiency. Our comprehensive support includes security updates, performance monitoring, backups, and 24/7 technical assistance.",
    buttonText: "Get Support",
    buttonLink: "/#contact",
    illustration: (
      <svg viewBox="0 0 300 200" fill="none" className="w-full h-auto">
        <circle cx="150" cy="100" r="60" fill="white" stroke="#E5E7EB" strokeWidth="2" />
        <circle cx="150" cy="100" r="45" fill="#1F4FD8" opacity="0.1" />
        <circle cx="150" cy="100" r="25" fill="#1F4FD8" opacity="0.2" />
        <path d="M150 70 L150 100 L175 100" stroke="#1F4FD8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="100" r="5" fill="#1F4FD8" />
        <rect x="40" y="70" width="50" height="60" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="2" />
        <circle cx="65" cy="90" r="12" fill="#28CA41" opacity="0.2" />
        <path d="M58 90 L63 95 L73 85" stroke="#28CA41" strokeWidth="2" strokeLinecap="round" />
        <rect x="50" y="110" width="30" height="6" rx="2" fill="#E5E7EB" />
        <rect x="210" y="70" width="50" height="60" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="220" y="85" width="30" height="20" rx="4" fill="#1F4FD8" opacity="0.2" />
        <rect x="220" y="110" width="30" height="6" rx="2" fill="#E5E7EB" />
        <path d="M90 100 L105 100" stroke="#1F4FD8" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M195 100 L210 100" stroke="#1F4FD8" strokeWidth="2" strokeDasharray="3 3" />
        <rect x="125" y="170" width="50" height="20" rx="4" fill="#1F4FD8" />
        <text x="135" y="184" fill="white" fontSize="10" fontWeight="bold">24/7</text>
      </svg>
    ),
    reverse: false,
  },
];

export default function CMSFeaturesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                feature.reverse ? "" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${feature.reverse ? "lg:order-2" : "lg:order-1"}`}>
                <div className="inline-flex items-center gap-3">
                  <div className="flex h-[16px] w-[32px] items-center rounded-full border support-blue-border">
                    <div className="mx-auto h-[9px] w-[24px] rounded-full support-blue-background" />
                  </div>
                  <p className="text-sm font-semibold support-blue uppercase tracking-wide">
                    {index === 0 ? "Development" : index === 1 ? "Team" : "Support"}
                  </p>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold primary-black leading-tight">
                  {feature.title}
                </h3>

                <p className="text-base md:text-lg primary-black/70 leading-relaxed">
                  {feature.description}
                </p>

                <ButtonLink href={feature.buttonLink}>{feature.buttonText}</ButtonLink>
              </div>

              {/* Illustration */}
              <div className={`${feature.reverse ? "lg:order-1" : "lg:order-2"}`}>
                <div className="bg-gradient-to-br from-[#1F4FD8]/10 to-[#8B1E2D]/10 rounded-3xl p-8 md:p-12">
                  {feature.illustration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="bg-gradient-to-r from-[#1F4FD8]/5 via-white to-[#8B1E2D]/5 rounded-2xl border border-[rgba(15,15,15,0.06)] p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold primary-black mb-3">
              Are you looking for professional software developer?
            </h3>
            <p className="text-base primary-black/70 mb-6 max-w-xl mx-auto">
              Please contact us and let&apos;s discuss how we can help bring your WordPress project to life.
            </p>
            <ButtonLink href="/#contact">Contact Us</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
