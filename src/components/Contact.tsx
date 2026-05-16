import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "@/lib/icons";
import { Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out — I'll get back to you soon." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono-code text-accent text-sm mb-3">// get in touch</p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-5">
              Let's build <span className="text-gradient">something great</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind, a role to discuss, or just want to say hi?
              Drop me a line — my inbox is always open.
            </p>
            <div className="space-y-4">
              <a href="mailto:anandmars98@gmail.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <span className="w-10 h-10 grid place-items-center rounded-full bg-card shadow-card group-hover:shadow-glow transition-all">
                  <img src="https://cdn.simpleicons.org/gmail" alt="Gmail" className="w-5 h-5" />
                </span>
                anandmars98@gmail.com
              </a>
              <a href="tel:+918220872636" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <span className="w-10 h-10 grid place-items-center rounded-full bg-card shadow-card group-hover:shadow-glow transition-all">
                  <Phone size={18} className="text-primary" />
                </span>
                +91 82208 72636
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <span className="w-10 h-10 grid place-items-center rounded-full bg-card shadow-card">
                  <MapPin size={18} className="text-accent" />
                </span>
                Puducherry, India
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://linkedin.com/in/anandhank/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 grid place-items-center rounded-full bg-card shadow-card hover:-translate-y-1 hover:shadow-glow transition-all">
                  <Linkedin size={20} className="text-[#0077B5]" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 grid place-items-center rounded-full bg-card shadow-card hover:-translate-y-1 hover:shadow-glow transition-all">
                  <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="w-5 h-5 dark:invert" />
                </a>
                <a href="mailto:anandmars98@gmail.com" aria-label="Email" className="w-11 h-11 grid place-items-center rounded-full bg-card shadow-card hover:-translate-y-1 hover:shadow-glow transition-all">
                  <img src="https://cdn.simpleicons.org/gmail" alt="Gmail" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-7 md:p-8 shadow-card border border-border/50 space-y-4"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <input required name="name" className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input required type="email" name="email" className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition resize-none" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent-gradient text-white font-semibold shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>

        {/* <p className="text-center text-sm text-muted-foreground mt-20">
          Built and maintained by Anandhan <span className="text-accent">♥</span> © 2026
        </p> */}
      </div>
    </section>
  );
};

export default Contact;
