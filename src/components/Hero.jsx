import { useEffect, useRef, useState } from 'react'

function CountUp({ end, suffix = '', duration = 1600 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(ease * end))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>${val}{suffix}</span>
}

const ALLOCATION = [
  { label: 'Borrower',          pct: 38, color: '#1D9E75' },
  { label: 'Your institution',  pct: 29, color: '#3D5A6E' },
  { label: 'Insurer',           pct: 21, color: '#C07A10' },
  { label: 'Public sector',     pct: 12, color: '#B4B2A9' },
]

export default function Hero() {
  return (
    <section className="min-h-screen pt-14 flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-teal" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Flood resilience finance
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-ink leading-tight mb-5">
            Flood risk,{' '}
            <span className="text-teal">made financeable.</span>
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-5">
            Most lenders know some of their book is flood-exposed.
            Few know that{' '}
            <span className="font-semibold text-ink">
              more than half those properties can support a resilience loan today
            </span>{' '}
            — without a grant, on the strength of avoided loss alone.
          </p>

          <p className="text-base text-ink font-semibold mb-1">
            The output is a decision, not a data point.
          </p>
          <div className="border-l-2 border-teal pl-4 mb-8">
            <p className="text-base text-muted leading-relaxed">
              First Street, Jupiter, and Moody's tell you what the risk is.
              RIAB tells you what to do about it — which interventions cut the most
              risk per dollar, who captures each avoided loss, and how to structure
              the financing.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#output"
              className="bg-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors text-sm">
              See a sample output
            </a>
            <a href="#contact"
              className="border border-teal text-teal px-6 py-3 rounded-full font-semibold hover:bg-teal-light transition-colors text-sm">
              Request a pilot
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="bg-surface rounded-2xl p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-6 text-center">
            What RIAB calculates — live example
          </p>

          {/* EAL arithmetic — prominent */}
          <div className="grid grid-cols-[1fr_22px_1fr_22px_1fr] items-center mb-5">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Baseline EAL</p>
              <p className="text-3xl font-bold text-ink"><CountUp end={112} suffix="k" duration={1400} /></p>
              <p className="text-xs text-muted mt-1">annual expected loss</p>
            </div>
            <p className="text-xl text-muted text-center">−</p>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">After interventions</p>
              <p className="text-3xl font-bold text-teal-dark"><CountUp end={41} suffix="k" duration={1800} /></p>
              <p className="text-xs text-muted mt-1">residual expected loss</p>
            </div>
            <p className="text-xl text-muted text-center">=</p>
            <div className="rounded-xl p-4 text-center" style={{ background: '#1D9E75' }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">Avoided / yr</p>
              <p className="text-3xl font-bold text-white"><CountUp end={71} suffix="k" duration={2000} /></p>
              <p className="text-xs text-white/70 mt-1">63% reduction</p>
            </div>
          </div>

          {/* Allocation bars — compact, secondary */}
          <div className="bg-white/60 rounded-xl px-4 py-3 mb-4">
            <p className="text-xs text-muted mb-2.5">Who captures the $71k / yr</p>
            <div className="space-y-1.5">
              {ALLOCATION.map((row) => (
                <div key={row.label} className="flex items-center gap-2">
                  <span className="text-xs text-muted w-32 flex-shrink-0">{row.label}</span>
                  <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full"
                      style={{ width: `${row.pct * 2.55}%`, background: row.color }} />
                  </div>
                  <span className="text-xs text-muted w-7 text-right">{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted text-center italic">
            Grounded in FEMA HAZUS depth-damage functions — same methodology as
            federal hazard mitigation benefit-cost analysis
          </p>
        </div>

      </div>
    </section>
  )
}
