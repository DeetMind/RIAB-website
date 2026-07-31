export const trackB = {
  id: 'b',
  label: 'Track B: Vermont Infrastructure',
  accentColor: '#3D5A6E',
  accentLight: '#EBF2F7',
  accentMid: '#B0C8D8',
  accentDark: '#243545',

  header: {
    subtitle: 'Infrastructure / municipal resilience analysis',
    meta: 'Vermont pilot · Road infrastructure sector · 24 assets across 6 municipalities',
  },

  summary: {
    headline: '$1.4M/yr in avoided loss achievable, a 60% reduction',
    body: '$2.3M in annual expected loss across 24 road and bridge assets. After the top-5 capital interventions, $1.4M/yr in avoided loss is achievable at a combined cost of $8.7M. Tail-loss exposure at the 1-in-100-year event is $18.4M before mitigation and $7.1M after, a $11.3M reduction. Residual 1-in-100 exposure exceeds available reserves by an estimated $4.2M, indicating a gap suitable for parametric insurance coverage.',
    recs: [
      'Prioritise culvert upgrades on Routes 12 and 107: highest avoided loss per public dollar (3.2× BCR), strongest bond-finance case.',
      'Bundle 5 bridge scour protection projects for a single bond issuance: economies of scale, and combined avoided loss justifies debt service.',
      'Use parametric trigger of 2.5 in/24 hr at Bethel gauge to cover the $4.2M reserve gap, which aligns with Vermont\'s parametric exploration.',
    ],
  },

  eal: {
    baseline:  { label: 'Baseline EAL',              value: '$2.3M', sub: 'annual expected loss, no action' },
    mitigated: { label: 'After top-5 interventions', value: '$0.9M', sub: 'residual expected annual loss' },
    avoided:   { label: 'Annual avoided loss',        value: '$1.4M', sub: '60% reduction in sector EAL' },
    note: 'FEMA HAZUS infrastructure curves + Vermont ANR river corridor data · Top-5 assumes full implementation across 18 of 24 assets · 6 assets: insufficient data',
  },

  secondaryBoxTitle: 'Worst-case flood exposure: before and after top-5 interventions',
  secondaryBoxes: [
    { label: 'If a 1-in-100 flood hits', value: '$18.4M', sub: '→ $7.1M after mitigation' },
    { label: 'If a 1-in-500 flood hits', value: '$41.2M', sub: '→ $18.6M after mitigation' },
  ],
  secondaryNote: 'Reserve adequacy gap (1-in-100): $4.2M · Suggested parametric trigger: 2.5 in/24 hr at Bethel gauge',

  kpis: [
    { label: 'Bond-finance candidates', value: '16', denom: '/ 24', sub: 'avoided loss covers debt service', accent: true },
    { label: 'Total capital needed', value: '$8.7M', sub: 'top-5 interventions, 18 assets' },
    { label: 'Best benefit-cost ratio', value: '3.2×', sub: 'culvert upgrade, Route 107', accent: true },
  ],

  tableLabel: 'Infrastructure projects ranked by avoided loss per public dollar invested',
  tableCol6: 'BCR',
  interventions: [
    { rank:1, name:'Culvert upgrade: Route 107',       sub:'Road infrastructure · river corridor AE zone · Bethel / Stockbridge', cost:'$320k', eal:'$280k–$340k', ealTotal:'~$620k total, 2 municipalities', pct:100, contrib:44, dscr:'3.2×', cumul:'$620k',  badge:'Bond candidate', badgeType:'loan' },
    { rank:2, name:'Bridge scour protection: 5 crossings', sub:'Bridge infrastructure · AE zone · Royalton, Sharon, Tunbridge', cost:'$1.8M', eal:'$190k–$260k', ealTotal:'~$340k total',                  pct:55,  contrib:24, dscr:'2.1×', cumul:'$960k',  badge:'Bond candidate', badgeType:'loan' },
    { rank:3, name:'Road elevation: Route 12',          sub:'Road infrastructure · floodway / AE zone · Randolph',              cost:'$2.4M', eal:'$145k–$195k', ealTotal:'~$240k total',                  pct:39,  contrib:17, dscr:'1.6×', cumul:'$1.2M',  badge:'Blended',        badgeType:'blend' },
    { rank:4, name:'Stormwater retention: 3 outfalls',  sub:'Stormwater infrastructure · X zone · Brookfield, Williamstown',   cost:'$890k', eal:'$68k–$95k',   ealTotal:'~$140k total',                  pct:23,  contrib:10, dscr:'1.2×', cumul:'$1.34M', badge:'Blended',        badgeType:'blend' },
    { rank:5, name:'Road armoring: 4 segments',         sub:'Road infrastructure · river corridor / X zone · 4 towns',         cost:'$3.3M', eal:'$34k–$55k',   ealTotal:'~$60k total',                   pct:10,  contrib:4, dscr:'0.6×', cumul:'$1.4M',  badge:'Grant-eligible',  badgeType:'grant' },
  ],

  allocationLabel: 'Who captures the $1.4M avoided loss / yr',
  allocation: [
    { name:'Public sector',    pct:48, value:'$672k', color:'#3D5A6E' },
    { name:'Municipalities',   pct:31, value:'$434k', color:'#1D9E75' },
    { name:'State / insurer',  pct:21, value:'$294k', color:'#C07A10' },
  ],
  allocationNote: 'Public benefit dominates (79%), strengthening the case for grant participation alongside bond debt. BCRs above 1.0× qualify for FEMA HMGP; 3 of 5 projects meet this threshold.',

  financingLabel: 'Financing classification: 24 assets',
  financing: [
    { badge:'Bond candidate',    badgeType:'loan',  desc:'Avoided loss supports debt service at 5% / 20-yr', count:16 },
    { badge:'Blended',           badgeType:'blend', desc:'Partial bond + HMGP / BRIC grant',                 count:5  },
    { badge:'Grant-eligible',    badgeType:'grant', desc:'BCR < 1.0× for debt; qualifies HMGP',             count:3  },
  ],
  financingNote: 'Parametric insurance: $4.2M cover at 2.5 in/24 hr trigger at Bethel gauge. Closes the 1-in-100 reserve adequacy gap.',
  financingNote2: 'Methodology: FEMA HAZUS infrastructure curves + Vermont ANR river corridor data. Tail loss at USGS AEP estimates (SIR 2025-5016). Financing at 5% / 20-year / 1.0× BCR.',

  footer: 'Planning-grade estimates from de-identified data and documented proxies. Not an appraisal, insurance product, municipal advisor opinion, or investment advice. This analysis does not constitute advice within the meaning of Section 15B of the Securities Exchange Act or a recommendation regarding issuance of municipal securities.',
}
