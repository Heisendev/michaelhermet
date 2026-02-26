import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/Heisendev" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hermetmichael/" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com/Heisendev" },
  { icon: Mail, label: "Email", href: "mailto:hermet.mkl@gmail.com" },
];

const SocialSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t("social.title")}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            {t("social.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-all text-sm group"
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>

        <p className="mt-24 text-muted-foreground text-xs">
          © {new Date().getFullYear()} — {t("social.footer")}
        </p>
      </div>
    </section>
  );
};

export default SocialSection;