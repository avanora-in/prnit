import AndroidHeroSection from "@/components/services/android/AndroidHeroSection";
import AndroidTransformSection from "@/components/services/android/AndroidTransformSection";
import AndroidServicesSection from "@/components/services/android/AndroidServicesSection";
import AndroidFeaturesSection from "@/components/services/android/AndroidFeaturesSection";
import AppDevProcessSection from "@/components/sections/ProcessSection";
import AndroidCompanySection from "@/components/services/android/AndroidCompanySection";
import LogoSlider from "@/components/sections/LogoSlider";
import TechnologiesSection from "@/components/sections/Technologies";

export const metadata = {
  title: "Android App Development Services | PRNIT",
  description:
    "We provide expert Android app development services. Our team builds high-quality Android applications using Kotlin, Java, and the latest Android technologies.",
};

export default function AndroidPage() {
  return (
    <main className="deep-navy scroll-smooth">
      <AndroidHeroSection />
      <LogoSlider />
      <AndroidTransformSection />
      <AndroidServicesSection />
      <AppDevProcessSection />
      <AndroidFeaturesSection />
      <TechnologiesSection />
      <AndroidCompanySection />
    </main>
  );
}
