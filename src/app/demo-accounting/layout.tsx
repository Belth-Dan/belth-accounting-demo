import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BELTH AI e-loket — Boekhoudkantoor Demo',
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
