import Link from "next/link";

const variantStyles = {
  primary:
    "rounded bg-[#1F4FD8] hover:bg-[#8B1E2D] secondary-text px-6 py-3 text-xs sm:text-sm md:text-base font-semibold transition-colors cursor-pointer",
  secondary:
    "rounded bg-[#FAFAF7] text-[#1F4FD8] hover:bg-[#8B1E2D] hover:text-[#FAFAF7] px-6 py-3 text-xs sm:text-sm md:text-base font-semibold transition-colors cursor-pointer",
  "primary-light":
    "rounded bg-white text-[#1F4FD8] hover:bg-[#0F0F0F] hover:text-white px-6 py-3 text-xs sm:text-sm md:text-base font-semibold transition-colors cursor-pointer",
  "secondary-light":
    "rounded bg-transparent border border-white text-white hover:bg-white hover:text-[#1F4FD8] px-6 py-3 text-xs sm:text-sm md:text-base font-semibold transition-colors cursor-pointer",
} as const;

export type ButtonLinkProps = {
  href?: string;
  variant?: keyof typeof variantStyles;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  /** Use as button even when href is set (e.g. to add onClick) */
  asButton?: boolean;
};

export default function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  target,
  rel,
  asButton = false,
}: ButtonLinkProps) {
  const combinedClass = `${variantStyles[variant]} ${className}`.trim();
  const isExternal = href?.startsWith("http");

  if (href != null && !asButton) {
    return (
      <Link
        href={href}
        className={combinedClass}
        onClick={onClick}
        target={target}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick}>
      {children}
    </button>
  );
}
