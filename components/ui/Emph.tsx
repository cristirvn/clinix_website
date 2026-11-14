/**
 * Content strings may still mark a word as `*emphasised*` (older copy). The
 * client asked for ONE font and no italics, so the markers are simply removed
 * and the text renders plain.
 */
export function Emph({ text }: { text: string }) {
  return <>{text.replace(/\*([^*]+)\*/g, "$1")}</>;
}
