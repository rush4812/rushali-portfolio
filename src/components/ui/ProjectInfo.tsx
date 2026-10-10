import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectInfo({ project }: { project: Project }) {
  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-6 md:p-7 lg:p-8 h-full">
      <div className="flex flex-col items-start w-full">
        {/* Meta Row */}
        <div className="font-mono text-[10px] md:text-[11px] text-foreground/60 uppercase tracking-widest mb-1.5 sm:mb-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span style={{ color: project.accent }} className="font-semibold">{project.type}</span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          <span className="text-foreground/80">{project.role}</span>
        </div>
        
        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-1.5 sm:mb-3 leading-tight tracking-tight">
          {project.title}
        </h3>
        
        {/* Summary */}
        <p className="font-mono text-xs sm:text-sm text-foreground/80 leading-relaxed mb-2.5 sm:mb-4 font-normal line-clamp-2 sm:line-clamp-none">
          {project.summary}
        </p>
        
        {/* Problem/Result Highlights */}
        {(project.problem || project.result) && (
          <ul className="font-mono text-[10px] sm:text-xs text-foreground/70 space-y-1 sm:space-y-1.5 mb-3 sm:mb-4 border-l-2 pl-2.5 sm:pl-3" style={{ borderColor: `${project.accent}50` }}>
            {project.problem && (
              <li className="line-clamp-1 sm:line-clamp-2">
                <strong className="text-foreground/90 font-medium">Problem:</strong> {project.problem}
              </li>
            )}
            {project.result && (
              <li className="line-clamp-1">
                <strong className="text-foreground/90 font-medium">Result:</strong> {project.result}
              </li>
            )}
          </ul>
        )}
        
        {/* Tech Chips */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 md:mb-6">
            {project.tech.map((t) => (
              <span 
                key={t} 
                className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] sm:text-[11px] text-foreground/85 tracking-wider uppercase"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-auto pt-3 border-t border-white/10 w-full">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group font-mono text-[10px] sm:text-[11px] text-foreground uppercase tracking-widest flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-neon-accent active:scale-95"
          >
            <span className="font-bold">Live Demo</span>
            <ArrowUpRight size={13} className="text-foreground/60 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}

        {project.repoUrl && (
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group font-mono text-[10px] sm:text-[11px] text-foreground/70 hover:text-foreground uppercase tracking-widest flex items-center gap-1.5 ml-auto focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md px-2 py-1 active:scale-95"
          >
            <span className="border-b border-transparent group-hover:border-foreground/30 transition-colors pb-0.5">GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}
