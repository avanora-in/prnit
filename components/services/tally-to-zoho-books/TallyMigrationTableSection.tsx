export default function TallyMigrationTableSection() {
  const migrationData = [
    {
      tally: "Account Masters / Ledgers",
      zoho: "Chart of Accounts",
      notes: "CA-reviewed mapping for correct P&L categorisation",
    },
    {
      tally: "Sundry Debtors",
      zoho: "Accounts Receivable (Customers)",
      notes: "GSTIN, email, payment terms migrated",
    },
    {
      tally: "Sundry Creditors",
      zoho: "Accounts Payable (Vendors)",
      notes: "PAN, GSTIN, bank details migrated",
    },
    {
      tally: "Stock Items / Units",
      zoho: "Items & Units of Measure",
      notes: "HSN/SAC codes mapped at 6-digit level",
    },
    {
      tally: "Opening Balances",
      zoho: "Opening Balances",
      notes: "Reconciled to zero difference vs Tally trial balance",
    },
    {
      tally: "Sales Invoices",
      zoho: "Invoices",
      notes: "GST breakdowns, IRN references preserved",
    },
    {
      tally: "Purchase Bills",
      zoho: "Bills",
      notes: "Input tax credit records maintained",
    },
    {
      tally: "Receipts & Payments",
      zoho: "Customer/Vendor Payments",
      notes: "Bank account mapping included",
    },
    {
      tally: "Journal Vouchers",
      zoho: "Manual Journals",
      notes: "Date, narration, amounts preserved",
    },
    {
      tally: "Bank Reconciliation",
      zoho: "Bank Rules (partial)",
      notes: "Template rules set up post-migration",
    },
    {
      tally: "Cost Centres",
      zoho: "Reporting Tags / Branches",
      notes: "Multi-entity setup supported",
    },
  ];

  return (
    <section id="migration-table" className="bg-white primary-black py-12 sm:py-16 md:py-20 lg:py-24 border-y border-black/5">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex flex-col gap-2 mb-4">
            <div className="inline-flex items-center gap-2 sm:gap-3">
              <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                Every Field. Every Balance. Every Transaction.
              </p>
            </div>
            <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
          </div>
          <p className="text-base sm:text-lg text-[var(--color-body,#4b5563)] max-w-3xl">
            We don&apos;t just move raw data — we map Tally&apos;s accounting structure correctly to Zoho Books.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-sm">
          <table className="w-full min-w-[800px]">
            <thead className="bg-[var(--support-blue,#1f4fd8)] text-white">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Tally (Source)
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Zoho Books (Destination)
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
              {migrationData.map((row, index) => (
                <tr key={index} className="hover:bg-[var(--secondary-background,#FAFAF7)] transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm font-medium primary-black">
                    {row.tally}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm primary-black">
                    {row.zoho}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[var(--color-body,#4b5563)]">
                    {row.notes}
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
