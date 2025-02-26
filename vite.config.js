import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Ensure your local server runs on this port
    proxy: {
      "/spline-design": {
        target: "https://my.spline.design",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/spline-design/, ""),
        logLevel: "debug",
      },
    },
  },
});



