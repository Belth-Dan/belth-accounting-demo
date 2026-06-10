'use client'

import { useState } from 'react'
import { Button, Toggle, SectionHeader, Avatar } from '@/components/ui'

interface Props {
  showToast: (msg: string) => void
}

const teamMembers = [
  { name: 'Jan Verbeke', role: 'Zaakvoerder', status: 'Actief' },
  { name: 'Lena De Backer', role: 'Medewerker', status: 'Actief' },
  { name: 'Tom Claes', role: 'Stagiair', status: 'Actief' },
  { name: 'An Michiels', role: 'Boekhoudster', status: 'Verlof' },
]

const integrations = [
  { name: 'Exact Online', desc: 'Boekhoudsoftware koppeling', active: true, icon: '⚙' },
  { name: 'Isabel Connect', desc: 'Bankintegratie', active: true, icon: '🏦' },
  { name: 'Twilio SMS', desc: 'SMS-herinneringen', active: false, icon: '📱' },
  { name: 'Zapier', desc: 'Workflow automatisering', active: false, icon: '⚡' },
]

export default function SettingsPage({ showToast }: Props) {
  const [toggles, setToggles] = useState({
    reminders: true,
    notifications: true,
    aiAssist: true,
    autoRecognize: true,
    weeklyReport: false,
    clientPortal: true,
  })

  const toggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }))
    showToast(`Instelling bijgewerkt`)
  }

  return (
    <div className="px-4 md:px-6 py-6">
      <SectionHeader
        title="Kantoor instellingen"
        subtitle="Pas het systeem aan naar de werkwijze van uw kantoor."
      />

      {/* Office profile */}
      <div className="rounded-xl border p-4 mb-4" style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}>
        <div className="font-semibold text-sm mb-3" style={{ color: 'var(--text)' }}>🏢 Kantoorprofiel</div>
        <div className="flex items-center gap-3 flex-wrap">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
            style={{ background: 'var(--cyan)', color: 'var(--navy)' }}
          >
            KB
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm" style={{ color: 'var(--text)' }}>Kantoor Verbeke & Partners</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>jan.verbeke@verbekeaccountants.be</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>4 teamleden · 28 actieve klanten · Gent</div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" onClick={() => showToast('Profiel bewerken...')}>
              Bewerken
            </Button>
            <Button size="sm" variant="ghost" onClick={() => showToast('Logo uploaden...')}>
              Logo uploaden
            </Button>
          </div>
        </div>
      </div>

      {/* Automation toggles */}
      <div className="rounded-xl border p-4 mb-4" style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}>
        <div className="font-semibold text-sm mb-3" style={{ color: 'var(--text)' }}>⚙ Automatisering</div>
        <div className="space-y-2">
          <Toggle
            checked={toggles.reminders}
            onChange={() => toggle('reminders')}
            label="Automatische herinneringen"
            description="Stuur klanten automatisch een herinnering bij ontbrekende documenten"
          />
          <Toggle
            checked={toggles.notifications}
            onChange={() => toggle('notifications')}
            label="E-mail notificaties"
            description="Ontvang een melding bij nieuwe uploads en klantvragen"
          />
          <Toggle
            checked={toggles.aiAssist}
            onChange={() => toggle('aiAssist')}
            label="AI-assistent actief"
            description="Laat de AI automatisch klantvragen beantwoorden"
          />
          <Toggle
            checked={toggles.autoRecognize}
            onChange={() => toggle('autoRecognize')}
            label="Automatische documentherkenning"
            description="AI koppelt documenten automatisch aan het juiste dossier"
          />
          <Toggle
            checked={toggles.weeklyReport}
            onChange={() => toggle('weeklyReport')}
            label="Wekelijks rapport"
            description="Ontvang elke maandag een overzicht van alle dossiers"
          />
          <Toggle
            checked={toggles.clientPortal}
            onChange={() => toggle('clientPortal')}
            label="Klantportaal actief"
            description="Klanten kunnen inloggen en documenten uploaden"
          />
        </div>
      </div>

      {/* Team members */}
      <div className="rounded-xl border p-4 mb-4" style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}>
        <div className="font-semibold text-sm mb-3" style={{ color: 'var(--text)' }}>👥 Teamleden</div>
        <div className="space-y-2">
          {teamMembers.map((m) => (
            <div key={m.name} className="flex items-center justify-between rounded-lg border p-3"
              style={{ background: 'rgba(21,29,53,0.6)', borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-3">
                <Avatar name={m.name} size="sm" color="cyan" />
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{m.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text2)' }}>{m.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: m.status === 'Actief' ? 'rgba(0,214,143,0.1)' : 'rgba(255,184,0,0.1)',
                    color: m.status === 'Actief' ? 'var(--success)' : 'var(--warning)',
                  }}
                >
                  {m.status}
                </span>
                <Button size="sm" variant="ghost" onClick={() => showToast(`Rechten van ${m.name} bewerken`)}>
                  Bewerk
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button
          size="sm"
          variant="outline"
          className="mt-3 w-full"
          onClick={() => showToast('Uitnodiging verstuurd...')}
        >
          + Voeg teamlid toe
        </Button>
      </div>

      {/* Integrations */}
      <div className="rounded-xl border p-4" style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}>
        <div className="font-semibold text-sm mb-3" style={{ color: 'var(--text)' }}>🔗 Integraties</div>
        <div className="grid sm:grid-cols-2 gap-2">
          {integrations.map((int) => (
            <div key={int.name} className="flex items-center justify-between rounded-lg border p-3"
              style={{ background: 'rgba(21,29,53,0.6)', borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2">
                <span className="text-lg">{int.icon}</span>
                <div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--text)' }}>{int.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text2)' }}>{int.desc}</div>
                </div>
              </div>
              <button
                className="text-xs px-2.5 py-1 rounded-full border transition-all"
                style={{
                  background: int.active ? 'rgba(0,214,143,0.1)' : 'transparent',
                  borderColor: int.active ? 'rgba(0,214,143,0.3)' : 'var(--border2)',
                  color: int.active ? 'var(--success)' : 'var(--cyan)',
                }}
                onClick={() => showToast(int.active ? `${int.name} losgekoppeld` : `${int.name} verbinden...`)}
              >
                {int.active ? '✓ Verbonden' : 'Verbinden'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
