import { useIntl } from 'react-intl';

export function PriceDisplay({
  amount,
  variant = 'total',
}: {
  amount: string;
  variant?: 'total' | 'subtotal' | 'tax' | 'discount';
}) {
  const { formatMessage } = useIntl();
  const id =
    variant === 'subtotal'
      ? 'shared_business.price.subtotal'
      : variant === 'tax'
        ? 'shared_business.price.tax'
        : variant === 'discount'
          ? 'shared_business.price.discount'
          : 'shared_business.price.total';
  return <span className="price-display">{formatMessage({ id }, { amount })}</span>;
}
