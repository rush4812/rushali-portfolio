"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

const animatedTitles = [
  "Full Stack Developer",
  "Next.js & React Specialist",
  "Node.js & Database Engineer",
  "Problem Solver & Fast Learner"
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Synchronization with preloader
  const [isReady, setIsReady] = useState(false);

  // Typewriter effect state
  const [titleIdx, setTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Listen for preloader completion
    const onPreloaderDone = () => setIsReady(true);
    window.addEventListener("preloaderComplete", onPreloaderDone);

    // Fallback trigger in case preloader already dismissed or on direct hash link
    const timer = setTimeout(() => setIsReady(true), 3200);

    return () => {
      window.removeEventListener("preloaderComplete", onPreloaderDone);
      clearTimeout(timer);
    };
  }, []);

  // Typewriter loop
  useEffect(() => {
    if (!isReady) return;

    const fullText = animatedTitles[titleIdx];
    const speed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2200); // Pause before backspacing
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % animatedTitles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIdx, isReady]);

  const [firstName, lastName] = portfolioData.personal.name.split(" ");

  const splitLetters = (text: string, isAccent: boolean, baseDelay: number) => {
    return text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 65, rotateX: -45 }}
        animate={isReady ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 65, rotateX: -45 }}
        transition={{
          duration: 0.65,
          ease: [0.215, 0.61, 0.355, 1],
          delay: baseDelay + i * 0.045,
        }}
        whileHover={{
          y: -10,
          scale: 1.08,
          transition: { type: "spring", stiffness: 450, damping: 12 },
        }}
        className={`inline-block cursor-default select-none transition-transform ${
          isAccent ? "text-neon-cyan drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]" : "text-foreground"
        }`}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-[100dvh] pt-24 sm:pt-32 px-4 sm:px-8 lg:px-16 overflow-hidden flex flex-col justify-center pb-12" id="hero">
      
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
          poster="/placeholder-profile.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
         <Scene />
      </div>

      <div ref={containerRef} className="max-w-screen-2xl mx-auto w-full relative z-20 flex flex-col items-start justify-center h-full mt-4 sm:mt-10">
        
        {/* Dynamic Typewriter Badge & Open to Work */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-6 mb-5 sm:mb-8 min-h-[32px]">
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 font-mono text-[11px] sm:text-sm text-neon-accent tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold"
          >
            <span className="w-4 sm:w-6 h-[2px] bg-neon-accent" />
            <span>{currentText || portfolioData.personal.title}</span>
            <span className="inline-block w-2 h-3.5 bg-neon-cyan animate-pulse ml-0.5 shadow-[0_0_8px_#22d3ee]" />
          </motion.div>
          
          {portfolioData.personal.openToWork && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-[9px] uppercase tracking-widest rounded-full flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Open to work
            </motion.div>
          )}
        </div>

        {/* Staggered Interactive Kinetic Typography */}
        <div className="flex flex-col items-start z-10 pointer-events-auto [perspective:1000px]">
          <h1 className="font-display font-black text-[13vw] sm:text-[11vw] md:text-[9vw] leading-[0.88] tracking-[-0.04em] uppercase flex overflow-hidden">
            {splitLetters(firstName, false, 0.05)}
          </h1>
          <h1 className="font-display font-black text-[13vw] sm:text-[11vw] md:text-[9vw] leading-[0.88] tracking-[-0.04em] uppercase ml-0 sm:ml-6 md:ml-12 flex overflow-hidden">
            {splitLetters(lastName, true, 0.25)}
          </h1>
        </div>
        
        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 sm:mt-12 max-w-lg"
        >
          <p className="font-mono text-xs md:text-sm text-foreground/80 leading-relaxed uppercase tracking-widest border-l-2 border-neon-accent/40 pl-3 sm:pl-6">
            {portfolioData.personal.subtitle}
          </p>
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-row gap-3 sm:gap-6 mt-8 sm:mt-14 w-full sm:w-auto pointer-events-auto"
        >
          <a 
            href="#projects" 
            className="flex-1 sm:flex-initial relative overflow-hidden group px-5 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-mono text-[11px] sm:text-[10px] uppercase tracking-[0.18em] text-center hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all rounded-xl active:scale-95"
          >
            <span className="relative z-10 font-bold">Projects</span>
            <div className="absolute inset-0 bg-neon-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a 
            href={portfolioData.personal.links.resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 sm:flex-initial px-5 sm:px-8 py-3 sm:py-4 border border-foreground/20 text-foreground font-mono text-[11px] sm:text-[10px] uppercase tracking-[0.18em] text-center hover:bg-foreground/5 hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 rounded-xl active:scale-95"
          >
            Resume
          </a>
        </motion.div>

      </div>
      
      {/* Desktop Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
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

      {/* Mobile Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 md:hidden z-20 flex flex-col items-center gap-1 pointer-events-none opacity-50"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/40">Scroll</span>
        <div className="w-3.5 h-6 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-neon-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
