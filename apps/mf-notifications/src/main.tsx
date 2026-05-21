import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import en from '../locales/en/notifications.json';
import NotificationsApp from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale="en" messages={en}>
      <NotificationsApp />
    </IntlProvider>
  </StrictMode>
);
