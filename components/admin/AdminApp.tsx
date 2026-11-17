"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import {
  deleteTestimonial,
  logout,
  moveTestimonial,
  saveTestimonial,
  saveVideo,
  setTestimonialVisible,
  type ActionResult,
  type TestimonialInput,
} from "@/app/admin/actions";
import { LogoMark } from "@/components/layout/Logo";
import type { CmsData, CmsTestimonial, TestimonialPage } from "@/lib/cms/types";
import { VIDEOS, type VideoKey } from "@/content/media";
import { VIDEO_GROUPS, VIDEO_SLOTS } from "@/lib/cms/slots";
import { autoPoster, vimeoId, youtubeId } from "@/lib/video";
import { btn, card, field, hint, label } from "./ui";

/** A page with its own video + testimonials: a service page or a psychotherapist's page. */
export interface AdminService {
  slug: TestimonialPage;
  name: string;
  short: string;
  /** Its main video's key in `content/media.ts`. */
  video: VideoKey;
  /** Internal path of the page on the site. */
  href: string;
  /** Heading of its video card. */
  videoTitle: string;
  /** The testimonials section shows (with empty frames) even before any testimonial is added. */
  alwaysShown: boolean;
}

type View = TestimonialPage | "all" | "videos";
type Toast = { kind: "ok" | "error"; text: string } | null;

/**
 * /admin — one screen. Pick a service page at the top; below it, that page's
 * explainer video and its testimonials. "Toate videoclipurile" lists every
 * video place on the site (landing pages included). Every button saves
 * straight away and says so; nothing to "publish".
 */
export function AdminApp({
  initial,
  services,
  storage,
  loadError,
}: {
  initial: CmsData;
  services: AdminService[];
  storage: "redis" | "file" | "none";
  loadError: boolean;
}) {
  const [data, setData] = useState(initial);
  const [view, setView] = useState<View>(services[0].slug);
  const [editing, setEditing] = useState<TestimonialInput | null>(null);
  const [toast, setToast] = useState<Toast>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), toast.kind === "ok" ? 3500 : 8000);
    return () => window.clearTimeout(t);
  }, [toast]);

  /** Runs a server action; on success swaps in the saved data. Returns whether it worked. */
  const run = (action: () => Promise<ActionResult>, okText: string, after?: () => void) =>
    startTransition(async () => {
      const r = await action();
      if (r.ok) {
        setData(r.data);
        setToast({ kind: "ok", text: okText });
        after?.();
      } else {
        setToast({ kind: "error", text: r.error });
      }
    });

  const service = services.find((s) => s.slug === view) ?? null;
  const videosSet = Object.keys(data.media).length;
  const onSaveVideo = (key: VideoKey) => (url: string) =>
    run(() => saveVideo(key, url), url ? "Video salvat. Apare acum pe site." : "Video scos de pe site.");
  const nameOf = (slug: TestimonialPage) => services.find((s) => s.slug === slug)?.name ?? slug;
  const countFor = (slug: TestimonialPage) => data.testimonials.filter((t) => t.services.includes(slug)).length;

  const newTestimonial = (): TestimonialInput => ({
    kind: "video",
    name: "",
    detail: { ro: "", en: "" },
    videoUrl: "",
    quote: { ro: "", en: "" },
    services: service ? [service.slug] : [],
    visible: true,
  });

  return (
    <div className="pb-24">
      <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <LogoMark size={34} className="flex-none" />
            <div className="min-w-0">
              <p className="truncate text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">Emmanuel CliniX</p>
              <p className="truncate text-lg font-semibold leading-tight">Panou de control</p>
            </div>
          </div>
          <div className="flex flex-none items-center gap-2">
            <a href="/" target="_blank" rel="noopener" className={`${btn.small} max-sm:hidden`}>
              Vezi site-ul ↗
            </a>
            <form action={logout}>
              <button type="submit" className={btn.small}>
                Ieși
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-6 px-4 pt-6 sm:px-6 sm:pt-8">
        {storage === "none" && (
          <Notice tone="error">
            Salvarea nu este activă: serverul nu are o bază de date conectată. Poți vedea panoul, dar modificările nu se pot salva.
            (Pentru cine administrează site-ul: conectează Upstash Redis din Vercel → Storage.)
          </Notice>
        )}
        {storage === "file" && <Notice>Mod local (dezvoltare): modificările se salvează în fișierul .data/cms.json.</Notice>}
        {loadError && <Notice tone="error">Nu am putut încărca datele salvate. Reîncarcă pagina peste un minut.</Notice>}

        <section aria-labelledby="pick">
          <h1 id="pick" className="text-[1.6rem] sm:text-[2rem]">
            Ce pagină vrei să modifici?
          </h1>
          <p className="mt-1 text-ink-soft">Fiecare serviciu și fiecare psihoterapeut are video-ul lui și testimonialele lui. Landing page-urile sunt la „Toate videoclipurile”.</p>
          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Pagini">
            {services.map((s) => (
              <Chip key={s.slug} active={view === s.slug} onClick={() => setView(s.slug)} count={countFor(s.slug)}>
                {s.name}
              </Chip>
            ))}
            <Chip active={view === "videos"} onClick={() => setView("videos")} count={`${videosSet}/${Object.keys(VIDEOS).length}`}>
              Toate videoclipurile
            </Chip>
            <Chip active={view === "all"} onClick={() => setView("all")} count={data.testimonials.length}>
              Toate testimonialele
            </Chip>
          </div>
        </section>

        {service ? (
          <>
            <div className="flex flex-wrap items-end justify-between gap-3 border-t border-line pt-6">
              <div>
                <h2 className="text-[1.9rem] sm:text-[2.3rem]">{service.name}</h2>
                <p className="text-ink-soft">{service.short}</p>
              </div>
              <a href={service.href} target="_blank" rel="noopener" className={btn.small}>
                Vezi pagina pe site ↗
              </a>
            </div>

            <VideoCard
              key={service.slug}
              videoKey={service.video}
              title={service.videoTitle}
              current={data.media[service.video] ?? ""}
              pending={pending}
              onSave={onSaveVideo(service.video)}
            />

            <section className={card} aria-labelledby="t-title">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 id="t-title" className="text-[1.45rem]">
                    Testimoniale pe această pagină
                  </h3>
                  <p className={hint}>Apar sub video, în ordinea de aici. Folosește săgețile ca să schimbi ordinea.</p>
                </div>
                <button type="button" className={btn.primary} onClick={() => setEditing(newTestimonial())} disabled={pending}>
                  <span aria-hidden="true" className="text-xl leading-none">
                    +
                  </span>
                  Adaugă testimonial
                </button>
              </div>
              <TestimonialList
                items={data.testimonials.filter((t) => t.services.includes(service.slug))}
                nameOf={nameOf}
                pending={pending}
                empty={
                  service.alwaysShown
                    ? "Încă nu sunt testimoniale pe această pagină. Până adaugi unul, pe site apar casete goale „Testimonial în curând”."
                    : "Încă nu sunt testimoniale pe această pagină. Secțiunea nu apare pe site până nu adaugi unul."
                }
                onEdit={(t) => setEditing(structuredClone(t))}
                onMove={(t, dir) => run(() => moveTestimonial(t.id, dir, service.slug), "Ordine salvată.")}
                onVisible={(t, v) => run(() => setTestimonialVisible(t.id, v), v ? "Testimonialul apare pe site." : "Testimonialul e ascuns.")}
                onDelete={(t) => run(() => deleteTestimonial(t.id), "Testimonial șters.")}
              />
            </section>
          </>
        ) : view === "videos" ? (
          <>
            <div className="border-t border-line pt-6">
              <h2 className="text-[1.9rem] sm:text-[2.3rem]">Toate videoclipurile</h2>
              <p className="text-ink-soft">
                Fiecare loc de pe site unde apare un video, grupat pe pagini. Lipește linkul și salvează: apare pe toate paginile scrise sub titlu.
              </p>
              <nav aria-label="Grupuri" className="mt-4 flex flex-wrap gap-2">
                {VIDEO_GROUPS.map((g, i) => (
                  <a key={g.title} href={`#grup-${i}`} className={btn.small}>
                    {g.title}
                  </a>
                ))}
              </nav>
            </div>
            {VIDEO_GROUPS.map((g, i) => (
              <section key={g.title} id={`grup-${i}`} aria-labelledby={`grup-${i}-t`} className="scroll-mt-24 space-y-4">
                <h3 id={`grup-${i}-t`} className="pt-4 text-[1.5rem] sm:text-[1.7rem]">
                  {g.title}
                </h3>
                {g.keys.map((k) => (
                  <VideoCard
                    key={k}
                    videoKey={k}
                    title={VIDEO_SLOTS[k].label}
                    current={data.media[k] ?? ""}
                    pending={pending}
                    onSave={onSaveVideo(k)}
                  />
                ))}
              </section>
            ))}
          </>
        ) : (
          <section className={card} aria-labelledby="all-title">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 id="all-title" className="text-[1.6rem]">
                  Toate testimonialele
                </h2>
                <p className={hint}>Toate apar și pe pagina Testimoniale a site-ului.</p>
              </div>
              <button type="button" className={btn.primary} onClick={() => setEditing(newTestimonial())} disabled={pending}>
                <span aria-hidden="true" className="text-xl leading-none">
                  +
                </span>
                Adaugă testimonial
              </button>
            </div>
            <TestimonialList
              items={data.testimonials}
              nameOf={nameOf}
              pending={pending}
              empty="Încă nu ai adăugat niciun testimonial."
              onEdit={(t) => setEditing(structuredClone(t))}
              onMove={(t, dir) => run(() => moveTestimonial(t.id, dir), "Ordine salvată.")}
              onVisible={(t, v) => run(() => setTestimonialVisible(t.id, v), v ? "Testimonialul apare pe site." : "Testimonialul e ascuns.")}
              onDelete={(t) => run(() => deleteTestimonial(t.id), "Testimonial șters.")}
            />
          </section>
        )}
      </main>

      {editing && (
        <Editor
          value={editing}
          services={services}
          pending={pending}
          onCancel={() => setEditing(null)}
          onSave={(t) =>
            run(() => saveTestimonial(t), t.id ? "Modificările sunt salvate." : "Testimonial adăugat. Apare acum pe site.", () => setEditing(null))
          }
        />
      )}

      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4">
        {toast && (
          <p
            role={toast.kind === "error" ? "alert" : "status"}
            className={`pointer-events-auto max-w-lg rounded-[16px] px-5 py-3.5 text-[1rem] font-semibold shadow-[var(--shadow-soft)] ${
              toast.kind === "ok" ? "bg-dark text-on-dark" : "bg-danger text-on-dark"
            }`}
          >
            {toast.kind === "ok" ? "✓ " : ""}
            {toast.text}
          </p>
        )}
      </div>
    </div>
  );
}

function Notice({ children, tone = "info" }: { children: React.ReactNode; tone?: "info" | "error" }) {
  return (
    <p className={`rounded-[16px] px-4 py-3.5 ${tone === "error" ? "bg-danger/10 font-semibold text-danger" : "bg-surface text-ink-soft ring-1 ring-line"}`}>
      {children}
    </p>
  );
}

function Chip({ active, onClick, count, children }: { active: boolean; onClick: () => void; count: number | string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-[1rem] font-semibold transition ${
        active ? "bg-primary text-on-primary" : "bg-surface text-ink ring-1 ring-line hover:ring-ink/40"
      }`}
    >
      {children}
      <span className={`rounded-full px-2 py-0.5 text-[0.8rem] ${active ? "bg-on-primary/20" : "bg-bg-alt text-ink-soft"}`}>{count}</span>
    </button>
  );
}

// ── Explainer video ───────────────────────────────────────────────────────────

/** One video place on the site: its link, where it shows, and what plays there now. */
function VideoCard({
  videoKey,
  title,
  current,
  pending,
  onSave,
}: {
  videoKey: VideoKey;
  title: string;
  current: string;
  pending: boolean;
  onSave: (url: string) => void;
}) {
  const [url, setUrl] = useState(current);
  const changed = url.trim() !== current;
  const fallback = VIDEOS[videoKey].src;
  const shown = current || fallback;
  const slot = VIDEO_SLOTS[videoKey];
  const id = `v-${videoKey}`;

  return (
    <section className={card} aria-labelledby={`${id}-title`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 id={`${id}-title`} className="text-[1.3rem] sm:text-[1.45rem]">
            {title}
          </h3>
          <p className={hint}>Apare pe: {slot.where}</p>
        </div>
        <a href={slot.href} target="_blank" rel="noopener" className={`${btn.small} flex-none`}>
          Vezi pe site ↗
        </a>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-[1fr_16rem]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(url.trim());
          }}
        >
          <label htmlFor={`${id}-url`} className={label}>
            Link video
          </label>
          <input
            id={`${id}-url`}
            type="url"
            inputMode="url"
            placeholder="https://www.youtube.com/watch?v=…"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={field}
          />
          <p className={hint}>Pune video-ul pe YouTube (poate fi „Nelistat”) sau Vimeo și lipește aici linkul.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="submit" className={btn.primary} disabled={pending || !changed}>
              {pending ? "Se salvează…" : "Salvează video"}
            </button>
            {current && (
              <button
                type="button"
                className={btn.outline}
                disabled={pending}
                onClick={() => {
                  setUrl("");
                  onSave("");
                }}
              >
                Scoate video-ul
              </button>
            )}
          </div>
        </form>
        <div>
          <p className={label}>Acum pe site</p>
          <VideoThumb url={shown} />
          <p className={hint}>
            {current ? "Video pus din panou." : fallback ? "Video-ul inițial al site-ului." : "Încă nu e video: pagina arată un cadru gol."}
          </p>
        </div>
      </div>
    </section>
  );
}

function VideoThumb({ url, small = false }: { url: string; small?: boolean }) {
  const poster = url ? autoPoster(url) : undefined;
  const base = `relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[12px] bg-dark text-on-dark ${small ? "" : "ring-1 ring-line"}`;
  if (!url) return <div className={`${base} text-sm text-on-dark-soft`}>{small ? "—" : "Fără video"}</div>;
  if (poster)
    return (
      <div className={base}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <PlayDot />
      </div>
    );
  if (vimeoId(url) || youtubeId(url))
    return (
      <div className={`${base} flex-col gap-1`}>
        <PlayDot />
        {!small && <span className="text-sm text-on-dark-soft">Vimeo</span>}
      </div>
    );
  return (
    <div className={base}>
      <video src={url} preload="metadata" muted playsInline className="absolute inset-0 h-full w-full object-cover" />
      <PlayDot />
    </div>
  );
}

function PlayDot() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg">
      <svg width="12" height="14" viewBox="0 0 22 26" aria-hidden="true">
        <path d="M2 1 L21 13 L2 25 Z" fill="currentColor" />
      </svg>
    </span>
  );
}

// ── Testimonial list ──────────────────────────────────────────────────────────

function TestimonialList({
  items,
  nameOf,
  pending,
  empty,
  onEdit,
  onMove,
  onVisible,
  onDelete,
}: {
  items: CmsTestimonial[];
  nameOf: (s: TestimonialPage) => string;
  pending: boolean;
  empty: string;
  onEdit: (t: CmsTestimonial) => void;
  onMove: (t: CmsTestimonial, dir: "up" | "down") => void;
  onVisible: (t: CmsTestimonial, visible: boolean) => void;
  onDelete: (t: CmsTestimonial) => void;
}) {
  const [confirming, setConfirming] = useState<string | null>(null);
  if (items.length === 0) return <p className="mt-6 rounded-[14px] bg-bg-alt p-5 text-ink-soft">{empty}</p>;

  return (
    <ol className="mt-6 space-y-3">
      {items.map((t, i) => (
        <li key={t.id} className={`rounded-[16px] border border-line p-3 sm:p-4 ${t.visible ? "bg-surface" : "bg-bg-alt"}`}>
          <div className="flex gap-3 sm:gap-4">
            <div className="w-24 flex-none sm:w-32">
              {t.kind === "video" ? (
                <VideoThumb url={t.videoUrl} small />
              ) : (
                <div className="flex aspect-video items-center justify-center rounded-[12px] bg-bg-alt text-[2.2rem] font-semibold leading-none text-accent ring-1 ring-line">
                  „
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[1.1rem] font-semibold">{t.name}</span>
                <span className="rounded-full bg-bg-alt px-2.5 py-0.5 text-[0.78rem] font-semibold text-ink-soft">
                  {t.kind === "video" ? "Video" : "Text"}
                </span>
                {!t.visible && (
                  <span className="rounded-full bg-danger/10 px-2.5 py-0.5 text-[0.78rem] font-semibold text-danger">Ascuns</span>
                )}
              </p>
              {t.detail.ro && <p className="text-[0.95rem] text-ink-soft">{t.detail.ro}</p>}
              {t.kind === "text" && <p className="mt-1 line-clamp-2 text-[0.95rem]">„{t.quote.ro}”</p>}
              <p className="mt-1 text-[0.85rem] text-ink-soft">Apare pe: {t.services.map(nameOf).join(", ")}</p>
            </div>
          </div>

          {confirming === t.id ? (
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-[12px] bg-danger/10 p-3">
              <span className="mr-1 font-semibold text-danger">Ștergi definitiv testimonialul lui {t.name}?</span>
              <button
                type="button"
                className={btn.danger}
                disabled={pending}
                onClick={() => {
                  setConfirming(null);
                  onDelete(t);
                }}
              >
                Da, șterge
              </button>
              <button type="button" className={btn.small} onClick={() => setConfirming(null)}>
                Nu
              </button>
            </div>
          ) : (
            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" className={btn.small} disabled={pending || i === 0} onClick={() => onMove(t, "up")} aria-label={`Mută mai sus: ${t.name}`}>
                ↑ Sus
              </button>
              <button
                type="button"
                className={btn.small}
                disabled={pending || i === items.length - 1}
                onClick={() => onMove(t, "down")}
                aria-label={`Mută mai jos: ${t.name}`}
              >
                ↓ Jos
              </button>
              <button type="button" className={btn.small} disabled={pending} onClick={() => onEdit(t)}>
                Editează
              </button>
              <button type="button" className={btn.small} disabled={pending} onClick={() => onVisible(t, !t.visible)}>
                {t.visible ? "Ascunde" : "Arată pe site"}
              </button>
              <button type="button" className={btn.danger} disabled={pending} onClick={() => setConfirming(t.id)}>
                Șterge
              </button>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

// ── Add / edit ────────────────────────────────────────────────────────────────

function Editor({
  value,
  services,
  pending,
  onCancel,
  onSave,
}: {
  value: TestimonialInput;
  services: AdminService[];
  pending: boolean;
  onCancel: () => void;
  onSave: (t: TestimonialInput) => void;
}) {
  const [t, setT] = useState(value);
  const dialog = useRef<HTMLDivElement>(null);
  const cancelRef = useRef(onCancel);
  useEffect(() => {
    cancelRef.current = onCancel;
  });
  const set = <K extends keyof TestimonialInput>(k: K, v: TestimonialInput[K]) => setT((prev) => ({ ...prev, [k]: v }));

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && cancelRef.current();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggleService = (slug: TestimonialPage) =>
    set("services", t.services.includes(slug) ? t.services.filter((s) => s !== slug) : [...t.services, slug]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/50 px-3 py-6 sm:py-12" onMouseDown={(e) => e.target === e.currentTarget && onCancel()}>
      <div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="ed-title" className={`${card} mx-auto w-full max-w-2xl`}>
        <h2 id="ed-title" className="text-[1.6rem]">
          {t.id ? "Editează testimonialul" : "Testimonial nou"}
        </h2>

        <form
          className="mt-6 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            onSave(t);
          }}
        >
          <fieldset>
            <legend className={label}>Ce fel de testimonial?</legend>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  ["video", "Video", "Un link YouTube sau Vimeo"],
                  ["text", "Text", "Ce a spus pacientul, în scris"],
                ] as const
              ).map(([k, title, sub]) => (
                <label
                  key={k}
                  className={`flex cursor-pointer flex-col rounded-[16px] border-2 p-4 transition ${
                    t.kind === k ? "border-primary bg-primary/5" : "border-line hover:border-ink/30"
                  }`}
                >
                  <input type="radio" name="kind" value={k} checked={t.kind === k} onChange={() => set("kind", k)} className="sr-only" />
                  <span className="text-[1.1rem] font-semibold">{title}</span>
                  <span className="text-[0.88rem] text-ink-soft">{sub}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="ed-name" className={label}>
              Numele pacientului
            </label>
            <input
              id="ed-name"
              name="name"
              required
              maxLength={120}
              value={t.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Ex.: Mihaela R."
              className={field}
            />
          </div>

          <div>
            <label htmlFor="ed-detail" className={label}>
              Un rând sub nume <span className="font-normal text-ink-soft">(opțional)</span>
            </label>
            <input
              id="ed-detail"
              maxLength={160}
              value={t.detail.ro}
              onChange={(e) => set("detail", { ...t.detail, ro: e.target.value })}
              placeholder="Ex.: De la 3 la 6 ore de somn"
              className={field}
            />
          </div>

          {t.kind === "video" ? (
            <div>
              <label htmlFor="ed-video" className={label}>
                Link video
              </label>
              <input
                id="ed-video"
                type="url"
                inputMode="url"
                required
                value={t.videoUrl}
                onChange={(e) => set("videoUrl", e.target.value)}
                placeholder="https://www.youtube.com/watch?v=…"
                className={field}
              />
              <p className={hint}>Pune video-ul pe YouTube (poate fi „Nelistat”) și lipește aici linkul.</p>
              {t.videoUrl && (
                <div className="mt-3 max-w-xs">
                  <VideoThumb url={t.videoUrl} />
                </div>
              )}
            </div>
          ) : (
            <div>
              <label htmlFor="ed-quote" className={label}>
                Ce a spus pacientul
              </label>
              <textarea
                id="ed-quote"
                required
                rows={5}
                maxLength={2000}
                value={t.quote.ro}
                onChange={(e) => set("quote", { ...t.quote, ro: e.target.value })}
                placeholder="Scrie cuvintele lui, fără ghilimele."
                className={field}
              />
            </div>
          )}

          <fieldset>
            <legend className={label}>Pe ce pagini apare?</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <label
                  key={s.slug}
                  className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-[14px] border px-4 py-2.5 transition ${
                    t.services.includes(s.slug) ? "border-primary bg-primary/5" : "border-line hover:border-ink/30"
                  }`}
                >
                  <input type="checkbox" checked={t.services.includes(s.slug)} onChange={() => toggleService(s.slug)} className="h-5 w-5 accent-[var(--primary)]" />
                  <span className="font-semibold">{s.name}</span>
                </label>
              ))}
            </div>
            <p className={hint}>Apare oricum și pe pagina „Testimoniale”.</p>
          </fieldset>

          <details className="rounded-[14px] bg-bg-alt p-4">
            <summary className="cursor-pointer font-semibold">Traducere pentru site-ul în engleză (opțional)</summary>
            <p className={hint}>Dacă lași gol, pe site-ul în engleză apare textul în română.</p>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="ed-detail-en" className={label}>
                  Rândul de sub nume, în engleză
                </label>
                <input
                  id="ed-detail-en"
                  maxLength={160}
                  value={t.detail.en}
                  onChange={(e) => set("detail", { ...t.detail, en: e.target.value })}
                  className={field}
                />
              </div>
              {t.kind === "text" && (
                <div>
                  <label htmlFor="ed-quote-en" className={label}>
                    Textul, în engleză
                  </label>
                  <textarea
                    id="ed-quote-en"
                    rows={4}
                    maxLength={2000}
                    value={t.quote.en}
                    onChange={(e) => set("quote", { ...t.quote, en: e.target.value })}
                    className={field}
                  />
                </div>
              )}
            </div>
          </details>

          <label className="flex min-h-12 cursor-pointer items-center gap-3">
            <input type="checkbox" checked={t.visible} onChange={(e) => set("visible", e.target.checked)} className="h-5 w-5 accent-[var(--primary)]" />
            <span className="font-semibold">Arată pe site</span>
          </label>

          <div className="flex flex-wrap gap-2 border-t border-line pt-5">
            <button type="submit" className={btn.primary} disabled={pending}>
              {pending ? "Se salvează…" : t.id ? "Salvează modificările" : "Adaugă testimonialul"}
            </button>
            <button type="button" className={btn.outline} onClick={onCancel} disabled={pending}>
              Renunță
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
