import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Sparkles, Hand, Flower2, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-spa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Herbolario Spa La Tejita — Bienestar y belleza en Tenerife" },
      {
        name: "description",
        content:
          "Centro de bienestar y belleza en La Tejita, Santa Cruz de Tenerife. Masajes, manicura rusa, depilación y tratamientos faciales por profesionales apasionados.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Hand, title: "Masajes Relajantes", price: "desde 60€", desc: "Liberación de tensión con técnicas profesionales en un entorno de calma absoluta." },
  { icon: Sparkles, title: "Manicura & Pedicura Rusa", price: "desde 37€", desc: "Acabado impecable y duradero con la técnica rusa de máxima precisión." },
  { icon: Leaf, title: "Depilación Láser & Cera", price: "consulta", desc: "Resultados eficaces y cuidadosos adaptados a cada tipo de piel." },
  { icon: Flower2, title: "Limpiezas Faciales", price: "consulta", desc: "Rituales faciales que devuelven luminosidad, equilibrio y suavidad a tu rostro." },
];

const team = [
  { name: "Gloria", role: "Experta en belleza y uñas", initials: "GL" },
  { name: "Roberto", role: "Terapeuta Profesional", initials: "RB" },
  { name: "Irina", role: "Master en uñas y belleza", initials: "IR" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <span className="text-sm font-medium tracking-tight">
              Herbolario Spa <span className="text-muted-foreground">La Tejita</span>
            </span>
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {[
              ["Inicio", "#top"],
              ["Servicios", "#servicios"],
              ["Equipo", "#equipo"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Reservar Cita
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-3 border border-border px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 bg-accent" />
              Estética & Bienestar — Tenerife
            </div>
            <h1 className="text-balance text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Tu experiencia única de cuidado y belleza en La Tejita.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              En Estética La Tejita, creemos que el equipo es el corazón de nuestro éxito. Nosotros, un grupo de profesionales apasionados, estamos comprometidos con vuestra satisfacción.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ver Tratamientos
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="#equipo" className="text-sm font-medium underline underline-offset-4 decoration-border hover:decoration-foreground">
                Conoce al equipo
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <img
                src={heroImg}
                alt="Composición geométrica con piedras y hojas que evoca la calma del spa"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-border bg-background/95">
                {[
                  ["+8", "Años"],
                  ["12", "Tratamientos"],
                  ["100%", "Naturales"],
                ].map(([n, l]) => (
                  <div key={l} className="border-r border-border px-4 py-4 last:border-r-0">
                    <div className="font-display text-2xl">{n}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">02 — Servicios</div>
              <h2 className="text-4xl md:text-5xl">Rituales pensados para tu equilibrio.</h2>
            </div>
            <p className="text-muted-foreground md:col-span-5">
              Cada tratamiento se diseña con técnica, productos cuidados y la atención humana que define nuestra casa.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 border border-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, price, desc }, i) => (
              <article
                key={title}
                className={`group relative flex flex-col gap-6 bg-card p-8 transition-colors hover:bg-secondary ${
                  i < services.length - 1 ? "border-b border-border lg:border-b-0 lg:border-r" : ""
                } ${i % 2 === 0 ? "sm:border-r sm:border-border" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center border border-border bg-background">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl">{title}</h3>
                  <div className="mt-2 text-sm text-accent-foreground/80">{price}</div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">03 — Equipo</div>
            <h2 className="text-4xl md:text-5xl">Manos expertas, atención cercana.</h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col bg-background p-8">
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-secondary">
                  <span className="font-display text-7xl text-primary/80">{m.initials}</span>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                  </div>
                  <span className="h-2 w-2 bg-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">04 — Contacto</div>
              <h2 className="text-4xl text-primary-foreground md:text-5xl">Reserva tu próxima visita.</h2>
              <p className="mt-6 max-w-md text-primary-foreground/70">
                Te esperamos en el corazón de La Tejita para diseñar juntos tu ritual de bienestar.
              </p>
              <a
                href="tel:+34641948530"
                className="mt-10 inline-flex items-center gap-2 bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Reservar Cita
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>

            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
              <div>
                <MapPin className="h-5 w-5" strokeWidth={1.4} />
                <h3 className="mt-4 text-base text-primary-foreground">Dirección</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  C. Hernán Cortés, 2, Local 28<br />
                  C.C. La Tejita Street Market<br />
                  Santa Cruz de Tenerife
                </p>
              </div>
              <div>
                <Phone className="h-5 w-5" strokeWidth={1.4} />
                <h3 className="mt-4 text-base text-primary-foreground">Teléfono</h3>
                <a href="tel:+34641948530" className="mt-3 block text-sm text-primary-foreground/70 hover:text-primary-foreground">
                  +34 641 94 85 30
                </a>
              </div>
              <div>
                <Clock className="h-5 w-5" strokeWidth={1.4} />
                <h3 className="mt-4 text-base text-primary-foreground">Horario</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  Lun – Vie: 10:00 – 19:00<br />
                  Sábados: 10:00 – 15:00<br />
                  Domingos: cerrado
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/50 sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} Herbolario Spa La Tejita. Todos los derechos reservados.</span>
            <span className="uppercase tracking-[0.18em]">Tenerife · Islas Canarias</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
