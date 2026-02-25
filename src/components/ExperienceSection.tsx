import { motion } from "framer-motion";

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Developer & Accessibility Lead",
    company: "Company Name",
    description:
      "Leading accessibility initiatives across product teams. Implementing WCAG 2.1 AA compliance, conducting audits, and mentoring developers on inclusive design patterns within a React/TypeScript stack.",
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    company: "Company Name",
    description:
      "Built and maintained large-scale React applications with a focus on performance and accessibility. Integrated automated a11y testing into CI/CD pipelines.",
  },
  {
    period: "2018 — 2020",
    role: "Web Developer",
    company: "Company Name",
    description:
      "Developed responsive web applications using React and Node.js. Introduced accessibility best practices and tooling to the development workflow.",
  },
  {
    period: "2016 — 2018",
    role: "Junior Frontend Developer",
    company: "Company Name",
    description:
      "Started professional career building UI components and learning modern JavaScript frameworks. Discovered passion for web accessibility.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Experience</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">
            Professional journey
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
                  {exp.period}
                </p>

                <div className="md:pl-8">
                  <h3 className="text-foreground font-body font-bold text-lg">{exp.role}</h3>
                  <p className="text-primary text-sm mb-3">{exp.company}</p>
                  <p className="text-foreground leading-relaxed text-sm">
                    {exp.description}
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