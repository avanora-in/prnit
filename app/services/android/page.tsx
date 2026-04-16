import AndroidHeroSection from "@/components/services/android/AndroidHeroSection";
import AndroidTransformSection from "@/components/services/android/AndroidTransformSection";
import AndroidServicesSection from "@/components/services/android/AndroidServicesSection";
import AndroidFeaturesSection from "@/components/services/android/AndroidFeaturesSection";
import AppDevProcessSection from "@/components/sections/ProcessSection";
import AndroidCompanySection from "@/components/services/android/AndroidCompanySection";
import LogoSlider from "@/components/sections/LogoSlider";
import TechnologiesSection from "@/components/sections/Technologies";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";

export const metadata = {
  title: "Android App Development Services in India | PRNIT",
  description:
    "PRNIT offers Android app development services in India using modern architecture, Kotlin-first practices, and robust QA for scalable releases.",
};

export default function AndroidPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <AndroidHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT builds Android applications that are fast, secure, and easy to scale. We deliver
        production-ready apps using modern Android engineering practices, clear architecture, and
        strong QA coverage. This keeps release cycles predictable as usage grows.
      </PageLead>
      <ServiceSeoSection
        h1="Android App Development Services in India"
        explanation="We build Android applications that are reliable, performant, and easier to evolve over time. PRNIT supports product teams from MVP through scale with clear engineering processes."
        internalLinks={[
          { href: "/services/app-development", label: "App Development" },
          { href: "/services/qa-testing", label: "QA & Testing" },
          { href: "/services/cloud", label: "Cloud Services" },
        ]}
        faqs={[
          {
            question: "What Android stack do you use?",
            answer: "Primarily Kotlin with modern Android architecture patterns and automated testing where practical.",
          },
          {
            question: "Can you improve app performance and crash rates?",
            answer: "Yes. We profile bottlenecks, reduce crashes, and improve release reliability with measurable KPIs.",
          },
        ]}
      />
      <AndroidTransformSection />
      <AndroidServicesSection />
      <AppDevProcessSection />
      <AndroidFeaturesSection />
      <TechnologiesSection />
      <AndroidCompanySection />
    </main>
  );
}
