import { getLocales } from 'react-native-localize';

export function getLanguage(): 'fr' | 'nl' | 'en' {
  const locale = getLocales()[0];
  switch (locale.languageCode) {
    case 'nl':
    case 'fr':
    case 'en':
      return locale.languageCode;
    default:
      return 'en';
  }
}
