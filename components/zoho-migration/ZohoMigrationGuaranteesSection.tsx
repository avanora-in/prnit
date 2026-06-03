export default function ZohoMigrationGuaranteesSection() {
  const guarantees = [
    {
      guarantee: "Zero Data Loss",
      meaning: "Every record in your source system arrives in Zoho. We verify by record count before and after.",
    },
    {
      guarantee: "Financial Reconciliation",
      meaning: "For accounting migrations, your Zoho trial balance matches your source system's trial balance to the rupee/dollar/dirham.",
    },
    {
      guarantee: "Fixed Scope & Price",
      meaning: "The price you agree upfront is the price you pay. No hourly overruns.",
    },
    {
      guarantee: "Go-Live Confidence",
      meaning: "We don't close the migration until you and your team are operational in Zoho.",
    },
    {
      guarantee: "30-Day Post-Migration Support",
      meaning: "After go-live, we fix any migration-related issues within 1 business day at no extra cost.",
    },
    {
      guarantee: "Compliance Ready",
      meaning: "GST, VAT, or Sales Tax is configured and tested before you send your first invoice.",
    },
  ];

  return (
    <section className="secondary-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex flex-col gap-2 mb-4">
            <div className="inline-flex items-center gap-2 sm:gap-3">
              <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                Our Guarantees
              </p>
            </div>
            <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            What We Promise — <span className="font-black red-text">In Writing</span>
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-sm">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[var(--support-blue,#1f4fd8)] text-white">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Guarantee
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  What It Means
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
              {guarantees.map((row, index) => (
                <tr key={index} className="hover:bg-[var(--secondary-background,#FAFAF7)] transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm font-medium primary-black">
                    {row.guarantee}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[var(--color-body,#4b5563)]">
                    {row.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
