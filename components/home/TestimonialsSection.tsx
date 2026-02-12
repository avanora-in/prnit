"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { industries_we_serve_section_bg } from "@/public/assets";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "COO, Creative Agency",
    text: "Unlock your potential with our tailored solutions that drive innovation and efficiency.",
  },
  {
    name: "Michael Smith",
    role: "Founder, NextGen Solutions",
    text: "Empowering companies to reach new heights with strategic insights and support.",
  },
  {
    name: "Emily Clark",
    role: "Founder, Creative Agency",
    text: "Unlock the potential of your projects with our innovative solutions tailored to your needs.",
  },
  {
    name: "David Smith",
    role: "Managing Director, Startup Inc.",
    text: "Transform your business strategy with our proven techniques and customer-centric approach.",
  },
  {
    name: "Laura Johnson",
    role: "VP of Operations, Growth Hub",
    text: "Experience unparalleled growth through our comprehensive support and strategic insights.",
  },
  {
    name: "James Lee",
    role: "Lead Strategist, Future Vision",
    text: "Leveraging technology to streamline processes and enhance collaboration.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full relative overflow-hidden secondary-background py-24"
    >
      {/* Background Image */}
      <Image
        src={industries_we_serve_section_bg}
        alt="Testimonials Background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6 space-y-8 sm:space-y-10 md:space-y-12">
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <SectionLabel lineClassName="w-60 sm:w-70 md:w-90 primary-black-background">
            Client Testimonials
          </SectionLabel>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black primary-black">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-base md:text-lg leading-normal primary-black">
              Discover how we&apos;ve helped businesses achieve their goals through our dedicated service and expertise.
            </p>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* Top row - slides left */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            allowTouchMove={false}
            className="testimonial-swiper-left"
            breakpoints={{
              640: {
                spaceBetween: 14,
              },
              768: {
                spaceBetween: 16,
              },
            }}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <SwiperSlide key={`${t.name}-top-${index}`} className="!w-[260px] sm:!w-[280px] md:!w-[312px]">
                <article className="flex h-full min-w-[260px] sm:min-w-[280px] md:min-w-[312px] flex-col gap-4 rounded-xl sm:rounded-2xl border border-black/5 secondary-background p-3 sm:p-4">
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
                    <path d="M20.1866 25.7745C21.4453 25.7745 22.4851 26.2647 23.306 27.2451C24.1269 28.171 24.5373 29.5055 24.5373 31.2484C24.5373 32.3377 24.3731 33.3725 24.0448 34.3529C23.7164 35.3333 23.2239 36.2048 22.5672 36.9673C21.9104 37.7298 21.0896 38.3562 20.1045 38.8464C19.1194 39.2821 17.9701 39.5 16.6567 39.5C15.7811 39.5 14.9602 39.3911 14.194 39.1732C13.4826 38.9009 12.8532 38.4924 12.306 37.9477C11.7587 37.3486 11.3209 36.5588 10.9925 35.5784C10.6642 34.598 10.5 33.3453 10.5 31.8203C10.5 29.6416 10.8284 27.5174 11.4851 25.4477C12.1418 23.378 13.0174 21.5261 14.1119 19.8922C15.2612 18.2582 16.5473 16.951 17.9701 15.9706C19.393 14.9902 20.898 14.5 22.4851 14.5C23.7438 14.5 24.5647 14.7996 24.9478 15.3987C25.3856 15.9434 25.6045 16.597 25.6045 17.3595C25.6045 17.5773 25.3035 17.9586 24.7015 18.5033C24.1542 19.0479 23.5522 19.7015 22.8955 20.4641C22.2388 21.1721 21.6095 21.9891 21.0075 22.915C20.4602 23.841 20.1866 24.7941 20.1866 25.7745ZM38.0821 25.7745C39.3408 25.7745 40.3806 26.2647 41.2015 27.2451C42.0224 28.171 42.4328 29.5055 42.4328 31.2484C42.4328 32.3377 42.2687 33.3725 41.9403 34.3529C41.6119 35.3333 41.1194 36.2048 40.4627 36.9673C39.806 37.7298 38.9851 38.3562 38 38.8464C37.0149 39.2821 35.8657 39.5 34.5522 39.5C33.6766 39.5 32.8557 39.3911 32.0896 39.1732C31.3781 38.9009 30.7488 38.4924 30.2015 37.9477C29.6542 37.3486 29.2164 36.5588 28.8881 35.5784C28.5597 34.598 28.3955 33.3453 28.3955 31.8203C28.3955 29.6416 28.7239 27.5174 29.3806 25.4477C30.0373 23.378 30.9129 21.5261 32.0075 19.8922C33.1567 18.2582 34.4428 16.951 35.8657 15.9706C37.2886 14.9902 38.7935 14.5 40.3806 14.5C41.6393 14.5 42.4602 14.7996 42.8433 15.3987C43.2811 15.9434 43.5 16.597 43.5 17.3595C43.5 17.5773 43.199 17.9586 42.597 18.5033C42.0498 19.0479 41.4478 19.7015 40.791 20.4641C40.1343 21.1721 39.505 21.9891 38.903 22.915C38.3557 23.841 38.0821 24.7941 38.0821 25.7745Z" fill="#8B1E2D" />
                  </svg>
                  <p className="text-sm sm:text-base primary-black italic">
                    {t.text}
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                    <div className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full neutral-grey-background" />
                    <div className="space-y-0.5">
                      <p className="text-sm sm:text-base primary-black font-semibold">
                        {t.name}
                      </p>
                      <p className="text-xs primary-black">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom row - slides right */}
          <div className="testimonial-swiper-right-wrapper">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={12}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={4000}
              allowTouchMove={false}
              className="testimonial-swiper-right"
              breakpoints={{
                640: {
                  spaceBetween: 14,
                },
                768: {
                  spaceBetween: 16,
                },
              }}
            >
              {[...testimonials, ...testimonials].map((t, index) => (
                <SwiperSlide key={`${t.name}-bottom-${index}`} className="!w-[260px] sm:!w-[280px] md:!w-[312px]">
                  <article className="flex h-full min-w-[260px] sm:min-w-[280px] md:min-w-[312px] flex-col gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-black/5 secondary-background p-3 sm:p-4">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 md:w-[54px] md:h-[54px]">
                      <path d="M20.1866 25.7745C21.4453 25.7745 22.4851 26.2647 23.306 27.2451C24.1269 28.171 24.5373 29.5055 24.5373 31.2484C24.5373 32.3377 24.3731 33.3725 24.0448 34.3529C23.7164 35.3333 23.2239 36.2048 22.5672 36.9673C21.9104 37.7298 21.0896 38.3562 20.1045 38.8464C19.1194 39.2821 17.9701 39.5 16.6567 39.5C15.7811 39.5 14.9602 39.3911 14.194 39.1732C13.4826 38.9009 12.8532 38.4924 12.306 37.9477C11.7587 37.3486 11.3209 36.5588 10.9925 35.5784C10.6642 34.598 10.5 33.3453 10.5 31.8203C10.5 29.6416 10.8284 27.5174 11.4851 25.4477C12.1418 23.378 13.0174 21.5261 14.1119 19.8922C15.2612 18.2582 16.5473 16.951 17.9701 15.9706C19.393 14.9902 20.898 14.5 22.4851 14.5C23.7438 14.5 24.5647 14.7996 24.9478 15.3987C25.3856 15.9434 25.6045 16.597 25.6045 17.3595C25.6045 17.5773 25.3035 17.9586 24.7015 18.5033C24.1542 19.0479 23.5522 19.7015 22.8955 20.4641C22.2388 21.1721 21.6095 21.9891 21.0075 22.915C20.4602 23.841 20.1866 24.7941 20.1866 25.7745ZM38.0821 25.7745C39.3408 25.7745 40.3806 26.2647 41.2015 27.2451C42.0224 28.171 42.4328 29.5055 42.4328 31.2484C42.4328 32.3377 42.2687 33.3725 41.9403 34.3529C41.6119 35.3333 41.1194 36.2048 40.4627 36.9673C39.806 37.7298 38.9851 38.3562 38 38.8464C37.0149 39.2821 35.8657 39.5 34.5522 39.5C33.6766 39.5 32.8557 39.3911 32.0896 39.1732C31.3781 38.9009 30.7488 38.4924 30.2015 37.9477C29.6542 37.3486 29.2164 36.5588 28.8881 35.5784C28.5597 34.598 28.3955 33.3453 28.3955 31.8203C28.3955 29.6416 28.7239 27.5174 29.3806 25.4477C30.0373 23.378 30.9129 21.5261 32.0075 19.8922C33.1567 18.2582 34.4428 16.951 35.8657 15.9706C37.2886 14.9902 38.7935 14.5 40.3806 14.5C41.6393 14.5 42.4602 14.7996 42.8433 15.3987C43.2811 15.9434 43.5 16.597 43.5 17.3595C43.5 17.5773 43.199 17.9586 42.597 18.5033C42.0498 19.0479 41.4478 19.7015 40.791 20.4641C40.1343 21.1721 39.505 21.9891 38.903 22.915C38.3557 23.841 38.0821 24.7941 38.0821 25.7745Z" fill="#8B1E2D" />
                    </svg>
                    <p className="text-sm sm:text-base primary-black italic">
                      {t.text}
                    </p>
                    <div className="mt-auto flex items-center gap-2">
                      <div className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full neutral-grey-background" />
                      <div className="space-y-0.5">
                        <p className="text-sm sm:text-base primary-black font-semibold">
                          {t.name}
                        </p>
                        <p className="text-xs primary-black">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
