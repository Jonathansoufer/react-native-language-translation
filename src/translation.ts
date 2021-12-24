import { findBestAvailableLanguage } from 'react-native-localize';
import i18next from 'i18next';

export interface ILanguageConfig {
  fallbackLanguage: string;
  resources: any;
  displayTranslationKeys?: boolean;
  customLanguage?: 'en' | 'fr' | 'nl';
  keySeparator: string | false | undefined;
}

let displayTranslationKeys: boolean | undefined = false;

export async function setup(config: ILanguageConfig) {
  const { languageTag } = findBestAvailableLanguage(
    Object.keys(config.resources || {})
  ) || { languageTag: config.fallbackLanguage };
  await i18next.init({
    lng: config.customLanguage || languageTag,
    resources: config.resources,
    interpolation: {
      escapeValue: false,
    },
    keySeparator: config.keySeparator,
  });
  displayTranslationKeys = config.displayTranslationKeys;
}

export function getTranslation(key: string, parameters?: any): string {
  const params: any = {
    ...parameters,
  };
  if (!i18next.isInitialized) {
    return ``;
  }
  if (!i18next.exists(key) && !displayTranslationKeys) {
    return `[missing "en.${key}" translation]`;
  }
  return displayTranslationKeys === true ? key : i18next.t(key, params);
}

export const t = getTranslation;
