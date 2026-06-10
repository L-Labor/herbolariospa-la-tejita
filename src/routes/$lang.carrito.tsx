import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart, cartSelectors, formatEur } from "@/stores/cart";
import { useT } from "@/i18n/I18nProvider";
import { resolveLang } from "@/i18n";
import { pageLinks } from "@/lib/seo";

const TITLES = {
  es: "Carrito — Herbolario Spa La Tejita",
  en: "Cart — Herbolario Spa La Tejita",
  de: "Warenkorb — Herbolario Spa La Tejita",
  it: "Carrello — Herbolario Spa La Tejita",
} as const;

export const Route = createFileRoute("/$lang/carrito")({
  head: ({ params }) => {
    const lang = resolveLang(params.lang);
    return {
      meta: [
        { title: TITLES[lang] },
        { name: "description", content: TITLES[lang] },
        { name: "robots", content: "noindex" },
      ],
      links: pageLinks(lang, "carrito"),
    };
  },
  component: CarritoPage,
});

function CarritoPage() {
  const params = useParams({ from: "/$lang/carrito" });
  const lang = resolveLang(params.lang);
  const { t } = useT();
  const [mounted, setMounted] = useState(false);
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);

  useEffect(() => {
    useCart.persist.rehydrate();
    setMounted(true);
  }, []);

  const subtotal = cartSelectors.subtotal({ items });

  return (
    <section>
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {t.cart.yourCart}
        </div>
        <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
          {t.cart.title}
        </h1>

        {!mounted || items.length === 0 ? (
          <div className="mt-12 flex flex-col items-center gap-4 rounded-lg bg-secondary/60 p-10 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" strokeWidth={1.2} />
            <p className="text-sm text-muted-foreground">{t.cart.empty}</p>
            <Link
              to="/$lang/tienda"
              params={{ lang }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              {t.cart.keepShopping}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <ul className="lg:col-span-8 flex flex-col gap-4">
              {items.map((i) => (
                <li
                  key={i.key}
                  className="flex gap-4 rounded-lg bg-card p-4 md:gap-5 md:p-5"
                >
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-secondary md:h-28 md:w-28">
                    <img src={i.img} alt={i.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium leading-snug md:text-base">{i.name}</p>
                      <button
                        type="button"
                        onClick={() => remove(i.key)}
                        aria-label={t.cart.remove}
                        className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.6} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-end justify-between gap-3">
                      <div className="inline-flex items-center rounded-md border border-border">
                        <button
                          type="button"
                          onClick={() => setQty(i.key, i.qty - 1)}
                          aria-label="-"
                          className="grid h-9 w-9 place-items-center hover:bg-secondary"
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.8} />
                        </button>
                        <span className="w-10 text-center text-sm">{i.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(i.key, i.qty + 1)}
                          aria-label="+"
                          className="grid h-9 w-9 place-items-center hover:bg-secondary"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.8} />
                        </button>
                      </div>
                      <span className="font-display text-xl">{formatEur(i.price * i.qty, lang)}</span>
                    </div>
                  </div>
                </li>
              ))}
              <button
                type="button"
                onClick={clear}
                className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                <Trash2 className="h-3.5 w-3.5" strokeWidth={1.6} />
                {t.cart.clear}
              </button>
            </ul>

            <aside className="lg:col-span-4">
              <div className="rounded-lg bg-secondary/60 p-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">{t.cart.subtotal}</span>
                  <span className="font-display text-2xl">{formatEur(subtotal, lang)}</span>
                </div>
                <Link
                  to="/$lang/checkout"
                  params={{ lang }}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  {t.cart.checkout}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  to="/$lang/tienda"
                  params={{ lang }}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                  {t.cart.keepShopping}
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
