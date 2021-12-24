import i18next from 'i18next';
import Config from 'react-native-config';
import { getTranslation, ILanguageConfig, setup, t } from '../translation';

describe('translation', () => {
  let resources: any = null;
  beforeEach(() => {
    resources = null;
    jest.resetModules();
    jest.resetAllMocks();
  });

  it('should display empty string if translations have not been initialized', () => {
    expect(getTranslation('welcome')).toBe(
      ''
    );
  });

  it('should display missing message after translations have been initialized', () => {
    givenTranslations();
    givenSetupIsCalled({
      fallbackLanguage: 'en',
      resources,
      displayTranslationKeys: false,
      keySeparator: undefined,
    });
    expect(getTranslation('zaza')).toBe(
      '[missing "en.zaza" translation]'
    );
  });

  it('should set up the language', () => {
    givenTranslations();
    givenSetupIsCalled({
      fallbackLanguage: 'en',
      resources,
      displayTranslationKeys: false,
      keySeparator: undefined,
    });
    thenTranslationsAreSet('en');
    thenTranslationsAreSet('fr');
    thenTranslationsAreSet('nl');
  });

  it('should set up the language again', () => {
    givenTranslations();
    givenSetupIsCalled({
      fallbackLanguage: 'en',
      resources,
      displayTranslationKeys: true,
      keySeparator: undefined,
    });
    thenTranslationsAreSet('en');
  });

  it('should display translation', () => {
    givenSetupIsCalled({
      fallbackLanguage: 'en',
      resources,
      displayTranslationKeys: true,
      keySeparator: undefined,
    });
    expect(getTranslation('welcome')).toBe('welcome');
  });

  it('should get the translation in the correct language', async () => {
    givenTranslations();
    givenSetupIsCalled({
      fallbackLanguage: 'en',
      resources,
      displayTranslationKeys: false,
      keySeparator: undefined,
    });
    await i18next.changeLanguage('nl');
    expect(getTranslation('welcome')).toBe('Welkom');
  });

  it('should get the translation in the correct language with parameters', async () => {
    givenTranslations();
    givenEnvIs('ITT');
    givenSetupIsCalled({
      fallbackLanguage: 'en',
      resources,
      displayTranslationKeys: false,
      keySeparator: undefined,
    });
    await i18next.changeLanguage('nl');
    expect(t('welcome', { scope: 'test' })).toBe('Welkom');
  });

  function givenEnvIs(value: string) {
    Config.ENV = value;
  }

  async function givenSetupIsCalled(config: ILanguageConfig) {
    await setup(config);
  }

  function givenTranslations() {
    resources = {
      en: {
        translation: {
          welcome: 'Welcome',
        },
      },
      fr: {
        translation: {
          welcome: 'Welcome',
        },
      },
      nl: {
        translation: {
          welcome: 'Welkom',
        },
      },
    };
  }

  function thenTranslationsAreSet(lang: string) {
    expect(i18next.getDataByLanguage(lang)).toBe(resources[lang]);
  }
});
