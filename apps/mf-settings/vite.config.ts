import { createRemoteConfig } from '@tadaweb/shared-vite/index.js';

export default createRemoteConfig({
  name: 'mf_settings',
  port: 5176,
  exposePath: './SettingsApp',
  exposeModule: './src/App.tsx',
});
