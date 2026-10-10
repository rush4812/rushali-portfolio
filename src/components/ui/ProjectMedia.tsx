import Image from "next/image";
import { Project } from "@/data/projects";

export function ProjectMedia({ project }: { project: Project }) {
  const hasMedia = project.media.src !== "";

  return (
    <div className="w-full h-40 sm:h-52 md:h-full md:min-h-[300px] bg-background border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden flex flex-col group/media pointer-events-none md:pointer-events-auto">
      {/* Browser Top Bar */}
      <div className="h-8 w-full bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      
      {/* Media Content */}
      <div className="flex-1 relative bg-black/20 overflow-hidden">
        {hasMedia ? (
          project.media.type === 'video' ? (
            <video 
              src={project.media.src} 
              poster={project.media.poster}
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover group-hover/media:scale-[1.04] transition-transform duration-700 ease-out"
            />
          ) : (
            <Image 
              src={project.media.src} 
              alt={project.title}
              fill
              className="object-cover group-hover/media:scale-[1.04] transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          )
        ) : (
          // Placeholder
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center" style={{ background: `linear-gradient(135deg, ${project.accent}20 0%, transparent 100%)` }}>
            <span className="font-display font-black text-6xl opacity-20" style={{ color: project.accent }}>
              {project.title.substring(0, 2).toUpperCase()}
            </span>
            <span className="font-mono text-[10px] text-foreground/40 uppercase mt-4">
              // TODO: add screenshot
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
