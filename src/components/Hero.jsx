import { useEffect, useRef, useState } from 'react'

function CountUp({ end, prefix = '', suffix = '', duration = 1800 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTime = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setVal(Math.round(ease * end))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>
}

export default function Hero() {
  return (
    <section className="min-h-screen pt-14 flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — copy */}
        <div>
          <div className="inline-block text-xs font-semibold tracking-widest uppercase text-teal bg-teal-light px-3 py-1 rounded-full mb-6">
            Flood resilience finance
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6">
            Flood risk,<br />
            <span className="text-teal">made financeable.</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-4">
            The average flood-exposed loan portfolio carries{' '}
            <span className="font-semibold text-ink">$112k in annual expected loss</span>.
            Most lenders don't know which properties are driving it — or that{' '}
            <span className="font-semibold text-ink">21 of 38 could support a resilience loan today</span>{' '}
            without a grant.
          </p>
          <p className="text-base text-muted leading-relaxed mb-3">
            <span className="font-semibold text-ink">We don't sell another flood score.</span>{' '}
            First Street, Jupiter, and Moody's tell you what the risk is.
            RIAB tells you what to do about it — which interventions reduce it most cost-effectively,
            who captures each avoided loss, and how to structure the financing.
          </p>
          <p className="text-base text-muted leading-relaxed mb-8">
            The output is a decision, not a data point.
          </p>
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

        {/* Right — animated EAL flow */}
        <div className="bg-surface rounded-2xl p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-6 text-center">
            What RIAB shows you — live example
          </p>
          <div className="grid grid-cols-3 gap-2 items-center mb-6">
            <div className="text-center bg-white rounded-xl p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Baseline EAL</div>
              <div className="text-3xl font-bold text-ink">
                $<CountUp end={112} suffix="k" />
              </div>
              <div className="text-xs text-muted mt-1">annual expected loss</div>
            </div>
            <div className="text-center text-2xl text-muted font-light">−</div>
            <div className="text-center bg-white rounded-xl p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">After interventions</div>
              <div className="text-3xl font-bold text-teal-dark">
                $<CountUp end={41} suffix="k" duration={2000} />
              </div>
              <div className="text-xs text-muted mt-1">residual loss</div>
            </div>
          </div>
          <div className="text-center text-2xl text-muted mb-4">=</div>
          <div className="text-center bg-teal rounded-xl p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">Annual avoided loss</div>
            <div className="text-4xl font-bold text-white">
              $<CountUp end={71} suffix="k" duration={2200} />
            </div>
            <div className="text-sm text-white/80 mt-1">63% reduction · ranked by who captures it</div>
          </div>
          <p className="text-xs text-muted text-center mt-4">
            Grounded in FEMA HAZUS depth-damage functions — same methodology as federal hazard mitigation benefit-cost analysis
          </p>
        </div>

      </div>
    </section>
  )
}
