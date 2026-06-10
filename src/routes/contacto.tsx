import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LANG } from "@/i18n";

export const Route = createFileRoute("/contacto")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang/contacto", params: { lang: DEFAULT_LANG } });
  },
});
