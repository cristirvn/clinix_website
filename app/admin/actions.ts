"use server";

import { randomUUID } from "node:crypto";
import { redirect } from "next/navigation";
import { revalidatePath, updateTag } from "next/cache";
import { endSession, isAdmin, passwordMatches, startSession } from "@/lib/cms/auth";
import { CMS_TAG, readCmsFresh, writeCms } from "@/lib/cms/store";
import { isAcceptedVideoUrl, isTestimonialPage, isVideoKey, normalizeCms, type CmsData, type CmsTestimonial } from "@/lib/cms/types";

/**
 * Every /admin change goes through here. Each action checks the session,
 * applies the change to the latest stored version, saves, and expires the
 * cached pages so the site shows the change on the next visit.
 */

export type ActionResult = { ok: true; data: CmsData } | { ok: false; error: string };

const ERR = {
  auth: "Sesiunea a expirat. Intră din nou în cont.",
  storage: "Salvarea nu este configurată pe server (lipsește baza de date). Anunță persoana care se ocupă de site.",
  generic: "Nu am putut salva. Încearcă din nou peste un minut.",
  video: "Linkul video nu e valid. Folosește un link YouTube, Vimeo sau un fișier .mp4 (care începe cu https://).",
  name: "Scrie numele.",
  quote: "Scrie textul testimonialului.",
  videoMissing: "Lipește linkul video.",
  services: "Bifează cel puțin o pagină pe care să apară.",
  notFound: "Testimonialul nu mai există (poate a fost șters între timp). Reîncarcă pagina.",
};

async function mutate(change: (data: CmsData) => CmsData | string): Promise<ActionResult> {
  if (!(await isAdmin())) return { ok: false, error: ERR.auth };
  try {
    const current = await readCmsFresh();
    const next = change(structuredClone(current));
    if (typeof next === "string") return { ok: false, error: next };
    const saved = normalizeCms({ ...next, updatedAt: new Date().toISOString() });
    await writeCms(saved);
    updateTag(CMS_TAG);
    // Every page: the site layout hands the video links to every player.
    revalidatePath("/[locale]", "layout");
    return { ok: true, data: saved };
  } catch (err) {
    console.error("[admin]", err);
    return { ok: false, error: err instanceof Error && err.message === "STORAGE_NOT_CONFIGURED" ? ERR.storage : ERR.generic };
  }
}

// ── Login ─────────────────────────────────────────────────────────────────────

export async function login(_prev: string | null, form: FormData): Promise<string | null> {
  const password = String(form.get("password") ?? "");
  if (!passwordMatches(password)) {
    // Slows down guessing.
    await new Promise((r) => setTimeout(r, 900));
    return "Parola nu este corectă.";
  }
  await startSession();
  redirect("/admin");
}

export async function logout() {
  await endSession();
  redirect("/admin");
}

// ── Videos (any key in content/media.ts) ────────────────────────────────────

/** Sets the link for one video place on the site; an empty link goes back to the default. */
export async function saveVideo(key: string, url: string): Promise<ActionResult> {
  const clean = url.trim();
  if (!isVideoKey(key)) return { ok: false, error: ERR.generic };
  if (!isAcceptedVideoUrl(clean)) return { ok: false, error: ERR.video };
  return mutate((d) => {
    if (clean) d.media[key] = clean;
    else delete d.media[key];
    return d;
  });
}

// ── Testimonials ────────────────────────────────────────────────────────────

export type TestimonialInput = Omit<CmsTestimonial, "id"> & { id?: string };

export async function saveTestimonial(input: TestimonialInput): Promise<ActionResult> {
  const t: TestimonialInput = {
    ...input,
    name: input.name.trim(),
    videoUrl: input.videoUrl.trim(),
    detail: { ro: input.detail.ro.trim(), en: input.detail.en.trim() },
    quote: { ro: input.quote.ro.trim(), en: input.quote.en.trim() },
    services: input.services.filter(isTestimonialPage),
  };
  if (!t.name) return { ok: false, error: ERR.name };
  if (t.kind === "video" && !t.videoUrl) return { ok: false, error: ERR.videoMissing };
  if (t.kind === "video" && !isAcceptedVideoUrl(t.videoUrl)) return { ok: false, error: ERR.video };
  if (t.kind === "text" && !t.quote.ro) return { ok: false, error: ERR.quote };
  if (t.services.length === 0) return { ok: false, error: ERR.services };

  return mutate((d) => {
    if (t.id) {
      const i = d.testimonials.findIndex((x) => x.id === t.id);
      if (i === -1) return ERR.notFound;
      d.testimonials[i] = { ...t, id: t.id };
    } else {
      // New ones go to the top: the newest story is the first one people see.
      d.testimonials.unshift({ ...t, id: randomUUID().slice(0, 8) });
    }
    return d;
  });
}

export async function deleteTestimonial(id: string): Promise<ActionResult> {
  return mutate((d) => {
    const before = d.testimonials.length;
    d.testimonials = d.testimonials.filter((x) => x.id !== id);
    return d.testimonials.length === before ? ERR.notFound : d;
  });
}

export async function setTestimonialVisible(id: string, visible: boolean): Promise<ActionResult> {
  return mutate((d) => {
    const t = d.testimonials.find((x) => x.id === id);
    if (!t) return ERR.notFound;
    t.visible = visible;
    return d;
  });
}

/**
 * Move one place up/down. With `slug`, "one place" means past the neighbouring
 * testimonial on THAT service / psychotherapist page (others in between are skipped).
 */
export async function moveTestimonial(id: string, direction: "up" | "down", slug?: string): Promise<ActionResult> {
  return mutate((d) => {
    const list = d.testimonials;
    const i = list.findIndex((x) => x.id === id);
    if (i === -1) return ERR.notFound;
    const step = direction === "up" ? -1 : 1;
    let j = i + step;
    while (j >= 0 && j < list.length && slug && isTestimonialPage(slug) && !list[j].services.includes(slug)) j += step;
    if (j < 0 || j >= list.length) return d;
    [list[i], list[j]] = [list[j], list[i]];
    return d;
  });
}
