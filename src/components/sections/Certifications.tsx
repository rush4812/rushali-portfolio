"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative w-full px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-16 flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-neon-accent" />
          04 / Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 bg-white/5 rounded-3xl hover:bg-white/10 hover:border-neon-cyan transition-colors duration-500 group flex items-start gap-6"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-neon-accent/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                <Award className="text-neon-accent group-hover:text-neon-cyan transition-colors" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{cert.title}</h3>
                <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">{cert.issuer} • {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
