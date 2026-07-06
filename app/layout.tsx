import type { Metadata } from 'next'
import './globals.css'
import { config } from '@/config'

export const metadata: Metadata = {
  title: config.personal.name,
  description: `${config.personal.title} — portfolio and projects.`,
  icons: {
    icon: '/project-images/mz.jpg',
    apple: '/project-images/mz.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

