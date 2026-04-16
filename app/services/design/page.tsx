import DesignHeroSection from "@/components/services/design/DesignHeroSection";
import DesignSolutionsSection from "@/components/services/design/DesignSolutionsSection";
import DesignServicesSection from "@/components/services/design/DesignServicesSection";
import DesignBenefitsSection from "@/components/services/design/DesignBenefitsSection";
import DesignApproachSection from "@/components/services/design/DesignApproachSection";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";

export const metadata = {
  title: "UI/UX Design Services in India | PRNIT",
  description:
    "PRNIT delivers UI/UX design services in India that improve usability, conversion, and product clarity across web and mobile experiences.",
};

export default function DesignPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <DesignHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT designs user experiences that reduce friction and improve product adoption. Our UI/UX
        process combines research, interaction design, and implementation-ready handoff so teams can
        ship faster with clear, usable interfaces.
      </PageLead>
      <ServiceSeoSection
        h1="UI/UX Design Services in India"
        explanation="PRNIT designs digital products that reduce user friction and improve adoption. Our UI/UX team combines research, design systems, and implementation-ready specs for faster product delivery."
        internalLinks={[
          { href: "/services/web-development", label: "Web Development" },
          { href: "/services/app-development", label: "App Development" },
          { href: "/services/cloud", label: "Cloud Services" },
        ]}
        faqs={[
          {
            question: "How do we start with PRNIT?",
            answer: "Share your goals and current challenges. We then define scope, milestones, and delivery plan.",
          },
          {
            question: "Can PRNIT work with distributed teams?",
            answer: "Yes. Our delivery model is built for distributed collaboration, transparent updates, and predictable execution.",
          },
        ]}
      />
      <DesignSolutionsSection />
      <DesignServicesSection />
      <DesignApproachSection />
      <DesignBenefitsSection />
    </main>
  );
}
