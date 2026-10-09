"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      y: -50,
      scale: 0.95
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-32 px-6 lg:px-16 overflow-hidden flex flex-col justify-center pb-12" id="hero">
      
      <div ref={containerRef} className="max-w-screen-2xl mx-auto w-full relative z-20 flex flex-col items-start justify-center h-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 font-mono text-[10px] md:text-xs text-neon-accent tracking-[0.2em] uppercase mb-8"
        >
          <span className="w-8 h-[1px] bg-neon-accent" />
          SYSTEMS ARCHITECT & ENGINEER
        </motion.div>

        {/* Staggered Minimalist Typography */}
        <div className="flex flex-col items-start">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="font-display font-bold text-[10vw] md:text-[8vw] leading-[0.85] tracking-[-0.04em] text-foreground uppercase"
          >
            RUSHALI
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
            className="font-display font-bold text-[10vw] md:text-[8vw] leading-[0.85] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-neon-cyan uppercase ml-0 md:ml-24"
          >
            JIVRAJANI
          </motion.h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 max-w-lg"
        >
          <p className="font-mono text-xs md:text-sm text-foreground/80 leading-relaxed uppercase tracking-widest border-l border-foreground/30 pl-6">
            Building robust MERN-stack infrastructure and Next.js interfaces. I turn complex requirements into scalable digital systems.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-6 mt-16 pointer-events-auto"
        >
          <a href="#projects" className="relative overflow-hidden group px-8 py-4 bg-foreground text-background font-mono text-[10px] uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(124,140,255,0.3)] transition-all">
            <span className="relative z-10 font-bold">Explore Architecture</span>
            <div className="absolute inset-0 bg-neon-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="/resume.pdf" download className="px-8 py-4 border border-foreground/20 text-foreground font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-foreground/5 hover:border-neon-accent hover:text-neon-accent transition-all duration-300">
            Download Resume
          </a>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 z-20 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/40 [writing-mode:vertical-lr]">Scroll Sequence</span>
        <div className="w-[1px] h-12 bg-foreground/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-neon-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
