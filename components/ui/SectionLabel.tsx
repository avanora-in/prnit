import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  labelClassName?: string;
  lineClassName?: string;
}

const defaultLabelClass =
  "text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font";
const defaultLineClass = "w-50 sm:w-60 md:w-70 primary-black-background";

export default function SectionLabel({
  children,
  labelClassName = defaultLabelClass,
  lineClassName = defaultLineClass,
}: SectionLabelProps) {
  return (
    <div className="inline-flex flex-col gap-2">
      <div className="inline-flex items-center gap-2 sm:gap-3">
        <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
          <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
        </div>
        <p className={labelClassName}>{children}</p>
      </div>
      <div className={`h-px ${lineClassName}`} />
    </div>
  );
}
