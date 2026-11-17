"use client";

import { Container, ButtonLink } from "@/components/ui/primitives";
import { useLocale } from "@/components/layout/LocaleProvider";

export default function NotFound() {
  const { locale } = useLocale();
  const en = locale === "en";
  return (
    <main className="flex flex-1 items-center py-32">
      <Container narrow className="text-center">
        <p className="mb-4 text-sm font-semibold text-accent">404</p>
        <h1 className="text-5xl">{en ? "This page doesn't exist." : "Pagina nu există."}</h1>
        <p className="mt-6 text-lg text-ink-soft">{en ? "Let's get you back on track." : "Hai să te readucem pe drumul cel bun."}</p>
        <div className="mt-10">
          <ButtonLink href="/">{en ? "Back to home" : "Înapoi acasă"}</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
