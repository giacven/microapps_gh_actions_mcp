import { FormattedMessage, useIntl } from 'react-intl';
import { Badge } from '@tadaweb/shared-ui';

export default function DashboardApp() {
  const { formatMessage } = useIntl();
  const itemCount = 12;

  return (
    <div className="mf-page">
      <header className="mf-header">
        <h1>{formatMessage({ id: 'dashboard.title' })}</h1>
        <Badge variant="beta" />
        <span className="mf-tag">{formatMessage({ id: 'dashboard.lokalise.badge' })}</span>
      </header>
      <p>{formatMessage({ id: 'dashboard.welcome' }, { userName: 'Alex' })}</p>
      <p className="muted">{formatMessage({ id: 'dashboard.subtitle' })}</p>
      <p>{formatMessage({ id: 'dashboard.date_range' }, { startDate: '2026-05-01', endDate: '2026-05-21' })}</p>
      <div className="kpi-grid">
        {(['revenue', 'orders', 'customers', 'conversion'] as const).map((kpi) => (
          <div key={kpi} className="kpi-card">
            <span className="kpi-label">{formatMessage({ id: `dashboard.kpi.${kpi}` })}</span>
          </div>
        ))}
      </div>
      <p>{formatMessage({ id: 'dashboard.activity.items' }, { count: itemCount })}</p>
      <p>
        <FormattedMessage
          id="dashboard.help"
          values={{
            link: (chunks) => <a href="#docs">{chunks}</a>,
          }}
        />
      </p>
    </div>
  );
}
