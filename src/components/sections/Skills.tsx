"use client";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";
import { Database, Server, Layers, GitBranch, Zap, LayoutTemplate } from "lucide-react";

const strengths = [
  {
    title: "Full Stack Development (MERN)",
    desc: "Building complete web applications across the stack with React, Next.js, Node.js, Express and MongoDB.",
    icon: Database
  },
  {
    title: "REST API Development & Integration",
    desc: "Building and connecting REST APIs so the frontend always gets reliable, well-structured data.",
    icon: Server
  },
  {
    title: "JWT Auth & State Management (Redux)",
    desc: "Secure JWT-based logins and Redux Toolkit for predictable frontend state.",
    icon: Layers
  },
  {
    title: "CI/CD, Git & Deployment (Vercel)",
    desc: "Git workflows and GitHub Actions pipelines, with deployments on Vercel.",
    icon: GitBranch
  },
  {
    title: "Performance Optimization & Bug Fixing",
    desc: "Tracking down bugs and tuning pages so applications stay fast and stable.",
    icon: Zap
  },
  {
    title: "Agile Teamwork & Client Delivery",
    desc: "Working closely with developers and clients to deliver multiple projects on time.",
    icon: LayoutTemplate
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 relative w-full px-4 sm:px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-8 sm:mb-14 flex items-center gap-3 sm:gap-4"
        >
          <span className="w-8 h-[1px] bg-neon-accent" />
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {strengths.map((str, i) => {
            const Icon = str.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                viewport={{ once: true, margin: "-30px" }}
                className="w-full h-full"
              >
                <TiltCard className="w-full h-full group">
                  <div className="h-full bg-white/[0.02] backdrop-blur-md p-6 sm:p-8 border border-white/5 group-hover:border-neon-cyan/50 transition-all duration-500 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[190px] sm:min-h-[220px] shadow-2xl">
                    
                    {/* Glowing hover background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Top Section */}
                    <div className="relative z-10 flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/30 transition-all duration-500">
                        <Icon size={20} className="text-foreground/50 group-hover:text-neon-cyan transition-colors duration-500" />
                      </div>
                      <div className="font-mono text-neon-accent text-[10px] tracking-widest opacity-60">0{i + 1}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                        {str.title}
                      </h3>
                      <p className="font-mono text-xs text-foreground/50 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {str.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
