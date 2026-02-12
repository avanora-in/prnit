import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { transparent_approach_to_design_excellence } from "@/public/assets";
import Image from "next/image";

export default function DesignApproachSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-4">
            <SectionLabel>Our Approach</SectionLabel>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
                Transparent Approach to <span className="font-black red-text">Design Excellence</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                Our transparent approach provides clients with full visibility into the design process. We follow a step-by-step methodology for designing every application according to user expectations.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                Our experienced UI/UX designers understand the importance of user requirements while keeping in mind the latest design trends, cost efficiency, and project timelines.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-2">
              {[
                "User research & persona development",
                "Wireframing & interactive prototyping",
                "Visual design & branding systems",
                "Usability testing & iteration",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-base sm:text-lg primary-black leading-normal">{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink href="#contact" className="block w-fit mt-4 md:mt-6">
              Start Your Project
            </ButtonLink>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <Image src={transparent_approach_to_design_excellence} alt="Transparent Approach to Design Excellence" width={500} height={500} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
