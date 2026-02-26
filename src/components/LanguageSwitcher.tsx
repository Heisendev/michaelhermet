import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const activeLanguage = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div className="inline-flex rounded-full border border-border bg-card/90 backdrop-blur-sm p-1">
      {["en", "fr"].map((languageCode) => {
        const isActive = activeLanguage?.startsWith(languageCode);

        return (
          <button
            key={languageCode}
            type="button"
            onClick={() => i18n.changeLanguage(languageCode)}
            className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-pressed={isActive}
          >
            {t(`language.${languageCode}`)}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;