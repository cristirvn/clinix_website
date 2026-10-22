"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { Logo } from "@/components/layout/Logo";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { useLocale } from "@/components/layout/LocaleProvider";
import { CLINIC } from "@/lib/site";
import { NAV_ITEMS } from "@/components/layout/nav";

export function Header() {
  const { dict } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    // Floating pill (sticky). Pages whose first band is a blue hero pull it up under the pill.
    <header className="sticky top-0 z-50 h-[var(--header-h)] px-4 pt-4 sm:px-8 sm:pt-6">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full bg-ink/85 pl-5 pr-2.5 text-on-dark backdrop-blur-xl transition sm:gap-6 sm:pl-7 ${
          scrolled ? "shadow-[0_18px_40px_-20px_rgba(15,27,38,0.6)]" : ""
        }`}
      >
        <L href="/" aria-label="Emmanuel CliniX">
          <Logo tagline={false} />
        </L>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <L key={item.key} href={item.href} className="text-[0.95rem] text-on-dark/75 transition hover:text-on-dark">
              {dict.nav[item.key]}
            </L>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch />
          <L href="/brainmap" className={buttonClass("cta", "md", "!min-h-11 !bg-lime !px-6 !py-2.5 text-[0.95rem] !text-on-lime")}>
            {dict.nav.cta}
          </L>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-on-lime"
            aria-label={dict.nav.menu}
            aria-expanded={open}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>

      {/* Portalled to <body>: the header's backdrop blur would otherwise trap this fixed overlay inside the header. */}
      {open &&
        createPortal(
        <div className="bg-vital fixed inset-0 z-[70] flex flex-col overflow-y-auto lg:hidden" role="dialog" aria-modal="true">
          <div className="flex h-20 items-center justify-between px-5 pt-2.5">
            <Logo tagline={false} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 text-xl"
              aria-label={dict.nav.close}
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-5 pt-6" aria-label="Mobile">
            {[...NAV_ITEMS, { key: "tests" as const, href: "/chestionare" }].map((item) => (
              <L
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-5 font-display text-3xl"
              >
                {dict.nav[item.key]}
                <span aria-hidden="true" className="text-xl text-lime">→</span>
              </L>
            ))}
          </nav>
          <div className="space-y-3 p-5">
            <L href="/brainmap" onClick={() => setOpen(false)} className={buttonClass("cta", "lg", "w-full")}>
              {dict.nav.cta}
            </L>
            <a href={CLINIC.phoneHref} className={buttonClass("outline", "lg", "w-full")}>
              {dict.common.callUs} · <span className="whitespace-nowrap">{CLINIC.phone}</span>
            </a>
          </div>
        </div>,
          document.body,
        )}
    </header>
  );
}
