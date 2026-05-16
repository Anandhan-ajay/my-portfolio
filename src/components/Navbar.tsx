import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  // { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  // { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isScrolling) return;

      // Active section detection
      const offsets = links.map((l) => {
        const el = document.querySelector(l.href);
        if (!el) return { href: l.href, top: Number.POSITIVE_INFINITY };
        const rect = (el as HTMLElement).getBoundingClientRect();
        return { href: l.href, top: Math.abs(rect.top - 100) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(offsets[0].href);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolling]);

  const handleLinkClick = (href: string) => {
    setActive(href);
    setIsScrolling(true);
    // Re-enable scroll detection after a delay
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const handleMobileClick = (href: string) => {
    setOpen(false);
    // Let the menu close layout shift happen before jumping
    setTimeout(() => {
      handleLinkClick(href);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "py-3 bg-background/95 lg:bg-transparent lg:backdrop-blur-none"
      )}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <a
            href="#home"
            className="flex items-center gap-3 font-bold text-2xl tracking-tighter"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-accent-gradient rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-full h-full bg-card border border-border/50 rounded-xl flex items-center justify-center shadow-2xl group-hover:-rotate-6 transition-transform duration-500">
                <span className="text-gradient">AK</span>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-foreground text-base font-bold uppercase tracking-tight">Anandhan</span>
              <span className="text-muted-foreground text-[9px] font-mono tracking-tighter">Full Stack Developer</span>
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation & Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ul className="flex items-center p-1.5 bg-card/40 backdrop-blur-2xl border border-border/50 rounded-full">
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <li key={l.href} className="relative">
                    <a
                      href={l.href}
                      onClick={() => handleLinkClick(l.href)}
                      className={cn(
                        "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 flex items-center gap-2",
                        isActive ? "text-white" : "text-foreground/50 hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 rounded-full bg-accent-gradient shadow-glow"
                        />
                      )}
                      <span className="relative z-10">{l.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={toggleTheme}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-card/40 backdrop-blur-2xl border border-white/5 text-foreground hover:bg-white/10 transition-all shadow-glow"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <a
                href="/resume.pdf"
                download
                className="group relative px-6 py-2.5 rounded-full bg-card/40 backdrop-blur-2xl border border-primary/50 text-foreground font-bold text-sm overflow-hidden flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-glow"
              >
                <div className="absolute inset-0 bg-accent-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Download size={18} className="relative z-10 group-hover:text-white transition-colors" />
                <span className="relative z-10 group-hover:text-white transition-colors">Resume</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <a
                href="#contact"
                className="group relative px-6 py-2.5 rounded-full bg-accent-gradient text-white font-bold text-sm overflow-hidden flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-glow"
              >
                <div className="absolute inset-0 bg-accent-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 transition-colors">Let's Connect</span>
                <ArrowUpRight size={18} className="relative z-10 transition-colors" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-card/50 border border-border/50 text-foreground transition-all"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-card/50 border border-border/50 text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 pb-4">
              <div className="bg-card/95 backdrop-blur-3xl rounded-3xl border border-white/10 p-5 shadow-2xl">
                <ul className="flex flex-col gap-3">
                  {links.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={l.href}
                        onClick={() => handleMobileClick(l.href)}
                        className={cn(
                          "text-xl font-bold transition-all block py-1",
                          active === l.href ? "text-accent" : "text-foreground/40"
                        )}
                      >
                        {l.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: links.length * 0.05 }}
                    className="pt-3 border-t border-border/50 flex flex-col gap-3"
                  >
                    <a
                      href="/resume.pdf"
                      download
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-card/50 border border-primary/50 text-foreground font-bold text-sm shadow-glow active:bg-accent-gradient active:text-white transition-all"
                    >
                      <Download size={18} /> Resume
                    </a>
                    <a
                      href="#contact"
                      onClick={() => handleMobileClick("#contact")}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-accent-gradient text-white font-bold text-sm shadow-glow"
                    >
                      Let's Connect <ArrowUpRight size={18} />
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

