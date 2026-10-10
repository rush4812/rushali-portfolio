import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import type { Metadata } from "next";

export function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study by Rushali Jivrajani`,
      description: project.summary,
      url: `https://rushali-jivrajani.vercel.app/projects/${project.slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study by Rushali Jivrajani`,
      description: project.summary,
      images: ["/og-image.png"],
    },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-foreground relative z-20 pb-32">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full p-6 md:px-12 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <Link href="/#projects" className="pointer-events-auto flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </Link>
      </div>

      {/* Hero Media */}
      <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden bg-black/50">
        {project.media.src ? (
          project.media.type === 'video' ? (
             <video src={project.media.src} poster={project.media.poster} autoPlay muted loop className="w-full h-full object-cover opacity-70" />
          ) : (
             <img src={project.media.src} alt={project.title} className="w-full h-full object-cover opacity-70" />
          )
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-black/40">
             <span className="font-display font-black text-9xl opacity-10" style={{ color: project.accent }}>
               {project.title.substring(0, 2).toUpperCase()}
             </span>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24 flex flex-col items-start max-w-6xl mx-auto">
          <div className="font-mono text-xs text-neon-cyan uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-neon-cyan" />
            {project.type} · {project.year}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 tracking-tighter">
            {project.title}
          </h1>
          <p className="font-mono text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 mt-16 md:mt-24 space-y-16">
        
        {/* Action Bar */}
        <div className="flex flex-wrap items-center gap-6 pb-16 border-b border-white/10">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 rounded hover:scale-105 transition-transform">
              Visit Live Site <ArrowUpRight size={16} />
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 rounded hover:bg-white/5 transition-colors">
              GitHub Repo
            </a>
          )}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-16">
            {project.problem && (
              <section>
                <h3 className="font-mono text-xs text-foreground/40 uppercase tracking-[0.2em] mb-6">01 / The Problem</h3>
                <p className="font-sans text-lg text-foreground/90 leading-relaxed">{project.problem}</p>
              </section>
            )}
            
            {project.built && (
              <section>
                <h3 className="font-mono text-xs text-foreground/40 uppercase tracking-[0.2em] mb-6">02 / The Approach</h3>
                <p className="font-sans text-lg text-foreground/90 leading-relaxed">{project.built}</p>
              </section>
            )}

            {project.result && (
              <section>
                <h3 className="font-mono text-xs text-foreground/40 uppercase tracking-[0.2em] mb-6">03 / The Result</h3>
                <p className="font-sans text-lg text-foreground/90 leading-relaxed">{project.result}</p>
              </section>
            )}
          </div>

          <div className="col-span-1 space-y-12">
            <section>
              <h3 className="font-mono text-xs text-foreground/40 uppercase tracking-[0.2em] mb-6">My Role</h3>
              <p className="font-sans text-lg text-foreground/90">{project.role}</p>
            </section>
            <section>
              <h3 className="font-mono text-xs text-foreground/40 uppercase tracking-[0.2em] mb-6">Tech Stack</h3>
              <ul className="space-y-3">
                {project.tech.map((t) => (
                  <li key={t} className="font-mono text-sm text-foreground/80 flex items-center gap-3">
                    <span className="text-neon-accent text-[10px]">▹</span> {t}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
