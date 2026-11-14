/** Video link helpers shared by the site player and /admin previews. */

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
