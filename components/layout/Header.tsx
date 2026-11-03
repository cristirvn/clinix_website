"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { ArrowIcon, ChevronIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Logo } from "@/components/layout/Logo";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { useLocale } from "@/components/layout/LocaleProvider";
import { CLINIC } from "@/lib/site";
import { internalizePath } from "@/lib/i18n";
import { NAV_ABOUT, NAV_MAIN, isActivePath } from "@/components/layout/nav";

/**
 * Site header: logo · three plain links · "Despre noi" panel · language · one
 * action. Below 1280px everything moves into a calm full-screen menu with big
 * tap targets (the desktop row would otherwise crowd).
 */
export function Header() {
  const { dict } = useLocale();
  const pathname = internalizePath(usePathname() ?? "/");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    menuButton.current?.focus();
  };

  const linkClass = (href: string) =>
    `relative py-2 text-[0.98rem] font-medium transition hover:text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
      isActivePath(pathname, href) ? "text-ink after:scale-x-100" : "text-ink-soft after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 h-[var(--header-h)] border-b bg-bg/90 text-ink backdrop-blur-xl transition-[box-shadow,border-color] duration-300 ${
        scrolled ? "border-line shadow-[0_14px_34px_-24px_rgb(19_41_43_/_0.35)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <L href="/" aria-label="Emmanuel CliniX" className="flex-none">
          <Logo taglineClassName="sm:block xl:hidden 2xl:block" />
        </L>

        <nav className="hidden items-center gap-8 xl:flex" aria-label={dict.nav.menu}>
          {NAV_MAIN.map((item) => (
            <L key={item.key} href={item.href} className={linkClass(item.href)} aria-current={isActivePath(pathname, item.href) ? "page" : undefined}>
              {dict.nav[item.key]}
            </L>
          ))}
          <AboutMenu pathname={pathname} />
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LangSwitch />
          <L href="/brainmap" className={buttonClass("cta", "md", "!min-h-11 !px-6 !py-2.5 text-[0.95rem]")}>
            {dict.nav.cta}
          </L>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LangSwitch />
          <L href="/brainmap" className={buttonClass("cta", "md", "max-md:!hidden !min-h-11 !px-5 !py-2 text-[0.95rem]")}>
            {dict.nav.cta}
          </L>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 items-center gap-2.5 rounded-full bg-primary px-4 font-semibold text-on-primary sm:px-5"
            aria-expanded={open}
            aria-haspopup="dialog"
          >
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span className="text-[0.95rem]">{dict.nav.menu}</span>
          </button>
        </div>
      </div>

      {open && createPortal(<MobileMenu pathname={pathname} onClose={closeMobile} />, document.body)}
    </header>
  );
}

/**
 * "Despre noi" — a disclosure panel (WAI navigation pattern, not a menu
 * role): opens on hover with a mouse, on click/tap, and from the keyboard
 * (Enter/Space/↓). Esc, a click outside or tabbing away closes it.
 */
function AboutMenu({ pathname }: { pathname: string }) {
  const { dict } = useLocale();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const panelId = useId();
  const active = NAV_ABOUT.some((i) => isActivePath(pathname, i.href));

  // Close on navigation. (Adjusting state while rendering is the React-recommended way to reset on a prop change.)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const focusItem = (index: number) => {
    const links = wrap.current?.querySelectorAll<HTMLAnchorElement>(`#${CSS.escape(panelId)} a`);
    if (!links?.length) return;
    links[(index + links.length) % links.length].focus();
  };

  return (
    <div
      ref={wrap}
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        window.clearTimeout(closeTimer.current);
        setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return;
        closeTimer.current = window.setTimeout(() => setOpen(false), 160);
      }}
      onBlur={(e) => {
        if (!wrap.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          setOpen(false);
          button.current?.focus();
        }
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const links = Array.from(wrap.current?.querySelectorAll<HTMLAnchorElement>(`#${CSS.escape(panelId)} a`) ?? []);
          const current = links.indexOf(document.activeElement as HTMLAnchorElement);
          if (!open) {
            setOpen(true);
            requestAnimationFrame(() => focusItem(e.key === "ArrowDown" ? 0 : -1));
          } else {
            focusItem(current === -1 ? (e.key === "ArrowDown" ? 0 : -1) : current + (e.key === "ArrowDown" ? 1 : -1));
          }
        }
      }}
    >
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 py-2 text-[0.98rem] font-medium transition hover:text-primary ${active || open ? "text-ink" : "text-ink-soft"}`}
      >
        {dict.nav.about}
        <ChevronIcon className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Invisible bridge so the pointer can travel from the button to the panel without closing it. */}
      <div
        id={panelId}
        hidden={!open}
        className="absolute right-0 top-full pt-4"
      >
        <div className="animate-menu-in w-[22rem] overflow-hidden rounded-[24px] bg-surface p-2 text-ink shadow-[var(--shadow-soft)] ring-1 ring-line">
          <ul>
            {NAV_ABOUT.map((item) => {
              const current = isActivePath(pathname, item.href);
              return (
                <li key={item.key}>
                  <L
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className="group flex min-h-12 items-center justify-between gap-4 rounded-[16px] px-4 py-2.5 text-[1.02rem] font-medium transition hover:bg-bg-alt focus-visible:bg-bg-alt"
                  >
                    <span className="flex items-center gap-3">
                      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${current ? "bg-accent" : "bg-line group-hover:bg-accent"}`} />
                      {dict.nav[item.key]}
                    </span>
                    <ArrowIcon size={16} className="-translate-x-1 text-primary opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </L>
                </li>
              );
            })}
          </ul>
          <a
            href={CLINIC.phoneHref}
            className="mt-2 flex items-center justify-between gap-3 rounded-[16px] bg-bg-alt px-4 py-3.5 text-[0.95rem] transition hover:bg-line/60"
          >
            <span className="text-ink-soft">{dict.common.callUs}</span>
            <span className="flex items-center gap-2 font-semibold text-primary">
              <PhoneIcon size={17} />
              {CLINIC.phone}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

/** Full-screen menu for phones, tablets and small laptops. Big rows, plain words, the three ways to reach us at the bottom. */
function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const { dict } = useLocale();
  const [aboutOpen, setAboutOpen] = useState(() => NAV_ABOUT.some((i) => isActivePath(pathname, i.href)));
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const aboutId = useId();

  // Latest onClose without re-running the open effect (which moves focus) on every parent render.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
      if (e.key !== "Tab" || !dialogRef.current) return;
      // Keep Tab inside the open menu.
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")).filter((el) => el.offsetParent !== null);
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const row = "flex min-h-16 w-full items-center justify-between gap-4 border-b border-line py-4 text-left font-display text-[1.75rem] leading-tight sm:text-[2rem]";

  return (
    <div ref={dialogRef} className="animate-menu-in fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-bg text-ink xl:hidden" role="dialog" aria-modal="true" aria-label={dict.nav.menu}>
      <div className="flex h-[var(--header-h)] flex-none items-center justify-between px-5 sm:px-8">
        <Logo tagline={false} />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="flex h-11 items-center gap-2 rounded-full border border-ink/20 pl-4 pr-4 font-semibold transition hover:border-ink/50"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M1.5 1.5l11 11M12.5 1.5l-11 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          {dict.nav.close}
        </button>
      </div>

      <nav className="mx-auto w-full max-w-2xl flex-1 px-5 pt-4 sm:px-8" aria-label={dict.nav.menu}>
        <ul>
          {NAV_MAIN.map((item) => (
            <li key={item.key}>
              <L href={item.href} onClick={onClose} className={row} aria-current={isActivePath(pathname, item.href) ? "page" : undefined}>
                {dict.nav[item.key]}
                <ArrowIcon size={22} className="flex-none text-accent" />
              </L>
            </li>
          ))}
          <li>
            <button type="button" className={row} aria-expanded={aboutOpen} aria-controls={aboutId} onClick={() => setAboutOpen((v) => !v)}>
              {dict.nav.about}
              <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}>
                <ChevronIcon size={16} />
              </span>
            </button>
            <ul id={aboutId} hidden={!aboutOpen} className="border-b border-line py-2">
              {NAV_ABOUT.map((item) => (
                <li key={item.key}>
                  <L
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
                    className="flex min-h-14 items-center gap-3 py-2 pl-1 text-[1.15rem] font-medium text-ink-soft transition hover:text-ink aria-[current=page]:text-ink"
                  >
                    <span aria-hidden="true" className="h-px w-5 bg-accent" />
                    {dict.nav[item.key]}
                  </L>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      <div className="mx-auto w-full max-w-2xl flex-none space-y-3 px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-8 sm:px-8">
        <L href="/brainmap" onClick={onClose} className={buttonClass("cta", "lg", "w-full")}>
          {dict.nav.cta}
        </L>
        <div className="grid grid-cols-2 gap-3">
          <a href={CLINIC.phoneHref} className={buttonClass("outline", "lg", "w-full !px-4 text-primary")}>
            <PhoneIcon size={19} />
            {dict.common.callUs}
          </a>
          <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className={buttonClass("outline", "lg", "w-full !px-4 text-primary")}>
            <WhatsAppIcon size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
