export * from "./types";
export * from "./dictionaries";
export * from "./I18nProvider";

import { DEFAULT_LANG, isLang, type Lang } from "./types";

export const LANG_COOKIE = "tejita-lang";
export const LANG_STORAGE = "tejita-lang";

export function readStoredLang(): Lang | null {
  if (typeof window === "undefined") return null;
  try {
    const ls = window.localStorage.getItem(LANG_STORAGE);
    if (isLang(ls)) return ls;
  } catch {
    /* ignore */
  }
  try {
    const m = document.cookie.match(
      new RegExp("(?:^|; )" + LANG_COOKIE + "=([^;]+)"),
    );
    if (m && isLang(m[1])) return m[1];
  } catch {
    /* ignore */
  }
  return null;
}

export function persistLang(lang: Lang) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LANG_STORAGE, lang);
  } catch {
    /* ignore */
  }
  try {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${LANG_COOKIE}=${lang}; Max-Age=${oneYear}; Path=/; SameSite=Lax`;
  } catch {
    /* ignore */
  }
}

export function resolveLang(v: unknown): Lang {
  return isLang(v) ? v : DEFAULT_LANG;
}
