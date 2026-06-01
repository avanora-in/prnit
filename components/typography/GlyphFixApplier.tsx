"use client";

import { useEffect } from "react";
import { isGlyphFallbackChar, needsGlyphFallback } from "@/lib/typography/glyph-chars";

/** system-ui at the same number as Syne can read darker; use a lighter weight. */
function fallbackFontWeightForSyne(syneRoot: Element): string {
  const weight = Number.parseInt(window.getComputedStyle(syneRoot).fontWeight, 10) || 400;
  if (weight >= 800) return "600";
  if (weight >= 700) return "560";
  if (weight >= 600) return "500";
  return "500";
}

function shouldSkipTextNode(node: Text): boolean {
  const parent = node.parentElement;
  if (!parent) return true;

  const tag = parent.tagName;
  if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return true;
  if (tag === "TEXTAREA" || tag === "INPUT" || tag === "OPTION") return true;
  if (parent.classList.contains("glyph-fallback")) return true;

  return false;
}

function replaceTextNode(textNode: Text, syneRoot: Element) {
  const content = textNode.textContent;
  if (!content || !needsGlyphFallback(content)) return;

  const fallbackWeight = fallbackFontWeightForSyne(syneRoot);
  const fragment = document.createDocumentFragment();

  for (const char of content) {
    if (isGlyphFallbackChar(char)) {
      const span = document.createElement("span");
      span.className = "glyph-fallback";
      span.style.fontWeight = fallbackWeight;
      span.textContent = char;
      fragment.appendChild(span);
    } else {
      fragment.appendChild(document.createTextNode(char));
    }
  }

  textNode.replaceWith(fragment);
}

function processSyneElement(element: Element) {
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);

  let current = walker.nextNode();
  while (current) {
    const textNode = current as Text;
    if (
      !shouldSkipTextNode(textNode) &&
      textNode.parentElement?.closest(".syne-font") === element
    ) {
      textNodes.push(textNode);
    }
    current = walker.nextNode();
  }

  for (const textNode of textNodes) {
    replaceTextNode(textNode, element);
  }
}

function applyGlyphFix() {
  if (typeof document === "undefined") return;
  document.querySelectorAll(".syne-font").forEach((element) => {
    if (element instanceof Element) processSyneElement(element);
  });
}

/** Walks all `.syne-font` nodes and wraps g / G / & in system-ui fallback spans. */
export default function GlyphFixApplier() {
  useEffect(() => {
    let frame = 0;

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => applyGlyphFix());
    };

    schedule();

    const observer = new MutationObserver(() => schedule());
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return null;
}
