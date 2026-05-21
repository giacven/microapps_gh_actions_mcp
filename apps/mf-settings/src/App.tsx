import { useIntl } from 'react-intl';
import { Button } from '@tadaweb/shared-ui';

export default function SettingsApp() {
  const { formatMessage } = useIntl();

  return (
    <div className="mf-page">
      <header className="mf-header">
        <h1>{formatMessage({ id: 'settings.title' })}</h1>
        <span className="mf-tag">{formatMessage({ id: 'settings.lokalise.badge' })}</span>
      </header>
      <p className="muted">{formatMessage({ id: 'settings.subtitle' })}</p>
      <section>
        <h2>{formatMessage({ id: 'settings.profile.title' })}</h2>
        <label>{formatMessage({ id: 'settings.profile.name' })}</label>
        <label>{formatMessage({ id: 'settings.profile.email' })}</label>
      </section>
      <section>
        <h2>{formatMessage({ id: 'settings.api.title' })}</h2>
        <p className="code-hint">{formatMessage({ id: 'settings.api_key_hint' }, { keyName: 'sk_live_xxx' })}</p>
        <Button label="save" />
      </section>
      <section className="danger">
        <h2>{formatMessage({ id: 'settings.danger_zone' })}</h2>
        <p>{formatMessage({ id: 'settings.confirm_delete' }, { confirmWord: 'DELETE' })}</p>
      </section>
    </div>
  );
}
