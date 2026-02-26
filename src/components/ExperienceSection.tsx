import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    periodKey: "experience.items.principal.period",
    roleKey: "experience.items.principal.role",
    companyKey: "experience.items.principal.company",
    descriptionKey: "experience.items.principal.description",
  },
  {
    periodKey: "experience.items.frontend.period",
    roleKey: "experience.items.frontend.role",
    companyKey: "experience.items.frontend.company",
    descriptionKey: "experience.items.frontend.description",
  },
  {
    periodKey: "experience.items.web.period",
    roleKey: "experience.items.web.role",
    companyKey: "experience.items.web.company",
    descriptionKey: "experience.items.web.description",
  },
  {
    periodKey: "experience.items.consultant.period",
    roleKey: "experience.items.consultant.role",
    companyKey: "experience.items.consultant.company",
    descriptionKey: "experience.items.consultant.description",
  },
];

const ExperienceSection = () => {
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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">{t("experience.label")}</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">
            {t("experience.title")}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-[140px_1fr] md:gap-8"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-[140px] top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />

                <p className="text-muted-foreground text-sm font-body mb-2 md:mb-0 md:text-right md:pr-2">
                  {t(exp.periodKey)}
                </p>

                <div className="md:pl-8">
                  <h3 className="text-foreground font-body font-bold text-lg">{t(exp.roleKey)}</h3>
                  <p className="text-primary text-sm mb-3">{t(exp.companyKey)}</p>
                  <p className="text-foreground leading-relaxed text-sm">
                    {t(exp.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;