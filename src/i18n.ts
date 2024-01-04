// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: import("../public/locales/en/translation.json"),
      },
      fr: {
        translation: import("../public/locales/fr/translation.json"),
      },
    }, // Resources will be dynamically loaded
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

  const loadTranslations = async () => {
    const languages = ['en', 'fr', 'de']; // Add more languages as needed
  
    const translationPromises = languages.map(async (language) => {
      const translation = await import(`../public/locales/${language}/translation.json`);
      i18n.addResourceBundle(language, 'translation', translation.default, true, false);
    });
  
    await Promise.all(translationPromises);
  
    // Set the language to the initial language
    const initialLanguage = i18n.language || languages[0];
    await i18n.changeLanguage(initialLanguage);
  };

loadTranslations();

export default i18n;
