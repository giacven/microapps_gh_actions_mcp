import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';

const sharedCore = {
  react: { singleton: true },
  'react-dom': { singleton: true },
  'react-intl': { singleton: true },
};

const sharedHost = {
  ...sharedCore,
  'react-router-dom': { singleton: true },
};

export function createHostConfig({ port, remotes }) {
  return defineConfig({
    plugins: [
      react(),
      federation({
        name: 'shell',
        remotes,
        shared: sharedHost,
      }),
    ],
    server: { port, strictPort: true },
    preview: { port, strictPort: true },
    build: { target: 'chrome89', minify: false },
  });
}

export function createRemoteConfig({ name, port, exposePath, exposeModule }) {
  return defineConfig({
    plugins: [
      react(),
      federation({
        name,
        filename: 'remoteEntry.js',
        exposes: { [exposePath]: exposeModule },
        shared: sharedCore,
      }),
    ],
    server: { port, strictPort: true, cors: true },
    preview: { port, strictPort: true },
    build: { target: 'chrome89', minify: false },
  });
}
