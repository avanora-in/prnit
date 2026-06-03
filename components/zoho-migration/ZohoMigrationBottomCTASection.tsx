import ButtonLink from "@/components/ui/ButtonLink";

export default function ZohoMigrationBottomCTASection() {
  return (
    <section className="primary-black-background secondary-text py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold syne-font max-w-2xl mx-auto">
          Tell Us What You're Migrating From
        </h2>
        <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Share your current system and we'll tell you exactly how we'd migrate it, in what timeframe, and at what cost — before you commit to anything.
        </p>
        <div className="flex flex-wrap gap-3 pt-2 justify-center">
          <ButtonLink href="#contact" className="block w-fit">
            Get a Free Migration Assessment
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}`}
            variant="secondary"
            className="block w-fit"
          >
            WhatsApp Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
