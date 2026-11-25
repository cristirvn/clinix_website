"use client";

import { useEffect, useState } from "react";
import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { ChatIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { useLocale } from "@/components/layout/LocaleProvider";
import { CLINIC } from "@/lib/site";

/** Fired to open the assistant from anywhere (the chat widget listens for it). */
export const OPEN_CHAT_EVENT = "ec:open-chat";

/**
 * Phone action bar (under 768px), like a native app's bottom bar: call,
 * WhatsApp, the main action, the assistant — all within the thumb's reach.
 * It floats up once the visitor scrolls past the first screen (the hero
 * already shows the same action) and respects the home-indicator inset.
 * `data-sticky-cta` makes the page leave room for it (app/globals.css).
 */
export function MobileDock() {
  const { dict } = useLocale();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const icon =
    "press flex h-[2.85rem] w-[2.85rem] flex-none items-center justify-center rounded-full border border-line bg-surface text-primary max-[400px]:h-[2.6rem] max-[400px]:w-[2.6rem]";

  return (
    <div
      data-sticky-cta
      className={`fixed inset-x-0 bottom-0 z-[55] px-2.5 pb-[calc(0.6rem+env(safe-area-inset-bottom))] transition-[transform,opacity] duration-500 ease-[var(--ease-out)] md:hidden print:hidden ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[130%] opacity-0"
      }`}
    >
      <nav
        aria-label={dict.nav.cta}
        className="mx-auto flex max-w-md items-center gap-1.5 rounded-full max-[400px]:gap-1 border border-line bg-bg/85 p-1.5 shadow-[var(--shadow-float)] backdrop-blur-xl backdrop-saturate-150"
      >
        <a href={CLINIC.phoneHref} aria-label={`${dict.common.callUs}: ${CLINIC.phone}`} className={icon}>
          <PhoneIcon size={20} />
        </a>
        <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={dict.common.whatsapp} className={`${icon} !text-success`}>
          <WhatsAppIcon size={22} />
        </a>
        <L href="/brainmap" tabIndex={shown ? undefined : -1} className={buttonClass("cta", "md", "btn-shine !min-h-[2.85rem] min-w-0 flex-1 !px-3 !py-1 text-[1.02rem] max-[400px]:!px-2")}>
          {/* Never cut the label off: on the narrowest phones it may wrap to two lines. */}
          <span className="text-center leading-[1.1] [text-wrap:balance]">{dict.nav.cta}</span>
        </L>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(OPEN_CHAT_EVENT))}
          aria-label={dict.chat.open}
          className={`${icon} relative`}
        >
          <ChatIcon size={22} />
          <span aria-hidden="true" className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-success ring-2 ring-surface" />
        </button>
      </nav>
    </div>
  );
}
