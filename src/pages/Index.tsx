import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SplashScreen />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
