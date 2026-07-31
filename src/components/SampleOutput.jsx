import { useState } from 'react'
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, LabelList,
} from 'recharts'
import { trackA } from '../data/trackA'
import { trackB } from '../data/trackB'

// ── Badge colours ─────────────────────────────────────────────────────────────
const BADGE = {
  loan:  { bg: '#E4F5EE', text: '#0F5C3F' },
  blend: { bg: '#EBF2F7', text: '#243545' },
  grant: { bg: '#FFFBF0', text: '#633806' },
  gray:  { bg: '#F5F5F3', text: '#888786' },
}

function Badge({ type, label }) {
  const s = BADGE[type] || BADGE.gray
  return (
    <span className="text-xs font-semibold px-2 py-0.5 rounded"
      style={{ background: s.bg, color: s.text }}>
      {label}
    </span>
  )
}

// ── Rank dot ──────────────────────────────────────────────────────────────────
const RANK_COLORS = ['#1D9E75','#2A8A6A','#3A7A60','#4A6A55','#888780']
const RANK_COLORS_B = ['#3D5A6E','#4A6A80','#5A7A8E','#6A8A9E','#888780']

function RankDot({ n, accent }) {
  const colors = accent === '#1D9E75' ? RANK_COLORS : RANK_COLORS_B
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold flex-shrink-0"
      style={{ background: colors[n - 1] }}>
      {n}
    </span>
  )
}

// ── EAL flow ──────────────────────────────────────────────────────────────────
function EALFlow({ data, accent }) {
  return (
    <div className="bg-surface rounded-xl p-5">
      <div className="grid grid-cols-[1fr_24px_1fr_24px_1fr] items-center gap-1">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">{data.baseline.label}</p>
          <p className="text-2xl font-bold text-ink">{data.baseline.value}</p>
          <p className="text-xs text-muted mt-0.5">{data.baseline.sub}</p>
        </div>
        <div className="text-xl text-muted text-center">−</div>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">{data.mitigated.label}</p>
          <p className="text-2xl font-bold" style={{ color: accent === '#1D9E75' ? '#085041' : '#243545' }}>{data.mitigated.value}</p>
          <p className="text-xs text-muted mt-0.5">{data.mitigated.sub}</p>
        </div>
        <div className="text-xl text-muted text-center">=</div>
        <div className="text-center rounded-xl p-3" style={{ background: accent }}>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">{data.avoided.label}</p>
          <p className="text-2xl font-bold text-white">{data.avoided.value}</p>
          <p className="text-xs text-white/70 mt-0.5">{data.avoided.sub}</p>
        </div>
      </div>
      <p className="text-xs text-muted text-center mt-3 pt-3 border-t border-border italic">{data.note}</p>
    </div>
  )
}

// ── Secondary boxes ───────────────────────────────────────────────────────────
function SecondaryBoxes({ title, boxes, note, accent, accentDark }) {
  return (
    <div className="bg-surface rounded-xl p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">{title}</p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        {boxes.map((b, i) => (
          <div key={i} className="bg-white rounded-lg p-3 text-center border border-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">{b.label}</p>
            <p className="text-xl font-bold" style={{ color: accentDark }}>{b.value}</p>
            <p className="text-xs mt-1" style={{ color: accent }}>{b.sub}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted italic">{note}</p>
    </div>
  )
}

// ── KPI row ───────────────────────────────────────────────────────────────────
function KPIRow({ kpis, accent }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {kpis.map((k, i) => (
        <div key={i} className="bg-surface rounded-xl p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">{k.label}</p>
          <p className="text-2xl font-bold" style={{ color: k.accent ? accent : '#2C2C2A' }}>
            {k.value}
            {k.denom && <span className="text-base font-normal text-muted ml-1">{k.denom}</span>}
          </p>
          <p className="text-xs text-muted mt-0.5">{k.sub}</p>
        </div>
      ))}
    </div>
  )
}

// ── Intervention table ────────────────────────────────────────────────────────
function InterventionTable({ interventions, tableLabel, tableCol6, accent }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">{tableLabel}</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="bg-surface text-left">
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider w-6"></th>
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider">Intervention</th>
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider text-right">Cost</th>
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider text-right">EAL avoided / yr</th>
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider">Share of total</th>
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider text-right">{tableCol6}</th>
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider text-right">Cumulative</th>
              <th className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider">Financing</th>
            </tr>
          </thead>
          <tbody>
            {interventions.map((row, i) => (
              <tr key={row.rank} className={i % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                <td className="px-3 py-3">
                  <RankDot n={row.rank} accent={accent} />
                </td>
                <td className="px-3 py-3">
                  <p className="font-semibold text-ink text-sm leading-tight">{row.name}</p>
                  <p className="text-xs text-muted mt-0.5">{row.sub}</p>
                </td>
                <td className="px-3 py-3 text-right font-mono text-sm">{row.cost}</td>
                <td className="px-3 py-3 text-right">
                  <p className="font-semibold text-sm">{row.eal}</p>
                  <p className="text-xs text-muted">{row.ealTotal}</p>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden" style={{ minWidth: 60 }}>
                      <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: accent }} />
                    </div>
                    <span className="text-xs text-muted w-8 text-right">
                      {row.contrib}%
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3 text-right font-semibold text-sm">{row.dscr}</td>
                <td className="px-3 py-3 text-right font-semibold text-sm">{row.cumul}</td>
                <td className="px-3 py-3"><Badge type={row.badgeType} label={row.badge} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Donut chart ───────────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="bg-white border border-border rounded-lg p-2 shadow-sm text-xs">
      <p className="font-semibold text-ink">{d.name}</p>
      <p className="text-muted">{d.value} · {d.pct}%</p>
    </div>
  )
}

function AllocationDonut({ data, label, note, accent }) {
  const total = data.reduce((s, d) => s + d.pct, 0)
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">{label}</p>
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="pct" cx="50%" cy="50%"
              innerRadius="55%" outerRadius="80%"
              paddingAngle={2} startAngle={90} endAngle={-270}>
              {data.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-1.5 mt-2">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
            <span className="text-xs text-muted flex-1">{d.name}</span>
            <span className="text-xs font-semibold text-ink">{d.value}</span>
            <span className="text-xs text-muted w-8 text-right">{d.pct}%</span>
          </div>
        ))}
      </div>
      {note && <p className="text-xs text-muted mt-3 pt-3 border-t border-border">{note}</p>}
    </div>
  )
}

// ── Financing bar chart ───────────────────────────────────────────────────────
const BADGE_COLORS = {
  loan:  '#1D9E75',
  blend: '#3D5A6E',
  grant: '#C07A10',
  gray:  '#B4B2A9',
}

function FinancingBars({ data, label, note, note2 }) {
  const max = Math.max(...data.map(d => d.count))
  const chartData = data.map(d => ({ ...d, fill: BADGE_COLORS[d.badgeType] || '#B4B2A9' }))
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">{label}</p>
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 32, top: 4, bottom: 4 }}>
            <XAxis type="number" hide domain={[0, max + 2]} />
            <YAxis type="category" dataKey="badge" width={100}
              tick={{ fontSize: 11, fill: '#888786' }} />
            <Bar dataKey="count" radius={[0, 4, 4, 0]} maxBarSize={20}>
              {chartData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
              <LabelList dataKey="count" position="right"
                style={{ fontSize: 12, fontWeight: 600, fill: '#2C2C2A' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {note  && <p className="text-xs text-muted mt-3 pt-3 border-t border-border">{note}</p>}
      {note2 && <p className="text-xs text-muted mt-2">{note2}</p>}
    </div>
  )
}

// ── Summary callout ───────────────────────────────────────────────────────────
function SummaryCallout({ data, accent, accentLight, accentDark }) {
  return (
    <div className="rounded-xl p-5 border-l-4" style={{ background: accentLight, borderColor: accent }}>
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accentDark }}>
        Key findings &amp; recommendations
      </p>
      <p className="font-bold text-lg mb-3" style={{ color: accentDark }}>{data.headline}</p>
      <p className="text-sm leading-relaxed mb-4" style={{ color: accentDark }}>{data.body}</p>
      <div className="space-y-2">
        {data.recs.map((r, i) => (
          <div key={i} className="flex gap-2 text-sm" style={{ color: accentDark }}>
            <span className="w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: accent }}>
              {i + 1}
            </span>
            <span>{r}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Full sample output panel ──────────────────────────────────────────────────
function SamplePanel({ data }) {
  const ac = data.accentColor
  const al = data.accentLight
  const am = data.accentMid
  const ad = data.accentDark

  return (
    <div className="space-y-6">
      {/* Row 1: summary left, EAL right */}
      <div className="grid lg:grid-cols-[1fr_420px] gap-5">
        <SummaryCallout data={data.summary} accent={ac} accentLight={al} accentDark={ad} />
        <div className="space-y-3">
          <EALFlow data={data.eal} accent={ac} />
        </div>
      </div>

      {/* Row 2: secondary boxes + KPIs */}
      <div className="grid lg:grid-cols-[420px_1fr] gap-5">
        <SecondaryBoxes
          title={data.secondaryBoxTitle}
          boxes={data.secondaryBoxes}
          note={data.secondaryNote}
          accent={ac} accentDark={ad}
        />
        <KPIRow kpis={data.kpis} accent={ac} />
      </div>

      {/* Row 3: intervention table */}
      <div className="bg-white rounded-xl border border-border p-5">
        <InterventionTable
          interventions={data.interventions}
          tableLabel={data.tableLabel}
          tableCol6={data.tableCol6}
          accent={ac}
        />
      </div>

      {/* Row 4: donut + bar chart */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl border border-border p-5">
          <AllocationDonut
            data={data.allocation}
            label={data.allocationLabel}
            note={data.allocationNote}
            accent={ac}
          />
        </div>
        <div className="bg-white rounded-xl border border-border p-5">
          <FinancingBars
            data={data.financing}
            label={data.financingLabel}
            note={data.financingNote}
            note2={data.financingNote2}
          />
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-muted leading-relaxed">{data.footer}</p>
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function SampleOutput() {
  const [active, setActive] = useState('a')
  const data = active === 'a' ? trackA : trackB
  const accent = data.accentColor

  return (
    <section id="output" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase text-ink bg-white border border-border px-3 py-1 rounded-full mb-4">
            Sample output
          </div>
          <h2 className="text-3xl font-bold text-ink mb-3">
            What you receive after a pilot
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm">
            De-identified data. Planning-grade estimates. Committee-ready from day one.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 justify-center mb-8">
          {[trackA, trackB].map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
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
        <div className="rounded-xl mb-5 px-5 py-3 flex items-center justify-between"
          style={{ background: accent }}>
          <div>
            <p className="font-bold text-white">{data.header.subtitle}</p>
            <p className="text-white/70 text-xs mt-0.5">{data.header.meta}</p>
          </div>
          <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
            De-identified · planning-grade estimates
          </span>
        </div>

        <SamplePanel data={data} />
      </div>
    </section>
  )
}
