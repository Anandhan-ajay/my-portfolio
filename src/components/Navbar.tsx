import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

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
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-xl shadow-card border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          className="group font-display font-extrabold text-xl md:text-2xl text-primary relative"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
            &lt;
          </span>
          <span className="text-gradient mx-0.5 inline-block transition-all duration-300 group-hover:tracking-wider">
            Anandhan
          </span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
            /&gt;
          </span>
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-gradient transition-all duration-500 group-hover:w-full" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 bg-background/40 backdrop-blur-md border border-border/50 rounded-full px-2 py-1.5 shadow-sm">
          {links.map((l, i) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group inline-flex items-center",
                    isActive
                      ? "text-accent-foreground"
                      : "text-foreground/70 hover:text-primary"
                  )}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Active pill background */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-accent-gradient shadow-glow animate-scale-in" />
                  )}
                  {/* Hover background */}
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full bg-accent/10 opacity-0 transition-opacity duration-300",
                      !isActive && "group-hover:opacity-100"
                    )}
                  />
                  <span className="relative z-10">{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden relative h-10 w-10 inline-flex items-center justify-center rounded-full text-primary hover:bg-accent/10 transition-colors"
          onClick={() => setOpen(!open)}
        >
          <span
            className={cn(
              "absolute transition-all duration-300",
              open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            )}
          >
            <X />
          </span>
          <span
            className={cn(
              "absolute transition-all duration-300",
              open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            )}
          >
            <Menu />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/50 transition-all duration-500",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container py-4 flex flex-col gap-1">
          {links.map((l, i) => {
            const isActive = active === l.href;
            return (
              <li
                key={l.href}
                className="animate-fade-in-left"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                    isActive
                      ? "bg-accent-gradient text-accent-foreground shadow-glow"
                      : "text-foreground/80 hover:text-primary hover:bg-accent/10 hover:translate-x-1"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all duration-300",
                      isActive ? "bg-accent-foreground scale-100" : "bg-accent scale-75"
                    )}
                  />
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
