"use client";

import { useRef, useState } from "react";
import { upload, uploadPresigned } from "@vercel/blob/client";
import { MAX_VIDEO_BYTES } from "@/lib/cms/types";
import { btn, hint } from "./ui";

export type UploadMode = "token" | "presigned" | "none";

const EXT: Record<string, string> = { "video/mp4": "mp4", "video/quicktime": "mov", "video/webm": "webm", "video/x-m4v": "m4v" };

/** "Interviu Ernesto (final).MOV" → "video/interviu-ernesto-final.mov" (the store adds a random suffix). */
function pathFor(file: File): string | null {
  const fromName = /\.([a-z0-9]+)$/i.exec(file.name)?.[1]?.toLowerCase();
  const ext = fromName && ["mp4", "mov", "webm", "m4v"].includes(fromName) ? fromName : EXT[file.type];
  if (!ext) return null;
  const base =
    file.name
      .replace(/\.[^.]+$/, "")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "video";
  return `video/${base}.${ext}`;
}

/**
 * "Încarcă video de pe calculator / telefon": the file goes straight to Vercel
 * Blob (big files are sent in parts), with a progress bar. On success it hands
 * back the file's link, which the form then saves like a pasted link.
 */
export function VideoUpload({ mode, disabled, onUploaded }: { mode: UploadMode; disabled?: boolean; onUploaded: (url: string) => void }) {
  const input = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (mode === "none")
    return (
      <p className={hint}>
        Încărcarea directă a fișierelor nu e activă încă pe server. Până atunci, pune video-ul pe YouTube (poate fi „Nelistat”) și lipește linkul.
      </p>
    );

  const start = async (file: File) => {
    setError(null);
    const pathname = pathFor(file);
    if (!pathname) return setError("Fișierul trebuie să fie un video .mp4, .mov, .webm sau .m4v.");
    if (file.size > MAX_VIDEO_BYTES) return setError("Fișierul e prea mare (maxim 2 GB). Exportă-l la o calitate mai mică sau pune-l pe YouTube.");
    setProgress(0);
    try {
      const options = {
        access: "public" as const,
        handleUploadUrl: "/api/admin/upload",
        contentType: file.type || undefined,
        // Large phone videos go up in parts (retried one by one); presigned stores take a single upload.
        multipart: mode === "token" && file.size > 50 * 1024 * 1024,
        onUploadProgress: ({ percentage }: { percentage: number }) => setProgress(Math.round(percentage)),
      };
      const blob = mode === "token" ? await upload(pathname, file, options) : await uploadPresigned(pathname, file, options);
      setProgress(null);
      onUploaded(blob.url);
    } catch (err) {
      console.error("[upload]", err);
      setProgress(null);
      setError("Încărcarea nu a reușit. Verifică internetul și încearcă din nou.");
    }
  };

  const busy = progress !== null;
  return (
    <div>
      <input
        ref={input}
        type="file"
        accept="video/mp4,video/quicktime,video/webm,video/x-m4v,.mp4,.mov,.webm,.m4v"
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
        onChange={(e) => {
          const f = e.target.files?.[0];
          e.target.value = "";
          if (f) void start(f);
        }}
      />
      <button type="button" className={btn.outline} disabled={disabled || busy} onClick={() => input.current?.click()}>
        <span aria-hidden="true">⬆</span>
        {busy ? `Se încarcă… ${progress}%` : "Încarcă video de pe calculator / telefon"}
      </button>
      {busy && (
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-bg-alt" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress ?? 0} aria-label="Încărcare video">
          <div className="h-full rounded-full bg-primary transition-[width]" style={{ width: `${progress}%` }} />
        </div>
      )}
      {busy && <p className={hint}>Nu închide pagina până nu se termină.</p>}
      {error && <p className="mt-2 font-semibold text-danger">{error}</p>}
    </div>
  );
}
