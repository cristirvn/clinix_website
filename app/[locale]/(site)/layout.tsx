import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ChatAssistant } from "@/components/chat/ChatAssistant";
import type { Locale } from "@/lib/i18n";

/** Main site: full menu + footer. */
export default async function SiteLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale };
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
      <WhatsAppFloat />
      <ChatAssistant />
    </>
  );
}
