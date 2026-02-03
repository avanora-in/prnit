import FAQHeroSection from "@/components/services/faq/FAQHeroSection";
import FAQSection from "@/components/services/faq/FAQSection";
import LogoSlider from "@/components/sections/LogoSlider";

export const metadata = {
  title: "Web Development FAQ | PRNIT",
  description:
    "Find answers to frequently asked questions about web development services, pricing, timelines, and more. Get all the information you need before starting your project.",
};

export default function WebDevelopmentFAQPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <FAQHeroSection />
      <LogoSlider />
      <FAQSection />
    </main>
  );
}
