'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { PageId, ChatMessage } from '@/types'
import { chatAnswers, chatSuggestions } from '@/data'
import { Button, StepGuide } from '@/components/ui'

interface Props {
  onNav: (p: PageId) => void
  onStep: (s: number) => void
  showToast: (msg: string) => void
}

function TypingBubble() {
  return (
    <div className="flex gap-1.5 items-center px-3 py-2.5">
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: 'var(--text2)' }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 1.2, delay, repeat: Infinity }}
        />
      ))}
    </div>
  )
}

function parseMarkdownBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--text)', fontWeight: 600 }}>{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

export default function ChatPage({ onNav, onStep, showToast }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'ai',
      text: 'Goedemiddag Sophie! Ik ben uw AI-boekhoudassistent. Hoe kan ik u vandaag helpen? U kunt een vraag typen of kiezen uit de suggesties hieronder.',
      timestamp: new Date(),
    },
  ])
  const [typing, setTyping] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, typing])

  function sendQuestion(q: string) {
    if (typing) return
    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: q, timestamp: new Date() }
    setMessages((prev) => [...prev, userMsg])
    setTyping(true)
    setInputValue('')

    const delay = 1200 + Math.random() * 800
    setTimeout(() => {
      const answer =
        chatAnswers[q] ??
        'Goeie vraag! Voor een persoonlijk antwoord raden we aan contact op te nemen met uw boekhouder via het berichtenportaal.'
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: answer,
        timestamp: new Date(),
      }
      setTyping(false)
      setMessages((prev) => [...prev, aiMsg])
      if (messages.length < 4) onStep(4)
    }, delay)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (inputValue.trim()) sendQuestion(inputValue.trim())
  }

  const suggestions = chatSuggestions.slice(0, 4)

  return (
    <div className="px-4 md:px-6 py-6">
      <StepGuide
        step={4}
        title="AI Boekhoudassistent:"
        description="Klik op een vraag. De AI antwoordt direct — geen telefoon, geen wachttijd."
      />

      <div
        className="rounded-xl border overflow-hidden flex flex-col"
        style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)', height: 460 }}
      >
        {/* Chat header */}
        <div className="px-4 py-3 border-b flex items-center gap-3" style={{ borderColor: 'var(--border)' }}>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ background: 'var(--cyan)', color: 'var(--navy)' }}
          >
            AI
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>AI Boekhoudassistent</div>
            <div className="text-xs" style={{ color: 'var(--success)' }}>● Online — 24/7 beschikbaar</div>
          </div>
          <div className="ml-auto">
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'var(--cyan-glow)', color: 'var(--cyan)', border: '1px solid var(--border2)' }}
            >
              BELTH AI
            </span>
          </div>
        </div>

        {/* Messages */}
        <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                  style={
                    msg.role === 'user'
                      ? { background: 'var(--cyan)', color: 'var(--navy)', borderRadius: '14px 14px 2px 14px' }
                      : { background: 'rgba(21,29,53,0.9)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '14px 14px 14px 2px' }
                  }
                >
                  {msg.role === 'ai'
                    ? parseMarkdownBold(msg.text)
                    : msg.text}
                </div>
              </motion.div>
            ))}

            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div
                  className="rounded-2xl"
                  style={{ background: 'rgba(21,29,53,0.9)', border: '1px solid var(--border)', borderRadius: '14px 14px 14px 2px' }}
                >
                  <TypingBubble />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Suggestions */}
        <div className="px-3 pt-2 pb-1 border-t flex flex-wrap gap-1.5" style={{ borderColor: 'var(--border)' }}>
          {suggestions.map((q) => (
            <button
              key={q}
              onClick={() => sendQuestion(q)}
              disabled={typing}
              className="text-xs px-2.5 py-1.5 rounded-full border transition-all disabled:opacity-50"
              style={{ background: 'rgba(21,29,53,0.8)', borderColor: 'var(--border)', color: 'var(--text2)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--cyan)'
                e.currentTarget.style.color = 'var(--cyan)'
                e.currentTarget.style.background = 'var(--cyan-glow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text2)'
                e.currentTarget.style.background = 'rgba(21,29,53,0.8)'
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="px-3 pb-3 pt-2 flex gap-2">
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Stel een vraag aan uw AI-assistent..."
            className="flex-1 rounded-lg border px-3 py-2 text-sm outline-none"
            style={{
              background: 'rgba(21,29,53,0.8)',
              borderColor: 'var(--border)',
              color: 'var(--text)',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--border2)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
          />
          <Button variant="primary" size="sm" onClick={() => {}}>
            Verstuur
          </Button>
        </form>
      </div>

      <div className="mt-3 flex justify-end">
        <Button
          variant="primary"
          size="sm"
          onClick={() => { onStep(5); onNav('dashboard') }}
        >
          Bekijk boekhouder-dashboard ▶
        </Button>
      </div>
    </div>
  )
}
