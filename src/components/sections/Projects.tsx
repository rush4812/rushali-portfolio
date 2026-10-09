"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative w-full px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-20 flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-neon-accent" />
          02 / Architecture & Builds
        </motion.h2>

        <div className="flex flex-col border-t border-foreground/10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-foreground/10 hover:border-foreground/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 w-full">
                
                {/* Project Index */}
                <div className="font-mono text-[10px] text-foreground/30 font-bold group-hover:text-neon-accent transition-colors">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                
                {/* Project Title */}
                <a href={project.link} className="flex-1 cursor-pointer">
                  <h3 className="font-display text-4xl md:text-6xl font-bold text-foreground/70 group-hover:text-foreground transition-all duration-500 group-hover:translate-x-4">
                    {project.title}
                  </h3>
                </a>

                {/* Tech Stack & Description */}
                <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-4 md:mt-0">
                  <p className="font-mono text-xs text-foreground/50 max-w-xs md:text-right mb-4 group-hover:text-foreground/80 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-foreground/5 text-foreground font-mono text-[9px] uppercase tracking-widest border border-foreground/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link Arrow */}
                <a href={project.link} className="absolute right-0 top-10 md:relative md:top-auto hidden md:flex w-16 h-16 items-center justify-center rounded-full border border-foreground/10 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                  <ArrowUpRight className="text-foreground/50 group-hover:text-background transition-colors" size={24} />
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
