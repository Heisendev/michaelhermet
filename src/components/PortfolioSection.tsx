import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    titleKey: "portfolio.projects.tennisLab.title",
    descriptionKey: "portfolio.projects.tennisLab.description",
    tags: ["React", "Node.js", "BetterSql", "Express"],
    images: ["/tennislab1.png", "/tennislab2.png"],
    liveUrl: "http://tennislab.mikahermet.fr",
    repoUrl: "https://github.com/Heisendev/tennislab",
  },
  {
    titleKey: "portfolio.projects.accessibilityDashboard.title",
    descriptionKey: "portfolio.projects.accessibilityDashboard.description",
    tags: ["React", "Chart.js", "Axe-core", "Playwright", "Docker"],
    images: ["/a11ymonitor1.png", "/a11ymonitor2.png"],
    liveUrl: "#",
    repoUrl: "https://github.com/Heisendev/AccessibilityMonitor",
  },
];

const ImageSlideshow = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);
  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };
  return (
    <div className="aspect-video w-full overflow-hidden bg-muted relative group/slideshow">
      <img
        src={images[current]}
        alt={`Screenshot ${current + 1} of ${title}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover/slideshow:opacity-100 transition-opacity hover:bg-background focus:opacity-100"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover/slideshow:opacity-100 transition-opacity hover:bg-background focus:opacity-100"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-background/60"}`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

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
                <ImageSlideshow images={project.images} title={project.titleKey} />
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
