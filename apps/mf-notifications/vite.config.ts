import { createRemoteConfig } from '@tadaweb/shared-vite/index.js';

export default createRemoteConfig({
  name: 'mf_notifications',
  port: 5178,
  exposePath: './NotificationsApp',
  exposeModule: './src/App.tsx',
});
