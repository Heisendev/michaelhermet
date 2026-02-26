import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const languages = [
  { nameKey: "languages.items.french.name", levelKey: "languages.items.french.level", flag: "🇫🇷" },
  { nameKey: "languages.items.english.name", levelKey: "languages.items.english.level", flag: "🇬🇧" },
  { nameKey: "languages.items.portuguese.name", levelKey: "languages.items.portuguese.level", flag: "🇧🇷" },
];

const LanguagesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">{t("languages.label")}</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-12">
            {t("languages.title.prefix")} <span className="italic text-gradient">{t("languages.title.highlight")}</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.nameKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 text-center hover:border-primary/30 transition-colors"
              >
                <span className="text-5xl mb-4 block">{lang.flag}</span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">{t(lang.nameKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(lang.levelKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;
