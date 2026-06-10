import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { LANGS } from "@/i18n";

const BASE = "https://herbolariospa-la-tejita.lovable.app";

const PATHS = ["", "tienda", "tratamientos", "sobre-nosotros", "blog", "contacto"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls: string[] = [];

        // Root URL (x-default)
        urls.push(
          [
            `  <url>`,
            `    <loc>${BASE}/</loc>`,
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/" />`,
            ...LANGS.map(
              (l) =>
                `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}/${l}" />`,
            ),
            `    <changefreq>weekly</changefreq>`,
            `    <priority>1.0</priority>`,
            `  </url>`,
          ].join("\n"),
        );

        // One <url> per (lang, path) pair
        for (const path of PATHS) {
          for (const lang of LANGS) {
            const sub = path ? `/${path}` : "";
            const loc = `${BASE}/${lang}${sub}`;
            const alternates = [
              ...LANGS.map(
                (l) =>
                  `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}/${l}${sub}" />`,
              ),
              `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/" />`,
            ].join("\n");
            urls.push(
              [
                `  <url>`,
                `    <loc>${loc}</loc>`,
                alternates,
                `    <changefreq>${path ? "monthly" : "weekly"}</changefreq>`,
                `    <priority>${path ? "0.8" : "0.9"}</priority>`,
                `  </url>`,
              ].join("\n"),
            );
          }
        }

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
