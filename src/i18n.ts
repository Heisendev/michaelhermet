import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const updateHtmlLanguage = (language: string) => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = language;
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    load: "languageOnly",
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    ns: ["translation"],
    defaultNS: "translation",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", updateHtmlLanguage);

if (i18n.isInitialized) {
  updateHtmlLanguage(i18n.resolvedLanguage ?? i18n.language);
} else {
  i18n.on("initialized", () => {
    updateHtmlLanguage(i18n.resolvedLanguage ?? i18n.language);
  });
}

export default i18n;