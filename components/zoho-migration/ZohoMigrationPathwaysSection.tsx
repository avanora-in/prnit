export default function ZohoMigrationPathwaysSection() {
  const pathways = [
    {
      source: "Tally ERP / TallyPrime",
      target: "Zoho Books",
      timeline: "8–12 days",
      challenge: "Ledger mapping, GST config, trial balance reconciliation",
    },
    {
      source: "QuickBooks (Desktop/Online)",
      target: "Zoho Books",
      timeline: "5–8 days",
      challenge: "Multi-currency, US Sales Tax, chart of accounts mapping",
    },
    {
      source: "Xero",
      target: "Zoho Books",
      timeline: "4–7 days",
      challenge: "Bank reconciliation history, invoice numbering continuity",
    },
    {
      source: "Salesforce",
      target: "Zoho CRM",
      timeline: "10–20 days",
      challenge: "Custom objects, workflows, field mapping, relationship integrity",
    },
    {
      source: "HubSpot",
      target: "Zoho CRM",
      timeline: "5–10 days",
      challenge: "Contact deduplication, deal pipeline mapping, email history",
    },
    {
      source: "Pipedrive",
      target: "Zoho CRM",
      timeline: "4–8 days",
      challenge: "Pipeline stages, deal custom fields, activity history",
    },
    {
      source: "Microsoft Dynamics",
      target: "Zoho CRM / Books",
      timeline: "15–30 days",
      challenge: "Complex entity relationships, custom modules, integrations",
    },
    {
      source: "Spreadsheets (Excel/Sheets)",
      target: "Zoho CRM / Books",
      timeline: "3–7 days",
      challenge: "Data normalisation, deduplication, formula-to-field mapping",
    },
    {
      source: "Zoho to Zoho",
      target: "Any Zoho product",
      timeline: "5–12 days",
      challenge: "Cross-org migration, data reshaping, custom module recreation",
    },
    {
      source: "Custom / Legacy Systems",
      target: "Zoho One suite",
      timeline: "Scoped per project",
      challenge: "API extraction, data transformation, validation layer",
    },
  ];

  return (
    <section id="migration-pathways" className="bg-white primary-black py-12 sm:py-16 md:py-20 lg:py-24 border-y border-black/5">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex flex-col gap-2 mb-4">
            <div className="inline-flex items-center gap-2 sm:gap-3">
              <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                Migration Pathways
              </p>
            </div>
            <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal mb-3">
            What Are You <span className="font-black red-text">Migrating From?</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-body,#4b5563)] max-w-3xl">
            We've built migration playbooks for every major platform. Select your source system:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-sm">
          <table className="w-full min-w-[900px]">
            <thead className="bg-[var(--support-blue,#1f4fd8)] text-white">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Source System
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Target in Zoho
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Typical Timeline
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Key Challenge We Solve
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
              {pathways.map((row, index) => (
                <tr key={index} className="hover:bg-[var(--secondary-background,#FAFAF7)] transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm font-medium primary-black">
                    {row.source}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm primary-black">
                    {row.target}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[var(--color-body,#4b5563)]">
                    {row.timeline}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[var(--color-body,#4b5563)]">
                    {row.challenge}
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
