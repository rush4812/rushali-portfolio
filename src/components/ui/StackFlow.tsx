import { motion } from "framer-motion";

export function StackFlow() {
  const steps = ["Client (Next.js)", "API (Node)", "Database (Mongo)", "Deploy (Vercel)"];

  return (
    <div className="w-full mt-16 pt-8 border-t border-white/10 relative overflow-hidden">
      <div className="font-mono text-[9px] text-foreground/40 uppercase tracking-[0.3em] mb-8 text-center">
        Typical Application Flow
      </div>
      
      <div className="relative flex items-center justify-between max-w-4xl mx-auto px-4 md:px-12">
        {/* Background track line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
        
        {/* Animated glowing pulse line */}
        <motion.div 
          className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-neon-accent to-transparent w-[30%] -translate-y-1/2 z-0"
          animate={{ left: ["-30%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {steps.map((step, i) => (
          <div key={step} className="relative z-10 flex flex-col items-center gap-4 bg-background px-4">
            <div className="w-4 h-4 rounded-full border-2 border-neon-cyan bg-background flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse" />
            </div>
            <span className="font-mono text-[10px] text-foreground/60 uppercase tracking-widest hidden md:block">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
