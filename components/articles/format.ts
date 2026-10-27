import type { Locale } from "@/lib/i18n";

/** "3 noiembrie 2026" / "3 November 2026". */
export function formatDate(iso: string, locale: Locale): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale === "en" ? "en-GB" : "ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
