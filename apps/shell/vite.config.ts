import { createHostConfig } from '@tadaweb/shared-vite/index.js';

export default createHostConfig({
  port: 5173,
  remotes: {
    mf_dashboard: 'mf_dashboard@http://localhost:5174/remoteEntry.js',
    mf_checkout: 'mf_checkout@http://localhost:5175/remoteEntry.js',
    mf_settings: 'mf_settings@http://localhost:5176/remoteEntry.js',
    mf_reports: 'mf_reports@http://localhost:5177/remoteEntry.js',
    mf_notifications: 'mf_notifications@http://localhost:5178/remoteEntry.js',
  },
});
