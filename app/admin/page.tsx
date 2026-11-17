import { adminConfigured, isAdmin } from "@/lib/cms/auth";
import { readCmsFresh, storageMode } from "@/lib/cms/store";
import { EMPTY_CMS } from "@/lib/cms/types";
import { getServiceList } from "@/content/services";
import { getTherapistList } from "@/content/therapists";
import { AdminApp, type AdminService } from "@/components/admin/AdminApp";
import { LoginForm } from "@/components/admin/LoginForm";

export const dynamic = "force-dynamic";

/** `/admin` — the clinic's control panel: every video on the site + testimonials. */
export default async function AdminPage() {
  if (!adminConfigured()) {
    return (
      <LoginForm disabledReason="Panoul nu este activat încă: lipsește parola (ADMIN_PASSWORD) în setările serverului." />
    );
  }
  if (!(await isAdmin())) return <LoginForm />;

  let data = EMPTY_CMS;
  let loadError = false;
  try {
    data = await readCmsFresh();
  } catch (err) {
    console.error("[admin]", err);
    loadError = true;
  }
  // Service pages, then each psychotherapist's own page (same controls: its video + its testimonials).
  const services: AdminService[] = [
    ...getServiceList("ro").map((s) => ({
      slug: s.slug,
      name: s.card.name,
      short: s.card.short,
      video: s.video,
      href: `/servicii/${s.slug}`,
      videoTitle: "Video explicativ",
      alwaysShown: s.slug === "psihoterapie",
    })),
    ...getTherapistList("ro").map((t) => ({
      slug: t.slug,
      name: t.name,
      short: `${t.role} · pagina ei`,
      video: t.video,
      href: `/psihoterapeut/${t.slug}`,
      videoTitle: "Video principal (VSL), sus pe pagină",
      alwaysShown: true,
    })),
  ];
  return <AdminApp initial={data} services={services} storage={storageMode()} loadError={loadError} />;
}
