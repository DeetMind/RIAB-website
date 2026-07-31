import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', institution: '', email: '', track: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name:'', institution:'', email:'', track:'', message:'' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputCls = "w-full border border-border rounded-lg px-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-white"

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-teal bg-teal-light px-3 py-1 rounded-full mb-6">
              Start your pilot
            </div>
            <h2 className="text-3xl font-bold text-ink mb-4">
              Free sample analysis, then a fixed-fee quote.
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Send us your intake template with 20–50 properties or assets.
              We'll return a free sample analysis on a subset, enough to take to your committee,
              plus a fixed-fee quote for the full pilot.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { label: 'Track A: bank / lender pilot', price: 'From $7,500', detail: '20–50 properties · 6–8 weeks · fixed scope' },
                { label: 'Track B: infrastructure pilot', price: 'Introductory: at cost', detail: 'One asset class, one jurisdiction · 6–8 weeks' },
              ].map((t) => (
                <div key={t.label} className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-ink">{t.label}</p>
                    <p className="text-xs text-muted mt-0.5">{t.detail}</p>
                  </div>
                  <span className="text-sm font-semibold text-teal flex-shrink-0">{t.price}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Planning-grade estimates from de-identified data. Not an appraisal, insurance product, or investment advice.
              Track B outputs do not constitute advice within the meaning of Section 15B of the Securities Exchange Act.
            </p>
          </div>

          {/* Right — form */}
          <div className="bg-surface rounded-2xl p-8 border border-border">
            {status === 'sent' ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal text-2xl">✓</span>
                </div>
                <h3 className="font-bold text-ink text-lg mb-2">Request received</h3>
                <p className="text-muted text-sm">We'll be in touch within 2 business days with your intake template.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Name</label>
                    <input required value={form.name} onChange={set('name')} placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Institution</label>
                    <input required value={form.institution} onChange={set('institution')} placeholder="Bank, agency, fund…" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Email</label>
                  <input required type="email" value={form.email} onChange={set('email')} placeholder="you@institution.com" className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">I'm interested in</label>
                  <select required value={form.track} onChange={set('track')} className={inputCls}>
                    <option value="">Select a track…</option>
                    <option value="Track A — bank / lender">Track A: bank / lender portfolio</option>
                    <option value="Track B — infrastructure / municipal">Track B: infrastructure / municipal</option>
                    <option value="Both tracks">Both tracks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Anything else</label>
                  <textarea value={form.message} onChange={set('message')} rows={3} placeholder="Portfolio size, asset type, jurisdiction, timeline…" className={`${inputCls} resize-none`} />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-teal text-white py-3 rounded-full font-semibold text-sm hover:bg-teal-dark transition-colors disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Request a pilot →'}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-xs text-center">Something went wrong. Please email me@daniel-talero.com directly.</p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
