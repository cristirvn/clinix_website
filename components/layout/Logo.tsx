import Image from "next/image";

/**
 * Emmanuel CliniX — the clinic's official logo (file from the client,
 * `public/brand/`). Brand colours are fixed: they are part of the logo, not of
 * the theme.
 *
 *  - `Logo`     the full logo (mark + "EMMANUEL CLINIX" + tagline), as an image.
 *               `onDark` swaps to the version with white lettering (navy bands, footer).
 *  - `LogoMark` the mark alone, redrawn as SVG from the logo file (loader, chat, favicon).
 */
const BRAND = { cyan: "#05BCD7", blue: "#0075AF" } as const;

export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 430 431" fill="none" aria-hidden="true" className={className}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.5 21 218.5 215.5 20.5 410.5" stroke={BRAND.cyan} strokeWidth="39" />
        <path d="M409.5 21.5 253.5 176.5" stroke={BRAND.cyan} strokeWidth="39" />
        <path d="M253.5 254.5 409.5 409.5" stroke={BRAND.blue} strokeWidth="39" />
        <path d="M18.5 210H146.5" stroke={BRAND.blue} strokeWidth="21" />
      </g>
    </svg>
  );
}

export function Logo({
  onDark = false,
  className = "h-10 sm:h-12",
  eager = false,
}: {
  onDark?: boolean;
  /** Height classes; the width follows the logo's proportions. */
  className?: string;
  /** Load straight away (the header logo is above the fold). */
  eager?: boolean;
}) {
  return (
    <Image
      src={onDark ? "/brand/logo-light.png" : "/brand/logo.png"}
      alt="Emmanuel CliniX — Longevity. Wellness. Neuro."
      width={861}
      height={240}
      unoptimized
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      className={`block w-auto max-w-none select-none ${className}`}
      draggable={false}
    />
  );
}
