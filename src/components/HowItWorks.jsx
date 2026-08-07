const steps = [
  {
    n: '01',
    tag: 'You provide',
    tagColor: '#888786',
    title: 'Send us a spreadsheet',
    body: 'A standard intake template — one row per property or asset. Address, asset type, replacement value, current flood coverage. Takes about half a day to complete for 50 properties. We handle everything else.',
    detail: 'De-identified fields only, held under NDA and deleted at engagement close.',
    icon: '📋',
  },
  {
    n: '02',
    tag: 'We do',
    tagColor: '#1D9E75',
    title: 'We run the flood loss model',
    body: 'Each asset goes through FEMA HAZUS depth-damage functions calibrated to its flood zone and asset class. We calculate baseline expected annual loss, model every intervention scenario, and split avoided loss across every stakeholder who captures it.',
    detail: 'Grounded in the same methodology used in federal hazard mitigation benefit-cost analysis.',
    icon: '⚙️',
  },
  {
    n: '03',
    tag: 'You receive',
    tagColor: '#3D5A6E',
    title: 'A ranked action plan, committee-ready',
    body: 'Every property classified — loan-viable, grant-eligible, or blended — with the DSCR rationale your underwriting team can test. Interventions ranked by avoided loss per dollar. A two-page credit summary ready for your next committee meeting.',
    detail: 'The same numbers support a FEMA HMGP grant application — one analysis, two uses.',
    icon: '✓',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="w-2 h-2 rounded-full bg-teal" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              How it works
            </span>
          </div>
          <h2 className="text-3xl font-bold text-ink mb-4">
            From a spreadsheet to a credit decision — in 6–8 weeks
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-sm leading-relaxed">
            Built on FEMA's published depth-damage curves — the same methodology the
            federal government uses in its own hazard mitigation benefit-cost analysis.
            Results are presented as planning-grade ranges with stated assumptions,
            so they hold up in front of a committee.
          </p>
        </div>

        {/* Steps — horizontal connector on desktop */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-border z-0" />

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {steps.map((s, i) => (
              <div key={s.n} className="flex flex-col">
                {/* Step number circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-white border-2"
                    style={{ borderColor: s.tagColor, color: s.tagColor }}>
                    {s.n}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-6 border border-border flex-1 flex flex-col">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full self-start mb-4"
                    style={{
                      background: s.tagColor + '18',
                      color: s.tagColor,
                    }}>
                    {s.tag}
                  </span>
                  <h3 className="font-bold text-ink text-base mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {s.body}
                  </p>
                  <p className="text-xs text-muted border-t border-border pt-3 italic">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <div className="bg-teal-light border-l-4 border-teal rounded-r-xl p-5">
            <p className="text-sm font-semibold text-teal-dark mb-1">
              One analysis, two uses
            </p>
            <p className="text-sm text-teal-dark leading-relaxed">
              The output that supports your credit case also supports a FEMA HMGP
              grant application — reducing the cost of deploying capital on resilience.
            </p>
          </div>
          <div className="bg-white border border-border rounded-xl p-5">
            <p className="text-sm font-semibold text-ink mb-1">
              Pilots start with a free sample analysis
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Send us 20–50 properties. We return a free sample on a subset —
              enough to take to your committee — plus a fixed-fee quote for the full pilot.
              Sample slots are limited each quarter.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
