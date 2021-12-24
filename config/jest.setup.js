jest.mock('react-native-config', () => ({
  ENV: 'DEV',
}));

jest.mock('react-native-localize', () => ({
  findBestAvailableLanguage: traductions =>
    traductions.length > 0 ? { languageTag: 'fr-BE', isRTL: false } : undefined,
  getLocales: () => [
    {
      countryCode: 'BE',
      languageTag: 'fr-BE',
      languageCode: 'fr',
      isRTL: false,
    },
    {
      countryCode: 'BE',
      languageTag: 'nl-BE',
      languageCode: 'nl',
      isRTL: false,
    },
    {
      countryCode: 'BE',
      languageTag: 'en-US',
      languageCode: 'en',
      isRTL: false,
    },
  ],
}));
