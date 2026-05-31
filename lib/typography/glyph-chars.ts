/** Characters that should not use Syne (render with .glyph-fallback / system-ui). */
export const GLYPH_FALLBACK_CHARS = ["g", "G", "&"] as const;

export type GlyphFallbackChar = (typeof GLYPH_FALLBACK_CHARS)[number];

const GLYPH_FALLBACK_SET = new Set<string>(GLYPH_FALLBACK_CHARS);

export function isGlyphFallbackChar(char: string): boolean {
  return GLYPH_FALLBACK_SET.has(char);
}

export function needsGlyphFallback(text: string): boolean {
  return /[gG&]/.test(text);
}

export function splitTextForGlyphFallback(
  text: string,
  chars: readonly string[] = GLYPH_FALLBACK_CHARS
): Array<string | { char: string; fallback: true }> {
  const targets = new Set(chars);
  const parts: Array<string | { char: string; fallback: true }> = [];

  for (const char of text) {
    if (targets.has(char)) {
      parts.push({ char, fallback: true });
    } else {
      const last = parts[parts.length - 1];
      if (typeof last === "string") parts[parts.length - 1] = last + char;
      else parts.push(char);
    }
  }

  return parts;
}
