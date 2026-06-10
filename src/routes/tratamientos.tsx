import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LANG } from "@/i18n";

export const Route = createFileRoute("/tratamientos")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang/tratamientos", params: { lang: DEFAULT_LANG } });
  },
});
