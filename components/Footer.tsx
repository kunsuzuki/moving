import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="p-6 text-center">
      <div className="flex justify-center space-x-4 text-sm text-gray-600">
        <Link href="/privacy-policy" className="hover:underline">
          プライバシーポリシー
        </Link>
        <Link href="/terms" className="hover:underline">
          利用規約
        </Link>
      </div>
      <div className="mt-2 text-xs text-gray-500">
        © {new Date().getFullYear()} 引越しチェックリスト
      </div>
    </footer>
  )
}
