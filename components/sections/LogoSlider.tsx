"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { logo1, logo2, logo3, logo4, logo5, logo6 } from "@/public/assets";
import Image from "next/image";

export default function LogoSlider() {
  return (
    <section className="w-full bg-[var(--deep-navy,#0b1f3b)] py-4 sm:py-5 md:py-6">
      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          allowTouchMove={false}
          className="logo-swiper"
          breakpoints={{
            640: {
              spaceBetween: 48,
            },
            768: {
              spaceBetween: 64,
            },
          }}
        >
          {[logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
            <SwiperSlide key={`${logo}-${index}`} className="!w-[120px] sm:!w-[150px] md:!w-[192px]">
              <div className="flex w-full items-center justify-center rounded-md bg-white/5 p-2 sm:p-3 md:p-4">
                <Image src={logo} alt="Logo" width={200} height={100} className="h-10 w-auto sm:h-12 md:h-16 object-contain" />
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </section>
    );
  }
