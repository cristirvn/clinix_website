import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { EMPTY_CMS, normalizeCms, type CmsData } from "./types";

/**
 * Where `/admin` content is stored.
 *
 *  - Production (Vercel): Upstash Redis, added from the Vercel dashboard
 *    (Storage → Upstash for Redis → connect to the project). Vercel then sets
 *    KV_REST_API_URL + KV_REST_API_TOKEN (or the UPSTASH_REDIS_REST_* pair).
 *    One key holds one small JSON document.
 *  - Local development without those variables: `.data/cms.json` (git-ignored).
 *
 * Public pages read through the Next.js data cache (tag `cms`); every save in
 * /admin expires that tag and the pages, so changes are live immediately.
 */
export const CMS_TAG = "cms";
const KEY = "emmanuelclinix:cms:v1";
const LOCAL_FILE = path.join(process.cwd(), ".data", "cms.json");

function redis(): { url: string; token: string } | null {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

/** "redis" — live storage · "file" — local dev · "none" — deployed without storage (saving is disabled). */
export function storageMode(): "redis" | "file" | "none" {
  if (redis()) return "redis";
  return process.env.VERCEL ? "none" : "file";
}

async function readRedis(cached: boolean): Promise<CmsData> {
  const r = redis()!;
  const res = await fetch(`${r.url}/get/${KEY}`, {
    headers: { Authorization: `Bearer ${r.token}` },
    ...(cached ? { cache: "force-cache" as const, next: { tags: [CMS_TAG] } } : { cache: "no-store" as const }),
  });
  if (!res.ok) throw new Error(`CMS read failed: HTTP ${res.status}`);
  const body = (await res.json()) as { result?: string | null };
  return body.result ? normalizeCms(JSON.parse(body.result)) : EMPTY_CMS;
}

async function readFile(): Promise<CmsData> {
  try {
    return normalizeCms(JSON.parse(await fs.readFile(LOCAL_FILE, "utf8")));
  } catch {
    return EMPTY_CMS;
  }
}

/** For public pages: cached, never throws (a storage hiccup must not take a page down). */
export async function readCmsPublic(): Promise<CmsData> {
  try {
    const mode = storageMode();
    if (mode === "redis") return await readRedis(true);
    if (mode === "file") return await readFile();
    return EMPTY_CMS;
  } catch (err) {
    console.error("[cms]", err);
    return EMPTY_CMS;
  }
}

/** For /admin: always the latest version, errors surface. */
export async function readCmsFresh(): Promise<CmsData> {
  const mode = storageMode();
  if (mode === "redis") return readRedis(false);
  if (mode === "file") return readFile();
  return EMPTY_CMS;
}

export async function writeCms(data: CmsData): Promise<void> {
  const json = JSON.stringify(data);
  const mode = storageMode();
  if (mode === "redis") {
    const r = redis()!;
    const res = await fetch(r.url, {
      method: "POST",
      headers: { Authorization: `Bearer ${r.token}`, "Content-Type": "application/json" },
      body: JSON.stringify(["SET", KEY, json]),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`CMS write failed: HTTP ${res.status}`);
    return;
  }
  if (mode === "file") {
    await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
    await fs.writeFile(LOCAL_FILE, JSON.stringify(data, null, 2));
    return;
  }
  throw new Error("STORAGE_NOT_CONFIGURED");
}
