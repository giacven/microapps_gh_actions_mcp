import { useEffect, useState } from 'react';
import { IntlProvider, useIntl } from 'react-intl';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {
  createIntlErrorHandler,
  type Locale,
  SUPPORTED_LOCALES,
} from '@tadaweb/i18n-core';
import { CoveragePanel } from './CoveragePanel';
import { loadLocaleBundles } from './loadLocaleBundles';
import {
  CheckoutRemote,
  DashboardRemote,
  NotificationsRemote,
  ReportsRemote,
  SettingsRemote,
} from './RemoteLoader';

function ShellLayout({
  locale,
  onLocaleChange,
}: {
  locale: Locale;
  onLocaleChange: (l: Locale) => void;
}) {
  const { formatMessage } = useIntl();

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="logo">{formatMessage({ id: 'shell.app_name' })}</h1>
        <nav className="nav">
          <Link to="/">{formatMessage({ id: 'shell.nav.home' })}</Link>
          <Link to="/dashboard">{formatMessage({ id: 'shell.nav.dashboard' })}</Link>
          <Link to="/checkout">{formatMessage({ id: 'shell.nav.checkout' })}</Link>
          <Link to="/settings">{formatMessage({ id: 'shell.nav.settings' })}</Link>
          <Link to="/reports">{formatMessage({ id: 'shell.nav.reports' })}</Link>
          <Link to="/notifications">{formatMessage({ id: 'shell.nav.notifications' })}</Link>
        </nav>
        <label className="locale-switcher">
          {formatMessage({ id: 'shell.locale.label' })}
          <select
            value={locale}
            onChange={(e) => onLocaleChange(e.target.value as Locale)}
          >
            {SUPPORTED_LOCALES.map((l) => (
              <option key={l} value={l}>
                {formatMessage({ id: `shell.locale.${l}` })}
              </option>
            ))}
          </select>
        </label>
      </header>
      <div className="app-body">
        <CoveragePanel locale={locale} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardRemote />} />
            <Route path="/checkout" element={<CheckoutRemote />} />
            <Route path="/settings" element={<SettingsRemote />} />
            <Route path="/reports" element={<ReportsRemote />} />
            <Route path="/notifications" element={<NotificationsRemote />} />
          </Routes>
        </main>
      </div>
      <footer className="app-footer">
        <p>{formatMessage({ id: 'shell.footer.copyright' }, { year: 2026 })}</p>
        <p className="muted">{formatMessage({ id: 'shell.footer.lokalise_poc' })}</p>
      </footer>
    </div>
  );
}

function HomePage() {
  const { formatMessage } = useIntl();
  return (
    <div className="home">
      <h2>{formatMessage({ id: 'shell.home.title' })}</h2>
      <p>{formatMessage({ id: 'shell.home.description' }, { count: 5 })}</p>
      <ul>
        <li>{formatMessage({ id: 'shell.home.lokalise_mfs' })}</li>
        <li>{formatMessage({ id: 'shell.home.local_mfs' })}</li>
      </ul>
    </div>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadLocaleBundles(locale).then((m) => {
      if (!cancelled) setMessages(m);
    });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  if (!messages) {
    return <div className="app-loading">Loading translations…</div>;
  }

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      defaultLocale="en"
      onError={createIntlErrorHandler(typeof import.meta !== 'undefined' && import.meta.env?.DEV === true)}
    >
      <BrowserRouter>
        <ShellLayout locale={locale} onLocaleChange={setLocale} />
      </BrowserRouter>
    </IntlProvider>
  );
}
