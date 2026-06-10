'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { PageId } from '@/types'
import { reminders } from '@/data'
import { priorityLabel } from '@/lib/utils'
import { Button, Badge, StepGuide } from '@/components/ui'

interface Props {
  onNav: (p: PageId) => void
  onStep: (s: number) => void
  showToast: (msg: string) => void
}

export default function RemindersPage({ onNav, onStep, showToast }: Props) {
  const [sentIds, setSentIds] = useState<Set<string>>(new Set())
  const [expandedId, setExpandedId] = useState<string | null>('r2')

  function sendReminder(id: string, name: string) {
    setSentIds((prev) => { const s = new Set(prev); s.add(id); return s; })
    showToast(`Herinnering verzonden naar ${name} ✓`)
    onStep(8)
  }

  return (
    <div className="px-4 md:px-6 py-6">
      <StepGuide
        step={8}
        title="Smart Reminders:"
        description='Klik op "Verstuur herinnering" om automatisch een melding te sturen naar de klant.'
      />

      {/* Summary */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          ['4', 'Klanten wachten', 'pending'],
          [`${sentIds.size}`, 'Verzonden', 'sent'],
          ['0', 'Beantwoord', 'responded'],
        ].map(([n, l]) => (
          <div key={l} className="rounded-xl border p-3 text-center"
            style={{ background: 'rgba(0,180,255,0.04)', borderColor: 'var(--border)' }}>
            <div className="text-xl font-bold" style={{ color: 'var(--cyan)' }}>{n}</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{l}</div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {reminders.map((r) => {
          const isSent = sentIds.has(r.id)
          const isExpanded = expandedId === r.id

          return (
            <motion.div
              key={r.id}
              layout
              className="rounded-xl border overflow-hidden"
              style={{
                background: 'rgba(15,22,40,0.95)',
                borderColor: isSent ? 'rgba(0,214,143,0.3)' : 'var(--border)',
              }}
            >
              {/* Header */}
              <div
                className="flex items-start justify-between p-4 cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : r.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{r.clientName}</span>
                    <Badge variant={r.priority}>{priorityLabel(r.priority)}</Badge>
                    {isSent && <Badge variant="success">✓ Verzonden</Badge>}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--warning)' }}>
                    ⚠ Ontbreekt: {r.missingDocs.join(', ')}
                  </div>
                </div>
                <span className="text-xs ml-3 mt-0.5" style={{ color: 'var(--text3)' }}>
                  {isExpanded ? '▲' : '▼'}
                </span>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 border-t pt-3" style={{ borderColor: 'var(--border)' }}>
                      {/* Preview message */}
                      <div className="rounded-lg p-3 mb-3 text-xs leading-relaxed italic"
                        style={{ background: 'rgba(0,180,255,0.04)', borderLeft: '2px solid var(--cyan)', paddingLeft: '12px', color: 'var(--text2)' }}>
                        "{r.message}"
                      </div>

                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="text-xs" style={{ color: 'var(--text2)' }}>
                          Deadline: <span style={{ color: 'var(--warning)' }}>{r.deadline}</span>
                        </div>
                        <div className="flex gap-2">
                          {!isSent ? (
                            <>
                              <Button
                                variant="primary"
                                size="sm"
                                onClick={() => sendReminder(r.id, r.clientName)}
                              >
                                🔔 Verstuur herinnering
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => showToast(`Automatische herinnering gepland voor ${r.clientName}`)}
                              >
                                ⏰ Plan automatisch
                              </Button>
                            </>
                          ) : (
                            <div className="text-sm" style={{ color: 'var(--success)' }}>
                              ✓ Herinnering verzonden — klant status: Wacht op reactie
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {sentIds.size > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex justify-end"
        >
          <Button variant="primary" size="md" onClick={() => { onStep(8); onNav('cta') }}>
            Bekijk eindscherm ▶
          </Button>
        </motion.div>
      )}
    </div>
  )
}
