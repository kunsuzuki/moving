import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '引越しチェックリスト',
  description: '引越しの準備に役立つタスク管理ツール',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
