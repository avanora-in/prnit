"use client";
import ButtonLink from "@/components/ui/ButtonLink";

export default function EcommerceCTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#1F4FD8] to-[#1a3fa8]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-3 justify-center">
            <div className="flex h-[16px] w-[32px] items-center rounded-full border border-white/30">
              <div className="mx-auto h-[9px] w-[24px] rounded-full bg-white/50" />
            </div>
            <p className="text-sm font-semibold text-white/80 uppercase tracking-wide">
              Looking to
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Convert your App Idea into a{" "}
            <span className="font-black text-white">Profitable Business?</span>
          </h2>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Partner with us to build a powerful e-commerce platform that drives sales,
            engages customers, and scales with your business growth.
          </p>

          <ButtonLink href="#contact" className="block w-fit mx-auto mt-4 md:mt-6 lg:mt-8" variant="secondary">
            Get Started
          </ButtonLink>

          {/* Stats */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Team Experts" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
