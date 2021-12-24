import { getLocales } from 'react-native-localize';

import { getLanguage } from '../language';

jest.mock('react-native-localize', () => ({
  getLocales: jest.fn(),
}));

describe('getLanguage', () => {
  it('should return the current system language when it is nl', () => {
    givenI18NReturnsNl();
    expect(getLanguage()).toBe('nl');
  });

  it('should return the current system language when it is fr', () => {
    givenI18NReturnsFr();
    expect(getLanguage()).toBe('fr');
  });

  it('should return the current system language when it is en', () => {
    givenI18NReturnsEn();
    expect(getLanguage()).toBe('en');
  });

  it('should return en when given an unsuported language', () => {
    givenI18NReturnsRu();
    expect(getLanguage()).toBe('en');
  });
});

function givenI18NReturnsNl() {
  // @ts-ignore
  getLocales.mockReturnValue([{
    countryCode: 'BE',
    languageTag: 'nl-BE',
    languageCode: 'nl',
    isRTL: false,
  }]);
}

function givenI18NReturnsFr() {
  // @ts-ignore
  getLocales.mockReturnValue([{
    countryCode: 'BE',
    languageTag: 'fr-BE',
    languageCode: 'fr',
    isRTL: false,
  }]);
}

function givenI18NReturnsEn() {
  // @ts-ignore
  getLocales.mockReturnValue([{
    countryCode: 'BE',
    languageTag: 'en-US',
    languageCode: 'en',
    isRTL: false,
  }]);
}

function givenI18NReturnsRu() {
  // @ts-ignore
  getLocales.mockReturnValue([{
    countryCode: 'BE',
    languageTag: 'ru-RU',
    languageCode: 'ru',
    isRTL: false,
  }]);
}
