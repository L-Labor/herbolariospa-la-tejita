import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LANG } from "@/i18n";

export const Route = createFileRoute("/sobre-nosotros")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang/sobre-nosotros", params: { lang: DEFAULT_LANG } });
  },
});
