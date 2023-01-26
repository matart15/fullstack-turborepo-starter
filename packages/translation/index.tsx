// import { LANGUAGE_KEY } from 'constants/index';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ja from './locales/ja.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: localStorage.getItem(LANGUAGE_KEY) || 'ja',
    // lng: 'ja',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .catch((err: any) => {
    throw err;
  });

export default i18n;
