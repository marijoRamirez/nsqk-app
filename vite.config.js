import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
 
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Registro App',
        short_name: 'Registro',
        description: 'Aplicacion de registro de datos, instalable y funciona offline',
        theme_color: '#863bff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/nsqk192.png', // Diagonal agregada
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/nsqk512.png', // Diagonal agregada
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/nsqk512.png', // Diagonal agregada
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
})
