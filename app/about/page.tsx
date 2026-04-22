import About from '@/components/About'
import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Katyani Media - a leading offline marketing agency in Hyderabad, Telangana. Founded in 2017, we specialize in process transformation, street-smart creativity, and real-time execution. Serving 500+ clients with innovative marketing solutions in Madhapur, Hyderabad.',
  keywords: 'about Katyani Media, marketing agency Hyderabad, offline marketing company Telangana, advertising agency Madhapur, marketing team Hyderabad, process transformation company',
  openGraph: {
    title: 'About Us - Katyani Media | Offline Marketing Agency Hyderabad',
    description: 'Learn about Katyani Media - leading offline marketing agency in Hyderabad. Founded in 2017, trusted by 500+ clients across Telangana.',
    url: 'https://katyanimedia.com/about',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[600px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="About Katyani Media - Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              About Katyani Media
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We are a dynamic team of creative people of innovation & marketing
            </p>
          </div>
        </div>
      </section>
      <About />
    </div>
  )
}

