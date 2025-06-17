import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
    coverage: {
      provider: "istanbul",
    },
  },
  base: "/people-web/",
} as UserConfig);
