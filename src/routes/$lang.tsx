import { createFileRoute, notFound, Outlet, useParams } from "@tanstack/react-router";
import { I18nProvider } from "@/i18n/I18nProvider";
import { isLang, LANGS, resolveLang } from "@/i18n";

const BASE = "https://herbolariospa-la-tejita.lovable.app";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  head: ({ params }) => {
    const lang = resolveLang(params.lang);
    return {
      meta: [{ name: "x-active-lang", content: lang }],
      links: [
        ...LANGS.map((l) => ({
          rel: "alternate",
          hrefLang: l,
          href: `${BASE}/${l}`,
        })),
        { rel: "alternate", hrefLang: "x-default", href: `${BASE}/` },
      ],
    };
  },
  component: LangLayout,
});

function LangLayout() {
  const params = useParams({ from: "/$lang" });
  const lang = resolveLang(params.lang);
  return (
    <I18nProvider lang={lang}>
      <Outlet />
    </I18nProvider>
  );
}
