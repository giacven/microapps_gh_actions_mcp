import { Component, Suspense, lazy, type ReactNode } from 'react';
import { useIntl } from 'react-intl';

function RemoteFallback() {
  const { formatMessage } = useIntl();
  return <p className="loading">{formatMessage({ id: 'shell.loading' })}</p>;
}

class RemoteErrorBoundary extends Component<
  { name: string; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <RemoteErrorDisplay name={this.props.name} />;
    }
    return this.props.children;
  }
}

function RemoteErrorDisplay({ name }: { name: string }) {
  const { formatMessage } = useIntl();
  return (
    <p className="error">
      {formatMessage({ id: 'shell.error.remote' }, { name })}
    </p>
  );
}

export function RemoteLoader({
  name,
  loader,
}: {
  name: string;
  loader: () => Promise<{ default: React.ComponentType }>;
}) {
  const Remote = lazy(loader);
  return (
    <RemoteErrorBoundary name={name}>
      <Suspense fallback={<RemoteFallback />}>
        <Remote />
      </Suspense>
    </RemoteErrorBoundary>
  );
}

export const DashboardRemote = () => (
  <RemoteLoader
    name="mf-dashboard"
    loader={() => import('mf_dashboard/DashboardApp')}
  />
);

export const CheckoutRemote = () => (
  <RemoteLoader
    name="mf-checkout"
    loader={() => import('mf_checkout/CheckoutApp')}
  />
);

export const SettingsRemote = () => (
  <RemoteLoader
    name="mf-settings"
    loader={() => import('mf_settings/SettingsApp')}
  />
);

export const ReportsRemote = () => (
  <RemoteLoader
    name="mf-reports"
    loader={() => import('mf_reports/ReportsApp')}
  />
);

export const NotificationsRemote = () => (
  <RemoteLoader
    name="mf-notifications"
    loader={() => import('mf_notifications/NotificationsApp')}
  />
);
