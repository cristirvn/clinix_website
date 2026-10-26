import type { ReactNode } from "react";
import { L } from "@/components/ui/L";

/**
 * Layout + typography building blocks. Every page is built from these so the
 * design stays consistent. Use theme tokens only (bg-bg, text-ink, bg-dark,
 * text-accent, …) — never raw colours. Inside `tone="dark"` the accent turns lilac
 * and the main button a lighter purple automatically (see app/globals.css).
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
    <section id={id} data-tone={tone} className={`${TONES[tone]} scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

/**
 * Page-top plum band right under the white header: full width, purple light
 * from the top-right. Text inside is light; buttons turn purple.
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

/** Small caps label above a heading, followed by a short rule. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`eyebrow-rule mb-5 inline-flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-accent ${className}`}
    >
      {children}
    </p>
  );
}

/** Section heading block: eyebrow + H2 + optional lead paragraph. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  center = false,
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 max-w-3xl sm:mb-16 ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-[2.5rem] sm:text-6xl lg:text-[4rem]">{title}</h2>
      {lead && <p className={`mt-6 max-w-2xl text-lg opacity-80 sm:text-xl ${center ? "mx-auto" : ""}`}>{lead}</p>}
    </div>
  );
}

type ButtonVariant = "cta" | "outline" | "light" | "ghost";

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 text-center font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60";
const BTN_VARIANTS: Record<ButtonVariant, string> = {
  cta: "bg-cta text-on-cta shadow-[0_15px_30px_-12px_rgb(123_60_200_/_0.45)] hover:-translate-y-0.5 hover:brightness-110",
  outline: "border border-current/35 hover:border-current hover:bg-current/5",
  light: "bg-lime text-on-lime shadow-[0_15px_30px_-12px_rgb(162_96_229_/_0.45)] hover:-translate-y-0.5 hover:brightness-110",
  ghost: "underline decoration-1 underline-offset-[6px] hover:opacity-70",
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

/** ✓ list row. */
export function CheckItem({ children, negative = false }: { children: ReactNode; negative?: boolean }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden="true"
        className={`mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-bold ${
          negative ? "bg-danger/12 text-danger" : "bg-accent text-on-accent"
        }`}
      >
        {negative ? "✕" : "✓"}
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
        <details key={item.q} className="group py-2" open={openFirst && i === 0}>
          <summary className="flex items-center justify-between gap-6 py-5 text-lg font-medium sm:text-xl">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="relative flex h-9 w-9 flex-none items-center justify-center rounded-full border border-current/40 transition group-open:bg-primary group-open:text-on-primary group-open:border-primary"
            >
              <span className="absolute h-[1.5px] w-3.5 bg-current" />
              <span className="absolute h-3.5 w-[1.5px] bg-current transition group-open:scale-y-0" />
            </span>
          </summary>
          <div className="max-w-3xl pb-6 pr-12 text-ink-soft">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

/** Card surface. */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[var(--radius)] border border-line bg-surface p-7 text-ink shadow-[var(--shadow-card)] sm:p-9 ${className}`}
    >
      {children}
    </div>
  );
}
