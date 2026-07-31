const steps = [
  {
    n: '01',
    title: 'You send a spreadsheet',
    body: 'A standard intake template — one row per property or asset. Address, asset type, replacement value, insurance status. Takes about half a day to complete for 50 properties.',
    tag: 'You provide',
  },
  {
    n: '02',
    title: 'We run the flood loss model',
    body: 'Each asset goes through FEMA HAZUS depth-damage functions. We geolocate flood zones automatically, calculate baseline and mitigated expected annual loss, and split avoided loss across every stakeholder who captures it.',
    tag: 'We do',
  },
  {
    n: '03',
    title: 'You get a ranked action plan',
    body: 'Interventions ranked by avoided loss per dollar. Every property classified: loan-viable, grant-eligible, or blended. A committee-ready credit summary with the rationale your underwriting team needs.',
    tag: 'You receive',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase text-teal bg-teal-light px-3 py-1 rounded-full mb-4">
            How it works
          </div>
          <h2 className="text-3xl font-bold text-ink mb-4">
            Built on FEMA's published depth-damage curves
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            The same methodology the federal government uses in its own hazard mitigation benefit-cost analysis.
            Results are presented as planning-grade ranges with stated assumptions — so they hold up in front of a committee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-white rounded-2xl p-7 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-teal/20">{s.n}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal bg-teal-light px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-semibold text-ink text-lg mb-3">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-teal-light border-l-4 border-teal rounded-r-xl p-5 max-w-3xl mx-auto">
          <p className="text-sm text-teal-dark leading-relaxed">
            <span className="font-semibold">The same numbers serve two purposes:</span>{' '}
            the output that supports your credit case also supports a FEMA HMGP grant application —
            reducing the cost of deploying capital on resilience.
          </p>
        </div>
      </div>
    </section>
  )
}
