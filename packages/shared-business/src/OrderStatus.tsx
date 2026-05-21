import { useIntl } from 'react-intl';

export type OrderStatusValue =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

const statusIds: Record<OrderStatusValue, string> = {
  pending: 'shared_business.status.pending',
  processing: 'shared_business.status.processing',
  shipped: 'shared_business.status.shipped',
  delivered: 'shared_business.status.delivered',
  cancelled: 'shared_business.status.cancelled',
};

export function OrderStatus({ status }: { status: OrderStatusValue }) {
  const { formatMessage } = useIntl();
  return (
    <span className={`order-status order-status--${status}`}>
      {formatMessage({ id: statusIds[status] })}
    </span>
  );
}
