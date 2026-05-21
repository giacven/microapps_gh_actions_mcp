import { useIntl } from 'react-intl';

type ButtonLabel = 'save' | 'cancel' | 'confirm' | 'delete' | 'edit';

const labelIds: Record<ButtonLabel, string> = {
  save: 'shared_ui.button.save',
  cancel: 'shared_ui.button.cancel',
  confirm: 'shared_ui.button.confirm',
  delete: 'shared_ui.button.delete',
  edit: 'shared_ui.button.edit',
};

export function Button({
  label,
  onClick,
  variant = 'primary',
}: {
  label: ButtonLabel;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}) {
  const { formatMessage } = useIntl();
  return (
    <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
      {formatMessage({ id: labelIds[label] })}
    </button>
  );
}
