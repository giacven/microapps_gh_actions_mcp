import { useIntl } from 'react-intl';

export default function ReportsApp() {
  const { formatMessage } = useIntl();

  return (
    <div className="mf-page">
      <header className="mf-header">
        <h1>{formatMessage({ id: 'reports.title' })}</h1>
        <span className="mf-tag mf-tag--local">{formatMessage({ id: 'reports.local.badge' })}</span>
      </header>
      <p className="muted">{formatMessage({ id: 'reports.subtitle' })}</p>
      <nav className="tabs">
        {(['overview', 'sales', 'inventory'] as const).map((tab) => (
          <button key={tab} type="button" className="tab">
            {formatMessage({ id: `reports.tab.${tab}` })}
          </button>
        ))}
      </nav>
      <p>{formatMessage({ id: 'reports.rows_count' }, { count: 42 })}</p>
      <button type="button" className="btn btn-primary">
        {formatMessage({ id: 'reports.generate' })}
      </button>
    </div>
  );
}
