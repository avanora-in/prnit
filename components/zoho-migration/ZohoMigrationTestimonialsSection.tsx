export default function ZohoMigrationTestimonialsSection() {
  const testimonials = [
    {
      quote: "We migrated from Salesforce to Zoho CRM. 12,000 contacts, 3 years of deal history, and 45 custom fields. PRNIT mapped every field correctly, deduped our contacts, and had us live on Zoho in 14 days. Our sales team didn't miss a beat.",
      author: "Ankit Joshi, VP Sales",
      company: "CloudFirst Technologies",
      location: "Pune, India",
    },
    {
      quote: "Migrating from QuickBooks Online to Zoho Books for our UAE entity was complex — multi-currency, VAT, and 3 years of data. PRNIT delivered a clean migration with every AED balance reconciled. VAT configuration was done perfectly.",
      author: "Khalid Al-Mansouri, Finance Director",
      company: "Gulf Logistics FZCO",
      location: "Dubai, UAE",
    },
    {
      quote: "We were on Excel and a 15-year-old custom system. PRNIT extracted data we thought was inaccessible, normalised it, and built us a full Zoho One setup from scratch. The transformation in how we operate is remarkable.",
      author: "Sarah Thompson, Operations Director",
      company: "Apex Field Services Ltd",
      location: "Birmingham, UK",
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
                Testimonials
              </p>
            </div>
            <div className="h-px w-56 sm:w-72 md:w-85 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            Real Migrations. <span className="font-black red-text">Real Results.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-black/10 bg-white/60 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[var(--support-blue,#1f4fd8)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm sm:text-base text-[var(--color-body,#4b5563)] leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="text-sm font-bold primary-black">{testimonial.author}</p>
                <p className="text-xs text-[var(--color-body,#4b5563)] mt-1">
                  {testimonial.company} · {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
