"use client";

import Link from "next/link";
import Image from "next/image";
import { logo_white } from "@/public/assets";
import ButtonLink from "@/components/ui/ButtonLink";
export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full secondary-background secondary-text">
      <div className="rounded-t-[24px] sm:rounded-t-[32px] md:rounded-t-[48px] deep-navy">
        <div className="mx-auto max-w-[1320px] px-4 pb-4 pt-8 sm:px-5 sm:pb-5 sm:pt-10 md:px-6 md:pb-8 md:pt-16">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 pb-6 sm:pb-8 md:pb-10 border-b border-white/20">
            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-5 md:gap-6">
              <div className="space-y-3 sm:space-y-4 max-w-2xl">
                <Link href="/">
                  <Image src={logo_white} alt="PRNIT" width={120} height={120} className="h-6 w-auto sm:h-7 md:h-8 mb-3 sm:mb-4" />
                </Link>
                <p className="text-base sm:text-base md:text-lg leading-normal">
                  If you&apos;re looking to grow your business, expand your market reach, and build long-term success,
                  our team partners with you to deliver reliable, scalable, and result-driven digital solutions.
                </p>
              </div>
              <ButtonLink variant="secondary" onClick={scrollToTop} className="block w-fit">
                Scroll Up
              </ButtonLink>
            </div>
          </div>
          <div className="grid py-6 sm:py-8 md:py-10 text-xs sm:text-sm md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="space-y-3 sm:space-y-4 py-6 md:py-0 md:pr-6">
              <h3 className="text-base sm:text-lg font-black">Our Services</h3>
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-2.5 md:gap-y-3">
                <Link href="/#services" className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">App Development</Link>

                <Link href="/#services" className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">Cloud Services</Link>

                <Link href="/#services" className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">Web Development</Link>

                <Link href="/#services" className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">CMS Development</Link>

                <Link href="/#services" className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">UI/UX Design</Link>

                <Link href="/#services" className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">QA &amp; Testing</Link>

                <Link href="/#services" className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">eCommerce Solutions</Link>

                <Link href="/#services" className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">Pricing &amp; Plans</Link>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 md:text-center py-6 md:py-0 md:px-6">
              <h3 className="text-base sm:text-lg font-black">Social Media</h3>
              <div className="space-y-3 sm:space-y-4 flex flex-col md:items-center">
                <Link href="https://www.facebook.com/prnitsoftware" target="_blank"
                  className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">
                  Facebook
                </Link>
                <Link href="https://www.instagram.com/prnitsoftware" target="_blank" 
                className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">
                  Instagram
                </Link>
                <Link href="https://www.twitter.com/prnitsoftware" target="_blank" 
                className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">
                  Twitter/X
                </Link>
                  <Link href="https://www.linkedin.com/company/prnitsoftware" target="_blank" 
                className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">
                  LinkedIn
                </Link>
                <Link href="https://www.dribbble.com/prnitsoftware" target="_blank" 
                className="relative block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100 w-fit">
                  Dribbble
                </Link>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 py-6 md:py-0 md:px-6">
              <h3 className="text-base sm:text-lg font-black">Need Assistance?</h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <p>
                  <span className="font-semibold">Email: </span>
                  <Link href="mailto:hello@prnit.com" className="relative inline-block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100">hello@prnit.com</Link>
                </p>
                <p>
                  <span className="font-semibold">Call: </span>
                  <Link href="tel:+919785394461" className="relative inline-block transition-colors duration-300 ease-in-out hover:text-[#8B1E2D]
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#8B1E2D]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out
                    hover:after:scale-x-100">+91 97853 94461</Link>
                </p>
                <p>
                  <span className="font-semibold">Address: </span>
                  24-A, Umraw Vihar, Gokulpura,
                  <br />
                  Jhotwara, Jaipur – 302012
                </p>
                <p>
                  <span className="font-semibold">Business Hours: </span>
                  Monday – Friday, 10:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>
          </div>
          <hr className="border-white/20" />
          <p className="pt-6 sm:pt-7 md:pt-8 text-center text-xs">
            © 2026 PRNIT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
