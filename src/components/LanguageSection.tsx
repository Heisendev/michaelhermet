import { motion } from "framer-motion";

const languages = [
  { name: "French", level: "Native", flag: "🇫🇷" },
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Portuguese", level: "Learning", flag: "🇧🇷" },
];

const LanguagesSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Languages</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-12">
            Speaking across <span className="italic text-gradient">borders</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 text-center hover:border-primary/30 transition-colors"
              >
                <span className="text-5xl mb-4 block">{lang.flag}</span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">{lang.name}</h3>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;
