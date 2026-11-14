import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "../globals.css";

const body = Instrument_Sans({ variable: "--font-body-face", subsets: ["latin", "latin-ext"], display: "swap" });

export const metadata: Metadata = {
  title: "Panou de control — Emmanuel CliniX",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

/** /admin has its own root layout: no site header, footer, chat or cookie banner. */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={body.variable}>
      <body className="min-h-screen bg-bg-alt text-ink">{children}</body>
    </html>
  );
}
