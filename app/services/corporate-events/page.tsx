import SideContactForm from '@/components/SideContactForm'
import Image from 'next/image'
import { FiCalendar } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Events',
  description: 'Complete corporate event management and marketing services in Hyderabad, Telangana. Professional event planning, brand launches, conferences, seminars, and business gatherings. Full-service event marketing for 2000+ attendees. Contact Katyani Media.',
  keywords: 'corporate events Hyderabad, event management Telangana, corporate event planning, business events, brand launch events, conference management, event marketing services Hyderabad',
  openGraph: {
    title: 'Corporate Event Management - Katyani Media | Hyderabad',
    description: 'Complete corporate event management and marketing services for successful business gatherings in Hyderabad.',
    url: 'https://katyanimedia.com/services/corporate-events',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/services/corporate-events',
  },
}

export default function CorporateEventsPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[500px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Corporate Events - Complete Event Management Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiCalendar className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Corporate Events</h1>
            </div>
            <p className="text-lg text-white">Complete Event Management Solutions</p>
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
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80"
                    alt="Corporate Event Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-lg font-semibold">Corporate Event Services</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-white mb-6">
                  Corporate events are powerful platforms for brand building, networking, and business growth. Our comprehensive corporate event services cover everything from planning and execution to marketing and promotion, ensuring your event achieves maximum impact and success.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Our Corporate Event Services?</h2>
                <ul className="list-disc list-inside space-y-2 text-white mb-6">
                  <li>End-to-end event management solutions</li>
                  <li>Professional planning and execution</li>
                  <li>Brand visibility and marketing integration</li>
                  <li>Networking and relationship building</li>
                  <li>Measurable ROI and event analytics</li>
                  <li>Experienced team handling all aspects</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Corporate Event Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Planning</h3>
                    <p className="text-sm text-white">Comprehensive planning from concept to execution</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Venue Management</h3>
                    <p className="text-sm text-white">Selection and coordination of perfect event venues</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Brand Promotion</h3>
                    <p className="text-sm text-white">Integrated marketing and brand visibility at events</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Marketing</h3>
                    <p className="text-sm text-white">Pre-event, during-event, and post-event marketing campaigns</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Logistics Management</h3>
                    <p className="text-sm text-white">Complete coordination of event logistics and operations</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Post-Event Analysis</h3>
                    <p className="text-sm text-white">Comprehensive reporting and ROI measurement</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Event Types We Handle</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Product launches and brand unveilings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Corporate conferences and seminars</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Annual meetings and shareholder gatherings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Trade shows and exhibitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Networking events and business mixers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Award ceremonies and corporate celebrations</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white">
                  Let us help you create memorable corporate events that strengthen your brand and achieve your business objectives.
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

