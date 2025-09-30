import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Using custom domain via CNAME, so base can be '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
});


