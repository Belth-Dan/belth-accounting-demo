'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react'

interface Props {
  message: string
  type?: 'success' | 'info' | 'warning'
  onClose: () => void
}

export default function Toast({ message, type = 'success', onClose }: Props) {
  const icons = {
    success: <CheckCircle size={16} style={{ color: 'var(--success)' }} />,
    info: <Info size={16} style={{ color: 'var(--cyan)' }} />,
    warning: <AlertTriangle size={16} style={{ color: 'var(--warning)' }} />,
  }

  const borderColor = {
    success: 'var(--success)',
    info: 'var(--cyan)',
    warning: 'var(--warning)',
  }[type]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      className="flex items-center gap-3 rounded-xl border px-4 py-3 shadow-xl max-w-xs"
      style={{
        background: 'rgba(15,22,40,0.98)',
        borderColor,
        backdropFilter: 'blur(12px)',
      }}
    >
      {icons[type]}
      <span className="text-sm flex-1" style={{ color: 'var(--text)' }}>
        {message}
      </span>
      <button onClick={onClose} style={{ color: 'var(--text3)' }}>
        <X size={14} />
      </button>
    </motion.div>
  )
}
