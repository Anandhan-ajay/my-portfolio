import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Code2, Award, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = 60;
      const increment = end / totalSteps;
      const stepTime = (duration * 1000) / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  const stats = [
    { label: "Years Experience", value: 3, suffix: "+", icon: Briefcase, color: "text-accent" },
    { label: "Projects Delivered", value: 10, suffix: "+", icon: Code2, color: "text-accent" },
    { label: "Certifications", value: 2, suffix: "", icon: Award, color: "text-accent" },
    { label: "Education", value: "B.Tech", suffix: "", icon: GraduationCap, color: "text-accent", isString: true },
  ];

  const education = [
    {
      title: "B.Tech in Mechanical Engineering",
      org: "Christ College of Engineering and Technology, Pondicherry University",
      year: "2016 — 2020",
    },
    {
      title: "MERN Stack Development",
      org: "Guvi",
      year: "2024",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      org: "Amazon Web Services",
      year: "2025",
    },
  ];

  const attributes = [
    "Leadership", "Creativity", "Collaborative", "SmartWorker", 
    "ProblemSolving", "Calmness", "Adjustability"
  ];

  return (
    <section id="about" className="pt-16 pb-24 md:pt-20 md:pb-32 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold text-foreground"
          >
            Get to know <span className="text-gradient">me better</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side: Content & Education */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground text-base leading-relaxed"
            >
              <p>
                I'm a passionate <span className="text-foreground font-semibold">Full Stack Developer</span> specializing in the <span className="text-accent">MERN stack</span>, with a strong foundation in both front-end and back-end development. My journey in tech has been driven by curiosity and a desire to create impactful digital solutions.
              </p>
              <p>
                With 3 companies under my belt, I've worked on diverse projects — from ERP systems to mobile apps. I value clean, maintainable code and continuously learn new technologies.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-foreground font-bold text-lg">
                <div className="p-1.5 rounded-lg bg-accent/10">
                  <GraduationCap className="text-accent" size={22} />
                </div>
                <h3>Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-card/30 backdrop-blur-md rounded-xl p-5 border border-black/5 dark:border-white/10 hover:border-accent/30 transition-all shadow-md"
                  >
                    <h4 className="font-bold text-lg text-foreground mb-0.5 group-hover:text-accent transition-colors">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{edu.org}</p>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-mono text-[10px] font-bold">
                      {edu.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Professional Attributes</h3>
              <div className="flex flex-wrap gap-3">
                {attributes.map((attr, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-5 py-2 rounded-full border border-accent/40 text-foreground text-sm font-bold hover:bg-accent/10 hover:border-accent transition-all cursor-default shadow-sm"
                  >
                    {attr}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/30 backdrop-blur-xl rounded-3xl p-6 border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center gap-4 group hover:border-accent/30 transition-all shadow-sm hover:-translate-y-2"
              >
                <div className={cn(
                  "p-3.5 rounded-xl bg-muted/40 transition-all duration-500 group-hover:scale-110 shadow-sm",
                  "group-hover:shadow-accent/10"
                )}>
                  <stat.icon size={28} className={stat.color} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {stat.isString ? (
                      <span className="text-xl md:text-2xl text-gradient">{stat.value}</span>
                    ) : (
                      <>
                        <Counter value={stat.value as number} />
                        <span className="text-accent">{stat.suffix}</span>
                      </>
                    )}
                  </h4>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
