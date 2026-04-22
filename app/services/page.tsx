import Services from '@/components/Services'
import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive offline marketing services in Hyderabad, Telangana. Bus advertising, metro ads, corporate events, pamphlet distribution, political campaigns, gate board advertising, cycle advertising, radio & TV ads, RWA activities, and look walker services. Expert marketing solutions in Madhapur.',
  keywords: 'offline marketing services Hyderabad, bus advertising, metro advertising, corporate events Hyderabad, pamphlet distribution, political campaigns Telangana, gate board advertising, cycle advertising, radio ads, television ads, RWA activities, look walker advertising, marketing services Madhapur',
  openGraph: {
    title: 'Our Services - Katyani Media | Offline Marketing Services Hyderabad',
    description: 'Comprehensive offline marketing services in Hyderabad including bus advertising, metro ads, corporate events, and more. Expert solutions for your business.',
    url: 'https://katyanimedia.com/services',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/services',
  },
}

export default function ServicesPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[600px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt="Our Services - Marketing Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Comprehensive Offline Marketing Solutions
            </p>
          </div>
        </div>
      </section>
      <Services />
    </div>
  )
}

