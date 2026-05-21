export type Locale = 'en' | 'de' | 'fr';

export type FlatMessages = Record<string, string>;

export const SUPPORTED_LOCALES: Locale[] = ['en', 'de', 'fr'];

export const DEFAULT_LOCALE: Locale = 'en';

/** Shallow-merge multiple flat message maps (later wins). */
export function mergeMessages(...parts: FlatMessages[]): FlatMessages {
  return Object.assign({}, ...parts);
}

/**
 * App fallback (strategy A): English base under target locale so missing keys show EN.
 */
export function buildMessagesWithFallback(
  baseEn: FlatMessages,
  target: FlatMessages
): FlatMessages {
  return { ...baseEn, ...target };
}

/** Keys where target value is missing or identical to English (likely untranslated). */
export function getUntranslatedKeys(
  baseEn: FlatMessages,
  target: FlatMessages
): string[] {
  return Object.keys(baseEn).filter((key) => {
    const t = target[key];
    return t === undefined || t === '' || t === baseEn[key];
  });
}

export function getTranslationCoverage(
  baseEn: FlatMessages,
  target: FlatMessages
): { total: number; translated: number; percent: number } {
  const keys = Object.keys(baseEn);
  const total = keys.length;
  const translated = keys.filter((k) => {
    const t = target[k];
    return t !== undefined && t !== '' && t !== baseEn[k];
  }).length;
  return {
    total,
    translated,
    percent: total === 0 ? 100 : Math.round((translated / total) * 100),
  };
}

export function createIntlErrorHandler(devMode: boolean) {
  return (err: { code?: string; message?: string }) => {
    if (devMode && err.code === 'MISSING_TRANSLATION') {
      console.warn('[i18n]', err.message);
    }
  };
}
