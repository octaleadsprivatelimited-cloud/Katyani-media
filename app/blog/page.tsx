import Image from 'next/image'
import Link from 'next/link'
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest insights, tips, and trends in offline marketing from Katyani Media. Learn about bus advertising, metro ads, corporate events, and marketing strategies in Hyderabad, Telangana. Expert marketing blog for businesses.',
  keywords: 'offline marketing blog, marketing tips Hyderabad, advertising insights Telangana, marketing trends, bus advertising guide, metro advertising tips, marketing strategies blog',
  openGraph: {
    title: 'Blog - Katyani Media | Offline Marketing Insights Hyderabad',
    description: 'Latest insights, tips, and trends in offline marketing from Katyani Media.',
    url: 'https://katyanimedia.com/blog',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/blog',
  },
}

export default function BlogPage() {
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
    },
  ]

  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[600px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Blog - Marketing Insights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              Blog
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Insights, Tips & Trends in Offline Marketing
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-300 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Stay updated with the latest trends, strategies, and insights in offline marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-black border border-white rounded-lg overflow-hidden hover:border-white/80 transition-all duration-300 group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-primary-400 mb-3 space-x-4">
                  <span className="flex items-center space-x-1">
                    <FiCalendar size={14} />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FiUser size={14} />
                    <span>{post.author}</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary-300 mb-2 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-400 text-xs">{post.readTime}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary-400 hover:text-primary-300 transition-colors flex items-center space-x-1 text-sm font-semibold"
                  >
                    <span>Read More</span>
                    <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
