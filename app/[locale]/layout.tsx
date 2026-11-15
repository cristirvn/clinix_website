import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Instrument_Sans } from "next/font/google";
import "../globals.css";
import { LOCALES, SITE_URLS, isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { LocaleProvider } from "@/components/layout/LocaleProvider";
import { VideoOverridesProvider } from "@/components/layout/VideoOverrides";
import { getCms } from "@/lib/cms";
import { Analytics } from "@/components/layout/Analytics";
import { SiteLoader } from "@/components/layout/SiteLoader";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteGraph } from "@/components/seo/schema";
import { PALETTE_BOOT_SCRIPT, PaletteSwitch } from "@/components/layout/PaletteSwitch";

// latin-ext for the Romanian diacritics (ă â î ș ț). ONE typeface for the whole
// site (client request): headlines and body text are both Instrument Sans.
const body = Instrument_Sans({ variable: "--font-body-face", subsets: ["latin", "latin-ext"], display: "swap" });

// No `dynamicParams = false` here: it breaks on-demand revalidation (the /admin
// pages would 404 after a save). Unknown locales still 404 via `notFound()` below.

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  return {
    metadataBase: new URL(en ? SITE_URLS.en : SITE_URLS.ro),
    title: { default: "Emmanuel CliniX", template: "%s — Emmanuel CliniX" },
    description: en
      ? "Applied neuroscience clinic in Bucharest. See what is really happening in your brain with BrainMap — then decide."
      : "Clinică de neuroștiință aplicată în București. Vezi ce se întâmplă, de fapt, în creierul tău cu BrainMap — apoi decizi.",
    openGraph: { type: "website", siteName: "Emmanuel CliniX", locale: en ? "en_GB" : "ro_RO" },
    verification: siteVerification(en),
  };
}

/**
 * Search Console (Google) + Bing Webmaster Tools ownership tags, from env.
 * `_EN` variants are used on the .co.uk domain when set. Omitted when unset.
 */
function siteVerification(en: boolean): Metadata["verification"] {
  const google = (en && process.env.GOOGLE_SITE_VERIFICATION_EN) || process.env.GOOGLE_SITE_VERIFICATION;
  const bing = (en && process.env.BING_SITE_VERIFICATION_EN) || process.env.BING_SITE_VERIFICATION;
  if (!google && !bing) return undefined;
  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  // Video links set in /admin, for every player on the site.
  const { media } = await getCms();

  return (
    <html
      lang={locale}
      className={body.variable}
      // The palette preview script sets data-palette before React hydrates.
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <script dangerouslySetInnerHTML={{ __html: PALETTE_BOOT_SCRIPT }} />
        <noscript>
          <style>{`.reveal,.rise-in{opacity:1!important;transform:none!important;animation:none!important}.trace-draw{animation:none!important;stroke-dashoffset:0!important}.site-loader{display:none!important}`}</style>
        </noscript>
        <JsonLd data={siteGraph(locale)} />
        <LocaleProvider locale={locale} dict={dict}>
          <VideoOverridesProvider value={media}>
            <SiteLoader />
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-surface focus:p-3">
              {dict.skipToContent}
            </a>
            {children}
            <CookieConsent />
            <PaletteSwitch />
            <Analytics />
          </VideoOverridesProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
