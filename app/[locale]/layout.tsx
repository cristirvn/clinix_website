import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Barlow_Condensed, Montserrat } from "next/font/google";
import "../globals.css";
import { LOCALES, SITE_URLS, isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { LocaleProvider } from "@/components/layout/LocaleProvider";
import { Analytics } from "@/components/layout/Analytics";
import { SiteLoader } from "@/components/layout/SiteLoader";
import { CookieConsent } from "@/components/layout/CookieConsent";

// All fonts carry latin-ext for the Romanian diacritics (ă â î ș ț).
const body = Montserrat({ variable: "--font-body-face", subsets: ["latin", "latin-ext"], display: "swap" });
const display = Barlow_Condensed({
  variable: "--font-display-face",
  weight: ["500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const dynamicParams = false;

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

  return (
    <html
      lang={locale}
      className={`${body.variable} ${display.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.site-loader{display:none!important}`}</style>
        </noscript>
        <LocaleProvider locale={locale} dict={dict}>
          <SiteLoader />
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-surface focus:p-3">
            {dict.skipToContent}
          </a>
          {children}
          <CookieConsent />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
