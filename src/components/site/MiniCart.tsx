import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart, cartSelectors, formatEur } from "@/stores/cart";
import { useT } from "@/i18n/I18nProvider";

export function MiniCart({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { lang, t } = useT();
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);

  const subtotal = cartSelectors.subtotal({ items });

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label={t.cart.yourCart}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-base font-medium">{t.cart.yourCart}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-md hover:bg-secondary"
          >
            <X className="h-4.5 w-4.5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" strokeWidth={1.2} />
              <p className="text-sm text-muted-foreground">{t.cart.empty}</p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                {t.cart.keepShopping}
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((i) => (
                <li key={i.key} className="flex gap-3">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-secondary">
                    <img src={i.img} alt={i.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="line-clamp-2 text-sm leading-snug">{i.name}</p>
                      <button
                        type="button"
                        onClick={() => remove(i.key)}
                        aria-label={t.cart.remove}
                        className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
                      >
                        <Trash2 className="h-3.5 w-3.5" strokeWidth={1.6} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center rounded-md border border-border">
                        <button
                          type="button"
                          onClick={() => setQty(i.key, i.qty - 1)}
                          aria-label="-"
                          className="grid h-8 w-8 place-items-center hover:bg-secondary"
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.8} />
                        </button>
                        <span className="w-8 text-center text-sm">{i.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(i.key, i.qty + 1)}
                          aria-label="+"
                          className="grid h-8 w-8 place-items-center hover:bg-secondary"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.8} />
                        </button>
                      </div>
                      <span className="font-display text-base">
                        {formatEur(i.price * i.qty, lang)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-5 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{t.cart.subtotal}</span>
              <span className="font-display text-xl">{formatEur(subtotal, lang)}</span>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/$lang/checkout"
                params={{ lang }}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                {t.cart.checkout}
              </Link>
              <Link
                to="/$lang/carrito"
                params={{ lang }}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {t.cart.viewCart}
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
