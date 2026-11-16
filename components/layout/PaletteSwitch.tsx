"use client";

import { useEffect, useState } from "react";
import { SITE_URLS } from "@/lib/i18n";

/**
 * TEMPORARY — lets the clinic compare the current navy palette with the
 * "Turcoaz" one (`data-palette="aqua"`) and the "Mix" one (navy site,
 * turquoise buttons and coloured text: `data-palette="mix"`), all in
 * app/globals.css, on the same page, on their phone, with one tap. Remove this file, its two uses in
 * app/[locale]/layout.tsx and the losing palette once they have chosen.
 *
 * Shown on preview deployments only — never on the live domains. The choice
 * is remembered per browser; `?tema=turcoaz` / `?tema=mix` / `?tema=actual`
 * in a link opens the page straight in that palette.
 */
const STORAGE_KEY = "ec-palette";
const LIVE_HOSTS = Object.values(SITE_URLS).flatMap((u) => {
  const host = new URL(u).hostname;
  return [host, host.startsWith("www.") ? host.slice(4) : `www.${host}`];
});

/** Runs before first paint (inline in <body>), so the page never flashes the other palette. */
export const PALETTE_BOOT_SCRIPT = `(function(){try{if(${JSON.stringify(LIVE_HOSTS)}.indexOf(location.hostname)>-1)return;var q=new URLSearchParams(location.search).get("tema");var p=q==="turcoaz"?"aqua":q==="mix"?"mix":q==="actual"?"classic":localStorage.getItem("${STORAGE_KEY}");if(q)localStorage.setItem("${STORAGE_KEY}",p);if(p==="aqua"||p==="mix")document.documentElement.setAttribute("data-palette",p)}catch(e){}})();`;

type Palette = "classic" | "aqua" | "mix";
const OPTIONS: Array<{ value: Palette; label: string; swatch: string }> = [
  { value: "classic", label: "Actual", swatch: "#1d5fd1" },
  { value: "aqua", label: "Turcoaz", swatch: "#12bdd6" },
  { value: "mix", label: "Mix", swatch: "linear-gradient(135deg, #1d5fd1 50%, #12bdd6 50%)" },
];

export function PaletteSwitch() {
  const [palette, setPalette] = useState<Palette | null>(null);

  useEffect(() => {
    if (LIVE_HOSTS.includes(window.location.hostname)) return;
    // Read the palette the boot script already applied (external DOM state, read once on mount).
    const current = document.documentElement.dataset.palette;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPalette(current === "aqua" || current === "mix" ? current : "classic");
  }, []);

  if (!palette) return null;

  const choose = (p: Palette) => {
    setPalette(p);
    if (p !== "classic") document.documentElement.setAttribute("data-palette", p);
    else document.documentElement.removeAttribute("data-palette");
    try {
      localStorage.setItem(STORAGE_KEY, p);
    } catch {
      /* private mode: the choice just isn't remembered */
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Paletă de culori (previzualizare)"
      className="fixed left-3 z-[60] flex gap-0.5 rounded-full border border-line bg-surface p-0.5 text-ink shadow-[var(--shadow-card)] sm:left-5"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      {OPTIONS.map((o) => {
        const on = palette === o.value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => choose(o.value)}
            className={`flex min-h-10 items-center gap-1.5 rounded-full px-3 text-[0.875rem] font-semibold transition ${on ? "bg-ink text-bg" : "hover:bg-bg-alt"}`}
          >
            <span aria-hidden="true" className="h-3 w-3 rounded-full" style={{ background: o.swatch }} />
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
