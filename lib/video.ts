/** Video link helpers shared by the site player and /admin previews. */

import { VIDEOS, type MediaVideo, type VideoKey } from "@/content/media";

/** Video links set in /admin, by key. */
export type VideoOverrides = Partial<Record<VideoKey, string>>;

export function youtubeId(src: string): string | null {
  return /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/.exec(src)?.[1] ?? null;
}

export function vimeoId(src: string): string | null {
  return /vimeo\.com\/(?:video\/)?(\d+)/.exec(src)?.[1] ?? null;
}

/** What to load when the visitor presses play. */
export function embedUrl(src: string): { kind: "iframe" | "file"; url: string } | null {
  if (!src) return null;
  const yt = youtubeId(src);
  if (yt) return { kind: "iframe", url: `https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0` };
  const vimeo = vimeoId(src);
  if (vimeo) return { kind: "iframe", url: `https://player.vimeo.com/video/${vimeo}?autoplay=1` };
  return { kind: "file", url: src };
}

/** YouTube gives a still frame for free — used as the cover before play. */
export function autoPoster(src: string): string | undefined {
  const yt = youtubeId(src);
  return yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : undefined;
}

/**
 * What a video key plays: the link the clinic set in /admin, else the default
 * from `content/media.ts`. An /admin link drops the default's duration and
 * English variant (they described the old placeholder, not the new video).
 */
export function resolveVideo(key: VideoKey, overrides: VideoOverrides): MediaVideo {
  const url = overrides[key];
  return url ? { src: url } : VIDEOS[key];
}
