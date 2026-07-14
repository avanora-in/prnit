import ButtonLink from "@/components/ui/ButtonLink";

export default function TallyBottomCTASection() {
  return (
    <section className="primary-black-background secondary-text py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold syne-font max-w-2xl mx-auto">
          Ready to Leave Tally Behind?
        </h2>
        <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Book a free 30-minute migration assessment. We&apos;ll review your Tally data, confirm scope, and give you a fixed-price quote before you commit to anything.
        </p>
        <div className="flex flex-wrap gap-3 pt-2 justify-center">
          <ButtonLink href="#contact" className="block w-fit">
            Book Free Migration Assessment
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}`}
            variant="secondary"
            className="block w-fit"
          >
            WhatsApp Us Now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
