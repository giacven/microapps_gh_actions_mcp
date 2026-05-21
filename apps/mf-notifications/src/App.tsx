import { useIntl } from 'react-intl';

export default function NotificationsApp() {
  const { formatMessage } = useIntl();

  const toasts = [
    { id: 'notifications.toast.order_shipped', values: { orderId: '1042' } },
    { id: 'notifications.toast.payment_received', values: { amount: '€89.00' } },
    { id: 'notifications.toast.promo', values: { percent: 20, endDate: '2026-06-01' } },
  ];

  return (
    <div className="mf-page">
      <header className="mf-header">
        <h1>{formatMessage({ id: 'notifications.title' })}</h1>
        <span className="mf-tag mf-tag--local">{formatMessage({ id: 'notifications.local.badge' })}</span>
      </header>
      <p className="muted">{formatMessage({ id: 'notifications.subtitle' })}</p>
      <p>{formatMessage({ id: 'notifications.unread_count' }, { count: 3 })}</p>
      <ul className="toast-list">
        {toasts.map((t) => (
          <li key={t.id}>{formatMessage({ id: t.id }, t.values)}</li>
        ))}
      </ul>
    </div>
  );
}
