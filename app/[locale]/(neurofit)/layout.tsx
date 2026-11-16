import { NeuroFitFooter, NeuroFitHeader } from "@/components/neurofit/NeuroFitChrome";
import { getNeuroFit } from "@/content/neurofit";
import type { Locale } from "@/lib/i18n";

/**
 * NeuroFit — the clinic's private "gym for the brain", in its own black +
 * gold world (`.theme-neurofit`, app/globals.css): its own header and footer,
 * no clinic menu, no chat bubble. `.nf-page` keeps the whole window dark.
 */
export default async function NeuroFitLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const c = getNeuroFit(locale);
  return (
    <div className="theme-neurofit nf-page flex min-h-screen flex-1 flex-col">
      <NeuroFitHeader nav={c.nav} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <NeuroFitFooter footer={c.footer} locale={locale} />
    </div>
  );
}
