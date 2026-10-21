/**
 * Plausibility checks for contact details (quizzes unlock their result only
 * after these pass; every other form uses them too). They don't prove the
 * visitor owns the number/inbox — they reject obviously invented data.
 *
 * Romanian site (approved spec): Romanian mobile 07xxxxxxxx + Gmail/Yahoo.
 * English site: Romanian OR UK mobile, any real-looking email domain.
 */
import type { Locale } from "@/lib/i18n";

const PLACEHOLDER_EMAIL_LOCAL_PART =
  /^(?:test|testing|demo|fake|asdf|qwerty|example|email|none|nume|name|aaa|abc|xxx|admin)(?:[._-]?\d*)$/i;
const RO_EMAIL_DOMAINS = new Set(["gmail.com", "yahoo.com", "yahoo.ro"]);
const BLOCKED_DOMAINS = new Set(["example.com", "test.com", "mailinator.com", "email.com"]);

function digitsOf(value: string): string {
  return value.replace(/\D/g, "");
}

/** A plausible Romanian mobile: 07xxxxxxxx (also +407… / 00407…). */
export function isPlausibleRomanianMobile(value: string): boolean {
  if (!/^[0-9+()\s-]+$/.test(value.trim())) return false;
  let d = digitsOf(value);
  if (d.startsWith("0040")) d = `0${d.slice(4)}`;
  else if (d.startsWith("40")) d = `0${d.slice(2)}`;
  if (!/^07\d{8}$/.test(d)) return false;
  const subscriber = d.slice(2);
  if (/^(\d)\1{7}$/.test(subscriber)) return false;
  if (subscriber === "12345678" || subscriber === "87654321") return false;
  return true;
}

/** A plausible UK mobile: 07xxxxxxxxx (11 digits, also +447… / 00447…). */
export function isPlausibleUkMobile(value: string): boolean {
  if (!/^[0-9+()\s-]+$/.test(value.trim())) return false;
  let d = digitsOf(value);
  if (d.startsWith("0044")) d = `0${d.slice(4)}`;
  else if (d.startsWith("44")) d = `0${d.slice(2)}`;
  if (!/^07\d{9}$/.test(d)) return false;
  const subscriber = d.slice(2);
  if (/^(\d)\1{8}$/.test(subscriber)) return false;
  if (subscriber === "123456789" || subscriber === "987654321") return false;
  return true;
}

export function isPlausiblePhone(value: string, locale: Locale): boolean {
  if (locale === "ro") return isPlausibleRomanianMobile(value);
  return isPlausibleUkMobile(value) || isPlausibleRomanianMobile(value);
}

export function isPlausibleEmail(value: string, locale: Locale): boolean {
  const email = value.trim().toLowerCase();
  const match = /^([a-z0-9](?:[a-z0-9._+-]{0,62}[a-z0-9])?)@([a-z0-9-]+(?:\.[a-z0-9-]+)+)$/.exec(email);
  if (!match) return false;
  const [, localPart, domain] = match;
  if (locale === "ro" && !RO_EMAIL_DOMAINS.has(domain)) return false;
  if (BLOCKED_DOMAINS.has(domain)) return false;
  if (!/[a-z]/.test(localPart) || PLACEHOLDER_EMAIL_LOCAL_PART.test(localPart)) return false;
  if (/(.)\1{3,}/.test(localPart)) return false;
  return true;
}

/** Loose check for optional email fields on non-quiz forms. */
export function isValidEmailShape(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
