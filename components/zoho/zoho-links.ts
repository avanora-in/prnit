import { siteConfig } from "@/lib/seo/entity";

export const zohoPagePath = "/zoho-consulting-partner";

/** Contact form anchor with optional prefill via `?interest=` */
export function zohoContactHref(interest?: string) {
  if (!interest) return `${zohoPagePath}#contact`;
  return `${zohoPagePath}?interest=${encodeURIComponent(interest)}#contact`;
}

export const zohoWhatsAppUrl = `https://wa.me/${siteConfig.phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi PRNIT, I'd like to discuss Zoho implementation for my business."
)}`;

export const zohoPhoneHref = `tel:${siteConfig.phoneE164}`;

export const zohoContactInterests = {
  consultation: "I'd like to book a free Zoho consultation.",
  newToZoho:
    "I'm new to Zoho and need help choosing the right products and implementation plan.",
  existingZoho:
    "I already use Zoho but need an audit and improvements to my current setup.",
  globalInquiry: "I'd like to discuss Zoho implementation for my business (outside listed regions).",
  industryInquiry: "I'd like to discuss Zoho implementation for my industry.",
} as const;
