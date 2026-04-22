import SideContactForm from '@/components/SideContactForm'
import Image from 'next/image'
import { FiTv } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Television Ads',
  description: 'Professional television advertising services in Hyderabad, Telangana. Maximum brand reach and impact across local and regional TV channels. TV commercial production, ad placement, and media buying services. Contact Katyani Media.',
  keywords: 'television advertising Hyderabad, TV ads Telangana, TV commercial production, television ad placement, media buying services, regional TV advertising, TV marketing campaigns',
  openGraph: {
    title: 'Television Advertising Services - Katyani Media | Hyderabad',
    description: 'Professional television advertising services for maximum brand reach and impact across local and regional markets in Hyderabad.',
    url: 'https://katyanimedia.com/services/television-ads',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/services/television-ads',
  },
}

export default function TelevisionAdsPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[500px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1920&q=80"
          alt="Television Ads - Maximum Brand Reach & Impact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiTv className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Television Ads</h1>
            </div>
            <p className="text-lg text-white">Maximum Brand Reach & Impact</p>
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
                    src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=80"
                    alt="Television Advertising Solutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-lg font-semibold">Television Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-white mb-6">
                  Television advertising remains one of the most powerful mediums for reaching a mass audience. Our television advertising services help you create compelling video campaigns that capture attention, build brand awareness, and drive customer action across local and regional markets.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Television Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-white mb-6">
                  <li>Massive reach across diverse demographics</li>
                  <li>High-impact visual and audio storytelling</li>
                  <li>Credibility and trust-building medium</li>
                  <li>Targeted time slots for specific audiences</li>
                  <li>Local and regional market coverage</li>
                  <li>Measurable viewership and engagement metrics</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Television Advertising Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Commercial Production</h3>
                    <p className="text-sm text-white">Professional video production for TV commercials</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Creative Development</h3>
                    <p className="text-sm text-white">Concept development and scriptwriting for TV ads</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Media Planning</h3>
                    <p className="text-sm text-white">Strategic placement across TV channels and time slots</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Post-Production</h3>
                    <p className="text-sm text-white">Professional editing, graphics, and finalization</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Maximum brand exposure to large audiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>High-quality production values for brand credibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Targeted advertising during peak viewing times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Multi-channel placement for comprehensive reach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Measurable ROI through viewership analytics</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white">
                  Partner with us to create television advertising campaigns that elevate your brand and drive measurable results.
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

