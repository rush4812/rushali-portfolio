"use client";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

const strengths = [
  "Full Stack Development (MERN)",
  "REST API & Microservices",
  "JWT Auth & State Management",
  "CI/CD Git & Deployment",
  "Performance Optimization",
  "Scalable Systems Architecture"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative w-full px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-16 flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-neon-accent" />
          Core Competencies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((str, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full"
            >
              <TiltCard className="w-full h-full">
                <div className="h-full bg-[#050505]/80 backdrop-blur-md p-8 border border-foreground/10 hover:border-neon-accent transition-colors duration-500 rounded-xl group relative overflow-hidden flex flex-col justify-center min-h-[160px]">
                  {/* Glowing hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content lifted in 3D */}
                  <div style={{ transform: "translateZ(30px)" }}>
                    <div className="font-mono text-neon-cyan text-[10px] mb-2 tracking-widest opacity-60">0{i + 1}</div>
                    <div className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-neon-accent transition-colors">
                      {str}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
