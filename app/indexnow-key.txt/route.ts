/**
 * IndexNow key file (Bing, Yandex, Seznam, Naver… share submissions).
 * Served at `/indexnow-key.txt` on both domains; `scripts/indexnow.mjs`
 * passes this URL as `keyLocation`, so the key itself never has to be a
 * file name. Set `INDEXNOW_KEY` (8–128 chars: a–z, A–Z, 0–9, -).
 */
export const dynamic = "force-dynamic";

export function GET() {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key) return new Response("Not found", { status: 404 });
  return new Response(key, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
