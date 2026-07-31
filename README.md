# RIAB — Resilience-in-a-Box Website

## Stack
Vite + React + Tailwind CSS v3 + Recharts + Framer Motion

## Local dev
```bash
npm install
npm run dev
```

## Deploy to Vercel

### First time
1. Push this repo to GitHub
2. Go to vercel.com/new → Import Git Repository → select this repo
3. Vercel auto-detects Vite — just click Deploy
4. Add environment variable: `RESEND_API_KEY` = your key from resend.com

### Every update
```bash
git add -A && git commit -m "your message" && git push
```
Vercel redeploys automatically.

## Contact form
The form posts to `/api/contact` (Vercel serverless function).
Set `RESEND_API_KEY` in Vercel environment variables to enable email delivery.
Without it, submissions are logged to console but return 200 (form UX still works).

## File map
```
src/
  components/
    Nav.jsx          — fixed top nav
    Hero.jsx         — hero with animated EAL count-up
    HowItWorks.jsx   — 3-step explainer
    Tracks.jsx       — Track A / B side-by-side + bios
    SampleOutput.jsx — interactive tab dashboard (the centrepiece)
    Contact.jsx      — pilot request form
    Footer.jsx
  data/
    trackA.js        — all Track A content and chart data
    trackB.js        — all Track B content and chart data
api/
  contact.js         — Vercel serverless function → Resend
```

## Iterating
To change content: edit `src/data/trackA.js` or `src/data/trackB.js` — 
all chart data, text, and numbers live there. No component changes needed
for most content updates.
