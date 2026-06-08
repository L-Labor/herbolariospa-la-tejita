import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Leaf, Menu, X, ArrowUpRight } from "lucide-react";
import { FRESHA, NAV_ITEMS } from "@/lib/site-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-background/90 shadow-[0_1px_0_0_var(--border),0_8px_24px_-16px_rgba(38,70,83,0.18)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <Leaf className="h-4 w-4" strokeWidth={1.5} />
          </span>
          <span className="text-[13px] font-medium tracking-tight md:text-sm">
            Herbolario Spa <span className="text-muted-foreground">La Tejita</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm text-foreground/75 transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={FRESHA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex md:px-4 md:py-2.5 md:text-sm"
          >
            <span className="hidden md:inline">Reservar Cita</span>
            <span className="md:hidden">Reservar</span>
            <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={1.5} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-md text-foreground hover:bg-secondary lg:hidden"
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-2 py-3 text-base text-foreground/85 hover:bg-secondary data-[status=active]:text-foreground data-[status=active]:font-medium"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={FRESHA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground sm:hidden"
          >
            Reservar Cita
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}
