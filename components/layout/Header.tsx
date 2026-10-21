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
    <header
      className={`sticky top-0 z-50 border-b bg-bg/90 text-ink backdrop-blur-md transition ${
        scrolled ? "border-line shadow-[0_8px_30px_-20px_rgba(0,0,0,0.35)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-8">
        <L href="/" aria-label="Emmanuel CliniX" className="text-ink">
          <span className="text-ink">
            <Logo />
          </span>
        </L>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <L key={item.key} href={item.href} className="text-[0.95rem] font-semibold text-ink/80 transition hover:text-ink">
              {dict.nav[item.key]}
            </L>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitch />
          <L href="/brainmap" className={buttonClass("cta", "md", "!min-h-11 !px-5 !py-2.5 text-[0.95rem]")}>
            {dict.nav.cta}
          </L>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line"
            aria-label={dict.nav.menu}
            aria-expanded={open}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
              <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Portalled to <body>: the header's backdrop blur would otherwise trap this fixed overlay inside the header. */}
      {open &&
        createPortal(
        <div className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-bg text-ink lg:hidden" role="dialog" aria-modal="true">
          <div className="flex h-20 items-center justify-between px-5">
            <Logo tagline={false} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-xl"
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
                className="border-b border-line py-5 font-display text-3xl"
              >
                {dict.nav[item.key]}
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
