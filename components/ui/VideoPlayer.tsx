"use client";

import { useState } from "react";
import { VIDEOS, type MediaVideo, type VideoKey } from "@/content/media";
import { useLocale } from "@/components/layout/LocaleProvider";
import { autoPoster, embedUrl } from "@/lib/video";

/**
 * 16:9 video. Pass a key from `content/media.ts` (shared by both languages).
 * Click-to-load (no third-party player until the visitor presses play). With
 * no `src` yet it renders a branded placeholder frame.
 */
export function VideoPlayer({
  video,
  title,
  className = "",
}: {
  video: VideoKey | MediaVideo;
  title: string;
  className?: string;
}) {
  const { locale, dict } = useLocale();
  const [playing, setPlaying] = useState(false);
  const media: MediaVideo = typeof video === "string" ? VIDEOS[video] : video;
  const src = (locale === "en" && media.en) || media.src;
  const embed = embedUrl(src);
  const poster = media.poster ?? autoPoster(src);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-[var(--radius)] bg-ink text-on-dark ring-1 ring-on-dark/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] ${className}`}
    >
      {playing && embed ? (
        embed.kind === "iframe" ? (
          <iframe
            src={embed.url}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <video src={embed.url} controls autoPlay playsInline className="absolute inset-0 h-full w-full bg-black" />
        )
      ) : (
        <button
          type="button"
          onClick={() => embed && setPlaying(true)}
          className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4"
          aria-label={embed ? `${dict.common.playVideo}: ${title}` : title}
          style={
            poster
              ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" }
              : undefined
          }
        >
          {/* Keeps the play button and title readable on any still frame. */}
          {poster && <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/10" />}
          {!poster && (
            <svg className="absolute inset-x-0 bottom-[22%] w-full opacity-30" viewBox="0 0 960 90" fill="none" aria-hidden="true">
              <path
                d="M0 62h52l12-22 12 34 12-44 12 32h52l12-12 12 18 12-24 12 18h68l12-36 12 52 12-42 12 26h76l12-14 12 22 12-28 12 20h72l12-28 12 38 12-44 12 34h76l12-10 12 14 12-20 12 16h68l12-30 12 44 12-38 12 24h160"
                stroke="var(--lime)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-lime text-on-lime shadow-xl transition group-hover:scale-105">
            <svg width="24" height="28" viewBox="0 0 22 26" aria-hidden="true">
              <path d="M2 1 L21 13 L2 25 Z" fill="currentColor" />
            </svg>
          </span>
          <span className="relative px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] opacity-80">
            {embed ? title : dict.common.videoSoon}
            {media.duration ? ` · ${media.duration}` : ""}
          </span>
        </button>
      )}
    </div>
  );
}
