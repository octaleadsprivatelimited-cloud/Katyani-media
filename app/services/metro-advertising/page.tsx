import SideContactForm from '@/components/SideContactForm'
import Image from 'next/image'
import { FiNavigation } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metro Advertising',
  description: 'Strategic metro advertising services in Hyderabad, Telangana. High-traffic metro station advertising placement to reach urban commuters. Metro rail advertising, station branding, and transit marketing solutions. Contact Katyani Media.',
  keywords: 'metro advertising Hyderabad, metro station advertising Telangana, metro rail ads, transit advertising, metro branding Hyderabad, public transport advertising, metro ad placement',
  openGraph: {
    title: 'Metro Advertising Services - Katyani Media | Hyderabad Metro',
    description: 'Strategic metro advertising solutions to reach commuters and urban audiences in Hyderabad, Telangana.',
    url: 'https://katyanimedia.com/services/metro-advertising',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/services/metro-advertising',
  },
}

export default function MetroAdvertisingPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[500px] mb-12 overflow-hidden -mt-16">
        <Image
          src="/services/metro-1.png"
          alt="Metro Advertising - Reach Urban Commuters Daily"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiNavigation className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Metro Advertising</h1>
            </div>
            <p className="text-lg text-white">Reach Urban Commuters Daily</p>
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
                    src="/services/metro-1.png"
                    alt="Metro Advertising Solutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-lg font-semibold">Metro Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-white mb-6">
                  Metro advertising offers unparalleled reach to urban commuters who use public transportation daily. Our metro advertising solutions help your brand connect with a captive audience during their daily commute, ensuring high visibility and engagement in one of the most effective transit advertising mediums.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Metro Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-white mb-6">
                  <li>Massive daily commuter reach</li>
                  <li>Captive audience during travel time</li>
                  <li>High-frequency exposure opportunities</li>
                  <li>Strategic station and train placements</li>
                  <li>Targeted urban demographic reach</li>
                  <li>Cost-effective mass transit advertising</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Metro Advertising Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Station Advertising</h3>
                    <p className="text-sm text-white">Platform displays, escalator ads, and station branding</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Train Advertising</h3>
                    <p className="text-sm text-white">Interior and exterior train wrap advertising</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Digital Displays</h3>
                    <p className="text-sm text-white">LED screens and digital boards at metro stations</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Strategic Placement</h3>
                    <p className="text-sm text-white">High-traffic station selection for maximum visibility</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Reach thousands of daily commuters consistently</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Captive audience with extended exposure time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Target high-traffic stations and routes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Professional installation and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Measurable footfall and engagement metrics</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white">
                  Get in touch to explore metro advertising opportunities and reach urban commuters effectively.
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


