import { GLYPH_FALLBACK_CHARS, splitTextForGlyphFallback } from "@/lib/typography/glyph-chars";

type GlyphFixProps = {
  /** Plain text only (use this when you have a string). */
  text: string;
  /** Characters that should render with fallback font. Default: g and & (both cases for g). */
  chars?: readonly string[];
  /** Optional class for normal text wrapper. */
  className?: string;
};

/**
 * Renders text while forcing specific characters to use a fallback font.
 * Prefer site-wide `GlyphFixApplier` for existing `.syne-font` markup; use this in new JSX when needed.
 */
export default function GlyphFix({ text, chars = GLYPH_FALLBACK_CHARS, className }: GlyphFixProps) {
  if (!text) return null;

  const parts = splitTextForGlyphFallback(text, chars);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <span key={index} className="glyph-fallback">
            {part.char}
          </span>
        )
      )}
    </span>
  );
}
