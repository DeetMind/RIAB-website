export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-teal text-lg tracking-tight">⌐RIAB┐</span>
          <span className="text-muted text-sm hidden sm:block">Resilience-in-a-Box</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how" className="text-sm text-muted hover:text-ink transition-colors">How it works</a>
          <a href="#tracks" className="text-sm text-muted hover:text-ink transition-colors">Tracks</a>
          <a href="#output" className="text-sm text-muted hover:text-ink transition-colors">Sample output</a>
          <a href="#contact"
            className="text-sm bg-teal text-white px-4 py-1.5 rounded-full hover:bg-teal-dark transition-colors">
            Request a pilot
          </a>
        </div>
      </div>
    </nav>
  )
}
