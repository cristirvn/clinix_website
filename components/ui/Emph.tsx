import { Fragment } from "react";

/**
 * Renders `*words*` in a content string as <em> — in headings that is the
 * italic bronze accent (see globals.css). Everything else is plain text.
 */
export function Emph({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/);
  return (
    <>
      {parts.map((part, i) => (i % 2 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>))}
    </>
  );
}

