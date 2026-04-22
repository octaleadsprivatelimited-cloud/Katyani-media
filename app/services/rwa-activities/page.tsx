import SideContactForm from '@/components/SideContactForm'
import Image from 'next/image'
import { FiUsers } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RWA Activities',
  description: 'Resident Welfare Association (RWA) marketing and engagement activities in Hyderabad, Telangana. Community engagement programs, local brand promotion, society marketing, and residential area advertising. Build connections with local communities. Contact Katyani Media.',
  keywords: 'RWA activities Hyderabad, resident welfare association marketing, community engagement Telangana, society marketing, residential area advertising, local community marketing',
  openGraph: {
    title: 'RWA Activities & Community Marketing - Katyani Media | Hyderabad',
    description: 'Resident Welfare Association (RWA) marketing and engagement activities for local brand promotion in Hyderabad.',
    url: 'https://katyanimedia.com/services/rwa-activities',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/services/rwa-activities',
  },
}

export default function RWAActivitiesPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[500px] mb-12 overflow-hidden -mt-16">
        <Image
          src="/services/apartment.png"
          alt="RWA Activities - Community Engagement & Local Marketing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiUsers className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">RWA Activities</h1>
            </div>
            <p className="text-lg text-white">Community Engagement & Local Marketing</p>
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
                    src="/services/apartment.png"
                    alt="RWA Activities & Marketing Solutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-lg font-semibold">RWA Activities & Marketing Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-white mb-6">
                  Resident Welfare Association (RWA) activities provide an excellent platform for brands to connect with local communities. Our RWA marketing services help you engage with residents through community events, activities, and targeted campaigns, building trust and brand loyalty at the grassroots level.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose RWA Activities?</h2>
                <ul className="list-disc list-inside space-y-2 text-white mb-6">
                  <li>Direct access to residential communities</li>
                  <li>Trusted and credible marketing channel</li>
                  <li>High engagement in community settings</li>
                  <li>Targeted local market penetration</li>
                  <li>Cost-effective community marketing</li>
                  <li>Long-term brand relationship building</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our RWA Marketing Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Sponsorship</h3>
                    <p className="text-sm text-white">Sponsorship and participation in RWA-organized events</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Community Activities</h3>
                    <p className="text-sm text-white">Targeted marketing activities within residential complexes</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Product Showcases</h3>
                    <p className="text-sm text-white">On-site product showcases and sampling activities</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Community Service</h3>
                    <p className="text-sm text-white">Building relationships through community service initiatives</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">RWA Activity Types</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Festival celebrations and cultural events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Health camps and wellness programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Sports events and competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Educational workshops and seminars</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Community meetings and gatherings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Environmental and social initiatives</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Build trust and credibility within communities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Direct engagement with target residential audience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Cost-effective local market penetration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Long-term brand relationship building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Word-of-mouth marketing and referrals</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white">
                  Contact us to explore RWA activity opportunities and connect with local communities effectively.
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


