import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LANG } from "@/i18n";

export const Route = createFileRoute("/blog")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang/blog", params: { lang: DEFAULT_LANG } });
  },
});
