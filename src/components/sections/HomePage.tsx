'use client'

import { motion } from 'framer-motion'
import type { PageId } from '@/types'
import { Button } from '@/components/ui'

interface Props {
  onNav: (p: PageId) => void
  onStep: (s: number) => void
  showToast: (msg: string) => void
}

const benefits = [
  { icon: '📞', title: 'Minder telefoons', desc: 'Klanten vinden zelf antwoorden via de AI-assistent en het e-loket.' },
  { icon: '📄', title: 'Documenten centraal', desc: 'Klanten uploaden al hun stukken op één veilige, centrale plek.' },
  { icon: '🕐', title: '24/7 bereikbaar', desc: 'Uw klanten krijgen altijd en overal hulp, ook buiten kantooruren.' },
  { icon: '📋', title: 'Één dashboard', desc: 'Alle dossiers, documenten, vragen en deadlines in één overzicht.' },
  { icon: '🔔', title: 'Automatische reminders', desc: 'Het systeem herinnert klanten bij ontbrekende documenten.' },
  { icon: '💼', title: 'Professionele service', desc: 'Geef klanten een moderne, digitale kantoorbeleving.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function HomePage({ onNav, onStep }: Props) {
  return (
    <div className="px-4 md:px-6 pb-16">
      {/* Hero */}
      <div className="text-center pt-14 pb-10 relative">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-block text-xs px-3 py-1.5 rounded-full border mb-5 tracking-widest"
            style={{
              background: 'var(--cyan-glow)',
              borderColor: 'var(--border2)',
              color: 'var(--cyan)',
            }}
          >
            ⚡ BELTH AI — BOEKHOUDKANTOOR SUITE
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}
        >
          AI e-loket voor moderne{' '}
          <span style={{ color: 'var(--cyan)' }}>boekhoudkantoren</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ color: 'var(--text2)' }}
        >
          Laat klanten documenten uploaden, vragen stellen en automatisch begeleiding
          krijgen via een slimme AI-assistent. Minder telefoons. Meer overzicht.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              onStep(1)
              onNav('portal')
            }}
          >
            ▶ Start interactieve demo
          </Button>
          <Button variant="outline" size="lg" onClick={() => onNav('portal')}>
            👤 Klantportaal
          </Button>
          <Button variant="outline" size="lg" onClick={() => onNav('dashboard')}>
            📊 Dashboard
          </Button>
          <Button variant="outline" size="lg" onClick={() => onNav('cta')}>
            📅 Boek een demo
          </Button>
        </motion.div>
      </div>

      {/* Benefits grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {benefits.map((b) => (
          <motion.div
            key={b.title}
            variants={item}
            className="rounded-xl border p-5 card-hover"
            style={{ background: 'rgba(15,22,40,0.9)', borderColor: 'var(--border)' }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-3"
              style={{ background: 'var(--cyan-glow)' }}
            >
              {b.icon}
            </div>
            <h3 className="text-sm font-semibold mb-1.5" style={{ color: 'var(--text)' }}>
              {b.title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>
              {b.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Social proof strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 rounded-xl border p-5 flex flex-wrap gap-6 justify-around"
        style={{ borderColor: 'var(--border)', background: 'rgba(0,180,255,0.03)' }}
      >
        {[
          ['−62%', 'minder telefoontjes'],
          ['3×', 'snellere documentverwerking'],
          ['24/7', 'klantenondersteuning'],
          ['100%', 'Belgisch & GDPR-conform'],
        ].map(([stat, label]) => (
          <div key={label} className="text-center">
            <div className="text-xl font-bold" style={{ color: 'var(--cyan)' }}>
              {stat}
            </div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
