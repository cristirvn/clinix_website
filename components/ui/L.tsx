"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { localizePath } from "@/lib/i18n";
import { useLocale } from "@/components/layout/LocaleProvider";

/**
 * Locale-aware link. Always pass the INTERNAL (Romanian) path —
 * `<L href="/chestionare/somn">` renders `/tests/sleep` on the English site.
 * External, `tel:`, `mailto:` and `#hash` links pass through untouched.
 */
export function L({ href, ...rest }: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const { locale } = useLocale();
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return <a href={href} {...(rest as ComponentProps<"a">)} />;
  }
  return <Link href={localizePath(href, locale)} {...rest} />;
}
