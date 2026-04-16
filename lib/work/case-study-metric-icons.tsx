import type { ReactElement, SVGProps } from "react";

export type CaseStudyMetricIconId =
  | "bolt"
  | "trend-down"
  | "rocket"
  | "devices"
  | "timer"
  | "clipboard"
  | "phone"
  | "lock"
  | "star"
  | "check"
  | "bell"
  | "credit-card"
  | "target"
  | "pen"
  | "trending-up"
  | "cart"
  | "compass"
  | "users"
  | "shield"
  | "map"
  | "chart-bar";

const strokeIcon = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

function S(props: SVGProps<SVGSVGElement>) {
  return <svg {...strokeIcon} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props} />;
}

function IconBolt(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </S>
  );
}

function IconTrendDown(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M3 3v18h18" />
      <path d="m18 9-6 6-4-4-6 6" />
    </S>
  );
}

function IconRocket(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </S>
  );
}

function IconDevices(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <rect width="14" height="10" x="2" y="7" rx="2" />
      <rect width="10" height="7" x="12" y="3" rx="1" />
    </S>
  );
}

function IconTimer(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
    </S>
  );
}

function IconClipboard(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12h6M9 16h6" />
    </S>
  );
}

function IconPhone(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </S>
  );
}

function IconLock(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <rect width="14" height="10" x="5" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </S>
  );
}

function IconStar(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </S>
  );
}

function IconCheck(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m22 4-10 10-3-3" />
    </S>
  );
}

function IconBell(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </S>
  );
}

function IconCreditCard(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path d="M2 10h20" />
    </S>
  );
}

function IconTarget(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </S>
  );
}

function IconPen(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M12 19h8" />
      <path d="m19 3-1.12 1.12a2 2 0 0 0 0 2.83l2.83 2.83a2 2 0 0 0 2.83 0L22 8" />
      <path d="m5 15-3 3 3 3" />
      <path d="m16 4-9.09 9.09a2 2 0 0 0-.58 1.05l-.87 3.89a1 1 0 0 0 1.21 1.21l3.89-.87a2 2 0 0 0 1.05-.58L20 8" />
    </S>
  );
}

function IconTrendingUp(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M22 7v10" />
      <path d="M2 17V7" />
      <path d="m4 17 4-4 4 4 4-8 4 4" />
    </S>
  );
}

function IconCart(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </S>
  );
}

function IconCompass(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </S>
  );
}

function IconUsers(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </S>
  );
}

function IconShield(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </S>
  );
}

function IconMap(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-4.212 2.106a1 1 0 0 1-1.106-.447L2 4.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106z" />
    </S>
  );
}

function IconChartBar(p: SVGProps<SVGSVGElement>) {
  return (
    <S {...p}>
      <path d="M3 3v18h18" />
      <path d="M7 16v-4" />
      <path d="M12 16v-9" />
      <path d="M17 16v-6" />
    </S>
  );
}

const ICONS: Record<CaseStudyMetricIconId, (p: SVGProps<SVGSVGElement>) => ReactElement> = {
  bolt: IconBolt,
  "trend-down": IconTrendDown,
  rocket: IconRocket,
  devices: IconDevices,
  timer: IconTimer,
  clipboard: IconClipboard,
  phone: IconPhone,
  lock: IconLock,
  star: IconStar,
  check: IconCheck,
  bell: IconBell,
  "credit-card": IconCreditCard,
  target: IconTarget,
  pen: IconPen,
  "trending-up": IconTrendingUp,
  cart: IconCart,
  compass: IconCompass,
  users: IconUsers,
  shield: IconShield,
  map: IconMap,
  "chart-bar": IconChartBar,
};

export type CaseStudyMetricIconProps = SVGProps<SVGSVGElement> & {
  name: CaseStudyMetricIconId;
  className?: string;
};

export function CaseStudyMetricIcon({ name, className, ...rest }: CaseStudyMetricIconProps) {
  const Cmp = ICONS[name];
  return <Cmp className={className} aria-hidden {...rest} />;
}
