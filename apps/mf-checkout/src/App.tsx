import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from '@tadaweb/shared-ui';
import { OrderStatus, PriceDisplay } from '@tadaweb/shared-business';

export default function CheckoutApp() {
  const { formatMessage } = useIntl();
  const itemCount = 3;

  return (
    <div className="mf-page">
      <header className="mf-header">
        <h1>{formatMessage({ id: 'checkout.title' })}</h1>
        <span className="mf-tag">{formatMessage({ id: 'checkout.lokalise.badge' })}</span>
      </header>
      <p>{formatMessage({ id: 'checkout.greeting' }, { userName: 'Alex' })}</p>
      <p className="muted">{formatMessage({ id: 'checkout.subtitle' })}</p>
      <OrderStatus status="processing" />
      <p>{formatMessage({ id: 'checkout.items_count' }, { count: itemCount })}</p>
      <PriceDisplay amount="€124.50" variant="total" />
      <p>{formatMessage({ id: 'checkout.summary.total' }, { total: '€124.50' })}</p>
      <label className="terms">
        <input type="checkbox" />
        <FormattedMessage
          id="checkout.terms_rich"
          values={{
            link: (chunks) => <a href="#terms">{chunks}</a>,
            code: (chunks) => <code>{chunks}</code>,
          }}
        />
      </label>
      <div className="actions">
        <Button label="confirm" variant="primary" />
        <Button label="cancel" variant="secondary" />
      </div>
    </div>
  );
}
