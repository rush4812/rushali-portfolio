export function ProjectProgress({ total, current, onSelect }: { total: number, current: number, onSelect: (idx: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className="h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
          style={{ 
            width: current === i ? "32px" : "12px",
            backgroundColor: current === i ? "var(--neon-accent, #38bdf8)" : "rgba(255,255,255,0.15)"
          }}
          aria-label={`Go to project ${i + 1}`}
        />
      ))}
    </div>
  );
}

export function ProjectArrows({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <button 
        onClick={onPrev}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-90"
        aria-label="Previous project"
      >
        <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <button 
        onClick={onNext}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-90"
        aria-label="Next project"
      >
        <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
}
