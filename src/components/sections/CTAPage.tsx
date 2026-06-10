'use client'

import { motion } from 'framer-motion'
import type { PageId } from '@/types'
import { Button } from '@/components/ui'

interface Props {
  onNav: (p: PageId) => void
}

const features = [
  { icon: '📞', title: 'Minder telefoons', desc: 'Klanten vinden antwoorden via de AI-assistent' },
  { icon: '📄', title: 'Centrale documenten', desc: 'Geen verloren e-mails of WhatsApp meer' },
  { icon: '🔔', title: 'Automatisch herinneren', desc: 'Nooit meer achter documenten aanjagen' },
  { icon: '📊', title: 'Volledig overzicht', desc: 'Alle dossiers, deadlines en vragen op één plek' },
  { icon: '⚡', title: 'AI-documentherkenning', desc: 'Facturen automatisch herkend en gesorteerd' },
  { icon: '🕐', title: '24/7 ondersteuning', desc: 'Klanten geholpen ook buiten kantooruren' },
]

const sectors = [
  { label: '🍽 Restaurant', page: 'home' as PageId },
  { label: '🏥 Huisarts', page: 'home' as PageId },
  { label: '⚖ Notaris', page: 'home' as PageId },
  { label: '🏗 Aannemer', page: 'home' as PageId },
]

export default function CTAPage({ onNav }: Props) {
  return (
    <div className="px-4 md:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border p-8 text-center mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(0,180,255,0.07) 0%, rgba(0,180,255,0.02) 100%)',
          borderColor: 'var(--border2)',
        }}
      >
        <div
          className="inline-block text-xs px-3 py-1.5 rounded-full border mb-5 tracking-widest"
          style={{ background: 'rgba(0,214,143,0.1)', borderColor: 'rgba(0,214,143,0.3)', color: 'var(--success)' }}
        >
          ✓ DEMO VOLTOOID
        </div>

        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4"
          style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
          Maak uw boekhoudkantoor slimmer,{' '}
          <span style={{ color: 'var(--cyan)' }}>sneller</span> en professioneler.
        </h2>

        <p className="text-sm max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--text2)' }}>
          Met het <strong style={{ color: 'var(--text)' }}>BELTH AI e-loket</strong> krijgen uw klanten 24/7
          ondersteuning, uploaden ze documenten op één centrale plek en krijgt uw team een duidelijk overzicht
          van alle dossiers. Belgisch gemaakt, GDPR-conform, klaar in 5 werkdagen.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Button variant="primary" size="lg">
            📅 Boek een gratis demo
          </Button>
          <Button variant="outline" size="lg">
            💶 Vraag prijs aan
          </Button>
          <Button variant="outline" size="lg">
            💬 Contacteer BELTH
          </Button>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border p-3 text-left"
              style={{ background: 'rgba(0,180,255,0.04)', borderColor: 'var(--border)' }}>
              <div className="text-lg mb-1.5">{f.icon}</div>
              <div className="text-xs font-semibold mb-1" style={{ color: 'var(--text)' }}>{f.title}</div>
              <div className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Sector demos */}
        <div className="border-t pt-5" style={{ borderColor: 'var(--border)' }}>
          <div className="text-xs mb-3" style={{ color: 'var(--text2)' }}>
            Ook beschikbaar voor andere sectoren:
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {sectors.map((s) => (
              <button
                key={s.label}
                onClick={() => onNav(s.page)}
                className="px-3 py-1.5 rounded-full border text-xs transition-all"
                style={{ borderColor: 'var(--border2)', color: 'var(--text2)', background: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan)'
                  e.currentTarget.style.color = 'var(--cyan)'
                  e.currentTarget.style.background = 'var(--cyan-glow)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border2)'
                  e.currentTarget.style.color = 'var(--text2)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {s.label} demo
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}
      >
        <div>
          <div className="font-bold text-base" style={{ color: 'var(--text)' }}>BELTH</div>
          <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
            AI-First Engineering · Zottegem, België
          </div>
          <div className="text-xs mt-1" style={{ color: 'var(--text3)' }}>belth.net · info@belth.net</div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="primary">
            📧 Stuur e-mail
          </Button>
          <Button size="sm" variant="outline">
            🌐 belth.net
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
