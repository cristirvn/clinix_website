/**
 * schema.org structured data (JSON-LD). Helps Google and AI assistants
 * (ChatGPT, Perplexity, Claude…) understand who the clinic is and what a page says.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      // `<` escaped so text inside the data can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
