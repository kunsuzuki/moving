'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside className="hidden md:block w-64 bg-white shadow-sm h-screen sticky top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 mb-6">メニュー</h2>
        <nav className="space-y-3">
          <Link
            href="/"
            className={`block px-4 py-2 rounded-md transition-colors ${
              isActive('/') 
                ? 'bg-blue-100 text-blue-800 font-medium' 
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            ホーム
          </Link>
          <Link
            href="/recommend"
            className={`block px-4 py-2 rounded-md transition-colors ${
              isActive('/recommend') 
                ? 'bg-blue-100 text-blue-800 font-medium' 
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            引越しおすすめリンク
          </Link>
          <Link
            href="/privacy-policy"
            className={`block px-4 py-2 rounded-md transition-colors ${
              isActive('/privacy-policy') 
                ? 'bg-blue-100 text-blue-800 font-medium' 
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            プライバシーポリシー
          </Link>
          <Link
            href="/terms"
            className={`block px-4 py-2 rounded-md transition-colors ${
              isActive('/terms') 
                ? 'bg-blue-100 text-blue-800 font-medium' 
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            利用規約
          </Link>
        </nav>
      </div>
    </aside>
  )
}
