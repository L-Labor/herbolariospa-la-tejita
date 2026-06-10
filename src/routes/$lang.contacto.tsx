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
import { useT } from "@/i18n/I18nProvider";
import { resolveLang } from "@/i18n";
import { pageLinks } from "@/lib/seo";

const TITLES = {
  es: "Contacto y reservas — Herbolario Spa La Tejita",
  en: "Contact & bookings — Herbolario Spa La Tejita",
  de: "Kontakt & Buchung — Herbolario Spa La Tejita",
  it: "Contatti e prenotazioni — Herbolario Spa La Tejita",
} as const;

export const Route = createFileRoute("/$lang/contacto")({
  head: ({ params }) => {
    const lang = resolveLang(params.lang);
    return {
      meta: [
        { title: TITLES[lang] },
        { name: "description", content: TITLES[lang] },
      ],
      links: pageLinks(lang, "contacto"),
    };
  },
  component: ContactoPage,
});

function ContactoPage() {
  const { t } = useT();
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
            {t.nav.contact}
          </div>
          <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
            {t.footer.cta}
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            {t.footer.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Hola, me gustaría hacer una consulta / reserva.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              {t.cta.whatsapp}
            </a>
            <a
              href={FRESHA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <CalendarCheck className="h-4 w-4" strokeWidth={1.5} />
              {t.cta.book}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <article className="rounded-lg bg-card p-6">
                <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h2 className="mt-4 text-base">{t.footer.address}</h2>
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
                  Maps
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </article>

              <article className="rounded-lg bg-card p-6">
                <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h2 className="mt-4 text-base">{t.footer.phone}</h2>
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
                <h2 className="mt-4 text-base">{t.footer.hours}</h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {HOURS_VALUE}
                </p>
              </article>
            </div>

            <div className="rounded-lg bg-card p-7 md:p-9">
              {sent ? (
                <div className="rounded-md bg-secondary p-5 text-sm text-foreground">
                  ✓
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t.checkout.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t.checkout.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t.checkout.notes}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    {t.cta.contact}
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
