import { LANGS, type Lang } from "@/i18n";

const BASE = "https://herbolariospa-la-tejita.lovable.app";

/**
 * Build hreflang alternates + canonical for a localized page.
 * `path` should NOT include the leading slash or the lang segment.
 * Examples: "" (home), "tienda", "blog".
 */
export function localeLinks(lang: Lang, path: string) {
  const sub = path ? `/${path}` : "";
  const canonicalHref = `${BASE}/${lang}${sub}`;
  return {
    canonical: { rel: "canonical", href: canonicalHref },
    alternates: [
      ...LANGS.map((l) => ({
        rel: "alternate",
        hrefLang: l,
        href: `${BASE}/${l}${sub}`,
      })),
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/` },
    ],
    ogUrl: canonicalHref,
  };
}

export function pageLinks(lang: Lang, path: string) {
  const { canonical, alternates } = localeLinks(lang, path);
  return [canonical, ...alternates];
}
