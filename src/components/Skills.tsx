import { motion } from "framer-motion";
import { Code2, Server, Cloud, Wrench } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Front-End Development",
    points: [
      "Modern web apps with React, Next.js & TypeScript",
      "Cross-platform mobile apps with React Native",
      "State management with Redux Toolkit & Zustand",
    ],
    tags: ["React", "Next.js", "React Native", "TypeScript", "Tailwind"],
  },
  {
    icon: Server,
    title: "Back-End & Databases",
    points: [
      "REST APIs with Node.js and Express",
      "Database design with MongoDB & Supabase",
      "Authentication, payments and integrations",
    ],
    tags: ["Node.js", "Express", "MongoDB", "Supabase"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    points: [
      "Deploying serverless apps on AWS Lambda & API Gateway",
      "Hosting & delivery with S3, CloudFront, CodePipeline",
      "Monitoring with CloudWatch and CI/CD workflows",
    ],
    tags: ["AWS", "S3", "Lambda", "CloudFront"],
  },
  {
    icon: Wrench,
    title: "Tools & Collaboration",
    points: [
      "Version control with Git, GitHub & GitLab",
      "Agile workflows with Jira and ClickUp",
      "API testing with Postman, design handoff via Figma",
    ],
    tags: ["Git", "Jira", "Postman", "Figma", "ClickUp"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-mono-code text-accent text-sm mb-3">// what i do</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">
            Crafting <span className="text-gradient">digital experiences</span>
          </h2>
          <p className="text-muted-foreground">
            A multidisciplinary toolkit honed across 3+ years of shipping web and mobile products end-to-end.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {skills.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-2xl p-7 md:p-8 shadow-card hover:shadow-glow transition-all border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-gradient grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="text-accent-foreground" size={26} />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4">
                {s.title}
              </h3>
              <ul className="space-y-2.5 mb-5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm md:text-base text-muted-foreground">
                    <span className="text-accent flex-shrink-0">⚡</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono-code px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
