import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const interests = [
  {
    emoji: "🎾",
    titleKey: "interests.items.tennis.title",
    descriptionKey: "interests.items.tennis.description",
  },
  {
    emoji: "🍳",
    titleKey: "interests.items.cooking.title",
    descriptionKey: "interests.items.cooking.description",
  },
  {
    emoji: "♟️",
    titleKey: "interests.items.chess.title",
    descriptionKey: "interests.items.chess.description",
  },
  {
    emoji: "🎸",
    titleKey: "interests.items.guitar.title",
    descriptionKey: "interests.items.guitar.description",
  },
  
];

const InterestsSection = () => {
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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">{t("interests.label")}</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">
            {t("interests.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <span className="text-4xl mb-4 block">{interest.emoji}</span>
              <h3 className="text-foreground font-display font-bold text-xl mb-2">{t(interest.titleKey)}</h3>
              <p className="text-foreground text-sm leading-relaxed">{t(interest.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;