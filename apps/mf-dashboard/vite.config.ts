import { createRemoteConfig } from '@tadaweb/shared-vite/index.js';

export default createRemoteConfig({
  name: 'mf_dashboard',
  port: 5174,
  exposePath: './DashboardApp',
  exposeModule: './src/App.tsx',
});
