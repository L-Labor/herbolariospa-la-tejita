import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  Leaf,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { FRESHA, GOOGLE_REVIEWS_URL, heroImg, reviews, services, team } from "@/lib/site-data";
import { useT } from "@/i18n/I18nProvider";
import { resolveLang } from "@/i18n";
import { pageLinks } from "@/lib/seo";

const TITLES = {
  es: "Herbolario Spa La Tejita — Bienestar natural en Tenerife",
  en: "Herbolario Spa La Tejita — Natural wellness in Tenerife",
  de: "Herbolario Spa La Tejita — Natürliches Wohlbefinden auf Teneriffa",
  it: "Herbolario Spa La Tejita — Benessere naturale a Tenerife",
} as const;

const DESCS = {
  es: "Centro de bienestar y tienda natural en La Tejita, Tenerife. Masajes, faciales, manicura rusa y cosmética bio de Canarias.",
  en: "Wellness centre and natural shop in La Tejita, Tenerife. Massage, facials, Russian manicure and organic Canarian cosmetics.",
  de: "Wellness-Zentrum und Naturshop in La Tejita, Teneriffa. Massage, Gesichtsbehandlungen, russische Maniküre und Bio-Kosmetik aus den Kanaren.",
  it: "Centro benessere e negozio naturale a La Tejita, Tenerife. Massaggi, trattamenti viso, manicure russa e cosmesi bio delle Canarie.",
} as const;

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = resolveLang(params.lang);
    return {
      meta: [
        { title: TITLES[lang] },
        { name: "description", content: DESCS[lang] },
        { property: "og:title", content: TITLES[lang] },
        { property: "og:description", content: DESCS[lang] },
        { property: "og:type", content: "website" },
      ],
      links: pageLinks(lang, ""),
    };
  },
  component: Inicio,
});

function Inicio() {
  const params = useParams({ from: "/$lang/" });
  const lang = resolveLang(params.lang);
  const { t } = useT();

  return (
    <>
      <section className="pt-4">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Spa & {t.nav.shop} — Tenerife
            </div>
            <h1 className="text-balance text-[2.25rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.05] lg:text-[4.25rem]">
              {{
                es: "Bienestar y productos naturales en La Tejita.",
                en: "Wellness and natural products in La Tejita.",
                de: "Wohlbefinden und Naturprodukte in La Tejita.",
                it: "Benessere e prodotti naturali a La Tejita.",
              }[lang]}
            </h1>
            <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-muted-foreground md:text-lg md:leading-relaxed">
              {{
                es: "Centro de masajes, faciales y manicura en Tenerife — y tienda de cosmética bio, aromaterapia y suplementos naturales de Canarias.",
                en: "Massage, facial and manicure studio in Tenerife — plus a shop with organic cosmetics, aromatherapy and natural supplements from the Canary Islands.",
                de: "Studio für Massage, Gesichtsbehandlungen und Maniküre auf Teneriffa — und ein Shop mit Bio-Kosmetik, Aromatherapie und Naturpräparaten aus den Kanaren.",
                it: "Centro di massaggi, trattamenti viso e manicure a Tenerife — e negozio di cosmesi bio, aromaterapia e integratori naturali delle Canarie.",
              }[lang]}
            </p>
            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <a
                href={FRESHA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                <CalendarCheck className="h-4 w-4" strokeWidth={1.5} />
                {t.cta.bookTreatment}
              </a>
              <Link
                to="/$lang/tienda"
                params={{ lang }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary sm:w-auto"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                {t.cta.shop}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={heroImg}
                alt="Spa"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <Link
              to="/$lang/tratamientos"
              params={{ lang }}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-lg bg-card p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-md bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                  <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                  Spa
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.4} />
              </div>
              <div>
                <h3 className="text-2xl leading-tight md:text-3xl">{t.nav.treatments}</h3>
              </div>
              <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                {t.cta.seeTreatments}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>

            <Link
              to="/$lang/tienda"
              params={{ lang }}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-lg bg-[oklch(0.95_0.012_85)] p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-md bg-card px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                  <Leaf className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                  {t.nav.shop}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.4} />
              </div>
              <div>
                <h3 className="text-2xl leading-tight md:text-3xl">{t.shop.title}</h3>
              </div>
              <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground">
                {t.cta.seeShop}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              {t.nav.treatments}
            </h2>
            <Link
              to="/$lang/tratamientos"
              params={{ lang }}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
            >
              {t.cta.seeAll}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, ...s }) => (
              <article
                key={s.key}
                className="flex flex-col gap-5 rounded-lg bg-card p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <div>
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-accent">{s.price}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {team.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.name} className="flex flex-col rounded-lg bg-card p-6">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-secondary">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl">{m.name}</h3>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                      <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                      {t.team[m.specialtyKey]}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{m.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" strokeWidth={0} />
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {(() => {
              const pool = reviews.filter((r) => r.lang === (lang === "es" ? "es" : "en"));
              const count = lang === "es" || lang === "en" ? 3 : 2;
              return pool.slice(0, count).map((r, i) => (
                <article key={i} className="flex flex-col gap-4 rounded-lg bg-background p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {t.reviews.fromGoogle}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">"{r.text}"</p>
                  <div className="mt-auto text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{r.name}</span> · Google
                  </div>
                </article>
              ));
            })()}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {t.reviews.seeAll}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
