import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { blogPosts } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog y consejos — Herbolario Spa La Tejita" },
      {
        name: "description",
        content:
          "Consejos sobre bienestar natural, cuidado de la piel y pequeños rituales de autocuidado.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <>
      <section>
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-12 md:px-8 md:pb-12 md:pt-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Blog & consejos
          </div>
          <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
            Pequeñas ideas para tu bienestar cada día.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            Una selección de textos breves sobre cuidado natural, cosmética bio y rituales sencillos
            para incorporar en tu rutina.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogPosts.map((post) => {
              const open = openSlug === post.slug;
              return (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-lg bg-card p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)]"
                >
                  <span className="inline-flex w-fit items-center gap-2 rounded-md bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                    {post.tag}
                  </span>
                  <h2 className="mt-5 text-xl leading-tight md:text-2xl">{post.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

                  {open && (
                    <div className="animate-fade-in mt-5 flex flex-col gap-4 border-t border-border pt-5 text-sm leading-[1.8] text-foreground/85">
                      {post.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setOpenSlug(open ? null : post.slug)}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent hover:text-foreground"
                  >
                    {open ? "Cerrar" : "Leer más"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                      strokeWidth={1.6}
                    />
                  </button>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-lg bg-card p-7 text-center">
            <p className="text-sm text-muted-foreground">
              ¿Te apetece vivirlo en persona? Reserva tu próximo ritual o pásate por la tienda.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                to="/tratamientos"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Ver tratamientos
              </Link>
              <Link
                to="/tienda"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Ir a la tienda
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
