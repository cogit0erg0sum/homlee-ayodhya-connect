import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // dynamically import ESM-only dev plugin only in development to avoid ESM/CJS
  // issues when Vite loads the config in build environments
  const plugins = [react()];

  if (mode === "development") {
    try {
      const mod = await import("lovable-tagger");
      if (mod && typeof mod.componentTagger === "function") {
        plugins.push(mod.componentTagger());
      }
    } catch (err) {
      // swallow — plugin is optional during CI/build
      // eslint-disable-next-line no-console
      console.warn("lovable-tagger not loaded:", err && (err as Error).message);
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: plugins.filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
