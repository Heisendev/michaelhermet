import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">About</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
            Building bridges between
            <br />
            <span className="italic text-gradient">design & inclusion</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-foreground leading-relaxed">
            <p>
              I'm a frontend developer with a deep commitment to digital accessibility.
              With multiple certifications in web accessibility standards (WCAG, ARIA),
              I help organizations create products that are not just beautiful, but truly
              usable by everyone.
            </p>
            <p>
              My expertise lives at the intersection of the React ecosystem and Node.js,
              where I build scalable, performant applications with accessibility baked in
              from the ground up — not bolted on as an afterthought.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;