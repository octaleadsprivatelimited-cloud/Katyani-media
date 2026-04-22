import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiCalendar, FiMapPin, FiUsers, FiTarget } from 'react-icons/fi'
import type { Metadata } from 'next'

// Portfolio items data - matching the Portfolio component
const portfolioItems = [
  {
    id: 1,
    title: 'Bus Advertising Campaign',
    category: 'Outdoor Advertising',
    description: 'Comprehensive bus wrap campaign reaching 500K+ daily commuters across major routes',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=800&q=80',
    client: 'Major Retail Chain',
    location: 'Hyderabad, Telangana',
    duration: '3 Months',
    reach: '500,000+ Daily Commuters',
    results: '40% increase in brand inquiries, 25% boost in foot traffic',
    content: `
      <h2>Campaign Overview</h2>
      <p>This comprehensive bus advertising campaign was designed to maximize brand visibility across Hyderabad's busiest routes. The campaign utilized full bus wraps and strategic side panel placements to ensure maximum exposure to our client's target audience.</p>
      
      <h2>Campaign Strategy</h2>
      <p>We developed a multi-faceted approach that included:</p>
      <ul>
        <li><strong>Route Selection:</strong> Identified and secured placements on 50+ high-traffic bus routes covering major commercial and residential areas</li>
        <li><strong>Design Excellence:</strong> Created eye-catching, high-contrast designs that stood out in busy urban environments</li>
        <li><strong>Strategic Timing:</strong> Launched during peak shopping season to maximize impact</li>
        <li><strong>Multi-Format Approach:</strong> Combined full bus wraps with side panel advertising for comprehensive coverage</li>
      </ul>
      
      <h2>Implementation</h2>
      <p>The campaign involved wrapping 30 buses with full-body advertisements and placing side panel ads on an additional 50 buses. All installations were completed professionally with high-quality materials designed to withstand weather conditions and maintain visual impact throughout the campaign duration.</p>
      
      <h2>Results Achieved</h2>
      <p>The campaign delivered exceptional results:</p>
      <ul>
        <li><strong>Reach:</strong> Over 500,000 daily commuters across major routes</li>
        <li><strong>Brand Awareness:</strong> 40% increase in brand inquiries within the first month</li>
        <li><strong>Foot Traffic:</strong> 25% boost in store visits from target areas</li>
        <li><strong>ROI:</strong> Excellent return on investment with measurable business impact</li>
        <li><strong>Customer Engagement:</strong> Significant increase in social media mentions and brand recall</li>
      </ul>
      
      <h2>Key Success Factors</h2>
      <p>Several factors contributed to the campaign's success:</p>
      <ul>
        <li>Strategic route selection aligned with target demographics</li>
        <li>High-quality design that captured attention</li>
        <li>Professional installation and maintenance</li>
        <li>Comprehensive campaign monitoring and optimization</li>
        <li>Integration with other marketing channels</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>This bus advertising campaign demonstrates the power of strategic outdoor advertising in reaching large urban audiences. By combining creative design, strategic placement, and professional execution, we delivered measurable results that significantly impacted our client's business growth.</p>
    `,
  },
  {
    id: 2,
    title: 'Corporate Event Marketing',
    category: 'Event Marketing',
    description: 'Full-service event marketing for annual corporate conference with 2000+ attendees',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    client: 'Technology Company',
    location: 'Hyderabad Convention Center',
    duration: '2 Days',
    reach: '2,000+ Attendees',
    results: '500+ qualified leads, 50+ new partnerships, 45% brand awareness increase',
    content: `
      <h2>Event Overview</h2>
      <p>This comprehensive corporate event marketing campaign involved planning and executing a large-scale annual conference for a leading technology company. The event brought together industry leaders, potential clients, and partners for two days of networking, presentations, and brand engagement.</p>
      
      <h2>Event Planning & Strategy</h2>
      <p>Our team developed a comprehensive event strategy that included:</p>
      <ul>
        <li><strong>Venue Selection:</strong> Secured the prestigious Hyderabad Convention Center with capacity for 2,000+ attendees</li>
        <li><strong>Branding Integration:</strong> Created cohesive branding throughout the venue, from entrance to breakout rooms</li>
        <li><strong>Content Development:</strong> Coordinated keynote speakers and session content aligned with brand messaging</li>
        <li><strong>Marketing Campaign:</strong> Executed pre-event marketing to maximize attendance and engagement</li>
      </ul>
      
      <h2>Event Execution</h2>
      <p>The event featured:</p>
      <ul>
        <li>Main stage presentations with industry thought leaders</li>
        <li>Interactive breakout sessions and workshops</li>
        <li>Networking lounges and exhibition areas</li>
        <li>Branded materials and giveaways</li>
        <li>Professional photography and videography</li>
        <li>Live social media coverage</li>
      </ul>
      
      <h2>Results Achieved</h2>
      <p>The event delivered exceptional outcomes:</p>
      <ul>
        <li><strong>Attendance:</strong> Over 2,000 registered attendees with 95% attendance rate</li>
        <li><strong>Lead Generation:</strong> 500+ qualified leads collected during the event</li>
        <li><strong>Partnerships:</strong> 50+ new client partnerships established</li>
        <li><strong>Brand Awareness:</strong> 45% increase in brand awareness in target market</li>
        <li><strong>Media Coverage:</strong> Featured in major industry publications</li>
        <li><strong>Social Engagement:</strong> 10,000+ social media impressions and engagement</li>
      </ul>
      
      <h2>Key Success Factors</h2>
      <p>Several elements contributed to the event's success:</p>
      <ul>
        <li>Comprehensive pre-event marketing and promotion</li>
        <li>High-quality content and speaker lineup</li>
        <li>Seamless event execution and logistics</li>
        <li>Strong brand presence and messaging</li>
        <li>Effective lead capture and follow-up systems</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>This corporate event marketing campaign demonstrates how well-executed events can serve as powerful tools for brand building, lead generation, and business growth. Through strategic planning and professional execution, we created an event that delivered measurable results and lasting impact.</p>
    `,
  },
  {
    id: 3,
    title: 'Radio Advertising Campaign',
    category: 'Media Advertising',
    description: 'Multi-channel radio advertising campaign across major stations with 95% reach',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    client: 'Local Restaurant Chain',
    location: 'Hyderabad & Telangana',
    duration: '6 Months',
    reach: '95% Market Reach',
    results: '60% increase in brand awareness, 35% boost in sales',
    content: `
      <h2>Campaign Overview</h2>
      <p>This comprehensive radio advertising campaign was designed to build brand awareness and drive customer traffic for a growing restaurant chain across Hyderabad and Telangana. The campaign utilized multiple radio stations to ensure maximum reach and frequency.</p>
      
      <h2>Campaign Strategy</h2>
      <p>We developed a multi-channel approach that included:</p>
      <ul>
        <li><strong>Station Selection:</strong> Partnered with 5 major radio stations covering different demographics and listening preferences</li>
        <li><strong>Time Slot Optimization:</strong> Secured prime time slots during morning and evening drive times for maximum impact</li>
        <li><strong>Creative Development:</strong> Created engaging, memorable radio spots that resonated with target audiences</li>
        <li><strong>Frequency Planning:</strong> Ensured optimal frequency to build brand recall without ad fatigue</li>
      </ul>
      
      <h2>Implementation</h2>
      <p>The campaign featured:</p>
      <ul>
        <li>30-second and 60-second radio commercials</li>
        <li>Program sponsorships on popular shows</li>
        <li>Contest integrations and promotional announcements</li>
        <li>Coordinated messaging across all stations</li>
        <li>Regular creative refreshes to maintain engagement</li>
      </ul>
      
      <h2>Results Achieved</h2>
      <p>The campaign delivered outstanding results:</p>
      <ul>
        <li><strong>Market Reach:</strong> Achieved 95% market reach across target demographics</li>
        <li><strong>Brand Awareness:</strong> 60% increase in brand awareness in target areas</li>
        <li><strong>Sales Growth:</strong> 35% boost in sales during campaign period</li>
        <li><strong>Customer Traffic:</strong> Significant increase in store visits and inquiries</li>
        <li><strong>ROI:</strong> Excellent return on investment with measurable business impact</li>
      </ul>
      
      <h2>Key Success Factors</h2>
      <p>Several factors contributed to the campaign's success:</p>
      <ul>
        <li>Strategic station selection aligned with target demographics</li>
        <li>Compelling creative that resonated with listeners</li>
        <li>Optimal frequency and timing for maximum impact</li>
        <li>Consistent messaging across all channels</li>
        <li>Integration with other marketing efforts</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>This radio advertising campaign demonstrates the continued power of audio advertising in reaching and engaging target audiences. Through strategic planning, creative execution, and optimal media placement, we delivered measurable results that drove business growth for our client.</p>
    `,
  },
  {
    id: 4,
    title: 'Metro Station Campaign',
    category: 'Outdoor Advertising',
    description: 'Strategic metro station advertising placement in high-traffic areas',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    client: 'Real Estate Developer',
    location: 'Hyderabad Metro Stations',
    duration: '4 Months',
    reach: '300,000+ Daily Commuters',
    results: '50% increase in inquiries, 30% boost in property visits',
    content: `
      <h2>Campaign Overview</h2>
      <p>This strategic metro station advertising campaign was designed to reach urban commuters and drive property inquiries for a major real estate developer. The campaign utilized high-visibility placements at key metro stations across Hyderabad's busiest transit hubs.</p>
      
      <h2>Campaign Strategy</h2>
      <p>We developed a targeted approach that included:</p>
      <ul>
        <li><strong>Station Selection:</strong> Identified and secured placements at 15 high-traffic metro stations</li>
        <li><strong>Placement Types:</strong> Utilized platform displays, escalator advertising, and entrance placements</li>
        <li><strong>Design Excellence:</strong> Created visually striking advertisements that captured commuter attention</li>
        <li><strong>Strategic Timing:</strong> Launched during peak property buying season</li>
      </ul>
      
      <h2>Implementation</h2>
      <p>The campaign featured:</p>
      <ul>
        <li>Large format platform displays at major stations</li>
        <li>Escalator wall advertising for extended viewing time</li>
        <li>Station entrance placements for maximum visibility</li>
        <li>Digital screen placements at select high-traffic locations</li>
        <li>Consistent branding across all placements</li>
      </ul>
      
      <h2>Results Achieved</h2>
      <p>The campaign delivered impressive results:</p>
      <ul>
        <li><strong>Daily Reach:</strong> Over 300,000 daily commuters across selected stations</li>
        <li><strong>Inquiries:</strong> 50% increase in property inquiries during campaign period</li>
        <li><strong>Property Visits:</strong> 30% boost in scheduled property visits</li>
        <li><strong>Brand Awareness:</strong> Significant increase in brand recognition in target areas</li>
        <li><strong>Lead Quality:</strong> High-quality leads from engaged commuters</li>
      </ul>
      
      <h2>Key Success Factors</h2>
      <p>Several elements contributed to the campaign's success:</p>
      <ul>
        <li>Strategic station selection in high-value areas</li>
        <li>High-quality design that stood out in busy environments</li>
        <li>Multiple placement types for comprehensive coverage</li>
        <li>Optimal timing aligned with buying season</li>
        <li>Professional installation and maintenance</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>This metro station advertising campaign demonstrates the effectiveness of strategic transit advertising in reaching engaged urban audiences. Through careful placement selection, compelling design, and professional execution, we delivered measurable results that drove business growth for our client.</p>
    `,
  },
  {
    id: 5,
    title: 'Pamphlet Distribution Drive',
    category: 'Direct Marketing',
    description: 'Targeted pamphlet distribution campaign reaching 50K+ households',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    client: 'Healthcare Services',
    location: 'Hyderabad Residential Areas',
    duration: '2 Months',
    reach: '50,000+ Households',
    results: '25% response rate, 1,200+ appointments booked',
    content: `
      <h2>Campaign Overview</h2>
      <p>This targeted pamphlet distribution campaign was designed to reach specific residential areas and drive appointments for a healthcare services provider. The campaign utilized strategic geographic targeting and professional distribution teams to ensure maximum impact.</p>
      
      <h2>Campaign Strategy</h2>
      <p>We developed a targeted approach that included:</p>
      <ul>
        <li><strong>Geographic Targeting:</strong> Identified and targeted 25 high-value residential areas</li>
        <li><strong>Design Development:</strong> Created informative, visually appealing pamphlets with clear call-to-action</li>
        <li><strong>Distribution Planning:</strong> Developed systematic distribution schedule for comprehensive coverage</li>
        <li><strong>Quality Control:</strong> Implemented tracking and verification systems</li>
      </ul>
      
      <h2>Implementation</h2>
      <p>The campaign involved:</p>
      <ul>
        <li>Professional pamphlet design with clear messaging</li>
        <li>Trained distribution teams for systematic coverage</li>
        <li>Door-to-door distribution in selected areas</li>
        <li>Distribution at community centers and local markets</li>
        <li>Quality checks and coverage verification</li>
        <li>Follow-up tracking and response measurement</li>
      </ul>
      
      <h2>Results Achieved</h2>
      <p>The campaign delivered excellent results:</p>
      <ul>
        <li><strong>Household Reach:</strong> Over 50,000 households reached across target areas</li>
        <li><strong>Response Rate:</strong> 25% response rate, exceeding industry averages</li>
        <li><strong>Appointments:</strong> 1,200+ appointments booked directly from campaign</li>
        <li><strong>Cost Efficiency:</strong> Excellent cost per lead and cost per appointment</li>
        <li><strong>Brand Awareness:</strong> Significant increase in local brand recognition</li>
      </ul>
      
      <h2>Key Success Factors</h2>
      <p>Several factors contributed to the campaign's success:</p>
      <ul>
        <li>Strategic geographic targeting of high-value areas</li>
        <li>Compelling design and clear messaging</li>
        <li>Professional distribution teams and systematic approach</li>
        <li>Strong call-to-action and offer</li>
        <li>Comprehensive tracking and measurement</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>This pamphlet distribution campaign demonstrates the continued effectiveness of direct marketing in reaching local audiences. Through strategic targeting, professional execution, and comprehensive tracking, we delivered measurable results that drove business growth for our client.</p>
    `,
  },
  {
    id: 6,
    title: 'Cycle Advertising Initiative',
    category: 'Outdoor Advertising',
    description: 'Eco-friendly cycle advertising campaign at major events and festivals',
    image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c4a?w=800&q=80',
    client: 'Eco-Friendly Brand',
    location: 'Hyderabad Events & Festivals',
    duration: '3 Months',
    reach: '100,000+ Event Attendees',
    results: '30% brand awareness increase, 200+ social media mentions',
    content: `
      <h2>Campaign Overview</h2>
      <p>This eco-friendly cycle advertising campaign was designed to align with a brand's sustainability values while effectively reaching event and festival attendees. The campaign utilized branded bicycles and cycling teams at major events across Hyderabad.</p>
      
      <h2>Campaign Strategy</h2>
      <p>We developed an innovative approach that included:</p>
      <ul>
        <li><strong>Event Selection:</strong> Identified and secured participation in 10 major events and festivals</li>
        <li><strong>Branding Design:</strong> Created eye-catching bicycle wraps and rider uniforms</li>
        <li><strong>Team Coordination:</strong> Organized professional cycling teams for event participation</li>
        <li><strong>Sustainability Messaging:</strong> Integrated eco-friendly messaging aligned with brand values</li>
      </ul>
      
      <h2>Implementation</h2>
      <p>The campaign featured:</p>
      <ul>
        <li>Branded bicycles with full-wrap advertisements</li>
        <li>Professional cycling teams in branded uniforms</li>
        <li>Strategic positioning at event entrances and high-traffic areas</li>
        <li>Interactive engagement with event attendees</li>
        <li>Social media integration and live coverage</li>
        <li>Eco-friendly promotional materials</li>
      </ul>
      
      <h2>Results Achieved</h2>
      <p>The campaign delivered impressive results:</p>
      <ul>
        <li><strong>Event Reach:</strong> Over 100,000 event attendees across all events</li>
        <li><strong>Brand Awareness:</strong> 30% increase in brand awareness in target demographic</li>
        <li><strong>Social Engagement:</strong> 200+ social media mentions and shares</li>
        <li><strong>Brand Alignment:</strong> Strong positive association with sustainability values</li>
        <li><strong>Media Coverage:</strong> Featured in local media and event coverage</li>
      </ul>
      
      <h2>Key Success Factors</h2>
      <p>Several elements contributed to the campaign's success:</p>
      <ul>
        <li>Innovative approach that stood out at events</li>
        <li>Strong alignment with brand values and messaging</li>
        <li>Professional execution and team coordination</li>
        <li>Strategic event selection and positioning</li>
        <li>Social media integration and engagement</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>This cycle advertising campaign demonstrates how innovative, eco-friendly marketing approaches can effectively reach audiences while reinforcing brand values. Through creative execution and strategic event participation, we delivered measurable results that enhanced brand awareness and engagement.</p>
    `,
  },
]

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const item = portfolioItems.find(p => p.id === parseInt(id))
  
  if (!item) {
    return {
      title: 'Portfolio Item Not Found | Katyani Media',
      description: 'The portfolio item you are looking for does not exist.',
    }
  }

  return {
    title: `${item.title} | Katyani Media Portfolio`,
    description: item.description,
    keywords: `${item.category.toLowerCase()}, portfolio, marketing campaigns, ${item.title.toLowerCase()}, Katyani Media, Hyderabad marketing, Telangana marketing, case study, marketing success`,
    openGraph: {
      title: `${item.title} | Katyani Media Portfolio`,
      description: item.description,
      url: `https://katyanimedia.com/portfolio/${item.id}`,
      siteName: 'Katyani Media',
      images: [
        {
          url: item.image,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title} | Katyani Media Portfolio`,
      description: item.description,
      images: [item.image],
    },
    alternates: {
      canonical: `https://katyanimedia.com/portfolio/${item.id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function PortfolioItemPage({ params }: PageProps) {
  const { id } = await params
  const item = portfolioItems.find(p => p.id === parseInt(id))

  if (!item) {
    return (
      <div className="w-full pb-16 bg-black min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-300 mb-4">Portfolio Item Not Found</h1>
            <p className="text-white mb-8">The portfolio item you're looking for doesn't exist.</p>
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <FiArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full pb-16 bg-black">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 pt-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors mb-6"
          >
            <FiArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="mb-4">
            <span className="bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              {item.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-300 mb-6">
            {item.title}
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            {item.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-96 mb-8 rounded-lg overflow-hidden border border-white">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-black border border-white rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FiUsers className="text-primary-400" size={24} />
              <h3 className="text-lg font-semibold text-primary-300">Client</h3>
            </div>
            <p className="text-white">{item.client}</p>
          </div>
          
          <div className="bg-black border border-white rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FiMapPin className="text-primary-400" size={24} />
              <h3 className="text-lg font-semibold text-primary-300">Location</h3>
            </div>
            <p className="text-white">{item.location}</p>
          </div>
          
          <div className="bg-black border border-white rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FiCalendar className="text-primary-400" size={24} />
              <h3 className="text-lg font-semibold text-primary-300">Duration</h3>
            </div>
            <p className="text-white">{item.duration}</p>
          </div>
          
          <div className="bg-black border border-white rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FiTarget className="text-primary-400" size={24} />
              <h3 className="text-lg font-semibold text-primary-300">Reach</h3>
            </div>
            <p className="text-white">{item.reach}</p>
          </div>
        </div>

        {/* Results Highlight */}
        <div className="bg-primary-900/30 border border-primary-500 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-bold text-primary-300 mb-3">Results Achieved</h3>
          <p className="text-white text-lg">{item.results}</p>
        </div>

        {/* Content */}
        <div
          className="prose prose-invert max-w-none text-white"
          dangerouslySetInnerHTML={{ __html: item.content }}
          style={{
            lineHeight: '1.8',
          }}
        />

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <FiArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </article>
    </div>
  )
}

