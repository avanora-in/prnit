export default function TallyComparisonSection() {
  const comparisons = [
    { feature: "Ledger mapping", diy: "Best-guess mapping", prnit: "CA-reviewed, accounting-correct" },
    { feature: "Trial balance", diy: "Rarely reconciled", prnit: "Zero-difference guaranteed" },
    { feature: "GST / e-invoicing", diy: "Manual setup", prnit: "Configured from Day 1" },
    { feature: "Import sequence", diy: "Often wrong, causes errors", prnit: "Correct dependency order" },
    { feature: "Data cleanup", diy: "As-is export", prnit: "Pre-migration audit & cleanup" },
    { feature: "Training", diy: "None", prnit: "Role-specific team training included" },
    { feature: "Timeline", diy: "Weeks of troubleshooting", prnit: "8–12 business days" },
    { feature: "Support after go-live", diy: "None", prnit: "30-day post-migration support" },
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
                Why Choose PRNIT
              </p>
            </div>
            <div className="h-px w-40 sm:w-48 md:w-56 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            Over <span className="font-black red-text">DIY Migration</span>
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-sm">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[var(--support-blue,#1f4fd8)] text-white">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Feature
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  DIY Migration
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  PRNIT Migration
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
              {comparisons.map((row, index) => (
                <tr key={index} className="hover:bg-[var(--secondary-background,#FAFAF7)] transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm font-medium primary-black">
                    {row.feature}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[var(--color-body,#4b5563)]">
                    {row.diy}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm font-semibold support-blue">
                    {row.prnit}
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
