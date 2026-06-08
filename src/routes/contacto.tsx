import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CalendarCheck,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  ADDRESS_LINES,
  EMAIL,
  FRESHA,
  HOURS_VALUE,
  MAPS,
  PHONE,
  PHONE_TEL,
  waLink,
} from "@/lib/site-data";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y reservas — Herbolario Spa La Tejita" },
      {
        name: "description",
        content:
          "Dirección, horarios, teléfono y WhatsApp del Herbolario Spa La Tejita en Tenerife. Reserva online o escríbenos.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section>
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-12 md:px-8 md:pb-12 md:pt-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Contacto y reservas
          </div>
          <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
            Te esperamos en La Tejita.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            Reserva online, escríbenos por WhatsApp o pásate a vernos. Te respondemos en horario
            comercial.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Hola, me gustaría hacer una consulta / reserva.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              WhatsApp
            </a>
            <a
              href={FRESHA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <CalendarCheck className="h-4 w-4" strokeWidth={1.5} />
              Reservar online
            </a>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Info */}
            <div className="flex flex-col gap-6">
              <article className="rounded-lg bg-card p-6">
                <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h2 className="mt-4 text-base">Dirección</h2>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-sm leading-relaxed text-muted-foreground hover:text-foreground"
                >
                  {ADDRESS_LINES.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </a>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-foreground"
                >
                  Cómo llegar
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </article>

              <article className="rounded-lg bg-card p-6">
                <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h2 className="mt-4 text-base">Teléfono y email</h2>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-3 block text-sm text-muted-foreground hover:text-foreground"
                >
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {EMAIL}
                </a>
              </article>

              <article className="rounded-lg bg-card p-6">
                <Clock className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h2 className="mt-4 text-base">Horario</h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {HOURS_VALUE}
                </p>
              </article>
            </div>

            {/* Form */}
            <div className="rounded-lg bg-card p-7 md:p-9">
              <h2 className="text-2xl leading-tight md:text-3xl">Escríbenos</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Déjanos un mensaje y te contestamos cuanto antes. Para reservas inmediatas, te
                recomendamos WhatsApp o la reserva online.
              </p>

              {sent ? (
                <div className="mt-6 rounded-md bg-secondary p-5 text-sm text-foreground">
                  ¡Gracias! Hemos recibido tu mensaje. Te responderemos en breve.
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                      Nombre
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                      placeholder="Cuéntanos en qué podemos ayudarte"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    Enviar mensaje
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
