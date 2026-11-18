import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import rendela from '@rendela/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(), rendela()],
})