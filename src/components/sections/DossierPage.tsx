'use client'

import { motion } from 'framer-motion'
import type { PageId } from '@/types'
import { clients } from '@/data/clients'
import { documents } from '@/data/documents'
import { Button, Badge, StepGuide, Avatar } from '@/components/ui'

interface Props {
  onNav: (p: PageId) => void
  onStep: (s: number) => void
  showToast: (msg: string) => void
}

const lotus = clients.find((c) => c.id === 'c2')!
const lotusDocs = documents.filter((d) => d.clientId === 'c2')

const missingDocs = [
  { name: 'bankuittreksel_apr_2026.pdf', type: 'Bankdocument', status: 'missing' },
  { name: 'verkooprapport_mei_2026.pdf', type: 'Verkoopoverzicht', status: 'missing' },
]

export default function DossierPage({ onNav, onStep, showToast }: Props) {
  return (
    <div className="px-4 md:px-6 py-6">
      <StepGuide
        step={7}
        title="Klantdossier:"
        description="Restaurant Lotus — AI-samenvatting en ontbrekende documenten in één oogopslag."
      />

      {/* Client header */}
      <div className="rounded-xl border p-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}>
        <Avatar name={lotus.company} size="md" color="warning" />
        <div className="flex-1">
          <div className="font-bold text-base" style={{ color: 'var(--text)' }}>{lotus.company}</div>
          <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
            {lotus.vatNumber} · Kwartaalaangever · Beheerder: {lotus.accountant}
          </div>
        </div>
        <Badge variant="high">⚠ Hoge prioriteit</Badge>
      </div>

      {/* AI summary */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border p-4 mb-4"
        style={{ background: 'rgba(0,180,255,0.04)', borderColor: 'var(--border2)' }}
      >
        <div className="text-xs font-bold tracking-wider mb-2" style={{ color: 'var(--cyan)' }}>
          ⚡ AI SAMENVATTING
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
          Restaurant Lotus heeft deze maand{' '}
          <strong style={{ color: 'var(--cyan)' }}>18 documenten</strong> geüpload.
          Er ontbreken nog{' '}
          <strong style={{ color: 'var(--warning)' }}>2 bankuittreksels</strong> en{' '}
          <strong style={{ color: 'var(--warning)' }}>1 verkooprapport</strong>.
          De btw-deadline is over{' '}
          <strong style={{ color: 'var(--danger)' }}>6 dagen</strong>.{' '}
          Aanbeveling: onmiddellijk herinnering sturen.
        </p>
      </motion.div>

      {/* Two column layout */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Documents */}
        <div className="rounded-xl border p-4" style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Documenten deze maand</div>
            <Badge variant="warning">2 ontbreken</Badge>
          </div>
          <div className="space-y-2">
            {lotusDocs.map((doc) => (
              <div key={doc.id} className="flex items-center gap-2 rounded-lg border px-2.5 py-2"
                style={{ background: 'rgba(21,29,53,0.6)', borderColor: 'var(--border)' }}>
                <span className="text-base">📄</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate" style={{ color: 'var(--text)' }}>{doc.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text2)' }}>{doc.type}</div>
                </div>
                <span className="text-xs shrink-0" style={{ color: 'var(--success)' }}>✓</span>
              </div>
            ))}
            {missingDocs.map((doc) => (
              <div key={doc.name} className="flex items-center gap-2 rounded-lg border px-2.5 py-2"
                style={{ background: 'rgba(255,184,0,0.04)', borderColor: 'rgba(255,184,0,0.2)' }}>
                <span className="text-base">❓</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate" style={{ color: 'var(--text)' }}>{doc.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text2)' }}>{doc.type}</div>
                </div>
                <span className="text-xs shrink-0" style={{ color: 'var(--warning)' }}>⚠</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info + deadlines */}
        <div className="space-y-3">
          <div className="rounded-xl border p-4" style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}>
            <div className="font-semibold text-sm mb-3" style={{ color: 'var(--text)' }}>📊 Dossier status</div>
            <div className="space-y-2 text-xs">
              {[
                ['Geüploade documenten', `${lotus.uploadedDocs}`, 'var(--text)'],
                ['Ontbrekende documenten', '3', 'var(--warning)'],
                ['Btw-aangifte', '20 juni 2026', 'var(--danger)'],
                ['Laatste activiteit', lotus.lastActivity, 'var(--text2)'],
                ['Status', 'Actie vereist', 'var(--danger)'],
              ].map(([label, value, color]) => (
                <div key={label} className="flex justify-between">
                  <span style={{ color: 'var(--text2)' }}>{label}</span>
                  <span className="font-semibold" style={{ color }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border p-4"
            style={{ background: 'rgba(255,71,87,0.04)', borderColor: 'rgba(255,71,87,0.2)' }}>
            <div className="text-xs font-semibold mb-1" style={{ color: 'var(--danger)' }}>🚨 Deadline over 6 dagen</div>
            <div className="text-xs" style={{ color: 'var(--text2)' }}>BTW-aangifte Q2 2026 — 20 juni 2026</div>
            <div className="text-xs mt-1" style={{ color: 'var(--text3)' }}>
              Aangifte kan pas ingediend worden als alle documenten ontvangen zijn.
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant="primary"
          size="md"
          onClick={() => { onStep(7); onNav('reminders') }}
        >
          🔔 Stuur herinnering ▶
        </Button>
        <Button
          variant="outline"
          size="md"
          onClick={() => showToast('Bericht verzonden naar Restaurant Lotus')}
        >
          💬 Stuur bericht
        </Button>
        <Button
          variant="ghost"
          size="md"
          onClick={() => showToast('Dossier gemarkeerd als prioriteit')}
        >
          ⭐ Markeer prioriteit
        </Button>
        <Button
          variant="ghost"
          size="md"
          onClick={() => showToast('Dossier gemarkeerd als compleet')}
        >
          ✓ Markeer compleet
        </Button>
      </div>
    </div>
  )
}
