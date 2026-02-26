import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const stack = [
  {
    categoryKey: "core",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    categoryKey: "ecosystem",
    items: ["Next.js", "Node.js", "Redux", "React Query", "React Router", "AWS"],
  },
  {
    categoryKey: "styling",
    items: ["Tailwind CSS", "Styled Components", "CSS Modules", "Sass"],
  },
  {
    categoryKey: "testingA11y",
    items: ["Jest", "React Testing Library", "Cypress", "axe-core", "NVDA / VoiceOver"],
  },
  {
    categoryKey: "tooling",
    items: ["Vite", "Webpack", "Git", "GitHub Actions", "Storybook"],
  },
];

const StackSection = () => {
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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">{t("stack.label")}</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">
            {t("stack.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {stack.map(({ categoryKey, items }, catIdx) => (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                {t(`stack.categories.${categoryKey}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full border border-border text-foreground hover:border-primary/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;