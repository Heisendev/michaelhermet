import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  "IAAP Certified Professional in Accessibility Core Competencies (CPACC)",
  "IAAP Web Accessibility Specialist (WAS)",
  "Deque University Accessible Web Development",
  "W3C Web Accessibility (W3Cx)",
];

const CertificationsSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Certifications</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">
            Credentials & expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-card-foreground text-sm leading-relaxed">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;