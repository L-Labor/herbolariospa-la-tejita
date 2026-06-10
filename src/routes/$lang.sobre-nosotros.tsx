import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowUpRight, Heart, Leaf, MapPin, Sparkles } from "lucide-react";
import { team } from "@/lib/site-data";
import { useT } from "@/i18n/I18nProvider";
import { resolveLang } from "@/i18n";
import { pageLinks } from "@/lib/seo";

const TITLES = {
  es: "Sobre nosotros — Herbolario Spa La Tejita",
  en: "About us — Herbolario Spa La Tejita",
  de: "Über uns — Herbolario Spa La Tejita",
  it: "Chi siamo — Herbolario Spa La Tejita",
} as const;

const INTRO = {
  es: "Un espacio de bienestar natural en La Tejita.",
  en: "A natural wellness space in La Tejita.",
  de: "Ein Raum für natürliches Wohlbefinden in La Tejita.",
  it: "Uno spazio di benessere naturale a La Tejita.",
} as const;

export const Route = createFileRoute("/$lang/sobre-nosotros")({
  head: ({ params }) => {
    const lang = resolveLang(params.lang);
    return {
      meta: [
        { title: TITLES[lang] },
        { name: "description", content: INTRO[lang] },
      ],
      links: pageLinks(lang, "sobre-nosotros"),
    };
  },
  component: SobreNosotrosPage,
});

function SobreNosotrosPage() {
  const params = useParams({ from: "/$lang/sobre-nosotros" });
  const lang = resolveLang(params.lang);
  const { t } = useT();

  return (
    <>
      <section>
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-12 md:px-8 md:pb-14 md:pt-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {t.nav.about}
          </div>
          <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
            {INTRO[lang]}
          </h1>
          {lang !== "es" && (
            <p className="mt-4 text-xs text-muted-foreground">{t.common.translationNotice}</p>
          )}
          <div className="mt-8 flex flex-col gap-5 text-[15px] leading-[1.8] text-muted-foreground md:text-lg">
            <p>
              Herbolario Spa La Tejita nace del deseo de crear un lugar tranquilo donde el cuidado
              personal y los productos naturales se encuentren.
            </p>
            <p>
              Combinamos tratamientos manuales —masajes, faciales, manicura y pedicura— con una
              selección cuidada de cosmética bio, aromaterapia y suplementos elaborados en Canarias.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { icon: Leaf, title: "Natural", text: "Productos naturales y bio." },
              { icon: Heart, title: "Cercanía", text: "Trato personalizado." },
              { icon: MapPin, title: "Canarias", text: "Raíces locales." },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="flex flex-col gap-4 rounded-lg bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <h3 className="text-xl leading-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
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
                      {m.specialty}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{m.role}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/$lang/tratamientos"
              params={{ lang }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              {t.cta.seeTreatments}
            </Link>
            <Link
              to="/$lang/contacto"
              params={{ lang }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {t.nav.contact}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
