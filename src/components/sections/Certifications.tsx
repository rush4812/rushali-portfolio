"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 relative w-full px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-8 sm:mb-14 flex items-center gap-3 sm:gap-4"
        >
          <span className="w-8 h-[1px] bg-neon-accent" />
          05 / Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {portfolioData.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, margin: "-30px" }}
              className="p-5 sm:p-8 border border-white/10 bg-white/5 rounded-2xl sm:rounded-3xl hover:bg-white/10 hover:border-neon-cyan transition-colors duration-500 group flex items-start gap-4 sm:gap-6 shadow-lg"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-neon-accent/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                <Award className="text-neon-accent group-hover:text-neon-cyan transition-colors w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 group-hover:text-neon-cyan transition-colors">{cert.title}</h3>
                <p className="font-mono text-[11px] sm:text-xs text-foreground/50 uppercase tracking-widest">{cert.issuer} • {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
