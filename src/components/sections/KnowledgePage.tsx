'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { knowledgeBase } from '@/data'
import { SectionHeader } from '@/components/ui'

export default function KnowledgePage() {
  const [activeCategory, setActiveCategory] = useState('kosten')
  const [openItemId, setOpenItemId] = useState<string | null>(null)

  const activeCat = knowledgeBase.find((c) => c.id === activeCategory)

  return (
    <div className="px-4 md:px-6 py-6">
      <SectionHeader
        title="AI Kennisbank"
        subtitle="Klanten vinden direct antwoorden zonder de boekhouder te bellen. 24/7 beschikbaar."
      />

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-5">
        {knowledgeBase.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setOpenItemId(null) }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition-all"
            style={{
              background: activeCategory === cat.id ? 'var(--cyan-glow)' : 'rgba(21,29,53,0.8)',
              borderColor: activeCategory === cat.id ? 'var(--cyan)' : 'var(--border)',
              color: activeCategory === cat.id ? 'var(--cyan)' : 'var(--text2)',
            }}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Items */}
      <AnimatePresence mode="wait">
        {activeCat && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-2"
          >
            {activeCat.items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border overflow-hidden"
                style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}
              >
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  onClick={() => setOpenItemId(openItemId === item.id ? null : item.id)}
                >
                  <span className="text-sm font-semibold pr-4" style={{ color: 'var(--text)' }}>
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openItemId === item.id ? 180 : 0 }}
                    style={{ color: 'var(--text3)', fontSize: '10px', flexShrink: 0 }}
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openItemId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t pt-3" style={{ borderColor: 'var(--border)' }}>
                        <div className="text-sm leading-relaxed whitespace-pre-line"
                          style={{ color: 'var(--text2)' }}>
                          {item.answer.replace('\n\nDit is algemene informatie', '')}
                        </div>
                        {item.answer.includes('Dit is algemene informatie') && (
                          <div className="mt-3 text-xs italic rounded-lg p-2.5"
                            style={{
                              background: 'rgba(0,180,255,0.05)',
                              borderLeft: '2px solid var(--border2)',
                              paddingLeft: '10px',
                              color: 'var(--text3)',
                            }}>
                            ℹ Dit is algemene informatie. Voor definitieve fiscale beoordeling controleert uw boekhouder het dossier.
                          </div>
                        )}
                        <button
                          className="mt-3 text-xs"
                          style={{ color: 'var(--cyan)' }}
                          onClick={() => {}}
                        >
                          💬 Stel een vervolgvraag aan AI →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom note */}
      <div className="mt-6 rounded-xl border p-4 text-center"
        style={{ background: 'rgba(0,180,255,0.03)', borderColor: 'var(--border)' }}>
        <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>
          Geen antwoord gevonden?
        </div>
        <div className="text-xs" style={{ color: 'var(--text2)' }}>
          Stel uw vraag direct aan de AI-assistent of stuur een bericht naar uw boekhouder.
        </div>
      </div>
    </div>
  )
}
