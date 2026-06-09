import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Force Nitro on when building outside the Lovable sandbox (e.g. Vercel).
  // Nitro auto-detects the Vercel preset via the VERCEL env var and emits the
  // correct `.vercel/output` build, which restores SSR for `/` on Vercel.
  nitro: true,
});
