export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white text-base tracking-tight">⌐RIAB┐</span>
          <span className="text-sm">Resilience-in-a-Box</span>
        </div>
        <p className="text-xs text-center md:text-right max-w-lg leading-relaxed">
          Built by Resilience Delta &amp; Public Innovate.
          Planning-grade estimates only. Not an appraisal, insurance product, or investment advice.
          Track B outputs do not constitute advice under Section 15B of the Securities Exchange Act.
        </p>
      </div>
    </footer>
  )
}
