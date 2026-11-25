import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { getServiceList } from "@/content/services";
import { EMPTY_CMS, isAcceptedVideoUrl, normalizeCms, type CmsData } from "./types";
import { withSiteSeed } from "./seed";

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
 * /admin expires that tag and every page (the site layout reads the video
 * links), so changes are live on the next visit.
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

/**
 * Stored JSON → data. The first version kept service page videos under
 * `videos[<service slug>]`; those move to the service's video key (the next
 * save writes the new shape).
 */
function fromStored(raw: unknown): CmsData {
  const data = normalizeCms(raw);
  const legacy = raw && typeof raw === "object" ? (raw as { videos?: unknown }).videos : null;
  if (legacy && typeof legacy === "object") {
    for (const s of getServiceList("ro")) {
      const url = (legacy as Record<string, unknown>)[s.slug];
      if (typeof url === "string" && url && isAcceptedVideoUrl(url) && !data.media[s.video]) data.media[s.video] = url;
    }
  }
  return data;
}

async function readRedis(cached: boolean): Promise<CmsData> {
  const r = redis()!;
  const res = await fetch(`${r.url}/get/${KEY}`, {
    headers: { Authorization: `Bearer ${r.token}` },
    ...(cached ? { cache: "force-cache" as const, next: { tags: [CMS_TAG] } } : { cache: "no-store" as const }),
  });
  if (!res.ok) throw new Error(`CMS read failed: HTTP ${res.status}`);
  const body = (await res.json()) as { result?: string | null };
  return body.result ? fromStored(JSON.parse(body.result)) : EMPTY_CMS;
}

async function readFile(): Promise<CmsData> {
  try {
    return fromStored(JSON.parse(await fs.readFile(LOCAL_FILE, "utf8")));
  } catch {
    return EMPTY_CMS;
  }
}

/** For public pages: cached, never throws (a storage hiccup must not take a page down). */
export async function readCmsPublic(): Promise<CmsData> {
  try {
    const mode = storageMode();
    if (mode === "redis") return withSiteSeed(await readRedis(true));
    if (mode === "file") return withSiteSeed(await readFile());
    return withSiteSeed(EMPTY_CMS);
  } catch (err) {
    console.error("[cms]", err);
    return withSiteSeed(EMPTY_CMS);
  }
}

/** For /admin: always the latest version, errors surface. */
export async function readCmsFresh(): Promise<CmsData> {
  const mode = storageMode();
  if (mode === "redis") return withSiteSeed(await readRedis(false));
  if (mode === "file") return withSiteSeed(await readFile());
  return withSiteSeed(EMPTY_CMS);
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
