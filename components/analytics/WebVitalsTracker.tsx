"use client";

import { useReportWebVitals } from "next/web-vitals";

type WebVitalMetric = {
  id: string;
  name: "CLS" | "FCP" | "INP" | "LCP" | "TTFB";
  value: number;
  delta: number;
  rating: "good" | "needs-improvement" | "poor";
  navigationType: string;
};

export default function WebVitalsTracker() {
  function reportWebVitals(metric: WebVitalMetric) {
    if (!["LCP", "INP", "CLS"].includes(metric.name)) return;

    const payload = {
      id: metric.id,
      name: metric.name,
      value: metric.value,
      delta: metric.delta,
      rating: metric.rating,
      navigationType: metric.navigationType,
      path: window.location.pathname,
      ts: Date.now(),
    };

    // Optional GA4 event forwarding when gtag is available.
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag("event", metric.name, {
        value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        event_category: "Web Vitals",
        non_interaction: true,
      });
    }

    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/web-vitals", body);
      return;
    }

    fetch("/api/web-vitals", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      // Silently ignore analytics transport errors.
    });
  }

  useReportWebVitals(reportWebVitals);
  return null;
}
