import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        login: "index.html",
        app: "app.html",
      },
    },
  },
});
