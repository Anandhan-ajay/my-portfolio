import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, ChevronRight } from "lucide-react";
import { Github } from "@/lib/icons";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Spryntz",
    category: "Mobile App",
    desc: "Cross-platform food ordering and delivery app serving 10,000+ users with real-time order tracking and integrated payments.",
    features: [
      "Developed core features for Android and iOS",
      "Implemented onboarding, UI cards, order booking",
      "Integrated payment gateway for secure transactions using Stripe",
      "Collaborated with team for effective backend and database management"
    ],
    tags: ["React Native", "Redux Toolkit", "REST APIs"],
    gradient: "from-orange-500/20 to-rose-500/20",
    accent: "orange",
    url: "https://spryntz.com/",
  },
  {
    title: "Project Management Tool",
    category: "Internal Platform",
    desc: "Internal tool for tracking employee attendance and daily work reports. Features role-based access for staff submissions and admin performance monitoring.",
    features: [
      "Developed role-based dashboards for staff and admin access",
      "Implemented daily sign-in and sign-out functionality",
      "Created modules for daily work report submissions",
      "Built admin views for monitoring attendance and performance"
    ],
    tags: ["React", "Dashboard", "Auth", "Management"],
    gradient: "from-purple-500/20 to-indigo-500/20",
    accent: "purple",
    url: "https://portal.solution22.com.au/login",
  },
  {
    title: "Plant365",
    category: "ERP Suite",
    desc: "Web-based management suite for RMC plant owners to manage customers, orders and invoices with interactive dashboards.",
    features: [
      "Developed interactive dashboards for RMC plant management",
      "Implemented scalable systems for order and invoice tracking",
      "Integrated interactive charts for real-time data visualization",
      "Optimized cloud deployment using AWS services"
    ],
    tags: ["React", "Redux", "AWS", "Charts"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "emerald",
    url: "https://plant365.in/",
  },
  {
    title: "Producer Bazaar",
    category: "Marketplace",
    desc: "Online marketplace where producers showcase and trade rights for movies and albums globally.",
    features: [
      "Developed structured interface with smooth navigation",
      "Implemented responsive design for multi-device support",
      "Learned the fundamentals of NFTs and blockchain integration",
      "Optimized frontend components for efficient marketplace showcase"
    ],
    tags: ["Next.js", "Node.js", "Express", "MongoDB"],
    gradient: "from-sky-500/20 to-blue-600/20",
    accent: "sky",
    url: "https://producerbazaar.com/",
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

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative flex flex-col h-full"
            >
              <div className={cn(
                "relative h-full flex flex-col rounded-3xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-md transition-all duration-500",
                "group-hover:border-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/5"
              )}>
                {/* Gradient background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-80",
                  p.gradient
                )} />

                {/* Decorative Number */}
                <div className="absolute top-6 right-8 text-7xl font-black text-muted/10 pointer-events-none select-none z-0 transition-all duration-500 group-hover:text-primary/10">
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col flex-1 min-h-[320px]">
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="pr-4 md:pr-16">
                      <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-2">{p.category}</p>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {p.title}
                      </h3>
                    </div>
                    <div className="flex gap-3 shrink-0">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-foreground/60 hover:bg-card hover:text-foreground transition-all border border-border/50"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={p.url || "#"}
                        target={p.url ? "_blank" : undefined}
                        rel={p.url ? "noopener noreferrer" : undefined}
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-all shadow-glow"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base mb-4 group-hover:text-foreground/80 transition-colors">
                    {p.desc}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-6">
                    {p.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground/90 group-hover:text-foreground/80 transition-colors">
                        <ChevronRight className="shrink-0 w-4 h-4 mt-0.5 text-primary/70" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-card border border-border/50 text-muted-foreground group-hover:text-foreground/80 group-hover:border-primary/20 transition-all shadow-sm"
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

