'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  image: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Bus Advertising Campaign',
    category: 'Outdoor Advertising',
    description: 'Comprehensive bus wrap campaign reaching 500K+ daily commuters across major routes',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=800&q=80',
  },
  {
    id: 2,
    title: 'Corporate Event Marketing',
    category: 'Event Marketing',
    description: 'Full-service event marketing for annual corporate conference with 2000+ attendees',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
  {
    id: 3,
    title: 'Radio Advertising Campaign',
    category: 'Media Advertising',
    description: 'Multi-channel radio advertising campaign across major stations with 95% reach',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
  },
  {
    id: 4,
    title: 'Metro Station Campaign',
    category: 'Outdoor Advertising',
    description: 'Strategic metro station advertising placement in high-traffic areas',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  },
  {
    id: 5,
    title: 'Pamphlet Distribution Drive',
    category: 'Direct Marketing',
    description: 'Targeted pamphlet distribution campaign reaching 50K+ households',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    id: 6,
    title: 'Cycle Advertising Initiative',
    category: 'Outdoor Advertising',
    description: 'Eco-friendly cycle advertising campaign at major events and festivals',
    image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c4a?w=800&q=80',
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const categories = ['All', 'Event Marketing', 'Media Advertising', 'Outdoor Advertising', 'Direct Marketing']

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-300 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Explore our successful marketing campaigns and client projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-black shadow-lg'
                  : 'bg-black border border-white text-white hover:border-white/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="bg-black border border-white rounded-lg overflow-hidden hover:border-white/80 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer block"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary-500/90 text-black text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-300 mb-2 group-hover:text-primary-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

