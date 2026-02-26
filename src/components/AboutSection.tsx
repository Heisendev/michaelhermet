import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">{t("about.label")}</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
            {t("about.title.prefix")}
            <br />
            <span className="italic text-gradient">{t("about.title.highlight")}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-foreground leading-relaxed">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;