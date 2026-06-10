import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BELTH AI e-loket — Demo voor boekhoudkantoren',
  description:
    'Interactieve demo: AI-assistent, documentverwerking en klantportaal voor moderne boekhoudkantoren.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
