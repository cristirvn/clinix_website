import type { ReactNode } from "react";
import { L } from "@/components/ui/L";

/**
 * Layout + typography building blocks. Every page is built from these so all
 * five design themes stay consistent. Use theme tokens only (bg-bg, text-ink,
 * bg-dark, text-accent, …) — never raw colours.
 */

export function Container({ children, className = "", narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return <div className={`mx-auto w-full px-5 sm:px-8 ${narrow ? "max-w-3xl" : "max-w-6xl"} ${className}`}>{children}</div>;
}

type Tone = "default" | "alt" | "dark" | "surface";

const TONES: Record<Tone, string> = {
  default: "bg-bg text-ink",
  alt: "bg-bg-alt text-ink",
  surface: "bg-surface text-ink",
  dark: "bg-dark text-on-dark",
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

/** Small uppercase label above a heading. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mb-4 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-accent ${className}`}>{children}</p>
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
      <h2 className="text-[2.1rem] sm:text-5xl">{title}</h2>
      {lead && <p className="mt-5 text-lg opacity-80 sm:text-xl">{lead}</p>}
    </div>
  );
}

type ButtonVariant = "cta" | "outline" | "light" | "ghost";

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 text-center font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60";
const BTN_VARIANTS: Record<ButtonVariant, string> = {
  cta: "bg-cta text-on-cta shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 hover:brightness-110",
  outline: "border-2 border-current hover:bg-ink/5",
  light: "bg-on-dark text-dark hover:-translate-y-0.5",
  ghost: "underline decoration-2 underline-offset-4 hover:opacity-70",
};
const BTN_SIZES = {
  md: "min-h-12 px-6 py-3 text-base",
  lg: "min-h-14 px-8 py-4 text-lg",
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
          negative ? "bg-danger/15 text-danger" : "bg-accent text-on-accent"
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
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {items.map((item, i) => (
        <details key={item.q} className="group py-2" open={openFirst && i === 0}>
          <summary className="flex items-start justify-between gap-6 py-4 text-lg font-semibold">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-line text-accent transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="pb-5 pr-12 text-ink-soft">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

/** Card surface. */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[var(--radius)] border border-line bg-surface p-7 text-ink sm:p-8 ${className}`}>{children}</div>
  );
}
