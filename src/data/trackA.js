export const trackA = {
  id: 'a',
  label: 'Bank / Lender Portfolio',
  accentColor: '#1D9E75',
  accentLight: '#E4F5EE',
  accentMid: '#A8D9C3',
  accentDark: '#0F5C3F',

  header: {
    subtitle: 'Bank / lender flood portfolio analysis',
    meta: 'Community bank pilot · 38 properties · Mixed urban portfolio · Flood zones AE & X',
  },

  summary: {
    headline: '21 of 38 properties are loan-viable today',
    body: 'The top two interventions produce $31.3k in combined annual avoided loss at a total cost of $51,200. At 5% over 10 years, debt service of $6,620/yr is covered 4.7× by avoided loss alone. 29% of total avoided loss ($20,600/yr) accrues to the lender as reduced collateral exposure — independently of borrower cash flow.',
    recs: [
      'Originate resilience loans on the 8 AE-zone single-family properties — strongest return, 1.6 yr payback, no grant needed.',
      'Bundle 4 AE-zone multifamily properties for HVAC elevation — 4.7× DSCR; NFIP premium savings provide a secondary repayment stream.',
      'Route 9 blended properties to a grant buydown programme first — public benefit share justifies subsidy.',
    ],
  },

  verdictKpis: [
    { label: 'DSCR — top 2 interventions', value: '4.7×', sub: 'at 5% / 10-year / 1.25× threshold' },
    { label: 'Annual avoided loss',         value: '$71k', denom: '/ yr', sub: '63% reduction in portfolio EAL' },
    { label: 'Lender collateral protection',value: '$20,600', sub: '29% of avoided loss, independent of borrower' },
  ],

  eal: {
    baseline:  { label: 'Baseline EAL',              value: '$112k', sub: 'annual expected loss, no action' },
    mitigated: { label: 'After top-5 interventions', value: '$41k',  sub: 'residual expected annual loss' },
    avoided:   { label: 'Annual avoided loss',        value: '$71k',  sub: '63% reduction' },
    note: 'FEMA HAZUS depth-damage functions · AE/X flood zones · Top-5 covers 32 of 38 properties · 6 properties: insufficient data',
  },

  tableLabel: 'Interventions ranked by avoided loss per dollar invested',
  tableCol6: 'DSCR',

  interventions: [
    {
      rank: 1,
      name: 'Backflow preventer installation',
      sub: 'Single-family · AE zone · 8 properties',
      cost: '$3,200',
      eal: '$1,840–$2,210',
      ealTotal: '~$17.6k total',
      pct: 100, contrib: 25,
      dscr: '3.3×',
      cumul: '$17.6k',
      badge: 'Loan-viable', badgeType: 'loan',
      nfipImpact: {
        amount: 'No RR 2.0 credit',
        note: 'Reduces physical loss; no NFIP premium movement',
      },
    },
    {
      rank: 2,
      name: 'Elevation of HVAC / electrical',
      sub: 'Multifamily · AE zone · 4 properties',
      cost: '$9,500',
      eal: '$4,100–$5,800',
      ealTotal: '~$13.7k total',
      pct: 78, contrib: 19,
      dscr: '2.1×',
      cumul: '$31.3k',
      badge: 'Loan-viable', badgeType: 'loan',
      nfipImpact: {
        amount: 'Est. $900–$1,400/yr',
        note: 'RR 2.0 eligible — machinery/equipment elevation. 18%/yr cap applies.',
      },
    },
    {
      rank: 3,
      name: 'Basement floodproofing',
      sub: 'Mixed-use · AE zone · 3 properties',
      cost: '$14,200',
      eal: '$3,800–$5,200',
      ealTotal: '~$9.9k total',
      pct: 56, contrib: 14,
      dscr: '1.3×',
      cumul: '$41.2k',
      badge: 'Blended', badgeType: 'blend',
      nfipImpact: {
        amount: 'No RR 2.0 credit',
        note: 'Reduces physical loss; no NFIP premium movement',
      },
    },
    {
      rank: 4,
      name: 'Deployable door barrier',
      sub: 'Commercial · X zone · 6 properties',
      cost: '$2,800',
      eal: '$620–$940',
      ealTotal: '~$5.5k total',
      pct: 31, contrib: 8,
      dscr: '1.1×',
      cumul: '$46.7k',
      badge: 'Blended', badgeType: 'blend',
      nfipImpact: null,
    },
    {
      rank: 5,
      name: 'Sump pump + battery backup',
      sub: 'Single-family · X zone · 11 properties',
      cost: '$4,100',
      eal: '$310–$490',
      ealTotal: '~$2.3k total',
      pct: 13, contrib: 3,
      dscr: '0.6×',
      cumul: '$49.0k',
      badge: 'Grant-eligible', badgeType: 'grant',
      nfipImpact: null,
    },
  ],

  allocationLabel: 'Who captures the $71k avoided loss / yr',
  allocation: [
    { name: 'Borrower',          pct: 38, value: '$26,900', color: '#1D9E75' },
    { name: 'Your institution',  pct: 29, value: '$20,600', color: '#3D5A6E' },
    { name: 'Insurer',           pct: 21, value: '$14,900', color: '#C07A10' },
    { name: 'Public sector',     pct: 12, value: '$8,500',  color: '#B4B2A9' },
  ],
  allocationNote: '29% accrues to the lender as reduced collateral exposure — independently of borrower cash flow. This holds even if the borrower does not service the resilience loan.',

  financingLabel: 'Financing classification — 38 properties',
  financing: [
    { badge: 'Loan-viable',       badgeType: 'loan',  desc: 'Avoided loss covers debt service (DSCR ≥ 1.25×)', count: 21 },
    { badge: 'Blended',           badgeType: 'blend', desc: 'Partial loan + grant buydown needed',              count: 9  },
    { badge: 'Grant-eligible',    badgeType: 'grant', desc: 'Public benefit dominates; loan unviable',          count: 5  },
    { badge: 'Insufficient data', badgeType: 'gray',  desc: 'Re-run with full property data',                   count: 3  },
  ],
  financingNote: 'NFIP premium relief (AE-zone properties): est. $900–$1,400/yr where RR 2.0-eligible mitigation is installed. 18%/yr statutory cap applies — relief is a glide path, not an instant cut.',
  financingNote2: 'Methodology: FEMA HAZUS depth-damage functions by occupancy class. Flood zone via FEMA NFHL API. Financing classification at 5% / 10-year / 1.25× DSCR threshold. Illustrative ranges only.',

  footer: 'Planning-grade estimates from de-identified data and documented proxies. Figures are modelled expectations, not realised savings or guaranteed outcomes. NFIP premium impact figures are illustrative ranges; verify against current FEMA RR 2.0 schedules. Not an appraisal, insurance product, or investment advice.',
}