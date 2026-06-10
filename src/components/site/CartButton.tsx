import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart, cartSelectors } from "@/stores/cart";

export function CartButton({ onClick }: { onClick: () => void }) {
  const items = useCart((s) => s.items);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    useCart.persist.rehydrate();
    setMounted(true);
  }, []);

  const count = mounted ? cartSelectors.count({ items }) : 0;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Cart"
      className="relative grid h-9 w-9 place-items-center rounded-md text-foreground hover:bg-secondary"
    >
      <ShoppingBag className="h-4.5 w-4.5" strokeWidth={1.5} />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 grid min-h-[18px] min-w-[18px] place-items-center rounded-full bg-accent px-1 text-[10px] font-semibold leading-none text-accent-foreground">
          {count}
        </span>
      )}
    </button>
  );
}
