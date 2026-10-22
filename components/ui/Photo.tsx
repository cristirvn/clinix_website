import { IMAGES, type ImageKey } from "@/content/media";
import type { Locale } from "@/lib/i18n";

/**
 * A photo from `content/media.ts`. Unsplash stand-ins are requested at the
 * right width and cropped server-side; local files are served as they are.
 * The parent decides the box — the image always covers it.
 */
export function Photo({
  image,
  locale,
  width = 1200,
  className = "",
  priority = false,
}: {
  image: ImageKey;
  locale: Locale;
  width?: number;
  className?: string;
  priority?: boolean;
}) {
  const { src, alt } = IMAGES[image];
  const url = src.startsWith("https://images.unsplash.com/")
    ? `${src}?auto=format&fit=crop&w=${width}&q=75`
    : src;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={alt[locale]}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
