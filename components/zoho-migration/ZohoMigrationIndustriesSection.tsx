export default function ZohoMigrationIndustriesSection() {
  const industries = [
    {
      title: "Trading & Distribution",
      description: "Multi-warehouse, multi-entity, multi-currency setups from Tally and Excel",
    },
    {
      title: "Manufacturing & Supply Chain",
      description: "Production orders, BOM migration from legacy ERP",
    },
    {
      title: "Professional Services",
      description: "Billing systems, client management from QuickBooks or custom tools",
    },
    {
      title: "Real Estate & Property",
      description: "Lease management, project tracking from Excel and legacy software",
    },
    {
      title: "SaaS & Technology Companies",
      description: "CRM migration from HubSpot, Salesforce, or Pipedrive to Zoho CRM",
    },
    {
      title: "Healthcare & Clinics",
      description: "Patient records, billing from legacy systems into Zoho Creator / Books",
    },
    {
      title: "E-commerce & D2C Brands",
      description: "Order management, customer data from Shopify/WooCommerce to Zoho Inventory + CRM",
    },
    {
      title: "Logistics & Field Services",
      description: "Route management, customer data from spreadsheets to Zoho CRM + Desk",
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
                Industries
              </p>
            </div>
            <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            Migration Experience <span className="font-black red-text">Across Industries</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="rounded-2xl border border-black/10 bg-[var(--secondary-background,#FAFAF7)] p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold primary-black mb-2">{industry.title}</h3>
              <p className="text-sm sm:text-base text-[var(--color-body,#4b5563)] leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
