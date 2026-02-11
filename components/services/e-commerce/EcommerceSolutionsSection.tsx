"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { ecommerce_website_app_development } from "@/public/assets";
import Image from "next/image";

export default function EcommerceSolutionsSection() {

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Visual */}
          <div className="order-2 lg:order-1">
            <Image src={ecommerce_website_app_development} alt="E-Commerce Website & App Development" width={500} height={500} className="w-full h-full object-cover" />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <SectionLabel>Our Expertise</SectionLabel>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
                E-Commerce Website & <span className="font-black red-text">App Development</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg primary-black">
                Whether you&apos;re an aspiring entrepreneur or a running e-commerce business, our development services address every facet of e-commerce solutions from simple to complex implementations.
              </p>
              <p className="text-sm sm:text-base md:text-lg primary-black">
                Our team helps you strategically launch e-commerce applications that sell products, offer discounts, display brand identity, and serve as a gateway for physical stores.
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-2">
              {[
                "Custom e-commerce platform development",
                "Multi-vendor marketplace solutions",
                "Payment gateway integration",
                "Inventory management systems",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-base sm:text-lg primary-black">{item}</span>
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
