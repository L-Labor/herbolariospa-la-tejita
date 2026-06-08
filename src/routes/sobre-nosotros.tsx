import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart, Leaf, MapPin, Sparkles } from "lucide-react";
import { team } from "@/lib/site-data";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre nosotros — Herbolario Spa La Tejita" },
      {
        name: "description",
        content:
          "Nuestra historia, filosofía y vínculo con La Tejita y Canarias. Bienestar natural, trato cercano y productos cuidados.",
      },
    ],
  }),
  component: SobreNosotrosPage,
});

function SobreNosotrosPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-12 md:px-8 md:pb-14 md:pt-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Sobre nosotros
          </div>
          <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
            Un espacio de bienestar natural en La Tejita.
          </h1>
          <div className="mt-8 flex flex-col gap-5 text-[15px] leading-[1.8] text-muted-foreground md:text-lg">
            <p>
              Herbolario Spa La Tejita nace del deseo de crear un lugar tranquilo donde el cuidado
              personal y los productos naturales se encuentren. Un espacio acogedor en el corazón de
              La Tejita, Tenerife, pensado para quienes buscan un momento de calma y bienestar.
            </p>
            <p>
              Combinamos tratamientos manuales —masajes, faciales, manicura y pedicura— con una
              selección cuidada de cosmética bio, aromaterapia y suplementos elaborados en Canarias.
              Cada detalle, desde la atención hasta los productos, está pensado para que te sientas
              en casa.
            </p>
            <p>
              Creemos en lo natural, en la cercanía y en el trato personalizado. Nuestro equipo
              acompaña cada visita con atención al detalle y respeto por el ritmo de cada persona.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Filosofía
            </div>
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              Lo que nos guía.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: "Natural y consciente",
                text: "Apostamos por productos naturales, bio y de origen cercano. Cuidamos lo que entra en contacto con tu piel y con tu cuerpo.",
              },
              {
                icon: Heart,
                title: "Trato cercano",
                text: "Escuchamos antes de proponer. Adaptamos cada tratamiento y cada recomendación a tu momento, sin prisas.",
              },
              {
                icon: MapPin,
                title: "Raíces canarias",
                text: "Estamos en La Tejita y trabajamos con productores y marcas de las Islas, valorando lo que la tierra ofrece.",
              },
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
          <div className="mb-10 max-w-2xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              El espacio
            </div>
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              Ambiente cálido, enfoque en el bienestar.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground md:text-lg">
              Un entorno tranquilo y luminoso, con materiales suaves y una atmósfera pensada para
              que cada visita sea un pequeño descanso del ritmo cotidiano.
            </p>
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

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/tratamientos"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              Ver tratamientos
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Contacto y reservas
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
