"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main className="relative w-full z-10">
      <Scene />
      <div className="relative z-10">
        <Hero />
        <div className="w-full bg-neon-accent/10 py-3 border-y border-neon-accent/20 overflow-hidden relative flex">
           <motion.div 
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 60, ease: "linear", repeat: Infinity }}
             className="whitespace-nowrap flex gap-8 text-neon-accent font-display text-sm tracking-widest uppercase shrink-0"
           >
              {Array(8).fill("React.js • Next.js • Node.js • Express • MongoDB • TypeScript •").map((text, i) => (
                <span key={i}>{text}</span>
              ))}
           </motion.div>
        </div>
        <About />
        <Skills />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
