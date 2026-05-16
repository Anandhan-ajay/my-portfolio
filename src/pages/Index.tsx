import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      <SplashScreen />

      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <footer className="py-12 border-t border-border/50 text-muted-foreground text-sm">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="flex items-center gap-1.5">
            Built with <span className="text-emerald-500 animate-pulse">💛</span> by <span className="text-primary font-semibold">Anandhan K</span>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
