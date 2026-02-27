import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    titleKey: "portfolio.projects.tennisLab.title",
    descriptionKey: "portfolio.projects.tennisLab.description",
    tags: ["React", "Node.js", "BetterSql", "Express"],
    image: "/tennislab.png",
    liveUrl: "http://tennislab.mikahermet.fr",
    repoUrl: "https://github.com/Heisendev/tennislab",
  },
  {
    titleKey: "portfolio.projects.accessibilityDashboard.title",
    descriptionKey: "portfolio.projects.accessibilityDashboard.description",
    tags: ["React", "Node.js", "Chart.js", "Pa11y"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "https://github.com/Heisendev/AccessibilityMonitor",
  },
];

const PortfolioSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("portfolio.title")}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectTitle = t(project.titleKey);

            return (
              <motion.div
                key={project.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors duration-300"
              >
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={t("portfolio.screenshotAlt", { title: projectTitle })}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {projectTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {t(project.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl !== "#"  && <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      aria-label={t("portfolio.liveDemoAria", { title: projectTitle })}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t("portfolio.liveDemo")}
                    </a> }
                    <a
                      href={project.repoUrl}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      aria-label={t("portfolio.sourceAria", { title: projectTitle })}
                    >
                      <Github className="w-4 h-4" />
                      {t("portfolio.source")}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
