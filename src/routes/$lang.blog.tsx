import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { blogPosts } from "@/lib/site-data";
import { useT } from "@/i18n/I18nProvider";
import { resolveLang } from "@/i18n";
import { pageLinks } from "@/lib/seo";

const TITLES = {
  es: "Blog y consejos — Herbolario Spa La Tejita",
  en: "Blog & tips — Herbolario Spa La Tejita",
  de: "Blog & Tipps — Herbolario Spa La Tejita",
  it: "Blog e consigli — Herbolario Spa La Tejita",
} as const;

export const Route = createFileRoute("/$lang/blog")({
  head: ({ params }) => {
    const lang = resolveLang(params.lang);
    return {
      meta: [
        { title: TITLES[lang] },
        { name: "description", content: TITLES[lang] },
      ],
      links: pageLinks(lang, "blog"),
    };
  },
  component: BlogPage,
});

function BlogPage() {
  const params = useParams({ from: "/$lang/blog" });
  const lang = resolveLang(params.lang);
  const { t } = useT();
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <>
      <section>
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-12 md:px-8 md:pb-12 md:pt-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {t.nav.blog}
          </div>
          <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
            {{
              es: "Pequeñas ideas para tu bienestar cada día.",
              en: "Small ideas for your daily wellness.",
              de: "Kleine Ideen für dein tägliches Wohlbefinden.",
              it: "Piccole idee per il tuo benessere quotidiano.",
            }[lang]}
          </h1>
          {lang !== "es" && (
            <p className="mt-4 text-xs text-muted-foreground">{t.common.translationNotice}</p>
          )}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogPosts.map((post) => {
              const open = openSlug === post.slug;
              return (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-lg bg-card p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)]"
                >
                  <span className="inline-flex w-fit items-center gap-2 rounded-md bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                    {post.tag}
                  </span>
                  <h2 className="mt-5 text-xl leading-tight md:text-2xl">{post.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

                  {open && (
                    <div className="animate-fade-in mt-5 flex flex-col gap-4 border-t border-border pt-5 text-sm leading-[1.8] text-foreground/85">
                      {post.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setOpenSlug(open ? null : post.slug)}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent hover:text-foreground"
                  >
                    {open ? "—" : "+"} {open ? "" : ""}{post.title.slice(0, 0)}
                    <span>{open ? (lang === "es" ? "Cerrar" : "Close") : (lang === "es" ? "Leer más" : "Read more")}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                      strokeWidth={1.6}
                    />
                  </button>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-lg bg-card p-7 text-center">
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                to="/$lang/tratamientos"
                params={{ lang }}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                {t.cta.seeTreatments}
              </Link>
              <Link
                to="/$lang/tienda"
                params={{ lang }}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {t.cta.seeShop}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
