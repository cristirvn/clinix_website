import type { ReactNode } from "react";
import { L } from "@/components/ui/L";

/**
 * Layout + typography building blocks. Every page is built from these so the
 * design stays consistent. Use theme tokens only (bg-bg, text-ink, bg-dark,
 * text-accent, …) — never raw colours. Inside `tone="dark"` the accent turns a
 * light blue and the main button stays blue (see app/globals.css).
 */

export function Container({ children, className = "", narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return <div className={`mx-auto w-full px-5 sm:px-8 ${narrow ? "max-w-3xl" : "max-w-7xl"} ${className}`}>{children}</div>;
}

type Tone = "default" | "alt" | "dark" | "surface";

const TONES: Record<Tone, string> = {
  default: "bg-bg text-ink",
  alt: "bg-bg-alt text-ink",
  surface: "bg-surface text-ink",
  dark: "bg-vital text-on-dark",
};

/** A full-width page band. `dark` sections flip text colours automatically. */
export function Section({
  children,
  tone = "default",
  id,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} data-tone={tone} className={`${TONES[tone]} scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

/**
 * Page-top petrol band right under the white header: full width, faint warm
 * light from the top-right. Text inside is light.
 */
export function HeroPanel({
  children,
  id,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} data-tone="dark" className={`bg-vital relative isolate overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20 ${className}`}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

/**
 * Never break a hyphenated word ("într-o", "s-a", "ți-a", "non-invazivă")
 * across two lines: browsers break right after a hyphen, which reads badly in
 * Romanian. Strings only; anything else is returned as it is.
 */
export function keepHyphenated(text: ReactNode): ReactNode {
  if (typeof text !== "string" || !text.includes("-")) return text;
  return text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/**
 * Label above a heading: sentence case, the accent colour, a small dot in
 * front. An optional `index` ("01") gives long pages a quiet editorial rhythm.
 */
export function Eyebrow({ children, className = "", index }: { children: ReactNode; className?: string; index?: string }) {
  return (
    <p className={`eyebrow-rule mb-5 inline-flex items-center gap-2.5 text-[0.95rem] font-semibold leading-snug text-accent ${className}`}>
      {index ? (
        <span className="tabular-nums opacity-70">{index}</span>
      ) : (
        <span aria-hidden="true" className="h-1.5 w-1.5 flex-none rounded-full bg-current" />
      )}
      <span>{keepHyphenated(children)}</span>
    </p>
  );
}

/**
 * Section heading block: H2 + optional lead. Always left-aligned (`center`
 * only for closing bands / landing pages). With a lead, large screens set it
 * "split": title on the left (7 cols), lead on the right (5 cols), bottoms
 * aligned. `stacked` keeps the lead under the title.
 */
export function SectionHead({
  title,
  lead,
  center = false,
  stacked = false,
  className = "",
}: {
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  stacked?: boolean;
  className?: string;
}) {
  if (lead && !center && !stacked) {
    return (
      <div className={`mb-12 grid gap-6 sm:mb-16 lg:grid-cols-12 lg:items-end lg:gap-12 ${className}`}>
        <h2 className="t-h2 max-w-3xl lg:col-span-7">{keepHyphenated(title)}</h2>
        <p className="t-lead max-w-[62ch] text-ink-soft lg:col-span-5 lg:pb-1 [[data-tone=dark]_&]:text-on-dark-soft">
          {keepHyphenated(lead)}
        </p>
      </div>
    );
  }
  return (
    <div className={`mb-12 max-w-3xl sm:mb-16 ${center ? "mx-auto text-center" : ""} ${className}`}>
      <h2 className="t-h2">{keepHyphenated(title)}</h2>
      {lead && (
        <p className={`t-lead mt-6 max-w-[62ch] text-ink-soft [[data-tone=dark]_&]:text-on-dark-soft ${center ? "mx-auto" : ""}`}>
          {keepHyphenated(lead)}
        </p>
      )}
    </div>
  );
}

type ButtonVariant = "cta" | "outline" | "light" | "ghost" | "glass";

/*
 * Buttons are flat (see `.lg` in app/globals.css):
 *  cta / light — solid --cta, the one obvious action;
 *  outline     — 1px outline on light pages, light outline inside dark bands;
 *  glass       — dark frosted fill, for buttons over photos only;
 *  ghost       — a text link with a drawn underline and a big tap area.
 */
const BTN_BASE =
  "inline-flex items-center justify-center gap-2.5 text-center font-semibold leading-tight disabled:cursor-not-allowed disabled:opacity-60";
const BTN_VARIANTS: Record<ButtonVariant, string> = {
  cta: "lg lg-tint",
  light: "lg lg-tint",
  outline: "lg lg-clear",
  glass: "lg lg-smoke",
  ghost: "link-draw min-h-11 py-2",
};
const BTN_SIZES = {
  md: "min-h-12 px-7 py-3 text-base",
  lg: "min-h-14 px-9 py-4 text-lg",
};

export function buttonClass(variant: ButtonVariant = "cta", size: "md" | "lg" = "md", extra = "") {
  return `${BTN_BASE} ${BTN_VARIANTS[variant]} ${variant === "ghost" ? "" : BTN_SIZES[size]} rounded-[var(--btn-radius)] ${extra}`;
}

/** Link styled as a button. `href` is an INTERNAL path (see `L`). */
export function ButtonLink({
  href,
  children,
  variant = "cta",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <L href={href} className={buttonClass(variant, size, className)}>
      {children}
    </L>
  );
}

/** Tick (or cross) drawn as a fine line, so it looks the same in every font. */
export function TickIcon({ negative = false, className = "" }: { negative?: boolean; className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
      {negative ? (
        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <path d="M2.2 6.4 4.8 9 9.8 3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

/** ✓ list row. */
export function CheckItem({ children, negative = false }: { children: ReactNode; negative?: boolean }) {
  return (
    <li className="flex gap-3.5">
      <span aria-hidden="true" className={`mt-[0.45rem] flex h-4 w-4 flex-none items-center justify-center ${negative ? "text-danger" : "text-accent"}`}>
        <TickIcon negative={negative} className="h-4 w-4" />
      </span>
      <span>{children}</span>
    </li>
  );
}

/** FAQ accordion (native <details>, works without JS). */
export function Faq({
  items,
  className = "",
  openFirst = false,
}: {
  items: Array<{ q: string; a: ReactNode }>;
  className?: string;
  openFirst?: boolean;
}) {
  return (
    <div className={`divide-y divide-line border-b border-line ${className}`}>
      {items.map((item, i) => (
        <details key={item.q} className="faq-item group" open={openFirst && i === 0}>
          <summary className="flex items-start justify-between gap-6 py-6 text-lg font-semibold transition-colors hover:text-accent sm:text-xl">
            <span>{item.q}</span>
            <span aria-hidden="true" className="relative mt-[0.4em] flex h-4 w-4 flex-none items-center justify-center text-accent">
              <span className="absolute h-[1.5px] w-4 bg-current" />
              <span className="absolute h-4 w-[1.5px] bg-current transition-transform duration-300 group-open:scale-y-0" />
            </span>
          </summary>
          <div className="max-w-3xl pb-7 pr-10 text-ink-soft">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

/** Card surface. */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[var(--radius)] border border-line bg-surface p-7 text-ink sm:p-9 ${className}`}
    >
      {children}
    </div>
  );
}
