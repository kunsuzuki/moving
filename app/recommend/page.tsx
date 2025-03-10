'use client'

import { affiliateLinks } from '@/data/affiliateLinks'
import AffiliateCategorySection from '@/components/AffiliateCategorySection'

export default function Recommend() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">引越しおすすめリンク</h1>
          
          <div className="space-y-8">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">💡 はじめに</h2>
              <p className="text-gray-700">
                引越しが決まったら、引越し業者を決めたり、不用品を整理したり、インターネットを契約したり、調べて考えることが多いですよね！<br />
                ここでは引越しをする際に、利用をおすすめしている便利なサービスをご案内します。<br />
                すでにメディアで話題になっているものや、多くの人が利用しているサービスを中心にまとめましたので、ここから利用を検討してみると楽に引越しを進めることができると思います。
              </p>
            </section>
            
            {/* アフィリエイトリンクのカテゴリごとにセクションを表示 */}
            {affiliateLinks.map(category => (
              <AffiliateCategorySection key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}