import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function priorityLabel(p: 'high' | 'medium' | 'low'): string {
  return { high: 'Hoog', medium: 'Medium', low: 'Laag' }[p]
}

export function statusLabel(s: string): string {
  const map: Record<string, string> = {
    'complete': 'Compleet',
    'in-progress': 'In behandeling',
    'action-required': 'Actie vereist',
    'pending': 'Wacht op controle',
    'approved': 'Goedgekeurd',
    'review': 'In review',
    'missing': 'Ontbreekt',
    'sent': 'Verzonden',
    'responded': 'Beantwoord',
  }
  return map[s] ?? s
}

export function docTypeLabel(t: string): string {
  const map: Record<string, string> = {
    aankoopfactuur: 'Aankoopfactuur',
    verkoopfactuur: 'Verkoopfactuur',
    bankdocument: 'Bankdocument',
    loonfiche: 'Loonfiche',
    verkoopoverzicht: 'Verkoopoverzicht',
    'btw-aangifte': 'BTW-aangifte',
    jaarrekening: 'Jaarrekening',
  }
  return map[t] ?? t
}

export function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
