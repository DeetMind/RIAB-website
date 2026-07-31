export const trackA = {
  id: 'a',
  label: 'Track A: Community Bank',
  accentColor: '#1D9E75',
  accentLight: '#E4F5EE',
  accentMid: '#A8D9C3',
  accentDark: '#0F5C3F',

  header: {
    subtitle: 'Bank / lender flood portfolio analysis',
    meta: 'Spring Bank pilot · 38 properties · Five boroughs, NYC · Flood zones AE & X',
  },

  summary: {
    headline: '21 of 38 properties are loan-viable today',
    body: 'The top two interventions produce $31.3k in combined annual avoided loss at a total cost of $51,200. At 5% over 10 years, debt service of $6,620/yr is covered 4.7× by avoided loss alone. 29% of total avoided loss ($20,600/yr) accrues to the lender as reduced collateral exposure, a credit rationale independent of borrower cash flow. NFIP premium relief adds $3,200–$5,800/yr in real cash savings on AE-zone properties.',
    recs: [
      'Originate resilience loans on the 8 AE-zone single-family properties (backflow preventers): strongest return, shortest payback (1.6 yr), no grant needed.',
      'Bundle the 4 AE-zone multifamily properties for HVAC elevation. A DSCR of 4.7× comfortably meets standard underwriting.',
      'Route 9 blended properties to a grant buydown programme first, since the public benefit share justifies the subsidy.',
    ],
  },

  eal: {
    baseline:  { label: 'Baseline EAL',              value: '$112k', sub: 'annual expected loss, no action' },
    mitigated: { label: 'After top-5 interventions', value: '$41k',  sub: 'residual expected annual loss' },
    avoided:   { label: 'Annual avoided loss',        value: '$71k',  sub: '63% reduction in portfolio EAL' },
    note: 'FEMA HAZUS depth-damage functions calibrated to AE/X zones · Top-5 assumes full implementation across 32 of 38 properties · 6 properties: insufficient data',
  },

  secondaryBoxTitle: 'Lender exposure: collateral protection from top-5 interventions',
  secondaryBoxes: [
    { label: 'Collateral protection / yr', value: '$20,600', sub: '29% of total avoided loss' },
    { label: 'NFIP premium relief / yr',   value: '$3.2–5.8k', sub: 'AE-zone properties, real cash' },
  ],
  secondaryNote: 'DSCR at 5% / 10-yr on top-2 interventions: 4.7× · Financing threshold: 1.25× DSCR',

  kpis: [
    { label: 'Loan-viable',          value: '21', denom: '/ 38', sub: 'cash savings cover debt service', accent: true },
    { label: 'Total intervention cost', value: '$33.8k', sub: 'top-5, 32 properties' },
    { label: 'Best payback',         value: '1.6 yr', sub: 'backflow preventer, AE zone', accent: true },
  ],

  tableLabel: 'Interventions ranked by avoided loss per dollar invested',
  tableCol6: 'DSCR',
  interventions: [
    { rank:1, name:'Backflow preventer installation', sub:'Single-family · AE zone · 8 properties', cost:'$3,200', eal:'$1,840–$2,210', ealTotal:'~$17.6k total', pct:100, contrib:25, dscr:'3.3×', cumul:'$17.6k', badge:'Loan-viable', badgeType:'loan' },
    { rank:2, name:'Elevation of HVAC / electrical',  sub:'Multifamily · AE zone · 4 properties',  cost:'$9,500', eal:'$4,100–$5,800', ealTotal:'~$13.7k total', pct:78,  contrib:19, dscr:'2.1×', cumul:'$31.3k', badge:'Loan-viable', badgeType:'loan' },
    { rank:3, name:'Basement floodproofing',          sub:'Mixed-use · AE zone · 3 properties',    cost:'$14,200',eal:'$3,800–$5,200', ealTotal:'~$9.9k total',  pct:56,  contrib:14, dscr:'1.3×', cumul:'$41.2k', badge:'Blended',    badgeType:'blend' },
    { rank:4, name:'Deployable door barrier',         sub:'Commercial · X zone · 6 properties',    cost:'$2,800', eal:'$620–$940',     ealTotal:'~$5.5k total',  pct:31,  contrib:8, dscr:'1.1×', cumul:'$46.7k', badge:'Blended',    badgeType:'blend' },
    { rank:5, name:'Sump pump + battery backup',      sub:'Single-family · X zone · 11 properties',cost:'$4,100', eal:'$310–$490',     ealTotal:'~$2.3k total',  pct:13,  contrib:3, dscr:'0.6×', cumul:'$49.0k', badge:'Grant-eligible', badgeType:'grant' },
  ],

  allocationLabel: 'Who captures the $71k avoided loss / yr',
  allocation: [
    { name:'Borrower',         pct:38, value:'$26,900', color:'#1D9E75' },
    { name:'Your institution', pct:29, value:'$20,600', color:'#3D5A6E' },
    { name:'Insurer',          pct:21, value:'$14,900', color:'#C07A10' },
    { name:'Public sector',    pct:12, value:'$8,500',  color:'#B4B2A9' },
  ],
  allocationNote: 'Lender value (29%) accrues independently of borrower repayment. Collateral protection holds even if the borrower does not service the resilience loan.',

  financingLabel: 'Financing classification: 38 properties',
  financing: [
    { badge:'Loan-viable',       badgeType:'loan',  desc:'Avoided loss covers debt service (DSCR ≥ 1.25×)', count:21 },
    { badge:'Blended',           badgeType:'blend', desc:'Partial loan + grant buydown needed',              count:9  },
    { badge:'Grant-eligible',    badgeType:'grant', desc:'Public benefit dominates; loan unviable',          count:5  },
    { badge:'Insufficient data', badgeType:'gray',  desc:'Re-run with full property data',                   count:3  },
  ],
  financingNote: 'NFIP premium relief (AE-zone): $3,200–$5,800/yr in additional cash savings where NFIP coverage is held.',
  financingNote2: 'Methodology: FEMA HAZUS depth-damage functions by occupancy class. Flood zone via FEMA NFHL API. Financing at 5% / 10-year / 1.25× DSCR.',

  footer: 'Planning-grade estimates from de-identified data and documented proxies; figures are modelled expectations, not realised savings or guaranteed outcomes. Not an appraisal, insurance product, or investment advice.',
}
