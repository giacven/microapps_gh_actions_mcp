import { createRemoteConfig } from '@tadaweb/shared-vite/index.js';

export default createRemoteConfig({
  name: 'mf_checkout',
  port: 5175,
  exposePath: './CheckoutApp',
  exposeModule: './src/App.tsx',
});
