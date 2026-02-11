"use client";

import { design_and_technology } from "@/public/assets";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export default function WebDevDesignTechSection() {
  return (
    <section className="w-full py-16 md:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <SectionLabel>Our Expertise</SectionLabel>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
                Design and <span className="font-black red-text">Technology</span>
              </h2>

              <p className="text-base sm:text-lg primary-black leading-normal">
                We believe great websites are built at the intersection of stunning design and powerful technology. Our team combines creative excellence with technical expertise to deliver web solutions that not only look amazing but perform flawlessly.
              </p>
              <p className="text-base sm:text-lg primary-black leading-normal">
                If you are looking for a reliable web design company or a development partner, we can help. Our dedicated team of developers and designers is ready to bring your vision to life with cutting-edge solutions tailored to your needs.
              </p>
            </div>

            <ul className="space-y-2">
              {[
                "Pixel-perfect responsive designs",
                "SEO-optimized architecture",
                "Fast loading & high performance",
                "Secure & scalable solutions",
                "Ongoing maintenance & support",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Illustration */}
          <div>
            <Image src={design_and_technology} alt="Design and Technology" width={500} height={500} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
