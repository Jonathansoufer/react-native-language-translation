# react-native-language-translation

## Getting started

`$ npm install react-native-language-translation --save`

## Usage
```javascript
import {setup, getTranslation} from 'react-native-language-translation';

setup({
    fallbackLanguage: 'en',
    transaltions: {
      en: {
        welcome: 'Welcome',
      },
      fr: {
        welcome: 'Welcome',
      },
      nl: {
        welcome: 'Welkom',
      },
    }
})

// In you code/templates
getTranslation('key')

// Or with optional parameters based on https://github.com/fnando/i18n-js
getTranslation('key', params)
```

### ChangeLog

### Version 2.0.5

 * Can return translation key instead of the translation
 * Can display selected language

### Version 2.0.3

 * Turn on default fallbacks

### Version 2.0.0

 * Use i18n-js instead of react-native-i18n

### Version 1.1.0

 * Simplified code and fixed fallback to default locale

### Version 1.0.1

 * Implemented basic features

### Version 1.0.0

 * Library created


