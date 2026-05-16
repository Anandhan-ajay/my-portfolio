import { motion } from "framer-motion";
import { Mail, Download, ArrowRight, Database, Code2 } from "lucide-react";
import { Github, Linkedin } from "@/lib/icons";
import heroImg from "@/assets/hero-developer.png";
import { cn } from "@/lib/utils";

import Typewriter from "typewriter-effect";

const socials = [
  { slug: "github", href: "https://github.com/Anandhan-ajay", label: "GitHub" },
  { slug: "linkedin", href: "https://linkedin.com/in/anandhank/", label: "LinkedIn" },
  { slug: "gmail", href: "mailto:anandmars98@gmail.com", label: "Email" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 md:pt-40 overflow-hidden flex items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md"
            >
              <span className="text-sm font-medium text-cyan-400 flex items-center gap-2">
                <span className="animate-bounce">👋</span> Hello, I'm
              </span>
            </motion.div>

            <div className="space-y-4 relative">
              {/* Background Glow for Name */}
              <div className="absolute -inset-x-20 -inset-y-10 bg-cyan-400/10 rounded-full blur-[80px] pointer-events-none z-0" />

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight font-display relative z-10">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block text-gradient pb-2"
                >
                  Anandhan K
                </motion.span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 text-base md:text-xl font-light text-muted-foreground min-h-[1.5em]"
            >
              <div className="h-px w-8 bg-accent/50" />
              <div className="flex flex-wrap items-center gap-2">
                <span>I am a</span>
                <span className="text-foreground font-medium">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "Front End Developer",
                        "Backend Developer",
                        "Software Engineer",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                      wrapperClassName: "text-gradient font-bold",
                      cursorClassName: "text-accent animate-pulse",
                    }}
                  />
                </span>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed font-light"
          >
            <span className="text-foreground font-medium">Accomplished Full Stack Developer</span> with over
            <span className="text-foreground font-medium"> 3 years</span> of experience building and maintaining robust web and mobile applications. Proficient in both front-end and back-end technologies, consistently delivering high-quality software solutions. Known for effective teamwork and technical leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="#projects"
              className="group relative px-6 py-2.5 rounded-full bg-accent-gradient text-primary-foreground font-bold text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-glow flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-accent-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 group-hover:text-white transition-colors">
                View My Network
              </span>
              <ArrowRight size={18} className="relative z-10 group-hover:text-white transition-colors" />
            </a>

            <div className="flex items-center gap-3">
              {socials.map(({ slug, href, label }, i) => (
                <a
                  key={label}
                  href={href}
                  className="w-11 h-11 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
                >
                  {slug === "linkedin" ? (
                    <Linkedin size={20} className="text-[#0077B5] transition-transform group-hover:scale-110" />
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${slug}`}
                      alt={label}
                      className={cn(
                        "w-5 h-5 object-contain transition-transform group-hover:scale-110",
                        slug === "github" && "dark:invert"
                      )}
                    />
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative flex justify-center lg:justify-end items-center order-last lg:order-none"
        >
          {/* Advanced Developer Hologram Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Pulsing Waves */}
            <div className="absolute w-[140%] h-[140%] rounded-full bg-primary/5 animate-[ping_10s_linear_infinite]" />
            <div className="absolute w-[120%] h-[120%] rounded-full border border-accent/10 animate-[pulse_4s_ease-in-out_infinite]" />
          </div>

          <div className="relative z-10 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            {/* Theme-Colored Glass Container */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/10 via-primary/5 to-transparent backdrop-blur-[8px] z-0" />

            {/* Tightly Pinned Floating Tags */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 left-4 lg:top-10 lg:left-10 px-3 py-1.5 rounded-xl bg-card/80 backdrop-blur-2xl border border-accent/40 text-accent font-mono text-[11px] font-bold shadow-glow flex items-center gap-2 z-30"
            >
              {/* <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> */}
              &lt;div /&gt;
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-2 lg:right-4 px-3 py-1.5 rounded-xl bg-card/80 backdrop-blur-2xl border border-primary/40 text-primary font-mono text-[11px] font-bold shadow-glow flex items-center gap-2 z-30"
            >
              <Database size={12} className="text-primary" />

            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-10 left-4 lg:bottom-20 lg:left-10 px-3 py-1.5 rounded-xl bg-card/80 backdrop-blur-2xl border border-accent/40 text-accent font-mono text-[11px] font-bold shadow-glow flex items-center gap-2 z-30"
            >
              <span className="text-accent">const</span>
              <span className="text-foreground">AK =</span>
            </motion.div>

            <img
              src={heroImg}
              alt="Developer illustration"
              className="relative w-[85%] h-[85%] object-contain animate-float drop-shadow-[0_10px_50px_rgba(0,0,0,0.7)] z-10"
            />

            {/* Decorative Coding Tag */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute -bottom-2 -right-2 lg:bottom-4 lg:right-4 bg-accent/20 backdrop-blur-2xl px-5 py-2.5 rounded-2xl border border-accent/40 z-20 shadow-glow"
            >
              <span className="text-accent font-mono text-sm font-bold flex items-center gap-2">
                <Code2 size={16} />

              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

