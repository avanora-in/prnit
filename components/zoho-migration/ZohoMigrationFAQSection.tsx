export default function ZohoMigrationFAQSection() {
  const faqs = [
    {
      question: "Can you migrate from any source system?",
      answer: "We have proven playbooks for Tally, QuickBooks, Xero, Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, and Excel. For custom legacy systems, we conduct a discovery session to assess extractability and scope. If your data can be exported (in any format), we can migrate it.",
    },
    {
      question: "Will my historical data and records be migrated?",
      answer: "Yes. We migrate historical records — typically 2–3 years by default. Full history migration is available on request and is factored into the project scope and pricing.",
    },
    {
      question: "What happens to our integrations and automations?",
      answer: "We audit your existing integrations and automation rules before migration. Where possible, we recreate equivalent automations in Zoho's native workflow engine. Third-party integrations (payment gateways, bank feeds, e-commerce) are reconnected post-migration.",
    },
    {
      question: "Do we need to shut down operations during migration?",
      answer: "No. We migrate to a staging Zoho org first, validate everything, then do a final delta migration at go-live (usually a weekend cutover). You keep operating in your source system until the moment you switch.",
    },
    {
      question: "How do you handle data privacy during migration?",
      answer: "All data is handled under strict NDA and in accordance with our ISO/IEC 27001:2022 certification. We do not store your data beyond the project duration and process everything in secure environments.",
    },
    {
      question: "What is included in the 30-day post-migration support?",
      answer: "Any issue arising directly from the migration — missing records, incorrect field mapping, workflow errors, or configuration problems — is resolved at no charge within the 30-day window. This is a fixed-price commitment, not a time-and-materials support arrangement.",
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
            <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
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
