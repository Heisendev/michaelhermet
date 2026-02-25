import { motion } from "framer-motion";

const interests = [
  {
    emoji: "🎾",
    title: "Tennis",
    description: "Player, Official, and board member of my tennis club. The sport that keeps me sharp on and off the court.",
  },
  {
    emoji: "🍳",
    title: "Cooking",
    description: "Experimenting with flavors and techniques. Cooking is my creative outlet outside of code.",
  },
  {
    emoji: "🎸",
    title: "Guitar",
    description: "Strumming chords and learning new songs. Music is how I unwind and recharge.",
  },
];

const InterestsSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Beyond Code</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">
            When I'm not coding
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <span className="text-4xl mb-4 block">{interest.emoji}</span>
              <h3 className="text-foreground font-display font-bold text-xl mb-2">{interest.title}</h3>
              <p className="text-foreground text-sm leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;