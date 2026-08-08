import { useState } from 'react'
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, LabelList,
} from 'recharts'
import { trackA } from '../data/trackA'
import { trackB } from '../data/trackB'

// ── Colours ───────────────────────────────────────────────────────────────────
const BADGE_STYLES = {
  loan:  { bg: '#E4F5EE', text: '#0F5C3F' },
  blend: { bg: '#EBF2F7', text: '#243545' },
  grant: { bg: '#FFFBF0', text: '#633806' },
  gray:  { bg: '#F5F5F3', text: '#888786' },
}
const BADGE_BAR_COLORS = {
  loan: '#1D9E75', blend: '#3D5A6E', grant: '#C07A10', gray: '#B4B2A9',
}
const RANK_A = ['#1D9E75','#2A8A6A','#3A7A60','#4A6A55','#888780']
const RANK_B = ['#3D5A6E','#4A6A80','#5A7A8E','#6A8A9E','#888780']

// ── Primitives ────────────────────────────────────────────────────────────────
function Badge({ type, label }) {
  const s = BADGE_STYLES[type] || BADGE_STYLES.gray
  return (
    <span className="text-xs font-semibold rounded px-2 py-0.5 whitespace-nowrap"
      style={{ background: s.bg, color: s.text }}>
      {label}
    </span>
  )
}

function RankDot({ n, isA }) {
  const c = (isA ? RANK_A : RANK_B)[n - 1] ?? '#888780'
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold flex-shrink-0"
      style={{ background: c }}>
      {n}
    </span>
  )
}

// ── Verdict card ──────────────────────────────────────────────────────────────
function VerdictCard({ data }) {
  const ac = data.accentColor
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: '#1C2B24' }}>
      <div className="grid lg:grid-cols-[1fr_320px]">

        {/* Left — finding + recs */}
        <div className="p-6 lg:p-7">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: ac }}>
            Key findings &amp; recommendations
          </p>
          <p className="text-xl font-bold text-white leading-snug mb-3">
            {data.summary.headline}
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#9DB8AB' }}>
            {data.summary.body}
          </p>
          <div className="space-y-2">
            {data.summary.recs.map((r, i) => (
              <div key={i} className="flex gap-2.5 text-sm" style={{ color: '#C8DDD6' }}>
                <span className="w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: ac }}>
                  {i + 1}
                </span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — KPIs + compact EAL */}
        <div className="p-6 lg:p-7 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col gap-4">

          {/* 3 KPIs */}
          <div className="space-y-2">
            {data.verdictKpis.map((k, i) => (
              <div key={i} className="rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#9DB8AB' }}>
                  {k.label}
                </p>
                <p className="text-xl font-bold" style={{ color: i === 0 ? ac : '#fff' }}>
                  {k.value}
                  {k.denom && <span className="text-sm font-normal ml-1" style={{ color: '#9DB8AB' }}>{k.denom}</span>}
                </p>
                {k.sub && <p className="text-xs mt-0.5" style={{ color: '#9DB8AB' }}>{k.sub}</p>}
              </div>
            ))}
          </div>

          {/* Compact EAL */}
          <div className="rounded-xl p-4 border border-white/10">
            <p className="text-xs uppercase tracking-wider mb-3 text-center" style={{ color: '#9DB8AB' }}>
              How the avoided loss is derived
            </p>
            <div className="flex items-center justify-between gap-1">
              {[
                { label: 'Baseline', value: data.eal.baseline.value, color: '#fff' },
                { label: '−', value: null },
                { label: 'After', value: data.eal.mitigated.value, color: '#fff' },
                { label: '=', value: null },
                { label: 'Avoided', value: data.eal.avoided.value, color: ac },
              ].map((item, i) => item.value === null ? (
                <span key={i} className="text-lg font-light" style={{ color: '#9DB8AB' }}>{item.label}</span>
              ) : (
                <div key={i} className="text-center flex-1">
                  <p className="text-xs" style={{ color: '#9DB8AB' }}>{item.label}</p>
                  <p className="text-base font-bold" style={{ color: item.color }}>{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs italic mt-3 text-center" style={{ color: '#9DB8AB' }}>
              {data.eal.note}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

// ── Intervention table — Track A ──────────────────────────────────────────────
function TableA({ interventions, accent }) {
  const lastLoan = interventions.reduce((l, r, i) => r.badgeType === 'loan' ? i : l, -1)
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Interventions ranked by avoided loss per dollar invested
        </p>
        <p className="text-xs text-muted mt-0.5">
          Above the divider: loan-viable at 5% / 10-year / 1.25× DSCR without grant support.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse', minWidth: 760 }}>
          <thead>
            <tr style={{ background: '#F5F5F3' }}>
              <th className="px-3 py-2 w-8" />
              <th className="px-3 py-2 text-left text-xs font-semibold text-muted uppercase tracking-wider">Intervention</th>
              <th className="px-3 py-2 text-right text-xs font-semibold text-muted uppercase tracking-wider">Cost</th>
              <th className="px-3 py-2 text-right text-xs font-semibold text-muted uppercase tracking-wider">EAL avoided / yr</th>
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider w-28">Share</th>
              <th className="px-3 py-2 text-right text-xs font-semibold text-muted uppercase tracking-wider">DSCR</th>
              <th className="px-3 py-2 text-left text-xs font-semibold text-muted uppercase tracking-wider w-44">
                NFIP impact <span className="normal-case font-normal text-muted">(illus.)</span>
              </th>
              <th className="px-3 py-2 text-left text-xs font-semibold text-muted uppercase tracking-wider">Decision</th>
            </tr>
          </thead>
          <tbody>
            {interventions.map((row, i) => (
              <>
                <tr key={row.rank} style={{ background: i % 2 === 0 ? '#fff' : '#F9F9F8' }}>
                  <td className="px-3 py-2.5"><RankDot n={row.rank} isA /></td>
                  <td className="px-3 py-2.5">
                    <p className="font-semibold text-ink text-sm leading-tight">{row.name}</p>
                    <p className="text-xs text-muted mt-0.5">{row.sub}</p>
                  </td>
                  <td className="px-3 py-2.5 text-right font-mono text-sm">{row.cost}</td>
                  <td className="px-3 py-2.5 text-right">
                    <p className="font-semibold text-sm">{row.eal}</p>
                    <p className="text-xs text-muted">{row.ealTotal}</p>
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: accent }} />
                      </div>
                      <span className="text-xs text-muted w-7 text-right">{row.contrib}%</span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <span className="text-sm font-bold"
                      style={{ color: parseFloat(row.dscr) >= 1.25 ? '#0F5C3F' : parseFloat(row.dscr) >= 1.0 ? '#C07A10' : '#888786' }}>
                      {row.dscr}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    {row.nfipImpact ? (
                      <>
                        <p className="text-xs font-semibold text-ink">{row.nfipImpact.amount}</p>
                        <p className="text-xs text-muted mt-0.5 leading-tight">{row.nfipImpact.note}</p>
                      </>
                    ) : (
                      <p className="text-xs text-muted italic">—</p>
                    )}
                  </td>
                  <td className="px-3 py-2.5"><Badge type={row.badgeType} label={row.badge} /></td>
                </tr>
                {i === lastLoan && (
                  <tr key="div">
                    <td colSpan={8} style={{ padding: 0 }}>
                      <div className="flex items-center gap-3 px-3 py-1.5" style={{ background: '#F0FBF5' }}>
                        <div className="flex-1 h-px" style={{ background: accent }} />
                        <span className="text-xs font-semibold whitespace-nowrap" style={{ color: accent }}>
                          Loan-viable above · Grant or blended below
                        </span>
                        <div className="flex-1 h-px" style={{ background: accent }} />
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Intervention table — Track B ──────────────────────────────────────────────
function TableB({ interventions, accent }) {
  const lastBond = interventions.reduce((l, r, i) => r.badgeType === 'loan' ? i : l, -1)
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Infrastructure projects ranked by avoided loss per public dollar invested
        </p>
        <p className="text-xs text-muted mt-0.5">
          Above the divider: BCR ≥ 1.0×, FEMA HMGP eligible and bond-viable at 5% / 20-year.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse', minWidth: 820 }}>
          <thead>
            <tr style={{ background: '#F5F5F3' }}>
              <th className="px-3 py-2 w-8" />
              <th className="px-3 py-2 text-left text-xs font-semibold text-muted uppercase tracking-wider">Project</th>
              <th className="px-3 py-2 text-right text-xs font-semibold text-muted uppercase tracking-wider">Capital cost</th>
              <th className="px-3 py-2 text-right text-xs font-semibold text-muted uppercase tracking-wider">EAL avoided / yr</th>
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider w-28">Share</th>
              <th className="px-3 py-2 text-right text-xs font-semibold text-muted uppercase tracking-wider">BCR</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-muted uppercase tracking-wider">HMGP</th>
              <th className="px-3 py-2 text-left text-xs font-semibold text-muted uppercase tracking-wider">
                Financing stack <span className="normal-case font-normal">(illus.)</span>
              </th>
              <th className="px-3 py-2 text-left text-xs font-semibold text-muted uppercase tracking-wider">Decision</th>
            </tr>
          </thead>
          <tbody>
            {interventions.map((row, i) => (
              <>
                <tr key={row.rank} style={{ background: i % 2 === 0 ? '#fff' : '#F9F9F8' }}>
                  <td className="px-3 py-2.5"><RankDot n={row.rank} isA={false} /></td>
                  <td className="px-3 py-2.5">
                    <p className="font-semibold text-ink text-sm leading-tight">{row.name}</p>
                    <p className="text-xs text-muted mt-0.5">{row.sub}</p>
                  </td>
                  <td className="px-3 py-2.5 text-right font-mono text-sm">{row.cost}</td>
                  <td className="px-3 py-2.5 text-right">
                    <p className="font-semibold text-sm">{row.eal}</p>
                    <p className="text-xs text-muted">{row.ealTotal}</p>
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: accent }} />
                      </div>
                      <span className="text-xs text-muted w-7 text-right">{row.contrib}%</span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <span className="text-sm font-bold"
                      style={{ color: parseFloat(row.dscr) >= 1.0 ? '#243545' : '#888786' }}>
                      {row.dscr}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    {row.hmgpEligible
                      ? <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: '#E4F5EE', color: '#0F5C3F' }}>Yes</span>
                      : <span className="text-xs text-muted">—</span>
                    }
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1 flex-wrap">
                      {(row.financingStack || []).map((s, si) => (
                        <span key={si} className="text-xs px-1.5 py-0.5 rounded font-medium"
                          style={{ background: s.color + '22', color: s.color }}>
                          {s.label}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-2.5"><Badge type={row.badgeType} label={row.badge} /></td>
                </tr>
                {i === lastBond && (
                  <tr key="div">
                    <td colSpan={9} style={{ padding: 0 }}>
                      <div className="flex items-center gap-3 px-3 py-1.5" style={{ background: '#EBF2F7' }}>
                        <div className="flex-1 h-px" style={{ background: accent }} />
                        <span className="text-xs font-semibold whitespace-nowrap" style={{ color: accent }}>
                          Bond-viable above · Grant or blended below
                        </span>
                        <div className="flex-1 h-px" style={{ background: accent }} />
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Donut ─────────────────────────────────────────────────────────────────────
const DonutTip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="bg-white border border-border rounded-lg p-2 shadow text-xs">
      <p className="font-semibold text-ink">{d.name}</p>
      <p className="text-muted">{d.value} · {d.pct}%</p>
    </div>
  )
}

function Donut({ data, label, centreLabel, centreSub, note }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">{label}</p>
      <div className="relative h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="pct" cx="50%" cy="50%"
              innerRadius="52%" outerRadius="76%"
              paddingAngle={2} startAngle={90} endAngle={-270}>
              {data.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Pie>
            <Tooltip content={<DonutTip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-2xl font-bold text-ink">{centreLabel}</p>
          <p className="text-xs text-muted mt-0.5 text-center px-6 leading-tight">{centreSub}</p>
        </div>
      </div>
      <div className="space-y-1.5 mt-2">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: d.color }} />
            <span className="text-xs text-muted flex-1">{d.name}</span>
            <span className="text-xs font-semibold text-ink">{d.value}</span>
            <span className="text-xs text-muted w-8 text-right">{d.pct}%</span>
          </div>
        ))}
      </div>
      {note && <p className="text-xs text-muted mt-3 pt-3 border-t border-border italic leading-relaxed">{note}</p>}
    </div>
  )
}

// ── Financing bars (Track A) ──────────────────────────────────────────────────
function FinancingBars({ data, label, note, note2 }) {
  const max = Math.max(...data.map(d => d.count))
  const chartData = data.map(d => ({ ...d, fill: BADGE_BAR_COLORS[d.badgeType] || '#B4B2A9' }))
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">{label}</p>
      <p className="text-xs text-muted mb-3">Properties above DSCR 1.25× can be originated today without grant support.</p>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 32, top: 4, bottom: 4 }}>
            <XAxis type="number" hide domain={[0, max + 3]} />
            <YAxis type="category" dataKey="badge" width={108} tick={{ fontSize: 11, fill: '#888786' }} />
            <Bar dataKey="count" radius={[0, 4, 4, 0]} maxBarSize={20}>
              {chartData.map((e, i) => <Cell key={i} fill={e.fill} />)}
              <LabelList dataKey="count" position="right" style={{ fontSize: 13, fontWeight: 700, fill: '#2C2C2A' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {note  && <p className="text-xs text-muted mt-3 pt-3 border-t border-border italic leading-relaxed">{note}</p>}
      {note2 && <p className="text-xs text-muted mt-2 italic leading-relaxed">{note2}</p>}
    </div>
  )
}

// ── Capital stack bars (Track B) ──────────────────────────────────────────────
function CapitalStack({ data, label, note }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">{label}</p>
      <p className="text-xs text-muted mb-3">How the $8.7M capital programme assembles across financing sources (illustrative).</p>
      <div className="space-y-2.5">
        {data.map((proj, i) => {
          const total = proj.segments.reduce((s, seg) => s + seg.value, 0)
          return (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-medium text-ink truncate mr-2 leading-tight">{proj.label}</p>
                <p className="text-xs font-semibold text-muted flex-shrink-0">
                  ${(total / 1e6).toFixed(1)}M
                </p>
              </div>
              <div className="flex h-4 rounded overflow-hidden gap-px">
                {proj.segments.map((seg, si) => {
                  const w = (seg.value / total) * 100
                  return (
                    <div key={si} style={{ width: `${w}%`, background: seg.color, minWidth: w > 5 ? undefined : 0 }}
                      className="flex items-center justify-center" title={`${seg.label}: $${(seg.value / 1e6).toFixed(2)}M`}>
                      {w > 14 && (
                        <span className="text-white text-xs font-semibold truncate px-1">{seg.label}</span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-border">
        {[{ label: 'Bond', color: '#3D5A6E' }, { label: 'HMGP grant', color: '#1D9E75' }, { label: 'BRIC grant', color: '#C07A10' }].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: l.color }} />
            <span className="text-xs text-muted">{l.label}</span>
          </div>
        ))}
        <span className="text-xs text-muted ml-auto italic">Illustrative</span>
      </div>
      {note && <p className="text-xs text-muted mt-2 italic">{note}</p>}
    </div>
  )
}

// ── Panels ────────────────────────────────────────────────────────────────────
function PanelA({ data }) {
  const ac = data.accentColor
  return (
    <div className="space-y-4">
      <VerdictCard data={data} />
      <TableA interventions={data.interventions} accent={ac} />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-border p-5">
          <Donut data={data.allocation} label={data.allocationLabel}
            centreLabel="29%" centreSub="captured by your institution"
            note={data.allocationNote} />
        </div>
        <div className="bg-white rounded-2xl border border-border p-5">
          <FinancingBars data={data.financing} label={data.financingLabel}
            note={data.financingNote} note2={data.financingNote2} />
        </div>
      </div>
      <p className="text-xs text-muted leading-relaxed px-1">{data.footer}</p>
    </div>
  )
}

function PanelB({ data }) {
  const ac = data.accentColor
  return (
    <div className="space-y-4">
      <VerdictCard data={data} />
      <TableB interventions={data.interventions} accent={ac} />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-border p-5">
          <Donut data={data.allocation} label={data.allocationLabel}
            centreLabel="79%" centreSub="public benefit: supports grant case"
            note={data.allocationNote} />
        </div>
        <div className="bg-white rounded-2xl border border-border p-5">
          <CapitalStack data={data.capitalStack} label={data.capitalStackLabel}
            note={data.capitalStackNote} />
        </div>
      </div>
      <p className="text-xs text-muted leading-relaxed px-1">{data.footer}</p>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function SampleOutput() {
  const [active, setActive] = useState('a')
  const data = active === 'a' ? trackA : trackB
  const ac = data.accentColor

  return (
    <section id="output" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-8">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="w-2 h-2 rounded-full" style={{ background: ac }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">Sample output</span>
          </div>
          <h2 className="text-3xl font-bold text-ink mb-2">What you receive after a pilot</h2>
          <p className="text-muted text-sm">
            De-identified data. Planning-grade estimates. Committee-ready from day one.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-5">
          {[trackA, trackB].map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={active === t.id
                ? { background: t.accentColor, color: '#fff' }
                : { background: '#fff', color: '#888786', border: '1px solid #E8E8E6' }
              }>
              {t.label}
            </button>
          ))}
        </div>

        {/* Header strip */}
        <div className="rounded-xl mb-4 px-5 py-3 flex items-center justify-between" style={{ background: ac }}>
          <div>
            <p className="font-bold text-white text-sm">{data.summary.headline}</p>
            <p className="text-white/70 text-xs mt-0.5">{data.header.meta}</p>
          </div>
          <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full flex-shrink-0 ml-4">
            De-identified · planning-grade
          </span>
        </div>

        {active === 'a' ? <PanelA data={trackA} /> : <PanelB data={trackB} />}

      </div>
    </section>
  )
}
