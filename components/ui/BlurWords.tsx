import { Fragment } from "react";

/**
 * Headline that settles in word by word, each word coming out of a soft blur
 * (Magic UI "blur fade", CSS-only). Server-rendered: the full text is in the
 * HTML, the animation is decoration, and reduced motion / no JS show it
 * straight away (see app/globals.css). Hyphenated words never split.
 */
export function BlurWords({ text, delay = 0, step = 70 }: { text: string; delay?: number; step?: number }) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="blur-word whitespace-nowrap" style={{ animationDelay: `${delay + i * step}ms` }}>
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
