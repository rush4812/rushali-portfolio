import { motion } from "framer-motion";

const flowSteps = [
  {
    num: "01",
    label: "Client UI",
    tech: "Next.js / React",
    desc: "Fast, responsive interface",
  },
  {
    num: "02",
    label: "API Layer",
    tech: "Node.js / Actions",
    desc: "Secure server-side logic",
  },
  {
    num: "03",
    label: "Database",
    tech: "MongoDB / PostgreSQL",
    desc: "Persistent data storage",
  },
  {
    num: "04",
    label: "Deployment",
    tech: "Vercel CI/CD",
    desc: "Optimized global hosting",
  },
];

export function StackFlow() {
  return (
    <div className="w-full mt-12 sm:mt-16 pt-8 border-t border-white/10 relative">
      <div className="font-mono text-[10px] sm:text-xs text-neon-accent/80 uppercase tracking-[0.3em] mb-8 text-center flex items-center justify-center gap-2">
        <span className="w-4 h-[1px] bg-neon-accent/40" />
        <span>Typical Application Flow</span>
        <span className="w-4 h-[1px] bg-neon-accent/40" />
      </div>

      {/* ============================================================ */}
      {/* MOBILE VIEW (< md): Clean Vertical Connected Pipeline        */}
      {/* ============================================================ */}
      <div className="block md:hidden relative max-w-sm mx-auto px-4">
        {/* Vertical track line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-white/10" />
        
        {/* Animated vertical pulse */}
        <motion.div
          className="absolute left-[27px] w-[2px] h-12 bg-gradient-to-b from-transparent via-neon-accent to-transparent"
          animate={{ top: ["0%", "85%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />

        <div className="flex flex-col gap-5">
          {flowSteps.map((step, i) => (
            <div key={step.num} className="relative flex items-start gap-4">
              {/* Node indicator */}
              <div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full border-2 border-neon-cyan bg-background flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
              </div>

              {/* Step Card */}
              <div className="flex-1 bg-white/[0.03] border border-white/10 rounded-lg p-3 hover:border-neon-cyan/40 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-display font-bold text-xs text-foreground tracking-wide">
                    {step.label}
                  </span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-neon-accent/10 text-neon-accent font-semibold border border-neon-accent/20">
                    {step.num}
                  </span>
                </div>
                <div className="font-mono text-[11px] text-neon-cyan/90 font-medium">
                  {step.tech}
                </div>
                <div className="font-mono text-[10px] text-foreground/50 mt-0.5">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP VIEW (>= md): Horizontal Animated Pipeline            */}
      {/* ============================================================ */}
      <div className="hidden md:block relative max-w-5xl mx-auto px-6">
        {/* Background track line */}
        <div className="absolute top-5 left-8 right-8 h-[2px] bg-white/10 z-0" />

        {/* Animated glowing pulse line */}
        <motion.div
          className="absolute top-5 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-neon-accent to-transparent z-0"
          animate={{
            clipPath: [
              "polygon(0% 0%, 25% 0%, 25% 100%, 0% 100%)",
              "polygon(75% 0%, 100% 0%, 100% 100%, 75% 100%)",
            ],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="grid grid-cols-4 gap-4 relative z-10">
          {flowSteps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              {/* Node indicator */}
              <div className="w-10 h-10 rounded-full border-2 border-neon-cyan bg-background flex items-center justify-center mb-4 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
                <div className="w-2.5 h-2.5 bg-neon-cyan rounded-full animate-pulse" />
              </div>

              {/* Content Box */}
              <div className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-3.5 hover:border-neon-cyan/40 transition-all hover:-translate-y-0.5">
                <div className="font-mono text-[9px] text-neon-accent font-semibold tracking-wider uppercase mb-1">
                  Step {step.num}
                </div>
                <div className="font-display font-bold text-sm text-foreground mb-1">
                  {step.label}
                </div>
                <div className="font-mono text-xs text-neon-cyan/90 font-medium mb-1">
                  {step.tech}
                </div>
                <div className="font-mono text-[11px] text-foreground/50 leading-relaxed">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
