import FAQHeroSection from "@/components/services/faq/FAQHeroSection";
import FAQSection from "@/components/services/faq/FAQSection";
import LogoSlider from "@/components/sections/LogoSlider";
import PageLead from "@/components/ui/PageLead";
import ServiceSeoSection from "@/components/services/ServiceSeoSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/entity";

export const metadata = {
  title: "Web Development FAQ in India | PRNIT",
  description:
    "Common web development questions answered by PRNIT, covering timelines, pricing, scope, and delivery process for teams in India and globally.",
};

export default function WebDevelopmentFAQPage() {
  const faqItems = [
    {
      question: "How do we start with PRNIT?",
      answer: "Share your goals and current challenges. We then define scope, milestones, and delivery plan.",
    },
    {
      question: "Can PRNIT work with distributed teams?",
      answer: "Yes. Our delivery model is built for distributed collaboration, transparent updates, and predictable execution.",
    },
  ];

  const serviceSchema = getServiceSchema({
    name: "Web Development FAQ in India",
    description:
      "Common web development questions answered by PRNIT, covering timelines, pricing, scope, and delivery process for teams in India and globally.",
    url: `${siteConfig.siteUrl}/services/web-development-faq`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.siteUrl}/` },
    { name: "Services", url: `${siteConfig.siteUrl}/services` },
    { name: "Web Development FAQ", url: `${siteConfig.siteUrl}/services/web-development-faq` },
  ]);

  return (
    <main className="deep-navy scroll-smooth">
      <JsonLd data={[serviceSchema, breadcrumbSchema, getFaqSchema(faqItems)]} />
      <FAQHeroSection />
      <LogoSlider />
      <PageLead>
        This FAQ answers common questions about PRNIT web development services. It covers timelines,
        pricing expectations, process, communication, and support so teams can quickly decide the
        right next step for their product.
      </PageLead>
      <ServiceSeoSection
        h1="Web Development FAQ in India"
        explanation="This FAQ gives direct answers on scope, pricing, timelines, and delivery expectations for web development projects with PRNIT."
        internalLinks={[
          { href: "/services/web-development", label: "Web Development" },
          { href: "/services/app-development", label: "App Development" },
          { href: "/services/cloud", label: "Cloud Services" },
        ]}
        faqs={faqItems}
      />
      <FAQSection />
    </main>
  );
}
