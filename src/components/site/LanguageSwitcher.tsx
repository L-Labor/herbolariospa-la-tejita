import { useRouter, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Languages } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { LANGS, LANG_LABEL, LANG_SHORT, persistLang, isLang, type Lang } from "@/i18n";

export function LanguageSwitcher({
  currentLang,
  variant = "header",
}: {
  currentLang: Lang;
  variant?: "header" | "mobile";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [open]);

  function swapLang(target: Lang) {
    // Replace the first path segment if it is a lang code; else prefix it.
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && isLang(segments[0])) {
      segments[0] = target;
    } else {
      segments.unshift(target);
    }
    const nextPath = "/" + segments.join("/");
    const suffix = (search || "") + (hash ? `#${hash}` : "");
    persistLang(target);
    setOpen(false);
    router.navigate({ to: nextPath + suffix });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={
          variant === "header"
            ? "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-2 text-xs font-medium uppercase tracking-widest text-foreground/80 hover:border-accent hover:text-accent"
            : "inline-flex w-full items-center justify-between gap-2 rounded-md border border-border bg-card px-3 py-3 text-sm font-medium text-foreground"
        }
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
      >
        <Languages className="h-3.5 w-3.5" strokeWidth={1.6} />
        <span>{LANG_SHORT[currentLang]}</span>
        <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.6} />
      </button>
      {open && (
        <ul
          role="listbox"
          className={
            variant === "header"
              ? "absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-border bg-background shadow-lg"
              : "mt-2 w-full overflow-hidden rounded-md border border-border bg-background"
          }
        >
          {LANGS.map((l) => {
            const active = l === currentLang;
            return (
              <li key={l}>
                <button
                  type="button"
                  onClick={() => swapLang(l)}
                  className={`flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-sm hover:bg-secondary ${
                    active ? "font-medium text-foreground" : "text-foreground/80"
                  }`}
                >
                  <span>{LANG_LABEL[l]}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {LANG_SHORT[l]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
