import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { mobile_app_development } from "@/public/assets";
import Image from "next/image";

export default function AppDevExpertSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <Image src={mobile_app_development} alt="Mobile App Development" width={500} height={500} className="w-full h-full object-cover" />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <SectionLabel>Our Expertise</SectionLabel>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
                Experienced Mobile App <span className="md:block font-black red-text">Development Team</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                Our mobile app development team specializes in building feature-rich, scalable, and high-performance applications. We combine technical expertise with creative design to deliver apps that users love and businesses rely on.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                With over a decade of experience across iOS, Android, and cross-platform development, we&apos;ve helped startups and enterprises launch successful apps that drive real business results.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-2">
              {[
                "10+ years of mobile development experience",
                "Agile methodology with continuous delivery",
                "Post-launch support & maintenance included",
                "Transparent communication throughout",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black">{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="#contact" className="block w-fit">
              Start Your Project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
