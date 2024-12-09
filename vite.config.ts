import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "tsx", // Correctly setting the loader to 'jsx' for .js files
  },
});
