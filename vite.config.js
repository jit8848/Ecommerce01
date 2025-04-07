import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import url from "./src/Data/url";  // Ensure correct import

// Define constants
const defines = {
  API_URL: "https://api.example.com",
  // Add other constants as needed
};

export default defineConfig({
  define: {
    __DEFINES__: JSON.stringify(defines), // Inject constants into the build
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: url,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
