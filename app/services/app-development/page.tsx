import AppDevHeroSection from "@/components/services/app-development/AppDevHeroSection";
import AppDevProcessSection from "@/components/sections/ProcessSection";
import AppDevIndustrySection from "@/components/services/app-development/AppDevIndustrySection";
import AppDevExpertSection from "@/components/services/app-development/AppDevExpertSection";
import AppDevWhyChooseSection from "@/components/services/app-development/AppDevWhyChooseSection";
import LogoSlider from "@/components/sections/LogoSlider";
import TechnologiesSection from "@/components/sections/Technologies";
import ServicesSection from "@/components/sections/ServicesSection";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";

export const metadata = {
  title: "App Development Services in India | PRNIT",
  description:
    "PRNIT provides mobile and cross-platform app development services in India, focused on scalable architecture, quality releases, and product growth.",
};

export default function AppDevelopmentPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <AppDevHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT develops mobile and cross-platform applications for products that must scale
        reliably. We handle architecture, implementation, testing, and release planning with senior
        engineers. Teams get faster delivery and maintainable code from day one.
      </PageLead>
      <ServiceSeoSection
        h1="App Development Services in India"
        explanation="PRNIT helps teams build mobile products that stay stable as users grow. We handle architecture, development, testing, and release planning for Android, iOS, and cross-platform applications."
        internalLinks={[
          { href: "/services/android", label: "Android Development" },
          { href: "/services/ios", label: "iOS Development" },
          { href: "/services/qa-testing", label: "QA & Testing" },
        ]}
        faqs={[
          {
            question: "Do you build native and cross-platform apps?",
            answer: "Yes. We recommend the best approach based on budget, timeline, performance goals, and product roadmap.",
          },
          {
            question: "Can you take over an existing app codebase?",
            answer: "Yes. We run a technical audit first, then define a stabilization and delivery plan.",
          },
        ]}
      />
      <AppDevProcessSection />
      <ServicesSection />
      <TechnologiesSection />
      <AppDevIndustrySection />
      <AppDevExpertSection />
      <AppDevWhyChooseSection />
    </main>
  );
}
