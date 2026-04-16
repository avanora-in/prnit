import Image from "next/image";
import type { CaseStudyProjectVisual } from "@/lib/work/case-studies";

function VisualAsset({ visual, priority }: { visual: CaseStudyProjectVisual; priority?: boolean }) {
  const isSvg = visual.src.split("?")[0]?.toLowerCase().endsWith(".svg");
  if (isSvg) {
    return (
      <img
        src={visual.src}
        alt={visual.alt}
        className="h-full max-h-[min(26rem,65vh)] w-full h-full object-cover object-center p-4 sm:p-6"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }
  return (
    <Image
      src={visual.src}
      alt={visual.alt}
      width={1600}
      height={900}
      className="h-[min(26rem,65vh)] w-full object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
      priority={priority}
    />
  );
}

type Props = {
  visuals: readonly CaseStudyProjectVisual[];
};

export default function CaseStudyProjectVisualsGallery({ visuals }: Props) {
  if (visuals.length === 0) return null;

  const gridClass =
    visuals.length === 1
      ? "mx-auto max-w-5xl"
      : visuals.length === 2
        ? "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
        : "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3";

  return (
    <div className={`mt-6 ${gridClass}`}>
      {visuals.map((visual, i) => (
        <figure
          key={`${visual.src}-${i}`}
          className="overflow-hidden rounded-2xl border border-white/20 bg-white/[0.06] shadow-lg shadow-black/25"
        >
          <VisualAsset visual={visual} priority={i === 0} />
        </figure>
      ))}
    </div>
  );
}
