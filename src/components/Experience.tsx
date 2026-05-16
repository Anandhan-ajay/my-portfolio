import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { type: "work", title: "Full Stack Developer", org: "Big7 Solutions & Media Pvt Ltd, Puducherry", period: "Sep 2025 — Present", desc: "Building full-stack web and mobile products across the React, Next.js and Node ecosystem." },
  { type: "work", title: "Software Developer", org: "Meyi Cloud Solution, Puducherry", period: "Jan 2025 — Jul 2025", desc: "Developed cloud-integrated web applications and contributed to AWS-based deployment workflows." },
  { type: "work", title: "Software Developer", org: "Redblox Technologies, Puducherry", period: "Dec 2022 — Jan 2025", desc: "Shipped multiple production web and mobile apps including Spryntz, Plant365 and Mellow Plex; collaborated cross-functionally on architecture and delivery." },
  { type: "work", title: "Associate Web Developer (Intern)", org: "TechEva IT Solution, Puducherry", period: "Aug 2022 — Nov 2022", desc: "Started my career building responsive interfaces and learning production engineering practices." },
  // { type: "cert", title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", period: "2025", desc: "Foundational certification covering AWS cloud architecture, security and core services." },
  // { type: "cert", title: "MERN Stack Development", org: "Guvi", period: "2024", desc: "Hands-on certification in MongoDB, Express, React and Node.js full-stack development." },
  // { type: "edu", title: "B.Tech in Mechanical Engineering", org: "Christ College of Engineering and Technology, Pondicherry University", period: "2016 — 2020", desc: "Bachelor's degree foundation before transitioning into a full-time software engineering career." },
];

const Experience = () => {
  return (
    <section id="experience" className="pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-mono-code text-accent text-sm mb-3">// my journey</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, i) => {
              const Icon = item.type === "work" ? Briefcase : item.type === "edu" ? GraduationCap : Award;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title + item.period}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-0"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 rounded-xl bg-card border border-border/50 shadow-glow flex items-center justify-center text-primary md:-translate-x-1/2 z-10 transition-transform hover:scale-110">
                    <div className="absolute inset-0 bg-accent-gradient opacity-10 rounded-xl" />
                    <Icon size={18} />
                  </div>

                  <div className="md:grid md:grid-cols-2 md:gap-20">
                    {/* Content Card */}
                    <div className={cn(
                      "bg-card/40 backdrop-blur-md rounded-2xl p-7 shadow-card border border-border/50 hover:border-white/10 transition-all group relative overflow-hidden",
                      isLeft ? "md:text-right" : "md:col-start-2"
                    )}>
                      {/* Accent glow on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur transition-opacity" />

                      <div className="relative z-10">
                        <span className="inline-block font-mono-code text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 mb-4">
                          {item.period}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-secondary mb-4">{item.org}</p>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
