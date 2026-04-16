export default function PageLead({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="secondary-background primary-black overflow-hidden"
      aria-label="Page summary"
    >
      <div className="mx-auto max-w-[1320px] flex gap-4 sm:gap-6 border-b border-gray-200 py-12 sm:py-16 md:py-20 lg:py-24">
        <span
          className="shrink-0 w-1 sm:w-1.5 rounded-full bg-[var(--support-blue,#1f4fd8)]"
          aria-hidden
        />
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-0.5">
          {children}
        </p>
      </div>
    </section>
  );
}
