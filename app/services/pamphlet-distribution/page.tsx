import SideContactForm from '@/components/SideContactForm'
import Image from 'next/image'
import { FiFileText } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pamphlet Distribution',
  description: 'Professional pamphlet distribution services in Hyderabad, Telangana. Targeted local marketing campaigns reaching 50K+ households. Direct customer engagement, door-to-door distribution, and flyer marketing solutions. Contact Katyani Media.',
  keywords: 'pamphlet distribution Hyderabad, flyer distribution Telangana, door-to-door marketing, leaflet distribution, direct marketing services, pamphlet marketing, local distribution services',
  openGraph: {
    title: 'Pamphlet Distribution Services - Katyani Media | Hyderabad',
    description: 'Professional pamphlet distribution services for targeted local marketing campaigns in Hyderabad, Telangana.',
    url: 'https://katyanimedia.com/services/pamphlet-distribution',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/services/pamphlet-distribution',
  },
}

export default function PamphletDistributionPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[500px] mb-12 overflow-hidden -mt-16">
        <Image
          src="/services/phamplets.png"
          alt="Pamphlet Distribution - Targeted Local Marketing Campaigns"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiFileText className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Pamphlet Distribution</h1>
            </div>
            <p className="text-lg text-white">Targeted Local Marketing Campaigns</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-black border border-primary-800 rounded-lg p-8">
              <div className="mb-8">
                <div className="relative w-full h-80 rounded-lg overflow-hidden border border-primary-800">
                  <Image
                    src="/services/phamplet.jpg"
                    alt="Pamphlet Distribution Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-lg font-semibold">Pamphlet Distribution Services</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-white mb-6">
                  Pamphlet distribution is a time-tested and highly effective method for reaching local customers. Our professional pamphlet distribution services ensure your marketing materials are delivered to the right locations at the right time, maximizing your campaign's impact.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Pamphlet Distribution?</h2>
                <ul className="list-disc list-inside space-y-2 text-white mb-6">
                  <li>Direct reach to target audience</li>
                  <li>Cost-effective local marketing solution</li>
                  <li>High engagement and response rates</li>
                  <li>Flexible distribution areas and timing</li>
                  <li>Tangible marketing material</li>
                  <li>Perfect for local business promotion</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Pamphlet Distribution Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Door-to-Door Distribution</h3>
                    <p className="text-sm text-white">Systematic distribution to residential and commercial properties</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Distribution</h3>
                    <p className="text-sm text-white">Targeted distribution at events, festivals, and gatherings</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">High-Traffic Areas</h3>
                    <p className="text-sm text-white">Distribution in shopping malls, markets, and busy streets</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">B2B Distribution</h3>
                    <p className="text-sm text-white">B2B pamphlet distribution to offices and business centers</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Direct customer engagement and interaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Targeted distribution to specific demographics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Measurable reach and distribution tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Cost-effective for local market penetration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Professional distribution team and logistics</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white">
                  Contact us to plan your pamphlet distribution campaign and reach your target audience effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <SideContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}


