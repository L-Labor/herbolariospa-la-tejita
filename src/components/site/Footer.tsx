import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import {
  ADDRESS_LINES,
  FRESHA,
  HOURS_VALUE,
  MAPS,
  PHONE,
  PHONE_TEL,
} from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/60">
              Contacto
            </div>
            <h2 className="text-[2rem] leading-[1.2] text-primary-foreground sm:text-4xl md:text-5xl md:leading-[1.1]">
              Reserva tu próxima visita.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-primary-foreground/75">
              Te esperamos en el corazón de La Tejita para diseñar juntos tu ritual de bienestar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={FRESHA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Reservar Cita
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-transparent px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contacto y horarios
              </Link>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 text-base text-primary-foreground">Dirección</h3>
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm leading-relaxed text-primary-foreground/75 underline-offset-4 hover:text-primary-foreground hover:underline"
              >
                {ADDRESS_LINES.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </a>
            </div>
            <div>
              <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 text-base text-primary-foreground">Teléfono</h3>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-3 block text-sm text-primary-foreground/75 hover:text-primary-foreground"
              >
                {PHONE}
              </a>
            </div>
            <div>
              <Clock className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 text-base text-primary-foreground">Horario</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-primary-foreground/75">
                {HOURS_VALUE}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Herbolario Spa La Tejita. Todos los derechos reservados.
          </span>
          <span className="uppercase tracking-[0.18em]">Tenerife · Islas Canarias</span>
        </div>
      </div>
    </footer>
  );
}
