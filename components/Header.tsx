'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // クライアントサイドでのみ実行
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // メニューが開いているときにスクロールを無効化
  useEffect(() => {
    if (!isMounted) return

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen, isMounted])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          引越しチェックリスト
        </Link>

        {/* ハンバーガーメニューボタン（モバイル用） */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルメニュー（全画面オーバーレイ） */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <Link href="/" className="text-xl font-bold text-gray-900" onClick={() => setIsMenuOpen(false)}>
                引越しチェックリスト
              </Link>
              <button 
                onClick={toggleMenu} 
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="メニューを閉じる"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              <Link 
                href="/" 
                className="px-4 py-3 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link 
                href="/recommend" 
                className="px-4 py-3 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                引越しおすすめリンク
              </Link>
              <Link 
                href="/privacy-policy" 
                className="px-4 py-3 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                プライバシーポリシー
              </Link>
              <Link 
                href="/terms" 
                className="px-4 py-3 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                利用規約
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
