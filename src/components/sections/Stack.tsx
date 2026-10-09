"use client";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiVercel, SiGit, SiFramer, SiJavascript, SiTypescript } from "react-icons/si";

const stackCategories = [
  {
    title: "FRONTEND",
    tools: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer", icon: SiFramer, color: "#0055FF" }
    ]
  },
  {
    title: "BACKEND",
    tools: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" }
    ]
  },
  {
    title: "DATABASES",
    tools: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }
    ]
  },
  {
    title: "DEVOPS & DEPLOYMENT",
    tools: [
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Git", icon: SiGit, color: "#F05032" }
    ]
  },
  {
    title: "LANGUAGES",
    tools: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
    ]
  }
];

export default function Stack() {
  return (
    <section id="stack" className="py-32 relative w-full px-6 overflow-hidden border-t border-foreground/10">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-display font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter text-foreground">
              Tools are a <br/>
              <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">system,</span><br/>
              not a list.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-mono text-xs text-foreground/50 max-w-xs md:text-right"
          >
            Hover over a technology in the ecosystem to interact with the full stack architecture.
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
          {stackCategories.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-8"
            >
              <h3 className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em] border-b border-foreground/10 pb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-6">
                {category.tools.map((tool, j) => (
                  <div key={j} className="group relative flex items-center gap-5 cursor-pointer">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                      {/* Hover glow background */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: tool.color }} />
                      
                      {/* Default light gray state */}
                      <tool.icon size={24} className="absolute z-10 text-foreground/60 opacity-100 group-hover:opacity-0 transition-all duration-300" />
                      
                      {/* Colored hover state */}
                      <tool.icon size={24} className="absolute z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md" style={{ color: tool.color }} />
                    </div>
                    <span className="font-mono text-sm text-foreground/60 group-hover:text-foreground transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
