import { Container, Eyebrow } from "@/components/ui/primitives";
import type { LegalDoc } from "@/content/pages/legal";

/** Long-form legal text: narrow measure, generous line height, clear section headings. */
export function LegalArticle({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section data-tone="alt" className="bg-bg-alt pb-14 pt-16 text-ink sm:pb-20 sm:pt-24">
        <Container narrow>
          <Eyebrow>{doc.eyebrow}</Eyebrow>
          <h1 className="text-[2.1rem] [overflow-wrap:anywhere] min-[400px]:text-[2.4rem] sm:text-6xl">{doc.title}</h1>
        </Container>
      </section>
      <section data-tone="default" className="bg-bg py-16 text-ink sm:py-24">
        <Container narrow>
          <article className="space-y-12 [overflow-wrap:anywhere]">
            {doc.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl sm:text-3xl">{s.heading}</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-soft">
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}
