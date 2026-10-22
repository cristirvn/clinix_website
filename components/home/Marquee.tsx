/** Slow strip of words between bands (decorative; the words also appear elsewhere on the page). */
export function Marquee({ words }: { words: string[] }) {
  const row = (
    <span className="flex shrink-0 items-center">
      {words.map((w) => (
        <span key={w} className="flex items-center">
          <span className="px-6 sm:px-10">{w}</span>
          <span className="h-2.5 w-2.5 rounded-full bg-primary sm:h-3 sm:w-3" />
        </span>
      ))}
    </span>
  );
  return (
    <div aria-hidden="true" className="overflow-hidden py-10 sm:py-14">
      <div className="animate-marquee flex w-max font-display text-4xl tracking-[-0.03em] text-ink sm:text-6xl">
        {row}
        {row}
      </div>
    </div>
  );
}
