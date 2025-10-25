import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
   react(),
   VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'icons/apple-touch-icon.png',
        'masked-icon.svg',
        'icons/pwa-48x48.png',
        'icons/pwa-72x72.png',
        'icons/pwa-96x96.png',
        'icons/pwa-128x128.png',
        'icons/pwa-144x144.png',
        'icons/pwa-152x152.png',
        'icons/pwa-192x192.png',
        'icons/pwa-256x256.png',
        'icons/pwa-384x384.png',
        'icons/pwa-512x512.png',
      ],
      manifest: {
        name: 'FirstCoin', // From your detailed manifest
        short_name: 'FirstCoin', // From your detailed manifest
        description: 'My awesome FirstCoin PWA!', // You can refine this
        theme_color: '#000000', // From your detailed manifest
        background_color: '#ffffff', // From your detailed manifest
        start_url: '/', // From your detailed manifest
        display: 'standalone', // From your detailed manifest
        icons: [
          {
            src: 'icons/pwa-48x48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-512x512.png', // Maskable icon for Android adaptive icons
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    }),
],
})
