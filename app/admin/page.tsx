import { adminConfigured, isAdmin } from "@/lib/cms/auth";
import { readCmsFresh, storageMode } from "@/lib/cms/store";
import { EMPTY_CMS } from "@/lib/cms/types";
import { getServiceList } from "@/content/services";
import { VIDEOS } from "@/content/media";
import { AdminApp } from "@/components/admin/AdminApp";
import { LoginForm } from "@/components/admin/LoginForm";

export const dynamic = "force-dynamic";

/** `/admin` — the clinic's control panel: service videos + testimonials. */
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
  const services = getServiceList("ro").map((s) => ({ slug: s.slug, name: s.card.name, short: s.card.short, defaultVideo: VIDEOS[s.video].src }));
  return <AdminApp initial={data} services={services} storage={storageMode()} loadError={loadError} />;
}
