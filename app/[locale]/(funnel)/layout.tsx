import { FunnelHeader } from "@/components/layout/FunnelChrome";

/**
 * Landing pages + quizzes: minimal header (logo, phone, language), no menu,
 * so paid traffic has one way forward. Each page renders its own <FunnelFooter>
 * because the legal line differs per LP.
 */
export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FunnelHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
    </>
  );
}
