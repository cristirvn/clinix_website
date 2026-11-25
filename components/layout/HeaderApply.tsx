"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { buttonClass } from "@/components/ui/primitives";
import { useLocale } from "@/components/layout/LocaleProvider";

/** Funnel header button: shown only when the page has an application form (#aplica). */
export function HeaderApply() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  // A page can name the button itself (`data-apply-label` inside #aplica), e.g. the BrainMap landing.
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const form = document.getElementById("aplica");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(!!form);
    setLabel(form?.querySelector<HTMLElement>("[data-apply-label]")?.dataset.applyLabel ?? null);
  }, [pathname]);

  if (!show) return null;
  return (
    <span className="hidden sm:block">
      <a href="#aplica" className={buttonClass("cta", "md", "!min-h-11 !px-6 !py-2.5 text-[0.95rem]")}>
        {label ?? (locale === "en" ? "Apply now" : "Aplică acum")}
      </a>
    </span>
  );
}
