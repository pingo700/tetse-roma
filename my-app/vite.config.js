import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr";
import Unfonts from 'unplugin-fonts/vite'
import laravel from 'laravel-vite-plugin';


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://romapulseiras.com.br',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    laravel({
      input: 'resources/js/main.tsx',
      refresh: true,
  }),
    react(),
    svgr({
      svgrOptions: { 
        exportType: 'named',
        ref: true, 
        svgo: false, 
        titleProp: true 
      },
      include: '**/*.svg',
    }),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Geist',
            src: './src/assets/fonts/GeistVF.woff2',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./resources/js"),
    },
  },
})