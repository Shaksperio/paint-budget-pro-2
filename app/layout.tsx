import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paint Budget Pro 2',
  description: 'Professional painting budgeting and invoicing application',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}