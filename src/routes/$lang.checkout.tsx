import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useCart, cartSelectors, formatEur } from "@/stores/cart";
import { waLink } from "@/lib/site-data";
import { useT } from "@/i18n/I18nProvider";
import { resolveLang } from "@/i18n";
import { pageLinks } from "@/lib/seo";

const TITLES = {
  es: "Checkout — Herbolario Spa La Tejita",
  en: "Checkout — Herbolario Spa La Tejita",
  de: "Kasse — Herbolario Spa La Tejita",
  it: "Checkout — Herbolario Spa La Tejita",
} as const;

export const Route = createFileRoute("/$lang/checkout")({
  head: ({ params }) => {
    const lang = resolveLang(params.lang);
    return {
      meta: [
        { title: TITLES[lang] },
        { name: "description", content: TITLES[lang] },
        { name: "robots", content: "noindex" },
      ],
      links: pageLinks(lang, "checkout"),
    };
  },
  component: CheckoutPage,
});

function CheckoutPage() {
  const params = useParams({ from: "/$lang/checkout" });
  const lang = resolveLang(params.lang);
  const { t } = useT();
  const [mounted, setMounted] = useState(false);
  const items = useCart((s) => s.items);
  const clear = useCart((s) => s.clear);

  useEffect(() => {
    useCart.persist.rehydrate();
    setMounted(true);
  }, []);

  const subtotal = cartSelectors.subtotal({ items });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const address = String(data.get("address") || "");
    const city = String(data.get("city") || "");
    const postal = String(data.get("postal") || "");
    const island = String(data.get("island") || "");
    const notes = String(data.get("notes") || "");

    const lines = [
      `*${t.checkout.title}*`,
      "",
      `*${t.checkout.contact}*`,
      `${t.checkout.name}: ${name}`,
      `${t.checkout.email}: ${email}`,
      `${t.checkout.phone}: ${phone}`,
      "",
      `*${t.checkout.shipping}*`,
      `${t.checkout.address}: ${address}`,
      `${t.checkout.city}: ${city} (${postal})`,
      `${t.checkout.island}: ${island}`,
      "",
      `*${t.checkout.summary}*`,
      ...items.map((i) => `• ${i.name} × ${i.qty} — ${formatEur(i.price * i.qty, lang)}`),
      "",
      `*${t.cart.subtotal}: ${formatEur(subtotal, lang)}*`,
      notes ? `\n${t.checkout.notes}: ${notes}` : "",
    ].filter(Boolean);

    const url = waLink(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (mounted && items.length === 0) {
    return (
      <section>
        <div className="mx-auto max-w-3xl px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
          <h1 className="text-[2rem] leading-[1.15] sm:text-4xl">{t.checkout.title}</h1>
          <div className="mt-8 rounded-lg bg-secondary/60 p-8 text-sm text-muted-foreground">
            {t.checkout.empty}
          </div>
          <Link
            to="/$lang/tienda"
            params={{ lang }}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            {t.cart.keepShopping}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
        <Link
          to="/$lang/carrito"
          params={{ lang }}
          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} />
          {t.checkout.backToCart}
        </Link>
        <h1 className="mt-4 text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05]">
          {t.checkout.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {t.checkout.intro}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <form onSubmit={onSubmit} className="lg:col-span-8 flex flex-col gap-8">
            <fieldset className="rounded-lg bg-card p-6 md:p-7">
              <legend className="px-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                {t.checkout.contact}
              </legend>
              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                <Field name="name" label={t.checkout.name} required />
                <Field name="email" type="email" label={t.checkout.email} required />
                <Field name="phone" type="tel" label={t.checkout.phone} required />
              </div>
            </fieldset>

            <fieldset className="rounded-lg bg-card p-6 md:p-7">
              <legend className="px-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                {t.checkout.shipping}
              </legend>
              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field name="address" label={t.checkout.address} required />
                </div>
                <Field name="city" label={t.checkout.city} required />
                <Field name="postal" label={t.checkout.postal} required />
                <div className="sm:col-span-2">
                  <Field name="island" label={t.checkout.island} required />
                </div>
              </div>
            </fieldset>

            <fieldset className="rounded-lg bg-card p-6 md:p-7">
              <legend className="px-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                {t.checkout.notes}
              </legend>
              <textarea
                name="notes"
                rows={4}
                placeholder={t.checkout.notesPh}
                className="mt-3 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
              />
            </fieldset>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-medium text-primary-foreground hover:opacity-90"
              onClick={() => {
                // Optionally clear after submission — keep cart for safety, user can clear manually
                void clear;
              }}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              {t.checkout.submit}
            </button>
            <p className="text-xs leading-relaxed text-muted-foreground">{t.checkout.noPayment}</p>
          </form>

          <aside className="lg:col-span-4">
            <div className="rounded-lg bg-secondary/60 p-6">
              <h2 className="text-base font-medium">{t.checkout.summary}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {items.map((i) => (
                  <li key={i.key} className="flex items-start justify-between gap-3 text-sm">
                    <div className="flex-1">
                      <p className="line-clamp-2 leading-snug">{i.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">× {i.qty}</p>
                    </div>
                    <span className="font-display">{formatEur(i.price * i.qty, lang)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">{t.cart.subtotal}</span>
                <span className="font-display text-xl">{formatEur(subtotal, lang)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}
