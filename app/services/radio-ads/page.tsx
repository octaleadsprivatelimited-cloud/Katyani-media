import SideContactForm from '@/components/SideContactForm'
import Image from 'next/image'
import { FiRadio } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Radio Ads',
  description: 'Professional radio advertising services in Hyderabad, Telangana. Multi-channel radio ad campaigns across major stations with 95% reach. Compelling audio marketing to reach your target audience. Contact Katyani Media for radio ad solutions.',
  keywords: 'radio advertising Hyderabad, radio ads Telangana, audio advertising, radio commercial production, radio ad placement, FM radio advertising, radio marketing campaigns Hyderabad',
  openGraph: {
    title: 'Radio Advertising Services - Katyani Media | Hyderabad',
    description: 'Professional radio advertising services to reach your target audience through compelling audio marketing in Hyderabad.',
    url: 'https://katyanimedia.com/services/radio-ads',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/services/radio-ads',
  },
}

export default function RadioAdsPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[500px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&q=80"
          alt="Radio Ads - Reach Listeners Through Audio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiRadio className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Radio Ads</h1>
            </div>
            <p className="text-lg text-white">Reach Listeners Through Audio</p>
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
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
                    alt="Radio Advertising Solutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-lg font-semibold">Radio Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-white mb-6">
                  Radio advertising remains one of the most powerful mediums to reach a broad audience. Our radio advertising services help you create compelling audio campaigns that connect with listeners during their daily routines, from morning commutes to evening drives.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Radio Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-white mb-6">
                  <li>Wide reach across diverse demographics</li>
                  <li>Cost-effective compared to television</li>
                  <li>Targeted time slots for specific audiences</li>
                  <li>High frequency and repetition options</li>
                  <li>Local and regional market coverage</li>
                  <li>Immediate call-to-action effectiveness</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Radio Advertising Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Script Writing</h3>
                    <p className="text-sm text-white">Professional script development for engaging radio spots</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Voice Talent</h3>
                    <p className="text-sm text-white">Access to professional voice artists and narrators</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Audio Production</h3>
                    <p className="text-sm text-white">High-quality audio editing and sound design</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Media Buying</h3>
                    <p className="text-sm text-white">Strategic placement across multiple radio stations</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Reach listeners during peak engagement times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Target specific demographics and interests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Flexible campaign duration and frequency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Measurable results and audience analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Local market penetration and brand awareness</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white">
                  Contact us to create a radio advertising campaign that resonates with your target audience and drives results.
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

