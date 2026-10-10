"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Scroll animation removed to prevent overlap with the marquee slider
  }, []);

  const [firstName, lastName] = portfolioData.personal.name.split(" ");

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.2 + (i * 0.05) }} // Delay accounts for preloader
        className="inline-block"
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen pt-28 sm:pt-32 px-4 sm:px-8 lg:px-16 overflow-hidden flex flex-col justify-center pb-12" id="hero">
      
      {/* Background Video Fallback & 3D Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          src="/bg-video.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-20 pointer-events-none mix-blend-screen"
          poster="/placeholder-profile.jpg" // Using placeholder as poster fallback
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
         <Scene />
      </div>

      <div ref={containerRef} className="max-w-screen-2xl mx-auto w-full relative z-20 flex flex-col items-start justify-center h-full mt-6 sm:mt-10">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center gap-4 font-mono text-[10px] md:text-xs text-neon-accent tracking-[0.2em] uppercase"
          >
            <span className="w-8 h-[1px] bg-neon-accent" />
            {portfolioData.personal.title}
          </motion.div>
          
          {portfolioData.personal.openToWork && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-[9px] uppercase tracking-widest rounded-full flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Open to work
            </motion.div>
          )}
        </div>

        {/* Staggered Split-Text Typography */}
        <div className="flex flex-col items-start z-10 pointer-events-none">
          <h1 className="font-display font-bold text-[13vw] sm:text-[11vw] md:text-[9vw] leading-[0.88] tracking-[-0.04em] text-foreground uppercase flex overflow-hidden">
            {splitText(firstName)}
          </h1>
          <h1 className="font-display font-bold text-[13vw] sm:text-[11vw] md:text-[9vw] leading-[0.88] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-neon-cyan uppercase ml-0 sm:ml-6 md:ml-12 flex overflow-hidden">
            {splitText(lastName)}
          </h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="mt-8 sm:mt-12 max-w-lg"
        >
          <p className="font-mono text-xs md:text-sm text-foreground/80 leading-relaxed uppercase tracking-widest border-l border-foreground/30 pl-4 sm:pl-6">
            {portfolioData.personal.subtitle}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col sm:flex-row gap-3.5 sm:gap-6 mt-10 sm:mt-16 w-full sm:w-auto pointer-events-auto"
        >
          <a href="#projects" className="relative overflow-hidden group px-6 sm:px-8 py-3.5 sm:py-4 bg-foreground text-background font-mono text-[11px] sm:text-[10px] uppercase tracking-[0.2em] text-center hover:shadow-[0_0_20px_rgba(124,140,255,0.3)] transition-all">
            <span className="relative z-10 font-bold">View Projects</span>
            <div className="absolute inset-0 bg-neon-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href={portfolioData.personal.links.resume} target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-3.5 sm:py-4 border border-foreground/20 text-foreground font-mono text-[11px] sm:text-[10px] uppercase tracking-[0.2em] text-center hover:bg-foreground/5 hover:border-neon-accent hover:text-neon-accent transition-all duration-300">
            Download Resume
          </a>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
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
