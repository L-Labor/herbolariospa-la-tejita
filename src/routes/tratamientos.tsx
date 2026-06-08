import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Check, CalendarCheck } from "lucide-react";
import { FRESHA, services, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/tratamientos")({
  head: () => ({
    meta: [
      { title: "Tratamientos — Herbolario Spa La Tejita" },
      {
        name: "description",
        content:
          "Masajes, faciales, manicura rusa y pedicura spa en La Tejita, Tenerife. Reserva tu tratamiento online o por WhatsApp.",
      },
    ],
  }),
  component: TratamientosPage,
});

function TratamientosPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-12 md:px-8 md:pb-12 md:pt-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Tratamientos
          </div>
          <h1 className="max-w-3xl text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
            Rituales pensados para tu equilibrio.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            Cada tratamiento se diseña con técnica, productos cuidados y la atención humana que
            define nuestra casa.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map(({ icon: Icon, ...s }) => (
              <article
                key={s.key}
                className="flex flex-col gap-5 rounded-lg bg-card p-7 md:p-9"
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
                    <span>
                      <span className="font-medium">Beneficio:</span> {s.benefit}
                    </span>
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
                    Reservar este tratamiento
                  </a>
                  <a
                    href={waLink(`Hola, me gustaría reservar: ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    Consultar por WhatsApp
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
