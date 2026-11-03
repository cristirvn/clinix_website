#!/usr/bin/env node
/**
 * Tell Bing (and every other IndexNow engine) that pages changed.
 *
 *   node --env-file=.env.local scripts/indexnow.mjs            # every URL in both live sitemaps
 *   node --env-file=.env.local scripts/indexnow.mjs <url> …    # only these URLs
 *
 * Needs INDEXNOW_KEY (the same value deployed on the site — the key file is
 * served at /indexnow-key.txt) and the two domains from NEXT_PUBLIC_SITE_URL_RO/_EN.
 * Run it after a deploy that adds or changes pages.
 */
const KEY = process.env.INDEXNOW_KEY?.trim();
const SITES = [
  process.env.NEXT_PUBLIC_SITE_URL_RO ?? "https://emmanuelclinix.ro",
  process.env.NEXT_PUBLIC_SITE_URL_EN ?? "https://emmanuelclinix.co.uk",
].map((s) => s.replace(/\/$/, ""));
const ENDPOINT = "https://api.indexnow.org/indexnow";

if (!KEY || !/^[a-zA-Z0-9-]{8,128}$/.test(KEY)) {
  console.error("INDEXNOW_KEY is missing or invalid (8–128 characters: a–z, A–Z, 0–9, -).");
  process.exit(1);
}

async function sitemapUrls(base) {
  const res = await fetch(`${base}/sitemap.xml`);
  if (!res.ok) throw new Error(`${base}/sitemap.xml → HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

async function checkKeyFile(base) {
  const res = await fetch(`${base}/indexnow-key.txt`);
  const body = res.ok ? (await res.text()).trim() : "";
  if (body !== KEY) throw new Error(`${base}/indexnow-key.txt does not serve INDEXNOW_KEY (deploy the env var first).`);
}

async function submit(base, urls) {
  const host = new URL(base).host;
  const own = urls.filter((u) => new URL(u).host === host);
  if (own.length === 0) return;
  await checkKeyFile(base);
  for (let i = 0; i < own.length; i += 10000) {
    const urlList = own.slice(i, i + 10000);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host, key: KEY, keyLocation: `${base}/indexnow-key.txt`, urlList }),
    });
    // 200 = accepted, 202 = accepted (key validation pending).
    console.log(`${host}: ${urlList.length} URL(s) → HTTP ${res.status}`);
    if (res.status >= 400) console.error(await res.text());
  }
}

const args = process.argv.slice(2);
let failed = false;
for (const base of SITES) {
  try {
    const urls = args.length ? args : await sitemapUrls(base);
    await submit(base, urls);
  } catch (err) {
    failed = true;
    console.error(`${base}: ${err instanceof Error ? err.message : err}`);
  }
}
process.exit(failed ? 1 : 0);
