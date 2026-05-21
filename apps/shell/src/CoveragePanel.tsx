import { useIntl } from 'react-intl';
import {
  getTranslationCoverage,
  type Locale,
} from '@tadaweb/i18n-core';
import {
  getLokaliseTargetForLocale,
  lokaliseEnSources,
} from './loadLocaleBundles';

const mfs = ['dashboard', 'checkout', 'settings'] as const;

export function CoveragePanel({ locale }: { locale: Locale }) {
  const { formatMessage } = useIntl();

  if (locale === 'en') {
    return null;
  }

  return (
    <aside className="coverage-panel">
      <h3>{formatMessage({ id: 'shell.coverage.title' })}</h3>
      <ul>
        {mfs.map((mf) => {
          const en = lokaliseEnSources[mf];
          const target = getLokaliseTargetForLocale(locale, mf);
          const { percent, translated, total } = getTranslationCoverage(en, target);
          const labelId =
            mf === 'dashboard'
              ? 'shell.coverage.dashboard'
              : mf === 'checkout'
                ? 'shell.coverage.checkout'
                : 'shell.coverage.settings';
          return (
            <li key={mf}>
              <strong>{formatMessage({ id: labelId })}</strong>
              <span>
                {formatMessage(
                  { id: 'shell.coverage.percent' },
                  { percent, translated, total }
                )}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="coverage-hint">
        Keys identical to English count as untranslated (fallback A shows EN).
      </p>
    </aside>
  );
}
