'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { PageId } from '@/types'
import { fakeUploadResults } from '@/data/documents'
import { docTypeLabel } from '@/lib/utils'
import { Card, Button, Badge, StepGuide, TabBar, Avatar, ProgressBar } from '@/components/ui'

interface Props {
  onNav: (p: PageId) => void
  onStep: (s: number) => void
  showToast: (msg: string) => void
}

const uploadTypes = [
  { key: 'aankoopfactuur', icon: '📥', name: 'Aankoopfactuur', sub: 'Factuur van leverancier' },
  { key: 'verkoopfactuur', icon: '📤', name: 'Verkoopfactuur', sub: 'Factuur naar klant' },
  { key: 'bankdocument', icon: '🏦', name: 'Bankdocument', sub: 'Uittreksel of afschrift' },
  { key: 'loonfiche', icon: '💼', name: 'Loonfiche', sub: 'Loon of HR-document' },
]

const uploadedDocs = [
  { name: 'factuur_delhaize_april.pdf', type: 'Aankoopfactuur', date: '02/04/2026' },
  { name: 'verkoopfactuur_0043.pdf', type: 'Verkoopfactuur', date: '05/05/2026' },
  { name: 'bankuittreksel_ING_maart.pdf', type: 'Bankdocument', date: '01/04/2026' },
]

const missingDocs = [
  { name: 'Bankuittreksel april', desc: 'Verwacht eind april' },
  { name: 'Aankoopfactuur leverancier #2', desc: 'Ontbreekt in dossier' },
  { name: 'Verkoopoverzicht Q2', desc: 'Nodig voor btw-aangifte' },
]

const deadlines = [
  { name: 'BTW-aangifte Q2 2026', date: '20 juli 2026', desc: 'Kwartaalaangifte btw', prio: 'high' as const },
  { name: 'Personenbelasting 2026', date: '31 okt. 2026', desc: 'Digitale indiening', prio: 'medium' as const },
  { name: 'Sociale bijdragen Q3', date: '15 sep. 2026', desc: 'Kwartaalbijdrage', prio: 'low' as const },
]

const messages = [
  { unread: false, from: 'Jan Verbeke (Boekhouder)', text: 'Uw btw-aangifte Q1 is ingediend. Alles in orde.', time: '4 jun' },
  { unread: true, from: 'Jan Verbeke (Boekhouder)', text: 'Herinnering: uw bankuittreksel van april ontbreekt nog. Kan u dit uploaden?', time: 'Vandaag' },
]

export default function ClientPortalPage({ onNav, onStep, showToast }: Props) {
  const [activeTab, setActiveTab] = useState('docs')
  const [uploading, setUploading] = useState(false)
  const [uploadResult, setUploadResult] = useState<typeof fakeUploadResults[string] | null>(null)
  const [progress, setProgress] = useState(0)

  const tabs = [
    { id: 'docs', label: '📄 Documenten' },
    { id: 'upload', label: '⬆ Upload' },
    { id: 'deadlines', label: '📅 Deadlines' },
    { id: 'berichten', label: '💬 Berichten' },
  ]

  function doUpload(type: string) {
    setUploading(true)
    setUploadResult(null)
    setProgress(0)

    const tick = setInterval(() => {
      setProgress((p) => {
        if (p >= 90) { clearInterval(tick); return 90 }
        return p + Math.random() * 18
      })
    }, 120)

    setTimeout(() => {
      clearInterval(tick)
      setProgress(100)
      setTimeout(() => {
        setUploading(false)
        setUploadResult(fakeUploadResults[type] ?? fakeUploadResults['aankoopfactuur'])
        showToast('Document ontvangen — boekhouder automatisch verwittigd ✓')
        onStep(2)
      }, 300)
    }, 1600)
  }

  return (
    <div className="px-4 md:px-6 py-6">
      <StepGuide
        step={2}
        title="Klantportaal:"
        description="Sophie Peeters logt in en ziet haar e-loket. Upload een document om de AI-herkenning te testen."
      />

      {/* Portal header */}
      <Card className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Avatar name="Sophie Peeters" size="md" color="cyan" />
        <div className="flex-1">
          <div className="font-bold text-base" style={{ color: 'var(--text)' }}>Sophie Peeters BV</div>
          <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
            Klant #0042 · Dossierbeheerder: Jan Verbeke
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="warning">⚠ 3 documenten ontbreken</Badge>
          <div
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(0,214,143,0.1)', color: 'var(--success)' }}
          >
            ● Online
          </div>
        </div>
      </Card>

      <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'docs' && (
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Geüploade documenten</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>3 documenten ontvangen</div>
                </div>
                <Badge variant="info">Actueel</Badge>
              </div>

              <div className="space-y-2">
                {uploadedDocs.map((d) => (
                  <div key={d.name} className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
                    style={{ background: 'rgba(21,29,53,0.8)', borderColor: 'var(--border)' }}>
                    <span className="text-lg">📄</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate" style={{ color: 'var(--text)' }}>{d.name}</div>
                      <div className="text-xs" style={{ color: 'var(--text2)' }}>{d.type} · {d.date}</div>
                    </div>
                    <span className="text-xs" style={{ color: 'var(--success)' }}>✓ Ontvangen</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="font-semibold text-sm mb-3" style={{ color: 'var(--text)' }}>⚠ Ontbrekende documenten</div>
                <div className="space-y-2">
                  {missingDocs.map((m) => (
                    <div key={m.name} className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
                      style={{ background: 'rgba(21,29,53,0.8)', borderColor: 'rgba(255,184,0,0.15)' }}>
                      <span className="text-lg">❓</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>{m.name}</div>
                        <div className="text-xs" style={{ color: 'var(--warning)' }}>{m.desc}</div>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => setActiveTab('upload')}>Upload</Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'upload' && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {uploadTypes.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => doUpload(t.key)}
                    disabled={uploading}
                    className="rounded-xl border p-4 text-left transition-all duration-150 disabled:opacity-50"
                    style={{ background: 'rgba(21,29,53,0.8)', borderColor: 'var(--border)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyan)'
                      e.currentTarget.style.background = 'var(--cyan-glow)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background = 'rgba(21,29,53,0.8)'
                    }}
                  >
                    <div className="text-2xl mb-2">{t.icon}</div>
                    <div className="text-xs font-semibold" style={{ color: 'var(--text)' }}>{t.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{t.sub}</div>
                  </button>
                ))}
              </div>

              {uploading && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border px-4 py-3"
                  style={{ background: 'rgba(21,29,53,0.8)', borderColor: 'var(--border)' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span>⏳</span>
                    <span className="text-sm" style={{ color: 'var(--text2)' }}>Document uploaden en analyseren...</span>
                  </div>
                  <ProgressBar value={progress} />
                </motion.div>
              )}

              <AnimatePresence>
                {uploadResult && !uploading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3 rounded-xl border px-4 py-3"
                      style={{ background: 'rgba(21,29,53,0.8)', borderColor: 'var(--border)' }}>
                      <span className="text-lg">📄</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{uploadResult.name}</div>
                        <div className="text-xs" style={{ color: 'var(--text2)' }}>{docTypeLabel(uploadResult.type)}</div>
                      </div>
                      <span className="text-xs" style={{ color: 'var(--success)' }}>✓ Document ontvangen</span>
                    </div>

                    <div className="rounded-xl border p-4 space-y-2"
                      style={{ background: 'rgba(0,180,255,0.04)', borderColor: 'var(--border2)' }}>
                      <div className="text-xs font-bold tracking-wider mb-3" style={{ color: 'var(--cyan)' }}>
                        ⚡ AI ANALYSE
                      </div>
                      {[
                        ['Documenttype', docTypeLabel(uploadResult.type)],
                        ['Leverancier', uploadResult.supplier ?? '—'],
                        ['Bedrag', uploadResult.amount ?? '—'],
                        ['Datum', uploadResult.date],
                        ['BTW', uploadResult.vatRate ?? '—'],
                        ['Status', '✓ Klaar voor controle'],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between items-center text-xs">
                          <span style={{ color: 'var(--text2)' }}>{label}</span>
                          <span className="font-medium" style={{ color: value.startsWith('✓') ? 'var(--success)' : 'var(--text)' }}>
                            {value}
                          </span>
                        </div>
                      ))}
                      <div className="pt-2 mt-2 border-t text-xs" style={{ borderColor: 'var(--border)', color: 'var(--success)' }}>
                        ✓ Uw boekhouder ontvangt automatisch een notificatie
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      <Button variant="primary" size="sm" onClick={() => { onStep(4); onNav('chat') }}>
                        Stel een vraag aan AI ▶
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => showToast('Boekhouder verwittigd via e-mail')}>
                        Verwittig boekhouder
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {activeTab === 'deadlines' && (
            <Card>
              <div className="font-semibold text-sm mb-4" style={{ color: 'var(--text)' }}>📅 Mijn deadlines</div>
              <div className="space-y-2">
                {deadlines.map((d) => (
                  <div key={d.name} className="flex items-center justify-between rounded-lg border px-3 py-3"
                    style={{ background: 'rgba(21,29,53,0.8)', borderColor: 'var(--border)' }}>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{d.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{d.desc}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold" style={{ color: 'var(--warning)' }}>{d.date}</div>
                      <Badge variant={d.prio} className="mt-1">
                        {d.prio === 'high' ? 'Dringend' : d.prio === 'medium' ? 'Gepland' : 'Laag'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'berichten' && (
            <Card>
              <div className="font-semibold text-sm mb-4" style={{ color: 'var(--text)' }}>💬 Berichten van uw boekhouder</div>
              <div className="space-y-0 divide-y" style={{ borderColor: 'var(--border)' }}>
                {messages.map((m, i) => (
                  <div key={i} className="flex gap-3 py-3">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{ background: m.unread ? 'var(--cyan)' : 'var(--text3)' }}
                    />
                    <div>
                      <div className="text-xs font-semibold" style={{ color: 'var(--text)' }}>{m.from}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{m.text}</div>
                      <div className="text-xs mt-1" style={{ color: 'var(--text3)' }}>{m.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="mt-3 w-full"
                onClick={() => showToast('Berichtvenster geopend')}>
                + Nieuw bericht
              </Button>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
