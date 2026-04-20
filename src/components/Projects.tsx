import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/lib/icons";

const projects = [
  {
    title: "Spryntz",
    desc: "Cross-platform food ordering and delivery app serving 10,000+ users with real-time order tracking and integrated payments — improved order completion rates by 25%.",
    tags: ["React Native", "Redux Toolkit", "REST APIs"],
    gradient: "from-orange-400 to-rose-600",
  },
  {
    title: "Mellow Plex",
    desc: "High-performance entertainment discovery platform aggregating reviews, trailers and media for Tamil, Hindi and Telugu films — drove a 30% increase in organic traffic via SSR + SEO.",
    tags: ["Next.js", "React", "SSR"],
    gradient: "from-purple-400 to-indigo-600",
  },
  {
    title: "Plant365",
    desc: "Web-based management suite for RMC plant owners to manage customers, orders and invoices with interactive dashboards — cut manual reporting time by 40%.",
    tags: ["React", "Redux", "AWS"],
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    title: "Producer Bazaar",
    desc: "Online marketplace where producers showcase and trade rights for movies and albums — built with a smooth, responsive interface and optimized layout.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB"],
    gradient: "from-sky-400 to-blue-700",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-mono-code text-accent text-sm mb-3">// selected work</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A curated set of products I've shipped end-to-end — from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all border border-border/50"
            >
              <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white, transparent 60%)' }} />
                <div className="absolute bottom-4 left-5 font-mono-code text-white/90 text-sm">
                  0{i + 1}
                </div>
                <div className="absolute top-4 right-5 font-display font-bold text-white/90 text-lg">
                  {p.title}
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-primary">
                    {p.title}
                  </h3>
                  <div className="flex gap-2 text-muted-foreground">
                    <a href="#" aria-label="Repository" className="hover:text-accent transition-colors"><Github size={18} /></a>
                    <a href="#" aria-label="Live demo" className="hover:text-accent transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono-code px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
