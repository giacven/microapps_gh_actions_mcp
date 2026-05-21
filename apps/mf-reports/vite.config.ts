import { createRemoteConfig } from '@tadaweb/shared-vite/index.js';

export default createRemoteConfig({
  name: 'mf_reports',
  port: 5177,
  exposePath: './ReportsApp',
  exposeModule: './src/App.tsx',
});
