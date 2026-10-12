import { Project } from "@/data/projects";
import { Building2, Globe } from "lucide-react";

export function ProjectMedia({ project }: { project: Project }) {
  const logoUrl = project.logoSrc || project.media.src;

  return (
    <div className="w-full h-52 sm:h-64 md:h-full md:min-h-[300px] bg-[#070b13] border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden flex flex-col group/media pointer-events-none md:pointer-events-auto">
      {/* Top Bar with NetInc Client Provenance */}
      <div className="h-9 w-full bg-white/[0.04] border-b border-white/10 flex items-center justify-between px-4 sm:px-5 gap-2 shrink-0 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[9px] sm:text-[10px] text-foreground/70 uppercase tracking-widest">
            Client Project
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] text-neon-accent tracking-wider uppercase font-semibold">
          <Building2 size={12} className="text-neon-accent shrink-0" />
          <span>NetInc Digital Services</span>
        </div>
      </div>
      
      {/* Center Logo Arena with Ambient Glow */}
      <div className="flex-1 relative flex items-center justify-center p-6 sm:p-8 overflow-hidden z-10">
        {/* Ambient Brand Glow */}
        <div 
          className="absolute inset-0 opacity-20 group-hover/media:opacity-35 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.accent} 0%, transparent 70%)`
          }}
        />

        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "24px 24px"
          }}
        />

        {/* Branded Logo Showcase Plaque */}
        <div className="relative z-10 w-full max-w-[340px] h-[130px] sm:h-[150px] md:h-[170px] bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 flex items-center justify-center backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover/media:scale-[1.03] transition-all duration-500">
          {logoUrl ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={logoUrl} 
                alt={`${project.title} official logo`}
                className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] group-hover/media:brightness-110 transition-all duration-300"
              />
            </div>
          ) : (
            <span className="font-display font-black text-3xl sm:text-4xl text-foreground/80 tracking-widest uppercase">
              {project.title}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Domain / Provenance Bar */}
      <div className="h-8 w-full bg-black/40 border-t border-white/10 flex items-center justify-between px-4 sm:px-5 font-mono text-[9px] sm:text-[10px] text-foreground/50 uppercase tracking-widest shrink-0 z-20">
        <div className="flex items-center gap-1.5 truncate max-w-[65%]">
          <Globe size={11} className="text-neon-cyan shrink-0" />
          <span className="truncate">{project.clientDomain || "Live Client Application"}</span>
        </div>
        <span className="text-foreground/40 font-mono">
          2025-26
        </span>
      </div>
    </div>
  );
}
