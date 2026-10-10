"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 relative w-full px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Experience Timeline */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-8 sm:mb-14 flex items-center gap-3 sm:gap-4"
          >
            <span className="w-8 h-[1px] bg-neon-accent" />
            03 / Work Experience
          </motion.h2>

          <div className="relative border-l border-foreground/10 pl-6 sm:pl-8 space-y-10 sm:space-y-16">
            {experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-30px" }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3 h-3 rounded-full bg-foreground/20 group-hover:bg-neon-accent transition-colors shadow-[0_0_10px_rgba(124,140,255,0)] group-hover:shadow-[0_0_10px_rgba(124,140,255,0.8)]" />
                
                <div className="font-mono text-[10px] text-foreground/50 tracking-[0.2em] uppercase mb-1.5 sm:mb-2">
                  {exp.period}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">{exp.role}</h3>
                <h4 className="font-mono text-xs text-neon-cyan uppercase tracking-widest mb-3 sm:mb-4">{exp.company}</h4>
                <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="font-mono text-xs text-foreground/70 leading-relaxed flex gap-3 sm:gap-4 items-start">
                      <span className="text-neon-cyan text-sm mt-[1px] shrink-0">▹</span>
                      <span className="max-w-md">{ach}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-8 sm:mb-14 flex items-center gap-3 sm:gap-4"
          >
            <span className="w-8 h-[1px] bg-neon-accent" />
            04 / Education
          </motion.h2>

          <div className="relative border-l border-foreground/10 pl-6 sm:pl-8 space-y-10 sm:space-y-16">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-30px" }}
                className="relative group"
              >
                <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3 h-3 rounded-full bg-foreground/20 group-hover:bg-neon-cyan transition-colors" />
                
                <div className="font-mono text-[10px] text-foreground/50 tracking-[0.2em] uppercase mb-1.5 sm:mb-2">
                  {edu.period}
                </div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">{edu.degree}</h3>
                <h4 className="font-mono text-xs text-foreground/70 uppercase tracking-widest">{edu.school}</h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
