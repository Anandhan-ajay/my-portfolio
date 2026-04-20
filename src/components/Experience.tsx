import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const items = [
  { type: "work", title: "Full Stack Developer", org: "Big7 Solutions & Media Pvt Ltd, Puducherry", period: "Sep 2025 — Present", desc: "Building full-stack web and mobile products across the React, Next.js and Node ecosystem." },
  { type: "work", title: "Software Developer", org: "Meyi Cloud Solution, Puducherry", period: "Jan 2025 — Jul 2025", desc: "Developed cloud-integrated web applications and contributed to AWS-based deployment workflows." },
  { type: "work", title: "Software Developer", org: "Redblox Technologies, Puducherry", period: "Dec 2022 — Jan 2025", desc: "Shipped multiple production web and mobile apps including Spryntz, Plant365 and Mellow Plex; collaborated cross-functionally on architecture and delivery." },
  { type: "work", title: "Associate Web Developer (Intern)", org: "TechEva IT Solution, Puducherry", period: "Aug 2022 — Nov 2022", desc: "Started my career building responsive interfaces and learning production engineering practices." },
  { type: "cert", title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", period: "2025", desc: "Foundational certification covering AWS cloud architecture, security and core services." },
  { type: "cert", title: "MERN Stack Development", org: "Guvi", period: "2024", desc: "Hands-on certification in MongoDB, Express, React and Node.js full-stack development." },
  { type: "edu", title: "B.Tech in Mechanical Engineering", org: "Christ College of Engineering and Technology, Pondicherry University", period: "2016 — 2020", desc: "Bachelor's degree foundation before transitioning into a full-time software engineering career." },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
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

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-10">
            {items.map((item, i) => {
              const Icon = item.type === "work" ? Briefcase : item.type === "edu" ? GraduationCap : Award;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title + item.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  <div className="absolute left-0 md:left-1/2 top-2 w-8 h-8 rounded-full bg-accent-gradient grid place-items-center text-accent-foreground shadow-glow md:-translate-x-1/2 z-10">
                    <Icon size={16} />
                  </div>
                  <div className={`bg-card rounded-2xl p-6 shadow-card border border-border/50 ${isLeft ? "md:text-right md:mr-8" : "md:ml-8"}`}>
                    <p className="font-mono-code text-xs text-accent mb-1">{item.period}</p>
                    <h3 className="font-display font-bold text-lg text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-2">{item.org}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:block" />
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
