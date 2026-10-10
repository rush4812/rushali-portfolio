"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { TiltCard } from "@/components/ui/TiltCard";

const processSteps = [
  { id: "01", title: "Discovery & UI/UX", desc: "Understanding requirements, user research, and wireframing intuitive interfaces. I prioritize the user journey before writing a single line of code." },
  { id: "02", title: "Frontend Architecture", desc: "Building responsive, accessible, and fast components using Next.js & Framer Motion. Every animation is carefully calibrated for performance." },
  { id: "03", title: "Backend Systems", desc: "Designing scalable MongoDB schemas and robust REST APIs with Express & Node. Security and data integrity are baked in from day one." },
  { id: "04", title: "CI/CD & Delivery", desc: "Automating testing and deployment pipelines for zero-downtime launches. Continuous integration ensures the product is always production-ready." }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="process" ref={containerRef} className="py-32 relative w-full px-6 overflow-hidden bg-[#050505]">
      
      {/* Space-like subtle glowing background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon-cyan text-xs tracking-[0.3em] uppercase mb-16 flex items-center gap-4 text-center justify-center w-full"
        >
          <span className="w-8 h-[1px] bg-neon-cyan" />
          The Pipeline
          <span className="w-8 h-[1px] bg-neon-cyan" />
        </motion.h2>

        <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-40 tracking-tight">
          How I Build <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-neon-cyan">Digital Experiences.</span>
        </div>

        <div className="relative">
          {/* Continuous background track line (Desktop) */}
          <div className="hidden lg:block absolute top-0 left-0 w-full h-[2px] bg-white/5 z-0 rounded-full" />
          
          {/* Animated neon fill line (Desktop) */}
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden lg:block absolute top-0 left-0 h-[3px] bg-gradient-to-r from-neon-accent via-neon-cyan to-neon-accent z-0 shadow-[0_0_20px_rgba(56,189,248,1)] rounded-full origin-left" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 relative pt-8 lg:pt-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.75, type: "spring", bounce: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Glowing Node on the horizontal line */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.75, type: "spring" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="hidden lg:block absolute -top-[7px] w-4 h-4 bg-[#050505] border-[2px] border-neon-cyan rounded-full z-20 shadow-[0_0_20px_rgba(56,189,248,1)] group-hover:scale-150 group-hover:bg-neon-cyan transition-all duration-500"
                />
                
                {/* Vertical connector beam */}
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: i * 0.75 + 0.2, duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="hidden lg:block absolute top-[9px] w-[1px] h-[60px] bg-gradient-to-b from-neon-cyan to-transparent z-10 origin-top opacity-50 group-hover:opacity-100 transition-opacity"
                />

                {/* Floating Content wrapped in TiltCard */}
                <div className="relative z-10 w-full pt-16 lg:pt-24 pb-8 flex flex-col items-center">
                  <TiltCard className="w-full h-full">
                    <div className="bg-white/[0.02] backdrop-blur-md p-8 border border-white/5 rounded-3xl group-hover:border-neon-cyan/30 transition-all duration-500 relative overflow-hidden flex flex-col items-center h-full shadow-2xl">
                      
                      {/* Glowing hover background */}
                      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      {/* Giant floating number behind text */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-black text-white/[0.03] z-0 group-hover:text-neon-cyan/[0.05] group-hover:scale-110 transition-all duration-700 pointer-events-none select-none tracking-tighter">
                        {step.id}
                      </div>

                      <div className="relative z-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-mono text-neon-accent text-sm tracking-widest mb-6 bg-black/50 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500" style={{ transform: "translateZ(40px)" }}>
                        {step.id}
                      </div>
                      
                      <h3 className="relative z-10 font-display text-xl md:text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors duration-500" style={{ transform: "translateZ(30px)" }}>
                        {step.title}
                      </h3>
                      
                      <p className="relative z-10 font-sans text-xs md:text-sm text-foreground/60 leading-relaxed max-w-xs group-hover:text-foreground/90 transition-colors" style={{ transform: "translateZ(20px)" }}>
                        {step.desc}
                      </p>
                    </div>
                  </TiltCard>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
