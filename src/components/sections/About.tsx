"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  Zap, 
  GraduationCap, 
  CheckCircle2, 
  Code2,
  Cpu,
  Flame
} from "lucide-react";

type ActiveTab = "profile" | "agility" | "philosophy";

export default function About() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("agility");

  return (
    <section 
      id="about" 
      className="relative w-full py-28 md:py-36 px-6 overflow-hidden bg-[#060911] border-t border-white/5"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-neon-accent/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Subtle Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neon-accent/10 border border-neon-accent/30 text-neon-accent font-mono text-xs tracking-wider uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-neon-accent animate-ping" />
              <span>Identity & Engineering Mindset</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight">
              Driven By Logic. <br />
              <span className="bg-gradient-to-r from-neon-accent via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Always Ready To Learn.
              </span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs sm:text-sm text-foreground/60 leading-relaxed">
            I don’t just write code for the stacks I know today — I pride myself on rapidly absorbing new frameworks, architectures, and technologies whenever an ambitious project calls for it.
          </div>
        </div>

        {/* BENTO ROW 1: Bio Story + Interactive Live Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Left Column: Personal Narrative & Core Strength */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0d1424]/90 to-[#090e1a]/95 border border-white/10 relative overflow-hidden shadow-2xl group"
          >
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-neon-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-neon-accent/10 transition-colors duration-500" />

            <div>
              <div className="flex items-center gap-3 text-foreground/50 font-mono text-xs uppercase tracking-widest mb-6">
                <GraduationCap className="text-neon-accent" size={18} />
                <span>MCA Graduate • Full Stack Software Engineer</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6 leading-snug">
                Bridging robust backend engineering with fast, intuitive interfaces.
              </h3>

              <div className="space-y-4 font-mono text-xs sm:text-sm text-foreground/75 leading-relaxed">
                <p>
                  Hello! I’m <span className="text-foreground font-semibold">Rushali Jivrajani</span>. With a Master of Computer Application (MCA) degree and hands-on experience shipping real-world web applications, I build software that solves actual business friction.
                </p>
                <p>
                  My day-to-day work centers around Next.js, React, Node.js, Express, and comprehensive database architectures using <span className="text-neon-cyan">PostgreSQL</span>, <span className="text-neon-cyan">MySQL</span>, and <span className="text-neon-cyan">MongoDB</span>.
                </p>
                <p className="text-foreground/90 font-medium pt-2 border-t border-white/5">
                  💡 <span className="text-neon-accent">What truly sets me apart:</span> I treat every unfamiliar technology not as a roadblock, but as an opportunity to expand my toolkit. Give me new documentation, and I’ll turn it into functional, production-ready software in days.
                </p>
              </div>
            </div>

            {/* Quick Badges Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-white/10">
              {[
                { value: "MCA", label: "Master of Computer Apps" },
                { value: "6+", label: "Shipped Projects" },
                { value: "3 DBs", label: "PgSQL • MySQL • Mongo" },
                { value: "100%", label: "Learning Agility" },
              ].map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-display font-extrabold text-xl text-foreground">{stat.value}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-foreground/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Terminal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col rounded-3xl bg-[#090d16] border border-white/15 overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#05080f] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 font-mono text-[11px] text-foreground/40">rushali.config.ts</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-neon-accent bg-neon-accent/10 px-2.5 py-1 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-accent animate-pulse" />
                <span>LIVE STATUS</span>
              </div>
            </div>

            {/* Terminal Tab Switchers */}
            <div className="flex border-b border-white/10 bg-[#070b13] px-3 pt-2 gap-1 font-mono text-xs">
              <button 
                onClick={() => setActiveTab("agility")}
                className={`px-3 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === "agility" 
                    ? "bg-[#0b101c] text-neon-accent border-t border-x border-neon-accent/30 font-semibold" 
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                <Zap size={13} />
                <span>TechAgility.ts</span>
              </button>
              <button 
                onClick={() => setActiveTab("profile")}
                className={`px-3 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === "profile" 
                    ? "bg-[#0b101c] text-neon-accent border-t border-x border-neon-accent/30 font-semibold" 
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                <Code2 size={13} />
                <span>Profile.json</span>
              </button>
              <button 
                onClick={() => setActiveTab("philosophy")}
                className={`px-3 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === "philosophy" 
                    ? "bg-[#0b101c] text-neon-accent border-t border-x border-neon-accent/30 font-semibold" 
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                <Cpu size={13} />
                <span>WorkEthic.ts</span>
              </button>
            </div>

            {/* Terminal Code Content */}
            <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto flex-1 flex flex-col justify-center bg-[#090d16]">
              <AnimatePresence mode="wait">
                {activeTab === "agility" && (
                  <motion.div
                    key="agility"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5"
                  >
                    <div className="text-foreground/40">// Ready to learn & adapt to any stack:</div>
                    <div>
                      <span className="text-purple-400">export const</span>{" "}
                      <span className="text-neon-cyan">learningEngine</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">mindset:</span>{" "}
                      <span className="text-emerald-300">&quot;Always hungry for new technologies&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">learningVelocity:</span>{" "}
                      <span className="text-amber-300">&quot;High / Rapid Onboarding&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">adaptability:</span>{" "}
                      <span className="text-purple-300">true</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">techHorizon:</span> [
                    </div>
                    <div className="pl-8 text-foreground/80">
                      &quot;Cloud Edge Functions&quot;, <br />
                      &quot;AI APIs & LLM Integration&quot;, <br />
                      &quot;Next-Gen Web Frameworks&quot;, <br />
                      &quot;Scalable Microservices&quot;
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-blue-300">execute:</span> () =&gt; &#123;
                    </div>
                    <div className="pl-8 text-neon-accent">
                      return &quot;Turn documentation into live production code&quot;;
                    </div>
                    <div className="pl-4">&#125;</div>
                    <div>&#125;;</div>
                  </motion.div>
                )}

                {activeTab === "profile" && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5"
                  >
                    <div className="text-foreground/40">// Developer Snapshot:</div>
                    <div>&#123;</div>
                    <div className="pl-4">
                      <span className="text-rose-300">&quot;name&quot;</span>: <span className="text-emerald-300">&quot;Rushali Jivrajani&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-rose-300">&quot;title&quot;</span>: <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-rose-300">&quot;degree&quot;</span>: <span className="text-emerald-300">&quot;Master of Computer Application (GTU)&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-rose-300">&quot;primaryStack&quot;</span>: [
                    </div>
                    <div className="pl-8 text-foreground/80">
                      &quot;Next.js&quot;, &quot;React&quot;, &quot;Node.js&quot;, &quot;Express&quot;
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-rose-300">&quot;databases&quot;</span>: [
                    </div>
                    <div className="pl-8 text-neon-cyan">
                      &quot;PostgreSQL&quot;, &quot;MySQL&quot;, &quot;MongoDB&quot;
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-rose-300">&quot;openToWork&quot;</span>: <span className="text-purple-300">true</span>
                    </div>
                    <div>&#125;</div>
                  </motion.div>
                )}

                {activeTab === "philosophy" && (
                  <motion.div
                    key="philosophy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5"
                  >
                    <div className="text-foreground/40">// Engineering Principles:</div>
                    <div className="text-purple-400">interface <span className="text-amber-300">Philosophy</span> &#123;</div>
                    <div className="pl-4 text-blue-300">codeQuality: <span className="text-emerald-300">&quot;Clean, typed & self-documenting&quot;</span>;</div>
                    <div className="pl-4 text-blue-300">architecture: <span className="text-emerald-300">&quot;Scalable & modular&quot;</span>;</div>
                    <div className="pl-4 text-blue-300">communication: <span className="text-emerald-300">&quot;Proactive & transparent&quot;</span>;</div>
                    <div className="pl-4 text-blue-300">learningStance: <span className="text-neon-accent">&quot;Zero fear of new frameworks&quot;</span>;</div>
                    <div>&#125;</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Terminal Footer status */}
            <div className="px-5 py-2.5 bg-[#05080f] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-foreground/40">
              <span>Ready for high-impact engineering roles</span>
              <span className="text-neon-cyan">UTF-8 • TypeScript</span>
            </div>
          </motion.div>

        </div>

        {/* BENTO ROW 2: THE SHOWSTOPPER - "READY TO LEARN NEW TECHNOLOGIES" FEATURE BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0d172a] via-[#091224] to-[#0d162d] border border-cyan-500/30 overflow-hidden shadow-2xl"
        >
          {/* Glowing Shimmer Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-neon-cyan font-mono text-xs uppercase tracking-wider mb-4">
                <Rocket size={14} className="text-neon-cyan" />
                <span>Superpower & Growth Stance</span>
              </div>
              
              <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 leading-tight">
                Ready To Learn & Master <br className="hidden sm:block" />
                <span className="text-neon-accent">Any New Technology.</span>
              </h3>

              <p className="font-mono text-xs sm:text-sm text-foreground/75 leading-relaxed max-w-2xl">
                Frameworks, libraries, and design patterns move at light speed. What defines me as an engineer is not just what I already know — it’s my <strong>velocity in mastering what comes next</strong>. 
                Whether your team uses cutting-edge cloud stacks, custom internal tooling, or modern AI APIs, I ramp up quickly, ask the right questions, and deliver production-quality code.
              </p>
            </div>

            {/* Right side: Interactive "Tech Horizons" Pills */}
            <div className="lg:col-span-5 flex flex-col gap-3 p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-foreground/60 pb-3 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <Flame size={14} className="text-amber-400" />
                  <span>Always Expanding Horizon</span>
                </span>
                <span className="text-neon-accent text-[10px]">Active Learner</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "AI & LLM API Integration",
                  "Cloud Microservices",
                  "Edge Computing & Serverless",
                  "Next.js 16 Server Actions",
                  "GraphQL & tRPC",
                  "Modern WebGL & 3D Web",
                  "Automated CI/CD Pipelines",
                  "Any Custom Tech Your Team Uses"
                ].map((item, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-neon-accent/15 border border-white/10 hover:border-neon-accent/40 text-foreground/80 hover:text-foreground font-mono text-xs transition-all duration-300 cursor-default"
                  >
                    <CheckCircle2 size={12} className="text-neon-accent shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
