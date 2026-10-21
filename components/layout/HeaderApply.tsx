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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(!!document.getElementById("aplica"));
  }, [pathname]);

  if (!show) return null;
  return (
    <span className="hidden sm:block">
      <a href="#aplica" className={buttonClass("cta", "md", "!min-h-11 !px-5 !py-2.5 text-[0.95rem]")}>
        {locale === "en" ? "Apply now" : "Aplică acum"}
      </a>
    </span>
  );
}
