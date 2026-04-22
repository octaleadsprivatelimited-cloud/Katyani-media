import Portfolio from '@/components/Portfolio'
import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore Katyani Media portfolio - successful marketing campaigns and client projects in Hyderabad, Telangana. Bus advertising campaigns, corporate events, radio ads, metro station campaigns, pamphlet distribution, and cycle advertising initiatives. See our 500+ completed projects.',
  keywords: 'Katyani Media portfolio, marketing campaigns Hyderabad, advertising projects Telangana, bus advertising campaigns, corporate event marketing, metro advertising campaigns, successful marketing case studies',
  openGraph: {
    title: 'Our Portfolio - Katyani Media | Marketing Campaigns Hyderabad',
    description: 'Explore successful marketing campaigns and client projects by Katyani Media in Hyderabad, Telangana.',
    url: 'https://katyanimedia.com/portfolio',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/portfolio',
  },
}

export default function PortfolioPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[600px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          alt="Our Portfolio - Marketing Campaigns"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Successful Marketing Campaigns & Client Projects
            </p>
          </div>
        </div>
      </section>
      <Portfolio />
    </div>
  )
}

