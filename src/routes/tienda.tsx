import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Leaf,
  MapPin,
  Package,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import {
  PRODUCT_CATEGORIES,
  type ProductCat,
  products,
  waLink,
} from "@/lib/site-data";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda natural — Herbolario Spa La Tejita" },
      {
        name: "description",
        content:
          "Cosmética bio, aromaterapia, infusiones y suplementos naturales de Canarias. Pedidos por WhatsApp con envío a toda Canarias.",
      },
    ],
  }),
  component: TiendaPage,
});

function TiendaPage() {
  const [cat, setCat] = useState<ProductCat | "all">("all");
  const visible = cat === "all" ? products : products.filter((p) => p.cat === cat);
  const featured = products.filter((p) => p.badge === "bestseller").slice(0, 3);

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-12 md:px-8 md:pb-12 md:pt-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Tienda
          </div>
          <h1 className="max-w-3xl text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
            Productos naturales de las Islas.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            Cosmética natural, productos bio y selección de origen canario. Las compras se gestionan
            por WhatsApp o en tienda.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="rounded-lg bg-secondary/60 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-accent px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-accent-foreground">
                  <Star className="h-3 w-3" strokeWidth={1.8} />
                  Más vendidos
                </div>
                <h2 className="text-2xl leading-tight md:text-3xl">
                  Productos más vendidos esta semana
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  Una selección de los favoritos de nuestros clientes — productos naturales y bio
                  elaborados en Canarias.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 md:col-span-7">
                {featured.map((p) => (
                  <div key={p.key} className="overflow-hidden rounded-md bg-background">
                    <div className="aspect-square overflow-hidden bg-secondary">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <p className="line-clamp-2 text-xs leading-snug text-foreground/80">{p.name}</p>
                      <p className="mt-1 font-display text-base text-foreground">{p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((c) => {
              const active = cat === c.value;
              return (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setCat(c.value)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground/75 hover:border-accent hover:text-accent"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((p) => (
              <article
                key={p.key}
                className="group flex flex-col overflow-hidden rounded-lg bg-card transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)]"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                    {p.bio && (
                      <span className="inline-flex w-fit items-center gap-1 rounded-md bg-background/90 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/80 backdrop-blur">
                        <Leaf className="h-3 w-3 text-accent" strokeWidth={1.8} />
                        BIO
                      </span>
                    )}
                    {p.canarias && (
                      <span className="inline-flex w-fit items-center gap-1 rounded-md bg-background/90 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/80 backdrop-blur">
                        <MapPin className="h-3 w-3 text-accent" strokeWidth={1.8} />
                        Origen Canarias
                      </span>
                    )}
                  </div>
                  {p.badge && (
                    <span
                      className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-widest backdrop-blur ${
                        p.badge === "bestseller"
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {p.badge === "bestseller" ? (
                        <Star className="h-3 w-3" strokeWidth={1.8} />
                      ) : (
                        <Sparkles className="h-3 w-3" strokeWidth={1.8} />
                      )}
                      {p.badge === "bestseller" ? "Más vendido" : "Nuevo"}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-base leading-snug">{p.name}</h3>
                  <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                    <span className="font-display text-2xl text-foreground">{p.price}</span>
                    <a
                      href={waLink(`Hola, me interesa el producto: ${p.name} (${p.price}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-[11px] font-medium uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
                      Pedir por WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 rounded-lg border border-border bg-card p-4 sm:grid-cols-4 sm:gap-4 sm:p-5">
            {[
              { icon: Leaf, label: "100% Natural" },
              { icon: Package, label: "Envío gratis desde 40€ en Tenerife" },
              { icon: MapPin, label: "Origen Canarias" },
              { icon: Truck, label: "Resto de Canarias 24-72h" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-xs text-foreground/80 sm:text-sm"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-secondary text-accent">
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <span className="leading-snug">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-lg bg-secondary/60 p-5 text-sm leading-relaxed text-foreground/80">
            <ShoppingBag className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
            <p>
              No hay carrito online: gestionamos los pedidos por WhatsApp o directamente en la
              tienda. Te respondemos en horario comercial.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
