export default function ZohoMigrationMethodologySection() {
  const phases = [
    {
      phase: "1",
      title: "Discovery & Mapping",
      duration: "Days 1–3",
      items: [
        "Source system data export & audit",
        "Record count verification across all objects",
        "Field-by-field mapping document — reviewed and approved by you before we start",
        "Risk identification: duplicates, missing required fields, relationship breaks",
      ],
    },
    {
      phase: "2",
      title: "Data Preparation",
      duration: "Days 3–5",
      items: [
        "Data normalisation and formatting for Zoho import",
        "Deduplication of contacts, accounts, and items",
        "Enrichment of missing required fields (GSTINs, HSN codes, etc.)",
        "Test import on a staging Zoho organisation",
      ],
    },
    {
      phase: "3",
      title: "Production Migration",
      duration: "Days 5–9",
      items: [
        "Import in correct dependency order (prevents relationship errors)",
        "Post-import validation: record counts, relationship integrity, financial reconciliation",
        "Error log review and re-import of rejected records",
      ],
    },
    {
      phase: "4",
      title: "Configuration & Go-Live",
      duration: "Days 9–12",
      items: [
        "Zoho automation rules, workflows, and approval processes configured",
        "Tax settings (GST, VAT, Sales Tax) verified for your market",
        "User roles and permissions set up",
        "Integration connections re-established (payment gateways, email, bank feeds)",
        "Team training — role-specific, recorded for future onboarding",
      ],
    },
    {
      phase: "5",
      title: "Post-Migration Support",
      duration: "Days 12–42",
      items: [
        "30-day dedicated support window",
        "Bug fixes, field mapping corrections, and additional configuration changes",
        "Monthly retainer available for ongoing Zoho management",
      ],
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
                Our Methodology
              </p>
            </div>
            <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            Structured. Validated. <span className="font-black red-text">Zero Surprises.</span>
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="rounded-2xl border border-black/10 bg-[var(--secondary-background,#FAFAF7)] p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="support-blue-background secondary-text flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-sm sm:text-base font-bold">
                    {phase.phase}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold primary-black">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-[var(--color-body,#4b5563)]">
                      {phase.duration}
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 sm:ml-16">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-2">
                    <span className="mt-[6px] sm:mt-[8px] h-1 w-1 sm:h-1.5 sm:w-1.5 shrink-0 rounded-full primary-black-background" />
                    <span className="text-sm sm:text-base text-[var(--color-body,#4b5563)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
