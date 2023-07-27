import './globals.css'
import { Open_Sans } from 'next/font/google'

import AppHeader from '@/components/AppHeader'
import AppContent from '@/components/AppContent'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Medpax',
  description: 'Exames e Médicos com desconto, para Ourinhos e região.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={ font.className }>
        <AppHeader />
        <AppContent>
          {children}
        </AppContent>
      </body>
    </html>
  )
}
