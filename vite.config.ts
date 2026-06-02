import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static SPA build: disable the Cloudflare adapter and opt TanStack Start
// into SPA mode so the build emits a plain static site (no SSR) that any
// host (Vercel, Netlify, static file server, etc.) can serve.
export default defineConfig({
  cloudflare: false,
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
