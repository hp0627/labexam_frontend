import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/travel/', // ← This is the critical fix
  plugins: [react()],
})
