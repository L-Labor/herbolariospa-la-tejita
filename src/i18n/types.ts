export const LANGS = ["es", "en", "de", "it"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "es";

export function isLang(v: unknown): v is Lang {
  return typeof v === "string" && (LANGS as readonly string[]).includes(v);
}

export const LANG_LABEL: Record<Lang, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
  it: "Italiano",
};

export const LANG_SHORT: Record<Lang, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
  it: "IT",
};
