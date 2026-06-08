import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  Leaf,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { FRESHA, heroImg, reviews, services, team } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Herbolario Spa La Tejita — Bienestar natural en Tenerife" },
      {
        name: "description",
        content:
          "Centro de bienestar y tienda natural en La Tejita, Tenerife. Masajes, faciales, manicura rusa y cosmética bio de Canarias.",
      },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <>
      {/* Hero */}
      <section className="pt-4">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Spa & Tienda Natural — Tenerife
            </div>
            <h1 className="text-balance text-[2.25rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.05] lg:text-[4.25rem]">
              Bienestar y productos naturales en La Tejita.
            </h1>
            <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-muted-foreground md:text-lg md:leading-relaxed">
              Centro de masajes, faciales y manicura en Tenerife — y tienda de cosmética bio,
              aromaterapia y suplementos naturales de Canarias.
            </p>
            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <a
                href={FRESHA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                <CalendarCheck className="h-4 w-4" strokeWidth={1.5} />
                Reservar tratamiento
              </a>
              <Link
                to="/tienda"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary sm:w-auto"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                Tienda
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={heroImg}
                alt="Composición serena del spa con piedras y plantas"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two journeys */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              01 — Dos caminos, una casa
            </div>
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              Elige tu experiencia.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <Link
              to="/tratamientos"
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
                <h3 className="text-2xl leading-tight md:text-3xl">Servicios de bienestar</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  Tratamientos manuales en nuestro centro de La Tejita, con reserva online.
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Masajes, faciales, manicura rusa y pedicura spa",
                  "Equipo experto y atmósfera de calma",
                  "Reserva 24/7 en Fresha",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                Ver tratamientos
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>

            <Link
              to="/tienda"
              className="group relative flex flex-col gap-6 overflow-hidden rounded-lg bg-[oklch(0.95_0.012_85)] p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-md bg-card px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                  <Leaf className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                  Tienda
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.4} />
              </div>
              <div>
                <h3 className="text-2xl leading-tight md:text-3xl">Productos naturales</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  Cosmética bio, aromaterapia y suplementos elaborados en Canarias.
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Vitaminas y suplementos naturales",
                  "Aromaterapia y cosmética bio",
                  "Envío a toda Canarias sin aduanas",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground">
                Ver productos
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                02 — Tratamientos
              </div>
              <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
                Rituales pensados para tu equilibrio.
              </h2>
            </div>
            <Link
              to="/tratamientos"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
            >
              Ver todos los tratamientos
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, ...s }, i) => (
              <article
                key={s.key}
                className="flex flex-col gap-5 rounded-lg bg-card p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
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

      {/* Team mini */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              03 — Equipo
            </div>
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              Manos expertas, atención cercana.
            </h2>
          </div>
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
          <div className="mt-10">
            <Link
              to="/sobre-nosotros"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
            >
              Conoce nuestra filosofía
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              04 — Opiniones
            </div>
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              Lo que dicen nuestros clientes.
            </h2>
            <div className="mt-6 flex items-center gap-2" aria-label="5 de 5 estrellas">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" strokeWidth={0} />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                Basado en 62 valoraciones verificadas
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => (
              <article key={i} className="flex flex-col gap-4 rounded-lg bg-background p-7">
                <div className="flex items-center gap-1" aria-label={`${r.rating} estrellas`}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground">"{r.text}"</p>
                <div className="mt-auto text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{r.name}</span> · {r.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
