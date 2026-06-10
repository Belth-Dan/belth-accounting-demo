// Client types
export interface Client {
  id: string
  name: string
  company: string
  vatNumber: string
  email: string
  phone: string
  accountant: string
  priority: 'high' | 'medium' | 'low'
  status: 'complete' | 'in-progress' | 'action-required'
  missingDocs: string[]
  lastActivity: string
  uploadedDocs: number
}

// Document types
export interface Document {
  id: string
  name: string
  type: DocumentType
  clientId: string
  clientName: string
  supplier?: string
  amount?: string
  date: string
  vatRate?: string
  vatAmount?: string
  status: 'pending' | 'approved' | 'review' | 'missing'
  uploadedAt: string
}

export type DocumentType =
  | 'aankoopfactuur'
  | 'verkoopfactuur'
  | 'bankdocument'
  | 'loonfiche'
  | 'verkoopoverzicht'
  | 'btw-aangifte'
  | 'jaarrekening'

// Chat message types
export interface ChatMessage {
  id: string
  role: 'user' | 'ai'
  text: string
  timestamp: Date
}

// Reminder types
export interface Reminder {
  id: string
  clientId: string
  clientName: string
  missingDocs: string[]
  message: string
  deadline: string
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'sent' | 'responded'
}

// Deadline types
export interface Deadline {
  id: string
  title: string
  description: string
  date: string
  daysLeft: number
  priority: 'high' | 'medium' | 'low'
  clientIds: string[]
}

// Knowledge base types
export interface KBItem {
  id: string
  question: string
  answer: string
  category: string
}

export interface KBCategory {
  id: string
  label: string
  icon: string
  items: KBItem[]
}

// Dashboard stats
export interface DashboardStats {
  newDocuments: number
  missingDossiers: number
  openQuestions: number
  urgentDeadlines: number
  autoRecognized: number
}

// Notification type
export interface Notification {
  id: string
  type: 'info' | 'warning' | 'success'
  message: string
  time: string
  read: boolean
}

// Demo flow step
export type DemoStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// Page type
export type PageId =
  | 'home'
  | 'portal'
  | 'chat'
  | 'dashboard'
  | 'documents'
  | 'dossier'
  | 'reminders'
  | 'knowledge'
  | 'settings'
  | 'cta'
