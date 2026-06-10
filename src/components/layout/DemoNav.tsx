'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import type { PageId } from '@/types'

interface Props {
  currentPage: PageId
  onNav: (p: PageId) => void
}

const tabs: { id: PageId; label: string; badge?: number }[] = [
  { id: 'portal', label: 'Klantportaal' },
  { id: 'chat', label: 'AI Chat' },
  { id: 'dashboard', label: 'Dashboard', badge: 8 },
  { id: 'documents', label: 'Documenten' },
  { id: 'dossier', label: 'Dossier' },
  { id: 'reminders', label: 'Reminders', badge: 4 },
  { id: 'knowledge', label: 'Kennisbank' },
  { id: 'settings', label: 'Instellingen' },
]

export default function DemoNav({ currentPage, onNav }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(10,15,30,0.97)',
        borderColor: 'var(--border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => onNav('home')}
          className="flex items-center gap-2.5 shrink-0"
        >
          <div
            className="px-2 py-1 rounded text-xs font-bold tracking-widest"
            style={{ background: 'var(--cyan)', color: 'var(--navy)' }}
          >
            BELTH
          </div>
          <span
            className="text-xs hidden sm:inline"
            style={{ color: 'var(--text2)', fontFamily: 'Space Mono, monospace' }}
          >
            AI e-loket
          </span>
          <span
            className="text-xs px-1.5 py-0.5 rounded border"
            style={{
              color: 'var(--cyan)',
              borderColor: 'var(--border2)',
              background: 'var(--cyan-glow)',
              fontSize: '9px',
              letterSpacing: '0.5px',
            }}
          >
            DEMO
          </span>
        </button>

        {/* Desktop tabs */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onNav(tab.id)}
              className="relative px-3 py-1.5 rounded text-xs whitespace-nowrap transition-all duration-150 flex items-center gap-1"
              style={{
                color: currentPage === tab.id ? 'var(--cyan)' : 'var(--text2)',
                background:
                  currentPage === tab.id ? 'var(--cyan-glow)' : 'transparent',
                border: `1px solid ${
                  currentPage === tab.id ? 'var(--border2)' : 'transparent'
                }`,
              }}
            >
              {tab.label}
              {tab.badge && (
                <span
                  className="px-1 rounded-full text-white"
                  style={{
                    background: 'var(--danger)',
                    fontSize: '9px',
                    lineHeight: '14px',
                    padding: '0 4px',
                  }}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNav('cta')}
            className="text-xs font-bold px-3 py-1.5 rounded transition-all duration-150 hidden sm:block"
            style={{
              background: 'var(--cyan)',
              color: 'var(--navy)',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'var(--cyan2)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'var(--cyan)')
            }
          >
            Boek demo
          </button>

          <button
            className="lg:hidden p-1.5 rounded"
            style={{ color: 'var(--text2)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t px-4 py-3 flex flex-col gap-1"
          style={{ borderColor: 'var(--border)', background: 'rgba(10,15,30,0.99)' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                onNav(tab.id)
                setMobileOpen(false)
              }}
              className="text-left px-3 py-2 rounded text-sm flex items-center justify-between"
              style={{
                color: currentPage === tab.id ? 'var(--cyan)' : 'var(--text)',
                background:
                  currentPage === tab.id ? 'var(--cyan-glow)' : 'transparent',
              }}
            >
              {tab.label}
              {tab.badge && (
                <span
                  className="px-1.5 rounded-full text-white"
                  style={{ background: 'var(--danger)', fontSize: '10px' }}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
          <button
            onClick={() => {
              onNav('cta')
              setMobileOpen(false)
            }}
            className="mt-2 w-full py-2 rounded text-sm font-bold"
            style={{ background: 'var(--cyan)', color: 'var(--navy)' }}
          >
            Boek een demo
          </button>
        </motion.div>
      )}
    </header>
  )
}
