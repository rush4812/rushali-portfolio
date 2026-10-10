"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative w-full overflow-hidden border-t border-foreground/10 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase flex items-center gap-4 mb-20"
        >
          <span className="w-8 h-[1px] bg-neon-accent" />
          Endorsements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-2xl relative group hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-8 right-8 text-6xl font-serif text-neon-accent/20 leading-none">"</div>
              
              <p className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 relative z-10">
                {testimonial.content}
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center font-display font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold font-sans text-foreground">{testimonial.name}</h4>
                  <p className="font-mono text-xs text-neon-cyan uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
