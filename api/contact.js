export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, institution, email, track, message } = req.body
  if (!name || !email || !track) return res.status(400).json({ error: 'Missing fields' })

  const RESEND_KEY = process.env.RESEND_API_KEY
  if (!RESEND_KEY) {
    // Log to console in dev; still return 200 so the form UX works
    console.log('CONTACT FORM (no Resend key):', { name, institution, email, track, message })
    return res.status(200).json({ ok: true })
  }

  const body = {
    from: 'RIAB Website <onboarding@resend.dev>',
    to: ['me@daniel-talero.com'],
    reply_to: email,
    subject: `RIAB pilot request — ${track} — ${institution || name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Institution:</strong> ${institution || '—'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Track:</strong> ${track}</p>
      <p><strong>Message:</strong> ${message || '—'}</p>
    `,
  }

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!r.ok) {
    const err = await r.text()
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Email send failed' })
  }

  return res.status(200).json({ ok: true })
}
