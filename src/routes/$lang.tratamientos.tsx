import { createFileRoute, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Clock, Check, CalendarCheck } from "lucide-react";
import {
  FRESHA,
  SERVICE_CATEGORIES,
  type ServiceCat,
  services,
  waLink,
} from "@/lib/site-data";
import { useT } from "@/i18n/I18nProvider";
import { resolveLang } from "@/i18n";
import { pageLinks } from "@/lib/seo";

const TITLES = {
  es: "Tratamientos — Herbolario Spa La Tejita",
  en: "Treatments — Herbolario Spa La Tejita",
  de: "Behandlungen — Herbolario Spa La Tejita",
  it: "Trattamenti — Herbolario Spa La Tejita",
} as const;

export const Route = createFileRoute("/$lang/tratamientos")({
  head: ({ params }) => {
    const lang = resolveLang(params.lang);
    return {
      meta: [
        { title: TITLES[lang] },
        { name: "description", content: TITLES[lang] },
      ],
      links: pageLinks(lang, "tratamientos"),
    };
  },
  component: TratamientosPage,
});

function TratamientosPage() {
  const params = useParams({ from: "/$lang/tratamientos" });
  const lang = resolveLang(params.lang);
  const { t } = useT();
  const [cat, setCat] = useState<ServiceCat | "all">("all");
  const visible = cat === "all" ? services : services.filter((s) => s.cat === cat);

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 md:px-8 md:pb-10 md:pt-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {t.nav.treatments}
          </div>
          <h1 className="max-w-3xl text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
            {{
              es: "Rituales pensados para tu equilibrio.",
              en: "Rituals designed for your balance.",
              de: "Rituale, gemacht für dein Gleichgewicht.",
              it: "Rituali pensati per il tuo equilibrio.",
            }[lang]}
          </h1>
          {lang !== "es" && (
            <p className="mt-4 text-xs text-muted-foreground">{t.common.translationNotice}</p>
          )}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.shop.filters}
                </div>
                <nav className="flex flex-wrap gap-2 lg:flex-col">
                  {SERVICE_CATEGORIES.map((c) => {
                    const active = cat === c.value;
                    return (
                      <button
                        key={c.value}
                        type="button"
                        onClick={() => setCat(c.value)}
                        className={`rounded-md px-4 py-2.5 text-left text-sm transition-colors lg:w-full ${
                          active
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-foreground/75 hover:text-accent"
                        }`}
                      >
                        {c.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div key={cat} className="animate-fade-in grid grid-cols-1 gap-5 md:grid-cols-2">
                {visible.map(({ icon: Icon, ...s }) => (
                  <article
                    key={s.key}
                    className="flex flex-col gap-5 rounded-lg bg-card p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)] md:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-md bg-secondary text-accent">
                        <Icon className="h-5 w-5" strokeWidth={1.4} />
                      </span>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-accent">{s.price}</span>
                        <span className="text-border">·</span>
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" strokeWidth={1.6} />
                          {s.duration}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl leading-tight md:text-3xl">{s.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                        {s.description}
                      </p>
                    </div>
                    <div className="rounded-md bg-secondary/70 p-4 text-sm">
                      <div className="flex items-start gap-2 text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                        <span>{s.benefit}</span>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                      <a
                        href={FRESHA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                      >
                        <CalendarCheck className="h-4 w-4" strokeWidth={1.5} />
                        {t.cta.bookTreatment}
                      </a>
                      <a
                        href={waLink(`Hola, me gustaría reservar: ${s.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                      >
                        {t.cta.whatsapp}
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
