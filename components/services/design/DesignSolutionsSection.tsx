import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { excellent_ui_ux_design_solutions } from "@/public/assets";
import Image from "next/image";

export default function DesignSolutionsSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <Image src={excellent_ui_ux_design_solutions} alt="Excellent UI/UX Design Solutions" width={500} height={500} className="w-full h-full object-cover" />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-4">
            <SectionLabel>Our Expertise</SectionLabel>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
                Excellent UI/UX <span className="md:block font-black red-text">Design Solutions</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                Our UI/UX design solutions provide a world-class experience to users. We follow a systematic approach that results in designs that are creative, intuitive, flexible & engaging.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-normal primary-black">
                Our team excels at delivering designs through information architecture, user stories, mock-ups, and user flows. Our track record guarantees client satisfaction with cost-effective solutions.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-2">
              {[
                "User-centered design approach",
                "Information architecture expertise",
                "Interactive prototyping & testing",
                "Design system development",
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
        </div>
      </div>
    </section>
  );
}
