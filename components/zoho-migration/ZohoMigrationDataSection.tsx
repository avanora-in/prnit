export default function ZohoMigrationDataSection() {
  const dataCategories = [
    {
      title: "CRM migrations",
      items: [
        "Contacts, Companies/Accounts, Deals/Opportunities",
        "Activities (calls, emails, meetings)",
        "Notes, Tags, Custom Fields",
        "Pipeline Stages, Workflows (converted to Zoho rules)",
        "Email templates",
      ],
    },
    {
      title: "Finance migrations",
      items: [
        "Chart of Accounts",
        "Customers & Vendors (with tax IDs)",
        "Items & Services (with HSN/SAC or product codes)",
        "Opening Balances, Invoices, Bills, Payments, Credit Notes",
        "Bank Transactions",
        "Tax configurations (GST / VAT / Sales Tax)",
      ],
    },
    {
      title: "HR / People migrations",
      items: [
        "Employee records",
        "Leave balances",
        "Payroll history",
        "Org structure",
      ],
    },
    {
      title: "Project / Desk migrations",
      items: [
        "Projects, tasks, milestones",
        "Tickets, SLA configurations",
        "Customer communication history",
      ],
    },
    {
      title: "Custom modules",
      items: [
        "We recreate your custom fields, views, and modules in Zoho",
        "Match your source system's unique data structure",
      ],
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
                What Gets Migrated
              </p>
            </div>
            <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal mb-3">
            We Don&apos;t Just Move Data — <span className="font-black red-text">We Move Your Business Context</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-body,#4b5563)] max-w-3xl">
            Every migration includes:
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dataCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl border border-black/10 bg-white/60 p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-lg font-bold primary-black mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
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
