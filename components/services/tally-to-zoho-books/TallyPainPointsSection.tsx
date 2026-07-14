export default function TallyPainPointsSection() {
  const painPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Manual backups & data loss risk",
      description: "Tally stores data locally. No internet = no access. One hard drive failure = months of data gone.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      title: "No cloud access",
      description: "Your accountant, CA, and management cannot see the same data simultaneously from different locations.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "e-Invoicing compliance gaps",
      description: "From April 2025, e-invoicing is mandatory for businesses above ₹1 crore. Tally setups need constant patching to stay compliant.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      title: "Siloed accounting",
      description: "Tally doesn't connect natively with your CRM, inventory, payroll, or support tools. Every sync is manual.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "No real-time dashboards",
      description: "Financial reports require manual export. You're always looking at yesterday's numbers.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Scaling is painful",
      description: "Adding a new branch, entity, or currency in Tally is a configuration nightmare.",
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
                Still on Tally?
              </p>
            </div>
            <div className="h-px w-40 sm:w-48 md:w-56 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            Here&apos;s What You&apos;re <span className="font-black red-text">Living With</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-black/10 bg-white/60 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--support-blue,#1f4fd8)]/10 text-[var(--support-blue,#1f4fd8)] mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold primary-black mb-2">{point.title}</h3>
              <p className="text-sm sm:text-base text-[var(--color-body,#4b5563)] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
