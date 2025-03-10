'use client'

import { AffiliateCategory } from '@/data/affiliateLinks'
import AffiliateCard from './AffiliateCard'

interface AffiliateCategorySectionProps {
  category: AffiliateCategory
}

export default function AffiliateCategorySection({ category }: AffiliateCategorySectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        {category.emoji} {category.title}
      </h2>
      <p className="text-gray-700 mb-4">
        {category.description}
      </p>
      <div className="space-y-4">
        {category.links.map(link => (
          <AffiliateCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  )
}
