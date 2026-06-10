'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { PageId } from '@/types'
import { documents } from '@/data/documents'
import { docTypeLabel } from '@/lib/utils'
import { Card, Button, Badge, StepGuide } from '@/components/ui'

interface Props {
  onStep: (s: number) => void
  showToast: (msg: string) => void
  onNav?: (p: PageId) => void
}

const intakeDoc = documents.find((d) => d.id === 'd4')!

export default function DocumentsPage({ onStep, showToast }: Props) {
  const [docStatus, setDocStatus] = useState<'pending' | 'approved' | 'flagged'>('pending')
  const [processing, setProcessing] = useState(false)

  function handleApprove() {
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setDocStatus('approved')
      showToast('Document goedgekeurd en naar dossier Restaurant Lotus gestuurd ✓')
      onStep(4)
    }, 800)
  }

  function handleFlag() {
    setDocStatus('flagged')
    showToast('Document gemarkeerd als onduidelijk — teruggestuurd naar klant')
  }

  return (
    <div className="px-4 md:px-6 py-6">
      <StepGuide
        step="★"
        title="AI Document Intake:"
        description="Documenten worden automatisch herkend, geanalyseerd en gekoppeld aan de juiste klant."
      />

      {/* Intake queue */}
      <Card className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>📥 Document wachtrij</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>3 nieuwe documenten — 1 wacht op controle</div>
          </div>
          <Badge variant="info">⚡ AI actief</Badge>
        </div>

        <div className="space-y-2">
          {documents.slice(0, 3).filter((d) => d.id !== 'd4').map((doc) => (
            <div key={doc.id} className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
              style={{ background: 'rgba(21,29,53,0.6)', borderColor: 'var(--border)' }}>
              <span className="text-lg">📄</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium truncate" style={{ color: 'var(--text)' }}>{doc.name}</div>
                <div className="text-xs" style={{ color: 'var(--text2)' }}>
                  {docTypeLabel(doc.type)} · {doc.clientName}
                </div>
              </div>
              <Badge variant="success">✓ Goedgekeurd</Badge>
            </div>
          ))}

          {/* Main intake document */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border p-4"
            style={{
              background: 'rgba(0,180,255,0.04)',
              borderColor: docStatus === 'approved'
                ? 'rgba(0,214,143,0.4)'
                : docStatus === 'flagged'
                ? 'rgba(255,71,87,0.3)'
                : 'var(--border2)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">📄</span>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{intakeDoc.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text2)' }}>
                    Ontvangen: {intakeDoc.uploadedAt}
                  </div>
                </div>
              </div>
              <Badge variant={docStatus === 'approved' ? 'success' : docStatus === 'flagged' ? 'high' : 'info'}>
                {docStatus === 'approved' ? '✓ Goedgekeurd' : docStatus === 'flagged' ? '⚠ Onduidelijk' : '⏳ Wacht op controle'}
              </Badge>
            </div>

            {/* AI analysis */}
            <div className="rounded-lg border p-3 mb-3"
              style={{ background: 'rgba(0,180,255,0.05)', borderColor: 'var(--border)' }}>
              <div className="text-xs font-bold tracking-wider mb-3" style={{ color: 'var(--cyan)' }}>
                ⚡ AI DOCUMENTANALYSE
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  ['Documenttype', docTypeLabel(intakeDoc.type)],
                  ['Klant', intakeDoc.clientName],
                  ['Leverancier', intakeDoc.supplier ?? '—'],
                  ['Bedrag', intakeDoc.amount ?? '—'],
                  ['Datum', intakeDoc.date],
                  ['BTW', intakeDoc.vatRate ?? '—'],
                  ['Btw-bedrag', intakeDoc.vatAmount ?? '—'],
                  ['Betrouwbaarheid', '98%'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text2)' }}>{label}</span>
                    <span className="font-medium" style={{ color: 'var(--text)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {docStatus === 'pending' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-2 flex-wrap"
                >
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleApprove}
                    disabled={processing}
                  >
                    {processing ? '⏳ Verwerken...' : '✓ Goedkeuren'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => showToast('Extra info gevraagd bij Restaurant Lotus')}
                  >
                    ? Vraag extra info
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleFlag}
                  >
                    ⚠ Markeer onduidelijk
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => showToast('Document naar dossier gestuurd')}
                  >
                    → Stuur naar dossier
                  </Button>
                </motion.div>
              )}

              {docStatus === 'approved' && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm"
                  style={{ color: 'var(--success)' }}
                >
                  ✓ Document goedgekeurd en automatisch gekoppeld aan dossier Restaurant Lotus
                </motion.div>
              )}

              {docStatus === 'flagged' && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm"
                  style={{ color: 'var(--warning)' }}
                >
                  ⚠ Document gemarkeerd als onduidelijk. Klant ontvangt automatisch een verzoek om verduidelijking.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[['24', 'Verwerkt vandaag'], ['98%', 'AI-nauwkeurigheid'], ['< 2s', 'Gemiddelde tijd']].map(([n, l]) => (
          <div key={l} className="rounded-xl border p-3 text-center"
            style={{ background: 'rgba(0,180,255,0.04)', borderColor: 'var(--border)' }}>
            <div className="text-lg font-bold" style={{ color: 'var(--cyan)' }}>{n}</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
