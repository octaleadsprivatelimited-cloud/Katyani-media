import SideContactForm from '@/components/SideContactForm'
import Image from 'next/image'
import { FiUser } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Look Walker Advertising',
  description: 'Human billboard and look walker advertising services in Hyderabad, Telangana. Maximum brand visibility with mobile advertising, street marketing, and memorable brand interactions. Perfect for events, launches, and high-traffic areas. Contact Katyani Media.',
  keywords: 'look walker advertising Hyderabad, human billboard Telangana, mobile advertising, street marketing, walking billboard, brand ambassador services, promotional walkers',
  openGraph: {
    title: 'Look Walker Advertising Services - Katyani Media | Hyderabad',
    description: 'Human billboard and look walker advertising services for maximum brand visibility in Hyderabad, Telangana.',
    url: 'https://katyanimedia.com/services/look-walker',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/services/look-walker',
  },
}

export default function LookWalkerPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[500px] mb-12 overflow-hidden -mt-16">
        <Image
          src="/services/walking.png"
          alt="Look Walker - Human Billboard Advertising"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiUser className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Look Walker</h1>
            </div>
            <p className="text-lg text-white">Human Billboard Advertising</p>
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
                    src="/services/walking.png"
                    alt="Look Walker Advertising Solutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-lg font-semibold">Look Walker Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-white mb-6">
                  Look walker advertising, also known as human billboards, is an innovative and highly visible form of outdoor advertising. Our look walker services use professional brand ambassadors who carry your message through high-traffic areas, events, and strategic locations, creating memorable brand interactions and maximum visibility.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Look Walker Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-white mb-6">
                  <li>Maximum visibility and attention-grabbing</li>
                  <li>Human interaction and engagement</li>
                  <li>Flexible and mobile advertising platform</li>
                  <li>Perfect for events and high-traffic areas</li>
                  <li>Cost-effective compared to traditional billboards</li>
                  <li>Creates memorable brand experiences</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Look Walker Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Brand Ambassadors</h3>
                    <p className="text-sm text-white">Professional brand ambassadors with custom signage</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Walkers</h3>
                    <p className="text-sm text-white">Look walkers for events, festivals, and gatherings</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Strategic Routes</h3>
                    <p className="text-sm text-white">Strategic walking routes through high-traffic commercial areas</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Professional Team</h3>
                    <p className="text-sm text-white">Trained professionals representing your brand</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>High visibility and attention in crowded areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Personal interaction with potential customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Flexible scheduling and location selection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Cost-effective for targeted local campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Memorable brand experiences and interactions</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white">
                  Get in touch to learn how look walker advertising can boost your brand visibility and create lasting impressions.
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


