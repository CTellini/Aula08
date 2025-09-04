import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//server.hmr.overlay : false
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
