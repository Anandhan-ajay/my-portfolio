import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/lib/icons";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Spryntz",
    category: "Mobile App",
    desc: "Cross-platform food ordering and delivery app serving 10,000+ users with real-time order tracking and integrated payments.",
    tags: ["React Native", "Redux Toolkit", "REST APIs"],
    gradient: "from-orange-500/20 to-rose-500/20",
    accent: "orange",
  },
  {
    title: "Mellow Plex",
    category: "Web Platform",
    desc: "High-performance entertainment discovery platform aggregating reviews, trailers and media for South Indian films.",
    tags: ["Next.js", "React", "SSR", "SEO"],
    gradient: "from-purple-500/20 to-indigo-500/20",
    accent: "purple",
  },
  {
    title: "Plant365",
    category: "ERP Suite",
    desc: "Web-based management suite for RMC plant owners to manage customers, orders and invoices with interactive dashboards.",
    tags: ["React", "Redux", "AWS", "Charts"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "emerald",
  },
  {
    title: "Producer Bazaar",
    category: "Marketplace",
    desc: "Online marketplace where producers showcase and trade rights for movies and albums globally.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB"],
    gradient: "from-sky-500/20 to-blue-600/20",
    accent: "sky",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-24 md:pt-20 md:pb-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {/* <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-4">
            Portfolio
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            A selection of complex applications and platforms I've built,
            focusing on performance, scalability, and exceptional user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative flex flex-col"
            >
              <div className={cn(
                "relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-md transition-all duration-500",
                "group-hover:border-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/5"
              )}>
                {/* Gradient background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-80",
                  p.gradient
                )} />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col min-h-[400px]">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-2">{p.category}</p>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {p.title}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-foreground/60 hover:bg-card hover:text-foreground transition-all border border-border/50"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-all shadow-glow"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8 line-clamp-3 group-hover:text-foreground/80 transition-colors">
                    {p.desc}
                  </p>

                  <div className="mt-auto pt-8 border-t border-border/50 flex flex-wrap gap-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-10 translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700">
                  <ExternalLink size={120} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/Anandhan-ajay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium text-lg"
          >
            Explore more projects on GitHub <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

