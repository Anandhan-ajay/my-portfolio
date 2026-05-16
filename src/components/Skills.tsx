import { motion } from "framer-motion";
import { Monitor, Database, Server, Wrench, Code2 } from "lucide-react";
import { Github } from "@/lib/icons";

const skillsCategories = [
  {
    title: "Front End Development",
    icon: Monitor,
    color: "#0ea5e9",
    skills: [
      { name: "React JS", icon: "react" },
      { name: "Next JS", icon: "nextdotjs" },
      { name: "React Native", icon: "react" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Redux", icon: "redux" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "MUI", icon: "mui" },
    ]
  },
  {
    title: "Back End Development",
    icon: Code2,
    color: "#ec4899",
    skills: [
      { name: "Node JS", icon: "nodedotjs" },
      { name: "Express JS", icon: "express" },
      { name: "Nest JS", icon: "nestjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
    ]
  },
  {
    title: "Databases and ORMs",
    icon: Database,
    color: "#10b981",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "mongoose", icon: "mongodb" },
      { name: "TypeORM", icon: "typeorm" },
    ]
  },
  {
    title: "Tools & Collaboration",
    icon: Wrench,
    color: "#f59e0b",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Jira", icon: "jira" },
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "XCode", icon: "xcode" },
      { name: "Android Studio", icon: "androidstudio" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="pt-16 pb-24 md:pt-20 md:pb-32 relative bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technological stack and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillsCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/20 transition-colors group shadow-glow"
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-muted/30 border border-border/50 px-4 py-2 rounded-xl hover:bg-muted/50 hover:border-primary/30 transition-all cursor-default"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

