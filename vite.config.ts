import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// SPA build with Cloudflare adapter enabled so the Lovable-hosted Worker
// can properly bundle h3/server deps. The TanStack Start SPA mode still
// prerenders the shell at /index so the site behaves as a static SPA on
// any host (Vercel/Netlify pick up dist/client), while the Lovable Worker
// keeps working in production.
export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index",
      },
    },
  },
  vite: {
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  },
});
