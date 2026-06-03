export default function TallyFAQSection() {
  const faqs = [
    {
      question: "How long does Tally to Zoho Books migration take?",
      answer: "A standard migration takes 8–12 business days from data handover to go-live. This includes the pre-migration audit, ledger mapping, import, trial balance reconciliation, GST configuration, and team training. Complex multi-entity or multi-year migrations may take 14–18 days.",
    },
    {
      question: "Will my historical data — invoices, bills, and transactions — be migrated?",
      answer: "Yes. We migrate your complete transaction history including sales invoices, purchase bills, receipts, payments, and journal vouchers. We recommend migrating 1–3 years of historical data by default; full history migration is available on request.",
    },
    {
      question: "Will e-invoicing work in Zoho Books after migration?",
      answer: "Yes. We configure e-invoicing (IRN generation, QR codes) as part of every migration for businesses above the ₹1 crore threshold. If you're below the threshold now but approaching it, we set up the configuration in advance.",
    },
    {
      question: "What if my Tally data has errors or duplicate entries?",
      answer: "That's exactly why we run a pre-migration data audit. We identify duplicate ledgers, missing GSTINs, incorrect HSN codes, and unbalanced entries before we start importing. We clean the data with you before migration — not after.",
    },
    {
      question: "Do you work with Tally ERP 9 and TallyPrime both?",
      answer: "Yes. We handle migration from Tally ERP 9, Tally ERP, and TallyPrime. The export format differs slightly between versions; we manage all version-specific extraction.",
    },
    {
      question: "What does it cost?",
      answer: "Pricing depends on data volume, number of years of history, and complexity (single entity vs multi-entity, number of modules). We provide a fixed-price quote after the free data audit. No hourly surprises.",
    },
  ];

  return (
    <section className="bg-white primary-black py-12 sm:py-16 md:py-20 lg:py-24 border-y border-black/5">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex flex-col gap-2 mb-4">
            <div className="inline-flex items-center gap-2 sm:gap-3">
              <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                FAQ
              </p>
            </div>
            <div className="h-px w-40 sm:w-48 md:w-56 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            Frequently Asked <span className="font-black red-text">Questions</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="rounded-xl border border-black/10 bg-white/60 p-5 sm:p-6 group"
            >
              <summary className="cursor-pointer font-semibold primary-black flex items-center justify-between">
                {faq.question}
                <svg
                  className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm sm:text-base text-[var(--color-body,#4b5563)] leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
