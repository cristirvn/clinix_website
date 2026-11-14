import "server-only";
import { createHmac, createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * /admin login: one password, set in the ADMIN_PASSWORD environment variable.
 * The session is a signed cookie (30 days). Changing the password logs
 * everyone out. Without ADMIN_PASSWORD the admin is closed.
 */
const COOKIE = "ec_admin";
const MAX_AGE = 60 * 60 * 24 * 30;

function key(): Buffer | null {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || pw.length < 8) return null;
  return createHash("sha256").update(`ec-admin:${pw}:${process.env.ADMIN_SESSION_SECRET ?? ""}`).digest();
}

export const adminConfigured = () => key() !== null;

function sign(payload: string, k: Buffer) {
  return createHmac("sha256", k).update(payload).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const x = createHash("sha256").update(a).digest();
  const y = createHash("sha256").update(b).digest();
  return timingSafeEqual(x, y);
}

export function passwordMatches(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  return Boolean(pw && pw.length >= 8 && safeEqual(input, pw));
}

export async function startSession() {
  const k = key();
  if (!k) throw new Error("ADMIN_PASSWORD not set");
  const exp = String(Date.now() + MAX_AGE * 1000);
  (await cookies()).set(COOKIE, `${exp}.${sign(exp, k)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function endSession() {
  (await cookies()).delete(COOKIE);
}

export async function isAdmin(): Promise<boolean> {
  const k = key();
  if (!k) return false;
  const value = (await cookies()).get(COOKIE)?.value;
  if (!value) return false;
  const [exp, sig] = value.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  return safeEqual(sig, sign(exp, k));
}
