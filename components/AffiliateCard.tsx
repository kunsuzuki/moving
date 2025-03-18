'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AffiliateLink } from '@/data/affiliateLinks'

interface AffiliateCardProps {
  link: AffiliateLink
}

export default function AffiliateCard({ link }: AffiliateCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-4">
        {/* 画像コンテナ */}
        <div className="image-container w-full md:w-1/4 flex-shrink-0">
          <a href={link.imageLinkUrl} target="_blank" rel="noopener noreferrer nofollow" className="block">
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image 
                src={link.imageUrl} 
                alt={link.title} 
                fill
                className="object-contain"
              />
              {link.isRecommended && (
                <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                  おすすめ
                </div>
              )}
            </div>
          </a>
          <Image width={1} height={1} src={link.imageTrackingTag} alt="" style={{ border: 0 }} />
        </div>

        {/* タイトルとタグコンテナ */}
        <div className="title-container flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            <a href={link.linkUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-blue-600 transition-colors">
              {link.title}
            </a>
            <Image width={1} height={1} src={link.trackingTag} alt="" style={{ border: 0 }} />
          </h3>
          <ul className="flex flex-wrap gap-2 mb-3">
            {link.tags.map((tag, index) => (
              <li key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {tag}
              </li>
            ))}
          </ul>
          
          {/* 説明文 - モバイルでは常に表示、デスクトップでは開閉可能 */}
          <div className="description-container">
            <div className={`text-gray-700 text-sm ${isExpanded ? '' : 'line-clamp-4 md:line-clamp-4'}`}>
              {link.description}
            </div>
            {link.description.length > 100 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 text-sm mt-1 hover:underline focus:outline-none"
              >
                {isExpanded ? '閉じる' : '続きを読む'}
              </button>
            )}
          </div>
        </div>
        
        {/* CTAボタン */}
        <div className="flex-shrink-0 flex items-center justify-center mt-3 md:mt-0">
          <a 
            href={link.linkUrl} 
            target="_blank" 
            rel="noopener noreferrer nofollow"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 text-center block w-full md:w-auto"
          >
            詳細を見る
          </a>
        </div>
      </div>
    </div>
  )
}
