import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Inter, Inter_Tight, Lora, Manrope } from "next/font/google";
import "../globals.css";
import { LOCALES, SITE_URLS, isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { LocaleProvider } from "@/components/layout/LocaleProvider";
import { ThemePicker } from "@/components/layout/ThemePicker";
import { themeBootScript } from "@/components/layout/themes";
import { Analytics } from "@/components/layout/Analytics";

// All fonts carry latin-ext for the Romanian diacritics (ă â î ș ț).
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin", "latin-ext"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"], display: "swap" });
const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin", "latin-ext"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "latin-ext"], display: "swap" });
const lora = Lora({ variable: "--font-lora", subsets: ["latin", "latin-ext"], display: "swap" });

const DEFAULT_THEME = process.env.NEXT_PUBLIC_DEFAULT_THEME || "ivory";
const SHOW_PICKER = process.env.NEXT_PUBLIC_DESIGN_PREVIEW !== "0";

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

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

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
      data-theme={DEFAULT_THEME}
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${interTight.variable} ${manrope.variable} ${lora.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript(DEFAULT_THEME) }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <LocaleProvider locale={locale} dict={dict}>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-surface focus:p-3">
            {dict.skipToContent}
          </a>
          {children}
          {SHOW_PICKER && <ThemePicker />}
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
