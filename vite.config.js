import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}"],
      },
      includeAssets: ["img/icons/*.png", "robots.txt", "sitemap.xml"],
      manifest: {
        id: "/",
        name: "Adegbite Famosa Portfolio",
        short_name: "adefamosa",
        description:
          "Frontend Software Engineer specializing in React, Next.js, and TypeScript — building HealthTech, EdTech, and enterprise applications.",
        theme_color: "#52a8f2",
        background_color: "#52a8f2",
        display: "standalone",
        icons: [
          {
            src: "img/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "img/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "img/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "img/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "img/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "img/screenshots/desktop-home.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
            label: "Portfolio home page on desktop",
          },
          {
            src: "img/screenshots/mobile-home.png",
            sizes: "750x1334",
            type: "image/png",
            form_factor: "narrow",
            label: "Portfolio home page on mobile",
          },
        ],
      },
    }),
  ],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});