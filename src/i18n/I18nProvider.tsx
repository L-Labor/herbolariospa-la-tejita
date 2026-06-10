import { createContext, useContext, type ReactNode } from "react";
import { DICTS, type Dict } from "./dictionaries";
import { DEFAULT_LANG, type Lang } from "./types";

type I18nContextValue = {
  lang: Lang;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <I18nContext.Provider value={{ lang, t: DICTS[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return { lang: DEFAULT_LANG, t: DICTS[DEFAULT_LANG] };
  }
  return ctx;
}
