"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 relative w-full px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-neon-accent" />
            01 / Identity
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[10px] text-foreground/50 tracking-widest uppercase space-y-4 border-l border-foreground/10 pl-6 hidden lg:block"
          >
            <p>CORE COMPETENCIES:</p>
            <ul className="text-neon-cyan space-y-2">
              <li>REACT.JS & NEXT.JS</li>
              <li>NODE.JS & EXPRESS</li>
              <li>MONGODB ARCHITECTURE</li>
              <li>CI/CD PIPELINES</li>
            </ul>
          </motion.div>
        </div>

        <div className="lg:col-span-8">
          <motion.div style={{ y }} className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight font-bold text-foreground tracking-tight">
             I engineer digital <br/> ecosystems that <span className="text-neon-accent">scale.</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-mono text-sm md:text-base text-foreground/60 max-w-2xl leading-relaxed"
          >
            Specializing in the MERN stack and Next.js, I bridge the gap between robust backend infrastructure and seamless interfaces. My focus is on architecting maintainable solutions for complex business logic.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-foreground/10">
            {[
              { value: "2+", label: "Years Engineering" },
              { value: "6+", label: "Production Apps" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "MCA", label: "Master's Degree" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard className="group relative p-4 -m-4 rounded-xl hover:bg-white/5 transition-colors duration-500">
                  <div className="font-display text-4xl font-bold text-foreground mb-2 group-hover:text-neon-accent transition-colors duration-300">{stat.value}</div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-foreground/40 uppercase">{stat.label}</div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
