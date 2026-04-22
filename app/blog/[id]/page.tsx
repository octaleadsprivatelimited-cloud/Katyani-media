import Image from 'next/image'
import Link from 'next/link'
import { FiCalendar, FiUser, FiArrowLeft, FiClock } from 'react-icons/fi'
import type { Metadata } from 'next'

// Blog posts data - matching the blog page
const blogPosts = [
  {
    id: 1,
    title: 'The Power of Bus Advertising in Urban Markets',
    excerpt: 'Discover how bus advertising can maximize your brand visibility and reach thousands of potential customers daily.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    author: 'Marketing Team',
    date: 'March 15, 2024',
    category: 'Advertising',
    readTime: '5 min read',
    content: `
      <h2>Introduction to Bus Advertising</h2>
      <p>Bus advertising has emerged as one of the most effective offline marketing strategies in urban markets. With millions of commuters traveling daily, buses provide an unparalleled platform for brand visibility and customer engagement.</p>
      
      <h2>Why Bus Advertising Works</h2>
      <p>Bus advertising offers several unique advantages that make it a powerful marketing tool:</p>
      <ul>
        <li><strong>High Visibility:</strong> Buses travel through high-traffic areas, ensuring your brand is seen by thousands of potential customers daily.</li>
        <li><strong>Cost-Effective:</strong> Compared to traditional media, bus advertising offers excellent ROI with lower costs per impression.</li>
        <li><strong>Targeted Reach:</strong> You can select specific routes that align with your target demographic and geographic preferences.</li>
        <li><strong>24/7 Exposure:</strong> Your advertisement works around the clock, reaching audiences during peak commute hours and beyond.</li>
      </ul>
      
      <h2>Types of Bus Advertising</h2>
      <p>At Katyani Media, we offer comprehensive bus advertising solutions:</p>
      <ul>
        <li><strong>Full Bus Wrap:</strong> Complete bus wrapping for maximum impact and brand recognition</li>
        <li><strong>Side Panel Advertising:</strong> Strategic placement on bus sides for optimal visibility</li>
        <li><strong>Back Panel Advertising:</strong> High-impact rear advertising for following traffic</li>
        <li><strong>Interior Bus Advertising:</strong> Reach passengers during their commute with interior ads</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>Our bus advertising campaigns have helped numerous clients achieve remarkable results. One recent campaign reached over 500,000 daily commuters across major routes in Hyderabad, resulting in a 40% increase in brand inquiries within the first month.</p>
      
      <h2>Best Practices</h2>
      <p>To maximize the effectiveness of your bus advertising campaign:</p>
      <ul>
        <li>Keep your message clear and concise</li>
        <li>Use high-contrast colors for better visibility</li>
        <li>Include a strong call-to-action</li>
        <li>Choose routes that align with your target audience</li>
        <li>Monitor and track campaign performance</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Bus advertising remains a powerful and cost-effective way to reach urban audiences. With strategic planning and creative execution, your brand can achieve significant visibility and engagement through bus advertising campaigns.</p>
      
      <p>Ready to launch your bus advertising campaign? Contact Katyani Media today to discuss how we can help maximize your brand's visibility in Hyderabad and across Telangana.</p>
    `,
  },
  {
    id: 2,
    title: 'Why Offline Marketing Still Matters in the Digital Age',
    excerpt: 'While digital marketing dominates, offline marketing strategies continue to play a crucial role in building brand trust and local presence.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    author: 'Marketing Team',
    date: 'March 10, 2024',
    category: 'Marketing Strategy',
    readTime: '7 min read',
    content: `
      <h2>The Digital Age Paradox</h2>
      <p>In an era dominated by digital marketing, many businesses question the relevance of offline marketing strategies. However, the truth is that offline marketing not only remains relevant but is essential for building comprehensive brand presence and trust.</p>
      
      <h2>Why Offline Marketing Matters</h2>
      <p>Despite the digital revolution, offline marketing offers unique advantages that digital channels cannot replicate:</p>
      <ul>
        <li><strong>Tangible Presence:</strong> Physical advertisements create a tangible connection with your brand that digital ads cannot match.</li>
        <li><strong>Local Trust Building:</strong> Offline marketing helps build trust within local communities, especially important for businesses targeting regional markets.</li>
        <li><strong>Reduced Ad Fatigue:</strong> Consumers are increasingly experiencing digital ad fatigue, making offline marketing a refreshing alternative.</li>
        <li><strong>Multi-Sensory Engagement:</strong> Offline marketing engages multiple senses, creating more memorable brand experiences.</li>
      </ul>
      
      <h2>The Power of Integrated Marketing</h2>
      <p>The most successful marketing strategies combine both online and offline channels. This integrated approach ensures:</p>
      <ul>
        <li>Consistent brand messaging across all touchpoints</li>
        <li>Maximum reach across different audience segments</li>
        <li>Reinforced brand recall through multiple exposure points</li>
        <li>Enhanced credibility through diverse marketing channels</li>
      </ul>
      
      <h2>Offline Marketing Channels That Deliver Results</h2>
      <p>Several offline marketing channels continue to deliver exceptional results:</p>
      <ul>
        <li><strong>Bus and Metro Advertising:</strong> Reaches thousands of commuters daily</li>
        <li><strong>Corporate Events:</strong> Creates memorable brand experiences</li>
        <li><strong>Pamphlet Distribution:</strong> Targets specific geographic areas effectively</li>
        <li><strong>Radio and Television Ads:</strong> Reaches mass audiences with high recall</li>
        <li><strong>Gate Board Advertising:</strong> Captures attention at strategic locations</li>
      </ul>
      
      <h2>Measuring Offline Marketing Success</h2>
      <p>While measuring offline marketing ROI can be challenging, several metrics help track success:</p>
      <ul>
        <li>Brand awareness surveys</li>
        <li>Foot traffic and store visits</li>
        <li>Phone inquiries and lead generation</li>
        <li>Sales conversions from specific campaigns</li>
        <li>Social media mentions and engagement</li>
      </ul>
      
      <h2>Case Study: Hybrid Marketing Success</h2>
      <p>A recent client campaign combined bus advertising with social media promotion, resulting in a 60% increase in brand awareness and a 35% boost in online engagement. This demonstrates the power of integrating offline and online marketing strategies.</p>
      
      <h2>Conclusion</h2>
      <p>Offline marketing remains a crucial component of comprehensive marketing strategies. By combining offline and online channels, businesses can create powerful, multi-dimensional brand experiences that drive real results.</p>
      
      <p>At Katyani Media, we specialize in creating effective offline marketing campaigns that complement your digital efforts. Contact us to learn how we can help strengthen your brand presence in Hyderabad and beyond.</p>
    `,
  },
  {
    id: 3,
    title: 'Maximizing ROI with Metro Advertising',
    excerpt: 'Learn how metro advertising can help you reach urban commuters and create lasting brand impressions during their daily travels.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    author: 'Marketing Team',
    date: 'March 5, 2024',
    category: 'Advertising',
    readTime: '6 min read',
    content: `
      <h2>Understanding Metro Advertising</h2>
      <p>Metro advertising has become one of the most effective ways to reach urban commuters. With millions of people using metro systems daily, this advertising channel offers unparalleled access to a captive, engaged audience.</p>
      
      <h2>The Metro Commuter Advantage</h2>
      <p>Metro commuters represent a unique and valuable demographic:</p>
      <ul>
        <li><strong>Captive Audience:</strong> Commuters spend significant time in metro stations and trains, providing extended exposure to advertisements</li>
        <li><strong>Diverse Demographics:</strong> Metro systems attract people from all walks of life, ensuring broad reach</li>
        <li><strong>Regular Commuters:</strong> Daily commuters see your ads repeatedly, building strong brand recall</li>
        <li><strong>High Engagement:</strong> Commuters actively look around during their journey, making them more receptive to advertising</li>
      </ul>
      
      <h2>Types of Metro Advertising</h2>
      <p>Metro advertising offers various placement options to maximize your campaign's impact:</p>
      <ul>
        <li><strong>Platform Advertising:</strong> Large format displays on station platforms for maximum visibility</li>
        <li><strong>Train Interior Advertising:</strong> Inside train carriages where commuters spend most of their time</li>
        <li><strong>Station Entrance Advertising:</strong> High-traffic areas that capture attention as commuters enter</li>
        <li><strong>Escalator Advertising:</strong> Strategic placement along escalator walls for extended viewing time</li>
        <li><strong>Digital Screens:</strong> Dynamic digital displays that can be updated in real-time</li>
      </ul>
      
      <h2>Maximizing Your Metro Advertising ROI</h2>
      <p>To get the best return on your metro advertising investment:</p>
      <ul>
        <li><strong>Choose High-Traffic Stations:</strong> Focus on stations with the highest passenger volumes</li>
        <li><strong>Target Peak Hours:</strong> Ensure your ads are visible during morning and evening rush hours</li>
        <li><strong>Create Compelling Visuals:</strong> Design eye-catching advertisements that stand out in busy environments</li>
        <li><strong>Use Clear Messaging:</strong> Keep your message simple and memorable for quick comprehension</li>
        <li><strong>Track Performance:</strong> Monitor campaign metrics to optimize future placements</li>
      </ul>
      
      <h2>Success Metrics</h2>
      <p>Measuring metro advertising success involves tracking several key indicators:</p>
      <ul>
        <li>Brand awareness and recall rates</li>
        <li>Website traffic and online engagement</li>
        <li>Store visits and foot traffic</li>
        <li>Lead generation and inquiries</li>
        <li>Sales conversions attributed to the campaign</li>
      </ul>
      
      <h2>Real-World Results</h2>
      <p>Our metro advertising campaigns have delivered impressive results for clients. One recent campaign across major Hyderabad metro stations resulted in a 50% increase in brand awareness and a 25% boost in website traffic from the target areas.</p>
      
      <h2>Best Practices for Metro Advertising</h2>
      <p>Follow these best practices to maximize your metro advertising effectiveness:</p>
      <ul>
        <li>Design for quick viewing - commuters have limited time</li>
        <li>Use high-contrast colors for better visibility</li>
        <li>Include clear call-to-action</li>
        <li>Consider the viewing angle and distance</li>
        <li>Test different creative variations</li>
        <li>Coordinate with other marketing channels</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Metro advertising offers exceptional opportunities to reach urban audiences effectively. With strategic planning and creative execution, your brand can achieve significant visibility and engagement through metro advertising campaigns.</p>
      
      <p>Ready to explore metro advertising for your brand? Contact Katyani Media to discuss how we can help you maximize your ROI with strategic metro advertising placements in Hyderabad.</p>
    `,
  },
  {
    id: 4,
    title: 'Corporate Events: Building Brand Connections',
    excerpt: 'Explore how well-executed corporate events can strengthen customer relationships and create memorable brand experiences.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    author: 'Marketing Team',
    date: 'February 28, 2024',
    category: 'Events',
    readTime: '5 min read',
    content: `
      <h2>The Power of Corporate Events</h2>
      <p>Corporate events have evolved from simple gatherings to powerful marketing tools that create lasting brand connections. In today's competitive business landscape, well-executed corporate events can significantly strengthen customer relationships and drive business growth.</p>
      
      <h2>Why Corporate Events Matter</h2>
      <p>Corporate events offer unique advantages that other marketing channels cannot provide:</p>
      <ul>
        <li><strong>Face-to-Face Interaction:</strong> Direct personal contact builds stronger relationships than digital communication</li>
        <li><strong>Memorable Experiences:</strong> Events create lasting impressions that enhance brand recall</li>
        <li><strong>Networking Opportunities:</strong> Events facilitate valuable connections between your brand and stakeholders</li>
        <li><strong>Brand Storytelling:</strong> Events provide a platform to share your brand story in an engaging way</li>
        <li><strong>Lead Generation:</strong> Well-planned events generate qualified leads and business opportunities</li>
      </ul>
      
      <h2>Types of Corporate Events</h2>
      <p>Different types of corporate events serve different marketing objectives:</p>
      <ul>
        <li><strong>Product Launches:</strong> Introduce new products or services to target audiences</li>
        <li><strong>Conferences and Seminars:</strong> Position your brand as an industry thought leader</li>
        <li><strong>Networking Events:</strong> Build relationships with potential clients and partners</li>
        <li><strong>Customer Appreciation Events:</strong> Strengthen relationships with existing customers</li>
        <li><strong>Annual Meetings:</strong> Communicate company vision and achievements</li>
        <li><strong>Trade Shows:</strong> Showcase products and services to industry professionals</li>
      </ul>
      
      <h2>Key Elements of Successful Corporate Events</h2>
      <p>To ensure your corporate event delivers maximum impact:</p>
      <ul>
        <li><strong>Clear Objectives:</strong> Define specific goals before planning begins</li>
        <li><strong>Target Audience:</strong> Identify and understand your ideal attendees</li>
        <li><strong>Engaging Content:</strong> Create valuable, relevant content that resonates with attendees</li>
        <li><strong>Professional Execution:</strong> Ensure seamless event management and logistics</li>
        <li><strong>Brand Consistency:</strong> Maintain consistent branding throughout the event</li>
        <li><strong>Follow-Up Strategy:</strong> Plan post-event engagement to maximize ROI</li>
      </ul>
      
      <h2>Event Marketing Best Practices</h2>
      <p>Maximize your corporate event's marketing impact with these strategies:</p>
      <ul>
        <li>Create pre-event buzz through social media and email marketing</li>
        <li>Design engaging event experiences that align with your brand</li>
        <li>Leverage event content for post-event marketing materials</li>
        <li>Collect attendee feedback to improve future events</li>
        <li>Track metrics to measure event success and ROI</li>
      </ul>
      
      <h2>Measuring Event Success</h2>
      <p>Key metrics to evaluate your corporate event's effectiveness:</p>
      <ul>
        <li>Attendance rates and engagement levels</li>
        <li>Lead generation and conversion rates</li>
        <li>Brand awareness and recall</li>
        <li>Social media mentions and engagement</li>
        <li>Post-event sales and business growth</li>
        <li>Attendee satisfaction scores</li>
      </ul>
      
      <h2>Case Study: Successful Corporate Event</h2>
      <p>We recently managed a corporate conference for a technology company that attracted over 2,000 attendees. The event generated 500+ qualified leads, resulted in 50+ new client partnerships, and increased brand awareness by 45% in the target market.</p>
      
      <h2>Conclusion</h2>
      <p>Corporate events remain one of the most effective ways to build brand connections and drive business growth. With careful planning and professional execution, your corporate events can create lasting impressions and deliver measurable results.</p>
      
      <p>Looking to organize a corporate event that strengthens your brand connections? Contact Katyani Media to learn how our event management expertise can help you create memorable brand experiences in Hyderabad and across Telangana.</p>
    `,
  },
  {
    id: 5,
    title: 'Eco-Friendly Marketing: Cycle Advertising Trends',
    excerpt: 'Discover how cycle advertising aligns with sustainable marketing practices while effectively reaching local audiences.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    author: 'Marketing Team',
    date: 'February 20, 2024',
    category: 'Sustainability',
    readTime: '4 min read',
    content: `
      <h2>The Rise of Eco-Friendly Marketing</h2>
      <p>As businesses increasingly prioritize sustainability, eco-friendly marketing strategies like cycle advertising are gaining momentum. Cycle advertising not only demonstrates environmental responsibility but also effectively reaches local audiences in innovative ways.</p>
      
      <h2>What is Cycle Advertising?</h2>
      <p>Cycle advertising involves using bicycles as mobile advertising platforms. This can include:</p>
      <ul>
        <li>Bicycles with branded displays and banners</li>
        <li>Cyclists wearing branded clothing or carrying promotional materials</li>
        <li>Bicycle-mounted advertising boards and flags</li>
        <li>Eco-friendly promotional events featuring bicycles</li>
      </ul>
      
      <h2>Benefits of Cycle Advertising</h2>
      <p>Cycle advertising offers numerous advantages for brands committed to sustainable marketing:</p>
      <ul>
        <li><strong>Environmental Impact:</strong> Zero-emission advertising that aligns with eco-friendly values</li>
        <li><strong>Local Engagement:</strong> Reaches local communities effectively, especially in urban areas</li>
        <li><strong>High Visibility:</strong> Mobile advertising that captures attention in high-traffic areas</li>
        <li><strong>Cost-Effective:</strong> Lower costs compared to vehicle-based advertising</li>
        <li><strong>Flexible Deployment:</strong> Can be deployed at events, festivals, and specific locations</li>
        <li><strong>Positive Brand Image:</strong> Demonstrates commitment to sustainability</li>
      </ul>
      
      <h2>Where Cycle Advertising Works Best</h2>
      <p>Cycle advertising is particularly effective in:</p>
      <ul>
        <li>Urban areas with high pedestrian traffic</li>
        <li>Festivals and community events</li>
        <li>College campuses and educational institutions</li>
        <li>Shopping districts and commercial areas</li>
        <li>Parks and recreational areas</li>
        <li>Corporate campuses and business districts</li>
      </ul>
      
      <h2>Designing Effective Cycle Advertising</h2>
      <p>To maximize the impact of your cycle advertising campaign:</p>
      <ul>
        <li><strong>Bold Visuals:</strong> Use eye-catching designs that stand out in busy environments</li>
        <li><strong>Clear Messaging:</strong> Keep your message simple and memorable</li>
        <li><strong>Brand Consistency:</strong> Ensure your cycle advertising aligns with overall brand identity</li>
        <li><strong>Strategic Routes:</strong> Plan routes that maximize visibility and reach target audiences</li>
        <li><strong>Professional Execution:</strong> Work with experienced teams for seamless campaign delivery</li>
      </ul>
      
      <h2>Measuring Cycle Advertising Success</h2>
      <p>Track the effectiveness of your cycle advertising through:</p>
      <ul>
        <li>Brand awareness surveys in target areas</li>
        <li>Social media mentions and engagement</li>
        <li>Foot traffic and store visits</li>
        <li>Lead generation and inquiries</li>
        <li>Customer feedback and survey responses</li>
      </ul>
      
      <h2>Real-World Impact</h2>
      <p>Our cycle advertising campaigns have helped clients achieve remarkable results. One recent campaign at a major festival in Hyderabad reached over 50,000 attendees, generated 200+ social media mentions, and increased brand awareness by 30% in the target demographic.</p>
      
      <h2>The Future of Sustainable Marketing</h2>
      <p>As consumers become more environmentally conscious, eco-friendly marketing strategies like cycle advertising will continue to grow in importance. Brands that embrace sustainable marketing practices not only contribute to environmental protection but also build stronger connections with conscious consumers.</p>
      
      <h2>Conclusion</h2>
      <p>Cycle advertising represents the perfect intersection of sustainability and effective marketing. By choosing eco-friendly advertising methods, brands can reach local audiences while demonstrating their commitment to environmental responsibility.</p>
      
      <p>Interested in exploring cycle advertising for your brand? Contact Katyani Media to learn how we can help you implement sustainable marketing campaigns that effectively reach your target audience in Hyderabad and across Telangana.</p>
    `,
  },
  {
    id: 6,
    title: 'Television Advertising: Reaching Mass Audiences',
    excerpt: 'Understand the impact of television advertising and how it can help your brand connect with diverse demographics effectively.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    author: 'Marketing Team',
    date: 'February 15, 2024',
    category: 'Advertising',
    readTime: '6 min read',
    content: `
      <h2>The Enduring Power of Television Advertising</h2>
      <p>Despite the rise of digital media, television advertising remains one of the most powerful ways to reach mass audiences. With millions of viewers tuning in daily, television offers unparalleled reach and impact for brands looking to connect with diverse demographics.</p>
      
      <h2>Why Television Advertising Still Matters</h2>
      <p>Television advertising continues to deliver significant advantages:</p>
      <ul>
        <li><strong>Mass Reach:</strong> Television reaches millions of viewers simultaneously, ensuring broad brand exposure</li>
        <li><strong>High Engagement:</strong> Viewers are actively engaged with television content, making them receptive to advertising</li>
        <li><strong>Credibility:</strong> Television advertising enhances brand credibility and trust</li>
        <li><strong>Emotional Connection:</strong> Audio-visual format creates powerful emotional connections with audiences</li>
        <li><strong>Targeted Programming:</strong> Choose programs that align with your target demographic</li>
        <li><strong>Local and Regional Reach:</strong> Regional television channels offer cost-effective local market penetration</li>
      </ul>
      
      <h2>Types of Television Advertising</h2>
      <p>Television advertising offers various formats to suit different campaign objectives:</p>
      <ul>
        <li><strong>Commercial Spots:</strong> Traditional 15, 30, or 60-second advertisements</li>
        <li><strong>Program Sponsorships:</strong> Sponsor entire programs or segments for extended brand association</li>
        <li><strong>Product Placements:</strong> Integrate products naturally into program content</li>
        <li><strong>Infomercials:</strong> Extended format advertisements for detailed product demonstrations</li>
        <li><strong>News Sponsorships:</strong> Sponsor news segments for credibility and trust</li>
      </ul>
      
      <h2>Maximizing Television Advertising ROI</h2>
      <p>To get the best return on your television advertising investment:</p>
      <ul>
        <li><strong>Choose the Right Time Slots:</strong> Select prime time slots that reach your target audience</li>
        <li><strong>Target Specific Programs:</strong> Align your ads with programs watched by your target demographic</li>
        <li><strong>Create Compelling Content:</strong> Develop memorable, engaging commercials that stand out</li>
        <li><strong>Maintain Consistency:</strong> Run campaigns consistently to build brand recall</li>
        <li><strong>Combine with Digital:</strong> Integrate television ads with online campaigns for maximum impact</li>
        <li><strong>Track Performance:</strong> Monitor metrics to optimize future campaigns</li>
      </ul>
      
      <h2>Measuring Television Advertising Success</h2>
      <p>Key metrics to evaluate television advertising effectiveness:</p>
      <ul>
        <li>Reach and frequency metrics</li>
        <li>Brand awareness and recall studies</li>
        <li>Website traffic and online engagement</li>
        <li>Sales conversions and revenue impact</li>
        <li>Social media mentions and buzz</li>
        <li>Market share changes</li>
      </ul>
      
      <h2>Television Advertising Best Practices</h2>
      <p>Follow these best practices to maximize your television advertising impact:</p>
      <ul>
        <li>Keep your message clear and focused</li>
        <li>Use strong visuals and compelling storytelling</li>
        <li>Include a clear call-to-action</li>
        <li>Ensure brand consistency across all ads</li>
        <li>Test different creative variations</li>
        <li>Coordinate with other marketing channels</li>
      </ul>
      
      <h2>Regional Television Advertising</h2>
      <p>Regional television channels offer excellent opportunities for local market penetration. In Hyderabad and Telangana, regional channels provide:</p>
      <ul>
        <li>Cost-effective advertising options</li>
        <li>Strong local market connection</li>
        <li>Targeted demographic reach</li>
        <li>Cultural relevance and resonance</li>
      </ul>
      
      <h2>Case Study: Successful Television Campaign</h2>
      <p>A recent television advertising campaign for a local retail chain resulted in a 60% increase in brand awareness, a 40% boost in store foot traffic, and a 25% increase in sales during the campaign period. The campaign effectively reached diverse demographics across Hyderabad and surrounding areas.</p>
      
      <h2>The Future of Television Advertising</h2>
      <p>As television evolves with streaming and digital platforms, advertising opportunities continue to expand. Smart brands are combining traditional television advertising with digital strategies to create comprehensive, multi-channel campaigns that maximize reach and impact.</p>
      
      <h2>Conclusion</h2>
      <p>Television advertising remains a powerful tool for reaching mass audiences and building brand awareness. With strategic planning and creative execution, television advertising can deliver exceptional results and help your brand connect with diverse demographics effectively.</p>
      
      <p>Ready to explore television advertising for your brand? Contact Katyani Media to discuss how we can help you create effective television advertising campaigns that reach your target audience in Hyderabad, Telangana, and beyond.</p>
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
  const post = blogPosts.find(p => p.id === parseInt(id))
  
  if (!post) {
    return {
      title: 'Article Not Found | Katyani Media',
      description: 'The article you are looking for does not exist.',
    }
  }

  return {
    title: `${post.title} | Katyani Media Blog`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, offline marketing, marketing strategies, ${post.title.toLowerCase()}, Katyani Media, Hyderabad marketing, Telangana marketing, advertising blog`,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | Katyani Media Blog`,
      description: post.excerpt,
      url: `https://katyanimedia.com/blog/${post.id}`,
      siteName: 'Katyani Media',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Katyani Media Blog`,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://katyanimedia.com/blog/${post.id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { id } = await params
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="w-full pb-16 bg-black min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-300 mb-4">Article Not Found</h1>
            <p className="text-white mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <FiArrowLeft size={20} />
              <span>Back to Blog</span>
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
            href="/blog"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors mb-6"
          >
            <FiArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-4">
            <span className="bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-300 mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-400 mb-6">
            <span className="flex items-center space-x-1">
              <FiCalendar size={16} />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <FiUser size={16} />
              <span>{post.author}</span>
            </span>
            <span className="flex items-center space-x-1">
              <FiClock size={16} />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-96 mb-8 rounded-lg overflow-hidden border border-white">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-invert max-w-none text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            lineHeight: '1.8',
          }}
        />

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-primary-400 text-sm mb-2">Share this article:</p>
              <div className="flex space-x-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://katyanimedia.com/blog/${post.id}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://katyanimedia.com/blog/${post.id}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://katyanimedia.com/blog/${post.id}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <FiArrowLeft size={16} />
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

