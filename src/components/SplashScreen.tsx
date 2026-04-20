import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 4200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-primary"
          aria-hidden="true"
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* Hexagon monogram */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                <motion.polygon
                  points="80,12 140,46 140,114 80,148 20,114 20,46"
                  stroke="hsl(var(--primary-foreground) / 0.7)"
                  strokeWidth="1.25"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              </svg>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="absolute inset-0 grid place-items-center font-display font-extrabold text-4xl text-primary-foreground/80 tracking-tight"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                AK
              </motion.span>
            </motion.div>

            {/* Signature-style name */}
            <svg
              viewBox="0 0 600 110"
              className="w-[340px] sm:w-[480px] md:w-[560px] h-auto"
              fill="none"
            >
              <motion.text
                x="50%"
                y="72%"
                textAnchor="middle"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "56px",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
                stroke="hsl(var(--primary-foreground) / 0.9)"
                strokeWidth="0.8"
                fill="transparent"
                initial={{ strokeDashoffset: 1500, fillOpacity: 0 }}
                animate={{ strokeDashoffset: 0, fillOpacity: 0.9 }}
                transition={{
                  strokeDashoffset: { duration: 2.6, ease: "easeInOut", delay: 0.8 },
                  fillOpacity: { duration: 0.8, delay: 3 },
                }}
                strokeDasharray="1500"
              >
                Anandhan K
              </motion.text>
            </svg>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.6 }}
              className="font-mono-code text-[10px] sm:text-xs text-primary-foreground/60 tracking-[0.4em] uppercase"
            >
              Software Engineer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
