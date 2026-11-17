"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Drawer } from "vaul";
import { usePathname } from "next/navigation";
import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { ArrowIcon, ChevronIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Logo } from "@/components/layout/Logo";
import { NeuroFitMark } from "@/components/neurofit/brand";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { useLocale } from "@/components/layout/LocaleProvider";
import { CLINIC } from "@/lib/site";
import { internalizePath } from "@/lib/i18n";
import { NAV_ABOUT, NAV_MAIN, NAV_SERVICES, isActivePath } from "@/components/layout/nav";

/** "Cum funcționează" is a dropdown: the visitor picks the service to read about. */
const HOW_HREF = "/cum-functioneaza";
const SERVICE_HREFS = [HOW_HREF, ...NAV_SERVICES.map((s) => `/servicii/${s.slug}`)];
const NAV_PLAIN = NAV_MAIN.filter((item) => item.href !== HOW_HREF);

/**
 * Site header. At the top of the page it is a plain white bar; once the page
 * scrolls it lifts into a floating glass "island" (rounded, blurred, a soft
 * shadow), like a native app bar. Desktop: logo · "Cum funcționează" panel ·
 * plain links · "Despre noi" panel · language · one action. Below 1280px the
 * menu opens as a bottom sheet (Vaul): drag it down or tap outside to close.
 */
export function Header() {
  const { dict } = useLocale();
  const pathname = internalizePath(usePathname() ?? "/");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the sheet when the route changes (state adjusted during render, React-recommended).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const linkClass = (href: string) =>
    `relative whitespace-nowrap py-2 text-[0.95rem] font-medium transition hover:text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
      isActivePath(pathname, href) ? "text-ink after:scale-x-100" : "text-ink-soft after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 h-[var(--header-h)] text-ink transition-[background-color] duration-500 ${scrolled ? "bg-transparent" : "bg-bg"}`}
    >
      <div
        className={`flex items-center justify-between gap-4 border transition-[margin,height,padding,background-color,border-color,box-shadow,border-radius,max-width] duration-500 ease-[var(--ease-out)] xl:gap-3 ${
          scrolled
            ? "mx-2 mt-2 h-[calc(var(--header-h)-1rem)] max-w-[calc(80rem-1rem)] rounded-full border-line bg-bg/80 pl-4 pr-1.5 shadow-[var(--shadow-float)] backdrop-blur-xl backdrop-saturate-150 sm:mx-3 sm:pl-6 sm:pr-2 xl:mx-auto"
            : "mx-auto h-full max-w-7xl rounded-none border-transparent px-5 sm:px-8"
        }`}
      >
        <L href="/" aria-label="Emmanuel CliniX" className="flex-none">
          <Logo eager className={`w-auto transition-[height] duration-500 ${scrolled ? "h-8 sm:h-10" : "h-10 sm:h-12"}`} />
        </L>

        <nav className="hidden items-center gap-6 whitespace-nowrap xl:flex 2xl:gap-8" aria-label={dict.nav.menu}>
          <ServicesMenu pathname={pathname} />
          {NAV_PLAIN.map((item) => (
            <L key={item.key} href={item.href} className={`${linkClass(item.href)} flex items-center gap-2`} aria-current={isActivePath(pathname, item.href) ? "page" : undefined}>
              {item.key === "neurofit" && <NeuroFitMark size={12} />}
              {dict.nav[item.key]}
            </L>
          ))}
          <AboutMenu pathname={pathname} />
        </nav>

        <div className="hidden items-center gap-2.5 xl:flex">
          <LangSwitch />
          <L href="/brainmap" className={buttonClass("cta", "md", "!min-h-11 whitespace-nowrap !px-5 !py-2.5 text-[0.95rem]")}>
            {dict.nav.cta}
          </L>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LangSwitch />
          <L href="/brainmap" className={buttonClass("cta", "md", "max-md:!hidden !min-h-11 !px-5 !py-2 text-[0.95rem]")}>
            {dict.nav.cta}
          </L>
          <MobileMenu pathname={pathname} open={open} onOpenChange={setOpen} />
        </div>
      </div>
    </header>
  );
}

/**
 * A disclosure panel in the desktop bar (WAI navigation pattern, not a menu
 * role): opens on hover with a mouse, on click/tap, and from the keyboard
 * (Enter/Space/↓). Esc, a click outside or tabbing away closes it.
 */
function NavDisclosure({
  label,
  pathname,
  active,
  align = "right",
  panelClass,
  children,
}: {
  label: string;
  pathname: string;
  active: boolean;
  align?: "left" | "right";
  panelClass: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const panelId = useId();

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
        className={`flex items-center gap-1.5 whitespace-nowrap py-2 text-[0.95rem] font-medium transition hover:text-primary ${active || open ? "text-ink" : "text-ink-soft"}`}
      >
        {label}
        <ChevronIcon className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Invisible bridge so the pointer can travel from the button to the panel without closing it. */}
      <div id={panelId} hidden={!open} className={`absolute top-full pt-4 ${align === "right" ? "right-0" : "-left-6"}`}>
        <div className={`animate-menu-in overflow-hidden rounded-[var(--radius-media)] bg-surface p-2 text-ink shadow-[var(--shadow-soft)] ring-1 ring-line ${panelClass}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

/** "Cum funcționează" — pick a service: name + one plain line each, then the overview page. */
function ServicesMenu({ pathname }: { pathname: string }) {
  const { dict, locale } = useLocale();
  return (
    <NavDisclosure
      label={dict.nav.howItWorks}
      pathname={pathname}
      active={SERVICE_HREFS.some((h) => isActivePath(pathname, h))}
      align="left"
      panelClass="w-[36rem]"
    >
      <p className="px-4 pb-1 pt-3 text-[0.875rem] font-semibold text-ink-soft">{dict.nav.pickService}</p>
      <ul className="grid grid-cols-2 gap-0.5">
        {NAV_SERVICES.map((s) => {
          const href = `/servicii/${s.slug}`;
          const current = isActivePath(pathname, href);
          return (
            <li key={s.slug}>
              <L
                href={href}
                aria-current={current ? "page" : undefined}
                className={`group flex min-h-14 flex-col justify-center rounded-[10px] px-4 py-2.5 transition hover:bg-bg-alt focus-visible:bg-bg-alt ${current ? "bg-bg-alt" : ""}`}
              >
                <span className="flex items-center gap-2 text-[1.02rem] font-semibold">
                  {s[locale]}
                  <ArrowIcon size={14} className="-translate-x-1 text-primary opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
                <span className="text-[0.88rem] leading-snug text-ink-soft">{s.sub[locale]}</span>
              </L>
            </li>
          );
        })}
      </ul>
      <L
        href={HOW_HREF}
        aria-current={isActivePath(pathname, HOW_HREF) ? "page" : undefined}
        className="mt-2 flex items-center justify-between gap-3 rounded-[10px] bg-bg-alt px-4 py-3.5 text-[0.95rem] font-semibold text-primary transition hover:bg-line/60"
      >
        {dict.nav.howItWorksOverview}
        <ArrowIcon size={16} />
      </L>
    </NavDisclosure>
  );
}

/** "Despre noi" — the clinic's own pages + the phone number. */
function AboutMenu({ pathname }: { pathname: string }) {
  const { dict } = useLocale();
  return (
    <NavDisclosure
      label={dict.nav.about}
      pathname={pathname}
      active={NAV_ABOUT.some((i) => isActivePath(pathname, i.href))}
      panelClass="w-[22rem]"
    >
      <ul>
        {NAV_ABOUT.map((item) => {
          const current = isActivePath(pathname, item.href);
          return (
            <li key={item.key}>
              <L
                href={item.href}
                aria-current={current ? "page" : undefined}
                className="group flex min-h-12 items-center justify-between gap-4 rounded-[10px] px-4 py-2.5 text-[1.02rem] font-medium transition hover:bg-bg-alt focus-visible:bg-bg-alt"
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
        className="mt-2 flex items-center justify-between gap-3 rounded-[10px] bg-bg-alt px-4 py-3.5 text-[0.95rem] transition hover:bg-line/60"
      >
        <span className="text-ink-soft">{dict.common.callUs}</span>
        <span className="flex items-center gap-2 font-semibold text-primary">
          <PhoneIcon size={17} />
          {CLINIC.phone}
        </span>
      </a>
    </NavDisclosure>
  );
}

/**
 * Menu for phones, tablets and small laptops: a bottom sheet (Vaul) that
 * rises from the thumb's side of the screen. The services are big two-column
 * tiles, the other pages big rows, the three ways to reach us at the foot.
 * Drag down, tap outside or Esc to close; focus is trapped while open.
 */
function MobileMenu({ pathname, open, onOpenChange }: { pathname: string; open: boolean; onOpenChange: (open: boolean) => void }) {
  const { dict, locale } = useLocale();
  const [aboutOpen, setAboutOpen] = useState(() => NAV_ABOUT.some((i) => isActivePath(pathname, i.href)));
  const aboutId = useId();
  const close = () => onOpenChange(false);

  const row = "press flex min-h-[3.75rem] w-full items-center justify-between gap-4 border-b border-line py-3 text-left text-[1.35rem] font-semibold leading-tight tracking-[-0.015em]";

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} repositionInputs={false}>
      <Drawer.Trigger
        className="lg lg-tint flex h-11 items-center gap-2.5 rounded-full px-4 font-semibold sm:px-5"
        aria-haspopup="dialog"
      >
        <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
          <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        <span className="text-[0.95rem]">{dict.nav.menu}</span>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[70] bg-dark/55 backdrop-blur-[2px] xl:hidden" />
        <Drawer.Content
          aria-describedby={undefined}
          className="fixed inset-x-0 bottom-0 z-[71] flex max-h-[94svh] flex-col rounded-t-[var(--radius-panel)] bg-bg text-ink shadow-[var(--shadow-float)] outline-none xl:hidden"
        >
          <Drawer.Handle className="!mt-3 !h-1.5 !w-12 !bg-line" />
          <div className="flex flex-none items-center justify-between px-5 pb-2 pt-3 sm:px-8">
            <Drawer.Title className="sr-only">{dict.nav.menu}</Drawer.Title>
            <L href="/" onClick={close} aria-label="Emmanuel CliniX">
              <Logo className="h-9" />
            </L>
            <Drawer.Close className="press flex h-11 items-center gap-2 rounded-full border border-ink/15 px-4 font-semibold transition hover:border-ink/40">
              <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M1.5 1.5l11 11M12.5 1.5l-11 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              {dict.nav.close}
            </Drawer.Close>
          </div>

          <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-4 sm:px-8" aria-label={dict.nav.menu}>
            <p className="pb-3 pt-3 text-[0.95rem] text-ink-soft">{dict.nav.pickService}</p>
            <ul className="grid grid-cols-2 gap-2">
              {NAV_SERVICES.map((s) => {
                const href = `/servicii/${s.slug}`;
                const current = isActivePath(pathname, href);
                return (
                  <li key={s.slug}>
                    <L
                      href={href}
                      onClick={close}
                      aria-current={current ? "page" : undefined}
                      className={`press flex h-full min-h-[5.25rem] flex-col justify-between gap-2 rounded-[var(--radius)] border p-3.5 ${current ? "border-primary bg-primary/[0.06]" : "border-line bg-bg-alt/60"}`}
                    >
                      <span className="flex items-center justify-between gap-2 text-[1.08rem] font-semibold leading-tight">
                        {s[locale]}
                        <ArrowIcon size={15} className="flex-none text-accent" />
                      </span>
                      <span className="text-[0.88rem] leading-snug text-ink-soft">{s.sub[locale]}</span>
                    </L>
                  </li>
                );
              })}
            </ul>
            <L
              href={HOW_HREF}
              onClick={close}
              aria-current={isActivePath(pathname, HOW_HREF) ? "page" : undefined}
              className="press mt-2 flex min-h-12 items-center justify-between gap-3 rounded-[var(--radius)] bg-bg-alt px-4 py-3 font-semibold text-primary"
            >
              {dict.nav.howItWorksOverview}
              <ArrowIcon size={16} className="flex-none" />
            </L>

            <ul className="mt-4">
              {NAV_PLAIN.map((item) => (
                <li key={item.key}>
                  <L href={item.href} onClick={close} className={row} aria-current={isActivePath(pathname, item.href) ? "page" : undefined}>
                    <span className="flex items-center gap-3">
                      {item.key === "neurofit" && <NeuroFitMark size={16} />}
                      {dict.nav[item.key]}
                    </span>
                    <ArrowIcon size={20} className="flex-none text-accent" />
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
                <ul id={aboutId} hidden={!aboutOpen} className="grid grid-cols-2 gap-x-4 border-b border-line py-2">
                  {NAV_ABOUT.map((item) => (
                    <li key={item.key}>
                      <L
                        href={item.href}
                        onClick={close}
                        aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
                        className="flex min-h-12 items-center gap-2.5 py-2 text-[1.05rem] font-medium text-ink-soft transition hover:text-ink aria-[current=page]:text-ink"
                      >
                        <span aria-hidden="true" className="h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        {dict.nav[item.key]}
                      </L>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>

          <div className="flex-none space-y-2.5 border-t border-line bg-bg px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 sm:px-8">
            <L href="/brainmap" onClick={close} className={buttonClass("cta", "lg", "btn-shine w-full")}>
              {dict.nav.cta}
              <ArrowIcon />
            </L>
            <div className="grid grid-cols-2 gap-2.5">
              <a href={CLINIC.phoneHref} className={buttonClass("outline", "md", "w-full !px-3 text-primary")}>
                <PhoneIcon size={19} />
                {dict.common.callUs}
              </a>
              <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className={buttonClass("outline", "md", "w-full !px-3 text-primary")}>
                <WhatsAppIcon size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
