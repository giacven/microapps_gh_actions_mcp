import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import en from '../locales/en/reports.json';
import ReportsApp from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale="en" messages={en}>
      <ReportsApp />
    </IntlProvider>
  </StrictMode>
);
