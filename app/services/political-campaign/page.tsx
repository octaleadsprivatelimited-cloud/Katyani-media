import SideContactForm from '@/components/SideContactForm'
import Image from 'next/image'
import { FiUsers } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Political Campaign Management',
  description: 'Comprehensive political campaign management and marketing services in Hyderabad, Telangana. Effective voter outreach, campaign strategy, poster design, rally management, and electoral marketing. Expert political campaign solutions. Contact Katyani Media.',
  keywords: 'political campaign management Hyderabad, electoral marketing Telangana, voter outreach, campaign strategy, political advertising, election campaign services, political marketing',
  openGraph: {
    title: 'Political Campaign Management - Katyani Media | Telangana',
    description: 'Comprehensive political campaign management and marketing services for effective voter outreach and engagement in Telangana.',
    url: 'https://katyanimedia.com/services/political-campaign',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/services/political-campaign',
  },
}

export default function PoliticalCampaignPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[500px] mb-12 overflow-hidden -mt-16">
        <Image
          src="/services/politics.png"
          alt="Political Campaign - Effective Voter Outreach & Engagement"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiUsers className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Political Campaign</h1>
            </div>
            <p className="text-lg text-white">Effective Voter Outreach & Engagement</p>
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
                    src="/services/politics.png"
                    alt="Political Campaign Solutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-lg font-semibold">Political Campaign Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-white mb-6">
                  Political campaigns require strategic planning, effective communication, and comprehensive voter outreach. Our political campaign services help candidates and parties connect with voters, build strong public presence, and achieve electoral success through proven offline marketing strategies.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Our Political Campaign Services?</h2>
                <ul className="list-disc list-inside space-y-2 text-white mb-6">
                  <li>Comprehensive campaign strategy and planning</li>
                  <li>Multi-channel voter outreach programs</li>
                  <li>Professional campaign material design and production</li>
                  <li>Strategic placement in high-visibility locations</li>
                  <li>Community engagement and RWA activities</li>
                  <li>Real-time campaign performance tracking</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Political Campaign Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Campaign Strategy</h3>
                    <p className="text-sm text-white">Comprehensive planning and strategy development for effective voter outreach</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Poster & Banner Design</h3>
                    <p className="text-sm text-white">Professional design and production of campaign posters, banners, and materials</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Gate Board Advertising</h3>
                    <p className="text-sm text-white">Strategic placement of campaign messages at entry points and high-traffic areas</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Pamphlet Distribution</h3>
                    <p className="text-sm text-white">Targeted distribution of campaign literature to reach voters directly</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Bus & Metro Advertising</h3>
                    <p className="text-sm text-white">Wide-reaching transit advertising to maximize campaign visibility</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">RWA Activities</h3>
                    <p className="text-sm text-white">Community engagement programs and resident welfare association activities</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Radio & TV Campaigns</h3>
                    <p className="text-sm text-white">Media campaigns for maximum reach across diverse demographics</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Rally & Event Management</h3>
                    <p className="text-sm text-white">Professional organization and management of political rallies and events</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Comprehensive campaign coverage across multiple channels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Strategic targeting of key voter demographics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Professional campaign materials and branding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Maximum visibility in high-traffic areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Community engagement and grassroots outreach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Experienced team with political campaign expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Flexible campaign packages tailored to your needs</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Campaign Approach</h2>
                <p className="text-white mb-4">
                  Our political campaign services combine traditional offline marketing methods with strategic planning to create comprehensive voter outreach programs. We work closely with candidates and campaign teams to understand their goals, target demographics, and key messages.
                </p>
                <p className="text-white mb-4">
                  From initial strategy development to final execution, we ensure every aspect of your campaign is professionally managed. Our multi-channel approach ensures your message reaches voters through various touchpoints, maximizing campaign effectiveness and voter engagement.
                </p>
                <p className="text-white">
                  Contact us today to discuss your political campaign needs and get a customized campaign strategy that delivers results.
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

