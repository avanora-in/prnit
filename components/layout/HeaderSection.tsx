"use client";
import Image from "next/image";
import { logo } from "@/public/assets";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";

const SCROLL_THRESHOLD = 10;
const TOP_THRESHOLD = 20;

// Service menu items
const serviceMenuItems = [
  { name: "App Development", href: "/services/app-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Design", href: "/services/design" },
  { name: "E-Commerce", href: "/services/e-commerce" },
  { name: "CMS", href: "/services/cms" },
  { name: "IOS", href: "/services/ios" },
  { name: "Android", href: "/services/android" },
  { name: "Cloud (Google Cloud | AWS)", href: "/services/cloud" },
  { name: "QA & Testing", href: "/services/qa-testing" },
  { name: "Strategy & Consulting", href: "/how-we-work" },
  { name: "Web Development FAQ", href: "/services/web-development-faq" },
];

// Service cards data
const serviceCards = [
  {
    title: "Design",
    description: "UI/UX design, branding, and creative solutions",
    href: "/services/design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "App Development",
    description: "Native & cross-platform mobile applications",
    href: "/services/app-development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Modern web apps & enterprise solutions",
    href: "/services/web-development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Cloud",
    description: "Google Cloud & AWS infrastructure",
    href: "/#services",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

export default function HeaderSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => {
      // Keep header visible when mobile menu is open
      if (mobileMenuOpen) {
        setVisible(true);
        return;
      }

      const y = window.scrollY ?? document.documentElement.scrollTop;
      if (y <= TOP_THRESHOLD) {
        setVisible(true);
      } else if (y > lastScrollY.current + SCROLL_THRESHOLD) {
        setVisible(false);
        setServicesDropdownOpen(false);
      } else if (y < lastScrollY.current - SCROLL_THRESHOLD) {
        setVisible(true);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (mobileMenuOpen && headerRef.current && !headerRef.current.contains(target)) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, { passive: true });
      // Lock body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll when mobile menu is closed
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 flex justify-center pt-3 sm:pt-4 md:pt-6 transition-transform duration-300 ease-out"
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
      >
        <div className="border neutral-grey-border rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 md:px-4 md:py-3 secondary-background backdrop-blur-md w-full max-w-[1320px] mx-2 sm:mx-3 md:mx-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" onClick={closeMobileMenu}>
                <Image src={logo} alt="PRNIT" width={120} height={120} className="h-6 w-auto sm:h-7 md:h-8" />
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm font-semibold primary-black md:flex">
                <Link href="/" className="transition-colors hover:text-[var(--support-blue,#1f4fd8)]">
                  HOME
                </Link>
                <Link href="/how-we-work" className="transition-colors hover:text-[var(--support-blue,#1f4fd8)]">
                  HOW WE WORK
                </Link>
                {/* Services with dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 transition-colors hover:text-[var(--support-blue,#1f4fd8)] ${servicesDropdownOpen ? "text-[var(--support-blue,#1f4fd8)]" : ""
                      }`}
                  >
                    SERVICES
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <Link href="/blog" className="transition-colors hover:text-[var(--support-blue,#1f4fd8)]">
                  BLOG
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg transition-colors hover:bg-[rgba(15,15,15,0.05)]"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 primary-black"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              <ButtonLink href="#contact" className="hidden md:block text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5">Get a quote</ButtonLink>
            </div>
          </div>

          {/* Mobile Menu */}
          <nav
            className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
              ? "max-h-[70vh] overflow-y-auto opacity-100 mt-4 pt-4 border-t neutral-grey-border"
              : "max-h-0 overflow-hidden opacity-0 mt-0 pt-0 border-t-0"
              }`}
          >
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-sm font-semibold primary-black transition-colors hover:text-[var(--support-blue,#1f4fd8)] py-2"
              >
                HOME
              </Link>
              <Link
                href="/how-we-work"
                onClick={closeMobileMenu}
                className="text-sm font-semibold primary-black transition-colors hover:text-[var(--support-blue,#1f4fd8)] py-2"
              >
                HOW WE WORK
              </Link>
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-sm font-semibold primary-black transition-colors hover:text-[var(--support-blue,#1f4fd8)] py-2"
                >
                  SERVICES
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[800px] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                >

                  {/* Service Menu Links */}
                  <div className="pl-4 py-2 space-y-0 border-l-2 border-[var(--support-blue,#1f4fd8)] ml-2">
                    {serviceMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block text-sm primary-black/80 transition-colors hover:text-[var(--support-blue,#1f4fd8)] py-3 min-h-[44px] flex items-center"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Featured Services Cards */}
                  <div className="mt-4 pt-4 border-t border-black/8">
                    <p className="text-xs font-bold primary-black/60 uppercase tracking-wide mb-3 ml-2">
                      Featured Services
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceCards.map((card) => (
                        <Link
                          key={card.title}
                          href={card.href}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-2 p-3 rounded-xl border border-[rgba(15,15,15,0.06)] bg-white/50 hover:bg-white hover:border-[var(--support-blue,#1f4fd8)]/20 transition-all"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--support-blue,#1f4fd8)]/10 flex items-center justify-center text-[var(--support-blue,#1f4fd8)]">
                            {card.icon}
                          </div>
                          <span className="text-xs font-semibold primary-black line-clamp-1">
                            {card.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Link to main services page */}
                  <Link
                    href="/services"
                    onClick={closeMobileMenu}
                    className="block py-4 px-2 flex items-center text-sm font-bold text-[var(--support-blue,#1f4fd8)] mt-4 border-t border-[rgba(15,15,15,0.08)]"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="text-sm font-semibold primary-black transition-colors hover:text-[var(--support-blue,#1f4fd8)] py-2"
              >
                BLOG
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Services Dropdown (Desktop only) */}
      <div
        className={`fixed inset-x-0 z-40 hidden md:flex justify-center transition-all duration-300 ease-out ${servicesDropdownOpen && visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        style={{ top: "80px" }}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <div className="w-full max-w-[1320px] mx-2 sm:mx-3 md:mx-4 secondary-background border neutral-grey-border rounded-lg shadow-lg backdrop-blur-md">
          <div className="px-4 sm:px-6 md:px-8 py-6 lg:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Left: Service Menu Links */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4 lg:mb-5">
                  <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                    <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                  </div>
                  <h6 className="text-xs md:text-sm xl:text-base font-black primary-black uppercase tracking-wide">
                    Our Services
                  </h6>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-0.5">
                  {serviceMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="group flex items-center gap-2 py-1.5 lg:py-2 text-sm primary-black/80 transition-colors hover:text-[var(--support-blue,#1f4fd8)] whitespace-nowrap"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: Service Cards */}
              <div className="lg:col-span-7 pt-4 lg:pt-0 border-t lg:border-t-0 border-black/5">
                <div className="flex items-center gap-3 mb-4 lg:mb-5">
                  <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                    <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                  </div>
                  <h6 className="text-xs md:text-sm xl:text-base font-black primary-black uppercase tracking-wide">
                    Featured Services
                  </h6>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4">
                  {serviceCards.map((card) => (
                    <Link
                      key={card.title}
                      href={card.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="group flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl border border-black/5 secondary-background"
                    >
                      <div className="flex-shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-lg text-[var(--support-blue,#1f4fd8)] group-hover:text-white group-hover:bg-[var(--support-blue,#1f4fd8)] border border-black/5 flex items-center justify-center">
                        {card.icon}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold primary-black text-sm group-hover:text-[var(--support-blue,#1f4fd8)] transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-xs primary-black/60 mt-0.5 lg:mt-1 line-clamp-1 lg:line-clamp-2 hidden md:block">
                          {card.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-[rgba(15,15,15,0.06)] flex items-center justify-between">
              <Link
                href="/services"
                onClick={() => setServicesDropdownOpen(false)}
                className="text-sm font-semibold text-[var(--support-blue,#1f4fd8)] hover:underline flex items-center gap-2"
              >
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <ButtonLink
                href="#contact"
                onClick={() => setServicesDropdownOpen(false)}
                className="text-sm px-5 py-2"
              >
                Get a quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay when dropdown is open */}
      <div
        className={`fixed inset-0 z-30 bg-black/10 backdrop-blur-sm transition-opacity duration-300 hidden md:block ${servicesDropdownOpen && visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setServicesDropdownOpen(false)}
      />
    </>
  );
}
