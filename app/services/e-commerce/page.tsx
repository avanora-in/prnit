import EcommerceHeroSection from "@/components/services/e-commerce/EcommerceHeroSection";
import EcommerceSolutionsSection from "@/components/services/e-commerce/EcommerceSolutionsSection";
import EcommerceChallengesSection from "@/components/services/e-commerce/EcommerceChallengesSection";
import EcommerceFeaturesSection from "@/components/services/e-commerce/EcommerceFeaturesSection";
import LogoSlider from "@/components/sections/LogoSlider";

export const metadata = {
  title: "E-Commerce Development Services | PRNIT",
  description:
    "We build powerful e-commerce websites and mobile apps. Our team creates scalable online stores, marketplaces, and shopping platforms that drive sales.",
};

export default function EcommercePage() {
  return (
    <main className="deep-navy scroll-smooth">
      <EcommerceHeroSection />
      <LogoSlider />
      <EcommerceSolutionsSection />
      <EcommerceChallengesSection />
      <EcommerceFeaturesSection />
    </main>
  );
}
