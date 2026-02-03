"use client";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We develop tailored software solutions that perfectly match your business requirements. From concept to deployment, our team builds scalable and maintainable applications using cutting-edge technologies.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Native iOS and Android apps, or cross-platform solutions using React Native and Flutter. We create mobile experiences that engage users and deliver real business value across all devices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Backend Development",
    description:
      "Robust and scalable backend systems that power your applications. We build secure APIs, microservices, and cloud-native solutions that handle millions of requests with reliability.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
];

export default function AppDevServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 secondary-background">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black">
            Our App Development Services
          </h2>
          <p className="mt-4 text-base md:text-lg primary-black/70 max-w-2xl mx-auto">
            Comprehensive mobile and software development solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl border border-[rgba(15,15,15,0.08)] bg-white/70 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:border-[var(--support-blue,#1f4fd8)]/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--support-blue,#1f4fd8)]/10 flex items-center justify-center text-[var(--support-blue,#1f4fd8)] group-hover:bg-[var(--support-blue,#1f4fd8)] group-hover:text-white transition-all duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold primary-black mb-3 group-hover:text-[var(--support-blue,#1f4fd8)] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm md:text-base primary-black/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
