import EcommerceHeroSection from "@/components/services/e-commerce/EcommerceHeroSection";
import EcommerceSolutionsSection from "@/components/services/e-commerce/EcommerceSolutionsSection";
import EcommerceChallengesSection from "@/components/services/e-commerce/EcommerceChallengesSection";
import EcommerceFeaturesSection from "@/components/services/e-commerce/EcommerceFeaturesSection";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";

export const metadata = {
  title: "E-Commerce Development Services in India | PRNIT",
  description:
    "PRNIT provides e-commerce development services in India for scalable storefronts, secure checkout flows, and high-performance operations.",
};

export default function EcommercePage() {
  return (
    <main className="deep-navy scroll-smooth">
      <EcommerceHeroSection />
      <LogoSlider />
      <PageLead>
        PRNIT builds e-commerce platforms that improve conversions and support high transaction
        volume. We create secure storefronts, checkout flows, and backend integrations designed for
        growth, reliability, and day-to-day operational efficiency.
      </PageLead>
      <ServiceSeoSection
        h1="E-Commerce Development Services in India"
        explanation="PRNIT builds e-commerce systems focused on conversion, reliability, and scale. We deliver storefronts, checkout experiences, and backend integrations that support business growth."
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
      <EcommerceSolutionsSection />
      <EcommerceChallengesSection />
      <EcommerceFeaturesSection />
    </main>
  );
}
