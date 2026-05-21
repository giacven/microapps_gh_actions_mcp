import { useIntl } from 'react-intl';

type BadgeVariant = 'new' | 'beta' | 'sale';

const variantIds: Record<BadgeVariant, string> = {
  new: 'shared_ui.badge.new',
  beta: 'shared_ui.badge.beta',
  sale: 'shared_ui.badge.sale',
};

export function Badge({ variant }: { variant: BadgeVariant }) {
  const { formatMessage } = useIntl();
  return (
    <span className="badge" data-variant={variant}>
      {formatMessage({ id: variantIds[variant] })}
    </span>
  );
}
