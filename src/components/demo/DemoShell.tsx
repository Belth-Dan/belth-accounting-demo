'use client'

import { useState, useCallback } from 'react'
import type { PageId, DemoStep } from '@/types'
import DemoNav from '@/components/layout/DemoNav'
import FlowIndicator from '@/components/layout/FlowIndicator'
import Toast from '@/components/ui/Toast'

// Pages
import HomePage from '@/components/sections/HomePage'
import ClientPortalPage from '@/components/sections/ClientPortalPage'
import ChatPage from '@/components/sections/ChatPage'
import DashboardPage from '@/components/sections/DashboardPage'
import DocumentsPage from '@/components/sections/DocumentsPage'
import DossierPage from '@/components/sections/DossierPage'
import RemindersPage from '@/components/sections/RemindersPage'
import KnowledgePage from '@/components/sections/KnowledgePage'
import SettingsPage from '@/components/sections/SettingsPage'
import CTAPage from '@/components/sections/CTAPage'

interface ToastState {
  id: number
  message: string
  type?: 'success' | 'info' | 'warning'
}

export default function DemoShell() {
  const [page, setPage] = useState<PageId>('home')
  const [step, setStep] = useState<DemoStep>(0)
  const [toasts, setToasts] = useState<ToastState[]>([])

  const navigate = useCallback((p: PageId) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const advanceStep = useCallback(
    (s: number) => {
      if (s > step) setStep(s as DemoStep)
    },
    [step]
  )

  const showToast = useCallback(
    (message: string, type: ToastState['type'] = 'success') => {
      const id = Date.now()
      setToasts((prev) => [...prev, { id, message, type }])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 3500)
    },
    []
  )

  const sharedProps = { onNav: navigate, onStep: advanceStep, showToast }

  const pageMap: Record<PageId, React.ReactNode> = {
    home: <HomePage {...sharedProps} />,
    portal: <ClientPortalPage {...sharedProps} />,
    chat: <ChatPage {...sharedProps} />,
    dashboard: <DashboardPage {...sharedProps} />,
    documents: <DocumentsPage {...sharedProps} />,
    dossier: <DossierPage {...sharedProps} />,
    reminders: <RemindersPage {...sharedProps} />,
    knowledge: <KnowledgePage />,
    settings: <SettingsPage showToast={showToast} />,
    cta: <CTAPage onNav={navigate} />,
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      <DemoNav currentPage={page} onNav={navigate} />

      {page !== 'home' && (
        <div
          className="sticky top-[57px] z-40 border-b px-6 py-2"
          style={{
            background: 'rgba(10,15,30,0.95)',
            borderColor: 'var(--border)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <FlowIndicator currentStep={step} />
        </div>
      )}

      <main className="max-w-5xl mx-auto">
        <div key={page}>{pageMap[page]}</div>
      </main>

      {/* Toasts */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            message={t.message}
            type={t.type}
            onClose={() =>
              setToasts((prev) => prev.filter((x) => x.id !== t.id))
            }
          />
        ))}
      </div>
    </div>
  )
}
