import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000", // Your backend server's URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optionally remove '/api' prefix
      },
    },
  },
});
