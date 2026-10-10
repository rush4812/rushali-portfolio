"use client";
import { motion } from "framer-motion";
import { Compass, Code2, Server, Rocket, Check } from "lucide-react";

const processSteps = [
  {
    step: "01",
    phase: "Phase 01",
    title: "Discovery & UI/UX",
    desc: "Understanding product goals, architecture requirements, and mapping intuitive user journeys before writing code.",
    highlights: ["Scope & Requirements", "Architecture Planning", "UI/UX Wireframes"],
    icon: Compass,
    accent: "#38bdf8",
  },
  {
    step: "02",
    phase: "Phase 02",
    title: "Frontend Architecture",
    desc: "Crafting pixel-perfect, accessible, and high-performance interfaces with Next.js, TypeScript, and Framer Motion.",
    highlights: ["Component Systems", "State Management", "Fluid Animations"],
    icon: Code2,
    accent: "#22d3ee",
  },
  {
    step: "03",
    phase: "Phase 03",
    title: "Backend & Systems",
    desc: "Architecting reliable REST APIs and robust data layers with Node.js, Express, and MongoDB or PostgreSQL.",
    highlights: ["Secure API Routing", "Data Modeling", "Auth & Validation"],
    icon: Server,
    accent: "#60a5fa",
  },
  {
    step: "04",
    phase: "Phase 04",
    title: "Testing & Deployment",
    desc: "Automating CI/CD pipelines, optimizing lighthouse scores, and deploying zero-downtime production builds.",
    highlights: ["Automated CI/CD", "Vercel / Cloud Deploy", "Performance Audits"],
    icon: Rocket,
    accent: "#38bdf8",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative w-full px-6 overflow-hidden bg-background border-t border-white/5">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon-cyan/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[1px] bg-neon-accent" />
            <span>Workflow & Pipeline</span>
            <span className="w-8 h-[1px] bg-neon-accent" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 tracking-tight"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-neon-cyan">Pipeline.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-foreground/60 leading-relaxed"
          >
            A disciplined 4-stage engineering methodology designed for speed, clarity, and rock-solid code quality.
          </motion.p>
        </div>

        {/* Pipeline Track Bar (Desktop) */}
        <div className="hidden lg:block relative mb-12 max-w-6xl mx-auto px-12">
          {/* Base Track */}
          <div className="absolute top-1/2 left-12 right-12 h-[2px] bg-white/10 -translate-y-1/2 z-0 rounded-full" />
          
          {/* Animated Glow Line */}
          <motion.div 
            className="absolute top-1/2 left-12 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent w-48 -translate-y-1/2 z-0"
            animate={{ left: ["5%", "85%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Node Indicators */}
          <div className="relative z-10 flex justify-between items-center">
            {processSteps.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center gap-2 bg-background px-3">
                <div className="w-6 h-6 rounded-full border-2 border-neon-cyan/60 bg-[#090d14] flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.3)]">
                  <span className="font-mono text-[10px] text-neon-cyan font-bold">{i + 1}</span>
                </div>
                <span className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">
                  {step.phase}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="group relative flex flex-col justify-between p-6 bg-[#0c1018]/90 hover:bg-[#111724] border border-white/10 hover:border-neon-cyan/40 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(34,211,238,0.12)]"
              >
                {/* Subtle Radial Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${step.accent} 0%, transparent 75%)` }}
                />

                <div>
                  {/* Top Header: Phase Badge & Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span 
                      className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 bg-white/5 font-semibold"
                      style={{ color: step.accent }}
                    >
                      {step.phase}
                    </span>
                    <span className="font-mono text-xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/40 transition-all duration-300">
                    <Icon size={22} className="text-foreground/70 group-hover:text-neon-cyan transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-neon-cyan transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-mono text-xs text-foreground/70 leading-relaxed mb-6 font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables / Highlights */}
                <div className="pt-4 border-t border-white/5 flex flex-col gap-2 mt-auto">
                  <span className="font-mono text-[9px] text-foreground/40 uppercase tracking-widest font-semibold mb-1">
                    Key Deliverables
                  </span>
                  {step.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check size={12} className="text-neon-accent shrink-0" />
                      <span className="font-mono text-[11px] text-foreground/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
