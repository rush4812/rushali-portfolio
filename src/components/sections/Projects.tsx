"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectProgress, ProjectArrows } from "@/components/ui/ProjectControls";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projectsData.length;
  const [isDesktop, setIsDesktop] = useState(true);
  const [showHint, setShowHint] = useState(true);

  // Use Lenis instance if available to scroll via buttons on desktop
  // If not, window.scrollTo is fine for pinned GSAP sections
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      setIsDesktop(true);
      if (!scrollWrapperRef.current || !containerRef.current) return;
      
      const sections = gsap.utils.toArray(".project-panel");
      const totalScroll = containerRef.current.offsetWidth * (sections.length - 1);
      
      const tl = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          id: "projects-trigger",
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalScroll}`,
          onUpdate: (self) => {
            if (showHint && self.progress > 0.05) setShowHint(false);
            const index = Math.round(self.progress * (total - 1));
            setActiveIndex(Math.min(Math.max(index, 0), total - 1));
          }
        }
      });
      return () => tl.kill();
    });

    mm.add("(max-width: 767px)", () => {
      setIsDesktop(false);
    });

    return () => mm.revert();
  }, [total, showHint]);

  // Handle native scroll on mobile
  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isDesktop) return;
    if (showHint) setShowHint(false);
    const target = e.currentTarget;
    const scrollLeft = target.scrollLeft;
    const width = target.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const jumpTo = (index: number) => {
    setShowHint(false);
    if (isDesktop) {
      const st = ScrollTrigger.getById("projects-trigger");
      if (st) {
        const targetScroll = st.start + (st.end - st.start) * (index / (total - 1));
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      } else if (containerRef.current) {
        const start = containerRef.current.offsetTop;
        const totalScroll = containerRef.current.offsetWidth * (total - 1);
        const targetScroll = start + (totalScroll * (index / (total - 1)));
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    } else {
      if (!scrollWrapperRef.current) return;
      const width = scrollWrapperRef.current.offsetWidth;
      scrollWrapperRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative w-full h-[100svh] overflow-hidden flex flex-col justify-center bg-transparent"
    >
      {/* Background Mask for Sphere */}
      <div className="absolute inset-0 z-0 bg-background/80 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      {/* Header & Counter */}
      <div className="absolute top-16 sm:top-20 md:top-24 left-4 sm:left-6 md:left-12 lg:left-24 z-20 flex items-center gap-4 sm:gap-6">
        <h2 className="font-mono text-neon-accent text-[11px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase flex items-center gap-2.5 sm:gap-3">
          <span className="w-6 sm:w-8 md:w-12 h-[1px] bg-neon-accent" />
          My Work
        </h2>
        <div className="font-mono text-base sm:text-lg md:text-2xl font-light text-foreground flex items-center gap-1.5 sm:gap-2 relative overflow-hidden h-7 sm:h-8" aria-live="polite">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={activeIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              0{activeIndex + 1}
            </motion.span>
          </AnimatePresence>
          <span className="text-foreground/30">/ 0{total}</span>
        </div>
      </div>

      {/* Main Gallery */}
      <div 
        ref={scrollWrapperRef}
        onScroll={handleMobileScroll}
        className="flex h-full items-center px-3 sm:px-4 md:px-[11vw] lg:px-[15vw] overflow-x-auto md:overflow-hidden snap-x snap-mandatory hide-scrollbar pt-20 sm:pt-28 pb-16 sm:pb-20 md:py-0"
        style={{ width: isDesktop ? "max-content" : "100%" }}
      >
        {projectsData.map((project, i) => (
          <div 
            key={project.id} 
            className="project-panel shrink-0 w-[100vw] md:w-[78vw] lg:w-[70vw] px-2.5 sm:px-4 md:px-8 flex justify-center items-center snap-center h-full"
            data-cursor="view"
          >
            <ProjectCard project={project} isActive={activeIndex === i} />
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-12 lg:left-24 right-4 sm:right-6 md:right-12 lg:right-24 z-20 flex items-center justify-between gap-4">
        
        {/* Progress Segments */}
        <div className="w-auto">
          <ProjectProgress total={total} current={activeIndex} onSelect={jumpTo} />
        </div>

        {/* Drag Hint */}
        <AnimatePresence>
          {showHint && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest hidden md:flex items-center gap-2 pointer-events-none"
            >
              Drag or scroll <ArrowRight size={14} className="animate-pulse text-neon-accent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Responsive Arrows for both mobile and desktop */}
        <div className="flex items-center">
          <ProjectArrows 
            onPrev={() => jumpTo(Math.max(activeIndex - 1, 0))}
            onNext={() => jumpTo(Math.min(activeIndex + 1, total - 1))}
          />
        </div>
      </div>
    </section>
  );
}
