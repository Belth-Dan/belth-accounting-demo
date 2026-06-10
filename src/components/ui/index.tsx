'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// --- Card ---
export function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn('rounded-xl border p-5', className)}
      style={{ background: 'rgba(15,22,40,0.95)', borderColor: 'var(--border)' }}
    >
      {children}
    </div>
  )
}

// --- Badge ---
type BadgeVariant = 'high' | 'medium' | 'low' | 'info' | 'success' | 'warning' | 'default'

const badgeStyles: Record<BadgeVariant, string> = {
  high: 'bg-red-500/10 text-red-400 border border-red-500/20',
  medium: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
  low: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  info: 'border',
  success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
  default: 'border',
}

export function Badge({
  variant = 'default',
  children,
  className,
}: {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn('inline-block text-xs px-2 py-0.5 rounded-full font-medium', badgeStyles[variant], className)}
      style={
        variant === 'info' || variant === 'default'
          ? { background: 'var(--cyan-glow)', color: 'var(--cyan)', borderColor: 'var(--border2)' }
          : {}
      }
    >
      {children}
    </span>
  )
}

// --- Button ---
type BtnVariant = 'primary' | 'outline' | 'ghost'

export function Button({
  variant = 'primary',
  children,
  onClick,
  className,
  disabled,
  size = 'md',
}: {
  variant?: BtnVariant
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeClass = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-sm',
  }[size]

  const base =
    'rounded-lg font-medium transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed'

  if (variant === 'primary') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(base, sizeClass, 'font-bold', className)}
        style={{ background: 'var(--cyan)', color: 'var(--navy)' }}
        onMouseEnter={(e) =>
          !disabled && (e.currentTarget.style.background = 'var(--cyan2)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = 'var(--cyan)')
        }
      >
        {children}
      </button>
    )
  }

  if (variant === 'outline') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(base, sizeClass, 'border', className)}
        style={{
          color: 'var(--cyan)',
          borderColor: 'var(--border2)',
          background: 'transparent',
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = 'var(--cyan-glow)'
            e.currentTarget.style.borderColor = 'var(--cyan)'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.borderColor = 'var(--border2)'
        }}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(base, sizeClass, 'border', className)}
      style={{
        color: 'var(--text2)',
        borderColor: 'var(--border2)',
        background: 'transparent',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = 'var(--cyan)'
          e.currentTarget.style.borderColor = 'var(--cyan)'
          e.currentTarget.style.background = 'var(--cyan-glow)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--text2)'
        e.currentTarget.style.borderColor = 'var(--border2)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {children}
    </button>
  )
}

// --- StepGuide ---
export function StepGuide({
  step,
  title,
  description,
}: {
  step: number | string
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-3 rounded-lg border px-4 py-3 mb-5"
      style={{ background: 'rgba(0,180,255,0.05)', borderColor: 'var(--border2)' }}
    >
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
        style={{ background: 'var(--cyan)', color: 'var(--navy)' }}
      >
        {step}
      </div>
      <div>
        <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
          {title}
        </span>{' '}
        <span className="text-sm" style={{ color: 'var(--text2)' }}>
          {description}
        </span>
      </div>
    </motion.div>
  )
}

// --- StatCard ---
export function StatCard({
  number,
  label,
  sub,
  highlight,
}: {
  number: string | number
  label: string
  sub?: string
  highlight?: boolean
}) {
  return (
    <div
      className="rounded-xl border p-4 text-center"
      style={{
        background: highlight
          ? 'rgba(0,180,255,0.08)'
          : 'rgba(0,180,255,0.04)',
        borderColor: highlight ? 'var(--border2)' : 'var(--border)',
      }}
    >
      <div
        className="text-2xl font-bold"
        style={{ color: 'var(--cyan)', fontFamily: 'Inter, sans-serif' }}
      >
        {number}
      </div>
      <div className="text-xs mt-1" style={{ color: 'var(--text2)' }}>
        {label}
      </div>
      {sub && (
        <div className="text-xs mt-0.5" style={{ color: 'var(--success)', fontSize: '10px' }}>
          {sub}
        </div>
      )}
    </div>
  )
}

// --- Tab bar ---
export function TabBar({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: string; label: string }[]
  active: string
  onChange: (id: string) => void
}) {
  return (
    <div className="flex gap-1.5 flex-wrap mb-4">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className="px-3 py-1.5 rounded-md text-xs border transition-all"
          style={{
            color: active === t.id ? 'var(--cyan)' : 'var(--text2)',
            background: active === t.id ? 'var(--cyan-glow)' : 'transparent',
            borderColor: active === t.id ? 'var(--border2)' : 'transparent',
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}

// --- Divider ---
export function Divider() {
  return (
    <div className="my-4 border-t" style={{ borderColor: 'var(--border)' }} />
  )
}

// --- Avatar ---
export function Avatar({
  name,
  size = 'md',
  color = 'cyan',
}: {
  name: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'cyan' | 'warning' | 'success'
}) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  const sizeClass = { sm: 'w-8 h-8 text-xs', md: 'w-11 h-11 text-sm', lg: 'w-14 h-14 text-base' }[size]
  const bg = { cyan: 'var(--cyan)', warning: 'var(--warning)', success: 'var(--success)' }[color]

  return (
    <div
      className={`${sizeClass} rounded-full flex items-center justify-center font-bold shrink-0`}
      style={{ background: bg, color: 'var(--navy)' }}
    >
      {initials}
    </div>
  )
}

// --- Section header ---
export function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-5">
      <h2 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm mt-1" style={{ color: 'var(--text2)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// --- Progress bar ---
export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1 w-full rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: 'var(--cyan)' }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </div>
  )
}

// --- Toggle ---
export function Toggle({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean
  onChange: () => void
  label: string
  description?: string
}) {
  return (
    <div
      className="flex items-center justify-between rounded-lg border p-3"
      style={{ background: 'rgba(21,29,53,0.8)', borderColor: 'var(--border)' }}
    >
      <div>
        <div className="text-sm" style={{ color: 'var(--text)' }}>
          {label}
        </div>
        {description && (
          <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
            {description}
          </div>
        )}
      </div>
      <button
        onClick={onChange}
        className="relative w-10 h-5 rounded-full transition-all duration-200 shrink-0 ml-3"
        style={{
          background: checked ? 'var(--cyan)' : 'rgba(90,107,140,0.4)',
        }}
        aria-checked={checked}
        role="switch"
      >
        <motion.div
          className="absolute top-0.5 w-4 h-4 rounded-full"
          style={{ background: checked ? 'var(--navy)' : 'var(--text2)' }}
          animate={{ left: checked ? '22px' : '2px' }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </button>
    </div>
  )
}
