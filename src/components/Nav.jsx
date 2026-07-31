import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#tracks', label: 'Tracks' },
  { href: '#output', label: 'Sample output' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-teal text-lg tracking-tight">⌐RIAB┐</span>
          <span className="text-muted text-sm hidden sm:block">Resilience-in-a-Box</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="text-sm bg-teal text-white px-4 py-1.5 rounded-full hover:bg-teal-dark transition-colors">
            Request a pilot
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden -mr-2 p-2 text-ink hover:text-teal transition-colors">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-border px-6 py-3">
          <div className="flex flex-col">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-ink transition-colors py-2.5">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="mt-2 mb-1 text-sm font-semibold bg-teal text-white px-4 py-2.5 rounded-full hover:bg-teal-dark transition-colors text-center">
              Request a pilot
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
