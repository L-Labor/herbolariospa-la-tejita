import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LANG } from "@/i18n";

export const Route = createFileRoute("/tienda")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang/tienda", params: { lang: DEFAULT_LANG } });
  },
});
