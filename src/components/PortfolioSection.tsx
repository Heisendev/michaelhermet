import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Tennis Lab",
    description:
      "A full-stack application for managing real-time tennis match data, player stats with a focus on accessibility and performance.",
    tags: ["React", "Node.js", "BetterSql", "Express"],
    image: "/tennislab.png",
    liveUrl: "http://tennislab.mikahermet.com",
    repoUrl: "https://github.com/Heisendev/tennislab",
  },
  {
    title: "Accessibility Audit Dashboard",
    description:
      "Internal tool for tracking and reporting accessibility compliance across multiple web properties with automated testing integration.",
    tags: ["React", "Node.js", "Chart.js", "Pa11y"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#",
  },
];

const PortfolioSection = () => {
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
            Portfolio
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Selected projects showcasing my work in frontend development and
            digital accessibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
                <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
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
                    <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View live demo of ${project.title}`}
                    >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                    </a>
                    <a
                    href={project.repoUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View source code of ${project.title}`}
                    >
                    <Github className="w-4 h-4" />
                    Source
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
