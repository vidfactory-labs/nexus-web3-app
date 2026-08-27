#!/bin/bash
echo "Fixing package.json..."
cat > package.json << 'JSON'
{
  "name": "nexus-web3-app",
  "version": "1.0.0",
  "scripts": {
    "build": "vite build",
    "auto-fix": "npx eslint --fix . && npx prettier --write . && npm run build"
  },
  "dependencies": {
    "@web3modal/wagmi": "^4.0.0",
    "wagmi": "^2.0.0",
    "viem": "^2.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  }
}
JSON

echo "Fixing vite.config.js..."
cat > vite.config.js << 'JS'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
JS

echo "Installing dependencies..."
npm install

echo "Building..."
npm run build
