'use client'

import { motion } from 'framer-motion'

interface Props {
  currentStep: number
}

const steps = [
  'Start',
  'Portaal',
  'Upload',
  'AI',
  'Chat',
  'Dashboard',
  'Dossier',
  'Reminder',
  'CTA',
]

export default function FlowIndicator({ currentStep }: Props) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
      {steps.map((label, i) => {
        const isDone = i < currentStep
        const isActive = i === currentStep

        return (
          <div key={i} className="flex items-center gap-1 shrink-0">
            <div className="flex flex-col items-center gap-0.5">
              <motion.div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                animate={{
                  background: isDone
                    ? '#00d68f'
                    : isActive
                    ? '#00b4ff'
                    : 'transparent',
                  borderColor: isDone
                    ? '#00d68f'
                    : isActive
                    ? '#00b4ff'
                    : 'rgba(0,180,255,0.22)',
                  color: isDone || isActive ? '#0A0F1E' : '#5A6B8C',
                }}
                style={{ border: '2px solid' }}
              >
                {isDone ? '✓' : i + 1}
              </motion.div>
              <span
                className="text-xs hidden sm:block"
                style={{
                  color: isActive
                    ? 'var(--cyan)'
                    : isDone
                    ? 'var(--success)'
                    : 'var(--text3)',
                  fontSize: '9px',
                }}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                className="h-0.5 w-4 rounded shrink-0 mb-3"
                animate={{
                  background: isDone ? '#00d68f' : 'rgba(0,180,255,0.12)',
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
