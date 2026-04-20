import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Download } from "@/lib/icons";
import heroImg from "@/assets/hero-developer.png";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/anandhank/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:anandmars98@gmail.com", label: "Email" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 md:pt-28 overflow-hidden bg-hero-gradient">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container relative grid md:grid-cols-2 gap-10 items-center pb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="font-mono-code text-accent text-sm md:text-base">
            &lt; Hello World, I am /&gt;
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] capitalize"
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
          >
            Anandhan K
          </h1>
          <p className="font-mono-code text-lg md:text-xl text-accent italic">
            ( Software engineer )
          </p>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Full Stack Developer with 3+ years of experience building scalable web and mobile applications using React, Next.js, React Native, and Node.js. Skilled in optimizing performance, designing clean architectures, and delivering user-centric solutions for real-world products.
          </p>

          <div className="flex items-center gap-3 pt-2">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="w-11 h-11 grid place-items-center rounded-full bg-card shadow-card text-primary hover:text-accent hover:shadow-glow transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent-gradient text-accent-foreground font-semibold shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <Mail size={18} /> Hire Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Download size={18} /> Resume
            </a>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl" />
          <img
            src={heroImg}
            alt="Developer illustration"
            width={1024}
            height={1024}
            className="relative max-w-full h-auto w-[420px] md:w-[520px] animate-float drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
