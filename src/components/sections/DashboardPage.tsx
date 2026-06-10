'use client'

import { motion } from 'framer-motion'
import type { PageId } from '@/types'
import { clients } from '@/data/clients'
import { dashboardStats, deadlines } from '@/data'
import { priorityLabel, statusLabel } from '@/lib/utils'
import { Card, Button, Badge, StatCard, StepGuide } from '@/components/ui'

interface Props {
  onNav: (p: PageId) => void
  onStep: (s: number) => void
  showToast: (msg: string) => void
}

const statusBadgeMap: Record<string, 'info' | 'high' | 'success'> = {
  'complete': 'success',
  'in-progress': 'info',
  'action-required': 'high',
}

export default function DashboardPage({ onNav, onStep, showToast }: Props) {
  return (
    <div className="px-4 md:px-6 py-6">
      <StepGuide
        step={5}
        title="Boekhouder-dashboard:"
        description="Eén overzicht van alle klanten, documenten en prioriteiten voor uw kantoor."
      />

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-4"
      >
        <StatCard number={dashboardStats.newDocuments} label="Nieuwe documenten" sub="▲ vandaag" highlight />
        <StatCard number={dashboardStats.missingDossiers} label="Ontbrekende dossiers" sub="klanten" />
        <StatCard number={dashboardStats.openQuestions} label="Klantvragen" sub="open" />
        <StatCard number={dashboardStats.urgentDeadlines} label="Btw-deadlines" sub="dringend" />
        <StatCard number={dashboardStats.autoRecognized} label="AI-herkend" sub="automatisch" />
      </motion.div>

      {/* Deadline strip */}
      <Card className="mb-4">
        <div className="font-semibold text-sm mb-3" style={{ color: 'var(--text)' }}>🚨 Dringende deadlines</div>
        <div className="grid sm:grid-cols-3 gap-2">
          {deadlines.filter((d) => d.priority === 'high').slice(0, 3).map((dl) => (
            <div key={dl.id} className="rounded-lg border p-3"
              style={{ background: 'rgba(255,71,87,0.05)', borderColor: 'rgba(255,71,87,0.2)' }}>
              <div className="text-xs font-semibold" style={{ color: 'var(--text)' }}>{dl.title}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--warning)' }}>{dl.date}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>{dl.daysLeft} dagen resterend</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Client table */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Klantenoverzicht</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>28 actieve klanten · 6 weergegeven</div>
          </div>
          <Button size="sm" variant="outline" onClick={() => showToast('Nieuw dossier aanmaken...')}>
            + Nieuw dossier
          </Button>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                {['Klant', 'Status', 'Ontbrekend', 'Activiteit', 'Prioriteit', 'Actie'].map((h) => (
                  <th key={h} className="text-left pb-2 pr-3 font-semibold uppercase tracking-wide"
                    style={{ color: 'var(--text3)', fontSize: '10px' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {clients.map((c, idx) => (
                <motion.tr
                  key={c.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b"
                  style={{ borderColor: 'rgba(0,180,255,0.06)' }}
                >
                  <td className="py-3 pr-3 font-semibold" style={{ color: 'var(--text)' }}>
                    {c.company}
                  </td>
                  <td className="py-3 pr-3">
                    <Badge variant={statusBadgeMap[c.status] ?? 'info'}>
                      {statusLabel(c.status)}
                    </Badge>
                  </td>
                  <td className="py-3 pr-3">
                    <span style={{ color: c.missingDocs.length === 0 ? 'var(--success)' : 'var(--warning)' }}>
                      {c.missingDocs.length === 0 ? '—' : `${c.missingDocs.length} docs`}
                    </span>
                  </td>
                  <td className="py-3 pr-3" style={{ color: 'var(--text2)' }}>
                    {c.lastActivity}
                  </td>
                  <td className="py-3 pr-3">
                    <Badge variant={c.priority}>
                      {priorityLabel(c.priority)}
                    </Badge>
                  </td>
                  <td className="py-3">
                    <div className="flex gap-1.5">
                      {c.id === 'c2' ? (
                        <Button size="sm" variant="ghost"
                          onClick={() => { onStep(6); onNav('dossier') }}>
                          Open dossier
                        </Button>
                      ) : (
                        <Button size="sm" variant="ghost"
                          onClick={() => showToast(`Dossier ${c.company} geopend`)}>
                          Open
                        </Button>
                      )}
                      {c.missingDocs.length > 0 && (
                        <Button size="sm" variant="ghost"
                          onClick={() => { onStep(7); onNav('reminders') }}>
                          Herinnering
                        </Button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-2">
          {clients.map((c) => (
            <div key={c.id} className="rounded-lg border p-3"
              style={{ background: 'rgba(21,29,53,0.6)', borderColor: 'var(--border)' }}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{c.company}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{c.lastActivity}</div>
                </div>
                <Badge variant={c.priority}>{priorityLabel(c.priority)}</Badge>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant={statusBadgeMap[c.status] ?? 'info'}>{statusLabel(c.status)}</Badge>
                {c.missingDocs.length > 0 && (
                  <span className="text-xs" style={{ color: 'var(--warning)' }}>
                    ⚠ {c.missingDocs.length} ontbrekend
                  </span>
                )}
              </div>
              <div className="flex gap-1.5 mt-2">
                <Button size="sm" variant="ghost"
                  onClick={() => c.id === 'c2' ? (onStep(6), onNav('dossier')) : showToast(`Dossier geopend`)}>
                  Open dossier
                </Button>
                {c.missingDocs.length > 0 && (
                  <Button size="sm" variant="ghost"
                    onClick={() => showToast(`Herinnering verstuurd naar ${c.company}`)}>
                    Herinnering
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
