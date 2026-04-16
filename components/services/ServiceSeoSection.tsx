import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
};

type InternalLink = {
  href: string;
  label: string;
};

type ServiceSeoSectionProps = {
  h1: string;
  explanation: string;
  faqs: FaqItem[];
  internalLinks: InternalLink[];
};

export default function ServiceSeoSection({
  h1,
  explanation,
  faqs,
  internalLinks,
}: ServiceSeoSectionProps) {
  return (
    <section className="secondary-background primary-black">
      <div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-5 sm:py-12 md:px-6 md:py-14 space-y-6">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black syne-font">{h1}</h1>
          <p className="max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed">
            {explanation}
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/50 p-4 sm:p-5 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold">Related Services</h2>
          <div className="flex flex-wrap gap-2">
            {internalLinks.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="rounded-lg border border-black/10 px-3 py-2 text-sm hover:bg-[var(--support-blue,#1f4fd8)] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold">FAQ</h2>
          <div className="space-y-2">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-black/10 bg-white/50 p-4">
                <summary className="cursor-pointer font-semibold">{item.question}</summary>
                <p className="mt-2 text-sm sm:text-base leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
