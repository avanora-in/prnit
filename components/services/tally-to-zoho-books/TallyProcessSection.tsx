export default function TallyProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Free Data Audit",
      description: "We export and review your Tally database. We flag data quality issues (missing GSTINs, duplicate ledgers, incorrect opening balances) before migration begins.",
    },
    {
      step: "2",
      title: "Ledger Mapping & Cleanup",
      description: "Our CA-led team maps every Tally ledger to the correct Zoho Books account. We clean duplicates, correct tax group assignments, and add missing HSN/SAC codes.",
    },
    {
      step: "3",
      title: "Structured Import in Sequence",
      description: "We import in the correct dependency order — Chart of Accounts → Contacts → Items → Opening Balances → Transactions. Incorrect sequence is the #1 cause of failed DIY migrations.",
    },
    {
      step: "4",
      title: "Trial Balance Reconciliation",
      description: "We reconcile your Zoho Books trial balance against your Tally trial balance to zero difference. You won't go live until the numbers match.",
    },
    {
      step: "5",
      title: "GST Configuration + Go-Live Training",
      description: "We configure GST settings, e-invoicing, payment terms, invoice templates, and bank feeds. We train your accounts team on Zoho Books workflows. You go live confident.",
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
                Our Process
              </p>
            </div>
            <div className="h-px w-40 sm:w-48 md:w-56 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            How We Migrate Your Tally Data — <span className="font-black red-text">Start to Finish</span>
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 sm:gap-6 md:gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <span className="support-blue-background secondary-text flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-sm sm:text-base font-bold">
                  {item.step}
                </span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg sm:text-xl font-bold primary-black mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-body,#4b5563)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
