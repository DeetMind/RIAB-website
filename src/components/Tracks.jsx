const TRACKS = [
  {
    id: 'a',
    accent: '#1D9E75',
    accentLight: '#E4F5EE',
    accentDark: '#0F5C3F',
    pill: 'Track A',
    title: 'Community banks & lenders',
    sub: 'For institutions with flood-exposed loan portfolios',
    outcomes: [
      'Every property classified: loan-viable, grant-eligible, or blended, with the DSCR rationale your credit committee can test',
      'NFIP premium impact per intervention, including RR 2.0 eligibility (illustrative ranges)',
      'Benefit allocation by stakeholder: your collateral protection accrues independently of borrower cash flow',
      'CRA-ready documentation maintained on an ongoing basis under the Program tier',
    ],
    tiers: [
      { n: '1', name: 'Pilot',   desc: '20-50 properties · 6-8 weeks · fixed scope',        price: 'From $7,500' },
      { n: '2', name: 'Program', desc: 'Ongoing monitoring, new loan screening, CRA records', price: 'From $2,000/mo' },
      { n: '3', name: 'Embed',   desc: 'Integrated into your origination or CRA workflow',   price: 'Contact us' },
    ],
  },
  {
    id: 'b',
    accent: '#3D5A6E',
    accentLight: '#EBF2F7',
    accentDark: '#243545',
    pill: 'Track B',
    title: 'Bond banks & state agencies',
    sub: 'For infrastructure finance and municipal programme teams',
    outcomes: [
      'Asset pipeline ranked by avoided loss per public dollar, with BCR calculated at 5% / 20-year for every project',
      'Tail-loss exposure at 1-in-100 and 1-in-500 before and after mitigation, with reserve-adequacy implications',
      'Financing stack per project: bond candidate, blended (HMGP / BRIC), or grant-eligible',
      'Parametric insurance trigger recommendation where reserve gap warrants it',
    ],
    tiers: [
      { n: '1', name: 'Pilot',   desc: 'One asset class, one jurisdiction · 6-8 weeks',          price: 'Introductory: at cost' },
      { n: '2', name: 'Program', desc: 'Ongoing pipeline screening and portfolio refresh',         price: '15-25bps at closing' },
      { n: '3', name: 'Embed',   desc: 'Integrated into bond pre-development or grant allocation', price: 'Contact us' },
    ],
  },
]

const TEAM = [
  {
    initial: 'D',
    accent: '#1D9E75',
    accentLight: '#E4F5EE',
    name: 'Daniel Talero',
    role: 'Co-Founder, Resilience-in-a-Box',
    bio: 'Principal at Resilience Delta; NYSERDA (flood resilience finance). Formerly ESG consultant at KPMG, WSP, and Guidehouse. Co-developed RIAB with input from Howden, InnSure, EDF, and USAA.',
  },
  {
    initial: 'J',
    accent: '#3D5A6E',
    accentLight: '#EBF2F7',
    name: 'James McIntyre',
    role: 'Co-Founder, Resilience-in-a-Box',
    bio: 'Founder and Principal at Public Innovate; board member NYS HCR. 20-year public finance background (UBS, Morgan Stanley). Designed the financing logic behind RIAB\'s avoided-loss allocation.',
  },
]

export default function Tracks() {
  return (
    <section id="tracks" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="w-2 h-2 rounded-full bg-ink" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Two tracks
            </span>
          </div>
          <h2 className="text-3xl font-bold text-ink mb-3">
            Same methodology. Different buyer, different output.
          </h2>
          <p className="text-muted text-sm max-w-xl mx-auto">
            Every engagement starts with a free sample analysis on a subset of your portfolio,
            enough to take to your committee before committing to a full pilot.
          </p>
        </div>

        {/* Track cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {TRACKS.map((t) => (
            <div key={t.id} className="rounded-2xl border overflow-hidden flex flex-col"
              style={{ borderColor: t.accent + '30' }}>

              {/* Colour header */}
              <div className="px-6 py-5" style={{ background: t.accentLight }}>
                <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white inline-block mb-3"
                  style={{ background: t.accent }}>
                  {t.pill}
                </span>
                <h3 className="text-xl font-bold text-ink">{t.title}</h3>
                <p className="text-sm mt-0.5" style={{ color: t.accentDark }}>{t.sub}</p>
              </div>

              {/* Outcomes */}
              <div className="px-6 py-5 border-b flex-1" style={{ borderColor: t.accent + '20' }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  What you get
                </p>
                <ul className="space-y-2.5">
                  {t.outcomes.map((o, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-ink leading-snug">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                        style={{ background: t.accent }}>
                        ✓
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tiers */}
              <div className="px-6 py-5" style={{ borderColor: t.accent + '20' }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  How to engage
                </p>
                <div className="space-y-3">
                  {t.tiers.map((tier) => (
                    <div key={tier.n} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: t.accent }}>
                        {tier.n}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-semibold text-sm text-ink">{tier.name}</span>
                          <span className="text-xs font-semibold flex-shrink-0" style={{ color: t.accent }}>
                            {tier.price}
                          </span>
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

        {/* Team strip */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {TEAM.map((p) => (
            <div key={p.name} className="flex gap-4 items-start bg-surface rounded-xl px-5 py-4 border border-border">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                style={{ background: p.accent }}>
                {p.initial}
              </div>
              <div>
                <p className="font-semibold text-sm text-ink">{p.name}</p>
                <p className="text-xs mb-1" style={{ color: p.accent }}>{p.role}</p>
                <p className="text-xs text-muted leading-relaxed">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="bg-surface rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-ink">Start with a free sample analysis</p>
            <p className="text-sm text-muted mt-0.5">
              Send us 20-50 properties or assets. We return a sample on a subset, enough for your committee, plus a fixed-fee quote.
            </p>
          </div>
          <a href="#contact"
            className="bg-teal text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-teal-dark transition-colors flex-shrink-0">
            Request a pilot
          </a>
        </div>

      </div>
    </section>
  )
}
