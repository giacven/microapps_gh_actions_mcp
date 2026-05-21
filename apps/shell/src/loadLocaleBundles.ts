import type { FlatMessages, Locale } from '@tadaweb/i18n-core';
import { buildMessagesWithFallback, mergeMessages } from '@tadaweb/i18n-core';

import shellEn from '../locales/en/shell.json';
import shellDe from '../locales/de/shell.json';
import shellFr from '../locales/fr/shell.json';

import dashboardEn from '../../mf-dashboard/locales/en/dashboard.json';
import dashboardDe from '../../mf-dashboard/locales/de/dashboard.json';
import dashboardFr from '../../mf-dashboard/locales/fr/dashboard.json';

import checkoutEn from '../../mf-checkout/locales/en/checkout.json';
import checkoutDe from '../../mf-checkout/locales/de/checkout.json';
import checkoutFr from '../../mf-checkout/locales/fr/checkout.json';

import settingsEn from '../../mf-settings/locales/en/settings.json';
import settingsDe from '../../mf-settings/locales/de/settings.json';
import settingsFr from '../../mf-settings/locales/fr/settings.json';

import reportsEn from '../../mf-reports/locales/en/reports.json';
import reportsDe from '../../mf-reports/locales/de/reports.json';
import reportsFr from '../../mf-reports/locales/fr/reports.json';

import notificationsEn from '../../mf-notifications/locales/en/notifications.json';
import notificationsDe from '../../mf-notifications/locales/de/notifications.json';
import notificationsFr from '../../mf-notifications/locales/fr/notifications.json';

import sharedUiEn from '../../../packages/shared-ui/locales/en/shared_ui.json';
import sharedUiDe from '../../../packages/shared-ui/locales/de/shared_ui.json';
import sharedUiFr from '../../../packages/shared-ui/locales/fr/shared_ui.json';

import sharedBizEn from '../../../packages/shared-business/locales/en/shared_business.json';
import sharedBizDe from '../../../packages/shared-business/locales/de/shared_business.json';
import sharedBizFr from '../../../packages/shared-business/locales/fr/shared_business.json';

const enBase: FlatMessages = mergeMessages(
  shellEn,
  dashboardEn,
  checkoutEn,
  settingsEn,
  reportsEn,
  notificationsEn,
  sharedUiEn,
  sharedBizEn
);

const localeTargets: Record<Exclude<Locale, 'en'>, FlatMessages> = {
  de: mergeMessages(
    shellDe,
    dashboardDe,
    checkoutDe,
    settingsDe,
    reportsDe,
    notificationsDe,
    sharedUiDe,
    sharedBizDe
  ),
  fr: mergeMessages(
    shellFr,
    dashboardFr,
    checkoutFr,
    settingsFr,
    reportsFr,
    notificationsFr,
    sharedUiFr,
    sharedBizFr
  ),
};

export async function loadLocaleBundles(locale: Locale): Promise<FlatMessages> {
  if (locale === 'en') {
    return enBase;
  }
  return buildMessagesWithFallback(enBase, localeTargets[locale]);
}

/** English source maps for Lokalise-connected MFs (coverage panel). */
export const lokaliseEnSources = {
  dashboard: dashboardEn as FlatMessages,
  checkout: checkoutEn as FlatMessages,
  settings: settingsEn as FlatMessages,
};

export function getLokaliseTargetForLocale(
  locale: Locale,
  mf: keyof typeof lokaliseEnSources
): FlatMessages {
  if (locale === 'en') return lokaliseEnSources[mf];
  const map = {
    de: { dashboard: dashboardDe, checkout: checkoutDe, settings: settingsDe },
    fr: { dashboard: dashboardFr, checkout: checkoutFr, settings: settingsFr },
  };
  return map[locale as 'de' | 'fr'][mf] as FlatMessages;
}
