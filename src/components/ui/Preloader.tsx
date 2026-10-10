"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "NAMASTE",
  "KEM CHHO",
  "HELLO",
  "WELCOME"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    if (index === greetings.length - 1) {
      const t = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = ""; // Unlock scroll
        // Force window to scroll to top to reset any accidental scrolling
        window.scrollTo(0, 0);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("preloaderComplete"));
        }
      }, 1200);
      return () => clearTimeout(t);
    }
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 700); 
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%", filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505] [perspective:1000px]"
        >
          <div className="relative flex items-center justify-center h-32 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ rotateX: 90, opacity: 0, y: 30 }}
                animate={{ rotateX: 0, opacity: 1, y: 0 }}
                exit={{ rotateX: -90, opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
                className="absolute font-display text-4xl md:text-7xl lg:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-neon-cyan drop-shadow-[0_0_20px_rgba(56,189,248,0.4)] uppercase origin-center"
              >
                {greetings[index]}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.div 
            className="absolute bottom-16 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-neon-accent to-neon-cyan"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.2, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
