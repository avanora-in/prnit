export default function TallyTestimonialSection() {
  const testimonials = [
    {
      quote: "We had 6 years of Tally data — ledgers, transactions, GST records. PRNIT migrated everything in 11 days, reconciled to the rupee. Our CA verified the trial balance and gave us the green light. Best decision we made.",
      author: "Suresh Agarwal, MD",
      company: "Agarwal Textiles Pvt Ltd",
      location: "Jaipur, India",
    },
    {
      quote: "We tried migrating ourselves and ended up with unbalanced opening entries and missing GST data. PRNIT came in, audited our Tally export, cleaned it up, and delivered a perfectly configured Zoho Books in 9 days. Should have started with them.",
      author: "Priya Sharma, CFO",
      company: "TechBridge Solutions",
      location: "Bengaluru, India",
    },
    {
      quote: "Our Tally setup had 8 years of data across two entities. PRNIT ran a clean multi-entity migration with combined reporting in Zoho Books. GST, e-invoicing, and branch-wise P&L all set up before go-live.",
      author: "Ravi Mehta, Director",
      company: "Mehta Pharma Distributors",
      location: "Mumbai, India",
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
            <div className="h-px w-40 sm:w-48 md:w-56 primary-black-background" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
            What Our Clients Say About Their <span className="font-black red-text">Tally to Zoho Migration</span>
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
