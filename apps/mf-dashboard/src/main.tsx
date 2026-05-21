import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import en from '../locales/en/dashboard.json';
import DashboardApp from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale="en" messages={en}>
      <DashboardApp />
    </IntlProvider>
  </StrictMode>
);
