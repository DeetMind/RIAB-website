const tracks = [
  {
    accent: '#1D9E75',
    light: '#E4F5EE',
    dark: '#0F5C3F',
    label: 'Track A',
    title: 'Community banks & lenders',
    sub: 'For institutions with flood-exposed loan portfolios',
    outcomes: [
      'Every property classified: loan-viable, grant-eligible, or blended',
      'Financing label with DSCR rationale your credit committee can test',
      'CRA-ready documentation maintained on an ongoing basis',
      'Benefit allocation by stakeholder, showing your collateral protection independently of borrower cash flow',
    ],
    tiers: [
      { n: '1', name: 'Pilot', desc: '20–50 properties, 6–8 weeks, fixed scope.', price: 'From $7,500' },
      { n: '2', name: 'Program', desc: 'Ongoing portfolio monitoring and new loan screening.', price: 'From $2,000/mo' },
      { n: '3', name: 'Embed', desc: 'Integrated into your origination or CRA workflow.', price: 'Contact us' },
    ],
  },
  {
    accent: '#3D5A6E',
    light: '#EBF2F7',
    dark: '#243545',
    label: 'Track B',
    title: 'Bond banks & state agencies',
    sub: 'For infrastructure finance and municipal programme teams',
    outcomes: [
      'Asset pipeline ranked by avoided loss per public dollar invested',
      'Tail-loss exposure at 1-in-100 and 1-in-500 before and after mitigation',
      'Financing classification: bond candidate, blended, or grant-eligible',
      'Parametric insurance trigger recommendation where reserve gap warrants it',
    ],
    tiers: [
      { n: '1', name: 'Pilot', desc: 'One asset class, one jurisdiction, 6–8 weeks.', price: 'Introductory: at cost' },
      { n: '2', name: 'Program', desc: 'Ongoing pipeline screening and portfolio refresh.', price: '15–25bps at closing' },
      { n: '3', name: 'Embed', desc: 'Integrated into bond pre-development or grant allocation.', price: 'Contact us' },
    ],
  },
]

export default function Tracks() {
  return (
    <section id="tracks" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase text-ink bg-surface px-3 py-1 rounded-full mb-4">
            Two tracks
          </div>
          <h2 className="text-3xl font-bold text-ink mb-4">
            Same methodology. Different buyer, different output.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We offer a tiered process beginning with a pilot. The first step is always a free sample analysis, enough to take to your committee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tracks.map((t) => (
            <div key={t.label} className="rounded-2xl border overflow-hidden" style={{ borderColor: t.accent + '40' }}>
              {/* Header */}
              <div className="p-6" style={{ background: t.light }}>
                <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white text-opacity-90 mb-3 inline-block"
                  style={{ background: t.accent }}>
                  {t.label}
                </span>
                <h3 className="text-xl font-bold text-ink mt-2">{t.title}</h3>
                <p className="text-sm mt-1" style={{ color: t.dark }}>{t.sub}</p>
              </div>

              {/* Outcomes */}
              <div className="p-6 border-b" style={{ borderColor: t.accent + '20' }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">What you get</p>
                <ul className="space-y-2">
                  {t.outcomes.map((o, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: t.accent }}>✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tiers */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">How to engage</p>
                <div className="space-y-3">
                  {t.tiers.map((tier) => (
                    <div key={tier.n} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                        style={{ background: t.accent }}>
                        {tier.n}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between">
                          <span className="font-semibold text-sm text-ink">{tier.name}</span>
                          <span className="text-xs font-semibold" style={{ color: t.accent }}>{tier.price}</span>
                        </div>
                        <p className="text-xs text-muted mt-0.5">{tier.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Who we are */}
        <div className="bg-surface rounded-2xl p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-6 text-center">Who we are</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Daniel Talero',
                role: 'Co-Founder, Resilience-in-a-Box',
                bio: 'Principal at Resilience Delta; NYSERDA (flood resilience finance). Formerly ESG consultant at KPMG, WSP, and Guidehouse. Co-developed RIAB with input from Howden, InnSure, EDF, and USAA.',
              },
              {
                name: 'James McIntyre',
                role: 'Co-Founder, Resilience-in-a-Box',
                bio: 'Founder & Principal at Public Innovate; board member NYS HCR. 20-year public finance and affordable-housing background (UBS, Morgan Stanley). Designed the financing logic behind RIAB\'s avoided-loss allocation.',
              },
            ].map((p) => (
              <div key={p.name} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-mid flex-shrink-0 flex items-center justify-center text-teal-dark font-bold text-lg">
                  {p.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-ink">{p.name}</p>
                  <p className="text-xs text-teal mb-1">{p.role}</p>
                  <p className="text-sm text-muted leading-relaxed">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
