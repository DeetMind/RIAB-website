export const trackB = {
  id: 'b',
  label: 'Infrastructure / Municipal',
  accentColor: '#3D5A6E',
  accentLight: '#EBF2F7',
  accentMid: '#B0C8D8',
  accentDark: '#243545',

  header: {
    subtitle: 'Infrastructure / municipal resilience analysis',
    meta: 'State bond bank pilot · 24 road and bridge assets · 6 municipalities · River corridor AE & X zones',
  },

  summary: {
    headline: '16 of 24 assets support bond financing today',
    body: '$2.3M in annual expected loss across 24 road and bridge assets. After the top-5 interventions, $1.4M/yr in avoided loss is achievable at a combined cost of $8.7M. Worst-case 1-in-100 flood exposure drops from $18.4M to $7.1M — a $11.3M reduction in tail risk. Residual 1-in-100 exposure exceeds current reserves by $4.2M, indicating a gap suitable for parametric coverage.',
    recs: [
      'Prioritise culvert upgrades on the two highest-BCR corridors — 3.2× benefit-cost ratio, strongest bond-finance case.',
      'Bundle 5 bridge scour protection projects into a single issuance — economies of scale; combined avoided loss justifies debt service.',
      'Use parametric trigger (2.5 in/24 hr at regional gauge) to close the $4.2M reserve gap without drawing on operating budget.',
    ],
  },

  verdictKpis: [
    { label: 'Best benefit-cost ratio', value: '3.2×', sub: 'culvert upgrade, Corridor A' },
    { label: 'Annual avoided loss',     value: '$1.4M', denom: '/ yr', sub: '60% reduction in sector EAL' },
    { label: 'Tail risk reduction',     value: '$11.3M', sub: '1-in-100 exposure: $18.4M → $7.1M' },
  ],

  eal: {
    baseline:  { label: 'Baseline EAL',              value: '$2.3M', sub: 'annual expected loss, no action' },
    mitigated: { label: 'After top-5 interventions', value: '$0.9M', sub: 'residual expected annual loss' },
    avoided:   { label: 'Annual avoided loss',        value: '$1.4M', sub: '60% reduction' },
    note: 'FEMA HAZUS infrastructure curves + state agency river corridor data · Top-5 covers 18 of 24 assets · 6 assets: insufficient data',
  },

  tableLabel: 'Infrastructure projects ranked by avoided loss per public dollar invested',
  tableCol6: 'BCR',

  interventions: [
    {
      rank: 1,
      name: 'Culvert upgrade — Corridor A',
      sub: 'Road infrastructure · river corridor AE zone · Towns 1 & 2',
      cost: '$320k',
      eal: '$280k–$340k',
      ealTotal: '~$620k total',
      pct: 100, contrib: 44,
      dscr: '3.2×',
      cumul: '$620k',
      badge: 'Bond candidate', badgeType: 'loan',
      hmgpEligible: true,
      financingStack: [
        { label: 'Bond', color: '#3D5A6E' },
      ],
    },
    {
      rank: 2,
      name: 'Bridge scour protection — 5 crossings',
      sub: 'Bridge infrastructure · AE zone · Towns 3, 4 & 5',
      cost: '$1.8M',
      eal: '$190k–$260k',
      ealTotal: '~$340k total',
      pct: 55, contrib: 24,
      dscr: '2.1×',
      cumul: '$960k',
      badge: 'Bond candidate', badgeType: 'loan',
      hmgpEligible: true,
      financingStack: [
        { label: 'Bond', color: '#3D5A6E' },
        { label: 'HMGP', color: '#1D9E75' },
      ],
    },
    {
      rank: 3,
      name: 'Road elevation — Corridor B flood plain',
      sub: 'Road infrastructure · floodway / AE zone · Town 3',
      cost: '$2.4M',
      eal: '$145k–$195k',
      ealTotal: '~$240k total',
      pct: 39, contrib: 17,
      dscr: '1.6×',
      cumul: '$1.2M',
      badge: 'Blended', badgeType: 'blend',
      hmgpEligible: true,
      financingStack: [
        { label: 'Bond', color: '#3D5A6E' },
        { label: 'HMGP', color: '#1D9E75' },
      ],
    },
    {
      rank: 4,
      name: 'Stormwater retention — 3 outfalls',
      sub: 'Stormwater infrastructure · X zone · Towns 2 & 6',
      cost: '$890k',
      eal: '$68k–$95k',
      ealTotal: '~$140k total',
      pct: 23, contrib: 10,
      dscr: '1.2×',
      cumul: '$1.34M',
      badge: 'Blended', badgeType: 'blend',
      hmgpEligible: true,
      financingStack: [
        { label: 'Bond', color: '#3D5A6E' },
        { label: 'BRIC', color: '#C07A10' },
      ],
    },
    {
      rank: 5,
      name: 'Road armoring — 4 segments',
      sub: 'Road infrastructure · river corridor / X zone · Towns 1, 4, 5 & 6',
      cost: '$3.3M',
      eal: '$34k–$55k',
      ealTotal: '~$60k total',
      pct: 10, contrib: 4,
      dscr: '0.6×',
      cumul: '$1.4M',
      badge: 'Grant-eligible', badgeType: 'grant',
      hmgpEligible: false,
      financingStack: [
        { label: 'BRIC', color: '#C07A10' },
      ],
    },
  ],

  allocationLabel: 'Who captures the $1.4M avoided loss / yr',
  allocation: [
    { name: 'Public sector',   pct: 48, value: '$672k', color: '#3D5A6E' },
    { name: 'Municipalities',  pct: 31, value: '$434k', color: '#1D9E75' },
    { name: 'State / insurer', pct: 21, value: '$294k', color: '#C07A10' },
  ],
  allocationNote: 'Public benefit dominates (79%) — strengthening the case for grant participation alongside bond debt. BCRs above 1.0× qualify for FEMA HMGP; 3 of 5 projects meet this threshold.',

  financingLabel: 'Capital programme — 24 assets',
  financing: [
    { badge: 'Bond candidate',  badgeType: 'loan',  desc: 'Avoided loss supports debt service at 5% / 20-yr', count: 16 },
    { badge: 'Blended',         badgeType: 'blend', desc: 'Partial bond + HMGP / BRIC grant',                 count: 5  },
    { badge: 'Grant-eligible',  badgeType: 'grant', desc: 'BCR < 1.0× for debt; qualifies HMGP',             count: 3  },
  ],
  financingNote: 'Parametric insurance recommended: $4.2M cover at 2.5 in/24 hr trigger at regional gauge. Closes the 1-in-100 reserve adequacy gap without drawing on operating budget.',
  financingNote2: 'Methodology: FEMA HAZUS infrastructure curves + state agency river corridor data. Tail loss at USGS AEP estimates. Financing at 5% / 20-year / 1.0× BCR. All figures illustrative.',

  capitalStackLabel: 'Capital programme assembly — top-5 projects',
  capitalStackNote: 'Bond / HMGP / BRIC proportions are illustrative; actual eligibility requires programme review.',
  capitalStack: [
    {
      label: 'Culvert upgrade — Corridor A',
      segments: [
        { label: 'Bond', value: 320000, color: '#3D5A6E' },
      ],
    },
    {
      label: 'Bridge scour protection',
      segments: [
        { label: 'Bond', value: 1080000, color: '#3D5A6E' },
        { label: 'HMGP', value: 720000,  color: '#1D9E75' },
      ],
    },
    {
      label: 'Road elevation — Corridor B',
      segments: [
        { label: 'Bond', value: 1200000, color: '#3D5A6E' },
        { label: 'HMGP', value: 1200000, color: '#1D9E75' },
      ],
    },
    {
      label: 'Stormwater retention',
      segments: [
        { label: 'Bond', value: 445000, color: '#3D5A6E' },
        { label: 'BRIC', value: 445000, color: '#C07A10' },
      ],
    },
    {
      label: 'Road armoring',
      segments: [
        { label: 'BRIC', value: 3300000, color: '#C07A10' },
      ],
    },
  ],

  footer: 'Planning-grade estimates from de-identified data and documented proxies. Figures are modelled expectations, not realised savings or guaranteed outcomes. Financing stack proportions are illustrative. Not an appraisal, insurance product, municipal advisor opinion, or investment advice. Nothing herein constitutes advice within the meaning of Section 15B of the Securities Exchange Act or a recommendation regarding the issuance of municipal securities.',
}