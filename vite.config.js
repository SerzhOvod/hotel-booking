import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Simulates a browser environment in Node.js
    globals: true, // Allows using describe, test, expect without explicit imports
    setupFiles: './test/setup.js', // (or .js) Global test setup file
  },
});
