import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: [
      'b524-2405-201-5c34-e851-65ae-7b46-777d-7339.ngrok-free.app',
      '2bbc-2405-201-5c34-e851-601d-867e-786a-aede.ngrok-free.app'
    ]
  }
})
