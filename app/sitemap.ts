import type { MetadataRoute } from "next";
import { getArticle } from "@/content/articles";
import { indexablePaths, requestLocale } from "@/lib/public-pages";
import { SITE_URLS, localizePath } from "@/lib/i18n";

/** /sitemap.xml — the pages of the domain being asked (.ro or .co.uk), with the other language as hreflang. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locale = await requestLocale();
  return indexablePaths().map((path) => {
    const article = path.startsWith("/articole/") ? getArticle(path.split("/")[2]) : null;
    return {
      url: SITE_URLS[locale] + localizePath(path, locale),
      ...(article && { lastModified: article.updated ?? article.published }),
      alternates: {
        languages: {
          "ro-RO": SITE_URLS.ro + localizePath(path, "ro"),
          "en-GB": SITE_URLS.en + localizePath(path, "en"),
        },
      },
    };
  });
}
