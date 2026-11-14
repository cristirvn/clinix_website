"use client";

import { createContext, useContext } from "react";
import type { VideoOverrides } from "@/lib/video";

const VideoOverridesContext = createContext<VideoOverrides>({});

/** Hands the video links set in /admin to every <VideoPlayer> on the page. */
export function VideoOverridesProvider({ value, children }: { value: VideoOverrides; children: React.ReactNode }) {
  return <VideoOverridesContext.Provider value={value}>{children}</VideoOverridesContext.Provider>;
}

/** The /admin video links (empty outside the provider). Pair with `resolveVideo`. */
export const useVideoOverrides = () => useContext(VideoOverridesContext);
