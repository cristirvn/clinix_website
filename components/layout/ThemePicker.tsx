"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/layout/LocaleProvider";

import { THEMES, THEME_STORAGE_KEY } from "@/components/layout/themes";

/**
 * Floating design picker for choosing a direction with the owner.
 * Hidden when NEXT_PUBLIC_DESIGN_PREVIEW=0. A link with `?theme=forest`
 * opens the site directly in that design (handy to send by WhatsApp).
 */
export function ThemePicker() {
  const { dict } = useLocale();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string>("");

  useEffect(() => {
    // Sync with the value the inline head script already applied.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(document.documentElement.dataset.theme ?? "ivory");
  }, []);

  function pick(id: string) {
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {}
    setCurrent(id);
  }

  return (
    <div className="fixed bottom-28 left-3 z-[60] sm:bottom-4 sm:left-4 print:hidden">
      {open && (
        <div className="mb-3 w-64 rounded-xl border border-line bg-surface p-4 text-ink shadow-2xl">
          <p className="text-sm font-bold">{dict.design.title}</p>
          <p className="mb-3 text-xs text-ink-soft">{dict.design.hint}</p>
          <ul className="space-y-1.5">
            {THEMES.map((t, i) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => pick(t.id)}
                  className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm transition ${
                    current === t.id ? "border-accent bg-bg-alt font-semibold" : "border-transparent hover:bg-bg-alt"
                  }`}
                >
                  <span className="flex">
                    {t.swatch.map((c) => (
                      <span
                        key={c}
                        className="-mr-1.5 h-5 w-5 rounded-full border border-black/10"
                        style={{ background: c }}
                      />
                    ))}
                  </span>
                  <span className="ml-1.5">
                    {i + 1}. {t.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-ink px-3 text-sm font-semibold text-bg shadow-xl sm:h-12 sm:px-4"
        aria-expanded={open}
      >
        <span aria-hidden="true">◐</span> <span className="hidden sm:inline">{dict.design.title}</span>
      </button>
    </div>
  );
}

